export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  return <h2>Product detail for {params.productId}</h2>;
}
