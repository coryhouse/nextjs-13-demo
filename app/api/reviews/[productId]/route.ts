import { mockReviews } from "@/mocks/reviews";
import { NextResponse } from "next/server";

type GetProductReviewParams = { params: { productId: string } };

const delayInMilliseconds = 2000;

export async function GET(
  request: Request,
  { params }: GetProductReviewParams
) {
  if (!params.productId)
    return NextResponse.next({ status: 400, statusText: "Missing productId." });

  const matchingReview = mockReviews.find(
    (p) => p.id.toString() === params.productId
  );

  // add a fake delay
  setTimeout(function () {
    return matchingReview ? NextResponse.json(matchingReview) : [];
  }, delayInMilliseconds);
}
