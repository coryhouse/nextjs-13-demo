import Link from "next/link";
import { Product } from "../api/products/route";

export default async function ProductsPage() {
  const resp = await fetch("http://localhost:3000/api/products");
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
