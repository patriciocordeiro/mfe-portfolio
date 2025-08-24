import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { addToCart, type Product } from '@mfe-portfolio/shared/event-contracts';

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    console.log('PRODUCT MFE: Calling addToCart from shared library', product);

    addToCart(product);
  };

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ border: '2px solid blue', padding: '10px' }}>
      <h2>Product MFE - Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: '10px' }}>
            <Link to={`/product/${p.slug}`}>{p.name}</Link>- $
            {p.price.current / 100}
            <button
              onClick={() => handleAddToCart(p)}
              style={{ marginLeft: '10px' }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
