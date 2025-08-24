export interface Product {
  id: string;
  name: string;
}

export const ADD_TO_CART_EVENT = 'cart:add';
export const REMOVE_FROM_CART_EVENT = 'cart:remove';

export type AddToCartEventDetail = {
  product: Product;
};

export function addToCart(product: Product) {
  const event: CustomEvent<AddToCartEventDetail> = new CustomEvent(
    ADD_TO_CART_EVENT,
    {
      detail: { product },
    }
  );
  window.dispatchEvent(event);
}

export function listenToAddToCartEvent(
  callback: (detail: AddToCartEventDetail) => void
) {
  const eventHandler = (event: Event) => {
    const ev = event as CustomEvent<AddToCartEventDetail>;
    callback(ev.detail);
  };
  window.addEventListener(ADD_TO_CART_EVENT, eventHandler);

  const cleanup = () => {
    window.removeEventListener(ADD_TO_CART_EVENT, eventHandler);
  };
  return cleanup;
}

export function removeFromCart(product: Product) {
  const event: CustomEvent<AddToCartEventDetail> = new CustomEvent(
    REMOVE_FROM_CART_EVENT,
    {
      detail: { product },
    }
  );
  window.dispatchEvent(event);
}

export function listenToRemoveFromCartEvent(
  callback: (detail: AddToCartEventDetail) => void
) {
  const eventHandler = (event: Event) => {
    const ev = event as CustomEvent<AddToCartEventDetail>;
    callback(ev.detail);
  };
  window.addEventListener(REMOVE_FROM_CART_EVENT, eventHandler);

  const cleanup = () => {
    window.removeEventListener(REMOVE_FROM_CART_EVENT, eventHandler);
  };
  return cleanup;
}
