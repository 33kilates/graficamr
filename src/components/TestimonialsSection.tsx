import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackContact } from '../lib/metaTracking';
import './TestimonialsSection.css';

/**
 * Lista de vídeos de prova social.
 * Removidos dep4.mp4 e dep6.mov (tela preta).
 */
const testimonialVideos = [
  { src: '/videos/depoimentos/dep5.mp4', featured: true },
  { src: '/videos/depoimentos/dep8.mp4', featured: false },
  { src: '/videos/depoimentos/dep9.mp4', featured: false },
  { src: '/videos/depoimentos/dep1.mp4', featured: false },
  { src: '/videos/depoimentos/dep2.mp4', featured: false },
  { src: '/videos/depoimentos/dep3.mp4', featured: false },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="testimonials-section section-padding">
      <div className="container">
        {/* Cabeçalho */}
        <div className="testimonials-header">
          <span className="testimonials-tag">PROVA SOCIAL</span>
          <h2 className="section-title">Nossos Clientes em Ação</h2>
          <p className="section-subtitle">
            Marcas de todo o Brasil confiam na MR Embalagens para proteger e
            valorizar seus produtos. Confira o padrão de qualidade que entregamos.
          </p>
        </div>

        {/* Grid mosaico de vídeos */}
        <div className="testimonials-grid">
          {testimonialVideos.map((video, index) => (
            <div
              key={index}
              className={`testimonial-card${video.featured ? ' testimonial-card--featured' : ''}`}
            >
              <video
                src={video.src}
                muted
                controls
                playsInline
                preload="metadata"
                className="testimonial-video"
              />
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="testimonials-cta">
          <p className="testimonials-cta__text">
            Quer elevar o padrão da sua marca também?
          </p>
          <a
            href="https://wa.me/5519995021280?text=Ol%C3%A1%2C%20vi%20os%20resultados%20dos%20clientes%20e%20quero%20saber%20mais%20sobre%20as%20embalagens%20MR."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary testimonials-cta__btn"
            onClick={() => trackContact('Testimonials CTA')}
          >
            <MessageCircle size={20} />
            FALAR COM UM ESPECIALISTA
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
