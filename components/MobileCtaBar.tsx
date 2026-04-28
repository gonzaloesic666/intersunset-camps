'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

const CALENDLY = 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m';

export default function MobileCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const pastThreshold = scrollY > 300;
      const nearBottom = scrollY + windowHeight > docHeight - 200;

      setIsVisible(pastThreshold && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="md:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9990,
        background: '#0F0E2E',
        borderTop: '2px solid #E38231',
        padding: '12px 16px',
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.30)',
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        gap: '10px',
      }}
    >
      {/* Llamar ahora */}
      <a
        href="tel:+34919618440"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '7px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.20)',
          color: '#fff',
          borderRadius: '10px',
          padding: '14px',
          fontSize: '14px',
          fontWeight: 600,
          textDecoration: 'none',
          fontFamily: 'var(--font-montserrat), sans-serif',
        }}
      >
        <Phone size={16} strokeWidth={2} />
        Llamar ahora
      </a>

      {/* Reservar cita */}
      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '7px',
          background: '#E38231',
          color: '#fff',
          borderRadius: '10px',
          padding: '14px',
          fontSize: '14px',
          fontWeight: 700,
          textDecoration: 'none',
          fontFamily: 'var(--font-montserrat), sans-serif',
        }}
      >
        <Calendar size={16} strokeWidth={2} />
        Reservar cita gratis
      </a>
    </div>
  );
}
