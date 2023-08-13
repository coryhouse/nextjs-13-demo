"use client";

import { CartContextProvider } from "@/context/cart-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

const queryClient = new QueryClient();

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <CartContextProvider>{children}</CartContextProvider>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
