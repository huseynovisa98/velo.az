import React from 'react';
import { ShoppingBag, Search, Heart, MessageCircle, Menu, X, Wrench, ShieldCheck, HelpCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface HeaderProps {
  cartCount: number;
  cartTotalAZN: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenSizeCalc: () => void;
  onOpenEngineeringGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotalAZN,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist,
  onOpenSizeCalc,
  onOpenEngineeringGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const whatsappDirectUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    'Salam, velo.az saytından yazıram. Velosiped seçimi ilə bağlı məsləhət almaq istəyirəm.'
  )}`;

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#0A0D12]/90 text-neutral-300 text-xs py-2 px-4 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-[#CCFF00]">Yaz Mövsümü</span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span className="text-neutral-300">Bakı daxili 100 ₼-dən yuxarı sifarişlərdə çatdırılma pulsuzdur</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              onClick={onOpenSizeCalc}
              className="hover:text-[#CCFF00] transition-colors cursor-pointer text-neutral-300 flex items-center gap-1.5"
            >
              <span>Ölçü Bələdçisi</span>
            </button>
            <span className="text-neutral-600">·</span>
            <button
              onClick={onOpenEngineeringGuide}
              className="text-[#CCFF00] hover:text-[#b8e600] font-sans font-medium flex items-center gap-1 cursor-pointer"
              title="Prototip və Mühəndislik Bələdçisinə baxın"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Sistem Məlumatı</span>
            </button>
            <span className="text-neutral-600 hidden md:inline">·</span>
            <span className="hidden md:inline text-neutral-400">{STORE_INFO.phone}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#0A0D12]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-[#CCFF00] flex items-center justify-center text-[#0A0D12] font-syne font-extrabold text-xl tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
                v
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-syne font-extrabold tracking-tight text-white leading-none">
                  velo<span className="text-[#CCFF00]">.az</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono font-semibold text-neutral-400 mt-0.5">
                  Baku Cycling Store
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: 4-5 Concise Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-neutral-300">
            <a href="#kataloq" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0">
              Kataloq
            </a>
            <a href="#kateqoriyalar" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0">
              Kateqoriyalar
            </a>
            <a href="#endirimlər" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1">
              <span>Endirimlər</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
            </a>
            <a href="#servis" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0">
              Servis & Emalatxana
            </a>
            <a href="#elaqe" className="hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0">
              Mağaza & Əlaqə
            </a>
          </nav>

          {/* Zone 3: Header Actions & Shopping Cart */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-neutral-300 hover:text-[#CCFF00] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Axtarış"
              title="Məhsul axtarışı"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 text-neutral-300 hover:text-rose-400 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Bəyəndiklərim"
              title="Seçilmişlər siyahısı"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* WhatsApp Quick Consultation */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#CCFF00] bg-[#CCFF00]/10 hover:bg-[#CCFF00]/20 border border-[#CCFF00]/30 rounded-xl transition-colors whitespace-nowrap shrink-0"
              title="WhatsApp ilə birbaşa əlaqə"
            >
              <MessageCircle className="w-4 h-4 text-[#CCFF00]" />
              <span>WhatsApp Dəstək</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#141A22] hover:bg-[#1f2937] border border-white/15 text-white rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Səbət"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#CCFF00]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#CCFF00] text-[#0A0D12] text-[11px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden md:flex flex-col text-left leading-tight">
                <span className="text-[10px] text-neutral-400 uppercase font-medium">Səbət</span>
                <span className="text-xs font-bold tabular-nums text-white">
                  {cartTotalAZN.toLocaleString('az-AZ')} ₼
                </span>
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white lg:hidden rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2 text-base font-medium text-neutral-800">
              <a
                href="#kataloq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Kataloq və Məhsullar
              </a>
              <a
                href="#kateqoriyalar"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Velosiped Kateqoriyaları
              </a>
              <a
                href="#endirimlər"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors flex items-center justify-between"
              >
                <span>Endirimli Təkliflər</span>
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Xüsusi</span>
              </a>
              <a
                href="#servis"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors flex items-center gap-2"
              >
                <Wrench className="w-4 h-4 text-neutral-500" />
                <span>Usta Servisi & Baxım</span>
              </a>
              <a
                href="#elaqe"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Bakı Mağazası & Əlaqə
              </a>
            </nav>

            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSizeCalc();
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-neutral-100 text-neutral-800 font-semibold text-sm hover:bg-neutral-200"
              >
                Öz Velosiped Ölçünü Hesabla
              </button>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ilə Əlaqə</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
