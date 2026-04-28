import Script from 'next/script';

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el programa Monitor Camp USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El programa tiene un coste total de 595€ dividido en dos pagos. El primer pago de 150€ reserva tu plaza. El segundo pago de 445€ solo se realiza cuando un campamento te haya ofrecido contrato oficial. Incluye visado J1, seguro médico, alojamiento y salario mínimo de 2.100$.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dinero voy a ganar como monitor en un American Camp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los campamentos americanos pagan un salario mínimo de 2.100$ por temporada de 9 semanas. Además el alojamiento y la comida están completamente incluidos, por lo que prácticamente todo lo que ganas es ahorro neto. Muchos participantes vuelven con más de 1.500€ ahorrados.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué nivel de inglés necesito para ser monitor de campamento en EEUU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Necesitas un nivel conversacional que te permita comunicarte con niños y compañeros en inglés. No hace falta título oficial. En la cita gratuita evaluamos tu nivel contigo sin compromiso. Un nivel B1-B2 es suficiente para la mayoría de campamentos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo ir con amigos al mismo campamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Si vais varios amigos podemos intentar colocaros en el mismo campamento o en campamentos cercanos, aunque no está garantizado ya que depende de las plazas disponibles. Te recomendamos inscribiros juntos cuanto antes para tener más opciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si no me conceden el visado J1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En caso de denegación del visado J1 por causas ajenas al participante, estudiamos cada caso individualmente. Te acompañamos en todo el proceso para minimizar ese riesgo. La tasa de aprobación del visado J1 para participantes de nuestro programa es muy alta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo tengo que empezar el proceso para ser monitor en EEUU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuanto antes mejor. Los campamentos empiezan su selección en octubre-noviembre y las mejores plazas se cubren primero. Te recomendamos empezar el proceso entre septiembre y diciembre para el verano siguiente. Las plazas para 2027 ya están disponibles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye exactamente el programa de Monitor Camp USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El programa incluye: puesto como monitor durante 9 semanas, salario mínimo 2.100$, alojamiento gratuito, comida gratuita, gestión completa del visado J1, formulario DS-2019, tasa SEVIS, seguro médico, soporte de emergencia 24h, orientación previa al viaje y 30 días para viajar por EEUU tras el campamento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué elegir Intersunset Campus para el programa de monitor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intersunset Campus es una agencia española especializada exclusivamente en programas en EEUU. Tenemos sede en Madrid y acompañamos a cada participante de forma personalizada durante todo el proceso, desde la primera cita hasta el regreso de EEUU.',
      },
    },
  ],
};

export function FaqSchema() {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
