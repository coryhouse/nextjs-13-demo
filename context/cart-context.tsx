"use client";
import React from "react";

type CartContextValue = {
  cart: number[];
  setCart: React.Dispatch<React.SetStateAction<number[]>>;
};

const CartContext = React.createContext<CartContextValue | null>(null);

type CartContextProviderProps = {
  children: React.ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = React.useState<number[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
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
