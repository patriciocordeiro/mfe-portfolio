import {
  listenToAddToCartEvent,
  type AddToCartEventDetail,
} from '@mfe-portfolio/shared';
import { useEffect, useState } from 'react';

// This is the component that will eventually be shared
function Cart() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const handleCartAdd = (detail: AddToCartEventDetail) => {
      // Cast the event to get the typed detail
      // const customEvent = event as CustomEvent<AddToCartEventDetail>;
      console.log('CART MFE: Received event!', detail.product);
      setItemCount((currentCount) => currentCount + 1);
    };

    const cleanup = listenToAddToCartEvent(handleCartAdd);

    return () => cleanup();
  }, []);
  return (
    <div style={{ border: '2px solid red', padding: '10px' }}>
      <h2>Cart MFE</h2>
      <p>Items: {itemCount}</p>
    </div>
  );
}

// We export it as the default for now so we can run it standalone
export default Cart;
