import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Zap, Users, Trophy } from "lucide-react";
import ThinkBhumiBanner from "@/components/demos/shared/ThinkBhumiBanner";
import DemoNav from "@/components/demos/shared/DemoNav";
import DemoFooter from "@/components/demos/shared/DemoFooter";
import DemoSectionHeading from "@/components/demos/shared/DemoSectionHeading";
import DemoContactForm from "@/components/demos/shared/DemoContactForm";
import DemoReviews from "@/components/demos/shared/DemoReviews";

const navLinks = [
  { href: "#plans", label: "Plans" },
  { href: "#trainers", label: "Trainers" },
  { href: "#transformations", label: "Results" },
  { href: "#schedule", label: "Schedule" },
  { href: "#facilities", label: "Facilities" },
  { href: "#contact", label: "Contact" },
];

const plans = [
  { name: "Basic", price: "₹999/mo", features: ["Gym access", "Locker room", "Basic equipment"] },
  { name: "Pro", price: "₹1,799/mo", features: ["All Basic features", "Group classes", "Diet guide"], featured: true },
  { name: "Elite", price: "₹2,999/mo", features: ["All Pro features", "Personal trainer", "Recovery zone"] },
];

const trainers = [
  { name: "Arjun Singh", role: "Strength Coach", img: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Neha Reddy", role: "HIIT Specialist", img: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Vikram Patnaik", role: "CrossFit Trainer", img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

const transformations = [
  { name: "Rahul K.", result: "Lost 18 kg in 6 months", quote: "Titan Fitness changed my life completely." },
  { name: "Sneha M.", result: "Built lean muscle", quote: "The trainers push you to be your best." },
  { name: "Dev P.", result: "Marathon ready in 4 months", quote: "Structured programs that actually work." },
];

const schedule = [
  { time: "6:00 AM", class: "Morning HIIT", trainer: "Neha" },
  { time: "8:00 AM", class: "Strength Training", trainer: "Arjun" },
  { time: "10:00 AM", class: "Yoga Flow", trainer: "Priya" },
  { time: "5:00 PM", class: "CrossFit", trainer: "Vikram" },
  { time: "7:00 PM", class: "Boxing Cardio", trainer: "Arjun" },
];

const facilities = [
  { icon: Dumbbell, title: "Modern Equipment", desc: "Latest machines and free weights" },
  { icon: Zap, title: "HIIT Zone", desc: "Dedicated high-intensity training area" },
  { icon: Users, title: "Group Classes", desc: "Yoga, Zumba, and spin sessions" },
  { icon: Trophy, title: "Personal Training", desc: "1-on-1 coaching for custom goals" },
];

const reviews = [
  { quote: "Best gym in town! Clean, modern, and incredibly motivating atmosphere.", name: "Karan Joshi", role: "Member since 2023" },
  { quote: "The trainers are knowledgeable and genuinely care about your progress.", name: "Meera Iyer", role: "Pro Member" },
  { quote: "Great value for money. The Elite plan transformed my fitness journey.", name: "Aditya Rao", role: "Elite Member" },
];

export default function GymSite() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <ThinkBhumiBanner />
      <DemoNav
        businessName="Titan Fitness Club"
        links={navLinks}
        navClass="bg-[#0F172A]"
        ctaHref="#contact"
        ctaLabel="Join Now"
        ctaClass="bg-[#EAB308] text-[#0F172A] hover:bg-[#CA8A04]"
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0F172A] text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Titan Fitness Club"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center md:text-left">
          <p className="text-[#EAB308] font-bold tracking-widest uppercase text-sm mb-3">Train Like a Titan</p>
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-4 max-w-2xl">
            Unleash Your Strength at Titan Fitness Club
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-xl">
            State-of-the-art equipment, expert trainers, and a community that pushes you to achieve more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="#plans" className="px-6 py-3 bg-[#EAB308] text-[#0F172A] rounded-lg font-bold hover:bg-[#CA8A04] transition-all">
              View Plans
            </Link>
            <Link href="#contact" className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all">
              Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Membership Plans" subtitle="Flexible plans for every fitness goal" accentClass="text-[#0F172A]" />
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-2xl border-2 transition-all hover:-translate-y-1 ${
                  plan.featured
                    ? "border-[#EAB308] bg-[#0F172A] text-white shadow-xl scale-[1.02]"
                    : "border-gray-200 bg-white shadow-md"
                }`}
              >
                {plan.featured && (
                  <span className="text-xs font-bold text-[#EAB308] uppercase tracking-wide">Most Popular</span>
                )}
                <h3 className="font-heading text-2xl font-bold mt-2 mb-1">{plan.name}</h3>
                <p className={`text-3xl font-black mb-4 ${plan.featured ? "text-[#EAB308]" : "text-[#0F172A]"}`}>
                  {plan.price}
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  {plan.features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.featured ? "bg-[#EAB308] text-[#0F172A]" : "bg-[#0F172A] text-white"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="py-16 md:py-20 px-4 bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Meet Our Trainers" subtitle="Certified experts dedicated to your success" light />
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.name} className="text-center group">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={trainer.img}
                    alt={trainer.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold">{trainer.name}</h3>
                <p className="text-[#EAB308] text-sm">{trainer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section id="transformations" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Transformation Stories" subtitle="Real results from real members" accentClass="text-[#0F172A]" />
          <div className="grid md:grid-cols-3 gap-6">
            {transformations.map((story) => (
              <div key={story.name} className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <p className="text-[#EAB308] font-bold text-sm mb-2">{story.result}</p>
                <p className="text-gray-600 italic mb-3">&ldquo;{story.quote}&rdquo;</p>
                <p className="font-semibold">{story.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <DemoSectionHeading title="Class Schedule" subtitle="Daily sessions to keep you moving" accentClass="text-[#0F172A]" />
          <div className="space-y-3">
            {schedule.map((row) => (
              <div key={row.time} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-[#EAB308]/50 transition-colors">
                <span className="font-bold text-[#0F172A]">{row.time}</span>
                <span className="text-gray-700">{row.class}</span>
                <span className="text-sm text-gray-500">{row.trainer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-16 md:py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Our Facilities" accentClass="text-[#0F172A]" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <item.icon className="w-10 h-10 text-[#EAB308] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <DemoSectionHeading title="Member Reviews" accentClass="text-[#0F172A]" />
          <DemoReviews reviews={reviews} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 px-4 bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <DemoSectionHeading title="Start Your Journey" subtitle="Book a free trial session today" light />
            <p className="text-slate-300 mb-4">📍 Patia, Bhubaneswar, Odisha</p>
            <p className="text-slate-300 mb-4">📞 +91 91234 56789</p>
            <p className="text-slate-300">📧 join@titanfitness.in</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <DemoContactForm
              fields={[
                { id: "name", label: "Full Name", type: "text", required: true },
                { id: "phone", label: "Phone", type: "tel", required: true },
                { id: "plan", label: "Interested Plan", type: "text" },
                { id: "message", label: "Goals / Questions", type: "textarea" },
              ]}
              submitLabel="Request Free Trial"
              buttonClass="bg-[#EAB308] text-[#0F172A] hover:bg-[#CA8A04]"
            />
          </div>
        </div>
      </section>

      <DemoFooter
        businessName="Titan Fitness Club"
        tagline="Strength. Discipline. Results."
        footerClass="bg-[#020617]"
        links={navLinks}
        contact={{ address: "Patia, Bhubaneswar", phone: "+91 91234 56789", email: "join@titanfitness.in" }}
      />
    </div>
  );
}
