'use client';

import { Clock, Calendar, FileCheck, User, Home, DollarSign } from 'lucide-react';

const highlights = [
  { label: 'Duración',    value: '9 semanas',                 Icon: Clock      },
  { label: 'Fechas',      value: 'Mayo/Junio – Agosto',       Icon: Calendar   },
  { label: 'Visado',      value: 'J1',                        Icon: FileCheck  },
  { label: 'Edad',        value: '18 – 30 años',              Icon: User       },
  { label: 'Alojamiento', value: 'Incluido en el campamento', Icon: Home       },
  { label: 'Salario',     value: 'Mínimo 2.100$',             Icon: DollarSign },
];

export default function WhatIsProgram() {
  return (
    <section id="programa" style={{ background: '#fff' }}>
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text */}
          <div className="reveal">
            <span className="section-label">El Programa</span>
            <h2 className="section-title">
              ¿Qué es el programa de Monitor de Campamento?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
              {[
                <>El programa de <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Monitor de Campamento en Estados Unidos</strong> te permite pasar el verano trabajando como monitor o instructor en un campamento americano durante 9 semanas, entre mayo/junio y agosto.</>,
                <>Trabajarás con niños y jóvenes de todo el mundo, enseñando actividades deportivas, artísticas, de naturaleza o cualquier otra especialidad que tengas: desde escalada hasta teatro, pasando por natación, cocina, música o tecnología.</>,
                <>El programa se gestiona a través del <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Visado J1</strong>, que emite la Embajada de Estados Unidos y te permite trabajar legalmente en el país durante la temporada de verano.</>,
                <>El campamento corre con los gastos de alojamiento y manutención completa, y además recibirás un salario mínimo de 2.100$. Intersunset Campus te guía en cada paso del proceso desde España.</>,
              ].map((text, i) => (
                <p key={i} style={{ color: 'var(--gray-600)', lineHeight: 1.75, fontSize: '15px' }}>
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Data cards grid */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map(({ label, value, Icon }, i) => (
              <div
                key={label}
                className={`reveal-scale reveal-delay-${Math.min(i + 1, 5)}`}
                style={{
                  background: 'var(--gray-50)',
                  border: '1px solid #E8E8F5',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--orange)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(227,130,49,0.12)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#E8E8F5';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <Icon size={20} style={{ color: 'var(--orange)', marginBottom: '12px' }} strokeWidth={1.8} />
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: '4px' }}>
                  {label}
                </p>
                <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.3 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
