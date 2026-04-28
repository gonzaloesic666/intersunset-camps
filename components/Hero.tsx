import Image from 'next/image';
import { CheckCircle, Calendar } from 'lucide-react';

const CALENDLY = 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m';

const badges = [
  'Visado J1 gestionado',
  'Salario mínimo 2.100$',
  '30 días para viajar por EEUU',
];

const cardStats = [
  { value: '2.100$',    label: 'Salario mínimo garantizado' },
  { value: '9 semanas', label: 'En un American Camp USA' },
  { value: '30 días',   label: 'Para viajar por Estados Unidos' },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '72px',
        paddingBottom: 0,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 1 — Background photo */}
      <Image
        src="/hero-camp.webp"
        alt="Monitores españoles trabajando en American Camp USA con niños"
        fill
        priority
        quality={90}
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
      />

      {/* 2 — Dark overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(135deg, rgba(15,14,46,0.88) 0%, rgba(30,29,72,0.82) 40%, rgba(30,29,72,0.65) 100%)',
        }}
      />

      {/* 3 — Content */}
      <div
        className="section-wrap"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          paddingTop: '48px',
          paddingBottom: '64px',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ─────────────────────────────────── */}
          <div>
            {/* Badge */}
            <div
              className="fade-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(227,130,49,0.15)',
                border: '1px solid rgba(227,130,49,0.3)',
                borderRadius: '100px',
                padding: '8px 16px',
                marginBottom: '28px',
              }}
            >
              <span style={{ color: 'var(--orange-light)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.4px' }}>
                Convocatoria 2027 abierta
              </span>
            </div>

            {/* Headline */}
            <h1
              className="fade-up d1"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.08,
                marginBottom: '24px',
              }}
            >
              Trabaja este verano<br />
              en un{' '}
              <span style={{ color: 'var(--orange)' }}>American Camp</span>
            </h1>

            {/* Subheadline */}
            <p
              className="fade-up d2"
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.70)',
                lineHeight: 1.65,
                maxWidth: '480px',
                marginBottom: '36px',
              }}
            >
              Mejora tu inglés, gana dinero y vive una experiencia única en Estados Unidos.
              Agencia especializada en Camp Monitor USA en España.
            </p>

            {/* Trust badges */}
            <div
              className="fade-up d3"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px 0',
                marginBottom: '40px',
              }}
            >
              {badges.map((badge, i) => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && (
                    <span
                      style={{
                        width: '1px',
                        height: '16px',
                        background: 'rgba(255,255,255,0.2)',
                        margin: '0 16px',
                        display: 'inline-block',
                      }}
                    />
                  )}
                  <CheckCircle size={15} style={{ color: 'var(--orange)', marginRight: '7px', flexShrink: 0 }} strokeWidth={2.5} />
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: 600 }}>{badge}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="fade-up d4" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Calendar size={17} strokeWidth={2} />
                Reserva tu cita gratuita
              </a>
              <a href="#contacto" className="btn-secondary">
                Pide información
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Floating card ────────────────── */}
          <div className="fade-up d4">
            <div
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '36px 32px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.30)',
              }}
            >
              {/* Stats */}
              {cardStats.map(({ value, label }, i) => (
                <div key={label}>
                  {i > 0 && (
                    <div
                      style={{
                        height: '1px',
                        background: 'rgba(255,255,255,0.10)',
                        margin: '24px 0',
                      }}
                    />
                  )}
                  <div>
                    <div
                      style={{
                        fontSize: 'clamp(32px, 4vw, 44px)',
                        fontWeight: 900,
                        color: '#fff',
                        letterSpacing: '-0.5px',
                        lineHeight: 1.1,
                        marginBottom: '6px',
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.60)',
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA inside card */}
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: '32px',
                  fontSize: '15px',
                }}
              >
                Reserva tu cita gratuita →
              </a>
              <p
                style={{
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.40)',
                  fontSize: '12px',
                  marginTop: '10px',
                  fontWeight: 500,
                }}
              >
                Cita gratuita · Sin compromiso
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
