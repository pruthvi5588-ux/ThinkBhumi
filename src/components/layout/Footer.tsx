"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/data/site";
import Logo from "@/components/ui/Logo";
import { trackEvent } from "@/lib/pixel";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "#services", label: "Website Development" },
  { href: "#services", label: "Social Media Management" },
  { href: "#services", label: "SEO Optimization" },
  { href: "#services", label: "Google Business Profile" },
  { href: "#services", label: "AI Automation" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Logo height={44} className="rounded-md mb-3" />
            <p className="text-white/80 text-sm">{siteConfig.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>{siteConfig.location}</li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-saffron transition-colors"
                  onClick={() => trackEvent("Contact")}
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-saffron transition-colors"
                  onClick={() => trackEvent("Contact")}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.websiteUrl}
                  className="hover:text-saffron transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.website}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-saffron transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-saffron transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-saffron transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-white/20 pt-6">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
