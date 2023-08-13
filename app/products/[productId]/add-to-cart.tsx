"use client";
import { useCartContext } from "@/context/cart-context";

type AddToCartProps = {
  productId: string;
};

export default function AddToCart({ productId }: AddToCartProps) {
  const { addToCart } = useCartContext();
  return (
    <button
      onClick={() => {
        addToCart(productId);
        alert("added to cart");
      }}
    >
      Add to cart
    </button>
  );
}
