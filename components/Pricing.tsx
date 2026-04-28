'use client';

import { CheckCircle } from 'lucide-react';

const CALENDLY = 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m';

const payment1 = [
  'Asegura tu plaza en el programa',
  'Acceso a la plataforma del programa',
  'Te guiamos para crear tu perfil',
  'Preparación para la entrevista con campamentos',
];

const payment2 = [
  'Solo pagas cuando un campamento te acepte',
  'Gestión completa del visado J1',
  'Formulario DS-2019 y tasa SEVIS',
  'Seguro médico durante todo el programa',
  'Soporte 24h durante tu estancia',
  'Orientación previa al viaje',
];

export default function Pricing() {
  return (
    <section id="precio" style={{ background: 'var(--navy)' }}>
      <div className="section-wrap">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Precio</span>
          <h2 className="section-title section-title--white">Precio del programa</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '17px', marginBottom: '20px' }}>
            Un solo programa. Dos pagos sencillos.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '52px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>595€</span>
            <span style={{ color: 'var(--gray-400)', fontSize: '18px' }}>total</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Card 1 — 150€ */}
          <div
            className="reveal-scale reveal-delay-1"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '20px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--orange)',
              marginBottom: '12px',
            }}>
              Primer pago
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontSize: '44px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>150€</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.80)', fontWeight: 700, fontSize: '18px', marginBottom: '28px' }}>
              Reserva tu plaza
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px', flex: 1 }}>
              {payment1.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '1px' }} strokeWidth={2.5} />
                  <span style={{ color: 'rgba(255,255,255,0.70)', fontSize: '14px', lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ justifyContent: 'center' }}
            >
              Empezar con 150€
            </a>
          </div>

          {/* Card 2 — 445€ DESTACADA */}
          <div
            className="reveal-scale reveal-delay-2"
            style={{
              background: 'var(--orange)',
              borderRadius: '20px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 60px rgba(227,130,49,0.30)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle inner glow */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.20)',
              borderRadius: '100px',
              padding: '5px 14px',
              marginBottom: '16px',
              width: 'fit-content',
            }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px' }}>
                ✦ Incluye visado J1
              </span>
            </div>

            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '12px',
            }}>
              Segundo pago
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontSize: '44px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>445€</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.90)', fontWeight: 700, fontSize: '18px', marginBottom: '28px' }}>
              Cuando tengas contrato
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px', flex: 1 }}>
              {payment2.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle size={18} style={{ color: '#fff', flexShrink: 0, marginTop: '1px' }} strokeWidth={2.5} />
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '10px',
                padding: '12px 16px',
                marginBottom: '24px',
              }}
            >
              <p style={{ color: 'rgba(255,255,255,0.90)', fontSize: '13px', lineHeight: 1.6 }}>
                El segundo pago solo se realiza cuando un campamento te haya ofrecido contrato oficial.
              </p>
            </div>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                color: 'var(--orange)',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.90')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
            >
              Reservar plaza ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
