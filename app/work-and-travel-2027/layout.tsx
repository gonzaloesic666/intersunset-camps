import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { wtPageTitle, wtPageDescription } from '@/lib/campaign-wt';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

// noindex, follow: landing para Google Ads, no debe competir con intersunsetcampus.com/work-and-travel-usa/
export const metadata: Metadata = {
  title: { absolute: wtPageTitle },
  description: wtPageDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: undefined },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: wtPageTitle,
    description: wtPageDescription,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const read = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8');

// Foto del hero opcional: si añades public/wt/hero-m.webp (móvil, ~520 px) y public/wt/hero-d.webp
// (escritorio, ~1600 px), se usan automáticamente.
const hasHero =
  fs.existsSync(path.join(process.cwd(), 'public/wt/hero-m.webp')) &&
  fs.existsSync(path.join(process.cwd(), 'public/wt/hero-d.webp'));

const heroCss = hasHero
  ? '.sem-hero__bg{background:#141330 url(/wt/hero-m.webp) 60% 30%/cover no-repeat}@media(min-width:900px){.sem-hero__bg{background-image:url(/wt/hero-d.webp);background-position:right center;background-size:cover}.sem-hero__bg::after{background:linear-gradient(90deg,rgba(20,19,48,.12) 0%,rgba(20,19,48,0) 55%)}}'
  : '';

// CSS en línea (se lee en build): evita una petición bloqueante.
const css =
  (read('app/monitor-camp-usa-2027/landing.css') + '\n' + read('app/work-and-travel-2027/wt.css'))
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};])\s*/g, '$1')
    .trim() + heroCss;

export default function WtLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`sem ${openSans.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {hasHero && (
        <>
          <link rel="preload" as="image" href="/wt/hero-m.webp" media="(max-width: 899px)" fetchPriority="high" />
          <link rel="preload" as="image" href="/wt/hero-d.webp" media="(min-width: 900px)" fetchPriority="high" />
        </>
      )}
      {children}
    </div>
  );
}
