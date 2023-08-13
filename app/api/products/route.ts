import { NextResponse } from "next/server";

export type Product = {
  id: number;
  name: string;
  price: number;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 90",
    price: 100,
  },
  {
    id: 2,
    name: "Puma RS-X",
    price: 120,
  },
];

export async function GET(request: Request) {
  return NextResponse.json(mockProducts);
}
