import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { nombre, apellidos, email, telefono, provincia, privacidad } = body;

  if (!nombre || !apellidos || !email || !provincia || !privacidad) {
    return NextResponse.json(
      { error: 'Faltan campos obligatorios' },
      { status: 400 }
    );
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1E1D48; padding: 24px; border-radius: 8px 8px 0 0;">
        <h2 style="color: white; margin: 0;">
          Nuevo contacto — Camp Monitor USA
        </h2>
      </div>
      <div style="background: #f8f8f8; padding: 24px; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px; width: 140px;">
              Nombre completo
            </td>
            <td style="padding: 8px 0; color: #1E1D48; font-weight: bold;">
              ${nombre} ${apellidos}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
            <td style="padding: 8px 0; color: #1E1D48; font-weight: bold;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px;">Teléfono</td>
            <td style="padding: 8px 0; color: #1E1D48; font-weight: bold;">
              ${telefono || 'No indicado'}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px;">Provincia</td>
            <td style="padding: 8px 0; color: #1E1D48; font-weight: bold;">${provincia}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #E8F5E9; border-radius: 8px;">
          <p style="margin: 0; color: #2E7D32; font-size: 13px;">
            ✓ El usuario ha aceptado la política de privacidad
          </p>
        </div>
      </div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: 'Intersunset Campus <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL as string],
      subject: `Nuevo contacto Camp Monitor: ${nombre} ${apellidos}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Error al enviar email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
