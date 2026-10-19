import React from 'react';
import { Heart, ShoppingBag, Eye, MessageCircle, Check } from 'lucide-react';
import { Product } from '../types';
import { STORE_INFO } from '../data/products';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onOpenDetail,
  onAddToCart,
}) => {
  const [justAdded, setJustAdded] = React.useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.sizes[0], product.colors[0]?.name);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const whatsappInquiryUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    `Salam, velo.az saytında "${product.name}" (Kod: ${product.sku}, Qiymət: ${product.priceAZN} AZN) məhsulu ilə maraqlanıram. Mövcudluğu və çatdırılma haqqında məlumat verə bilərsiniz?`
  )}`;

  return (
    <div
      onClick={() => onOpenDetail(product)}
      className="group relative flex flex-col bg-[#141A22]/90 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-[#CCFF00]/50 cursor-pointer"
    >
      {/* Top Image Container (65-75% visual balance) */}
      <div className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Subtle status tag */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isSale && product.originalPriceAZN && (
            <span className="text-[11px] font-bold font-mono tracking-tight text-white bg-rose-600 px-2 py-0.5 rounded-md shadow-xs">
              Endirim -{Math.round(((product.originalPriceAZN - product.priceAZN) / product.originalPriceAZN) * 100)}%
            </span>
          )}
          {product.isNew && !product.isSale && (
            <span className="text-[11px] font-bold font-mono tracking-tight text-[#0A0D12] bg-[#CCFF00] px-2 py-0.5 rounded-md shadow-xs">
              Yeni Kolleksiya
            </span>
          )}
        </div>

        {/* Top Right Actions (Wishlist) */}
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isWishlisted
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-sm'
                : 'bg-black/60 text-neutral-300 hover:text-white hover:bg-black/90 border border-white/10'
            }`}
            aria-label="Bəyənmək"
            title="Seçilmişlərə əlavə et"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-400' : ''}`} />
          </button>
        </div>

        {/* Quick action overlay on hover */}
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(product);
            }}
            className="flex-1 py-2 px-3 rounded-lg bg-[#0A0D12]/90 hover:bg-[#0A0D12] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-1.5 backdrop-blur-xs transition-colors border border-white/10"
          >
            <Eye className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>Ətraflı Bax</span>
          </button>
          
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-[#CCFF00] hover:bg-[#b8e600] text-[#0A0D12] shadow-md transition-colors"
            title="WhatsApp ilə soruş"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Unboxed Metadata: Category and Wheel size */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1.5 font-mono">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#CCFF00]">{product.wheelSize}</span>
          </div>

          {/* Product Name */}
          <h3 className="text-base font-bold text-white font-syne line-clamp-1 group-hover:text-[#CCFF00] transition-colors">
            {product.name}
          </h3>

          {/* Technical Spec Snippet */}
          <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
            {product.frameMaterial} · {product.speeds}
          </p>
        </div>

        {/* Pricing & Add to Cart Module */}
        <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold font-syne text-[#CCFF00] tabular-nums">
                {product.priceAZN.toLocaleString('az-AZ')} ₼
              </span>
              {product.originalPriceAZN && (
                <span className="text-xs text-neutral-500 line-through tabular-nums">
                  {product.originalPriceAZN.toLocaleString('az-AZ')} ₼
                </span>
              )}
            </div>
            <span className="text-[11px] text-emerald-400 font-medium block">
              {product.inStock ? '✓ Anbarda var' : 'Sifarişlə (3 gün)'}
            </span>
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 ${
              justAdded
                ? 'bg-emerald-500 text-white'
                : 'bg-[#CCFF00] hover:bg-[#b8e600] text-[#0A0D12]'
            }`}
            title="Səbətə tez əlavə et"
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Əlavə olundu</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Səbətə</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
