import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import BrandStyles from "@/components/layout/BrandStyles";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thinkbhumi.co.in"),
  title: {
    default: "Think Bhumi | Digital Agency for Odisha Businesses",
    template: "%s | Think Bhumi",
  },
  description:
    "Think Bhumi builds digital foundations for Odisha's businesses — website design, email setup, domain registration, social media management, SEO, and AI automation.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="w-full font-sans antialiased bg-white text-gray-800">
        <BrandStyles />
        {children}
      </body>
    </html>
  );
}
