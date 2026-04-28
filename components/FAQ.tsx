'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Cuánto cuesta el programa?',
    answer: 'El programa tiene un coste total de 595€ dividido en dos pagos. El primer pago de 150€ reserva tu plaza y activa el proceso de candidatura. El segundo pago de 445€ solo se realiza cuando un campamento te haya ofrecido contrato oficial, e incluye la gestión completa del visado J1, el seguro médico y el soporte durante toda tu estancia.',
  },
  {
    question: '¿Cuánto dinero voy a ganar?',
    answer: 'Los campamentos pagan un salario mínimo de 2.100$ por temporada (9 semanas). Además, el alojamiento y la comida están completamente incluidos, por lo que prácticamente todo lo que ganas es ahorro neto. Al terminar el programa, dispones de 30 días para viajar por EEUU antes de regresar.',
  },
  {
    question: '¿Qué nivel de inglés necesito exactamente?',
    answer: 'Necesitas un nivel conversacional que te permita comunicarte con niños y compañeros en inglés. No hace falta título oficial ni un nivel perfecto. En la cita gratuita evaluamos tu nivel contigo sin compromiso y te orientamos si necesitas mejorar antes de empezar el proceso.',
  },
  {
    question: '¿Puedo ir con amigos?',
    answer: 'Sí. Si vais varios amigos podemos intentar colocaros en el mismo campamento o en campamentos cercanos, aunque no está garantizado ya que depende de las plazas disponibles y los perfiles que cada campamento necesite. Cuéntanoslo desde el principio y lo gestionamos de forma coordinada.',
  },
  {
    question: '¿Qué pasa si no me sale el visado?',
    answer: 'En caso de denegación del visado J1 por causas ajenas al participante, estudiamos cada caso individualmente. Te acompañamos en todo el proceso para minimizar ese riesgo: una candidatura bien preparada y una agencia con experiencia marcan una diferencia importante en la tasa de aprobación.',
  },
  {
    question: '¿Cuándo tengo que empezar el proceso?',
    answer: 'Cuanto antes mejor. Los campamentos empiezan su selección en octubre-noviembre y las mejores plazas se cubren primero. Para el verano 2027 te recomendamos empezar el proceso entre septiembre y diciembre de 2026. Así tendrás más opciones y el proceso será más tranquilo.',
  },
  {
    question: '¿Qué incluye exactamente el programa?',
    answer: 'El programa incluye: puesto como monitor durante 9 semanas, salario mínimo 2.100$, alojamiento gratuito en el campamento, comida gratuita, gestión del visado J1, formulario DS-2019, tasa SEVIS, seguro médico durante todo el programa, soporte 24h durante tu estancia, orientación previa al viaje y 30 días para viajar por EEUU al finalizar.',
  },
  {
    question: '¿Por qué elegir Intersunset Campus?',
    answer: 'Somos una agencia española especializada exclusivamente en programas de campamentos en EEUU. Tenemos sede en España y acompañamos a cada participante de forma personalizada durante todo el proceso: desde la primera cita hasta que regresas a casa. No somos una plataforma online: somos personas que conocen de primera mano la experiencia.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid #EBEBF5',
        padding: '0',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '24px 0',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '16px', lineHeight: 1.4 }}>
          {question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1.5px solid #DDDDF0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.22s ease',
            color: 'var(--navy)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '600px' : '0',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.32s ease, opacity 0.22s ease',
        }}
      >
        <p style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: 1.75, paddingBottom: '24px' }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: '#fff' }}>
      <div className="section-wrap">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Preguntas frecuentes</span>
            <h2 className="section-title">Todo lo que necesitas saber</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '17px' }}>
              Si tienes más dudas, reserva tu cita gratuita y las resolvemos en persona.
            </p>
          </div>

          {/* Items */}
          <div>
            {faqs.map(faq => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
