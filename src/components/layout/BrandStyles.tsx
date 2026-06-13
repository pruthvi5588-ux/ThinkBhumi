/** Inline brand styles — always loads even if Tailwind CSS cache breaks */
export default function BrandStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --forest: #1a6b3c;
            --forest-dark: #0d3b22;
            --saffron: #e8871e;
            --cream: #fdf8e1;
          }
          body {
            font-family: var(--font-poppins), system-ui, sans-serif;
            color: #1f2937;
            background: #fff;
          }
          h1, h2, h3, h4, .font-heading {
            font-family: var(--font-playfair), Georgia, serif;
          }
          .bg-forest-dark { background-color: #0d3b22 !important; }
          .bg-forest { background-color: #1a6b3c !important; }
          .bg-saffron { background-color: #e8871e !important; }
          .text-forest { color: #1a6b3c !important; }
          .text-saffron { color: #e8871e !important; }
          .text-white { color: #ffffff !important; }
          .text-green-100 { color: #dcfce7 !important; }
          .border-saffron { border-color: #e8871e !important; }
          .hover\\:text-saffron:hover { color: #e8871e !important; }
          .konark-pattern {
            background-color: #0d3b22 !important;
          }
          nav.bg-forest-dark, footer.bg-forest-dark, section.bg-forest-dark {
            background-color: #0d3b22 !important;
          }
          section.bg-forest, .bg-forest {
            background-color: #1a6b3c !important;
          }
          section.bg-saffron, .bg-saffron {
            background-color: #e8871e !important;
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `,
      }}
    />
  );
}
