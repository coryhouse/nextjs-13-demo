import { notFound } from "next/navigation";
import AddToCart from "./add-to-cart";
import { Product } from "@/mocks/products";
import Reviews from "./reviews";
import { Suspense } from "react";

type ProductDetailPageProps = {
  params: { productId: string };
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const resp = await fetch(
    `http://localhost:3000/api/products/${params.productId}`
  );
  const product = (await resp.json()) as Product;

  if (params.productId === "0") notFound();
  if (params.productId === "a") throw new Error("Invalid product id");

  return (
    <>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <AddToCart productId={params.productId} />

      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews productId={params.productId} />
      </Suspense>
    </>
  );
}
