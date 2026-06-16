import { useState, useEffect, useCallback } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { trackContact } from '../lib/metaTracking';
import './Header.css';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Qualidade', href: '#qualidade' },
  { label: 'Planos', href: '#planos' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#duvidas' },
];

const WHATSAPP_URL =
  'https://wa.me/5519995021280?text=Olá, gostaria de saber mais sobre as embalagens MR.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detecta scroll para mudar fundo do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trava body scroll quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);

      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth',
        });
      }
    },
    []
  );

  return (
    <>
      <header
        className={`mr-header${scrolled ? ' mr-header--scrolled' : ''}`}
        role="banner"
      >
        <div className="mr-header__inner">
          {/* ── Logo oficial ── */}
          <a
            href="#inicio"
            className="mr-header__logo"
            aria-label="MR Gráfica e Embalagens — Início"
            onClick={(e) => handleNavClick(e, '#inicio')}
          >
            <img
              src="/images/logo-mr-oficial.jpeg"
              alt="MR Gráfica e Embalagens Personalizadas"
              className="mr-header__logo-img"
            />
          </a>

          {/* ── Navegação desktop ── */}
          <nav className="mr-header__nav" aria-label="Navegação principal">
            <ul className="mr-header__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="mr-header__nav-item">
                  <a
                    href={link.href}
                    className="mr-header__nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── CTA desktop ── */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-header__cta"
            onClick={() => trackContact('Header CTA')}
          >
            <MessageCircle size={18} strokeWidth={2.2} />
            <span>Fale Conosco</span>
          </a>

          {/* ── Botão hamburger mobile ── */}
          <button
            className="mr-header__hamburger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mr-mobile-menu"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ── Menu mobile overlay ── */}
      <div
        id="mr-mobile-menu"
        className={`mr-mobile-overlay${mobileOpen ? ' mr-mobile-overlay--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Backdrop */}
        <div
          className="mr-mobile-overlay__backdrop"
          onClick={() => setMobileOpen(false)}
        />

        {/* Painel deslizante */}
        <div className="mr-mobile-overlay__panel">
          <nav aria-label="Navegação mobile">
            <ul className="mr-mobile-overlay__list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mr-mobile-overlay__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-mobile-overlay__cta"
            onClick={() => trackContact('Header Mobile CTA')}
          >
            <MessageCircle size={20} strokeWidth={2.2} />
            <span>Fale Conosco</span>
          </a>
        </div>
      </div>
    </>
  );
}
