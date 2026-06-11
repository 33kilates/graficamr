import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FaqSection.css';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'O concorrente vende embalagens mais baratas. Por que a MR é mais cara?',
    answer:
      'O concorrente não é mais barato, ele te entrega um problema. Você produz um item de altíssima qualidade. Faz sentido economizar 30 centavos em uma embalagem fina que vai amassar no correio ou vazar, gerando devolução, reclamação e um cliente que nunca mais compra de você? Na MR, você paga pela segurança de que seu produto chegará intacto e parecendo valer o dobro. Para viabilizar isso no seu caixa, fazemos o plano anual e você parcela.',
  },
  {
    question: 'Quais segmentos vocês atendem?',
    answer:
      'Atendemos os mercados mais exigentes: Joias e Semijoias, Fast-Food de Alto Volume, Cosméticos, E-commerce em geral e Brindes Corporativos. Cada segmento recebe materiais específicos como berços aveludados, barreiras de gordura, papel rígido de alta gramatura e acabamento em hot stamping.',
  },
  {
    question: 'Como funciona o Planejamento de Suprimentos?',
    answer:
      'Em vez de comprar aos poucos e perder margem, você fecha um contrato de fornecimento com a MR para 3, 6 ou 12 meses. Comprando em volume, você trava o preço na nossa tabela mais competitiva. Nós produzimos e você tem a garantia de que não faltará embalagem nas sazonalidades mais importantes do seu negócio.',
  },
  {
    question: 'Qual o pedido mínimo?',
    answer:
      'Trabalhamos com foco no atacado para garantir a viabilidade financeira da qualidade superior. O pedido mínimo é a partir de 500 unidades por modelo de embalagem.',
  },
  {
    question: 'Vocês fazem embalagens personalizadas com a minha marca?',
    answer:
      'Sim! Toda a nossa linha é personalizável. Você escolhe o modelo, as cores, o acabamento (hot stamping, laminação, verniz localizado) e nós produzimos com a sua identidade visual. Nossa equipe de arte pode te ajudar na finalização do layout.',
  },
  {
    question: 'Vocês entregam para todo o Brasil?',
    answer:
      'Sim, entregamos para todo o território nacional. Nossa logística é integrada para atender desde pequenas marcas até grandes franquias e indústrias com consistência e prazo.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="duvidas" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-section__container">
        {/* Header */}
        <span className="faq-section__tag">TIRE SUAS DÚVIDAS</span>
        <h2 id="faq-title" className="faq-section__title">
          Perguntas Frequentes
        </h2>
        <p className="faq-section__subtitle">
          Respondemos as dúvidas mais comuns sobre nosso padrão de qualidade e
          planejamento de estoque.
        </p>

        {/* Accordion */}
        <div className="faq-section__list" role="list">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const headingId = `faq-heading-${index}`;

            return (
              <div
                key={index}
                className={`faq-item${isActive ? ' faq-item--active' : ''}`}
                role="listitem"
              >
                <h3>
                  <button
                    id={headingId}
                    className="faq-item__question"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                  >
                    <span>{item.question}</span>
                    <ChevronDown className="faq-item__icon" aria-hidden="true" />
                  </button>
                </h3>

                <div
                  id={panelId}
                  className="faq-item__answer-wrapper"
                  role="region"
                  aria-labelledby={headingId}
                >
                  <div className="faq-item__answer-inner">
                    <p className="faq-item__answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
