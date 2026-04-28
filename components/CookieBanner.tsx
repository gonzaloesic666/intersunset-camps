'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setMounted(true);
      // Small delay so the slide-up transition fires
      const t = setTimeout(() => setVisible(true), 120);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (value: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', value);
    setHiding(true);
    setTimeout(() => setMounted(false), 350);
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9998,
        background: '#0F0E2E',
        borderTop: '2px solid #E38231',
        padding: '20px 24px',
        transform: visible && !hiding ? 'translateY(0)' : 'translateY(100%)',
        opacity: hiding ? 0 : 1,
        transition: 'transform 0.32s ease, opacity 0.28s ease',
        fontFamily: 'var(--font-montserrat), sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Text */}
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '14px',
            lineHeight: 1.65,
            maxWidth: '640px',
            margin: 0,
          }}
        >
          Utilizamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptar
          todas las cookies o configurar tus preferencias. Consulta nuestra{' '}
          <a
            href="https://intersunsetcampus.com/politica-de-privacidad/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#E38231', textDecoration: 'underline' }}
          >
            política de privacidad
          </a>
          .
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', flexShrink: 0 }}>
          <button
            onClick={() => dismiss('rejected')}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = '#fff')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)')}
          >
            Rechazar no esenciales
          </button>

          <button
            onClick={() => dismiss('accepted')}
            style={{
              background: '#E38231',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#cc7228')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#E38231')}
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
