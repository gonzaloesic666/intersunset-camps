'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function CalendarBooked() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem('sem_booking_sent')) return;
      sessionStorage.setItem('sem_booking_sent', '1');
    } catch {}
    trackEvent('calendar_booking');
  }, []);
  return null;
}
