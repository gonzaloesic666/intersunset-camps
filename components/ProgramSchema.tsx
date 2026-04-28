import Script from 'next/script';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOccupationalProgram',
  name: 'Monitor Camp USA 2027',
  description:
    'Programa para trabajar como monitor en campamentos americanos durante el verano con visado J1',
  url: 'https://camps.intersunsetcampus.com',
  provider: {
    '@type': 'Organization',
    name: 'Intersunset Campus',
    url: 'https://intersunsetcampus.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paseo de la Castellana 171',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
  },
  timeToComplete: 'P9W',
  occupationalCategory: 'Camp Counselor',
  educationalProgramMode: 'work-based',
  offers: {
    '@type': 'Offer',
    price: '595',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-09-01',
    validThrough: '2027-03-31',
  },
  applicationStartDate: '2026-09-01',
  applicationDeadline: '2027-03-31',
  startDate: '2027-06-01',
  endDate: '2027-08-31',
  locationCreated: {
    '@type': 'Place',
    name: 'Estados Unidos',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  },
  inLanguage: 'en',
  typicalCreditsPerTerm: 0,
  hasCourse: {
    '@type': 'Course',
    name: 'Formación Monitor Camp USA',
    description:
      'Orientación previa al viaje y preparación para entrevistas con campamentos americanos',
  },
};

export function ProgramSchema() {
  return (
    <Script
      id="program-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
