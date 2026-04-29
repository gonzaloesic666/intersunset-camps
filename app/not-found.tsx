import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '80vh',
          background: '#1E1D48',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '24px',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '120px',
            fontWeight: 900,
            color: '#E38231',
            lineHeight: 1,
            margin: 0,
          }}
        >
          404
        </p>

        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#fff', margin: 0 }}>
          Esta página no existe
        </h1>

        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '400px',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Puede que la URL esté mal escrita o que la página haya sido eliminada.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            href="/"
            style={{
              background: '#E38231',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Volver al inicio
          </Link>
          <Link
            href="/blog"
            style={{
              background: 'transparent',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '15px',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          >
            Ver el blog
          </Link>
        </div>

        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
          ¿Necesitas ayuda? Llámanos al{' '}
          <a href="tel:+34919618440" style={{ color: '#E38231' }}>
            +34 919 61 84 40
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
