import Script from 'next/script';

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Intersunset Campus',
  description:
    'Agencia especializada en programas Monitor Camp USA y Work & Travel para universitarios españoles.',
  url: 'https://camps.intersunsetcampus.com',
  telephone: '+34919618440',
  email: 'camp@intersunsetcampus.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Paseo de la Castellana 171, 4º izq',
    addressLocality: 'Madrid',
    postalCode: '28046',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.4593,
    longitude: -3.692,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Credit Card, Bank Transfer',
  areaServed: 'España',
  serviceType: 'Camp Monitor USA Program',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Programas USA',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Monitor Camp USA 2027',
          description:
            'Programa para trabajar como monitor en campamentos americanos con visado J1',
        },
        price: '595',
        priceCurrency: 'EUR',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '9',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.instagram.com/intersunsetcampus',
    'https://www.linkedin.com/company/intersunset-campus',
  ],
};

export function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}
