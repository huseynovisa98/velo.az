export type ProductCategory = 
  | 'all'
  | 'mountain'
  | 'urban'
  | 'road'
  | 'electric'
  | 'accessories'
  | 'kids';

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: ProductCategory;
  categoryLabel: string;
  priceAZN: number;
  originalPriceAZN?: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isSale?: boolean;
  frameMaterial: string;
  wheelSize: string;
  speeds: string;
  brakes: string;
  weightKgs: number;
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  keyFeatures: string[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface ServicePackage {
  id: string;
  title: string;
  duration: string;
  priceAZN: number;
  description: string;
  features: string[];
  recommendedFor: string;
}
