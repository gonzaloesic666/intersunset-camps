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

// Conversión de Google Ads "Lead Monitor Camp USA 2027". Los IDs son públicos (van en el
// HTML de cualquier web con Ads); se pueden sobrescribir con NEXT_PUBLIC_GADS_ID y
// NEXT_PUBLIC_GADS_LEAD_LABEL.
export const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID || 'AW-16510639099';
const ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GADS_LEAD_LABEL || '6sIJCM2lzJMdEPu38cA9';

export function trackAdsLeadConversion() {
  trackEvent('conversion', { send_to: `${ADS_ID}/${ADS_LEAD_LABEL}` });
}
