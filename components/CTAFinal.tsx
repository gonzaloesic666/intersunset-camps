'use client';

import { Calendar, Phone } from 'lucide-react';

const CALENDLY = 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m';

export default function CTAFinal() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #E38231 0%, #C96A1A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle dot pattern */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />
      {/* Glow accents */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '280px',
          height: '280px',
          background: 'rgba(255,255,255,0.10)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-40px',
          width: '220px',
          height: '220px',
          background: 'rgba(0,0,0,0.08)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.18)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '28px',
          }}
        >
          <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px' }}>
            Plazas limitadas · Verano 2027
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          ¿Listo para vivir el verano de tu vida?
        </h2>
        <p
          style={{
            fontSize: '19px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: '0 auto 44px',
          }}
        >
          Plazas limitadas para verano 2027. Reserva tu cita gratuita hoy y empieza el proceso
          con el equipo de Intersunset Campus.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff',
              color: 'var(--orange)',
              padding: '16px 36px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.15s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.opacity = '0.93';
              el.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }}
          >
            <Calendar size={18} strokeWidth={2} />
            Reserva tu cita gratuita
          </a>

          <a
            href="tel:+34919618440"
            className="btn-secondary"
            style={{ padding: '16px 36px', fontSize: '16px' }}
          >
            <Phone size={18} strokeWidth={2} />
            Llámanos ahora
          </a>
        </div>

      </div>
    </section>
  );
}
