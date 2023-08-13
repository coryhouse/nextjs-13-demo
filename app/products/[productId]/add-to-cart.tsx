"use client";
import { addToCart } from "@/utils/cart-utils";

type AddToCartProps = {
  productId: string;
};

export default function AddToCart({ productId }: AddToCartProps) {
  return <button onClick={() => addToCart(productId)}>Add to cart</button>;
}
