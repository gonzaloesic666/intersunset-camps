'use client';

import { Check, X } from 'lucide-react';

const WA_URL = 'https://wa.me/34641900180';

const included = [
  'Puesto como Monitor durante 9 semanas',
  'Salario mínimo de 2.100$',
  'Alojamiento gratuito en el campamento',
  'Comida gratuita durante toda la estancia',
  'Visado J1 gestionado por Intersunset',
  'Formulario DS-2019',
  'Tasa SEVIS (pagada por el sponsor)',
  'Seguro médico durante todo el programa',
  'Soporte de emergencia 24h',
  'Orientación previa al viaje',
  '30 días para viajar por EEUU al terminar',
];

const notIncluded = [
  { text: 'Tarifa de entrevista en la Embajada: ~185$' },
  { text: 'Visa Integrity Fee: 250$ *', note: true },
  { text: 'Vuelos desde España: ~550€ aprox.' },
  { text: 'Certificado de antecedentes penales: 3,86€' },
];

export default function IncludesSection() {
  return (
    <section style={{ background: 'var(--gray-50)' }}>
      <div className="section-wrap">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">El Programa</span>
          <h2 className="section-title">¿Qué incluye exactamente?</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '17px' }}>
            Sin letra pequeña. Todo lo que necesitas saber antes de inscribirte.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* ── COLUMNA INCLUYE ───────────────────────────── */}
          <div className="reveal reveal-delay-1">
            {/* Header card */}
            <div
              style={{
                background: '#E8F5E9',
                padding: '16px 20px',
                borderRadius: '12px 12px 0 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Check size={18} style={{ color: '#2E7D32', flexShrink: 0 }} strokeWidth={2.5} />
              <span style={{ color: '#2E7D32', fontWeight: 700, fontSize: '15px' }}>
                Incluido en el programa
              </span>
            </div>

            {/* Items */}
            <div
              style={{
                background: '#fff',
                border: '1px solid #E8F5E9',
                borderTop: 'none',
                borderRadius: '0 0 12px 12px',
                overflow: 'hidden',
              }}
            >
              {included.map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 20px',
                    borderBottom: i < included.length - 1 ? '1px solid #F0F0F8' : 'none',
                  }}
                >
                  <Check size={16} style={{ color: '#2E7D32', flexShrink: 0 }} strokeWidth={2.5} />
                  <span style={{ color: 'var(--navy)', fontSize: '14px', fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── COLUMNA NO INCLUYE ────────────────────────── */}
          <div className="reveal reveal-delay-2">
            {/* Header card */}
            <div
              style={{
                background: '#FFEBEE',
                padding: '16px 20px',
                borderRadius: '12px 12px 0 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <X size={18} style={{ color: '#C62828', flexShrink: 0 }} strokeWidth={2.5} />
              <span style={{ color: '#C62828', fontWeight: 700, fontSize: '15px' }}>
                No incluido en el precio
              </span>
            </div>

            {/* Items */}
            <div
              style={{
                background: '#fff',
                border: '1px solid #FFEBEE',
                borderTop: 'none',
                borderRadius: '0 0 12px 12px',
                overflow: 'hidden',
              }}
            >
              {notIncluded.map(({ text }, i) => (
                <div
                  key={text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 20px',
                    borderBottom: i < notIncluded.length - 1 ? '1px solid #F0F0F8' : 'none',
                  }}
                >
                  <X size={16} style={{ color: '#C62828', flexShrink: 0 }} strokeWidth={2.5} />
                  <span style={{ color: 'var(--gray-600)', fontSize: '14px' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p style={{ color: 'var(--gray-400)', fontSize: '12px', marginTop: '10px', lineHeight: 1.6 }}>
              * La Visa Integrity Fee puede ser reembolsada al finalizar el programa si se han
              cumplido todas las condiciones.
            </p>
          </div>
        </div>

        {/* Bottom banner */}
        <div
          style={{
            marginTop: '40px',
            background: 'linear-gradient(135deg, #E38231 0%, #C96A1A 100%)',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '20px', marginBottom: '8px' }}>
            ¿Tienes dudas sobre qué incluye?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: '24px' }}>
            Escríbenos por WhatsApp y te lo explicamos en 5 minutos
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff',
              color: '#E38231',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.90')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
          >
            Preguntar por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
