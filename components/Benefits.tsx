'use client';

import { Globe, DollarSign, Briefcase, Plane, Users, Shield } from 'lucide-react';

const benefits = [
  {
    Icon: Globe,
    title: 'Mejora tu inglés viviendo en inglés 24/7',
    description: 'Nada como la inmersión total. Trabajarás, vivirás y te relacionarás en inglés durante toda la temporada. El avance en el idioma es incomparable a cualquier academia.',
  },
  {
    Icon: DollarSign,
    title: 'Salario mínimo 2.100$ + alojamiento incluido',
    description: 'El campamento paga tu sueldo y cubre alojamiento y manutención completa. Sin gastos de vida, la mayor parte del dinero que ganas es ahorro neto.',
  },
  {
    Icon: Briefcase,
    title: 'Experiencia única en tu CV',
    description: 'Trabajar en el extranjero con niños y jóvenes, en inglés, en un entorno multicultural, es exactamente lo que las empresas buscan en perfiles jóvenes. Un diferencial real.',
  },
  {
    Icon: Plane,
    title: 'Viaja por EEUU en tus días libres',
    description: 'Los campamentos dan 30 días para viajar al terminar. Nueva York, Boston, Miami, los parques nacionales... EEUU es enorme y tú estarás allí para explorarlo.',
  },
  {
    Icon: Users,
    title: 'Conoce gente de todo el mundo',
    description: 'Los campamentos americanos son auténticamente internacionales. Crearás amistades con personas de decenas de países que durarán toda la vida.',
  },
  {
    Icon: Shield,
    title: 'Proceso guiado por expertos desde España',
    description: 'No estás solo. Nuestro equipo te acompaña en cada paso: orientación, candidatura, entrevistas, visado J1 y soporte durante toda tu estancia en EEUU.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" style={{ background: 'var(--navy)' }}>
      <div className="section-wrap">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Beneficios</span>
          <h2 className="section-title section-title--white">
            Todo lo que ganas con el programa
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '17px', marginTop: '8px' }}>
            Una experiencia que va mucho más allá de trabajar un verano.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className={`reveal-scale reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(255,255,255,0.09)';
                el.style.borderColor = 'rgba(227,130,49,0.4)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(255,255,255,0.05)';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Icon size={22} color="#fff" strokeWidth={1.8} />
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '17px', lineHeight: 1.35, marginBottom: '12px' }}>
                {title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: '14px', lineHeight: 1.75 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
