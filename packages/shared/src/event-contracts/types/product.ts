export interface Product {
  id: string;
  slug: string;
  name: string;
  price: ProductPrice;
  description: string;
  features?: string[];
  images: ProductImage[];
  primaryImage: ProductImage;
  brand: ProductBrand;
  category: ProductCategory;
  inventory: ProductInventory;
  options: ProductOption[];
  variants: Variant[];
  reviews: ProductReviews;
  tags?: ProductTag[];
}

export interface ProductPrice {
  current: number;
  original: number;
  currencyCode: 'USD' | 'EUR';
}

export interface ProductImage {
  url: string;
  altText: string;
}

export interface ProductBrand {
  id: string;
  name: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  breadcrumbs: ProductCategoryBreadcrumb[];
}

export interface ProductCategoryBreadcrumb {
  id: string;
  name: string;
}

export interface ProductInventory {
  stockLevel: 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';
  availableQuantity: number;
}

export interface ProductOption {
  id: string;
  name: string;
  values: ProductOptionValue[];
}

export interface ProductOptionValue {
  name: string;
  value: string;
}

export interface ProductReviews {
  averageRating: number;
  reviewCount: number;
}

export type ProductTag = 'NEW_ARRIVAL' | 'BESTSELLER' | 'ON_SALE';

export interface Variant {
  id: string;
  name: string;
  price: ProductPrice;
  image: ProductImage;
  inventory: ProductInventory;
  selectedOptions: VariantSelectedOption[];
}

export interface VariantSelectedOption {
  name: string;
  value: string;
}
