import type { Product } from '@mfe-portfolio/shared/event-contracts';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/product-api';

interface UseProductsReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, isLoading, error };
};
