'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--navy-dark)' }}>
      {/* Main footer */}
      <div className="section-wrap" style={{ paddingTop: '64px', paddingBottom: '48px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <a href="/" style={{ display: 'inline-block', marginBottom: '4px' }}>
              <Image
                src="/logo.png"
                alt="Intersunset Campus"
                width={140}
                height={40}
                style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
              />
            </a>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Contacto
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                {
                  Icon: Mail,
                  href: 'mailto:camp@intersunsetcampus.com',
                  text: 'camp@intersunsetcampus.com',
                },
                {
                  Icon: Phone,
                  href: 'tel:+34919618440',
                  text: '+34 919 61 84 40',
                },
              ].map(({ Icon, href, text }) => (
                <a
                  key={text}
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.18s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--orange)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)')}
                >
                  <Icon size={15} strokeWidth={1.8} style={{ flexShrink: 0 }} />
                  {text}
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
                <MapPin size={15} strokeWidth={1.8} style={{ flexShrink: 0 }} />
                Madrid, España
              </div>
            </div>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Legal
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/aviso-legal',  label: 'Aviso legal' },
                { href: '/privacidad',   label: 'Política de privacidad' },
                { href: '/cookies',      label: 'Política de cookies' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.18s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(0,0,0,0.15)',
          padding: '16px 0',
        }}
      >
        <div
          className="section-wrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px' }}>
            © {year} Intersunset Campus. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
