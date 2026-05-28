import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Remedial Waterproofing Perth | PWSS Remedial Division",
  description:
    "Expert remedial waterproofing in Perth. Leak investigation, membrane replacement, balcony repairs & more. Backed by Perth Waterproofing & Silicone Solutions. Call 1300 271 425.",
  metadataBase: new URL("https://perthwaterproofingremedial.com"),
  openGraph: {
    title: "Remedial Waterproofing Perth | PWSS Remedial Division",
    description:
      "Expert remedial waterproofing in Perth. Leak investigation, membrane replacement, balcony repairs & more. Backed by Perth Waterproofing & Silicone Solutions.",
    url: "https://perthwaterproofingremedial.com",
    siteName: "Remedial Waterproofing Perth",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://perthwaterproofingremedial.com",
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
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}