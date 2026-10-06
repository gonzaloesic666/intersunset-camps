import Image from 'next/image';
import { campaign as c, whatsappUrl } from '@/lib/campaign';
import LeadForm from '@/components/landing/LeadForm';
import StickyCta from '@/components/landing/StickyCta';
import LandingTracker from '@/components/landing/LandingTracker';
import LandingFooter from '@/components/landing/LandingFooter';
import CalendlyLink from '@/components/landing/CalendlyLink';
import UsFlag from '@/components/landing/UsFlag';

const CTA_TEXT = 'COMPROBAR SI CUMPLES LOS REQUISITOS';

function Ph({ src, alt, ratio = '4 / 3', sizes = '(min-width: 900px) 33vw, 100vw' }: { src: string; alt: string; ratio?: string; sizes?: string }) {
  return (
    <div className="sem-ph" style={{ aspectRatio: ratio }}>
      <Image src={`/landing/${src}.webp`} alt={alt} fill sizes={sizes} quality={70} loading="lazy" />
    </div>
  );
}

function Cta({ where }: { where: string }) {
  return (
    <a href="#formulario" className="sem-btn sem-btn--block" data-cta={where}>
      {CTA_TEXT}
    </a>
  );
}

const benefits = [
  { t: 'Gana dinero', d: `Salario mínimo de ${c.salary} por la temporada de ${c.duration}.` },
  { t: 'Alojamiento incluido', d: 'Vivirás dentro o asociado al campamento durante el programa.' },
  { t: 'Comida incluida', d: 'El campamento cubre tu manutención durante la temporada.' },
  { t: 'Mejora tu inglés', d: 'Trabajarás y convivirás en inglés durante toda la experiencia.' },
  { t: 'Experiencia internacional', d: 'Compartirás la experiencia con participantes y trabajadores de diferentes países.' },
  { t: 'Viaja por EEUU', d: `Al terminar el campamento dispondrás de hasta ${c.travelDays} días para viajar por Estados Unidos.` },
];

const activities = [
  'Natación', 'Fútbol', 'Baloncesto', 'Tenis', 'Escalada', 'Senderismo', 'Kayak',
  'Música', 'Teatro', 'Danza', 'Arte', 'Fotografía', 'Cocina', 'Tecnología',
];

const included = [
  `Puesto como monitor durante ${c.duration}`,
  `Salario mínimo de ${c.salary}`,
  'Alojamiento',
  'Comida',
  'Gestión del visado J-1',
  'Formulario DS-2019',
  'Tasa SEVIS cuando corresponda según las condiciones del programa/sponsor',
  'Seguro médico durante el periodo correspondiente',
  'Soporte de emergencia',
  'Orientación previa al viaje',
  `${c.travelDays} días para viajar por Estados Unidos después del campamento`,
];

const requirements = [
  { t: 'Edad', d: `Tener entre ${c.ageMin} y ${c.ageMax} años según las condiciones del programa para ${c.year}.` },
  { t: 'Inglés', d: 'Necesitas un nivel conversacional suficiente para comunicarte con niños y compañeros.' },
  { t: 'Disponibilidad', d: `Poder viajar a EEUU ${c.travelWindow} y permanecer aproximadamente hasta ${c.returnWindow}, según el campamento.` },
  { t: 'Experiencia o habilidades', d: 'Se valora experiencia con niños y jóvenes o habilidades específicas en deportes, arte, música, actividades, naturaleza, etc.' },
  { t: 'Perfil personal', d: 'Personas responsables, activas, entusiastas y capaces de trabajar con niños y jóvenes.' },
  { t: 'Residencia', d: 'Nacionalidad española o residencia en España, según las condiciones del programa.' },
];

const steps = [
  { t: 'Comprobamos tu perfil', d: 'Evaluamos gratuitamente si cumples los requisitos.' },
  { t: 'Reservas tu plaza', d: `Primer pago de ${c.firstPayment}.` },
  { t: 'Preparamos tu candidatura', d: 'Creamos y revisamos tu perfil, CV, presentación y documentación.' },
  { t: 'Entrevistas con campamentos', d: 'Te ayudamos a prepararte para las entrevistas.' },
  { t: 'Contrato + proceso J-1', d: 'Cuando un campamento te acepta, avanzamos con la documentación y el visado.' },
  { t: '¡Nos vamos a EEUU!', d: 'Viajas a tu American Camp y cuentas con el soporte de Intersunset Campus durante el programa.' },
];

const testimonials = [
  {
    photo: '/testimonio-elisabeth.webp',
    alt: 'Elisabeth, monitora española en Lou Henry Hoover Camp',
    name: 'Elisabeth M.',
    camp: 'Lou Henry Hoover Camp · Verano 2024',
    text: 'Nunca pensé que trabajar en un campamento americano fuera tan increíble. En Lou Henry Hoover Camp viví una experiencia que cambió mi forma de ver el mundo. Mi inglés mejoró una barbaridad y los niños con los que trabajé me enseñaron más a mí que yo a ellos. Intersunset me acompañó en cada paso sin que me sintiera sola en ningún momento.',
  },
  {
    photo: '/testimonio-eric.webp',
    alt: 'Eric, monitor español en Greenwoods Camp',
    name: 'Eric G.',
    camp: 'Greenwoods Camp · Verano 2024',
    text: 'Greenwoods Camp superó todas mis expectativas. El ambiente junto al lago, los niños, el equipo internacional... es algo que no puedes entender hasta que lo vives. Volví con más de 1.800€ ahorrados, con un inglés fluido y con amigos de por vida. El proceso con Intersunset fue muy sencillo, me prepararon muy bien para la entrevista.',
  },
  {
    photo: '/testimonio-maria.webp',
    alt: 'María, monitora española en Camp Tuckaho',
    name: 'María S.',
    camp: 'Camp Tuckaho · Verano 2023',
    text: 'Tenía dudas antes de dar el paso pero desde la primera llamada con Intersunset me quedó todo clarísimo. Camp Tuckaho fue alucinante: hice amigos de más de 15 países, trabajé en actividades que me encantan y viajé tres semanas por EEUU al terminar. Una experiencia que recomiendo a todo el mundo.',
  },
];

const objections = [
  ['“Mi inglés no es perfecto”', 'No necesitas hablar como un nativo. Necesitas poder comunicarte en inglés con niños y compañeros. Evaluamos tu perfil antes de comenzar.'],
  ['“No tengo experiencia como monitor”', 'No es necesario haber trabajado anteriormente como monitor profesional. Tus habilidades, experiencia con niños y especialidades pueden ser relevantes para distintos puestos.'],
  ['“Voy solo”', 'Muchos participantes empiezan el proceso solos. En los campamentos convivirás con personal y participantes internacionales.'],
  ['“Quiero ir con mis amigos”', 'Puedes indicarlo desde el principio y trataremos de coordinar las opciones, aunque la colocación conjunta no puede garantizarse y depende de plazas y perfiles.'],
  ['“¿Y si me deniegan el visado?”', 'Te acompañamos durante el proceso y te ayudamos con la preparación y documentación. Cualquier caso de denegación debe tratarse según las condiciones aplicables al programa y al sponsor.'],
];

const faqs = [
  ['¿Cuánto cuesta el programa?', `El programa cuesta ${c.priceTotal} en total: ${c.firstPayment} al comenzar el proceso y ${c.secondPayment} cuando un campamento te ofrezca un contrato oficial. Los gastos externos (vuelos, tasas oficiales, etc.) no están incluidos.`],
  ['¿Cuánto dinero voy a ganar?', `El salario mínimo es de ${c.salary} por la temporada (${c.duration}). Además, alojamiento y comida están incluidos durante tu estancia. Algunos campamentos pueden pagar más según el perfil.`],
  ['¿Qué nivel de inglés necesito?', 'Un nivel conversacional suficiente para comunicarte con niños y compañeros. No hace falta hablar como un nativo.'],
  ['¿Puedo ir con amigos?', 'Puedes indicarlo desde el principio y trataremos de coordinar las opciones, pero la colocación conjunta no puede garantizarse: depende de plazas y perfiles.'],
  ['¿Qué pasa si no consigo visado?', 'Te acompañamos y ayudamos con la preparación y la documentación, pero la decisión corresponde a las autoridades consulares. Cualquier caso se trata según las condiciones del programa y del sponsor.'],
  ['¿Cuándo debo empezar?', `Cuanto antes mejor: los campamentos van cubriendo sus plazas a lo largo de la temporada de selección. La convocatoria ${c.year} está abierta; las plazas están sujetas a disponibilidad de campamentos y programa.`],
  ['¿Qué incluye exactamente?', `Puesto como monitor, salario mínimo de ${c.salary}, alojamiento, comida, gestión del visado J-1, formulario DS-2019, seguro médico, soporte de emergencia, orientación previa y ${c.travelDays} días para viajar al terminar. Consulta la lista completa más arriba.`],
  ['¿Qué gastos tengo que pagar aparte?', 'Vuelos, la tarifa oficial de solicitud/entrevista de visado cuando corresponda, el certificado de antecedentes penales y tus gastos personales. Los importes externos son orientativos: consulta las tarifas oficiales vigentes.'],
  ['¿Qué tipo de actividades puedo hacer?', 'Depende de tu perfil y del campamento: deportes, arte, música, naturaleza, aventura o acompañamiento de grupos de campistas.'],
  ['¿Puedo participar si no he sido monitor antes?', 'Sí. No es necesario haber trabajado como monitor profesional; se valoran la experiencia con niños y tus habilidades.'],
  ['¿Cuánto dura el programa?', `La temporada de trabajo dura ${c.duration}, más hasta ${c.travelDays} días para viajar por EEUU al terminar.`],
  ['¿Cuántos días puedo viajar después del campamento?', `Hasta ${c.travelDays} días, una vez finalizado el programa.`],
] as const;

export default function SemLanding() {
  return (
    <>
      <LandingTracker />
      <main>
        {/* 1 · HERO */}
        <header className="sem-hero">
          <div className="sem-hero__bg" aria-hidden="true">
            <Image src="/hero-camp.webp" alt="" fill priority sizes="100vw" quality={60} />
          </div>
          <div className="sem-wrap">
            <div className="sem-brand">
              <Image src="/logo-transparent.png" alt="Intersunset Campus" width={34} height={34} priority />
              <strong style={{ fontFamily: 'var(--font-montserrat)', fontSize: 15 }}>Intersunset Campus</strong>
            </div>
            <div className="sem-hero__body">
              <span className="sem-tag">MONITOR CAMP USA {c.year} <UsFlag height={13} /></span>
              <h1>Trabaja este verano en un campamento americano</h1>
              <p className="sem-hero__text">
                Gana al menos {c.salary}, mejora tu inglés, vive {c.durationBetween} en un American
                Camp y disfruta de hasta {c.travelDays} días para viajar por Estados Unidos.
              </p>
              <div className="sem-chips">
                <div className="sem-chip sem-chip--big">
                  <strong>{c.salary}</strong>mínimo de salario
                </div>
                <div className="sem-chip"><strong>+</strong>Alojamiento y comida incluidos</div>
                <div className="sem-chip"><strong>+</strong>Visado J-1 gestionado</div>
                <div className="sem-chip"><strong>+</strong>{c.travelDays} días para viajar</div>
              </div>
              <p className="sem-price-line">
                Programa desde <strong>{c.priceTotal}</strong>
                <span>{c.firstPayment} al comenzar + {c.secondPayment} cuando un campamento te contrate</span>
              </p>
              <div className="sem-hero__cta">
                <Cta where="hero" />
                <p className="sem-microcopy">Evaluamos tu perfil gratuitamente · Sin compromiso</p>
                <p className="sem-alt-link">
                  ¿Prefieres hablar ya?{' '}
                  <CalendlyLink location="hero" className="sem-link sem-link--light">
                    Reserva una llamada gratuita
                  </CalendlyLink>
                </p>
              </div>
              <p className="sem-meta">{c.ageRange} años · España · {c.season}</p>
            </div>
          </div>
        </header>

        {/* 2 · TRUST STRIP */}
        <section className="sem-trust" aria-label="Resumen del programa">
          <div className="sem-wrap" style={{ padding: 0 }}>
            <ul>
              <li>Programa J-1</li>
              <li>{c.salary} mínimo</li>
              <li>{c.durationShort}</li>
              <li>Alojamiento incluido</li>
              <li>{c.travelDays} días para viajar</li>
            </ul>
          </div>
        </section>

        {/* 3 · CAPTACIÓN TEMPRANA */}
        <section id="formulario" className="sem-soft">
          <div className="sem-wrap sem-early">
            <div style={{ marginBottom: 24 }}>
              <span className="sem-eyebrow">Evaluación gratuita</span>
              <h2 className="sem-h2">¿Quieres saber si puedes participar?</h2>
              <p className="sem-lead">
                Déjanos tus datos y revisamos tu perfil para comprobar si encajas en el programa Monitor
                Camp USA {c.year}.
              </p>
            </div>
            <div className="sem-formcard">
              <LeadForm id="formulario" variant="short" />
            </div>
          </div>
        </section>

        {/* 4 · QUÉ ES */}
        <section>
          <div className="sem-wrap">
            <div className="sem-split sem-split--center">
              <div>
                <span className="sem-eyebrow">El programa</span>
                <h2 className="sem-h2">Trabaja en un American Camp este verano</h2>
                <p className="sem-lead">
                  Durante {c.durationBetween} vivirás y trabajarás en un campamento de verano en Estados
                  Unidos, rodeado de jóvenes de todo el mundo.
                </p>
              </div>
              <Ph src="camp-counselors" alt="Monitoras y campistas en un campamento de verano en Estados Unidos" ratio="16 / 10" sizes="(min-width: 900px) 50vw, 100vw" />
            </div>
            <div className="sem-grid sem-grid--3">
              <div className="sem-card">
                <h3>Tu trabajo</h3>
                <p>Actividades, deportes, arte, naturaleza, aventura o acompañamiento de niños y adolescentes, según tu perfil y las necesidades del campamento.</p>
              </div>
              <div className="sem-card">
                <h3>Lo que recibes</h3>
                <p>Alojamiento y comida incluidos durante tu estancia y un salario mínimo de {c.salary} por la temporada.</p>
              </div>
              <div className="sem-card">
                <h3>Después</h3>
                <p>Cuando termine el campamento, tendrás hasta {c.travelDays} días para viajar por Estados Unidos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 · BENEFICIOS */}
        <section className="sem-soft">
          <div className="sem-wrap">
            <h2 className="sem-h2 sem-center">Mucho más que un trabajo de verano</h2>
            <div className="sem-grid sem-grid--3">
              {benefits.map(b => (
                <div className="sem-card" key={b.t}>
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                </div>
              ))}
            </div>
            <div className="sem-trio">
              <figure>
                <Ph src="instalaciones" alt="Instalaciones de un campamento junto a un lago" ratio="1 / 1" sizes="(min-width: 900px) 33vw, 33vw" />
                <figcaption>Instalaciones junto al lago</figcaption>
              </figure>
              <figure>
                <Ph src="comedor" alt="Monitor y campista en el comedor del campamento" ratio="1 / 1" sizes="(min-width: 900px) 33vw, 33vw" />
                <figcaption>Comida en el comedor</figcaption>
              </figure>
              <figure>
                <Ph src="cuatro-julio" alt="Fuegos artificiales del 4 de julio en un campamento" ratio="1 / 1" sizes="(min-width: 900px) 33vw, 33vw" />
                <figcaption>4 de julio en el campamento</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 6 · QUÉ HACE UN MONITOR */}
        <section>
          <div className="sem-wrap">
            <h2 className="sem-h2">¿Qué hace realmente un monitor?</h2>
            <p className="sem-lead">
              No existe un único tipo de monitor. Tu perfil y tus habilidades determinarán qué
              posiciones pueden encajar contigo.
            </p>
            <div className="sem-grid sem-grid--2">
              <div className="sem-card">
                <Ph src="tenis" alt="Monitor de tenis dando una clase en un campamento" ratio="16 / 10" sizes="(min-width: 900px) 50vw, 100vw" />
                <h3 style={{ marginTop: 14 }}>Activity Counselor</h3>
                <p>Especialista en una actividad.</p>
                <ul className="sem-pills">
                  {activities.map(a => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div className="sem-card">
                <Ph src="monitoras" alt="Monitoras con su grupo de campistas frente a la cabaña" ratio="16 / 10" sizes="(min-width: 900px) 50vw, 100vw" />
                <h3 style={{ marginTop: 14 }}>General Counselor</h3>
                <p>
                  Acompañas a un grupo de campistas durante el día, actuando como referente y
                  responsable de sus actividades y convivencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 · PRECIO */}
        <section id="precio" className="sem-dark sem-center">
          <div className="sem-wrap">
            <span className="sem-eyebrow">Precio</span>
            <h2 className="sem-h2">¿Cuánto cuesta Monitor Camp USA?</h2>
            <p className="sem-bigprice">
              {c.priceTotal}
              <small>Todo el programa</small>
            </p>
            <div className="sem-grid sem-grid--2" style={{ marginTop: 28 }}>
              <div className="sem-pay">
                <span className="sem-pay__tag">Primer pago</span>
                <p className="sem-pay__amt">{c.firstPayment}</p>
                <p className="sem-pay__when">Al comenzar el proceso</p>
                <ul>
                  <li>Reserva de plaza</li>
                  <li>Acceso a la plataforma</li>
                  <li>Orientación para crear el perfil</li>
                  <li>Preparación de candidatura</li>
                  <li>Preparación de entrevista</li>
                </ul>
              </div>
              <div className="sem-pay sem-pay--hl">
                <span className="sem-pay__tag">Segundo pago</span>
                <p className="sem-pay__amt">{c.secondPayment}</p>
                <p className="sem-pay__when">Solo cuando un campamento te haya ofrecido un contrato oficial</p>
                <ul>
                  <li>Gestión del proceso J-1</li>
                  <li>DS-2019</li>
                  <li>Seguro médico según las condiciones del programa</li>
                  <li>Orientación previa</li>
                  <li>Soporte correspondiente al programa</li>
                </ul>
              </div>
            </div>
            <div className="sem-note">
              No pagas los {c.priceTotal} de golpe.
              <span>
                Empiezas con {c.firstPayment} y el segundo pago se realiza cuando consigues contrato de
                campamento.
              </span>
            </div>
            <div style={{ maxWidth: 440, margin: '24px auto 0' }}>
              <Cta where="price" />
              <p className="sem-alt-link">
                <CalendlyLink location="price" className="sem-link sem-link--light">
                  O reserva una llamada gratuita para resolver tus dudas
                </CalendlyLink>
              </p>
            </div>
          </div>
        </section>

        {/* 8 · INCLUIDO */}
        <section>
          <div className="sem-wrap">
            <h2 className="sem-h2 sem-center">Esto es lo que incluye tu programa</h2>
            <div className="sem-grid sem-grid--2">
              <div className="sem-col sem-col--yes">
                <h3>INCLUIDO</h3>
                <ul>
                  {included.map(i => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="sem-col sem-col--no">
                <h3>NO INCLUIDO</h3>
                <ul>
                  {c.externalCosts.map(x => (
                    <li key={x.label}>
                      {x.label}
                      {x.approx ? `: ${x.approx}` : ''}
                    </li>
                  ))}
                </ul>
                <p className="sem-small">
                  Importes externos orientativos. Consulta las tarifas oficiales vigentes en el momento de
                  tramitar tu visado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9 · REQUISITOS */}
        <section id="requisitos" className="sem-soft">
          <div className="sem-wrap">
            <h2 className="sem-h2">¿Cumples el perfil?</h2>
            <p className="sem-lead">
              Los requisitos son claros. Si encajas, nosotros te acompañamos en el resto del proceso.
            </p>
            <div className="sem-grid sem-grid--3">
              {requirements.map(r => (
                <div className="sem-card" key={r.t}>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, maxWidth: 440 }}>
              <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>
                ¿No estás seguro de cumplir todos los requisitos?
              </p>
              <a href="#formulario" className="sem-btn sem-btn--block" data-cta="requirements">
                COMPROBAR MI PERFIL
              </a>
              <p className="sem-alt-link">
                <CalendlyLink location="requirements">Reserva una llamada gratuita</CalendlyLink>
              </p>
            </div>
          </div>
        </section>

        {/* 10 · CÓMO FUNCIONA */}
        <section>
          <div className="sem-wrap">
            <h2 className="sem-h2">De España a tu American Camp en 6 pasos</h2>
            <ol className="sem-steps">
              {steps.map(s => (
                <li key={s.t}>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
            <div style={{ maxWidth: 440 }}>
              <Cta where="steps" />
              <p className="sem-alt-link">
                <CalendlyLink location="steps">Reserva una llamada gratuita con el equipo</CalendlyLink>
              </p>
            </div>
          </div>
        </section>

        {/* Día a día */}
        <section>
          <div className="sem-wrap">
            <h2 className="sem-h2 sem-center">Así se vive un American Camp</h2>
            <div className="sem-grid sem-grid--3">
              <Ph src="staff" alt="Monitores tocando la guitarra ante todo el campamento" ratio="4 / 3" />
              <Ph src="monitor-futbol" alt="Monitor con un grupo de campistas durante una actividad de fútbol" ratio="4 / 3" />
              <Ph src="monitora-nina" alt="Monitora y campista riendo junto a un flotador gigante" ratio="4 / 3" />
            </div>
          </div>
        </section>

        {/* 11 · POR QUÉ INTERSUNSET */}
        <section className="sem-soft">
          <div className="sem-wrap sem-split sem-split--center">
            <div>
              <h2 className="sem-h2">No estás solo durante el proceso</h2>
              <p className="sem-lead">
                Irte a Estados Unidos con 18, 19, 20 o 21 años puede generar muchas dudas. Nuestro trabajo
                es que sepas qué estás contratando, qué tienes que hacer y qué ocurre en cada paso.
              </p>
              <p style={{ marginTop: 18, color: 'var(--muted)', fontSize: 17 }}>
                El equipo de Intersunset Campus trabaja para que puedas vivir la experiencia de trabajar en
                Estados Unidos con la máxima transparencia y sabiendo en todo momento qué estás contratando.
              </p>
              <p style={{ marginTop: 14 }}>
                <CalendlyLink location="about">Habla con nosotros: reserva una llamada gratuita</CalendlyLink>
              </p>
            </div>
            <div className="sem-card sem-card--list">
              <ul className="sem-ticks">
                {[
                  'Agencia española',
                  'Atención personalizada',
                  'Experiencia en programas internacionales',
                  'Preparación de candidatura',
                  'Preparación de entrevistas',
                  'Acompañamiento en el proceso J-1',
                  'Orientación antes de viajar',
                  'Soporte durante el programa',
                ].map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 12 · PRUEBA SOCIAL */}
        <section>
          <div className="sem-wrap">
            <h2 className="sem-h2 sem-center">Lo que dicen nuestros participantes</h2>
            <div className="sem-grid sem-grid--3">
              {testimonials.map(t => (
                <figure className="sem-quote" key={t.name} style={{ margin: 0 }}>
                  <div className="sem-quote__top">
                    <Image src={t.photo} alt={t.alt} width={56} height={56} loading="lazy" />
                    <div>
                      <cite>{t.name}</cite>
                      <small>{t.camp}</small>
                    </div>
                  </div>
                  <div className="sem-stars" aria-label="5 estrellas">★★★★★</div>
                  <blockquote style={{ margin: 0 }}>
                    <p>“{t.text}”</p>
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 13 · OBJECIONES */}
        <section className="sem-soft">
          <div className="sem-wrap" style={{ maxWidth: 780 }}>
            <h2 className="sem-h2">Las dudas que más nos hacen</h2>
            <div className="sem-acc">
              {objections.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 14 · FAQ */}
        <section>
          <div className="sem-wrap" style={{ maxWidth: 780 }}>
            <h2 className="sem-h2">Todo lo que necesitas saber</h2>
            <div className="sem-acc">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 15 · CONVERSIÓN FINAL */}
        <section className="sem-dark sem-final sem-final--photo">
          <div className="sem-final__bg" aria-hidden="true">
            <Image src="/landing/lacrosse.webp" alt="" fill sizes="100vw" quality={60} loading="lazy" />
          </div>
          <div className="sem-wrap">
            <h2 className="sem-h2">¿Listo para saber si puedes vivir este verano en EEUU?</h2>
            <p className="sem-lead">
              Comprueba ahora si tu perfil encaja en Monitor Camp USA {c.year}. La primera valoración es
              gratuita y sin compromiso.
            </p>
            <div style={{ marginTop: 22 }}>
              <Cta where="final" />
            </div>
            <p className="sem-alt">También puedes hablar directamente con nuestro equipo.</p>
            <div className="sem-actions">
              <CalendlyLink location="final" className="sem-btn sem-btn--wa">
                RESERVAR LLAMADA GRATUITA
              </CalendlyLink>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="sem-btn sem-btn--wa"
                data-location="final"
              >
                HABLAR POR WHATSAPP
              </a>
            </div>
          </div>
        </section>

        {/* 16 · FORMULARIO FINAL */}
        <section id="formulario-final" className="sem-soft">
          <div className="sem-wrap" style={{ maxWidth: 640 }}>
            <h2 className="sem-h2 sem-center" style={{ marginBottom: 22 }}>
              Comprueba tu perfil para Monitor Camp USA {c.year}
            </h2>
            <div className="sem-formcard">
              <LeadForm id="formulario-final" variant="full" />
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
      <StickyCta />
    </>
  );
}
