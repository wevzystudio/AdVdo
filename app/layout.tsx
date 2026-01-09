
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ad VDO Made Easy | Bengal's No.1 Video Agency",
  description: "High-conversion video production and digital marketing agency. We simplify video marketing for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
