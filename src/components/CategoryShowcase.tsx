import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProductCategory } from '../types';
import { MOUNTAIN_BIKE_IMAGE, URBAN_EBIKE_IMAGE, GRAVEL_ROAD_IMAGE, ACCESSORIES_IMAGE } from '../data/products';

interface CategoryShowcaseProps {
  onSelectCategory: (category: ProductCategory) => void;
  activeCategory: ProductCategory;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onSelectCategory,
  activeCategory,
}) => {
  const cards = [
    {
      id: 'mountain' as ProductCategory,
      title: 'Dağ Velosipedləri',
      subtitle: 'MTB & Trail',
      description: 'Möhkəm amortizatorlu, daşlı və meşə yolları üçün dözümlü modellər.',
      image: MOUNTAIN_BIKE_IMAGE,
      badge: 'Ən Çox Tələb Olunan'
    },
    {
      id: 'road' as ProductCategory,
      title: 'Yol və Gravel',
      subtitle: 'Aero & All-Road',
      description: 'Sürət, yüngüllük və uzun məsafəli asfalt/çınqıl marşrutlar.',
      image: GRAVEL_ROAD_IMAGE,
      badge: 'Yüksək Sürət'
    },
    {
      id: 'electric' as ProductCategory,
      title: 'Elektrikli Velosipedlər',
      subtitle: 'E-Commuter & Urban',
      description: 'Yoxuşları hiss etdirməyən, təmiz enerjili şəhər nəqliyyatı.',
      image: URBAN_EBIKE_IMAGE,
      badge: 'Eko Sürüş'
    },
    {
      id: 'accessories' as ProductCategory,
      title: 'Aksesuar & Qoruyucu',
      subtitle: 'Dəbilqə, İşıq, Alətlər',
      description: 'Təhlükəsizlik və komfort üçün zəruri olan peşəkar avadanlıqlar.',
      image: ACCESSORIES_IMAGE,
      badge: 'Orijinal Brendlər'
    }
  ];

  return (
    <section id="kateqoriyalar" className="py-20 bg-[#0A0D12]/75 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
              Kolleksiyalar
            </div>
            <h2 className="text-2xl sm:text-4xl font-syne font-extrabold text-white tracking-tight">
              Sürüş Tərzinə Uyğun Kateqoriyalar
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Hər bir kateqoriya Bakı yollarının və relyefinin xüsusiyyətlərinə uyğun olaraq diqqətlə seçilmişdir.
          </p>
        </div>

        {/* 4-Column Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('kataloq');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative rounded-3xl overflow-hidden bg-[#141A22]/90 backdrop-blur-lg border cursor-pointer transition-all duration-300 hover:-translate-y-1.5 ${
                  isActive 
                    ? 'border-[#CCFF00] ring-1 ring-[#CCFF00] shadow-lg shadow-[#CCFF00]/10' 
                    : 'border-white/10 hover:border-[#CCFF00]/50 hover:shadow-xl'
                }`}
              >
                {/* Image Slot */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 text-[11px] font-mono font-bold text-[#0A0D12] bg-[#CCFF00] px-2.5 py-0.5 rounded-md shadow-xs">
                    {cat.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-medium text-neutral-400 uppercase">
                      {cat.subtitle}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-white font-syne mb-2 group-hover:text-[#CCFF00] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
