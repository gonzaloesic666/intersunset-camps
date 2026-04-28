import type { Metadata } from 'next';
import { CheckCircle, Phone, MessageCircle, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '¡Mensaje recibido! | Intersunset Campus',
  robots: { index: false, follow: false },
};

const steps = [
  {
    Icon: Phone,
    title: 'Te llamamos',
    desc: 'Recibirás una llamada de nuestro equipo',
  },
  {
    Icon: MessageCircle,
    title: 'Resolvemos dudas',
    desc: 'Explicamos el programa al detalle',
  },
  {
    Icon: Calendar,
    title: 'Reservas tu plaza',
    desc: 'Con solo 150€ aseguras tu sitio',
  },
];

export default function GraciasPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '100vh',
          background: 'var(--navy)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '72px',
          paddingBottom: '48px',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
            padding: '48px 24px',
            textAlign: 'center',
          }}
        >
          {/* Check circle with bounce animation */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(92,121,65,0.18)',
              border: '2px solid rgba(92,121,65,0.40)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px',
              animation: 'scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
            }}
          >
            <CheckCircle size={64} style={{ color: '#5C7941' }} strokeWidth={1.8} />
          </div>

          {/* Title */}
          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 800,
              marginBottom: '12px',
              lineHeight: 1.15,
            }}
          >
            ¡Mensaje recibido!
          </h1>

          {/* Subtitle */}
          <p style={{ color: 'var(--orange)', fontSize: '20px', fontWeight: 600, marginBottom: '20px' }}>
            Te contactamos en menos de 24 horas
          </p>

          {/* Description */}
          <p
            style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: '16px',
              lineHeight: 1.70,
              maxWidth: '480px',
              margin: '0 auto 28px',
            }}
          >
            Hemos recibido tu solicitud y uno de nuestros asesores se pondrá en contacto contigo
            pronto para resolver todas tus dudas sobre el programa Monitor Camp USA.
          </p>

          {/* Orange divider */}
          <div
            style={{
              width: '60px',
              height: '2px',
              background: 'var(--orange)',
              margin: '0 auto 36px',
              borderRadius: '2px',
            }}
          />

          {/* Steps */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            {steps.map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center',
                }}
              >
                <Icon size={28} style={{ color: 'var(--orange)' }} strokeWidth={1.8} />
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '15px', margin: 0 }}>{title}</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <a href="/" className="btn-primary" style={{ padding: '14px 32px' }}>
              Volver al inicio
            </a>
            <a
              href="https://wa.me/34641900180"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '14px 32px' }}
            >
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Phone text */}
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>
            ¿Tienes prisa? Llámanos al{' '}
            <a href="tel:+34919618440" style={{ color: 'rgba(255,255,255,0.70)', fontWeight: 600 }}>
              +34 919 61 84 40
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
