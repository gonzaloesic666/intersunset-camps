import Image from 'next/image';

const testimonials = [
  {
    photo: '/testimonio-elisabeth.webp',
    name: 'Elisabeth M.',
    altText: 'Elisabeth, monitora española en Lou Henry Hoover Camp USA',
    procedencia: 'Madrid',
    camp: 'Lou Henry Hoover Camp · Verano 2024',
    text: 'Nunca pensé que trabajar en un campamento americano fuera tan increíble. En Lou Henry Hoover Camp viví una experiencia que cambió mi forma de ver el mundo. Mi inglés mejoró una barbaridad y los niños con los que trabajé me enseñaron más a mí que yo a ellos. Intersunset me acompañó en cada paso sin que me sintiera sola en ningún momento.',
  },
  {
    photo: '/testimonio-eric.webp',
    name: 'Eric G.',
    altText: 'Eric, monitor español en Greenwoods Camp Maine USA',
    procedencia: 'Barcelona',
    camp: 'Greenwoods Camp · Verano 2024',
    text: 'Greenwoods Camp superó todas mis expectativas. El ambiente junto al lago, los niños, el equipo internacional... es algo que no puedes entender hasta que lo vives. Volví con más de 1.800€ ahorrados, con un inglés fluido y con amigos de por vida. El proceso con Intersunset fue muy sencillo, me prepararon muy bien para la entrevista.',
  },
  {
    photo: '/testimonio-maria.webp',
    name: 'María S.',
    altText: 'María, monitora española en Camp Tuckaho New Hampshire USA',
    procedencia: 'Valencia',
    camp: 'Camp Tuckaho · Verano 2023',
    text: 'Tenía dudas antes de dar el paso pero desde la primera llamada con Intersunset me quedó todo clarísimo. Camp Tuckaho fue alucinante: hice amigos de más de 15 países, trabajé en actividades que me encantan y viajé tres semanas por EEUU al terminar. Una experiencia que recomiendo a todo el mundo.',
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E38231">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" style={{ background: 'var(--gray-50)' }}>
      <div className="section-wrap">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">Testimonios</span>
          <h2 className="section-title">Lo que dicen nuestros participantes</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '17px' }}>
            Más de mil españoles ya han vivido la experiencia. Aquí cuentan cómo fue.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ photo, name, altText, procedencia, camp, text }, i) => (
            <div
              key={name}
              className={`reveal-scale reveal-delay-${Math.min(i + 1, 3)}`}
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 4px 24px rgba(30,29,72,0.08)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative quote */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '20px',
                  fontSize: '80px',
                  fontWeight: 900,
                  color: 'var(--orange)',
                  opacity: 0.10,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  fontFamily: 'Georgia, serif',
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <Stars />

              {/* Text */}
              <p
                style={{
                  color: 'var(--gray-600)',
                  fontSize: '15px',
                  lineHeight: 1.80,
                  fontStyle: 'italic',
                  marginTop: '16px',
                  flex: 1,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                &ldquo;{text}&rdquo;
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: '#F0F0F8', margin: '24px 0' }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {/* Photo circular */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                    border: '3px solid var(--orange)',
                  }}
                >
                  <Image
                    src={photo}
                    alt={altText}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 80px, 80px"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>

                <div>
                  <p style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '15px', marginBottom: '2px' }}>
                    {name}
                  </p>
                  <p style={{ color: 'var(--gray-400)', fontSize: '12px', marginBottom: '3px' }}>
                    {procedencia}
                  </p>
                  <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 600 }}>
                    {camp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
