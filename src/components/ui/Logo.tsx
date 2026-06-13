"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  height?: number;
  href?: string;
  priority?: boolean;
}

export default function Logo({
  className = "",
  height = 48,
  href = "#home",
  priority = false,
}: LogoProps) {
  const width = Math.round(height * 2.8);

  const image = (
    <Image
      src="/logo.png"
      alt="Think Bhumi — Think Digital. Think Local."
      width={width}
      height={height}
      className={`object-contain ${className}`}
      style={{ height, width: "auto", maxWidth: width }}
      priority={priority}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 rounded-lg overflow-hidden hover:opacity-95 transition-opacity"
        aria-label="Think Bhumi — Home"
      >
        {image}
      </Link>
    );
  }

  return image;
}
