import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const packages = [
  {
    id: "starter",
    emoji: "🌱",
    name: "Starter",
    tagline: "Perfect to get discovered online",
    features: [
      "Google Maps Setup",
      "Gmail Setup",
      "Instagram Account Creation",
      "Facebook Page Creation",
    ],
    price: "₹3,000",
    note: "One-time setup • No hidden charges",
    buttonText: "Get Started",
    buttonHref: "#contact",
    featured: false,
    comingSoon: false,
  },
  {
    id: "professional",
    emoji: "🚀",
    name: "Professional",
    tagline: "Complete online presence for your business",
    features: [
      "Domain Registration",
      "Website Design",
      "Business Email Setup",
      "Google Maps Setup",
      "Instagram + Facebook Setup",
    ],
    price: "₹7,000",
    note: "One-time setup • No hidden charges",
    buttonText: "Get Started",
    buttonHref: "#contact",
    featured: true,
    comingSoon: false,
  },
  {
    id: "premium",
    emoji: "👑",
    name: "Premium",
    tagline: "Full-scale digital growth for serious businesses",
    features: [
      "Business Branding & Logo",
      "Website Design",
      "SEO Basics",
      "Content Setup",
      "Social Media Optimization",
      "WhatsApp Automation",
    ],
    price: "₹15,000",
    note: "Launching Soon — Stay Tuned!",
    buttonText: "Notify Me",
    buttonHref: "#",
    featured: false,
    comingSoon: true,
  },
];

export default function Packages() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="Our Packages"
            subtitle="Simple, transparent pricing — no hidden charges"
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <AnimateOnScroll key={pkg.id} delay={index * 0.15}>
              <div
                className={`rounded-xl overflow-hidden shadow-lg relative ${
                  pkg.featured
                    ? "shadow-xl card-glow transform md:-translate-y-4 bg-forest"
                    : pkg.comingSoon
                      ? "coming-soon-overlay bg-gray-100 border border-gray-200"
                      : "bg-white border border-gray-100"
                }`}
              >
                {pkg.featured && (
                  <div className="text-center py-2 text-sm font-semibold bg-saffron text-white">
                    ⭐ Most Popular
                  </div>
                )}

                {!pkg.featured && (
                  <div
                    className={`h-2 ${pkg.comingSoon ? "bg-gray-400" : "bg-forest"}`}
                  />
                )}

                <div className="p-6 text-center">
                  <div className={`text-4xl mb-3 ${pkg.comingSoon ? "grayscale" : ""}`}>
                    {pkg.emoji}
                  </div>
                  <h3
                    className={`font-heading text-xl mb-1 font-bold ${
                      pkg.featured
                        ? "text-white"
                        : pkg.comingSoon
                          ? "text-gray-400"
                          : "text-forest"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      pkg.featured
                        ? "text-green-100 opacity-80"
                        : pkg.comingSoon
                          ? "text-gray-300"
                          : "text-gray-500"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                  <div className="h-px bg-saffron/40 mb-4" />

                  <ul
                    className={`text-left text-sm space-y-2 mb-6 ${
                      pkg.featured
                        ? "text-green-100"
                        : pkg.comingSoon
                          ? "text-gray-400"
                          : "text-gray-700"
                    }`}
                  >
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        {pkg.comingSoon ? "➖" : "✅"} {feature}
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`text-3xl font-bold mb-1 ${
                      pkg.comingSoon
                        ? "text-gray-400 line-through"
                        : "text-saffron"
                    }`}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className={`text-xs mb-4 ${
                      pkg.featured
                        ? "text-gray-200 opacity-70"
                        : pkg.comingSoon
                          ? "text-gray-400 italic"
                          : "text-gray-400"
                    }`}
                  >
                    {pkg.note}
                  </p>

                  {pkg.comingSoon ? (
                    <span
                      className="block w-full py-3 rounded-lg font-semibold text-center cursor-not-allowed border-2 text-gray-400"
                    >
                      {pkg.buttonText}
                    </span>
                  ) : (
                    <Link
                      href={pkg.buttonHref}
                      className={`block w-full py-3 rounded-lg font-semibold text-center transition-all hover:scale-[1.02] ${
                        pkg.featured
                          ? "bg-saffron text-white hover:bg-saffron/90"
                          : "bg-forest text-white hover:bg-forest/90"
                      }`}
                    >
                      {pkg.buttonText}
                    </Link>
                  )}
                </div>

                {pkg.comingSoon && (
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]"
                  >
                    <div className="border-2 border-saffron rounded-full px-6 py-2 bg-white/90">
                      <span className="text-forest font-bold text-sm">
                        🔒 Coming Soon
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-10 space-y-1">
            <p className="text-sm text-gray-500">
              All packages include a free consultation before purchase.
            </p>
            <p className="text-sm text-gray-600">
              Custom packages available on request —{" "}
              <Link
                href="#contact"
                className="text-saffron font-semibold hover:underline"
              >
                Talk to Us
              </Link>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
