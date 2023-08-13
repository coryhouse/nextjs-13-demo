import { Product } from "@/mocks/products";
import { useQuery } from "@tanstack/react-query";

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/api/products/${id}`);
      return res.json() as Promise<Product>;
    },
  });
}
