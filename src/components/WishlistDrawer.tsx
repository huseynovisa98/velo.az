import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onOpenDetail,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            <h3 className="text-base font-bold font-display text-neutral-950">
              Bəyəndiklərim ({wishlistProducts.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {wishlistProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900 mb-1">
                Seçilmiş məhsul yoxdur
              </h4>
              <p className="text-xs text-neutral-500 max-w-xs mb-4">
                Bəyəndiyiniz velosipedləri ürək ikonuna klikləyərək buraya əlavə edə bilərsiniz.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-semibold"
              >
                Kataloqa Bax
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 bg-neutral-50/50"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover bg-neutral-100 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => {
                      onOpenDetail(product);
                      onClose();
                    }}
                    className="text-xs font-bold text-neutral-950 truncate hover:text-amber-600 cursor-pointer font-display"
                  >
                    {product.name}
                  </h4>
                  <span className="text-[11px] text-neutral-400 block mb-1">
                    {product.categoryLabel}
                  </span>
                  <span className="text-xs font-extrabold text-neutral-900 tabular-nums">
                    {product.priceAZN.toLocaleString('az-AZ')} ₼
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                    }}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition-colors cursor-pointer"
                    title="Səbətə at"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(product.id)}
                    className="p-2 rounded-lg text-neutral-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Sil"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-4 border-t border-neutral-100 bg-neutral-50">
            <button
              onClick={() => {
                wishlistProducts.forEach((p) => onAddToCart(p));
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Hamısını Səbətə Əlavə Et</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
