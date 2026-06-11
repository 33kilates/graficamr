import React from 'react';
import './NichesSection.css';

interface SegmentCard {
  image: string;
  title: string;
  text: string;
}

const segments: SegmentCard[] = [
  {
    image: '/images/alimentacao.jpg',
    title: 'Alimentação e Fast-Food',
    text: 'Gramatura grossa com resistência mecânica superior e laminação interna de verdade. Fundo automático reforçado que não vaza gordura e não amassa na bag do motoboy. Seu hambúrguer ou doce gourmet chega intacto e bonito.',
  },
  {
    image: '/images/joias.jpg',
    title: 'Joias e Semijoias',
    text: 'Berços aveludados firmes com corte preciso, hot stamping impecável que não descasca e papel de alta gramatura. A joia de R$ 300 não pode chegar em uma caixa com aspecto barato. A embalagem MR fixa sua marca na memória da revendedora.',
  },
  {
    image: '/images/cosmeticos.jpg',
    title: 'Cosméticos e E-commerce',
    text: 'Caixas estruturadas de altíssima proteção mecânica para envios postais. Papel rígido de alta gramatura que não cede ao peso de outras caixas nos Correios. Proteção logística e visual para o seu negócio online.',
  },
  {
    image: '/images/brindes.jpg',
    title: 'Brindes Corporativos',
    text: 'Acabamento em caixa rígida de alto luxo com cortes precisos e fundo automático. O presente corporativo da sua empresa não pode parecer um improviso. Nossas embalagens transferem autoridade institucional para a sua marca.',
  },
];

const NichesSection: React.FC = () => {
  return (
    <section id="segmentos" className="niches-section">
      <div className="niches-container">
        <div className="niches-header">
          <span className="niches-tag">SOLUÇÕES POR SEGMENTO</span>
          <h2 className="niches-title">
            Embalagens Projetadas Para o Seu Mercado
          </h2>
          <p className="niches-subtitle">
            Cada segmento tem exigências únicas. Por isso, desenvolvemos soluções
            específicas com materiais, acabamentos e estruturas otimizadas para
            cada tipo de produto.
          </p>
        </div>

        <div className="niches-grid">
          {segments.map((segment, index) => (
            <article
              key={segment.title}
              className={`niches-card ${index % 2 !== 0 ? 'niches-card--reversed' : ''}`}
            >
              <div className="niches-card__image-wrapper">
                <img
                  src={segment.image}
                  alt={`Embalagens para ${segment.title}`}
                  className="niches-card__image"
                  loading="lazy"
                />
              </div>
              <div className="niches-card__content">
                <h3 className="niches-card__title">{segment.title}</h3>
                <p className="niches-card__text">{segment.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NichesSection;
