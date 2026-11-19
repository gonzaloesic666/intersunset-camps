import Image from 'next/image';
import { wt as w, whatsappOptionsWt, whatsappUrlWt } from '@/lib/campaign-wt';
import LeadFormWT from '@/components/landing/LeadFormWT';
import StickyCta from '@/components/landing/StickyCta';
import LandingTracker from '@/components/landing/LandingTracker';
import LandingFooter from '@/components/landing/LandingFooter';
import CalendlyLink from '@/components/landing/CalendlyLink';
import UsFlag from '@/components/landing/UsFlag';

const CTA_TEXT = 'COMPROBAR SI CUMPLES LOS REQUISITOS';

function Ph({ src, alt, ratio = '4 / 3', sizes = '(min-width: 900px) 33vw, 100vw' }: { src: string; alt: string; ratio?: string; sizes?: string }) {
  return (
    <div className="sem-ph" style={{ aspectRatio: ratio }}>
      <Image src={`/wt/${src}.webp`} alt={alt} fill sizes={sizes} quality={70} loading="lazy" />
    </div>
  );
}
const durShort = w.duration.replace(' a ', '–');

function Cta({ where }: { where: string }) {
  return (
    <a href="#formulario" className="sem-btn sem-btn--block" data-cta={where}>
      {CTA_TEXT}
    </a>
  );
}

const benefits = [
  { t: 'Gana dinero', d: `Sueldo de ${w.hourly} según el puesto y el estado, con ${w.hoursWeek} de trabajo a la semana.` },
  { t: 'Trabajo legal con visado J-1', d: 'Con contrato y visado oficial: no es turismo ni trabajo sin papeles.' },
  { t: 'Mejora tu inglés', d: 'Lo hablas cada día en el trabajo y con compañeros de todo el mundo.' },
  { t: 'Amigos de todo el mundo', d: 'Compartes verano con jóvenes de decenas de países.' },
  { t: 'Viaja por EEUU', d: `Al terminar tienes ${w.travelDays} días para recorrer el país libremente.` },
  { t: 'Seguro y apoyo', d: 'Seguro médico J-1 y asistencia 24 h incluidos en todas las opciones.' },
];

const included = [
  'Formulario DS-2019',
  'Seguro médico J-1 durante todo el programa',
  'Asistencia 24 h durante el programa',
  'Guía paso a paso para el DS-160, la cita y la documentación',
  'Sesión de orientación antes del viaje',
  'Búsqueda de puesto (opción Standard)',
];

const notIncluded = [
  'Tasa consular del visado: unos 185 $',
  'Vuelos: unos 550 €',
  'Dinero para tu primer mes: al menos 1.000 $',
  'Alojamiento y comida: según el puesto; normalmente lo gestiona la empresa y se descuenta del sueldo',
  'Gastos personales durante el programa y el viaje',
];

const requirements = [
  { t: 'Edad y estudios', d: `Tener entre ${w.ageMin} y ${w.ageMax} años, ser español o residente legal en España y estar matriculado en la universidad, con estudios a tiempo completo y presenciales.` },
  { t: 'Inglés', d: `Nivel mínimo ${w.englishLevel} (intermedio), que se evalúa en una entrevista corta. No necesitas certificado oficial ni un inglés perfecto.` },
  { t: 'Disponibilidad', d: 'Mínimo 10 semanas durante el verano, entre mayo y octubre de 2027.' },
  { t: 'Documentos', d: 'Pasaporte con al menos 6 meses de validez, DNI y matrícula universitaria, y foto tipo visado de EE. UU. El DS-160 te lo guiamos paso a paso.' },
  { t: 'Experiencia', d: 'No necesitas experiencia laboral previa: solo actitud positiva y ganas de vivir la experiencia.' },
  { t: 'Una oferta de trabajo', d: 'La consigues con nosotros (Standard o Premium) o aportas la tuya con la opción Oferta propia.' },
];

const steps = [
  { t: 'Hablamos contigo (15 minutos)', d: 'Una llamada corta y sin compromiso para ver tu perfil, tus fechas y qué opción te encaja mejor.' },
  { t: 'Te inscribes y reservas tu plaza', d: 'Formulario de inscripción y entrevista online en inglés. Si la superas, reservas plaza.' },
  { t: 'Eliges tu puesto y haces la entrevista', d: 'Según tu opción: recibes ofertas, eliges entre todos los puestos o aportas la tuya.' },
  { t: 'Contrato firmado y pago final', d: 'Cuando te contratan, firmas con la empresa y realizas el pago final.' },
  { t: 'Solicitud del visado J-1', d: 'Recibes el DS-2019 y te guiamos con el DS-160 y la cita. La entrevista en la Embajada de EEUU en Madrid es obligatoria.' },
  { t: 'Sesión de orientación', d: 'Antes de salir, para que llegues preparado y sin sorpresas.' },
  { t: '¡Trabajas y viajas!', d: `Trabajas, mejoras tu inglés y, al terminar, tienes ${w.travelDays} días para viajar.` },
];

const testimonials = [
  {
    initial: 'M',
    name: 'María García',
    where: 'Yellowstone National Park',
    text: 'Trabajé de Server Assistant en Yellowstone y fue un verano que no se me va a olvidar en la vida. Por un lado estaban las compañeras del trabajo, sobre todo chicos y chicas de toda Europa, que me enseñaron de todo desde el primer día. Y por otro lado los días libres, que los aprovechábamos para ir a ver bisontes o a los géiseres, una pasada tenerlo todo tan cerca. Ahorré bastante más de lo que pensaba y mi inglés mejoró un montón solo de estar todo el día rodeada de gente de fuera. Sin duda repetiría.',
  },
  {
    initial: 'C',
    name: 'Carlos López',
    where: 'Six Flags New England',
    text: 'Estuve de ride operator en Six Flags y la verdad es que el trabajo en sí está bien, aunque hay días de mucho calor subido a la atracción todo el turno. Lo mejor fueron los compañeros, hicimos un grupo de españoles e italianos que en los días libres alquilábamos coche y nos íbamos a Boston o a Nueva York, que estaba a un par de horas. También coincidí con el 4 de julio allí y los americanos se lo toman muy en serio, fuegos artificiales y barbacoa con todo el equipo. Mi inglés ha mejorado muchísimo y ya estoy mirando para repetir el año que viene.',
  },
  {
    initial: 'A',
    name: 'Ana Martínez',
    where: 'Ocean City Resort',
    text: 'En el resort de Ocean City hacía un poco de todo, recepción y ayudando en el restaurante cuando había mucha gente. Al principio cuesta porque vivíamos seis en la misma casa y el turno partido se hace largo, pero al final esa misma gente con la que vivía se convirtió en mi familia ese verano. Me llevo amigos de Brasil, Francia, Alemania, Tailandia y Bulgaria con los que sigo hablando.',
  },
];

const faqs: [string, string][] = [
  ['¿Cuándo debo inscribirme?', 'Cuanto antes, mejor: la convocatoria 2027 está abierta. Las entrevistas con las empresas empiezan en noviembre y diciembre, y los mejores puestos se asignan primero. Los puestos se asignan por orden de inscripción.'],
  ['¿Qué diferencia hay entre Standard y Premium?', 'En las dos trabajas con visado J-1, con seguro médico incluido y 30 días para viajar al terminar. Standard (1.590 €): recibes ofertas según tu perfil, hasta 3 a la vez, y eliges a cuál presentarte. Premium (2.095 €): eliges entre todos los puestos disponibles; plazas limitadas. Si ya tienes trabajo en EE. UU., existe Oferta propia (1.290 €).'],
  ['¿Cuándo tengo que pagar?', 'Standard: 400 € de reserva tras superar la entrevista de admisión (se devuelven si no consigues oferta) y 1.190 € cuando aceptas tu puesto. Premium: 300 € de reserva, 700 € antes de la entrevista con la empresa y 1.095 € al firmar tu contrato. Oferta propia: pago único de 1.290 €. Antes de pagar recibes todas las condiciones por escrito.'],
  ['¿Cuánto dinero puedo ganar?', 'El sueldo va de 12 a 20 $/hora según el puesto y el estado, con 32 a 40 horas de trabajo semanales. En un verano, entre 5.000 y 7.000 $ brutos. Lo que ahorras depende de las horas, las propinas y el alojamiento, que normalmente gestiona la empresa y se descuenta del sueldo. En parques nacionales suele haber alojamiento y comida a precio reducido.'],
  ['¿Puedo elegir mi destino y trabajo?', 'Depende de la opción: en Standard recibes ofertas según tu perfil y eliges a cuál presentarte; en Premium eliges entre todos los puestos disponibles; con Oferta propia vas con el trabajo que tú has encontrado. Trabajos típicos: housekeeping, restauración, operador de atracciones, tiendas, recepción y socorrista. Cuanto antes te inscribas, más opciones tendrás.'],
  ['¿Qué nivel de inglés necesito?', 'El mínimo es B1 (intermedio), que se evalúa en una entrevista corta en inglés. No necesitas certificado oficial ni un inglés perfecto: tienes que entender preguntas básicas, responder con coherencia y hablar de tus estudios y tus motivaciones.'],
  ['¿Es seguro el programa?', 'Es un programa legal, regulado por el Departamento de Estado de EE. UU., con visado J-1 oficial. Trabajas con contrato, con al menos el salario mínimo del estado y las horas fijadas en tu oferta. El seguro médico y la asistencia de emergencia 24 h están incluidos.'],
  ['¿Qué pasa si no consigo puesto?', 'En la opción Standard, si no consigues oferta de trabajo, se te devuelven los 400 € de la reserva de plaza. En todas las opciones recibes por escrito las condiciones de cancelación antes de hacer ningún pago.'],
  ['¿Y si ya tengo una oferta de una empresa?', 'Entonces te encaja Oferta propia (1.290 €, pago único). Se comprueba que tu empresa y tu puesto cumplen las normas del programa J-1 y se tramita tu visado, con el DS-2019, el seguro médico y la asistencia 24 h incluidos.'],
  ['¿Cuánto dura y cuándo es?', 'Trabajas entre 10 y 12 semanas, entre mayo y octubre de 2027, más 30 días para viajar al terminar. Las entrevistas con empresas son de noviembre a enero y el visado se tramita de febrero a abril.'],
];

export default function WtLanding() {
  return (
    <>
      <LandingTracker />
      <main>
        {/* 1 · HERO */}
        <header className="sem-hero">
          <div className="sem-hero__bg" aria-hidden="true" />
          <div className="sem-wrap">
            <div className="sem-brand">
              <Image src="/logo-transparent.png" alt="Intersunset Campus" width={34} height={34} priority />
              <strong style={{ fontFamily: 'var(--font-montserrat)', fontSize: 15 }}>Intersunset Campus</strong>
            </div>
            <div className="sem-hero__body">
              <span className="sem-tag">
                WORK AND TRAVEL USA {w.year} <UsFlag height={13} />
              </span>
              <h1>Trabaja y viaja por Estados Unidos este verano</h1>
              <p className="sem-hero__text">
                Trabaja legalmente con visado J-1, mejora tu inglés cada día y disfruta de {w.travelDays} días
                para viajar por el país al terminar.
              </p>
              <div className="sem-chips">
                <div className="sem-chip sem-chip--big">
                  <strong>{w.hourly}</strong>según puesto y estado
                </div>
                <div className="sem-chip"><strong>+</strong>Búsqueda de puesto incluida (Standard)</div>
                <div className="sem-chip"><strong>+</strong>Visado J-1 y seguro médico</div>
                <div className="sem-chip"><strong>+</strong>{w.travelDays} días para viajar</div>
              </div>
              <p className="sem-price-line">
                Programa desde <strong>{w.priceFrom}</strong>
                <span>Standard: 400 € de reserva (se devuelve si no consigues oferta) + 1.190 € al aceptar tu puesto</span>
              </p>
              <div className="sem-hero__cta">
                <Cta where="hero" />
                <p className="sem-microcopy">Evaluamos tu perfil gratuitamente · Sin compromiso</p>
                <p className="sem-alt-link">
                  ¿Prefieres hablar ya?{' '}
                  <CalendlyLink url={w.calendlyUrl} location="hero" className="sem-link sem-link--light">
                    Reserva una llamada gratuita
                  </CalendlyLink>
                </p>
              </div>
              <p className="sem-meta">{w.ageRange} años · Estudiantes universitarios · {w.season}</p>
            </div>
          </div>
        </header>

        {/* 2 · TRUST STRIP */}
        <section className="sem-trust" aria-label="Resumen del programa">
          <div className="sem-wrap" style={{ padding: 0 }}>
            <ul>
              <li>Programa J-1</li>
              <li>Desde {w.priceFrom}</li>
              <li>{durShort}</li>
              <li>Seguro médico J-1</li>
              <li>{w.travelDays} días para viajar</li>
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
                Déjanos tus datos y revisamos tu perfil para ver si cumples los requisitos y qué opción te
                encaja mejor en Work and Travel USA {w.year}.
              </p>
            </div>
            <div className="sem-formcard">
              <LeadFormWT id="formulario" variant="short" />
            </div>
          </div>
        </section>

        {/* 4 · QUÉ ES */}
        <section>
          <div className="sem-wrap">
            <div className="sem-split sem-split--center">
              <div>
                <span className="sem-eyebrow">El programa</span>
                <h2 className="sem-h2">Trabaja y viaja por Estados Unidos este verano</h2>
                <p className="sem-lead">
                  Work and Travel es un programa de intercambio cultural, regulado por el Departamento de Estado
                  de EE. UU., que permite a estudiantes universitarios españoles trabajar legalmente en Estados
                  Unidos durante el verano con visado J-1.
                </p>
              </div>
              <Ph src="equipo-parque" alt="Equipo de jóvenes trabajando en un parque temático de Estados Unidos" ratio="16 / 10" sizes="(min-width: 900px) 50vw, 100vw" />
            </div>
            <div className="sem-grid sem-grid--3">
              <div className="sem-card">
                <h3>Tu trabajo</h3>
                <p>Hoteles, parques nacionales, parques temáticos, resorts, restaurantes y tiendas, con {w.hoursWeek} semanales y un sueldo de {w.hourly} según el puesto y el estado.</p>
              </div>
              <div className="sem-card">
                <h3>Lo que puedes ganar</h3>
                <p>Entre {w.grossRange} brutos en un verano (cifra orientativa), según horas, propinas y puesto. El alojamiento suele descontarse del sueldo.</p>
              </div>
              <div className="sem-card">
                <h3>Después</h3>
                <p>Al terminar tienes {w.travelDays} días para viajar libremente por Estados Unidos.</p>
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
                <Ph src="playa" alt="Jóvenes compartiendo pizza en la playa al atardecer" ratio="1 / 1" sizes="33vw" />
                <figcaption>Amigos de todo el mundo</figcaption>
              </figure>
              <figure>
                <Ph src="sixflags" alt="Cartel de Six Flags New England con un grupo de jóvenes" ratio="1 / 1" sizes="33vw" />
                <figcaption>Destinos como Six Flags</figcaption>
              </figure>
              <figure>
                <Ph src="boston" alt="Tres amigas en un partido de los Boston Red Sox" ratio="1 / 1" sizes="33vw" />
                <figcaption>Días libres para viajar</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 6 · PRECIO */}
        <section id="precio" className="sem-dark sem-center">
          <div className="sem-wrap">
            <span className="sem-eyebrow">Precio</span>
            <h2 className="sem-h2">¿Cuánto cuesta Work and Travel USA?</h2>
            <p className="sem-bigprice">
              {w.priceFrom}
              <small>Desde. Tres formas de hacerlo, según tu situación</small>
            </p>
            <div className="sem-grid sem-grid--3" style={{ marginTop: 28 }}>
              {w.options.map(o => (
                <div className={`sem-pay${o.highlight ? ' sem-pay--hl' : ''}`} key={o.key}>
                  <span className="sem-pay__tag">{o.name}</span>
                  <p className="sem-pay__amt">{o.price}</p>
                  <p className="sem-pay__when">{o.when}</p>
                  <ul>
                    {o.points.map(p => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="sem-note">
              Antes de pagar recibes todas las condiciones por escrito.
              <span>
                La reserva de 400 € de la opción Standard se devuelve si no consigues oferta de trabajo.
              </span>
            </div>
            <div style={{ maxWidth: 440, margin: '24px auto 0' }}>
              <Cta where="price" />
              <p className="sem-alt-link">
                <CalendlyLink url={w.calendlyUrl} location="price" className="sem-link sem-link--light">
                  O reserva una llamada gratuita para resolver tus dudas
                </CalendlyLink>
              </p>
            </div>
          </div>
        </section>

        {/* 7 · INCLUIDO */}
        <section>
          <div className="sem-wrap">
            <h2 className="sem-h2 sem-center">Esto es lo que incluye y lo que no</h2>
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
                  {notIncluded.map(i => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="sem-small">Importes orientativos: consulta las tarifas vigentes en el momento de tramitar tu visado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8 · PUESTOS */}
        <section className="sem-soft">
          <div className="sem-wrap">
            <div className="sem-split sem-split--center">
              <div>
                <h2 className="sem-h2">Ejemplos de puestos para {w.year}</h2>
                <p className="sem-lead">
                  Así son algunos de los puestos publicados. La disponibilidad cambia: en la llamada te decimos
                  qué hay abierto según tu perfil.
                </p>
              </div>
              <Ph src="socorrista" alt="Socorrista junto a una piscina en Estados Unidos" ratio="16 / 10" sizes="(min-width: 900px) 50vw, 100vw" />
            </div>
            <div className="sem-grid sem-grid--3">
              {w.jobs.map(j => (
                <div className="sem-card wt-job" key={j.company + j.role}>
                  <h3>{j.role}</h3>
                  <p className="wt-company">{j.company}</p>
                  <p className="wt-place">{j.place}</p>
                  <p className="wt-pay">{j.pay}</p>
                  <small>{j.extra}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9 · REQUISITOS */}
        <section id="requisitos">
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
                <CalendlyLink url={w.calendlyUrl} location="requirements">Reserva una llamada gratuita</CalendlyLink>
              </p>
            </div>
          </div>
        </section>

        {/* 10 · PROCESO */}
        <section className="sem-soft">
          <div className="sem-wrap">
            <h2 className="sem-h2">Del primer contacto a tu trabajo en EEUU, en 7 pasos</h2>
            <ol className="sem-steps">
              {steps.map(s => (
                <li key={s.t}>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
            <ul className="wt-dates">
              <li><b>Desde ya:</b> inscripción y reserva de plaza</li>
              <li><b>Noviembre 2026 – enero 2027:</b> entrevistas con las empresas</li>
              <li><b>Febrero – abril 2027:</b> tramitación del visado J-1</li>
              <li><b>Mayo – octubre 2027:</b> tu programa en Estados Unidos</li>
            </ul>
            <div style={{ maxWidth: 440, marginTop: 24 }}>
              <Cta where="steps" />
              <p className="sem-alt-link">
                <CalendlyLink url={w.calendlyUrl} location="steps">Reserva una llamada gratuita con el equipo</CalendlyLink>
              </p>
            </div>
          </div>
        </section>

        {/* 11 · POR QUÉ INTERSUNSET */}
        <section>
          <div className="sem-wrap sem-split sem-split--center">
            <div>
              <h2 className="sem-h2">No estás solo durante el proceso</h2>
              <p className="sem-lead">
                Irte a trabajar a Estados Unidos con 19 o 20 años puede generar muchas dudas. Nuestro trabajo es
                que sepas qué estás contratando, qué tienes que hacer y qué ocurre en cada paso.
              </p>
              <p style={{ marginTop: 14 }}>
                <CalendlyLink url={w.calendlyUrl} location="about">Habla con nosotros: reserva una llamada gratuita</CalendlyLink>
              </p>
            </div>
            <div className="sem-card sem-card--list">
              <ul className="sem-ticks">
                {[
                  'Agencia española',
                  'Atención personalizada',
                  'Preparación de la entrevista de admisión',
                  'Búsqueda y presentación a ofertas de trabajo',
                  'Acompañamiento en el proceso del visado J-1',
                  'Orientación antes de viajar',
                  'Asistencia 24 h durante el programa',
                ].map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sem-wrap">
            <div className="sem-embassy">
              <UsFlag height={20} />
              <p>
                <strong>
                  Aparecemos en el listado de agencias de Summer Work Travel de la Embajada de EE.UU. en España.
                </strong>{' '}
                <a href={w.embassyListUrl} target="_blank" rel="noopener noreferrer" className="sem-link" data-location="embassy">
                  Ver el listado oficial
                </a>
                <small>La inclusión en el listado no implica recomendación ni aprobación por parte de la Embajada.</small>
              </p>
            </div>
          </div>
        </section>

        {/* 12 · PRUEBA SOCIAL */}
        <section className="sem-soft">
          <div className="sem-wrap">
            <h2 className="sem-h2 sem-center">Lo que cuentan quienes ya lo han vivido</h2>
            <div className="sem-grid sem-grid--3">
              {testimonials.map(t => (
                <figure className="sem-quote" key={t.name} style={{ margin: 0 }}>
                  <div className="sem-quote__top">
                    <span className="wt-avatar" aria-hidden="true">{t.initial}</span>
                    <div>
                      <cite>{t.name}</cite>
                      <small>{t.where}</small>
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

        {/* 13 · FAQ */}
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

        {/* 14 · CONVERSIÓN FINAL */}
        <section className="sem-dark sem-final">
          <div className="sem-wrap">
            <h2 className="sem-h2">¿Listo para saber si puedes vivir este verano en EEUU?</h2>
            <p className="sem-lead">
              Comprueba ahora si tu perfil encaja en Work and Travel USA {w.year}. La primera valoración es
              gratuita y sin compromiso.
            </p>
            <div style={{ marginTop: 22 }}>
              <Cta where="final" />
            </div>
            <p className="sem-alt">También puedes hablar directamente con nuestro equipo.</p>
            <div className="sem-actions">
              <CalendlyLink url={w.calendlyUrl} location="final" className="sem-btn sem-btn--wa">
                RESERVAR LLAMADA GRATUITA
              </CalendlyLink>
            </div>
            <div className="sem-wa">
              <p className="sem-wa__title">O escríbenos por WhatsApp: elige lo que quieres saber</p>
              <div className="sem-wa__grid">
                {whatsappOptionsWt.map(o => (
                  <a
                    key={o.key}
                    href={whatsappUrlWt(o.key)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sem-btn sem-btn--wa"
                    data-location="final"
                    data-wa-option={o.key}
                  >
                    {o.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 15 · FORMULARIO FINAL */}
        <section id="formulario-final" className="sem-soft">
          <div className="sem-wrap" style={{ maxWidth: 640 }}>
            <h2 className="sem-h2 sem-center" style={{ marginBottom: 22 }}>
              Comprueba tu perfil para Work and Travel USA {w.year}
            </h2>
            <div className="sem-formcard">
              <LeadFormWT id="formulario-final" variant="full" />
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
      <StickyCta label={`Work and Travel USA ${w.year}`} />
    </>
  );
}
