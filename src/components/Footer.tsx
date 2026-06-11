import { Phone, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

/* Ícone Instagram como SVG inline (lucide-react pode não exportar) */
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WHATSAPP_URL =
  'https://wa.me/5519995021280?text=Olá, gostaria de saber mais sobre as embalagens MR.';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Qualidade', href: '#qualidade' },
  { label: 'Planos', href: '#planos' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#duvidas' },
];

const SEGMENTOS = [
  'Joias e Semijoias',
  'Alimentação e Fast-Food',
  'Cosméticos e E-commerce',
  'Brindes Corporativos',
  'Sacolas e Acessórios',
];

/** Smooth scroll para âncora interna */
function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const offset = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className="mr-footer" role="contentinfo">
      <div className="mr-footer__inner">
        {/* ── Coluna 1 — Marca ── */}
        <div className="mr-footer__col mr-footer__col--brand">
          <a
            href="#inicio"
            className="mr-footer__logo"
            aria-label="MR Gráfica e Embalagens — Início"
            onClick={(e) => scrollToSection(e, '#inicio')}
          >
            <svg
              viewBox="0 0 220 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-footer__logo-svg"
              aria-hidden="true"
            >
              <text
                x="4"
                y="38"
                fontFamily="Outfit, Arial, sans-serif"
                fontWeight="800"
                fontSize="42"
                fill="#ffffff"
                letterSpacing="-1"
              >
                MR
              </text>
              <text
                x="88"
                y="20"
                fontFamily="Outfit, Arial, sans-serif"
                fontWeight="600"
                fontSize="12"
                fill="#910f36"
              >
                ®
              </text>
              <rect x="4" y="44" width="90" height="2.5" rx="1.25" fill="#910f36" />
              <text
                x="4"
                y="56"
                fontFamily="Inter, Arial, sans-serif"
                fontWeight="600"
                fontSize="10.5"
                fill="rgba(255,255,255,0.85)"
                letterSpacing="1.8"
              >
                GRÁFICA E EMBALAGENS
              </text>
              <text
                x="4"
                y="68"
                fontFamily="Inter, Arial, sans-serif"
                fontWeight="500"
                fontSize="9"
                fill="rgba(255,255,255,0.5)"
                letterSpacing="3.2"
              >
                PERSONALIZADAS
              </text>
            </svg>
          </a>

          <p className="mr-footer__desc">
            Embalagens personalizadas de alto padrão para indústrias, franquias e marcas
            que valorizam qualidade e consistência.
          </p>

          {/* Redes sociais */}
          <div className="mr-footer__socials">
            <a
              href="https://www.instagram.com/graficamr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga no Instagram @graficamr"
              className="mr-footer__social-link"
            >
              <InstagramIcon size={20} />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale via WhatsApp"
              className="mr-footer__social-link"
            >
              <MessageCircle size={20} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* ── Coluna 2 — Links Rápidos ── */}
        <div className="mr-footer__col">
          <h4 className="mr-footer__col-title">Navegação</h4>
          <ul className="mr-footer__link-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mr-footer__link"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Coluna 3 — Segmentos ── */}
        <div className="mr-footer__col">
          <h4 className="mr-footer__col-title">Segmentos</h4>
          <ul className="mr-footer__link-list">
            {SEGMENTOS.map((seg) => (
              <li key={seg}>
                <a
                  href="#segmentos"
                  className="mr-footer__link"
                  onClick={(e) => scrollToSection(e, '#segmentos')}
                >
                  {seg}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Coluna 4 — Contato ── */}
        <div className="mr-footer__col">
          <h4 className="mr-footer__col-title">Contato</h4>
          <ul className="mr-footer__contact-list">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-footer__contact-item"
              >
                <MessageCircle size={18} strokeWidth={2} />
                <span>(19) 99502-1280</span>
              </a>
            </li>

            <li>
              <a
                href="tel:+551934525163"
                className="mr-footer__contact-item"
              >
                <Phone size={18} strokeWidth={2} />
                <span>(19) 3452-5163</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/graficamr"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-footer__contact-item"
              >
                <InstagramIcon size={18} />
                <span>@graficamr</span>
              </a>
            </li>

            <li>
              <div className="mr-footer__contact-item">
                <MapPin size={18} strokeWidth={2} />
                <span>Limeira — SP</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Barra inferior ── */}
      <div className="mr-footer__bottom">
        <div className="mr-footer__bottom-inner">
          <p className="mr-footer__copyright">
            © 2026 MR Gráfica e Embalagens. Todos os direitos reservados.
          </p>
          <p className="mr-footer__tagline">
            Feito com <span aria-label="amor">❤️</span> para marcas que não aceitam o medíocre
          </p>
        </div>
      </div>
    </footer>
  );
}
