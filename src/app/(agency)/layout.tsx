import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  keywords: [
    "Think Bhumi",
    "digital agency Odisha",
    "website design Odisha",
    "social media management",
    "Google Business Profile",
    "SEO Odisha",
    "business email setup",
  ],
  authors: [{ name: "Think Bhumi" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.thinkbhumi.co.in",
    siteName: "Think Bhumi",
    title: "Think Bhumi | Digital Agency for Odisha Businesses",
    description:
      "Website • Email • Domain • Social Media — All Under One Roof. Affordable digital solutions for local businesses in Odisha.",
    images: [{ url: "/logo.png", alt: "Think Bhumi Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Think Bhumi | Digital Agency for Odisha Businesses",
    description:
      "Building digital foundations for Odisha's businesses with websites, email, domains, and social media.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AgencyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
