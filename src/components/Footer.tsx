import React from 'react';
import { STORE_INFO } from '../data/products';
import { MessageCircle, Heart, HelpCircle } from 'lucide-react';

interface FooterProps {
  onOpenEngineeringGuide: () => void;
  onOpenSizeCalc: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEngineeringGuide,
  onOpenSizeCalc,
}) => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1 & 2: Brand Lockup */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-neutral-950 flex items-center justify-center font-display font-extrabold text-lg">
                v
              </div>
              <span className="text-2xl font-display font-extrabold tracking-tight text-white">
                velo<span className="text-amber-400">.az</span>
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Azərbaycanın rəsmi velosiped və peşəkar aksessuarlar mərkəzi. Bakı şəhərində satış, sınaq sürüşü, peşəkar servis və sürətli çatdırılma xidməti.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Dəstək Xətti</span>
              </a>

              <button
                onClick={onOpenEngineeringGuide}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                title="Mühəndislik və İnteqrasiya Bələdçisi"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Mühəndislik Sənədi</span>
              </button>
            </div>
          </div>

          {/* Col 3: Catalog Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Kataloq
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#kataloq" className="hover:text-white transition-colors">Dağ Velosipedləri (MTB)</a></li>
              <li><a href="#kataloq" className="hover:text-white transition-colors">Yol və Gravel Modelləri</a></li>
              <li><a href="#kataloq" className="hover:text-white transition-colors">Şəhər və Hibrid Velosipedlər</a></li>
              <li><a href="#kataloq" className="hover:text-white transition-colors">Elektrikli E-Bike-lar</a></li>
              <li><a href="#kataloq" className="hover:text-white transition-colors">Dəbilqələr və Fənərlər</a></li>
              <li><a href="#kataloq" className="hover:text-white transition-colors">Uşaq Velosipedləri</a></li>
            </ul>
          </div>

          {/* Col 4: Services & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Xidmətlər & Alətlər
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#servis" className="hover:text-white transition-colors">Usta Emalatxanası</a></li>
              <li><a href="#servis" className="hover:text-white transition-colors">Mövsümi Texniki Baxış</a></li>
              <li><a href="#endirimlər" className="hover:text-white transition-colors">Xüsusi Endirimlər</a></li>
              <li>
                <button
                  onClick={onOpenSizeCalc}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Boy Ölçü Kalkulyatoru
                </button>
              </li>
              <li><a href="#elaqe" className="hover:text-white transition-colors">Çatdırılma Şərtləri</a></li>
            </ul>
          </div>

          {/* Col 5: Baku Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Bakı Flaqman Mağazası
            </h4>
            <div className="text-xs text-neutral-400 space-y-1.5">
              <p className="text-white font-medium">{STORE_INFO.address}</p>
              <p className="font-mono text-neutral-300">{STORE_INFO.phone}</p>
              <p className="font-mono text-neutral-300">{STORE_INFO.mobile}</p>
              <p>{STORE_INFO.hours}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Payments & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} velo.az Redesign Prototype.</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-neutral-400">Müstəqil konseptual yeniləmə layihəsidir.</span>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 font-semibold font-mono">
              Birkart
            </span>
            <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 font-semibold font-mono">
              Tamkart
            </span>
            <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 font-semibold font-mono">
              Visa
            </span>
            <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 font-semibold font-mono">
              MasterCard
            </span>
            <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 font-semibold font-mono">
              Nağd / POS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
