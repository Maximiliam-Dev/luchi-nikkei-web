import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/components/Providers";
import { site } from "@/data/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const PAGE_TITLE = "Luchi Nikkei | Sushi & Burger en Iquique";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: PAGE_TITLE,
  description:
    "Sushi nikkei, burgers y churrascos en Iquique. Pide por WhatsApp. Juan Martínez 1946.",
  keywords: [
    "sushi Iquique",
    "burger Iquique",
    "Luchi Nikkei",
    "nikkei Iquique",
    "sushi nikkei",
    "delivery Iquique",
    "churrascos Iquique",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: site.url,
    siteName: site.name,
    title: PAGE_TITLE,
    description:
      "Sushi nikkei, burgers y churrascos en Iquique. Juan Martínez 1946.",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Luchi Nikkei en Iquique",
      },
      {
        url: "/logo.png",
        alt: "Logo de Luchi Nikkei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Sushi nikkei, burgers y churrascos en Iquique. Pide por WhatsApp.",
    images: ["/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-[#0A0A0A] font-sans text-white antialiased">
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
