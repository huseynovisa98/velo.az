import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface SaleSectionProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onViewAllCatalog: () => void;
}

export const SaleSection: React.FC<SaleSectionProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenDetail,
  onAddToCart,
  onViewAllCatalog,
}) => {
  const saleProducts = products.filter((p) => p.isSale).slice(0, 4);

  if (saleProducts.length === 0) return null;

  return (
    <section id="endirimlər" className="py-20 bg-[#0A0D12]/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
              <Flame className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]" />
              <span>Mövsümün Ən Yaxşı Qiymətləri</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-syne font-extrabold text-white tracking-tight">
              Seçilmiş Modellərdə Xüsusi Endirimlər
            </h2>
          </div>

          <button
            onClick={onViewAllCatalog}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#CCFF00] hover:text-[#b8e600] transition-colors cursor-pointer group"
          >
            <span>Bütün endirimlərə bax</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onOpenDetail={onOpenDetail}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
