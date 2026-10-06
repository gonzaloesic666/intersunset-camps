'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { captureAttribution } from '@/lib/attribution';

// Tracking de la landing SEM: landing_view, cta_click, form_start,
// whatsapp_click y calendar_click (delegados, sin tocar cada botón).
export default function LandingTracker() {
  useEffect(() => {
    const attr = captureAttribution();
    trackEvent('landing_view', {
      page: window.location.pathname,
      utm_source: attr.utm_source,
      utm_medium: attr.utm_medium,
      utm_campaign: attr.utm_campaign,
      has_gclid: Boolean(attr.gclid),
    });

    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      const cta = t?.closest?.('[data-cta]');
      if (cta) trackEvent('cta_click', { cta_location: cta.getAttribute('data-cta') || '' });
      const a = t?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const location = a.getAttribute('data-location') || '';
      if (href.includes('wa.me')) trackEvent('whatsapp_click', { location });
      else if (href.includes('calendly.com')) trackEvent('calendar_click', { location });
    };

    const started = new Set<string>();
    const onFocus = (e: FocusEvent) => {
      const form = (e.target as Element | null)?.closest?.('form[data-sem-form]');
      const id = form?.getAttribute('data-sem-form');
      if (id && !started.has(id)) {
        started.add(id);
        trackEvent('form_start', { form: id });
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('focusin', onFocus);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('focusin', onFocus);
    };
  }, []);

  return null;
}
