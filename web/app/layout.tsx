import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Futurekind MSC | Sustainable Living Made Easy",
  description: "Carefully curated eco-friendly products that meet high standards for quality, durability, and value. Make sustainable choices without overthinking every purchase.",
  authors: [{ name: "Futurekind MSC LLC" }],
  keywords: "eco-friendly, sustainable living, green products, eco-conscious, quality products, amazon fba",
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/futurekindlogo.jpeg", sizes: "1024x1024", type: "image/jpeg" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Futurekind MSC | Sustainable Living Made Easy",
    description: "Carefully curated eco-friendly products that meet high standards for quality, durability, and value.",
    type: "website",
    siteName: "Futurekind MSC",
    images: [
      {
        url: "/futurekindlogo.jpeg",
        width: 1024,
        height: 1024,
        alt: "Futurekind MSC Logo",
      },
    ],
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
