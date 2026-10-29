import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zywo — Strategy-First Advertising Agency | Every Impression Matters",
  description:
    "Zywo is a strategy-first advertising agency. We use data to build defensible strategies and execute those strategies across high-impact commercial creative, performance media, and scalable digital platforms.",
  keywords: [
    "Zywo",
    "Strategy-First Advertising Agency",
    "Advertising Agency",
    "Data-Driven Strategy",
    "Commercial Video Production",
    "Performance Marketing",
    "Paid Media",
    "Branding",
    "Web Development",
    "Every Impression Matters",
    "Kerala",
    "Calicut",
  ],
  authors: [{ name: "Zywo" }],
  openGraph: {
    title: "Zywo — Every Impression Matters",
    description: "In design, the first impression is the entire narrative.",
    type: "website",
    siteName: "Zywo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Syne:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/images/zywo-favicon.svg" />
      </head>
      <body className="bg-white text-[#0f172a] antialiased selection:bg-[#c7ddfc] selection:text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
