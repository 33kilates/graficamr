import { Settings, ShieldCheck, Truck } from 'lucide-react';
import './FactorySection.css';

const features = [
  {
    icon: Settings,
    title: 'Corte e Acabamento de Precisão',
    text: 'Maquinário automatizado que garante encaixes perfeitos e fundo automático firme em todas as peças.',
  },
  {
    icon: ShieldCheck,
    title: 'Controle de Qualidade Rigoroso',
    text: 'Cada lote passa por inspeção visual e estrutural. O lote 1 sai idêntico ao lote 10.000.',
  },
  {
    icon: Truck,
    title: 'Produção em Escala Nacional',
    text: 'Capacidade industrial para atender franquias e indústrias em todo o Brasil com consistência e prazo.',
  },
] as const;

export default function FactorySection() {
  return (
    <section className="factory" aria-label="Estrutura Industrial">
      <div className="factory__container">
        {/* Cabeçalho da seção */}
        <div className="factory__header">
          <span className="factory__tag">ESTRUTURA INDUSTRIAL PRÓPRIA</span>
          <h2 className="factory__title">
            Sua Embalagem é Produzida em Um Parque Gráfico de Alta Performance
          </h2>
          <p className="factory__subtitle">
            Não somos revendedores. Toda produção é feita internamente, com
            maquinário de última geração e controle total de qualidade do início
            ao fim.
          </p>
        </div>

        {/* Vídeos das máquinas em operação */}
        <div className="factory__videos">
          <div className="factory__video-wrapper">
            <video
              src="/videos/maquinas/maq1.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Máquina industrial MR Embalagens em operação"
            />
          </div>
          <div className="factory__video-wrapper">
            <video
              src="/videos/maquinas/maq2.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Linha de produção MR Embalagens"
            />
          </div>
        </div>

        {/* Grid de diferenciais industriais */}
        <div className="factory__features">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="factory__feature" key={title}>
              <div className="factory__feature-icon">
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="factory__feature-title">{title}</h3>
              <p className="factory__feature-text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
