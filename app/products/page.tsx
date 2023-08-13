import { Product } from "@/mocks/products";
import Link from "next/link";

export default async function ProductsPage() {
  const resp = await fetch("http://localhost:3000/api/products", {
    // Alternatively, can set via https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
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
