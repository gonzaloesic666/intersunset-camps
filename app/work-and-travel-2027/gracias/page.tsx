import type { Metadata } from 'next';
import { campaign as c } from '@/lib/campaign';
import { wt, whatsappUrlWt } from '@/lib/campaign-wt';
import GraciasClient from '@/components/landing/GraciasClient';
import LandingTracker from '@/components/landing/LandingTracker';
import LandingFooter from '@/components/landing/LandingFooter';
import UsFlag from '@/components/landing/UsFlag';

export const metadata: Metadata = {
  title: { absolute: '¡Hemos recibido tus datos! | Work and Travel USA' },
  robots: { index: false, follow: false },
};

export default function WtGracias() {
  return (
    <>
      <LandingTracker />
      <main className="sem-thanks">
        <div className="sem-wrap" style={{ maxWidth: 640 }}>
          <h1>
            ¡Hemos recibido tus datos! <UsFlag height={28} />
          </h1>
          <p>El siguiente paso es valorar tu perfil y ver qué opción te encaja mejor: Standard, Premium u Oferta propia.</p>
          <p>Puedes reservar ahora una llamada gratuita de 15 minutos con nuestro equipo.</p>
          <GraciasClient calendlyUrl={wt.calendlyUrl} leadSource="landing_sem_wt" adsLabel={wt.adsLeadLabel} />
          <p style={{ marginTop: 28, fontSize: 15 }}>
            ¿Prefieres que te contactemos nosotros? Te escribiremos o llamaremos en función de los datos
            facilitados.
          </p>
          <a
            href={whatsappUrlWt()}
            target="_blank"
            rel="noopener noreferrer"
            className="sem-btn sem-btn--wa"
            data-location="gracias"
          >
            ESCRIBIR POR WHATSAPP ({c.whatsappDisplay})
          </a>
        </div>
      </main>
      <LandingFooter email={wt.email} />
    </>
  );
}
