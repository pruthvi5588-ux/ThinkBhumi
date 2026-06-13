interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mb-2 ${
          light ? "text-white" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base ${light ? "text-white/80" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
