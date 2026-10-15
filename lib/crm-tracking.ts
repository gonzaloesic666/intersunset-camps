// Seguimiento de visitas hacia el CRM propio (crm-isc): mismo mecanismo que su
// "tracking-snippet.html" (cookie isc_session_id + POST a /api/track). Solo se activa si
// el visitante ha aceptado las cookies. Así la ficha del contacto muestra fuente de tráfico,
// referrer, primera página, UTM, ciudad y país.
const CRM_BASE = process.env.NEXT_PUBLIC_CRM_URL || 'https://crm-isc.vercel.app';
const COOKIE = 'isc_session_id';

function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[2]) : null;
}

export function getCrmSessionId(): string | null {
  try {
    return readCookie(COOKIE);
  } catch {
    return null;
  }
}

function uuid(): string {
  if (window.crypto && 'randomUUID' in crypto) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

let sent = false;

export function trackCrmVisit() {
  try {
    if (sent || localStorage.getItem('cookie-consent') !== 'accepted') return;
    sent = true;

    let id = readCookie(COOKIE);
    if (!id) {
      id = uuid();
      const exp = new Date(Date.now() + 180 * 864e5).toUTCString();
      document.cookie = `${COOKIE}=${encodeURIComponent(id)}; expires=${exp}; path=/; SameSite=Lax; Secure`;
    }

    const q = new URLSearchParams(window.location.search);
    // Un gclid/gbraid/wbraid indica clic de Google Ads aunque no haya UTM
    const paid = q.get('gclid') || q.get('gbraid') || q.get('wbraid');
    fetch(`${CRM_BASE}/api/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: id,
        url: window.location.href,
        referrer: document.referrer || null,
        utm_source: q.get('utm_source') || (paid ? 'google' : null),
        utm_medium: q.get('utm_medium') || (paid ? 'cpc' : null),
        utm_campaign: q.get('utm_campaign'),
      }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}
