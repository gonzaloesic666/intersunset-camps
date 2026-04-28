'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

const PROVINCIAS = [
  'A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias',
  'Ávila', 'Badajoz', 'Barcelona', 'Bizkaia', 'Burgos', 'Cáceres',
  'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca',
  'Gipuzkoa', 'Girona', 'Granada', 'Guadalajara', 'Huelva', 'Huesca',
  'Illes Balears', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lleida',
  'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Ourense',
  'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife',
  'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo',
  'Valencia', 'Valladolid', 'Zamora', 'Zaragoza',
];

const PUNTOS = [
  'Respuesta en menos de 24 horas',
  'Cita telefónica gratuita',
  'Sin ningún compromiso',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    provincia: '',
    privacidad: false,
  });
  const router = useRouter();
  const [status, setStatus] = useState<Status>('idle');
  const [privacidadError, setPrivacidadError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (name === 'privacidad') setPrivacidadError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.privacidad) {
      setPrivacidadError(true);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push('/gracias');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  /* ── Shared input style ───────────────────────────────────── */
  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '10px',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '15px',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <section id="contacto" style={{ background: 'var(--navy)' }}>
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT — Texto explicativo ─────────────────────── */}
          <div className="reveal reveal-delay-1">
            <span className="section-label">¿Tienes dudas?</span>
            <h2 className="section-title section-title--white">
              Hablamos sin compromiso
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: '17px',
              lineHeight: 1.65,
              marginBottom: '36px',
            }}>
              Cuéntanos tu situación y te llamamos para resolver todas tus dudas
              sobre el programa.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {PUNTOS.map(punto => (
                <div key={punto} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(227,130,49,0.15)',
                    border: '1px solid rgba(227,130,49,0.30)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle size={14} style={{ color: 'var(--orange)' }} strokeWidth={2.5} />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.80)', fontSize: '15px', fontWeight: 500 }}>
                    {punto}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Formulario ───────────────────────────── */}
          <div className="reveal reveal-delay-2" style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '20px',
            padding: '40px',
          }}>

            {/* Estado de éxito */}
            {status === 'success' ? (
              <div style={{
                textAlign: 'center',
                padding: '32px 0',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'rgba(92,121,65,0.15)',
                  border: '1px solid rgba(92,121,65,0.30)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <CheckCircle size={28} style={{ color: '#5C7941' }} strokeWidth={2} />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '20px', marginBottom: '10px' }}>
                  ¡Mensaje recibido!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.6 }}>
                  Te contactamos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Fila 1: Nombre + Apellidos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="contact-label">
                        Nombre <span style={{ color: 'var(--orange)' }}>*</span>
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={form.nombre}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="apellidos" className="contact-label">
                        Apellidos <span style={{ color: 'var(--orange)' }}>*</span>
                      </label>
                      <input
                        id="apellidos"
                        name="apellidos"
                        type="text"
                        required
                        value={form.apellidos}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="Tus apellidos"
                      />
                    </div>
                  </div>

                  {/* Fila 2: Email */}
                  <div>
                    <label htmlFor="email" className="contact-label">
                      Email <span style={{ color: 'var(--orange)' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Fila 3: Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="contact-label">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="+34 600 000 000 (opcional)"
                    />
                  </div>

                  {/* Fila 4: Provincia */}
                  <div>
                    <label htmlFor="provincia" className="contact-label">
                      Provincia <span style={{ color: 'var(--orange)' }}>*</span>
                    </label>
                    <select
                      id="provincia"
                      name="provincia"
                      required
                      value={form.provincia}
                      onChange={handleChange}
                      className="contact-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="" disabled>Selecciona tu provincia</option>
                      {PROVINCIAS.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  {/* Checkbox privacidad */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      cursor: 'pointer',
                    }}>
                      <input
                        name="privacidad"
                        type="checkbox"
                        checked={form.privacidad}
                        onChange={handleChange}
                        style={{
                          width: '18px',
                          height: '18px',
                          marginTop: '2px',
                          cursor: 'pointer',
                          accentColor: 'var(--orange)',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.55 }}>
                        He leído y acepto la{' '}
                        <a
                          href="/politica-de-privacidad"
                          style={{ color: 'var(--orange)', textDecoration: 'underline' }}
                        >
                          política de privacidad
                        </a>
                        {' '}<span style={{ color: 'var(--orange)' }}>*</span>
                      </span>
                    </label>
                    {privacidadError && (
                      <p style={{ color: '#f87171', fontSize: '13px', marginTop: '6px' }}>
                        Debes aceptar la política de privacidad
                      </p>
                    )}
                  </div>

                  {/* Error estado */}
                  {status === 'error' && (
                    <div style={{
                      background: 'rgba(248,113,113,0.10)',
                      border: '1px solid rgba(248,113,113,0.25)',
                      borderRadius: '10px',
                      padding: '14px 16px',
                    }}>
                      <p style={{ color: '#f87171', fontSize: '14px', margin: 0 }}>
                        Ha ocurrido un error. Llámanos al{' '}
                        <a href="tel:+34919618440" style={{ color: '#f87171', fontWeight: 700 }}>
                          +34 919 61 84 40
                        </a>
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      width: '100%',
                      background: status === 'loading' ? 'rgba(227,130,49,0.6)' : 'var(--orange)',
                      color: '#fff',
                      padding: '16px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '16px',
                      border: 'none',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      transition: 'background 0.2s',
                      fontFamily: 'inherit',
                    }}
                    onMouseEnter={e => {
                      if (status !== 'loading')
                        (e.currentTarget as HTMLButtonElement).style.background = '#cc7228';
                    }}
                    onMouseLeave={e => {
                      if (status !== 'loading')
                        (e.currentTarget as HTMLButtonElement).style.background = 'var(--orange)';
                    }}
                  >
                    {status === 'loading' ? 'Enviando...' : 'Solicitar información gratuita →'}
                  </button>

                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
