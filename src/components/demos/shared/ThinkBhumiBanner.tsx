import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ThinkBhumiBanner() {
  return (
    <div className="bg-forest-dark text-white text-center py-2 px-4 text-sm">
      <Link
        href="/"
        className="inline-flex items-center gap-2 hover:text-saffron transition-colors font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Demo by Think Bhumi — Back to Agency Website
      </Link>
    </div>
  );
}
