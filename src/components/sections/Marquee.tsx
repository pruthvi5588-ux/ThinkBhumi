const marqueeText =
  "Website Design • Email Setup • Domain Registration • Social Media Management • Business Branding • Local Businesses • Odisha • ";

export default function Marquee() {
  return (
    <div className="overflow-hidden py-3 bg-saffron">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium text-white mx-4">{marqueeText}</span>
        <span className="text-sm font-medium text-white mx-4">{marqueeText}</span>
      </div>
    </div>
  );
}
