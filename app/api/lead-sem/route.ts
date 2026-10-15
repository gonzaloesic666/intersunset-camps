import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Destinatario principal de los leads de la landing SEM.
const LEAD_EMAIL = process.env.LEAD_SEM_EMAIL || 'gonzaloireland@gmail.com';

// CRM propio (crm-isc). El endpoint deduplica por email y guarda los campos que no reconoce
// como nota de actividad. El nombre del programa debe coincidir con el catálogo del CRM.
const CRM_LEADS_URL = process.env.CRM_LEADS_URL || 'https://crm-isc.vercel.app/api/leads';
const CRM_PROGRAM = process.env.CRM_PROGRAM_NAME || 'Camp Monitor USA';

async function sendToCrm(body: Record<string, unknown>): Promise<boolean> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 6000);
  try {
    const clean: Record<string, string> = {};
    const put = (k: string, v: unknown) => {
      const t = String(v ?? '').trim();
      if (t) clean[k] = t.slice(0, 500);
    };
    put('form_name', `Landing SEM Monitor Camp USA 2027 (${body.formulario ?? 'formulario'})`);
    put('nombre', body.nombre);
    put('email', body.email);
    put('telefono', body.telefono);
    put('programa', CRM_PROGRAM);
    // Campos sin columna propia: el CRM los guarda como nota de la actividad
    put('edad', body.edad);
    put('nivel_ingles', body.ingles);
    put('experiencia_con_ninos', body.experiencia);
    put('habilidad', body.habilidad);
    put('utm_source', body.utm_source);
    put('utm_medium', body.utm_medium);
    put('utm_campaign', body.utm_campaign);
    put('utm_term', body.utm_term);
    put('utm_content', body.utm_content);
    put('gclid', body.gclid);
    put('gbraid', body.gbraid);
    put('wbraid', body.wbraid);
    put('url_landing', body.landing_url);
    // Vincula la sesión de navegación (fuente, referrer, UTM, ciudad...) con el contacto
    put('isc_session_id', body.isc_session_id);

    const res = await fetch(CRM_LEADS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clean),
      signal: ctrl.signal,
    });
    if (!res.ok) console.error('CRM respondió', res.status, (await res.text()).slice(0, 200));
    return res.ok;
  } catch (e) {
    console.error('Error enviando al CRM:', e);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

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
  ['isc_session_id', 'Sesión CRM'],
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
    const [crmOk, ...emailResults] = await Promise.all([
      sendToCrm(body),
      ...recipients.map(async to => {
        try {
          const { error } = await resend.emails.send({
            from: process.env.RESEND_FROM || 'Intersunset Campus <onboarding@resend.dev>',
            to: [to],
            replyTo: String(email),
            subject: `Lead SEM Monitor Camp USA 2027: ${esc(nombre)}`,
            html,
          });
          if (error) console.error('Resend error para', to, error);
          return !error;
        } catch (e) {
          console.error('Resend excepción para', to, e);
          return false;
        }
      }),
    ]);
    // El lead se da por recibido si llegó al CRM o a algún email
    if (!crmOk && !emailResults.some(Boolean)) {
      return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Error:', e);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
