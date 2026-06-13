import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const projects = [
  {
    title: "Astrology Consultation Website",
    category: "Live Project",
    description:
      "A live astrology consultation website with booking integration and service showcase.",
    image:
      "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "https://astrolifecounsel.com",
    external: true,
    demoLabel: "View Demo",
  },
  {
    title: "Urban Spice Restaurant",
    category: "Restaurant Website Demo",
    description:
      "Warm, premium restaurant site with menu, chef specials, gallery, reservations, and WhatsApp ordering.",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/portfolio/restaurant",
    external: false,
    demoLabel: "View Live Demo",
  },
  {
    title: "Titan Fitness Club",
    category: "Gym Website Demo",
    description:
      "Energetic fitness club site with membership plans, trainers, transformations, and class schedules.",
    image:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/portfolio/gym",
    external: false,
    demoLabel: "View Live Demo",
  },
  {
    title: "Golden Aura Jewellery",
    category: "Jewellery Website Demo",
    description:
      "Luxury jewellery boutique with featured collections, new arrivals, and private consultation booking.",
    image:
      "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/portfolio/jewellery",
    external: false,
    demoLabel: "View Live Demo",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="Our Work"
            subtitle="Live projects and interactive demo websites"
          />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.title} delay={index * 0.1}>
              <article
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/20 transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-saffron font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-3 mb-2 text-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.external ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:text-saffron transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.demoLabel}
                    </a>
                  ) : (
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:text-saffron transition-colors group/link"
                    >
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      {project.demoLabel}
                    </Link>
                  )}
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            These are demonstration projects created to showcase our website design and
            development capabilities across different industries.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
