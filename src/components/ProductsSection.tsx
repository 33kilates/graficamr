import React from 'react';
import {
  Package, ShoppingBag, Box, Layers, Tag, Bookmark,
  Calendar, CreditCard, Ribbon, FileText, Folder,
  Briefcase, Gift, Shirt, Archive, ClipboardList, Palette
} from 'lucide-react';
import './ProductsSection.css';

interface ProductCategory {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const products: ProductCategory[] = [
  {
    icon: <Box size={28} strokeWidth={1.6} />,
    name: 'Caixas para Joias',
    description: 'Caixas rígidas e flexíveis com acabamento premium para joalherias e semijoias.',
  },
  {
    icon: <Package size={28} strokeWidth={1.6} />,
    name: 'Caixas E-commerce',
    description: 'Embalagens resistentes e personalizadas para envio seguro de produtos online.',
  },
  {
    icon: <Box size={28} strokeWidth={1.6} />,
    name: 'Caixas Rígidas',
    description: 'Caixas estruturadas de alta gramatura para produtos de valor agregado.',
  },
  {
    icon: <Package size={28} strokeWidth={1.6} />,
    name: 'Caixas Gerais',
    description: 'Caixas para diversos segmentos com fundo automático e impressão offset.',
  },
  {
    icon: <Layers size={28} strokeWidth={1.6} />,
    name: 'Caixas Alimentícias',
    description: 'Embalagens food-safe para fast-food, doces, confeitaria e delivery.',
  },
  {
    icon: <ShoppingBag size={28} strokeWidth={1.6} />,
    name: 'Sacolas de Papel',
    description: 'Sacolas kraft e couché com alça torcida, fita ou cordão — diversas gramaturas.',
  },
  {
    icon: <ShoppingBag size={28} strokeWidth={1.6} />,
    name: 'Sacolas Plásticas',
    description: 'Sacolas em plástico personalizado com impressão de alta definição.',
  },
  {
    icon: <ShoppingBag size={28} strokeWidth={1.6} />,
    name: 'Sacolas Rotativas',
    description: 'Produção em escala com impressão rotativa para grandes volumes.',
  },
  {
    icon: <Gift size={28} strokeWidth={1.6} />,
    name: 'Sacos E-commerce',
    description: 'Sacos de envio personalizados com fechamento seguro para e-commerce.',
  },
  {
    icon: <Archive size={28} strokeWidth={1.6} />,
    name: 'Sacos PVC com Zíper',
    description: 'Embalagens transparentes com zíper para roupas, acessórios e kits.',
  },
  {
    icon: <Ribbon size={28} strokeWidth={1.6} />,
    name: 'Sacos de Cetim',
    description: 'Sacos em cetim com cordão para joias, presentes e produtos premium.',
  },
  {
    icon: <Tag size={28} strokeWidth={1.6} />,
    name: 'Adesivos',
    description: 'Adesivos personalizados em diversos formatos, materiais e acabamentos.',
  },
  {
    icon: <Ribbon size={28} strokeWidth={1.6} />,
    name: 'Fitas de Cetim',
    description: 'Fitas de cetim impressas com logo e cores da marca para embalagens e laços.',
  },
  {
    icon: <Palette size={28} strokeWidth={1.6} />,
    name: 'Papel de Seda',
    description: 'Papel de seda personalizado para forrar embalagens e agregar valor.',
  },
  {
    icon: <Bookmark size={28} strokeWidth={1.6} />,
    name: 'Cartelas para Joias',
    description: 'Cartelas personalizadas para exposição de brincos, colares e pulseiras.',
  },
  {
    icon: <Gift size={28} strokeWidth={1.6} />,
    name: 'Saquinhos e Cartelas',
    description: 'Saquinhos com cartela para bijuterias, acessórios e pequenos itens.',
  },
  {
    icon: <CreditCard size={28} strokeWidth={1.6} />,
    name: 'Cartões de Visita e Certificados',
    description: 'Cartões de visita premium, certificados e tags com acabamentos especiais.',
  },
  {
    icon: <FileText size={28} strokeWidth={1.6} />,
    name: 'Panfletos e Folders',
    description: 'Material gráfico promocional com impressão offset de alta fidelidade.',
  },
  {
    icon: <Calendar size={28} strokeWidth={1.6} />,
    name: 'Calendários',
    description: 'Calendários de mesa e parede personalizados com a identidade da marca.',
  },
  {
    icon: <ClipboardList size={28} strokeWidth={1.6} />,
    name: 'Talões e Blocos',
    description: 'Talões de pedido, notas, recibos e blocos com impressão carbonada.',
  },
  {
    icon: <Folder size={28} strokeWidth={1.6} />,
    name: 'Pastas Personalizadas',
    description: 'Pastas corporativas para apresentações, propostas e eventos.',
  },
  {
    icon: <Shirt size={28} strokeWidth={1.6} />,
    name: 'Produtos para Lojas e Shoppings',
    description: 'Linha completa de embalagens e materiais gráficos para o varejo físico.',
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section id="produtos" className="products-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="products-header">
          <span className="products-tag">CATÁLOGO COMPLETO</span>
          <h2 className="section-title">
            Embalagens Projetadas Para o Seu Mercado
          </h2>
          <p className="section-subtitle">
            De caixas rígidas a sacolas de papel, de adesivos a fitas de cetim — tudo
            produzido com qualidade industrial na nossa gráfica. Encontre a solução
            ideal para o seu negócio.
          </p>
        </div>

        {/* Grid de produtos */}
        <div className="products-grid">
          {products.map((product, index) => (
            <article key={index} className="product-card">
              <div className="product-card__icon">
                {product.icon}
              </div>
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__desc">{product.description}</p>
            </article>
          ))}
        </div>

        {/* Transição para Planos */}
        <div className="products-cta">
          <p className="products-cta__text">
            Tudo isso fabricado na nossa gráfica, com qualidade controlada do início ao fim.
          </p>
          <a
            href="#planos"
            className="products-cta__link"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('planos');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
          >
            Veja os planos e escolha o ideal para sua demanda ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
