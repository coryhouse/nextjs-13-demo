import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="text-blue-700 underline">
        Home
      </Link>{" "}
      |{" "}
      <Link href="/products" className="text-blue-700 underline">
        Products
      </Link>
    </nav>
  );
}
