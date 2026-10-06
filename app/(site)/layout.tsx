import Script from 'next/script';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileCtaBar from '@/components/MobileCtaBar';
import { FaqSchema } from '@/components/FaqSchema';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import { ProgramSchema } from '@/components/ProgramSchema';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Intersunset Campus',
  url: 'https://camps.intersunsetcampus.com',
  description: 'Agencia especializada en programas Monitor Camp USA para universitarios españoles',
  inLanguage: 'es-ES',
  publisher: {
    '@type': 'Organization',
    name: 'Intersunset Campus',
    telephone: '+34919618440',
    email: 'camp@intersunsetcampus.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paseo de la Castellana 171',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WhatsAppButton />
      <MobileCtaBar />
      <FaqSchema />
      <LocalBusinessSchema />
      <ProgramSchema />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
