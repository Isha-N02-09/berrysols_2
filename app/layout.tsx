import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berry",
  description: "Berry — your AI that never sleeps.",
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
