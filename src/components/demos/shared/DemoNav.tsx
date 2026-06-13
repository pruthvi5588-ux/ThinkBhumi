"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export interface DemoNavLink {
  href: string;
  label: string;
}

interface DemoNavProps {
  businessName: string;
  links: DemoNavLink[];
  navClass: string;
  linkClass?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaClass?: string;
}

export default function DemoNav({
  businessName,
  links,
  navClass,
  linkClass = "text-white/90 hover:text-white transition-colors",
  ctaHref,
  ctaLabel,
  ctaClass = "bg-white text-gray-900",
}: DemoNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 ${navClass}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="#" className="font-heading text-xl md:text-2xl font-bold text-white">
          {businessName}
        </Link>

        <button
          type="button"
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          {ctaHref && ctaLabel && (
            <Link
              href={ctaHref}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02] ${ctaClass}`}
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {ctaHref && ctaLabel && (
            <Link
              href={ctaHref}
              className={`px-5 py-2 rounded-lg font-semibold text-sm text-center ${ctaClass}`}
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
