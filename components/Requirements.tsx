'use client';

import { User, MessageCircle, CalendarCheck, Star, Zap, MapPin } from 'lucide-react';

const CALENDLY = 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m';

const requirements = [
  {
    Icon: User,
    title: 'Edad entre 18 y 30 años',
    description: 'Debes tener entre 18 y 30 años antes del 15 de mayo de 2027.',
  },
  {
    Icon: MessageCircle,
    title: 'Nivel de inglés conversacional',
    description: 'Necesitas poder comunicarte en inglés con niños y compañeros. No hace falta título oficial, lo evaluamos contigo en la cita.',
  },
  {
    Icon: CalendarCheck,
    title: 'Disponibilidad mayo/junio – agosto',
    description: 'Debes poder viajar a EEUU entre finales de mayo y mediados de junio, y quedarte hasta finales de agosto.',
  },
  {
    Icon: Star,
    title: 'Experiencia o habilidades con niños/jóvenes',
    description: 'Se valora haber trabajado con niños o tener habilidades en deporte, arte, música, natación, senderismo u otras actividades.',
  },
  {
    Icon: Zap,
    title: 'Perfil activo y entusiasta',
    description: 'Buscamos personas responsables, con energía y ganas de disfrutar y hacer disfrutar a los demás.',
  },
  {
    Icon: MapPin,
    title: 'Residencia en España',
    description: 'Debes tener nacionalidad española o residir en España para tramitar el visado J1 a través de nuestra agencia.',
  },
];

export default function Requirements() {
  return (
    <section style={{ background: '#fff' }}>
      <div className="section-wrap">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Requisitos</span>
          <h2 className="section-title">¿Cumples el perfil?</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '17px' }}>
            Los requisitos son sencillos. Si tienes ganas, nosotros hacemos el resto.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {requirements.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className={`reveal-scale reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                background: '#fff',
                borderLeft: '3px solid var(--orange)',
                borderRadius: '0 12px 12px 0',
                padding: '24px',
                boxShadow: '0 2px 16px rgba(30,29,72,0.06)',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 6px 28px rgba(30,29,72,0.12)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 2px 16px rgba(30,29,72,0.06)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <Icon size={22} style={{ color: 'var(--orange)', marginBottom: '14px' }} strokeWidth={1.8} />
              <h3 style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '16px', marginBottom: '8px', lineHeight: 1.3 }}>
                {title}
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '14px', lineHeight: 1.70 }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div
          style={{
            marginTop: '40px',
            background: 'linear-gradient(135deg, var(--navy), var(--navy-mid))',
            borderRadius: '16px',
            padding: '28px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.6, maxWidth: '600px' }}>
            ¿Tienes dudas sobre si cumples los requisitos?{' '}
            <span style={{ color: '#fff', fontWeight: 700 }}>
              Reserva tu cita gratuita y lo evaluamos juntos, sin compromiso.
            </span>
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flexShrink: 0 }}
          >
            Reservar cita gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
