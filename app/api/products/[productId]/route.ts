import { mockProducts } from "@/mocks/products";
import { NextResponse } from "next/server";

// NOTE: There cannot be a route.js file at the same route segment level as page.js. That's why I put API routes are under /api.
// GET calls are cached by default.
// To opt out: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#opting-out-of-caching
export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const matchingProduct = mockProducts.find(
    (p) => p.id.toString() === params.productId
  );

  if (!matchingProduct)
    return new Response("Product not found.", {
      status: 404,
    });

  return NextResponse.json(matchingProduct);
}
