"use client";
import React from "react";

type CartContextValue = {
  cart: number[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
};

const CartContext = React.createContext<CartContextValue | null>(null);

type CartContextProviderProps = {
  children: React.ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = React.useState<number[]>([]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: (productId: string) => {
          setCart([...cart, parseInt(productId)]);
        },
        removeFromCart: (productId: string) => {
          setCart(cart.filter((id) => id !== parseInt(productId)));
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
