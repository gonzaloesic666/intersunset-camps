import type { Metadata } from 'next';
import { campaign as c } from '@/lib/campaign';
import CalendarBooked from '@/components/landing/CalendarBooked';
import LandingFooter from '@/components/landing/LandingFooter';

export const metadata: Metadata = {
  title: { absolute: 'Llamada reservada | Monitor Camp USA' },
  robots: { index: false, follow: false },
};

// URL de redirección tras confirmar la reserva en Calendly
// (Calendly → Confirmation page → Redirect to external site).
export default function LlamadaReservada() {
  return (
    <>
      <CalendarBooked />
      <main className="sem-thanks">
        <div className="sem-wrap" style={{ maxWidth: 640 }}>
          <h1>¡Llamada reservada! ✅</h1>
          <p>Te hemos enviado la confirmación por email. Hablaremos contigo en la fecha elegida.</p>
          <p>Si necesitas cambiar algo, escríbenos a {c.email}.</p>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
