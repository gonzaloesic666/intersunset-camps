import { campaign } from '@/lib/campaign';

// Datos editables de la landing de Work and Travel USA (SEM).
// Fuente: https://intersunsetcampus.com/work-and-travel-usa/ — revisa las cifras antes de lanzar.
export const wt = {
  year: 2027,
  basePath: '/work-and-travel-2027',
  programName: 'Work and Travel USA 2027',
  // Debe coincidir con el catálogo de programas del CRM
  crmProgram: process.env.CRM_PROGRAM_WT || 'Work and Travel en Estados Unidos',
  priceFrom: '1.590€',
  hourly: '12–20 $/h',
  grossRange: '5.000–7.000 $',
  hoursWeek: '32–40 h',
  duration: '10 a 12 semanas',
  travelDays: 30,
  ageRange: '18–30',
  ageMin: 18,
  ageMax: 30,
  season: 'Verano 2027',
  englishLevel: 'B1',
  // Calendly: evento propio de Work and Travel
  email: 'contacto@intersunsetcampus.com',
  calendlyUrl: process.env.NEXT_PUBLIC_WT_CALENDLY_URL || 'https://calendly.com/intersunsetcampus/intersunset-campus-workandtravel',
  // Etiqueta de la conversión de Google Ads de este programa (vacía = no se envía conversión de Ads)
  adsLeadLabel: process.env.NEXT_PUBLIC_GADS_WT_LEAD_LABEL || null,
  whatsappMessage:
    'Hola, estoy interesado/a en Work and Travel USA 2027 y me gustaría saber si cumplo los requisitos.',
  // Listado de agencias de Summer Work Travel de la Embajada de EEUU en España
  embassyListUrl: 'https://es.usembassy.gov/es/programas-en-estados-unidos/',
  options: [
    {
      key: 'standard',
      name: 'Standard',
      price: '1.590 €',
      when: '400 € de reserva + 1.190 € al aceptar tu puesto',
      highlight: true,
      points: [
        'Búsqueda de puesto incluida: ofertas según tu perfil, hasta 3 a la vez, y eliges a cuál presentarte',
        'Reserva de 400 € tras superar la entrevista de admisión: se devuelve si no consigues oferta',
        'Seguro médico J-1 incluido durante todo el programa',
        'DS-2019 y asistencia 24 h incluidos',
      ],
    },
    {
      key: 'premium',
      name: 'Premium',
      price: '2.095 €',
      when: '300 € de reserva + 700 € antes de la entrevista + 1.095 € al firmar tu contrato',
      highlight: false,
      points: [
        'Eliges entre todos los puestos disponibles',
        'Plazas limitadas',
        'Seguro médico J-1 incluido durante todo el programa',
        'Apuntarte a la lista de prioridad no supone ningún pago ni compromiso',
      ],
    },
    {
      key: 'oferta',
      name: 'Oferta propia',
      price: '1.290 €',
      when: 'Pago único',
      highlight: false,
      points: [
        'Para quien ya tiene una oferta de una empresa en EE. UU.',
        'Revisamos que tu empresa y tu puesto cumplen las normas del programa J-1',
        'Seguro médico J-1, DS-2019 y asistencia 24 h incluidos',
      ],
    },
  ],
  // Ejemplos de puestos (cambian con la disponibilidad: actualiza esta lista)
  jobs: [
    { company: 'Denali Grizzly Bear Resort', role: 'Front Desk Receptionist', place: 'Parque Nacional de Denali, Alaska', pay: '', extra: 'Alojamiento: lo gestiona la empresa' },
    { company: 'Premier Pool Management, Inc.', role: 'Lifeguard (socorrista)', place: 'Rockville, Maryland', pay: '16,50 $/h', extra: 'Requisito: natación avanzada' },
    { company: 'Fountainhead (Wedgewood Resort)', role: 'Host', place: 'Fairbanks, Alaska', pay: '14,50 $/h', extra: 'Alojamiento: lo gestiona la empresa' },
    { company: "Old Abe's Old Time Portraits", role: 'Team Member (fotografía de época)', place: 'Wisconsin Dells, Wisconsin', pay: '13,00 $/h + propinas', extra: 'Alojamiento: lo gestiona la empresa' },
    { company: 'Hollywood Pictures LLC', role: 'Sales Help (fotografía turística)', place: 'Myrtle Beach, Carolina del Sur', pay: '12,00 $/h + propinas', extra: 'Entrada en mayo o junio · Alojamiento no incluido' },
  ],
};

// Cada opción abre WhatsApp con un mensaje distinto
export const whatsappOptionsWt = [
  { key: 'requisitos', label: '¿Cumplo los requisitos?', message: wt.whatsappMessage },
  {
    key: 'precio',
    label: '¿Qué opción me conviene y cuánto cuesta?',
    message: `Hola, me gustaría saber qué opción me conviene (Standard, Premium u oferta propia) y cuánto cuesta Work and Travel USA ${wt.year}.`,
  },
  {
    key: 'trabajos',
    label: '¿Qué trabajos hay?',
    message: `Hola, me gustaría saber qué trabajos hay disponibles en Work and Travel USA ${wt.year}.`,
  },
  {
    key: 'llamada',
    label: 'Prefiero que me llaméis',
    message: `Hola, me gustaría que me llaméis para que me expliquéis Work and Travel USA ${wt.year}.`,
  },
] as const;

export const whatsappUrlWt = (optionKey?: string) => {
  const message = whatsappOptionsWt.find(o => o.key === optionKey)?.message ?? wt.whatsappMessage;
  return `https://wa.me/${campaign.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const wtPageTitle = `Work and Travel USA ${wt.year} | Trabaja y viaja por Estados Unidos`;
export const wtPageDescription = `Trabaja legalmente con visado J-1 en EEUU este verano y viaja ${wt.travelDays} días al terminar. Búsqueda de puesto incluida. Work and Travel USA ${wt.year} desde ${wt.priceFrom}.`;
