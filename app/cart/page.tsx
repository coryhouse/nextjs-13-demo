"use client";
import { useCartContext } from "@/context/cart-context";

export default function CartPage() {
  const { cart } = useCartContext();

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cart.map((productId) => (
          <li key={productId}>{productId}</li>
        ))}
      </ul>
    </>
  );
}
