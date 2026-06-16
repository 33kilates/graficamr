import React from 'react';
import { MessageCircle } from 'lucide-react';
import './GoogleReviews.css';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/aTrqziuLzeMXKpsA7';
const WHATSAPP_URL =
  'https://wa.me/5519995021280?text=Ol%C3%A1%2C%20vi%20as%20avalia%C3%A7%C3%B5es%20no%20Google%20e%20quero%20saber%20mais%20sobre%20as%20embalagens%20MR.';

interface Review {
  name: string;
  badge?: string;
  rating: number;
  timeAgo: string;
  text: string;
  avatarInitial: string;
  avatarColor: string;
}

const reviews: Review[] = [
  {
    name: 'Samara Schiavolim',
    badge: '8 avaliações',
    rating: 5,
    timeAgo: 'um mês atrás',
    text: 'Meus pedidos sempre são feitos com vocês. Adoro o atendimento e qualidade 🍊🍊🍊',
    avatarInitial: 'S',
    avatarColor: '#e91e63',
  },
  {
    name: 'Val Rocha',
    badge: 'Local Guide · 41 avaliações · 10 fotos',
    rating: 5,
    timeAgo: '7 meses atrás',
    text: 'Produtos de qualidade e personalizados. Ótimo atendimento.',
    avatarInitial: 'V',
    avatarColor: '#1565c0',
  },
  {
    name: 'Luana Isabela',
    badge: 'Local Guide · 139 avaliações · 174 fotos',
    rating: 5,
    timeAgo: '3 anos atrás',
    text: 'Fizeram a criação da forma que pedimos, amamos cada detalhe, vendedor super atencioso, achei o preço bom! Super recomendo!',
    avatarInitial: 'L',
    avatarColor: '#00897b',
  },
  {
    name: 'Luis Otavio Thomazini',
    badge: 'Local Guide · 85 avaliações',
    rating: 5,
    timeAgo: 'um ano atrás',
    text: 'Excelente atendimento',
    avatarInitial: 'L',
    avatarColor: '#f57c00',
  },
];

/** Renderiza as estrelas de avaliação */
const Stars: React.FC<{ count: number; size?: number }> = ({ count, size = 16 }) => (
  <div className="gr-stars" aria-label={`${count} de 5 estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={i < count ? '#FBBC04' : '#e0e0e0'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

/** Ícone do Google (G colorido) */
const GoogleIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const GoogleReviews: React.FC = () => {
  return (
    <section id="avaliacoes-google" className="gr-section section-padding">
      <div className="container">
        {/* Cabeçalho */}
        <div className="gr-header">
          <span className="gr-tag">AVALIADO POR QUEM JÁ COMPROU</span>
          <h2 className="section-title">
            O Que Dizem Sobre a MR no Google
          </h2>
          <p className="section-subtitle">
            Avaliações reais e verificadas de clientes que já experimentaram a
            qualidade das nossas embalagens.
          </p>
        </div>

        {/* Badge Google */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="gr-badge"
          aria-label="Ver perfil no Google Maps — 4,6 estrelas"
        >
          <GoogleIcon size={36} />
          <div className="gr-badge__info">
            <div className="gr-badge__rating">
              <span className="gr-badge__score">4,6</span>
              <Stars count={5} size={20} />
            </div>
            <span className="gr-badge__count">77 avaliações no Google</span>
          </div>
          <span className="gr-badge__arrow">→</span>
        </a>

        {/* Grid de reviews */}
        <div className="gr-grid">
          {reviews.map((review, i) => (
            <article key={i} className="gr-card">
              <div className="gr-card__header">
                <div
                  className="gr-card__avatar"
                  style={{ backgroundColor: review.avatarColor }}
                >
                  {review.avatarInitial}
                </div>
                <div className="gr-card__meta">
                  <h4 className="gr-card__name">{review.name}</h4>
                  {review.badge && (
                    <span className="gr-card__badge">{review.badge}</span>
                  )}
                </div>
                <GoogleIcon size={20} />
              </div>
              <div className="gr-card__rating-row">
                <Stars count={review.rating} size={14} />
                <span className="gr-card__time">{review.timeAgo}</span>
              </div>
              <p className="gr-card__text">{review.text}</p>
            </article>
          ))}
        </div>

        {/* Link para ver todas */}
        <div className="gr-footer">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gr-see-all"
          >
            Ver todas as 77 avaliações no Google →
          </a>
        </div>

        {/* CTA */}
        <div className="gr-cta">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gr-cta__btn"
          >
            <MessageCircle size={20} />
            QUERO ESSA QUALIDADE NA MINHA MARCA
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
