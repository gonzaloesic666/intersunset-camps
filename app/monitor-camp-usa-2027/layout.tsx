import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { pageTitle, pageDescription } from '@/lib/campaign';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

// noindex, follow: la landing es para Google Ads y no debe competir con
// intersunsetcampus.com/monitor-camp-usa/ en orgánico.
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: undefined },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

// CSS de la landing en línea (se lee en build): evita una petición bloqueante.
const css = fs
  .readFileSync(path.join(process.cwd(), 'app/monitor-camp-usa-2027/landing.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '') // comentarios
  .replace(/\s+/g, ' ')
  .replace(/\s*([{};])\s*/g, '$1')
  .trim();

export default function SemLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`sem ${openSans.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <link rel="preload" as="image" href="/landing/hero-m.webp" media="(max-width: 899px)" fetchPriority="high" />
      <link rel="preload" as="image" href="/landing/hero-d.webp" media="(min-width: 900px)" fetchPriority="high" />
      {children}
    </div>
  );
}
