import type { Product } from '@mfe-portfolio/shared/event-contracts';

const API_BASE_URL = 'http://localhost:4000';

/**
 * Fetches a list of products from the API.
 * In the future, this will accept query parameters for filtering, sorting, etc.
 */
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/products`);

  // A real-world app would have more robust error handling here
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

/**
 * Fetches a single product by its slug/id.
 */
export const fetchProductBySlug = async (slug: string): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/products/${slug}`);
  if (!response.ok) {
    throw new Error(`Could not find a product with slug: ${slug}`);
  }
  return response.json();
};
