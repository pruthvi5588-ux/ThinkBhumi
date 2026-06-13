"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const serviceOptions = [
  "Starter Package",
  "Professional Package",
  "Website Development",
  "Social Media Management",
  "SEO Optimization",
  "Google Business Profile",
  "AI Automation",
  "Custom Package",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <AnimateOnScroll>
          <h2 className="font-heading text-3xl mb-6 text-forest font-bold">
            Get In Touch
          </h2>

          {submitted ? (
            <div className="p-6 rounded-lg bg-forest/5 border border-forest/20 text-center">
              <p className="text-forest font-semibold text-lg">
                ✅ Thank you! We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
                />
              </div>
              <div>
                <label htmlFor="business" className="text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
                />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium text-gray-700">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition bg-white"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} direction="right">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-saffron shrink-0" />
              <p className="text-gray-700">{siteConfig.location}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-saffron shrink-0" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-gray-700 hover:text-forest transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-saffron shrink-0" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gray-700 hover:text-forest transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-saffron shrink-0" />
              <a
                href={siteConfig.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-forest transition-colors"
              >
                {siteConfig.website}
              </a>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +91 8917394210
            </a>

            <div className="flex gap-4 mt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
