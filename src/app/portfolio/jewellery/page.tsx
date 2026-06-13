import type { Metadata } from "next";
import JewellerySite from "@/components/demos/jewellery/JewellerySite";

export const metadata: Metadata = {
  title: "Golden Aura Jewellery | Demo Website",
  description:
    "Demo jewellery website by Think Bhumi — luxury collections, new arrivals, and inquiry form.",
  openGraph: {
    title: "Golden Aura Jewellery — Demo by Think Bhumi",
    description: "Premium jewellery boutique website demo with collections and showcase.",
  },
};

export default function JewelleryDemoPage() {
  return <JewellerySite />;
}
