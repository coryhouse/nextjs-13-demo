import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Product List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="border-cyan-400 p-4 bg-slate-200">{children}</div>;
}
