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
      }}
    >
      Add to cart
    </button>
  );
}
