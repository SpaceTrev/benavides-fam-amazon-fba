import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Futurekind MSC | Sustainable Living Made Easy",
  description: "Carefully curated eco-friendly products that meet high standards for quality, durability, and value. Make sustainable choices without overthinking every purchase.",
  keywords: ["eco-friendly", "sustainable living", "green products", "eco-conscious", "quality products", "amazon fba"],
  authors: [{ name: "Futurekind MSC LLC" }],
  openGraph: {
    title: "Futurekind MSC | Sustainable Living Made Easy",
    description: "Carefully curated eco-friendly products that meet high standards for quality, durability, and value.",
    type: "website",
    siteName: "Futurekind MSC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
