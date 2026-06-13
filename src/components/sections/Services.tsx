import {
  Globe,
  Share2,
  Search,
  MapPin,
  Bot,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional, mobile-responsive websites tailored to your brand — built to convert visitors into customers.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content creation and account management across Instagram, Facebook, and more to grow your audience.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search rankings and get discovered by local customers searching for your services online.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Setup",
    description:
      "Complete Google Maps and Business Profile setup so customers can find and trust your business locally.",
  },
  {
    icon: Bot,
    title: "AI Automation Solutions",
    description:
      "Smart automation for WhatsApp, customer inquiries, and workflows — save time and scale your operations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="Our Services"
            subtitle="Everything your business needs to thrive online"
          />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 0.1}>
              <div
                className="group p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-forest/20 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center mb-4 group-hover:bg-saffron/20 transition-colors">
                  <service.icon className="w-6 h-6 text-forest group-hover:text-saffron transition-colors" />
                </div>
                <h3 className="font-heading text-lg text-forest font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
