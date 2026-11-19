import { campaign } from '@/lib/campaign';

// Enlace de WhatsApp (un toque) hacia el teléfono del lead, con el mensaje ya escrito.
// Se abre desde el móvil del equipo: la persona de Intersunset solo tiene que pulsar "enviar".

// Normaliza a formato internacional sin "+" (lo que pide wa.me). Devuelve null si no se puede
// deducir con seguridad (en ese caso el email avisa de que hay que revisar el número).
export function normalizePhone(raw: string): string | null {
  const t = String(raw || '').trim();
  const explicit = /^\s*(\+|00)/.test(t); // prefijo internacional escrito por la persona
  let digits = t.replace(/\D/g, '');
  if (explicit) {
    if (t.trim().startsWith('00')) digits = digits.replace(/^00/, '');
    return digits.length >= 10 && digits.length <= 15 ? digits : null;
  }
  if (/^[6-9]\d{8}$/.test(digits)) return '34' + digits; // móvil o fijo español de 9 cifras
  if (/^34[6-9]\d{8}$/.test(digits)) return digits; // ya trae el 34
  return null; // otros formatos son ambiguos (¿falta o sobra un dígito?): revisar a mano
}

function firstName(full: string): string {
  const first = String(full || '').trim().split(/\s+/)[0] || '';
  return first.charAt(0).toUpperCase() + first.slice(1);
}

export type LeadWaOpts = { program?: string; calendly?: string };

export function leadWhatsAppMessage(nombre: string, opts?: LeadWaOpts): string {
  const name = firstName(nombre);
  const program = opts?.program ?? `Monitor Camp USA ${campaign.year}`;
  const calendly = opts?.calendly ?? campaign.calendlyUrl;
  return (
    `Hola${name ? ' ' + name : ''}, soy ${campaign.senderName}, del equipo de Intersunset Campus 🇺🇸 ` +
    `Hemos recibido tu solicitud para ${program} y te hemos enviado un email con la información. ` +
    `¿Nos confirmas si te ha llegado? Si prefieres, lo vemos en una llamada gratuita de 15 min: ${calendly}`
  );
}

export function leadWhatsAppLink(nombre: string, telefono: string, opts?: LeadWaOpts): string | null {
  const phone = normalizePhone(telefono);
  if (!phone) return null;
  return `https://wa.me/${phone}?text=${encodeURIComponent(leadWhatsAppMessage(nombre, opts))}`;
}
