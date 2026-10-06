// Datos editables de la landing SEM. Para pasar a otra convocatoria
// (p. ej. 2028) basta con cambiar este archivo.
export const campaign = {
  year: 2027,
  basePath: '/monitor-camp-usa-2027',
  salary: '2.300$',
  priceTotal: '575€',
  firstPayment: '150€',
  secondPayment: '425€',
  duration: '8 a 10 semanas',
  durationBetween: 'entre 8 y 10 semanas',
  durationShort: '8–10 semanas',
  travelDays: 30,
  ageRange: '18–30',
  ageMin: 18,
  ageMax: 30,
  season: 'Verano 2027',
  // Fechas orientativas de viaje (texto mostrado en Requisitos)
  travelWindow: 'entre finales de mayo y mediados de junio',
  returnWindow: 'finales de agosto',
  calendlyUrl: 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m',
  whatsappNumber: '34641900180',
  whatsappDisplay: '+34 641 900 180',
  whatsappMessage:
    'Hola, estoy interesado/a en Monitor Camp USA 2027 y me gustaría saber si cumplo los requisitos.',
  email: 'camp@intersunsetcampus.com',
  phone: '+34 919 61 84 40',
  phoneHref: 'tel:+34919618440',
  city: 'Madrid, España',
  address: 'Paseo de la Castellana 257, Torre Sur, 1º · Madrid, España',
  // Listado oficial de agencias de campamentos de verano (Embajada de EEUU en España)
  embassyListUrl: 'https://es.usembassy.gov/es/programas-en-estados-unidos/',
  legal: {
    privacy: 'https://intersunsetcampus.com/politica-de-privacidad/',
    legalNotice: 'https://intersunsetcampus.com/legal/',
    cookies: 'https://intersunsetcampus.com/politica-de-privacidad/',
  },
  // Gastos externos: importes opcionales. Déjalos vacíos hasta validarlos.
  // Ej.: { label: 'Vuelos', approx: '~550€' }
  externalCosts: [
    { label: 'Tarifa oficial de solicitud / entrevista de visado, cuando corresponda', approx: '' },
    { label: 'Vuelos desde España', approx: '' },
    { label: 'Certificado de antecedentes penales', approx: '' },
    { label: 'Otros gastos personales', approx: '' },
  ],
};

export const whatsappUrl = () =>
  `https://wa.me/${campaign.whatsappNumber}?text=${encodeURIComponent(campaign.whatsappMessage)}`;

export const pageTitle = `Monitor Camp USA ${campaign.year} | Trabaja en un Campamento en EEUU`;
export const pageDescription = `Trabaja este verano en un campamento americano. Salario mínimo de ${campaign.salary}, alojamiento y comida incluidos. Programa Monitor Camp USA ${campaign.year} desde ${campaign.priceTotal}.`;
