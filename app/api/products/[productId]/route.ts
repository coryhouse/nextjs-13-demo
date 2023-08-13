import { mockProducts } from "@/mock-data/products";
import { NextResponse } from "next/server";

// NOTE: There cannot be a route.js file at the same route segment level as page.js. That's why I put API routes are under /api.
// GET calls are cached by default.
// To opt out: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#opting-out-of-caching
export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  if (!params.productId)
    return NextResponse.next({ status: 400, statusText: "Missing productId." });

  const matchingProduct = mockProducts.find(
    (p) => p.id.toString() === params.productId
  );

  if (!matchingProduct)
    return NextResponse.next({ status: 404, statusText: "Product not found." });

  return NextResponse.json(matchingProduct);
}
