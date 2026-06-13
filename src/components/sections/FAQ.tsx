"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const faqs = [
  {
    question: "How long does it take to get my business online?",
    answer:
      "Most Starter and Professional packages are completed within 3–7 business days. Timeline depends on your requirements and how quickly you provide necessary information.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "No. We handle everything — domain, hosting, email, social media setup, and website launch. You just tell us about your business and we take care of the rest.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfer, and other common payment methods in India. Payment is typically required before we begin the setup process.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes! You can start with the Starter package and upgrade to Professional or Premium when you're ready to expand your digital presence.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer post-launch support for updates, troubleshooting, and guidance. Extended maintenance plans are available on request.",
  },
  {
    question: "Is the free consultation really free?",
    answer:
      "Yes — our initial consultation is completely free with no obligation. We'll discuss your needs and recommend the best package for your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before getting started"
          />
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={faq.question} delay={index * 0.05}>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-forest pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-saffron shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
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
