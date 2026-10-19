import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const matches = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.frameMaterial.toLowerCase().includes(q)
        );
      })
    : [];

  const popularSearches = ['Carbon MTB', 'Gravel 700c', 'Elektrikli E-bike', 'Şəhər', 'Dəbilqə'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nə axtarırsınız? (məs: Dağ velosipedi, Shimano, Karbon...)"
            className="w-full text-base font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 hover:text-neutral-600 px-2"
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

        {/* Results Container */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                Məşhur Axtarışlar
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : matches.length > 0 ? (
            <div className="space-y-2">
              <span className="text-xs text-neutral-400 block mb-2">
                {matches.length} nəticə tapıldı:
              </span>
              {matches.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover bg-neutral-100 shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-xs text-neutral-400">
                        {item.categoryLabel} · {item.wheelSize}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-extrabold font-display text-neutral-950 tabular-nums">
                      {item.priceAZN.toLocaleString('az-AZ')} ₼
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-neutral-500">
              "{query}" üzrə heç bir nəticə tapılmadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
