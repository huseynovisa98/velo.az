import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Truck, Wrench, RotateCcw } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenSizeCalc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onOpenSizeCalc }) => {
  return (
    <section className="relative overflow-hidden text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Hero Visual & Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 z-10">
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141A22]/90 border border-[#CCFF00]/30 text-xs font-mono font-bold uppercase tracking-wider text-[#CCFF00] mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
              <span>Bakı Velosiped Mədəniyyəti · velo.az</span>
            </div>

            {/* Headline with Syne font */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight text-white leading-[1.05] mb-6 text-balance">
              Yolunu Seç, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-[#a3e635] to-white">
                Sürətini Artır.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mb-8 font-normal">
              Bakının dağ cığırlarından Xəzər sahilinədək — dünya səviyyəli E-Bike, karbon MTB və gravel velosipedləri. 
              24/7 peşəkar servis və sürətli ünvana çatdırılma ilə.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-[#0A0D12] font-syne font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#CCFF00]/25 active:scale-98 cursor-pointer"
              >
                <span>Kataloqa Bax</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSizeCalc}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#141A22]/90 hover:bg-[#141A22] text-neutral-200 hover:text-white border border-white/20 hover:border-[#CCFF00]/40 font-semibold text-sm backdrop-blur-md transition-all active:scale-98 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#CCFF00]" />
                <span>Öz Boy Ölçünü Tap</span>
              </button>
            </div>

            {/* Quick Proof Metrics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-syne text-[#CCFF00] tabular-nums">2 İl</span>
                <span className="text-xs text-neutral-400 font-medium">Rəsmi Zəmanət</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-syne text-white tabular-nums">24/7</span>
                <span className="text-xs text-neutral-400 font-medium">Mobil Servis</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-syne text-white tabular-nums">100₼+</span>
                <span className="text-xs text-neutral-400 font-medium">Pulsuz Çatdırılma</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Glass Preview Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl p-6 sm:p-7 bg-[#141A22]/80 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 mb-5 relative">
                <img
                  src={HERO_IMAGE}
                  alt="velo.az Bakı sahil sürüşü"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#0A0D12]/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-mono text-[#CCFF00]">
                  HD Video Fon Aktiv
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#CCFF00] font-mono uppercase tracking-wider block">Seçilmiş Model</span>
                  <span className="text-lg font-syne font-bold text-white">Velo Corsa Aero Carbon</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 block font-mono">Qiymət</span>
                  <span className="text-xl font-syne font-extrabold text-[#CCFF00] tabular-nums">1 850 ₼</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4-Column Trust Strip with graphite and lime borders */}
      <div className="mt-14 border-y border-white/10 bg-[#141A22]/85 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#CCFF00]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-syne text-white uppercase tracking-wider">Pulsuz Çatdırılma</h4>
                <p className="text-xs text-neutral-400">Bakı daxilində 100 ₼-dən yuxarı</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#CCFF00]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-syne text-white uppercase tracking-wider">2 İl Zəmanət</h4>
                <p className="text-xs text-neutral-400">Bütün çərçivələrə tam təminat</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#CCFF00]">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-syne text-white uppercase tracking-wider">Sertifikatlı Usta</h4>
                <p className="text-xs text-neutral-400">Shimano & SRAM standartında baxım</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#CCFF00]">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-syne text-white uppercase tracking-wider">14 Gün Dəyişmə</h4>
                <p className="text-xs text-neutral-400">Ölçü uyğun gəlmədikdə sürətli həll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
