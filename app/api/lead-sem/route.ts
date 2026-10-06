import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Destinatario principal de los leads de la landing SEM.
const LEAD_EMAIL = process.env.LEAD_SEM_EMAIL || 'gonzaloireland@gmail.com';

const esc = (v: unknown) =>
  String(v ?? '')
    .slice(0, 500)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const FIELDS: [string, string][] = [
  ['nombre', 'Nombre'],
  ['telefono', 'WhatsApp / teléfono'],
  ['email', 'Email'],
  ['edad', 'Edad'],
  ['ingles', 'Nivel de inglés'],
  ['experiencia', 'Experiencia con niños'],
  ['habilidad', 'Habilidad / especialidad'],
  ['utm_source', 'utm_source'],
  ['utm_medium', 'utm_medium'],
  ['utm_campaign', 'utm_campaign'],
  ['utm_term', 'utm_term'],
  ['utm_content', 'utm_content'],
  ['gclid', 'gclid'],
  ['gbraid', 'gbraid'],
  ['wbraid', 'wbraid'],
  ['landing_url', 'URL de landing'],
  ['formulario', 'Formulario'],
];

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud no válida' }, { status: 400 });
  }

  // Honeypot: los bots rellenan este campo oculto
  if (body.website) return NextResponse.json({ success: true });

  const { nombre, telefono, email, edad, privacidad } = body;
  if (!nombre || !telefono || !email || !edad || !privacidad) {
    return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(String(email))) {
    return NextResponse.json({ error: 'Email no válido' }, { status: 400 });
  }

  const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
  const rows = FIELDS.filter(([k]) => body[k])
    .map(
      ([k, label]) => `<tr>
        <td style="padding:6px 0;color:#666;font-size:13px;width:170px;">${label}</td>
        <td style="padding:6px 0;color:#1E1D48;font-weight:bold;">${esc(body[k])}</td>
      </tr>`
    )
    .join('');

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#1E1D48;padding:24px;border-radius:8px 8px 0 0;">
        <h2 style="color:#fff;margin:0;">Nuevo lead SEM — Monitor Camp USA 2027</h2>
      </div>
      <div style="background:#f8f8f8;padding:24px;border-radius:0 0 8px 8px;">
        <table style="width:100%;border-collapse:collapse;">${rows}
          <tr><td style="padding:6px 0;color:#666;font-size:13px;">Fecha de entrada</td>
          <td style="padding:6px 0;color:#1E1D48;font-weight:bold;">${esc(fecha)}</td></tr>
        </table>
        <p style="margin-top:20px;color:#2E7D32;font-size:13px;">✓ Ha aceptado la política de privacidad</p>
      </div>
    </div>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipients = Array.from(
      new Set([LEAD_EMAIL, process.env.CONTACT_EMAIL].filter(Boolean) as string[])
    );
    const results = await Promise.all(
      recipients.map(async to => {
        const { error } = await resend.emails.send({
          from: 'Intersunset Campus <onboarding@resend.dev>',
          to: [to],
          replyTo: String(email),
          subject: `Lead SEM Monitor Camp USA 2027: ${esc(nombre)}`,
          html,
        });
        if (error) console.error('Resend error para', to, error);
        return !error;
      })
    );
    if (!results.some(Boolean)) {
      return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Error:', e);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
