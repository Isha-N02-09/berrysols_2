import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berry Solutions",
  description: "Berry Solutions — from choas to clarity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-ink">{children}</body>
    </html>
  );
}
