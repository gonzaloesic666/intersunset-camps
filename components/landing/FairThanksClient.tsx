'use client';

import { useEffect } from 'react';
import { trackEvent, setUserData, trackAdsLeadConversion } from '@/lib/analytics';

// Página de gracias de la feria: mide el lead una sola vez (Analytics + conversión de Camps en Ads)
// con datos de primera parte para las conversiones mejoradas.
export default function FairThanksClient() {
  useEffect(() => {
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
      trackEvent('lead', { form_source: 'feria_camps' });
      trackAdsLeadConversion();
    } catch {}
  }, []);
  return null;
}
