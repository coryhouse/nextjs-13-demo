const cartKey = "cart";

export function addToCart(productId: string) {
  localStorage.setItem(cartKey, productId);
}

export function emptyCart() {
  localStorage.removeItem(cartKey);
}
