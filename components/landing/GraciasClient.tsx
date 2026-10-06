'use client';

import { useEffect, useState } from 'react';
import { campaign } from '@/lib/campaign';
import { withAttribution } from '@/lib/attribution';
import { trackEvent, setUserData, trackAdsLeadConversion } from '@/lib/analytics';

// Dispara la conversión "lead" (una sola vez) y construye el enlace de
// Calendly conservando las UTM.
export default function GraciasClient() {
  const [calendly, setCalendly] = useState(campaign.calendlyUrl);

  useEffect(() => {
    setCalendly(withAttribution(campaign.calendlyUrl));
    try {
      const raw = sessionStorage.getItem('sem_lead_pending');
      if (!raw) return;
      sessionStorage.removeItem('sem_lead_pending'); // evita duplicar en recargas
      const { email, phone } = JSON.parse(raw) as { email?: string; phone?: string };
      const digits = phone ? phone.replace(/[^\d+]/g, '') : '';
      setUserData({
        email,
        phone_number: digits ? (digits.startsWith('+') ? digits : `+34${digits}`) : undefined,
      });
      trackEvent('lead', { form_source: 'landing_sem' });
      trackAdsLeadConversion();
    } catch {}
  }, []);

  return (
    <a
      href={calendly}
      target="_blank"
      rel="noopener noreferrer"
      className="sem-btn sem-btn--block"
      data-location="gracias"
    >
      RESERVAR MI LLAMADA GRATUITA
    </a>
  );
}
