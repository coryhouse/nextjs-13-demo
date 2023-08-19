import { mockReviews } from "@/mocks/reviews";
import { NextResponse } from "next/server";

type GetProductReviewParams = { params: { productId: string } };

const delayInMilliseconds = 2000;

export async function GET(
  request: Request,
  { params }: GetProductReviewParams
) {
  const matchingReviews = mockReviews.filter(
    (p) => p.id.toString() === params.productId
  );

  // add a fake delay
  // setTimeout(function () {
  return NextResponse.json(matchingReviews ? matchingReviews : []);
  // }, delayInMilliseconds);
}
