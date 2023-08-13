import { addToCart } from "@/utils/cart-utils";
import { notFound } from "next/navigation";

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  if (params.productId === "0") notFound();
  if (params.productId === "a") throw new Error("Invalid product id");
  return (
    <>
      <h2>Product detail for {params.productId}</h2>
      <button onClick={() => addToCart(params.productId)}>Add to cart</button>
    </>
  );
}
