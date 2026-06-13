import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const reasons = [
  {
    title: "Affordable Pricing for Local Businesses",
    description:
      "Transparent packages designed for small and medium businesses in Odisha — no hidden fees.",
  },
  {
    title: "End-to-End Digital Setup",
    description:
      "From domain to social media, we handle everything so you can focus on running your business.",
  },
  {
    title: "Odisha-Based Team",
    description:
      "We understand the local market, culture, and what Odisha customers expect from businesses online.",
  },
  {
    title: "Fast Turnaround & Ongoing Support",
    description:
      "Get online quickly with dedicated support whenever you need help or updates.",
  },
  {
    title: "Modern, Mobile-First Design",
    description:
      "Every website and profile we build looks stunning on phones, tablets, and desktops.",
  },
  {
    title: "Results-Driven Approach",
    description:
      "We don't just build — we optimize for visibility, conversions, and long-term growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 bg-forest">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-10 text-white font-bold">
            Why Odisha&apos;s Businesses Trust Think Bhumi
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <AnimateOnScroll key={reason.title} delay={index * 0.1}>
              <div className="flex items-start gap-3 bg-white/10 p-5 rounded-lg hover:bg-white/15 transition-colors">
                <span className="text-saffron text-xl shrink-0">✅</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{reason.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
