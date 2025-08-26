import { addToCart, type Product } from '@mfe-portfolio/shared/event-contracts';
import { Link } from 'react-router-dom';
import './ProductCard.module.css'; // We'll assume a simple CSS file for styling

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className='product-card'>
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.primaryImage.url}
          alt={product.primaryImage.altText}
          className='product-card-image'
        />
        <h3 className='product-card-name'>{product.name}</h3>
      </Link>
      <p className='product-card-price'>${product.price.current / 100}</p>
      <button onClick={handleAddToCart} className='product-card-button'>
        Add to Cart
      </button>
    </div>
  );
}
