import { campaign } from '@/lib/campaign';

export default function LandingFooter() {
  return (
    <footer className="sem-footer">
      <div className="sem-wrap">
        <strong style={{ color: '#fff' }}>Intersunset Campus</strong>
        <div style={{ marginTop: 4 }}>{campaign.address}</div>
        <div className="sem-footer__row">
          <span>
            Email: <a href={`mailto:${campaign.email}`}>{campaign.email}</a>
          </span>
          <span>
            Teléfono: <a href={campaign.phoneHref}>{campaign.phone}</a>
          </span>
          <span>WhatsApp: {campaign.whatsappDisplay}</span>
        </div>
        <div className="sem-footer__row">
          <a href={campaign.legal.privacy} target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>
          <a href={campaign.legal.legalNotice} target="_blank" rel="noopener noreferrer">
            Aviso Legal
          </a>
          <a href={campaign.legal.cookies} target="_blank" rel="noopener noreferrer">
            Cookies
          </a>
        </div>
        <p style={{ marginTop: 14, fontSize: 12, opacity: 0.7 }}>
          Las plazas están sujetas a disponibilidad de campamentos y programa. Importes externos
          (tasas oficiales, vuelos, etc.) orientativos: consulta las tarifas vigentes.
        </p>
      </div>
    </footer>
  );
}
