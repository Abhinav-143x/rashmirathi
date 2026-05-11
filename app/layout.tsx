import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "रश्मिरथी",
  description: "A focused chapter-wise reader for Rashmirathi with line meanings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className="font-devanagari antialiased">{children}</body>
    </html>
  );
}
