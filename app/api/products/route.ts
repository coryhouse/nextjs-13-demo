import { mockProducts } from "@/mock-data/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(mockProducts);
}
