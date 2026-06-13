import type { Metadata } from "next";
import GymSite from "@/components/demos/gym/GymSite";

export const metadata: Metadata = {
  title: "Titan Fitness Club | Demo Website",
  description:
    "Demo gym website by Think Bhumi — membership plans, trainers, class schedule, and contact form.",
  openGraph: {
    title: "Titan Fitness Club — Demo by Think Bhumi",
    description: "Modern fitness club website demo with plans, trainers, and schedules.",
  },
};

export default function GymDemoPage() {
  return <GymSite />;
}
