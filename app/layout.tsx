import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORRÉ — The Art of Contemporary Elegance | Luxury Fashion Maison",
  description:
    "Discover ORRÉ, an international contemporary luxury fashion label exploring timeless elegance, sculpted silhouettes, and the considered art of dressing.",
  keywords: [
    "ORRÉ",
    "Luxury Fashion",
    "Contemporary Haute Couture",
    "Tailoring",
    "Editorial Fashion",
    "Maison ORRÉ",
  ],
  authors: [{ name: "ORRÉ Maison de Mode" }],
  openGraph: {
    title: "ORRÉ — The Art of Contemporary Elegance",
    description:
      "A considered expression of contemporary elegance. Designed to transcend seasons. Defined by detail.",
    type: "website",
    locale: "en_US",
    siteName: "ORRÉ",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORRÉ — The Art of Contemporary Elegance",
    description:
      "A considered expression of contemporary elegance. Designed to transcend seasons. Defined by detail.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="bg-[#FAF7F0] text-[#211719] font-sans antialiased selection:bg-[#541326] selection:text-[#F3EBDD] overflow-x-hidden">
        <div className="luxury-noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
