'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { campaign } from '@/lib/campaign';
import { getAttribution } from '@/lib/attribution';
import { trackEvent } from '@/lib/analytics';

type Props = { id: string; variant?: 'short' | 'full' };

const INGLES = [
  'Básico',
  'Intermedio (puedo mantener una conversación)',
  'Alto',
  'Bilingüe / nativo',
];

export default function LeadForm({ id, variant = 'short' }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [privacyError, setPrivacyError] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!fd.get('privacidad')) {
      setPrivacyError(true);
      return;
    }
    setStatus('loading');

    const payload = {
      nombre: String(fd.get('nombre') || '').trim(),
      telefono: String(fd.get('telefono') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      edad: String(fd.get('edad') || '').trim(),
      ingles: String(fd.get('ingles') || ''),
      experiencia: String(fd.get('experiencia') || ''),
      habilidad: String(fd.get('habilidad') || '').trim(),
      website: String(fd.get('website') || ''),
      privacidad: true,
      formulario: id,
      ...getAttribution(),
      landing_url: window.location.origin + window.location.pathname,
    };

    try {
      const res = await fetch('/api/lead-sem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('bad status');

      trackEvent('form_submit', { form: id });
      // La conversión "lead" se dispara en la página de gracias (una sola vez)
      // con los datos de primera parte para Enhanced Conversions.
      try {
        sessionStorage.setItem(
          'sem_lead_pending',
          JSON.stringify({ email: payload.email, phone: payload.telefono })
        );
      } catch {}
      router.push(`${campaign.basePath}/gracias`);
    } catch {
      setStatus('error');
    }
  };

  const full = variant === 'full';

  return (
    <form onSubmit={onSubmit} data-sem-form={id} className="sem-form">
      <div className="sem-field">
        <label htmlFor={`${id}-nombre`}>Nombre</label>
        <input id={`${id}-nombre`} name="nombre" type="text" autoComplete="given-name" required />
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

      {full && (
        <>
          <fieldset className="sem-field sem-radio">
            <legend>¿Tienes experiencia trabajando con niños?</legend>
            <label>
              <input type="radio" name="experiencia" value="Sí" required /> Sí
            </label>
            <label>
              <input type="radio" name="experiencia" value="No" /> No
            </label>
          </fieldset>
          <div className="sem-field">
            <label htmlFor={`${id}-habilidad`}>
              ¿Tienes alguna habilidad o especialidad? <span className="sem-opt">(opcional)</span>
            </label>
            <input id={`${id}-habilidad`} name="habilidad" type="text" placeholder="Deporte, música, arte…" />
          </div>
        </>
      )}

      {/* Honeypot anti-spam */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label>
          Web <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="sem-check">
        <input
          type="checkbox"
          name="privacidad"
          onChange={() => setPrivacyError(false)}
          aria-describedby={privacyError ? `${id}-priv-err` : undefined}
        />
        <span>
          He leído y acepto la{' '}
          <a href={campaign.legal.privacy} target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>
          .
        </span>
      </label>
      {privacyError && (
        <p id={`${id}-priv-err`} className="sem-error" role="alert">
          Debes aceptar la política de privacidad para continuar.
        </p>
      )}
      {status === 'error' && (
        <p className="sem-error" role="alert">
          No hemos podido enviar tus datos. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button type="submit" className="sem-btn sem-btn--block" disabled={status === 'loading'}>
        {status === 'loading' ? 'ENVIANDO…' : 'QUIERO SABER SI PUEDO PARTICIPAR'}
      </button>
      <p className="sem-microcopy">Evaluamos tu perfil gratis · Sin compromiso</p>
    </form>
  );
}
