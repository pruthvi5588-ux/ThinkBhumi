import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "We learn about your business, goals, and target audience.",
  },
  {
    number: 2,
    title: "Planning",
    description: "We create a tailored strategy and timeline for your project.",
  },
  {
    number: 3,
    title: "Design",
    description: "We craft visuals and layouts that reflect your brand identity.",
  },
  {
    number: 4,
    title: "Development",
    description: "We build, configure, and test every digital asset with care.",
  },
  {
    number: 5,
    title: "Launch",
    description: "Your business goes live — ready to attract and serve customers.",
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="How We Work"
            subtitle="A clear, proven process from idea to launch"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <AnimateOnScroll key={step.title} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-saffron text-white flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-forest">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
