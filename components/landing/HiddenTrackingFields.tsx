'use client';

import { useEffect, useState } from 'react';
import { captureAttribution } from '@/lib/attribution';
import { getCrmSessionId } from '@/lib/crm-tracking';

// Campos ocultos del formulario que el CRM necesita para atribuir el lead:
// - isc_session_id: sesión de navegación del CRM (solo existe si el visitante aceptó las cookies)
// - gad_campaignid: ID de campaña de Google Ads (parámetro que Ads añade a la URL del anuncio)
// Se actualizan al cargar y cuando el visitante acepta las cookies. El envío del formulario
// vuelve a leerlos justo antes de enviar.
export default function HiddenTrackingFields() {
  const [v, setV] = useState({ sid: '', cid: '' });

  useEffect(() => {
    const update = () =>
      setV({
        sid: getCrmSessionId() || '',
        cid: captureAttribution().gad_campaignid || '',
      });
    update();
    const onAccept = () => setTimeout(update, 400); // da tiempo a crear la cookie de sesión
    window.addEventListener('cookie-consent-accepted', onAccept);
    return () => window.removeEventListener('cookie-consent-accepted', onAccept);
  }, []);

  return (
    <>
      <input type="hidden" name="isc_session_id" value={v.sid} readOnly />
      <input type="hidden" name="gad_campaignid" value={v.cid} readOnly />
    </>
  );
}
