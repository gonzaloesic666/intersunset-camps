import { Calendar, ClipboardList, FileCheck, Plane } from 'lucide-react';

const CALENDLY = 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m';

const steps = [
  {
    num: 1,
    title: 'Reserva tu cita gratuita',
    description: 'El primer paso es sencillo: reserva una cita gratuita con nuestro equipo. En 30 minutos resolvemos todas tus dudas y evaluamos tu perfil sin compromiso.',
    Icon: Calendar,
  },
  {
    num: 2,
    title: 'Te orientamos y preparamos tu candidatura',
    description: 'Preparamos juntos tu perfil para los campamentos: CV en inglés, carta de presentación y cualquier certificación relevante. Te enseñamos a destacar.',
    Icon: ClipboardList,
  },
  {
    num: 3,
    title: 'Entrevistas con campamentos y visado J1',
    description: 'Te presentamos a campamentos que encajen con tu perfil. Una vez aceptado, gestionamos el proceso del visado J1 paso a paso.',
    Icon: FileCheck,
  },
  {
    num: 4,
    title: '¡A Estados Unidos!',
    description: 'Coges el avión con todo resuelto: campamento asignado, visado en regla y soporte de Intersunset Campus durante toda tu estancia.',
    Icon: Plane,
  },
];

export default function HowItWorks() {
  return (
    <section id="proceso" style={{ background: 'var(--gray-50)' }}>
      <div className="section-wrap">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">Proceso</span>
          <h2 className="section-title">Cómo funciona</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '17px' }}>
            Cuatro pasos sencillos para vivir el verano de tu vida.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Desktop connector line */}
          <div
            className="hidden lg:block"
            style={{
              position: 'absolute',
              top: '23px',
              left: 'calc(12.5% + 16px)',
              right: 'calc(12.5% + 16px)',
              height: '1px',
              background: '#DDDDF0',
              zIndex: 0,
            }}
          />

          {steps.map(({ num, title, description, Icon }, i) => (
            <div
              key={num}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Decorative big number */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '72px',
                  fontWeight: 900,
                  color: 'var(--orange)',
                  opacity: 0.12,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              >
                {num}
              </div>

              {/* Small navy circle with step number */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '15px',
                  position: 'relative',
                  zIndex: 2,
                  marginBottom: '24px',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(30,29,72,0.20)',
                }}
              >
                {num}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(227,130,49,0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Icon size={20} style={{ color: 'var(--orange)' }} strokeWidth={1.8} />
              </div>

              <h3 style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '16px', lineHeight: 1.35, marginBottom: '10px' }}>
                {title}
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '14px', lineHeight: 1.75 }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Empieza ahora — Cita gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
