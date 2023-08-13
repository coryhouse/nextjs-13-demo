"use client";

import { CartContextProvider } from "@/context/cart-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// See https://tanstack.com/query/v5/docs/react/examples/react/nextjs-suspense-streaming
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { useState } from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  return (
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      </QueryClientProvider>
    </CartContextProvider>
  );
}
