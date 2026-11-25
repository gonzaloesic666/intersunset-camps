import FairForm from '@/components/landing/FairForm';
import { fair } from '@/lib/fair';

// Feria online en la portada (temporal): se oculta sola al cerrar la inscripción
// gracias a la clase `fair-only` + el script de `app/(site)/layout.tsx`.
export default function FairHome() {
  return (
    <section id="feria" className="fair-home fair-only" aria-labelledby="feria-home-titulo">
      <div className="section-wrap">
        <div className="fair-home__grid">
          <div>
            <span className="section-label">Evento online · {fair.dateShort}</span>
            <h2 className="section-title" id="feria-home-titulo">
              {fair.name}
            </h2>
            <p className="fair-home__lead">
              Nuestro sponsor organiza una feria online con campamentos de Estados Unidos que buscan monitores
              para el verano 2027. Participas desde casa.
            </p>
            <ul className="fair-home__ticks">
              <li>
                Fecha: {fair.dateLong}
                {fair.timeLabel ? `, ${fair.timeLabel}` : ''}
              </li>
              <li>Reserva tu plaza con {fair.fee}</li>
              <li>{fair.refundText}</li>
              <li>Inscripción abierta hasta el {fair.deadlineLong}</li>
            </ul>
            <p className="fair-home__small">Antes de pagar recibirás todas las condiciones por escrito.</p>
          </div>
          <div className="sem-formcard">
            <FairForm source="feria_home" />
          </div>
        </div>
      </div>
    </section>
  );
}
