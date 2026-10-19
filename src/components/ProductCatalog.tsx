import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, RotateCcw, Check, Sparkles } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { CATEGORIES_LIST } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  wishlistIds,
  onToggleWishlist,
  onOpenDetail,
  onAddToCart,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedWheelSize, setSelectedWheelSize] = useState<string>('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Wheel size options found in data
  const wheelOptions = ['all', '29"', '28"', 'Universal'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesSku = item.sku.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSpecs = item.frameMaterial.toLowerCase().includes(query);
        if (!matchesName && !matchesSku && !matchesCategory && !matchesDesc && !matchesSpecs) {
          return false;
        }
      }
      // Max price
      if (item.priceAZN > maxPrice) {
        return false;
      }
      // In stock
      if (inStockOnly && !item.inStock) {
        return false;
      }
      // Wheel size
      if (selectedWheelSize !== 'all' && !item.wheelSize.includes(selectedWheelSize)) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAZN - b.priceAZN;
      if (sortBy === 'price-desc') return b.priceAZN - a.priceAZN;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured/default
    });
  }, [products, selectedCategory, searchQuery, maxPrice, inStockOnly, selectedWheelSize, sortBy]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSearchQuery('');
    setMaxPrice(3000);
    setInStockOnly(false);
    setSelectedWheelSize('all');
    setSortBy('featured');
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    searchQuery.trim() !== '' || 
    maxPrice < 3000 || 
    inStockOnly || 
    selectedWheelSize !== 'all';

  return (
    <section id="kataloq" className="py-20 bg-[#0A0D12]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
                Kataloq və Seçimlər
              </div>
              <h2 className="text-2xl sm:text-4xl font-syne font-extrabold text-white tracking-tight">
                Bütün Velosipedlər və Aksessuarlar
              </h2>
            </div>

            {/* Total Results Counter */}
            <div className="text-xs text-neutral-400 font-mono">
              <span className="font-bold text-[#CCFF00] tabular-nums">{filteredProducts.length}</span> məhsul aktivdir
            </div>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/10">
            {CATEGORIES_LIST.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id as ProductCategory)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    active
                      ? 'bg-[#CCFF00] text-[#0A0D12] font-bold shadow-md shadow-[#CCFF00]/15'
                      : 'bg-[#141A22] text-neutral-300 hover:bg-[#1f2937] hover:text-white border border-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-[#141A22]/90 backdrop-blur-md border border-white/10 mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Model adı, SKU (məs: MTB, Carbon, Gravel, Shimano)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0A0D12] border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#CCFF00] focus:border-[#CCFF00] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Təmizlə
              </button>
            )}
          </div>

          {/* Controls: Price, Wheel Size, Sort */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Price Filter Slider Control */}
            <div className="flex items-center gap-2 bg-[#0A0D12] px-3.5 py-2 rounded-xl border border-white/10 text-xs">
              <span className="text-neutral-400 whitespace-nowrap font-mono">Maks:</span>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-[#CCFF00] cursor-pointer"
              />
              <span className="font-bold tabular-nums text-[#CCFF00] whitespace-nowrap font-syne">
                {maxPrice} ₼
              </span>
            </div>

            {/* Wheel Size Filter */}
            <select
              value={selectedWheelSize}
              onChange={(e) => setSelectedWheelSize(e.target.value)}
              className="bg-[#0A0D12] border border-white/10 text-xs font-medium text-neutral-300 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#CCFF00] cursor-pointer"
            >
              <option value="all">Bütün təkərlər</option>
              <option value="29&quot;">29" Təkər</option>
              <option value="28&quot;">28" / 700c</option>
              <option value="Universal">Aksesuarlar</option>
            </select>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#0A0D12] border border-white/10 text-xs font-semibold text-neutral-200 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#CCFF00] cursor-pointer"
            >
              <option value="featured">Seçilmişlər</option>
              <option value="price-asc">Qiymət: Artan</option>
              <option value="price-desc">Qiymət: Azalan</option>
              <option value="rating">Reytinqə görə</option>
            </select>

            {/* Reset Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="p-2.5 text-neutral-300 hover:text-rose-400 bg-[#0A0D12] border border-white/10 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs"
                title="Bütün filtrləri sıfırla"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sıfırla</span>
              </button>
            )}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onOpenDetail={onOpenDetail}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          /* Clean Empty State */
          <div className="py-16 text-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8">
            <div className="w-12 h-12 rounded-full bg-neutral-200 mx-auto flex items-center justify-center text-neutral-600 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 mb-1">
              Axtarışınıza uyğun məhsul tapılmadı
            </h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
              Filtrləri sıfırlayın və ya fərqli açar sözlərlə axtarış aparın.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Bütün Məhsulları Göstər
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
