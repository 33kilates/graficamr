import { Calendar, TrendingUp, Shield, CheckCircle2 } from 'lucide-react';
import './PlansSection.css';

const WHATSAPP_NUMBER = '5519995021280';

interface PlanCard {
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  description: string;
  bullets: string[];
  cta: string;
  whatsappMessage: string;
  featured?: boolean;
  badge?: string;
}

const plans: PlanCard[] = [
  {
    icon: <Calendar size={32} strokeWidth={1.8} />,
    name: 'Plano Trimestral',
    subtitle: 'Estoque de Segurança',
    description:
      'Ideal para quem quer conhecer a qualidade MR sem grandes compromissos. Comece com 3 meses e sinta a diferença no padrão dos seus produtos.',
    bullets: [
      'Pedido mínimo a partir de 500 unidades por modelo',
      'Acesso à linha premium com acabamento superior',
      'Fim das caixas molengas e sem padronização de cor',
      'Prazo de produção ágil para reposição rápida',
      'Suporte de um consultor dedicado ao seu projeto',
    ],
    cta: 'COTAR PARA 3 MESES',
    whatsappMessage: 'Olá, quero cotar o plano Trimestral da MR.',
  },
  {
    icon: <TrendingUp size={32} strokeWidth={1.8} />,
    name: 'Plano Anual',
    subtitle: 'Domínio de Margem',
    description:
      'A escolha das marcas que pensam grande. Garanta a melhor embalagem do mercado para o ano inteiro, parcele no cartão e deixe as suas vendas pagarem as parcelas.',
    bullets: [
      'Menor valor unitário da nossa tabela matriz',
      'Trava de preço garantida por 12 meses contra inflação',
      'Prioridade total na fila de produção',
      'Parcele o investimento no cartão em até 12x',
      'Seu cliente paga mais pelo produto graças ao acabamento impecável',
      'Cobertura completa: todas as sazonalidades do ano garantidas',
      'Consultor exclusivo + suporte prioritário',
    ],
    cta: 'QUERO DOMINAR MINHA MARGEM',
    whatsappMessage: 'Olá, quero cotar o plano Anual da MR.',
    featured: true,
    badge: 'MAIS ESCOLHIDO',
  },
  {
    icon: <Shield size={32} strokeWidth={1.8} />,
    name: 'Plano Semestral',
    subtitle: 'Trava de Preço',
    description:
      'Cubra as maiores datas do varejo (Mães, Namorados, Natal) com excelência e preço travado. Ideal para operações sazonais.',
    bullets: [
      'Custo unitário agressivo com garantia de preço fixo',
      'Estoque garantido para as datas que mais vendem',
      'Qualidade consistente em todos os lotes do semestre',
      'Flexibilidade para ajustar quantidades entre modelos',
      'Pagamento facilitado no cartão de crédito',
      'Atendimento consultivo para otimizar seus pedidos',
    ],
    cta: 'COTAR PARA 6 MESES',
    whatsappMessage: 'Olá, quero cotar o plano Semestral da MR.',
  },
];

function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function PlansSection() {
  return (
    <section id="planos" className="plans-section">
      <div className="plans-container">
        {/* Header */}
        <div className="plans-header">
          <span className="plans-tag">PLANEJAMENTO ESTRATÉGICO DE SUPRIMENTOS</span>
          <h2 className="plans-title">
            Escolha o Plano Ideal Para a Sua Operação
          </h2>
          <p className="plans-subtitle">
            Pare de comprar embalagens no desespero e comece a planejar com
            inteligência. Quanto maior o horizonte, menor o custo unitário e
            maior o seu lucro.
          </p>
        </div>

        {/* Grid de planos */}
        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`}
            >
              {/* Badge do plano featured */}
              {plan.badge && (
                <span className="plan-badge">{plan.badge}</span>
              )}

              {/* Ícone */}
              <div className="plan-icon-wrapper">{plan.icon}</div>

              {/* Textos */}
              <h3 className="plan-name">{plan.name}</h3>
              <span className="plan-subtitle">{plan.subtitle}</span>
              <p className="plan-description">{plan.description}</p>

              {/* Separador */}
              <hr className="plan-divider" />

              {/* Lista de benefícios */}
              <ul className="plan-bullets">
                {plan.bullets.map((bullet, idx) => (
                  <li key={idx} className="plan-bullet">
                    <CheckCircle2
                      size={20}
                      strokeWidth={2.2}
                      className="plan-bullet-icon"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={buildWhatsAppLink(plan.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`plan-cta ${plan.featured ? 'plan-cta--featured' : 'plan-cta--outline'}`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
