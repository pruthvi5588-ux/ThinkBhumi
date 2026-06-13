import type { Metadata } from "next";
import RestaurantSite from "@/components/demos/restaurant/RestaurantSite";

export const metadata: Metadata = {
  title: "Urban Spice Restaurant | Demo Website",
  description:
    "Demo restaurant website by Think Bhumi — warm, premium dining experience with menu, reservations, and WhatsApp ordering.",
  openGraph: {
    title: "Urban Spice Restaurant — Demo by Think Bhumi",
    description: "Premium restaurant website demo with menu, gallery, and reservations.",
  },
};

export default function RestaurantDemoPage() {
  return <RestaurantSite />;
}
