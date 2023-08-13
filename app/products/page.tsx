import { Product } from "@/mock-data/products";
import Link from "next/link";

export default async function ProductsPage() {
  const resp = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const products = (await resp.json()) as Product[];

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={"/products/" + product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
