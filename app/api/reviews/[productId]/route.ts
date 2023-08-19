import { mockReviews } from "@/mocks/reviews";
import { NextResponse } from "next/server";

type GetProductReviewParams = { params: { productId: string } };

const delayInMilliseconds = 2000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(
  request: Request,
  { params }: GetProductReviewParams
) {
  const matchingReviews = mockReviews.filter(
    (p) => p.id.toString() === params.productId
  );

  // add a fake delay
  await sleep(delayInMilliseconds);
  return NextResponse.json(matchingReviews);
}
