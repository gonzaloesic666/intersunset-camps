'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-404PQHZ0WP';
// Google Ads (formato AW-XXXXXXXXXX). Opcional: sin definir no se carga.
const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

// La landing SEM (/monitor-camp-usa-2027) mide sus propios eventos.
const isSemLanding = () => window.location.pathname.startsWith('/monitor-camp-usa-2027');

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function clickLocation(el: Element): string {
  const tagged = el.closest('[data-ga-location]');
  if (tagged) return tagged.getAttribute('data-ga-location') || 'unknown';
  if (el.closest('header')) return 'navbar';
  if (el.closest('footer')) return 'footer';
  const section = el.closest('section[id]');
  if (section) return section.id;
  if (el.closest('article, main')) return 'content';
  return 'unknown';
}

// Google Analytics 4 con Consent Mode v2: arranca denegado y se concede
// solo si el usuario acepta el banner de cookies (clave 'cookie-consent').
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const grant = () =>
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    if (localStorage.getItem('cookie-consent') === 'accepted') grant();
    window.addEventListener('cookie-consent-accepted', grant);
    return () => window.removeEventListener('cookie-consent-accepted', grant);
  }, []);

  // Clicks (delegados): Calendly, WhatsApp, teléfono, CTAs del blog, FAQ
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (isSemLanding()) return;
      const target = e.target as Element | null;
      if (!target?.closest) return;

      const link = target.closest('a[href]') as HTMLAnchorElement | null;
      if (link) {
        const href = link.getAttribute('href') || '';
        const location = clickLocation(link);
        const page = window.location.pathname;
        if (href.includes('calendly.com')) {
          trackEvent('click_calendly', { location, page });
          if (page.startsWith('/blog/')) {
            trackEvent('blog_cta_click', { slug: page.replace('/blog/', '') });
          }
        } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
          trackEvent('click_whatsapp', { location, page });
        } else if (href.startsWith('tel:')) {
          trackEvent('click_phone', { location, page });
        }
        return;
      }

      const faqBtn = target.closest('#faq button[aria-expanded]');
      if (faqBtn && faqBtn.getAttribute('aria-expanded') === 'false') {
        trackEvent('faq_open', {
          question: (faqBtn.textContent || '').trim().slice(0, 100),
        });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Empieza a rellenar el formulario (una vez por carga de página)
  useEffect(() => {
    let started = false;
    const onFocus = (e: FocusEvent) => {
      if (started || isSemLanding()) return;
      const t = e.target as Element | null;
      if (t?.closest?.('form')) {
        started = true;
        trackEvent('form_start', { page: window.location.pathname });
      }
    };
    document.addEventListener('focusin', onFocus);
    return () => document.removeEventListener('focusin', onFocus);
  }, []);

  // Sección de precio visible
  useEffect(() => {
    const el = document.getElementById('precio');
    if (!el || isSemLanding()) return;
    const obs = new IntersectionObserver(
      entries => {
        if (entries.some(en => en.isIntersecting)) {
          trackEvent('view_pricing');
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pathname]);

  // Conversión principal: formulario enviado -> /gracias
  useEffect(() => {
    if (pathname === '/gracias') trackEvent('generate_lead', { method: 'formulario' });
  }, [pathname]);

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
gtag('js',new Date());
gtag('config','${GA_ID}');${ADS_ID ? `
gtag('config','${ADS_ID}',{allow_enhanced_conversions:true});` : ''}`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
