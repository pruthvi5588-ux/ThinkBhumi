import Image from "next/image";
import Link from "next/link";
import { MessageCircle, UtensilsCrossed, Clock, MapPin } from "lucide-react";
import ThinkBhumiBanner from "@/components/demos/shared/ThinkBhumiBanner";
import DemoNav from "@/components/demos/shared/DemoNav";
import DemoFooter from "@/components/demos/shared/DemoFooter";
import DemoSectionHeading from "@/components/demos/shared/DemoSectionHeading";
import DemoContactForm from "@/components/demos/shared/DemoContactForm";
import DemoReviews, { DemoGallery } from "@/components/demos/shared/DemoReviews";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#specials", label: "Specials" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const menuItems = [
  { name: "Butter Chicken Masala", price: "₹320", desc: "Creamy tomato gravy with tender chicken" },
  { name: "Paneer Tikka", price: "₹240", desc: "Char-grilled cottage cheese with spices" },
  { name: "Urban Spice Biryani", price: "₹280", desc: "Fragrant basmati rice with aromatic spices" },
  { name: "Wood-Fired Pizza", price: "₹350", desc: "Crispy crust with fresh mozzarella" },
  { name: "Chocolate Lava Cake", price: "₹180", desc: "Warm cake with molten chocolate center" },
  { name: "Fresh Lime Soda", price: "₹80", desc: "Refreshing house-made cooler" },
];

const specials = [
  { title: "Sunday Family Feast", price: "₹1,299", desc: "4 curries, breads, rice & dessert for 4" },
  { title: "Chef's Tasting Plate", price: "₹599", desc: "Five signature bites curated by our chef" },
  { title: "Weekend Brunch", price: "₹449", desc: "Unlimited starters & live counter" },
];

const galleryImages = [
  { src: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=600", alt: "Elegant dining table setup" },
  { src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Gourmet plated dish" },
  { src: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=600", alt: "Wood-fired pizza" },
  { src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Restaurant interior ambiance" },
  { src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Pasta specialty" },
  { src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Fresh ingredients" },
];

const reviews = [
  { quote: "The butter chicken is absolutely divine. Best dining experience in the city!", name: "Ananya Sharma", role: "Food Blogger" },
  { quote: "Warm ambiance, impeccable service, and flavors that keep you coming back.", name: "Rohit Mehta", role: "Regular Guest" },
  { quote: "Perfect for family dinners. The Sunday feast is a must-try!", name: "Priya Das", role: "Local Resident" },
];

export default function RestaurantSite() {
  return (
    <div className="bg-[#FFFBEB] text-stone-800">
      <ThinkBhumiBanner />
      <DemoNav
        businessName="Urban Spice Restaurant"
        links={navLinks}
        navClass="bg-[#1C1917]"
        ctaHref="#contact"
        ctaLabel="Reserve Table"
        ctaClass="bg-[#C2410C] text-white hover:bg-[#9A3412]"
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-[#1C1917] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Urban Spice Restaurant interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#F59E0B] font-semibold tracking-wide uppercase text-sm mb-3">
              Premium Dining Experience
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Taste the Soul of Urban Spice
            </h1>
            <p className="text-stone-300 text-lg mb-8 max-w-lg">
              Authentic flavors, modern ambiance, and unforgettable meals crafted by our passionate chefs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-[#C2410C] text-white rounded-lg font-semibold hover:bg-[#9A3412] transition-all"
              >
                Book a Table
              </Link>
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20bd5a] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Signature dish at Urban Spice"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <DemoSectionHeading
              title="About Urban Spice"
              subtitle="Where tradition meets contemporary dining"
              accentClass="text-[#C2410C]"
            />
            <p className="text-gray-600 leading-relaxed mb-4">
              Urban Spice Restaurant brings together the warmth of home-cooked meals and the elegance of fine dining.
              Our chefs use locally sourced ingredients and time-honored recipes to create dishes that celebrate flavor.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it&apos;s a romantic dinner, family celebration, or corporate gathering — we make every occasion memorable.
            </p>
            <div className="flex flex-wrap gap-6 mt-6 text-sm">
              <span className="flex items-center gap-2 text-[#C2410C] font-medium">
                <UtensilsCrossed className="w-5 h-5" /> Multi-cuisine Menu
              </span>
              <span className="flex items-center gap-2 text-[#C2410C] font-medium">
                <Clock className="w-5 h-5" /> Open 11 AM – 11 PM
              </span>
              <span className="flex items-center gap-2 text-[#C2410C] font-medium">
                <MapPin className="w-5 h-5" /> Bhubaneswar, Odisha
              </span>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=800"
              alt="Urban Spice dining area"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Featured Menu" subtitle="Handpicked favorites from our kitchen" accentClass="text-[#C2410C]" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div key={item.name} className="p-5 rounded-xl border border-stone-200 hover:shadow-lg hover:border-[#F59E0B]/40 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-stone-900">{item.name}</h3>
                  <span className="text-[#C2410C] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specials */}
      <section id="specials" className="py-16 md:py-20 px-4 bg-[#1C1917] text-white">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Chef's Specials" subtitle="Limited-time offers you can't miss" light />
          <div className="grid md:grid-cols-3 gap-6">
            {specials.map((special) => (
              <div key={special.title} className="p-6 rounded-xl bg-white/5 border border-[#F59E0B]/30 hover:bg-white/10 transition-colors">
                <h3 className="font-heading text-xl font-bold text-[#F59E0B] mb-2">{special.title}</h3>
                <p className="text-stone-300 text-sm mb-3">{special.desc}</p>
                <p className="text-2xl font-bold">{special.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Gallery" subtitle="A glimpse into our culinary world" accentClass="text-[#C2410C]" />
          <DemoGallery images={galleryImages} />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 md:py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Customer Reviews" subtitle="What our guests say about us" accentClass="text-[#C2410C]" />
          <DemoReviews reviews={reviews} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <DemoSectionHeading title="Contact & Reservation" accentClass="text-[#C2410C]" />
            <p className="text-gray-600 mb-6">Reserve your table or reach us for catering inquiries.</p>
            <ul className="space-y-3 text-gray-700 text-sm mb-6">
              <li>📍 MG Road, Bhubaneswar, Odisha</li>
              <li>📞 +91 98765 43210</li>
              <li>📧 hello@urbanspice.in</li>
            </ul>
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </Link>
          </div>
          <DemoContactForm
            fields={[
              { id: "name", label: "Name", type: "text", required: true },
              { id: "phone", label: "Phone", type: "tel", required: true },
              { id: "date", label: "Reservation Date", type: "date", required: true },
              { id: "guests", label: "Number of Guests", type: "number", required: true },
              { id: "message", label: "Special Requests", type: "textarea" },
            ]}
            submitLabel="Reserve Table"
            buttonClass="bg-[#C2410C] hover:bg-[#9A3412]"
          />
        </div>
      </section>

      <DemoFooter
        businessName="Urban Spice Restaurant"
        tagline="Premium flavors. Warm hospitality."
        footerClass="bg-[#1C1917]"
        links={navLinks}
        contact={{ address: "MG Road, Bhubaneswar", phone: "+91 98765 43210", email: "hello@urbanspice.in" }}
      />
    </div>
  );
}
