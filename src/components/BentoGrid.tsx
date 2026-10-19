import React from 'react';
import { BatteryCharging, Zap, Compass, Wrench, Shield, PhoneCall, ArrowUpRight } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface BentoGridProps {
  onOpenServiceBooking?: () => void;
  onExploreCatalog?: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  onOpenServiceBooking,
  onExploreCatalog,
}) => {
  return (
    <section className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5 fill-[#CCFF00]" />
            <span>Mühəndislik & Texnologiya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white tracking-tight">
            velo<span className="text-[#CCFF00]">.az</span> Ekosistemi
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 font-normal">
            Yeni nəsil şəhər hərəkətliliyi, yüksək dözümlü karbon geometriya və 24/7 peşəkar servis xidməti.
          </p>
        </div>

        {/* 3-Card Glassmorphic Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: E-Bike Power (Span 7 cols) */}
          <div className="md:col-span-7 rounded-3xl p-7 sm:p-9 bg-[#141A22]/85 backdrop-blur-xl border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 shadow-2xl flex flex-col justify-between group relative overflow-hidden">
            {/* Glowing Accent Gradient in background */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#CCFF00]/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#CCFF00]/15 border border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00]">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold text-[#CCFF00] tracking-wider uppercase bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/20">
                  Yeni Nəsil Güc
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white mb-3 group-hover:text-[#CCFF00] transition-colors">
                E-Bike Power
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Bakının yoxuşlu və küləkli küçələrində məsafə narahatlığına son qoyun. İnteqrasiya edilmiş 
                ağıllı batareya idarəetməsi və yüksək fırlanma anı ilə maksimum sərbəstlik.
              </p>

              {/* Technical Metrics Bento Row */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0A0D12]/60 border border-white/5 mb-6">
                <div>
                  <span className="block text-2xl sm:text-3xl font-syne font-extrabold text-[#CCFF00] tabular-nums">
                    120 <span className="text-xs text-neutral-400 font-sans">km</span>
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">Bir şarja məsafə</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-syne font-extrabold text-white tabular-nums">
                    85 <span className="text-xs text-neutral-400 font-sans">Nm</span>
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">Bafang / Bosch güc</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-syne font-extrabold text-white tabular-nums">
                    750 <span className="text-xs text-neutral-400 font-sans">Wh</span>
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">Samsung hüceyrə</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-neutral-400">
                Eco · Tour · Turbo rejimləri
              </span>
              <a
                href="#kataloq"
                onClick={onExploreCatalog}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CCFF00] hover:underline"
              >
                <span>E-Bike modelləri</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: MTB & Şəhər (Span 5 cols) */}
          <div className="md:col-span-5 rounded-3xl p-7 sm:p-9 bg-[#141A22]/85 backdrop-blur-xl border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 shadow-2xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#CCFF00]">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold text-neutral-300 tracking-wider uppercase">
                  Toray T800
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white mb-3 group-hover:text-[#CCFF00] transition-colors">
                MTB & Şəhər
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-normal">
                Karbon rama geometriyası vibrasiyaları sönümləyir, həm dağ enişlərində kəskin manevr, 
                həm də bulvarda hamar və sürətli irəliləyiş bəxş edir.
              </p>

              <ul className="space-y-2.5 text-xs text-neutral-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                  <span>Monokok karbon çərçivə (çəkisi cəmi <strong>8.4 kq</strong>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                  <span>100% daxili kabel çəkilişi və aerodinamik sükan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                  <span>RockShox / Fox pnevmatik asqı sistemi</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">29" & 28" Təkərlər</span>
              <a
                href="#kataloq"
                onClick={onExploreCatalog}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CCFF00] hover:underline"
              >
                <span>Geometriyanı İncələ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: 24/7 Servis (Full Width / Span 12 cols) */}
          <div className="md:col-span-12 rounded-3xl p-7 sm:p-9 bg-[#141A22]/85 backdrop-blur-xl border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 group relative overflow-hidden">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/15 border border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00] shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#CCFF00] block">
                    Ekspres Mobil Briqada
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white">
                    24/7 Servis & Təcili Usta Dəstəyi
                  </h3>
                </div>
              </div>

              <p className="text-neutral-300 text-sm max-w-2xl leading-relaxed font-normal mt-2">
                Yolda təkəriniz deşildi və ya ötürücünüz tənzimləmə tələb edir? Bakı şəhəri daxilində mobil servis mikroavtobusumuz 
                ünvanınıza yaxınlaşaraq yerində diaqnostika, təmir və test-drayv icarəsi xidmətini təqdim edir.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Salam velo.az! Təcili velosiped ustası və ya icarə xidməti lazımdır.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-[#0A0D12] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#CCFF00]/20"
              >
                <PhoneCall className="w-4 h-4 text-[#0A0D12]" />
                <span>Təcili Usta Çağır</span>
              </a>

              <a
                href="#servis"
                onClick={onOpenServiceBooking}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4 text-[#CCFF00]" />
                <span>Planlı Baxışa Yazıl</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
