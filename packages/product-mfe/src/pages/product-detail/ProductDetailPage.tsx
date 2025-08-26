import type { Product } from '@mfe-portfolio/shared/event-contracts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/products/${slug}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (isLoading) return <div>Loading product details...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <img
        src={product.primaryImage.url}
        alt={product.primaryImage.altText}
        style={{ maxWidth: '400px' }}
      />
      <h1>{product.name}</h1>
      <h2>${product.price.current / 100}</h2>
      <p>{product.description}</p>
      <h3>Features:</h3>
      <ul>
        {product.features?.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDetailPage;
