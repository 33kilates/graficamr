import { Check } from 'lucide-react';
import { trackContact } from '../lib/metaTracking';
import './BottomCta.css';

const WHATSAPP_URL =
  'https://wa.me/5519995021280?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20em%20embalagens.';

const trustItems = [
  'Sem compromisso',
  'Resposta rápida',
  'Orçamento personalizado',
];

export default function BottomCta() {
  return (
    <section className="bottom-cta" aria-label="Solicite um orçamento">
      {/* Formas decorativas de fundo */}
      <div className="bottom-cta__shape bottom-cta__shape--1" aria-hidden="true" />
      <div className="bottom-cta__shape bottom-cta__shape--2" aria-hidden="true" />
      <div className="bottom-cta__shape bottom-cta__shape--3" aria-hidden="true" />

      <div className="bottom-cta__content">
        <h2 className="bottom-cta__title">
          Sua Marca Merece Uma Embalagem Que Valorize Cada Produto Que Você Cria
        </h2>

        <p className="bottom-cta__subtitle">
          Nossos consultores estão prontos para montar o plano ideal para a sua
          operação. Faça como dezenas de marcas que já elevaram o padrão com a
          MR&nbsp;Embalagens.
        </p>

        <ul className="bottom-cta__trust">
          {trustItems.map((item) => (
            <li key={item} className="bottom-cta__trust-item">
              <span className="bottom-cta__check-icon" aria-hidden="true">
                <Check size={18} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-cta__button btn-whatsapp"
          onClick={() => trackContact('Bottom CTA')}
        >
          Falar Com Um Especialista
        </a>

        <p className="bottom-cta__hours">
          Atendimento de segunda a sexta, das 8h às 18h
        </p>
      </div>
    </section>
  );
}
