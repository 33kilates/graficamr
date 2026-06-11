import React from 'react';
import { TrendingDown, RefreshCcw, AlertTriangle } from 'lucide-react';
import './AgitationSection.css';

const painCards = [
  {
    icon: TrendingDown,
    accent: 'red' as const,
    title: 'A Armadilha dos Centavos',
    body: 'Você economiza R$ 0,30 por caixa, mas perde R$ 200 quando o cliente pede devolução porque o produto chegou solto, amassado ou com a embalagem rasgada no transporte. Cada devolução corrói silenciosamente o seu lucro.',
  },
  {
    icon: RefreshCcw,
    accent: 'blue' as const,
    title: 'A Roleta da Qualidade',
    body: 'O fornecedor barato entrega a primeira remessa bonita. Na segunda, o papel vem fino, a cor sai diferente e o hot stamping descasca na mão do cliente. Sem padronização, sua marca perde credibilidade a cada novo lote.',
  },
  {
    icon: AlertTriangle,
    accent: 'red' as const,
    title: 'A Compra no Desespero',
    body: 'Comprar pequenas quantidades de última hora sai mais caro, gera atrasos, e você fica refém de quem tem estoque disponível — não de quem entrega qualidade. Sem planejamento, o seu caixa sangra.',
  },
];

const AgitationSection: React.FC = () => {
  return (
    <section id="qualidade" className="agitation-section" aria-labelledby="agitation-heading">
      <div className="container">
        {/* Section header */}
        <header className="agitation-header">
          <span className="section-tag">POR QUE A EMBALAGEM BARATA SAI CARA?</span>
          <h2 id="agitation-heading" className="section-title">
            O Preço Oculto do Fornecedor "Mais Barato"
          </h2>
          <p className="section-subtitle">
            Você não economiza comprando caixas frágeis. Você apenas transfere o custo para
            devoluções, reclamações e clientes que nunca mais voltam.
          </p>
        </header>

        {/* Pain cards grid */}
        <div className="agitation-grid">
          {painCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="agitation-card">
                <div className={`agitation-icon-circle agitation-icon--${card.accent}`}>
                  <Icon size={28} strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="agitation-card__title">{card.title}</h3>
                <p className="agitation-card__body">{card.body}</p>
              </article>
            );
          })}
        </div>

        {/* Highlighted quote box */}
        <blockquote className="agitation-quote">
          <p>
            Não brigamos por centavos porque a sua marca não pode parecer barata. A MR Embalagens
            entrega qualidade estrutural e estética que valoriza cada produto que sai da sua linha.
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default AgitationSection;
