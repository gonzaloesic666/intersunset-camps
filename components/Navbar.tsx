'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CALENDLY = 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m';

const links = [
  { href: '/#programa',    label: 'El Programa' },
  { href: '/#beneficios',  label: 'Beneficios' },
  { href: '/#proceso',     label: 'Cómo funciona' },
  { href: '/#precio',      label: 'Precio' },
  { href: '/#testimonios', label: 'Testimonios' },
  { href: '/blog',         label: 'Blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        inset: '0 0 auto',
        zIndex: 100,
        height: '72px',
        background: scrolled ? 'rgba(255,255,255,0.96)' : '#fff',
        borderBottom: '1px solid #EBEBF5',
        boxShadow: scrolled
          ? '0 4px 24px rgba(30,29,72,0.10)'
          : '0 1px 20px rgba(30,29,72,0.06)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'box-shadow 0.3s, background 0.3s',
      }}
    >
      <div
        className="section-wrap"
        style={{
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo-transparent.png"
            alt="Intersunset Campus"
            width={80}
            height={28}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '36px' }}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                color: 'var(--gray-600)',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 0.18s',
              }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'var(--navy)')}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'var(--gray-600)')}
            >
              {label}
            </a>
          ))}
          <a
            href="/#contacto"
            style={{
              color: 'var(--orange)',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'opacity 0.18s',
            }}
            onMouseEnter={e => ((e.target as HTMLAnchorElement).style.opacity = '0.75')}
            onMouseLeave={e => ((e.target as HTMLAnchorElement).style.opacity = '1')}
          >
            Pide información
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            Reserva tu cita
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--navy)' }}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: '#fff',
            borderTop: '1px solid #EBEBF5',
            boxShadow: '0 12px 32px rgba(30,29,72,0.12)',
            padding: '8px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                borderBottom: '1px solid #F0F0F8',
                color: 'var(--gray-600)',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              padding: '14px 0',
              borderBottom: '1px solid #F0F0F8',
              color: 'var(--orange)',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Pide información
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => setOpen(false)}
            style={{ marginTop: '16px', justifyContent: 'center' }}
          >
            Reserva tu cita
          </a>
        </div>
      )}
    </header>
  );
}
