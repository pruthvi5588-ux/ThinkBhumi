import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import FeatureComparison from "@/components/sections/FeatureComparison";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Packages />
      <FeatureComparison />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
