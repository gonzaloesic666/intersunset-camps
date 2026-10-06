'use client';

import { useEffect, useState } from 'react';
import { campaign } from '@/lib/campaign';
import { withAttribution } from '@/lib/attribution';

// Enlace a Calendly que conserva las UTM de campaña. El clic se mide como
// calendar_click (con la ubicación) desde LandingTracker.
export default function CalendlyLink({
  location,
  className = 'sem-link',
  children = 'Prefiero reservar una llamada gratuita',
}: {
  location: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [href, setHref] = useState(campaign.calendlyUrl);
  useEffect(() => setHref(withAttribution(campaign.calendlyUrl)), []);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} data-location={location}>
      {children}
    </a>
  );
}
