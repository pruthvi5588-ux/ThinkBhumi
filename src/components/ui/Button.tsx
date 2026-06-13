import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "saffron";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  icon?: LucideIcon;
}

const variants = {
  primary: "bg-forest text-white hover:bg-forest/90",
  secondary: "bg-saffron text-white hover:bg-saffron/90",
  outline: "border-2 border-white text-white hover:bg-white/10",
  ghost: "text-forest hover:bg-forest/5",
  saffron: "bg-saffron text-white hover:bg-saffron/90",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  icon: Icon,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
