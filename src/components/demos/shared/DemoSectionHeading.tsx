interface DemoSectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  accentClass?: string;
}

export default function DemoSectionHeading({
  title,
  subtitle,
  light = false,
  accentClass = "text-forest",
}: DemoSectionHeadingProps) {
  return (
    <div className="text-center mb-10 md:mb-12">
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mb-2 ${
          light ? "text-white" : accentClass
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={light ? "text-white/80" : "text-gray-600"}>{subtitle}</p>
      )}
    </div>
  );
}
