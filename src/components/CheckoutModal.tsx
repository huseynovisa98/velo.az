import React, { useState } from 'react';
import { X, CheckCircle, Truck, CreditCard, Banknote, MessageCircle, ArrowLeft, Shield } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_INFO } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountAmount: number;
  discountCode: string;
  onSuccessOrder: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountAmount,
  discountCode,
  onSuccessOrder,
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+994 ');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('Nəsimi');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'pos' | 'whatsapp'>('pos');
  const [notes, setNotes] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const subtotalAZN = items.reduce(
    (sum, item) => sum + item.product.priceAZN * item.quantity,
    0
  );
  const deliveryFee = subtotalAZN >= 100 ? 0 : 5;
  const finalTotal = Math.max(0, subtotalAZN - discountAmount + deliveryFee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || phone.trim().length < 8 || !address.trim()) {
      return;
    }
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newOrderNum = `VL-${randomNum}`;
    setOrderNumber(newOrderNum);
    setOrderConfirmed(true);
    onSuccessOrder();
  };

  const whatsappOrderMessage = `Salam velo.az! Yeni sifariş rəsmiləşdirdim:\n• Sifariş Nömrəsi: #${orderNumber}\n• Müştəri: ${fullName}\n• Telefon: ${phone}\n• Ünvan: Bakı, ${district} r-nu, ${address}\n• Ödəniş: ${
    paymentMethod === 'cash' ? 'Nağd kuryerə' : paymentMethod === 'pos' ? 'Qapıda POS-terminal (kart)' : 'WhatsApp vasitəsilə'
  }\n• Cəmi məbləğ: ${finalTotal.toLocaleString('az-AZ')} AZN.\nSifarişin təsdiqini gözləyirəm.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
          <div>
            <h3 className="text-base sm:text-lg font-bold font-display text-neutral-950">
              {orderConfirmed ? 'Sifariş Təsdiqləndi' : 'Sifarişin Rəsmiləşdirilməsi'}
            </h3>
            <span className="text-xs text-neutral-500">
              {orderConfirmed ? 'Təşəkkür edirik!' : 'Çatdırılma və əlaqə məlumatlarını daxil edin'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderConfirmed ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-mono font-semibold uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Sifariş Kodu: #{orderNumber}
              </span>
              <h2 className="text-2xl font-extrabold font-display text-neutral-950 mt-3 mb-1">
                Sifarişiniz Uğurla Qeydə Alındı!
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Hörmətli <strong>{fullName}</strong>, menecerimiz 15 dəqiqə ərzində sizinlə əlaqə saxlayaraq çatdırılma vaxtını dəqiqləşdirəcək.
              </p>
            </div>

            {/* Order Details Brief Box */}
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-neutral-500">Çatdırılma ünvanı:</span>
                <span className="font-semibold text-neutral-900 text-right">Bakı, {district} r-nu, {address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Əlaqə nömrəsi:</span>
                <span className="font-semibold text-neutral-900">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Ödəniş forması:</span>
                <span className="font-semibold text-neutral-900">
                  {paymentMethod === 'pos' ? 'Qapıda Kartla (POS)' : paymentMethod === 'cash' ? 'Nağd Kuryerə' : 'WhatsApp Menecer'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-200 font-bold text-sm">
                <span>Ödəniləcək məbləğ:</span>
                <span className="text-emerald-700 tabular-nums">{finalTotal.toLocaleString('az-AZ')} ₼</span>
              </div>
            </div>

            {/* Direct WhatsApp notification button */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(whatsappOrderMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ilə Təsdiq Mesajı Göndər</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs transition-colors"
              >
                Alış-verişə Davam Et
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Customer Information */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                1. Şəxsi və Çatdırılma Məlumatları
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1">
                    Ad və Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Məs: Rəşad Əliyev"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1">
                    Telefon Nömrəsi *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+994 (50) 000-00-00"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1">
                    Bakı Rayonu
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                  >
                    <option value="Nəsimi">Nəsimi rayonu</option>
                    <option value="Səbail">Səbail rayonu</option>
                    <option value="Yasamal">Yasamal rayonu</option>
                    <option value="Nərimanov">Nərimanov rayonu</option>
                    <option value="Xətai">Xətai rayonu</option>
                    <option value="Binəqədi">Binəqədi rayonu</option>
                    <option value="Nizami">Nizami rayonu</option>
                    <option value="Abşeron">Abşeron / Xırdalan</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-neutral-700 block mb-1">
                    Dəqiq Ünvan (Küçə, Bina, Mənzil) *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Məs: Nizami küçəsi 14, mənzil 28"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">
                  Kuryer üçün Qeyd (İstəyə bağlı)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Məs: Giriş kodu 45, saat 18:00-dan sonra çatdırın"
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:ring-1 focus:ring-neutral-950"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3 pt-2 border-t border-neutral-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                2. Ödəniş Üsulu
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <label
                  onClick={() => setPaymentMethod('pos')}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'pos'
                      ? 'border-neutral-950 bg-neutral-50 ring-1 ring-neutral-950'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-neutral-800 shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-neutral-900 block">Qapıda POS (Kart)</span>
                    <span className="text-[10px] text-neutral-500">Birkart, Tamkart</span>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'cash'
                      ? 'border-neutral-950 bg-neutral-50 ring-1 ring-neutral-950'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-neutral-800 shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-neutral-900 block">Nağd Kuryerə</span>
                    <span className="text-[10px] text-neutral-500">Məhsulu təhvil alanda</span>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('whatsapp')}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'whatsapp'
                      ? 'border-neutral-950 bg-neutral-50 ring-1 ring-neutral-950'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-neutral-900 block">WhatsApp ilə</span>
                    <span className="text-[10px] text-neutral-500">Menecerlə köçürmə</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Total Summary Strip */}
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs space-y-1.5">
              <div className="flex justify-between text-neutral-600">
                <span>Məhsul sayı:</span>
                <span className="font-semibold text-neutral-900">{items.reduce((s, i) => s + i.quantity, 0)} ədəd</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Promo endirim:</span>
                  <span>-{discountAmount.toLocaleString('az-AZ')} ₼</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-600">
                <span>Çatdırılma:</span>
                <span className="font-semibold text-neutral-900">{deliveryFee === 0 ? 'Pulsuz' : `${deliveryFee} ₼`}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-neutral-950 pt-2 border-t border-neutral-200 font-display">
                <span>Cəmi Ödəniləcək:</span>
                <span className="tabular-nums">{finalTotal.toLocaleString('az-AZ')} ₼</span>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-3 rounded-xl border border-neutral-200 text-neutral-700 text-xs font-semibold hover:bg-neutral-100 transition-colors"
              >
                Geri Qayıt
              </button>

              <button
                type="submit"
                className="flex-1 py-3.5 px-6 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm shadow-md transition-all active:scale-98 cursor-pointer"
              >
                Sifarişi Təsdiqlə ({finalTotal.toLocaleString('az-AZ')} ₼)
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
