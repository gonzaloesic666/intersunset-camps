import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { pageTitle, pageDescription } from '@/lib/campaign';
import './landing.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  weight: ['400', '600', '700'],
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

export default function SemLayout({ children }: { children: React.ReactNode }) {
  return <div className={`sem ${openSans.variable}`}>{children}</div>;
}
