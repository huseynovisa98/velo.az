import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck, Tag, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, color: string, newQty: number) => void;
  onRemoveItem: (productId: string, size: string, color: string) => void;
  onClearCart: () => void;
  onProceedToCheckout: (appliedDiscount: number, discountCode: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  // Subtotal calculation
  const subtotalAZN = items.reduce(
    (sum, item) => sum + item.product.priceAZN * item.quantity,
    0
  );

  const discountPercent = promoApplied ? 10 : 0;
  const discountAmount = Math.round((subtotalAZN * discountPercent) / 100);

  // Delivery rule: Free if subtotal >= 100 AZN, else 5 AZN
  const isFreeDelivery = subtotalAZN >= 100;
  const deliveryFee = items.length > 0 ? (isFreeDelivery ? 0 : 5) : 0;
  const finalTotalAZN = Math.max(0, subtotalAZN - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'BAKU10' || promoCode.trim().toUpperCase() === 'VELO2026') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Yanlış promo kod. Sınaq üçün "BAKU10" yazın.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-neutral-900" />
            <h3 className="text-base font-bold font-display text-neutral-950">
              Səbətiniz ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-neutral-400 hover:text-rose-600 transition-colors cursor-pointer"
                title="Səbəti təmizlə"
              >
                Təmizlə
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Free Delivery Bar */}
        <div className="px-5 py-2.5 bg-neutral-50 border-b border-neutral-100 text-xs">
          {subtotalAZN >= 100 ? (
            <div className="text-emerald-700 font-semibold flex items-center gap-1.5">
              <span>🎉 Təbriklər! Bakı daxilində çatdırılma <strong>PULSUZDUR</strong>.</span>
            </div>
          ) : (
            <div>
              <div className="flex justify-between text-neutral-600 mb-1">
                <span>Pulsuz çatdırılma üçün qalan məbləğ:</span>
                <strong className="text-neutral-900 tabular-nums">{(100 - subtotalAZN).toFixed(0)} ₼</strong>
              </div>
              <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full rounded-full transition-all duration-300" 
                  style={{ width: `${Math.min(100, (subtotalAZN / 100) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Items Container */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-3">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-1">
                Səbətiniz boşdur
              </h4>
              <p className="text-xs text-neutral-500 max-w-xs mb-6">
                velo.az kataloqundan sevdiyiniz velosiped və ya aksessuarı səbətə əlavə edin.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-neutral-950 text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
              >
                Məhsullara Bax
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-xs"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover bg-neutral-100 border border-neutral-100 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-neutral-950 truncate font-display">
                    {item.product.name}
                  </h4>
                  <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 mt-0.5">
                    <span>Ölçü: {item.selectedSize}</span>
                    <span>·</span>
                    <span className="truncate">{item.selectedColor}</span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-extrabold text-neutral-900 tabular-nums">
                      {(item.product.priceAZN * item.quantity).toLocaleString('az-AZ')} ₼
                    </span>

                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                        className="p-1 hover:bg-neutral-200 rounded-l text-neutral-600 cursor-pointer"
                        title="Azalt"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        className="p-1 hover:bg-neutral-200 rounded-r text-neutral-600 cursor-pointer"
                        title="Artır"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() =>
                    onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)
                  }
                  className="p-1.5 text-neutral-400 hover:text-rose-600 transition-colors"
                  title="Sil"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Calculations & Checkout CTA */}
        {items.length > 0 && (
          <div className="p-5 border-t border-neutral-200 bg-neutral-50/70 space-y-4">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo kod (məs: BAKU10)"
                  disabled={promoApplied}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-neutral-200 bg-white uppercase font-mono tracking-wider focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <button
                type="submit"
                disabled={promoApplied || !promoCode.trim()}
                className="px-3.5 py-2 text-xs font-bold rounded-lg bg-neutral-900 text-white disabled:bg-neutral-300 transition-colors cursor-pointer"
              >
                {promoApplied ? 'Tətbiq edildi' : 'Tətbiq et'}
              </button>
            </form>

            {promoError && (
              <p className="text-[11px] text-rose-600">{promoError}</p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-neutral-600 border-t border-neutral-200/80 pt-3">
              <div className="flex justify-between">
                <span>Məhsulların cəmi:</span>
                <span className="font-semibold text-neutral-900 tabular-nums">
                  {subtotalAZN.toLocaleString('az-AZ')} ₼
                </span>
              </div>

              {promoApplied && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Promo endirim (%10):</span>
                  <span className="tabular-nums">-{discountAmount.toLocaleString('az-AZ')} ₼</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Çatdırılma (Bakı daxili):</span>
                <span className="font-semibold text-neutral-900">
                  {deliveryFee === 0 ? 'Pulsuz' : `${deliveryFee} ₼`}
                </span>
              </div>

              <div className="flex justify-between text-base font-extrabold text-neutral-950 pt-2 border-t border-neutral-200 font-display">
                <span>Yekun Məbləğ:</span>
                <span className="tabular-nums">
                  {finalTotalAZN.toLocaleString('az-AZ')} ₼
                </span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={() => onProceedToCheckout(discountAmount, promoApplied ? 'BAKU10' : '')}
              className="w-full py-3.5 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98"
            >
              <span>Sifarişi Rəsmiləşdir</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Təhlükəsiz sifariş · Qapıda kart və ya nağd ödəniş</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
