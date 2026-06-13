import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="konark-pattern bg-forest-dark py-16 md:py-24 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <AnimateOnScroll className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-4 text-white font-black">
            Building Digital Foundations for Odisha&apos;s Businesses
          </h1>
          <p className="text-lg md:text-xl text-saffron mb-8">
            Website • Email • Domain • Social Media — All Under One Roof
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button href="#contact" variant="saffron">
              Get Started
            </Button>
            <Button href="#services" variant="outline">
              Our Services
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} direction="right" className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern workspace showcasing laptop, tablet, and smartphone on a wooden desk"
              width={800}
              height={600}
              className="w-full rounded-xl shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
