import { trackEvent } from '@/lib/analytics';

// Ventana emergente de Calendly (widget oficial) en lugar de llevar a otra página.
// Los recursos (CSS + JS) se cargan solo cuando hacen falta o cuando la persona interactúa,
// para no penalizar la velocidad de carga de la landing.
const CSS = 'https://assets.calendly.com/assets/external/widget.css';
const JS = 'https://assets.calendly.com/assets/external/widget.js';

type CalendlyGlobal = { initPopupWidget: (o: { url: string }) => void };
declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

let loading: Promise<void> | null = null;

export function loadCalendly(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'));
  if (window.Calendly) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[href="${CSS}"]`)) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = CSS;
      document.head.appendChild(l);
    }
    const s = document.createElement('script');
    s.src = JS;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      loading = null;
      reject(new Error('No se pudo cargar Calendly'));
    };
    document.head.appendChild(s);
  });
  return loading;
}

// Abre la ventana emergente. Devuelve false si no se pudo cargar (el llamador navega a la URL).
export async function openCalendlyPopup(url: string): Promise<boolean> {
  try {
    await loadCalendly();
    if (!window.Calendly) return false;
    window.Calendly.initPopupWidget({ url });
    return true;
  } catch {
    return false;
  }
}

// Calendly avisa con un mensaje cuando alguien confirma la cita: la medimos como calendar_booking.
// Misma clave de control que la página /llamada-reservada para no contarla dos veces.
let listening = false;
export function listenCalendlyBookings() {
  if (typeof window === 'undefined' || listening) return;
  listening = true;
  window.addEventListener('message', e => {
    if (e.origin !== 'https://calendly.com') return;
    const data = e.data as { event?: string } | undefined;
    if (data?.event !== 'calendly.event_scheduled') return;
    try {
      if (sessionStorage.getItem('sem_booking_sent')) return;
      sessionStorage.setItem('sem_booking_sent', '1');
    } catch {}
    trackEvent('calendar_booking', { source: 'popup' });
  });
}
