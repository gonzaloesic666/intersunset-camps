import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import MobileCtaBar from '@/components/MobileCtaBar';
import { FaqSchema } from '@/components/FaqSchema';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import { ScrollRevealProvider } from '@/components/ScrollRevealProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://camps.intersunsetcampus.com'),
  title: 'Monitor Camp USA 2027 | American Camps en España | Intersunset Campus',
  description:
    'Trabaja como monitor en American Camps este verano. Visado J1, salario mínimo 2.100$, alojamiento incluido. Agencia especializada en Camp Monitor USA en España. Plazas limitadas 2027.',
  keywords: [
    'monitor camp usa',
    'american camps',
    'american camps summer',
    'camp counselor',
    'camp usa',
    'usa summer camp',
    'monitor campamento eeuu',
    'camp monitor españa',
    'visado j1',
    'Intersunset Campus',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  openGraph: {
    title: 'Monitor Camp USA 2027 | American Camps en España | Intersunset Campus',
    description:
      'Trabaja como monitor en American Camps este verano. Visado J1, salario mínimo 2.100$, alojamiento incluido. Agencia especializada en Camp Monitor USA en España.',
    url: 'https://camps.intersunsetcampus.com',
    siteName: 'Intersunset Campus',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Monitor Camp USA 2027 - Intersunset Campus',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monitor Camp USA 2027 | Intersunset Campus',
    description:
      'Trabaja como monitor en American Camps. Visado J1, salario 2.100$, alojamiento incluido.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://camps.intersunsetcampus.com' },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Intersunset Campus',
  description:
    'Agencia española especializada en programas de monitor de campamento en Estados Unidos con visado J1.',
  url: 'https://camps.intersunsetcampus.com',
  telephone: '+34919618440',
  email: 'camp@intersunsetcampus.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  priceRange: '€€',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-montserrat bg-white text-gray-900">
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
        <WhatsAppButton />
        <CookieBanner />
        <MobileCtaBar />
        <FaqSchema />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
