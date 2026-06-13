import Image from "next/image";

interface DemoReviewsProps {
  reviews: { quote: string; name: string; role: string }[];
  cardClass?: string;
}

export default function DemoReviews({
  reviews,
  cardClass = "bg-white p-6 rounded-xl shadow-md",
}: DemoReviewsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <blockquote key={review.name} className={cardClass}>
          <p className="text-gray-600 italic mb-4 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
          <footer className="font-semibold text-gray-900 text-sm">
            {review.name}
            <span className="text-gray-500 font-normal"> — {review.role}</span>
          </footer>
          <p className="text-amber-400 text-sm mt-1">★★★★★</p>
        </blockquote>
      ))}
    </div>
  );
}

interface DemoGalleryProps {
  images: { src: string; alt: string }[];
}

export function DemoGallery({ images }: DemoGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <div key={img.src} className="relative h-40 md:h-52 rounded-xl overflow-hidden group">
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
