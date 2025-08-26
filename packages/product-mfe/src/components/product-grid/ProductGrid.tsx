import type { Product } from '@mfe-portfolio/shared/event-contracts';
import { ProductCard } from './ProductCard';
import './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className='product-grid'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
