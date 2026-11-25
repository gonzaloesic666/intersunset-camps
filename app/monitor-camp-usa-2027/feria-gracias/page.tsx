import type { Metadata } from 'next';
import { campaign as c, whatsappUrl } from '@/lib/campaign';
import { fair, fairCalendarUrl } from '@/lib/fair';
import FairThanksClient from '@/components/landing/FairThanksClient';
import LandingTracker from '@/components/landing/LandingTracker';
import LandingFooter from '@/components/landing/LandingFooter';
import UsFlag from '@/components/landing/UsFlag';

export const metadata: Metadata = {
  title: { absolute: '¡Inscripción recibida! | Feria online de campamentos' },
  robots: { index: false, follow: false },
};

export default function FeriaGracias() {
  return (
    <>
      <LandingTracker />
      <FairThanksClient />
      <main className="sem-thanks">
        <div className="sem-wrap" style={{ maxWidth: 640 }}>
          <h1>
            ¡Inscripción recibida! <UsFlag height={28} />
          </h1>
          <p>
            Te has apuntado a la {fair.name.toLowerCase()} del {fair.dateLong}
            {fair.timeLabel ? `, a las ${fair.timeLabel}` : ''}.
          </p>

          <ol className="fair-next">
            <li>
              <strong>Confirma tu plaza con el pago de {fair.fee}.</strong>{' '}
              {fair.paymentUrl
                ? 'Puedes hacerlo ahora con el botón de abajo.'
                : 'Te enviaremos el enlace de pago por email o WhatsApp en las próximas horas.'}
            </li>
            <li>
              <strong>Recibirás el acceso a la feria</strong> antes del {fair.dateShort}.
            </li>
            <li>
              <strong>{fair.refundText}</strong> Antes de pagar recibirás las condiciones por escrito.
            </li>
          </ol>

          {fair.paymentUrl && (
            <a
              href={fair.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sem-btn sem-btn--block"
              data-location="feria_pago"
            >
              PAGAR {fair.fee} Y CONFIRMAR MI PLAZA
            </a>
          )}

          <div className="fair-thanks-actions">
            <a
              href={fairCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sem-btn sem-btn--wa"
              data-location="feria_calendario"
            >
              AÑADIR AL CALENDARIO
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sem-btn sem-btn--wa"
              data-location="feria_gracias"
            >
              DUDAS POR WHATSAPP ({c.whatsappDisplay})
            </a>
          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
