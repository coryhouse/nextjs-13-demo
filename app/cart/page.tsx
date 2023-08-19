"use client";
import { useCartContext } from "@/context/cart-context";

export default function CartPage() {
  const { cart, removeFromCart } = useCartContext();

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cart.map((productId) => (
          <li key={productId}>
            {productId}{" "}
            <button onClick={() => removeFromCart(productId.toString())}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
