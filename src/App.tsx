import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, CartItem } from './types';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SizeCalculatorModal } from './components/SizeCalculatorModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ServiceSection } from './components/ServiceSection';
import { SaleSection } from './components/SaleSection';
import { ContactSection } from './components/ContactSection';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { EngineeringModal } from './components/EngineeringModal';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { Footer } from './components/Footer';

export default function App() {
  // Products state
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  // Cart state with localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('velo_az_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    // Default initial demo cart item
    return [
      {
        product: PRODUCTS[0],
        selectedSize: 'M (17")',
        selectedColor: PRODUCTS[0].colors[0]?.name || 'Mat Tünd Boz',
        quantity: 1,
      },
    ];
  });

  // Wishlist state with localStorage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('velo_az_wishlist');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return [PRODUCTS[1].id];
  });

  // Modal and drawer visibility states
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSizeCalcOpen, setIsSizeCalcOpen] = useState(false);
  const [isEngineeringModalOpen, setIsEngineeringModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isStandaloneModalOpen, setIsStandaloneModalOpen] = useState(false);

  // Discount state from promo
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountCode, setDiscountCode] = useState('');

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('velo_az_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('velo_az_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {}
  }, [wishlistIds]);

  // Cart operations
  const handleAddToCart = (product: Product, size?: string, color?: string, quantity: number = 1) => {
    const chosenSize = size || product.sizes[0] || 'Standart';
    const chosenColor = color || product.colors[0]?.name || 'Standart';

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) =>
          i.product.id === product.id &&
          i.selectedSize === chosenSize &&
          i.selectedColor === chosenColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      } else {
        return [...prev, { product, selectedSize: chosenSize, selectedColor: chosenColor, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, size: string, color: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, size, color);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          item.selectedSize === size &&
          item.selectedColor === color
        ) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (productId: string, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (i) =>
          !(i.product.id === productId && i.selectedSize === size && i.selectedColor === color)
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  // Calculations for Header
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAZN = cartItems.reduce(
    (sum, item) => sum + item.product.priceAZN * item.quantity,
    0
  );

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  // Proceed to checkout flow
  const handleProceedToCheckout = (discount: number, code: string) => {
    setDiscountAmount(discount);
    setDiscountCode(code);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('kataloq');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0D12]/60 text-neutral-100 selection:bg-[#CCFF00] selection:text-[#0A0D12] relative overflow-x-hidden">
      
      {/* Top Banner for Standalone File Access */}
      <div className="bg-[#CCFF00] text-[#0A0D12] text-xs font-semibold py-1.5 px-4 flex items-center justify-between gap-3 z-40 border-b border-[#0A0D12]/20">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="font-mono bg-[#0A0D12] text-[#CCFF00] px-2 py-0.5 rounded text-[10px] font-bold shrink-0">
            VELO.AZ REDİZAYN
          </span>
          <span className="truncate">Tək fayllı responsive HTML (video fon, 16 kateqoriya, GSAP animasiya və işlək səbət) hazırdır.</span>
        </div>
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="/velo-az-video-background.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 font-bold hidden sm:inline"
          >
            Birbaşa Aç ↗
          </a>
          <button
            onClick={() => setIsStandaloneModalOpen(true)}
            className="bg-[#0A0D12] text-white hover:bg-[#141A22] px-3 py-1 rounded-full text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow"
          >
            HTML Faylını Endir / Kodu Gör
          </button>
        </div>
      </div>

      {/* Fixed Fullscreen Background Video & Overlay */}
      <BackgroundVideo />

      {/* 1. Top Bar Navigation */}
      <Header
        cartCount={totalCartCount}
        cartTotalAZN={totalCartAZN}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSizeCalc={() => setIsSizeCalcOpen(true)}
        onOpenEngineeringGuide={() => setIsEngineeringModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onExploreCatalog={scrollToCatalog}
        onOpenSizeCalc={() => setIsSizeCalcOpen(true)}
      />

      {/* 3. Bento Grid: E-Bike Power, MTB & Şəhər, 24/7 Servis */}
      <BentoGrid
        onExploreCatalog={scrollToCatalog}
        onOpenServiceBooking={() => {
          const el = document.getElementById('servis');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 4. Category Showcase */}
      <CategoryShowcase
        activeCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* 5. Filterable & Searchable Product Catalog */}
      <ProductCatalog
        products={products}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onOpenDetail={(product) => setActiveProductDetail(product)}
        onAddToCart={handleAddToCart}
      />

      {/* 5. Special Sale Section */}
      <SaleSection
        products={products}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onOpenDetail={(product) => setActiveProductDetail(product)}
        onAddToCart={handleAddToCart}
        onViewAllCatalog={() => {
          setSelectedCategory('all');
          scrollToCatalog();
        }}
      />

      {/* 6. Service & Workshop Section */}
      <ServiceSection />

      {/* 7. Store, Contacts & FAQ Section */}
      <ContactSection />

      {/* 8. Footer */}
      <Footer
        onOpenEngineeringGuide={() => setIsEngineeringModalOpen(true)}
        onOpenSizeCalc={() => setIsSizeCalcOpen(true)}
      />

      {/* MODALS & DRAWERS */}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProductDetail}
        onClose={() => setActiveProductDetail(null)}
        isWishlisted={activeProductDetail ? wishlistIds.includes(activeProductDetail.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onOpenSizeCalc={() => setIsSizeCalcOpen(true)}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Simulator Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountAmount={discountAmount}
        discountCode={discountCode}
        onSuccessOrder={handleOrderSuccess}
      />

      {/* Size Calculator Modal */}
      <SizeCalculatorModal
        isOpen={isSizeCalcOpen}
        onClose={() => setIsSizeCalcOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(product) => setActiveProductDetail(product)}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onOpenDetail={(product) => setActiveProductDetail(product)}
        onAddToCart={(product) => handleAddToCart(product)}
      />

      {/* Engineering & Integration Guide Modal */}
      <EngineeringModal
        isOpen={isEngineeringModalOpen}
        onClose={() => setIsEngineeringModalOpen(false)}
      />

      {/* Standalone HTML Export & Code Viewer Modal */}
      <StandaloneExportModal
        isOpen={isStandaloneModalOpen}
        onClose={() => setIsStandaloneModalOpen(false)}
      />

    </div>
  );
}
