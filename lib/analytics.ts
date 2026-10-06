type EventParams = Record<string, string | number | boolean | undefined>;

// gtag se carga con strategy afterInteractive: si aún no existe, esperamos (máx. 5 s).
function whenGtag(cb: () => void) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') return cb();
  let tries = 0;
  const t = setInterval(() => {
    if (typeof window.gtag === 'function') {
      clearInterval(t);
      cb();
    } else if (++tries > 50) {
      clearInterval(t);
    }
  }, 100);
}

export function trackEvent(name: string, params: EventParams = {}) {
  whenGtag(() => window.gtag('event', name, params));
}

// Enhanced Conversions: gtag hashea (SHA-256) email y teléfono antes de enviarlos.
export function setUserData(data: { email?: string; phone_number?: string }) {
  whenGtag(() => window.gtag('set', 'user_data', data));
}

// Conversión de Google Ads (opcional). Requiere NEXT_PUBLIC_GADS_ID y
// NEXT_PUBLIC_GADS_LEAD_LABEL (etiqueta de conversión del Lead).
export function trackAdsLeadConversion() {
  const id = process.env.NEXT_PUBLIC_GADS_ID;
  const label = process.env.NEXT_PUBLIC_GADS_LEAD_LABEL;
  if (!id || !label) return;
  trackEvent('conversion', { send_to: `${id}/${label}` });
}
