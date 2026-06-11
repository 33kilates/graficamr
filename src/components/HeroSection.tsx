import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      {/* Formas geométricas decorativas no fundo */}
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="hero-shape hero-shape--red-diamond" />
        <div className="hero-shape hero-shape--blue-rectangle" />
        <div className="hero-shape hero-shape--red-circle" />
        <div className="hero-shape hero-shape--blue-triangle" />
        <div className="hero-shape hero-shape--red-line" />
      </div>

      <div className="container hero-grid">
        {/* Coluna esquerda — Copy persuasiva */}
        <div className="hero-copy">
          <span className="hero-pill">
            PARA INDÚSTRIAS, FRANQUIAS E MARCAS QUE NÃO ACEITAM O MEDÍOCRE
          </span>

          <h1 className="hero-headline">
            Sua Embalagem Está Custando Clientes, Devoluções e{' '}
            <span className="hero-headline__accent">Credibilidade?</span>
          </h1>

          <p className="hero-subheadline">
            Embalagens frágeis destroem a percepção de valor do seu produto.
            Na MR, entregamos qualidade estrutural incomparável — e o nosso{' '}
            <strong>Planejamento de Suprimentos</strong> permite que você
            parcele o investimento enquanto suas vendas pagam cada parcela.
          </p>

          {/* CTAs lado a lado */}
          <div className="hero-ctas">
            <a
              href="https://wa.me/5519995021280?text=Ol%C3%A1%2C%20quero%20elevar%20o%20padr%C3%A3o%20da%20minha%20marca%20com%20as%20embalagens%20MR."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero-cta-primary"
            >
              <MessageCircle size={20} />
              QUERO ELEVAR MINHA MARCA
            </a>

            <a
              href="#planos"
              className="btn btn-outline hero-cta-secondary"
            >
              VER PLANOS ESTRATÉGICOS
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Indicadores de confiança */}
          <ul className="hero-trust">
            <li className="hero-trust__item">
              <CheckCircle2 size={16} />
              Pedido mínimo: 500 unidades
            </li>
            <li className="hero-trust__item">
              <CheckCircle2 size={16} />
              Parcele no cartão
            </li>
            <li className="hero-trust__item">
              <CheckCircle2 size={16} />
              Atendemos todo o Brasil
            </li>
          </ul>
        </div>

        {/* Coluna direita — Showcase visual */}
        <div className="hero-visual">
          <div className="hero-visual__shapes" aria-hidden="true">
            <div className="hero-visual__shape hero-visual__shape--1" />
            <div className="hero-visual__shape hero-visual__shape--2" />
          </div>

          <div className="hero-visual__card">
            <img
              src="/images/hero-produto.jpg"
              alt="Showroom de embalagens personalizadas MR — caixas e sacolas de diversos clientes"
              className="hero-visual__image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
