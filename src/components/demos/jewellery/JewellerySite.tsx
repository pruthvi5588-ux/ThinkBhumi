import Image from "next/image";
import Link from "next/link";
import { Gem, Sparkles, Award } from "lucide-react";
import ThinkBhumiBanner from "@/components/demos/shared/ThinkBhumiBanner";
import DemoNav from "@/components/demos/shared/DemoNav";
import DemoFooter from "@/components/demos/shared/DemoFooter";
import DemoSectionHeading from "@/components/demos/shared/DemoSectionHeading";
import DemoContactForm from "@/components/demos/shared/DemoContactForm";
import DemoReviews from "@/components/demos/shared/DemoReviews";

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#new-arrivals", label: "New Arrivals" },
  { href: "#story", label: "Our Story" },
  { href: "#showcase", label: "Showcase" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const collections = [
  { name: "Royal Gold", desc: "Timeless gold pieces for every occasion", img: "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Diamond Elegance", desc: "Brilliant cuts that capture the light", img: "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Bridal Heritage", desc: "Crafted for your most precious moments", img: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const newArrivals = [
  { name: "Celestial Pendant", price: "₹45,000", img: "https://images.pexels.com/photos/1454222/pexels-photo-1454222.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Heritage Ring", price: "₹32,500", img: "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Luna Earrings", price: "₹28,000", img: "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Opal Bracelet", price: "₹38,900", img: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

const showcase = [
  { name: "Empress Necklace", price: "₹1,25,000", img: "https://images.pexels.com/photos/1454222/pexels-photo-1454222.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Sovereign Ring", price: "₹89,000", img: "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Aurora Set", price: "₹2,10,000", img: "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=500" },
];

const testimonials = [
  { quote: "The craftsmanship is extraordinary. My bridal set was absolutely breathtaking.", name: "Kavya Nair", role: "Bridal Client" },
  { quote: "Golden Aura understands luxury. Every piece feels personal and premium.", name: "Sanjay Verma", role: "Collector" },
  { quote: "Impeccable service and stunning designs. My go-to jewellery house.", name: "Lakshmi Mohanty", role: "Long-time Customer" },
];

export default function JewellerySite() {
  return (
    <div className="bg-[#FAFAF9] text-zinc-800">
      <ThinkBhumiBanner />
      <DemoNav
        businessName="Golden Aura Jewellery"
        links={navLinks}
        navClass="bg-[#18181B]"
        linkClass="text-zinc-300 hover:text-[#D4AF37] transition-colors"
        ctaHref="#contact"
        ctaLabel="Book Consultation"
        ctaClass="bg-[#D4AF37] text-[#18181B] hover:bg-[#B8962E]"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-[#18181B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Golden Aura luxury jewellery"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <Gem className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Golden Aura Jewellery
          </h1>
          <p className="text-[#D4AF37] text-lg md:text-xl mb-2 tracking-wide">Luxury Crafted in Every Detail</p>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Discover exquisite gold, diamond, and heritage pieces designed for those who appreciate timeless elegance.
          </p>
          <Link
            href="#collections"
            className="inline-block px-8 py-3 bg-[#D4AF37] text-[#18181B] rounded-lg font-semibold hover:bg-[#B8962E] transition-all"
          >
            Explore Collections
          </Link>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Featured Collections" subtitle="Curated for elegance and occasion" accentClass="text-[#18181B]" />
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((col) => (
              <div key={col.name} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={col.img}
                    alt={col.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-heading text-xl font-bold text-[#18181B]">{col.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section id="new-arrivals" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="New Arrivals" subtitle="Fresh designs just in store" accentClass="text-[#18181B]" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((item) => (
              <div key={item.name} className="text-center group">
                <div className="relative h-48 rounded-xl overflow-hidden mb-3 shadow-md">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-[#B45309] font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-16 md:py-20 px-4 bg-[#18181B] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <DemoSectionHeading title="Our Brand Story" subtitle="A legacy of craftsmanship" light />
            <p className="text-zinc-400 leading-relaxed mb-4">
              Founded with a passion for artistry, Golden Aura Jewellery blends traditional Odishan craftsmanship
              with contemporary design. Each piece is handcrafted by master artisans using ethically sourced materials.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              From bridal collections to everyday elegance, we create jewellery that becomes part of your story.
            </p>
            <div className="flex gap-6 mt-6">
              <span className="flex items-center gap-2 text-[#D4AF37] text-sm">
                <Sparkles className="w-5 h-5" /> BIS Hallmarked
              </span>
              <span className="flex items-center gap-2 text-[#D4AF37] text-sm">
                <Award className="w-5 h-5" /> Certified Diamonds
              </span>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Golden Aura craftsmanship"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Product Showcase" subtitle="Signature pieces from our atelier" accentClass="text-[#18181B]" />
          <div className="grid md:grid-cols-3 gap-8">
            {showcase.map((product) => (
              <div key={product.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-56">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-lg font-bold">{product.name}</h3>
                  <p className="text-[#B45309] font-bold mt-1">{product.price}</p>
                  <Link href="#contact" className="mt-3 inline-block text-sm text-[#18181B] font-semibold hover:text-[#D4AF37] transition-colors">
                    Inquire Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Testimonials" accentClass="text-[#18181B]" />
          <DemoReviews reviews={testimonials} cardClass="bg-white p-6 rounded-xl shadow-md border border-[#D4AF37]/20" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <DemoSectionHeading title="Contact & Inquiry" subtitle="Book a private consultation" accentClass="text-[#18181B]" />
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>📍 Janpath, Bhubaneswar, Odisha</li>
              <li>📞 +91 99887 76655</li>
              <li>📧 boutique@goldenaura.in</li>
            </ul>
          </div>
          <DemoContactForm
            fields={[
              { id: "name", label: "Name", type: "text", required: true },
              { id: "phone", label: "Phone", type: "tel", required: true },
              { id: "interest", label: "Product Interest", type: "text" },
              { id: "message", label: "Message", type: "textarea" },
            ]}
            submitLabel="Send Inquiry"
            buttonClass="bg-[#18181B] hover:bg-zinc-800"
          />
        </div>
      </section>

      <DemoFooter
        businessName="Golden Aura Jewellery"
        tagline="Where elegance meets eternity."
        footerClass="bg-[#18181B]"
        links={navLinks}
        contact={{ address: "Janpath, Bhubaneswar", phone: "+91 99887 76655", email: "boutique@goldenaura.in" }}
      />
    </div>
  );
}
