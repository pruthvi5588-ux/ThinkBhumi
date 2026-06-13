import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CTA() {
  return (
    <section className="py-16 px-4 text-center bg-saffron">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-white font-bold">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Get a FREE consultation today — no commitment needed.
          </p>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="!bg-white !text-forest hover:!bg-gray-100"
          >
            Contact Us Now
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
