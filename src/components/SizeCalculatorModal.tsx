import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';

interface SizeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter?: (sizeLabel: string) => void;
}

export const SizeCalculatorModal: React.FC<SizeCalculatorModalProps> = ({
  isOpen,
  onClose,
  onApplyFilter,
}) => {
  if (!isOpen) return null;

  const [heightCm, setHeightCm] = useState<number>(175);
  const [bikeStyle, setBikeStyle] = useState<'mountain' | 'road' | 'urban'>('mountain');

  // Calculation formula
  const getCalculation = () => {
    let letterSize = 'M';
    let mtbInches = '17" - 18"';
    let roadCm = '54 - 56 cm';
    let wheelRec = '29"';
    let saddleHeight = Math.round(heightCm * 0.42);

    if (heightCm < 155) {
      letterSize = 'XS';
      mtbInches = '13" - 14"';
      roadCm = '47 - 49 cm';
      wheelRec = '26" / 27.5"';
    } else if (heightCm <= 168) {
      letterSize = 'S';
      mtbInches = '15" - 16"';
      roadCm = '50 - 52 cm';
      wheelRec = '27.5"';
    } else if (heightCm <= 178) {
      letterSize = 'M';
      mtbInches = '17" - 18"';
      roadCm = '53 - 55 cm';
      wheelRec = '29"';
    } else if (heightCm <= 188) {
      letterSize = 'L';
      mtbInches = '19" - 20"';
      roadCm = '56 - 58 cm';
      wheelRec = '29"';
    } else {
      letterSize = 'XL';
      mtbInches = '21" - 22"';
      roadCm = '59 - 62 cm';
      wheelRec = '29"';
    }

    return { letterSize, mtbInches, roadCm, wheelRec, saddleHeight };
  };

  const result = getCalculation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-neutral-950">
                Velosiped Ölçü Kalkulyatoru
              </h3>
              <p className="text-xs text-neutral-500">
                Boyunuza və sürüş tərzinizə ən uyğun çərçivə ölçüsünü müəyyənləşdirin
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="py-6 space-y-5">
          {/* Height Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                Sizin Boyunuz (sm)
              </label>
              <div className="text-lg font-bold font-display text-neutral-950 bg-neutral-100 px-3 py-1 rounded-lg tabular-nums">
                {heightCm} sm
              </div>
            </div>
            <input
              type="range"
              min="145"
              max="205"
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
            />
            <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
              <span>145 sm (XS)</span>
              <span>175 sm (M)</span>
              <span>205 sm (XL)</span>
            </div>
          </div>

          {/* Style Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 block mb-2">
              Velosiped Növü
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setBikeStyle('mountain')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                  bikeStyle === 'mountain'
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                Dağ (MTB)
              </button>
              <button
                type="button"
                onClick={() => setBikeStyle('road')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                  bikeStyle === 'road'
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                Yol & Gravel
              </button>
              <button
                type="button"
                onClick={() => setBikeStyle('urban')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                  bikeStyle === 'urban'
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                Şəhər / E-Bike
              </button>
            </div>
          </div>

          {/* Calculated Output Box */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Tövsiyə Edilən Parametrlər</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-xl border border-amber-200/60">
                <span className="text-[10px] text-neutral-500 uppercase block">Beynəlxalq Ölçü</span>
                <span className="text-2xl font-extrabold font-display text-neutral-950 block">
                  {result.letterSize}
                </span>
                <span className="text-[11px] text-neutral-400">({heightCm} sm boy üçün)</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-amber-200/60">
                <span className="text-[10px] text-neutral-500 uppercase block">
                  {bikeStyle === 'road' ? 'Yol Çərçivəsi' : 'MTB Çərçivəsi'}
                </span>
                <span className="text-xl font-bold font-display text-neutral-950 block">
                  {bikeStyle === 'road' ? result.roadCm : result.mtbInches}
                </span>
                <span className="text-[11px] text-neutral-400">Standart hündürlük</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-amber-200/60 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-neutral-500 uppercase block">Təkər Diametri</span>
                <span className="text-xl font-bold font-display text-neutral-950 block">
                  {result.wheelRec}
                </span>
                <span className="text-[11px] text-neutral-400">Optimal sürüş üçün</span>
              </div>
            </div>

            <p className="text-xs text-amber-900/80 mt-3.5 leading-relaxed">
              💡 <strong>Mütəxəssis tövsiyəsi:</strong> velo.az mağazamıza yaxınlaşaraq seçdiyiniz model üzərində canlı sınaq sürüşü edə və peşəkar mexaniklərimiz tərəfindən yəhər hündürlüyünü tənzimlədə bilərsiniz.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => {
              onClose();
              const el = document.getElementById('kataloq');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{result.letterSize} Ölçülü Modellərə Bax</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
