// Feria online de campamentos del sponsor (evento temporal en la landing de Camps).
// Todo lo editable está aquí. Al pasar el plazo de inscripción, la sección y el aviso
// desaparecen solos de la landing y la API deja de aceptar inscripciones.
export const fair = {
  name: 'Feria online de campamentos',
  dateShort: '9 de diciembre',
  dateLong: 'miércoles 9 de diciembre de 2026',
  dateISO: '2026-12-09',
  // Hora de la feria (vacío = no se muestra). Ej.: '17:00 (hora peninsular)'
  timeLabel: '',
  deadlineShort: '7 de diciembre',
  deadlineLong: 'lunes 7 de diciembre',
  // Fin de la inscripción: 7 de diciembre a las 23:59 hora peninsular (en diciembre, UTC+1)
  signupDeadline: '2026-12-08T00:00:00+01:00',
  fee: '50 €',
  refundText: 'Si no consigues campamento, te devolvemos los 50 €.',
  // Enlace de pago de 50 € (p. ej. un Payment Link de Stripe). Vacío = se lo envías tú después.
  paymentUrl: process.env.NEXT_PUBLIC_FAIR_PAYMENT_URL || '',
  crmFormName: 'Feria online de campamentos 9-dic-2026',
};

export const FAIR_DEADLINE_MS = Date.parse(fair.signupDeadline);
export const isFairOpen = (now: number = Date.now()) => now < FAIR_DEADLINE_MS;

// Evento de día completo en Google Calendar (se puede afinar cuando haya hora confirmada)
export const fairCalendarUrl = () => {
  const day = fair.dateISO.replace(/-/g, '');
  const next = new Date(Date.parse(fair.dateISO + 'T12:00:00Z') + 864e5).toISOString().slice(0, 10).replace(/-/g, '');
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Feria online de campamentos (Intersunset Campus)',
    dates: `${day}/${next}`,
    details: 'Feria online con campamentos de Estados Unidos. Te enviaremos el acceso por email o WhatsApp.',
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
};
