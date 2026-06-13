import Link from "next/link";

interface DemoFooterProps {
  businessName: string;
  tagline: string;
  footerClass: string;
  links: { href: string; label: string }[];
  contact?: { phone?: string; email?: string; address?: string };
}

export default function DemoFooter({
  businessName,
  tagline,
  footerClass,
  links,
  contact,
}: DemoFooterProps) {
  return (
    <footer className={`py-10 px-4 ${footerClass}`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-white/80 text-sm">
        <div>
          <h3 className="font-heading text-lg text-white font-bold mb-2">
            {businessName}
          </h3>
          <p>{tagline}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {contact && (
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-1">
              {contact.address && <li>{contact.address}</li>}
              {contact.phone && <li>{contact.phone}</li>}
              {contact.email && <li>{contact.email}</li>}
            </ul>
          </div>
        )}
      </div>
      <p className="text-center text-white/50 text-xs mt-8">
        © {new Date().getFullYear()} {businessName}. Demo website by Think Bhumi.
      </p>
    </footer>
  );
}
