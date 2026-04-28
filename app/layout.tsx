import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import MobileCtaBar from '@/components/MobileCtaBar';
import { FaqSchema } from '@/components/FaqSchema';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import { ProgramSchema } from '@/components/ProgramSchema';
import { ScrollRevealProvider } from '@/components/ScrollRevealProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://camps.intersunsetcampus.com'),
  title: {
    default: 'Monitor Camp USA 2027 | American Camps España | Intersunset Campus',
    template: '%s | Intersunset Campus',
  },
  description:
    'Trabaja como monitor en American Camps USA este verano. Visado J1 gestionado, salario mínimo 2.100$, alojamiento incluido. Agencia especializada en Camp Monitor USA en España. Plazas 2027 disponibles.',
  keywords: [
    'monitor camp usa',
    'american camps',
    'american camps summer',
    'camp counselor españa',
    'camp usa españa',
    'usa summer camp',
    'monitor campamento eeuu',
    'camp monitor españa',
    'trabajar campamento estados unidos',
    'visado j1 campamento',
    'american camp summer 2027',
    'monitor campamento usa 2027',
  ],
  authors: [{ name: 'Intersunset Campus' }],
  creator: 'Intersunset Campus',
  publisher: 'Intersunset Campus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  alternates: {
    canonical: 'https://camps.intersunsetcampus.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://camps.intersunsetcampus.com',
    siteName: 'Intersunset Campus',
    title: 'Monitor Camp USA 2027 | American Camps en España',
    description:
      'Trabaja como monitor en American Camps USA. Visado J1, salario 2.100$, alojamiento incluido. Agencia especializada en España.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Monitor Camp USA 2027 - Intersunset Campus',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monitor Camp USA 2027 | Intersunset Campus',
    description:
      'Trabaja en American Camps USA. Visado J1, salario 2.100$, alojamiento incluido.',
    images: ['/og-image.jpg'],
    creator: '@intersunsetcampus',
  },
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
        <link
          rel="preload"
          href="/hero-camp.webp"
          as="image"
          type="image/webp"
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
        <ProgramSchema />
      </body>
    </html>
  );
}
