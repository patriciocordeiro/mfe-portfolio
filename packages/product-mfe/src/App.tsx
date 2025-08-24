import { addToCart, type Product } from '@mfe-portfolio/shared';
import { type JSX } from 'react';

const ProductList = (): JSX.Element => {
  const products = [
    { id: 'p1', name: 'Product A' },
    { id: 'p2', name: 'Product B' },
    { id: 'p3', name: 'Product C' },
  ];

  const addProduct = (product: Product) => {
    console.log('Hello');
    addToCart(product);
  };

  return (
    <div style={{ border: '2px solid blue', padding: '10px' }}>
      <h2>Browse MFE - Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name}
            <button onClick={() => addProduct(p)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
