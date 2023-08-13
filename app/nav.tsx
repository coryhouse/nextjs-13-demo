"use client";

import { useCartContext } from "@/context/cart-context";
import Link from "next/link";

export default function Nav() {
  const { cart } = useCartContext();

  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/products">Products</Link> |{" "}
      <Link href="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}
