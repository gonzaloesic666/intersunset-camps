'use client';

import { useEffect, useState } from 'react';
import { campaign } from '@/lib/campaign';

// Barra CTA inferior (solo móvil). Se oculta cuando hay un formulario en pantalla
// para no tapar los campos.
export default function StickyCta() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const targets = document.querySelectorAll('#formulario, #formulario-final');
    const inView = new Set<Element>();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => (en.isIntersecting ? inView.add(en.target) : inView.delete(en.target)));
      setVisible(inView.size === 0);
    });
    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`sem-sticky${visible ? '' : ' sem-sticky--hidden'}`} aria-hidden={!visible}>
      <span className="sem-sticky__label">Monitor Camp USA {campaign.year}</span>
      <a
        href="#formulario"
        className="sem-btn sem-btn--sm"
        data-cta="sticky_mobile"
        tabIndex={visible ? 0 : -1}
      >
        COMPROBAR REQUISITOS
      </a>
    </div>
  );
}
