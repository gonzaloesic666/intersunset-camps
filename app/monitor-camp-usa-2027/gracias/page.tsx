import type { Metadata } from 'next';
import { campaign as c, whatsappUrl } from '@/lib/campaign';
import GraciasClient from '@/components/landing/GraciasClient';
import LandingTracker from '@/components/landing/LandingTracker';
import LandingFooter from '@/components/landing/LandingFooter';

export const metadata: Metadata = {
  title: { absolute: '¡Hemos recibido tus datos! | Monitor Camp USA' },
  robots: { index: false, follow: false },
};

export default function SemGracias() {
  return (
    <>
      <LandingTracker />
      <main className="sem-thanks">
        <div className="sem-wrap" style={{ maxWidth: 640 }}>
          <h1>¡Hemos recibido tus datos! 🇺🇸</h1>
          <p>El siguiente paso es valorar tu perfil y resolver tus dudas.</p>
          <p>Puedes reservar ahora una llamada gratuita con nuestro equipo.</p>
          <GraciasClient />
          <p style={{ marginTop: 28, fontSize: 15 }}>
            ¿Prefieres que te contactemos nosotros? Te escribiremos o llamaremos en función de los datos
            facilitados.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="sem-btn sem-btn--wa"
            data-location="gracias"
          >
            ESCRIBIR POR WHATSAPP ({c.whatsappDisplay})
          </a>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
