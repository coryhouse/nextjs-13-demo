import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/products">Products</Link> |{" "}
      <Link href="/cart">Cart</Link>
    </nav>
  );
}
