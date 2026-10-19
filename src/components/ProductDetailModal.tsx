import React, { useState } from 'react';
import { X, Heart, ShoppingBag, MessageCircle, Shield, Truck, RotateCcw, Check, Scale, Cog, Disc } from 'lucide-react';
import { Product } from '../types';
import { STORE_INFO } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onOpenSizeCalc: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenSizeCalc,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standart');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standart');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const whatsappInquiryUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    `Salam velo.az! "${product.name}" məhsulunu sifariş etmək istəyirəm:\n• Məhsul kodu: ${product.sku}\n• Seçilmiş ölçü: ${selectedSize}\n• Rəng: ${selectedColor}\n• Sayı: ${quantity} ədəd\n• Cəmi məbləğ: ${(product.priceAZN * quantity).toLocaleString('az-AZ')} AZN.\nÇatdırılma və ödəniş qaydası haqqında məlumat verin zəhmət olmasa.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Header bar of modal */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-100 bg-white">
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-neutral-400">SKU: {product.sku}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(product)}
              className={`p-2 rounded-full transition-colors ${
                isWishlisted
                  ? 'bg-rose-50 text-rose-600'
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
              title="Bəyənilənlərə əlavə et"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Bağla"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Container */}
        <div className="overflow-y-auto p-5 sm:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Imagery & Key Specs */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                {product.isSale && product.originalPriceAZN && (
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-rose-600 px-2.5 py-1 rounded-md shadow-xs">
                    Endirim -{Math.round(((product.originalPriceAZN - product.priceAZN) / product.originalPriceAZN) * 100)}%
                  </span>
                )}
              </div>

              {/* Technical Spec Icons strip */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-400 block leading-tight">Çəki</span>
                    <span className="font-semibold text-neutral-800">{product.weightKgs} kq</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-400 block leading-tight">Ötürücü</span>
                    <span className="font-semibold text-neutral-800 truncate block">{product.speeds.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Disc className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-400 block leading-tight">Təkər</span>
                    <span className="font-semibold text-neutral-800">{product.wheelSize}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Təsvir</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Feature Bullets */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Əsas Üstünlüklər</h4>
                <ul className="space-y-1.5">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Contiguous Purchase Module */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-display text-neutral-950 mb-2">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-extrabold font-display text-neutral-950 tabular-nums">
                    {(product.priceAZN * quantity).toLocaleString('az-AZ')} ₼
                  </span>
                  {product.originalPriceAZN && (
                    <span className="text-base text-neutral-400 line-through tabular-nums">
                      {(product.originalPriceAZN * quantity).toLocaleString('az-AZ')} ₼
                    </span>
                  )}
                  {quantity > 1 && (
                    <span className="text-xs text-neutral-500">
                      ({product.priceAZN} ₼ / ədəd)
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                    {product.inStock ? '✓ Bakı Anbarında Mövcuddur' : 'Sifarişlə'}
                  </span>
                  <span className="text-neutral-500">
                    Qalıq: <strong className="text-neutral-900">{product.stockCount} ədəd</strong>
                  </span>
                </div>
              </div>

              {/* Size Selector */}
              {product.sizes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Çərçivə Ölçüsü: <span className="text-neutral-900 normal-case font-semibold">{selectedSize}</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenSizeCalc();
                      }}
                      className="text-xs font-semibold text-amber-600 hover:text-amber-700 underline cursor-pointer"
                    >
                      Ölçü Cədvəli
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector */}
              {product.colors.length > 0 && (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 block mb-2">
                    Rəng Seçimi: <span className="text-neutral-900 normal-case font-semibold">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-2.5">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                          selectedColor === color.name
                            ? 'border-neutral-950 ring-1 ring-neutral-950 bg-neutral-50'
                            : 'border-neutral-200 hover:border-neutral-400 bg-white'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 block mb-2">
                  Say
                </label>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center rounded-xl border border-neutral-200 bg-neutral-50 p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-lg bg-white text-neutral-800 font-bold hover:bg-neutral-100 flex items-center justify-center cursor-pointer shadow-xs"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-sm font-bold tabular-nums text-neutral-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(product.stockCount, q + 1))}
                      className="w-8 h-8 rounded-lg bg-white text-neutral-800 font-bold hover:bg-neutral-100 flex items-center justify-center cursor-pointer shadow-xs"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-neutral-400">
                    Maksimum sifariş: {product.stockCount} ədəd
                  </span>
                </div>
              </div>

              {/* Action Buttons: Add to cart & WhatsApp direct */}
              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                    addedSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-neutral-950 hover:bg-neutral-800 text-white active:scale-98'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Səbətə Əlavə Edildi!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-amber-400" />
                      <span>Səbətə Əlavə Et</span>
                    </>
                  )}
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ilə Sürətli Sifariş</span>
                </a>
              </div>

              {/* Trust & Guarantee Callouts */}
              <div className="border-t border-neutral-100 pt-4 space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>2 İl Rəsmi Zəmanət</strong> (velo.az rəsmi servis mərkəzində)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-neutral-600 shrink-0" />
                  <span><strong>Pulsuz Çatdırılma:</strong> Bakı daxilində eyni gündə ünvana çatdırılma</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-neutral-600 shrink-0" />
                  <span><strong>14 Gün:</strong> Ölçü dəyişmə və ya geri qaytarma hüququ</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
