interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

/** Wrapper for layout spacing — content is always visible (no opacity tricks). */
export default function AnimateOnScroll({
  children,
  className = "",
}: AnimateOnScrollProps) {
  return <div className={className}>{children}</div>;
}
