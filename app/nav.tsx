"use client";

import { useCartContext } from "@/context/cart-context";
import NavLink from "./nav-link";

export default function Nav() {
  const { cart } = useCartContext();

  return (
    <nav>
      <NavLink path="/">Home</NavLink> |{" "}
      <NavLink path="/products">Products</NavLink> |{" "}
      <NavLink path="/cart">Cart ({cart.length})</NavLink>
    </nav>
  );
}
