import { notFound } from "next/navigation";
import AddToCart from "./add-to-cart";
import { Product } from "@/mock-data/products";

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
      <AddToCart productId={params.productId} />
    </>
  );
}
