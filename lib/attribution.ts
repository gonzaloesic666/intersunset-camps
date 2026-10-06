// Captura y persistencia de parámetros de campaña (Google Ads / UTM).
export const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
] as const;

export type Attribution = Partial<Record<(typeof ATTRIBUTION_KEYS)[number], string>> & {
  landing_url?: string;
  captured_at?: string;
};

const STORAGE_KEY = 'sem_attribution';
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

export function captureAttribution(): Attribution {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    ATTRIBUTION_KEYS.forEach(k => {
      const v = params.get(k);
      if (v) found[k] = v.slice(0, 200);
    });
    if (Object.keys(found).length > 0) {
      const data: Attribution = {
        ...found,
        landing_url: window.location.origin + window.location.pathname,
        captured_at: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return data;
    }
  } catch {}
  return getAttribution();
}

export function getAttribution(): Attribution {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw) as Attribution;
    if (data.captured_at && Date.now() - new Date(data.captured_at).getTime() > MAX_AGE_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return data;
  } catch {
    return {};
  }
}

// Añade los parámetros de campaña a una URL externa (p. ej. Calendly).
export function withAttribution(url: string): string {
  const a = getAttribution();
  const u = new URL(url);
  ATTRIBUTION_KEYS.forEach(k => {
    const v = a[k];
    if (v && k.startsWith('utm_')) u.searchParams.set(k, v);
  });
  return u.toString();
}
