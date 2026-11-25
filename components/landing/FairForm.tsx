'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { campaign } from '@/lib/campaign';
import { fair, isFairOpen } from '@/lib/fair';
import { getAttribution } from '@/lib/attribution';
import { trackEvent } from '@/lib/analytics';
import { getCrmSessionId } from '@/lib/crm-tracking';
import HiddenTrackingFields from '@/components/landing/HiddenTrackingFields';

const INGLES = [
  'Básico',
  'Intermedio (puedo mantener una conversación)',
  'Alto',
  'Bilingüe / nativo',
];

// Formulario de inscripción a la feria online (evento temporal).
export default function FairForm() {
  const id = 'feria';
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'closed'>('idle');
  const [checkError, setCheckError] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFairOpen()) {
      setStatus('closed');
      return;
    }
    const fd = new FormData(e.currentTarget);
    if (!fd.get('privacidad') || !fd.get('condiciones_feria')) {
      setCheckError(true);
      return;
    }
    setStatus('loading');

    const payload = {
      tipo: 'feria',
      nombre: String(fd.get('nombre') || '').trim(),
      apellidos: String(fd.get('apellidos') || '').trim(),
      telefono: String(fd.get('telefono') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      edad: String(fd.get('edad') || '').trim(),
      ingles: String(fd.get('ingles') || ''),
      ya_participante: String(fd.get('ya_participante') || ''),
      condiciones_feria: 'Sí',
      website: String(fd.get('website') || ''),
      privacidad: true,
      formulario: id,
      isc_session_id: getCrmSessionId() || String(fd.get('isc_session_id') || ''),
      gad_campaignid: String(fd.get('gad_campaignid') || ''),
      ...getAttribution(),
      landing_url: window.location.origin + window.location.pathname,
    };

    try {
      const res = await fetch('/api/lead-sem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 410) {
        setStatus('closed');
        return;
      }
      if (!res.ok) throw new Error('bad status');

      trackEvent('fair_signup', { form: id });
      try {
        sessionStorage.setItem(
          'sem_lead_pending',
          JSON.stringify({ email: payload.email, phone: payload.telefono })
        );
      } catch {}
      router.push(`${campaign.basePath}/feria-gracias`);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'closed') {
    return (
      <p className="sem-error" role="alert">
        La inscripción a la feria ya está cerrada. Puedes dejarnos tus datos en el formulario de arriba y te
        contamos las próximas opciones.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} data-sem-form={id} className="sem-form">
      <div className="sem-field">
        <label htmlFor={`${id}-nombre`}>Nombre</label>
        <input id={`${id}-nombre`} name="nombre" type="text" autoComplete="given-name" required />
      </div>
      <div className="sem-field">
        <label htmlFor={`${id}-apellidos`}>Apellidos</label>
        <input id={`${id}-apellidos`} name="apellidos" type="text" autoComplete="family-name" required />
      </div>
      <div className="sem-field">
        <label htmlFor={`${id}-telefono`}>WhatsApp / teléfono</label>
        <input id={`${id}-telefono`} name="telefono" type="tel" inputMode="tel" autoComplete="tel" required />
      </div>
      <div className="sem-field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required />
      </div>
      <div className="sem-field">
        <label htmlFor={`${id}-edad`}>Edad</label>
        <input id={`${id}-edad`} name="edad" type="number" inputMode="numeric" min={16} max={99} required />
      </div>
      <div className="sem-field">
        <label htmlFor={`${id}-ingles`}>
          Nivel de inglés aproximado <span className="sem-opt">(opcional)</span>
        </label>
        <select id={`${id}-ingles`} name="ingles" defaultValue="">
          <option value="">Selecciona…</option>
          {INGLES.map(o => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <fieldset className="sem-field sem-radio">
        <legend>¿Ya estás inscrito/a en Monitor Camp USA con nosotros?</legend>
        <label>
          <input type="radio" name="ya_participante" value="Sí" required /> Sí
        </label>
        <label>
          <input type="radio" name="ya_participante" value="No" /> No
        </label>
      </fieldset>

      <HiddenTrackingFields />

      {/* Honeypot anti-spam */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label>
          Web <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="sem-check">
        <input type="checkbox" name="condiciones_feria" onChange={() => setCheckError(false)} />
        <span>
          Entiendo que para participar en la feria hay que hacer un primer pago de {fair.fee}, y que{' '}
          {fair.refundText.charAt(0).toLowerCase() + fair.refundText.slice(1)}
        </span>
      </label>
      <label className="sem-check">
        <input type="checkbox" name="privacidad" onChange={() => setCheckError(false)} />
        <span>
          He leído y acepto la{' '}
          <a href={campaign.legal.privacy} target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>
          .
        </span>
      </label>
      {checkError && (
        <p className="sem-error" role="alert">
          Para inscribirte tienes que aceptar las condiciones de la feria y la política de privacidad.
        </p>
      )}
      {status === 'error' && (
        <p className="sem-error" role="alert">
          No hemos podido enviar tu inscripción. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button type="submit" className="sem-btn sem-btn--block" disabled={status === 'loading'}>
        {status === 'loading' ? 'ENVIANDO…' : 'QUIERO INSCRIBIRME EN LA FERIA'}
      </button>
      <p className="sem-microcopy">
        Plaza con {fair.fee} · {fair.refundText}
      </p>
    </form>
  );
}
