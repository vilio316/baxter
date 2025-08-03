import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

export const Manrope_Font = Manrope({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Baxter: Your Stock Search Tool",
  description:
    "Baxter is a stock search tool that helps you find the best stocks to invest in. It provides detailed information about each stock, including its price, market cap, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Manrope_Font.className} `}>{children}</body>
    </html>
  );
}
