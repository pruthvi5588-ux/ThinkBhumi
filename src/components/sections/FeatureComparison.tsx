import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const features = [
  { name: "Google Maps", starter: true, professional: true, premium: false },
  { name: "Gmail Setup", starter: true, professional: true, premium: false },
  { name: "Instagram + Facebook", starter: true, professional: true, premium: false },
  { name: "Domain Registration", starter: false, professional: true, premium: false },
  { name: "Website Design", starter: false, professional: true, premium: false },
  { name: "Business Email", starter: false, professional: true, premium: false },
  { name: "Branding & Logo", starter: false, professional: false, premium: false },
  { name: "SEO Basics", starter: false, professional: false, premium: false },
];

function StatusIcon({ included, dimmed }: { included: boolean; dimmed?: boolean }) {
  if (included) {
    return <span className="text-forest font-bold">✅</span>;
  }
  return (
    <span className={dimmed ? "text-gray-300" : "text-gray-400"}>➖</span>
  );
}

export default function FeatureComparison() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h3 className="font-heading text-2xl text-center mb-6 text-forest font-bold">
            Feature Comparison
          </h3>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-100">
            <table className="w-full text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-forest text-white">
                  <th className="p-3 text-left font-semibold">Feature</th>
                  <th className="p-3 text-center font-semibold">Starter ₹3K</th>
                  <th className="p-3 text-center font-semibold">Professional ₹7K</th>
                  <th className="p-3 text-center font-semibold diagonal-watermark text-gray-300">
                    Premium (Soon)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-gray-100 ${index % 2 === 1 ? "bg-gray-50" : ""}`}
                  >
                    <td className="p-3 text-gray-700">{feature.name}</td>
                    <td className="text-center p-3">
                      <StatusIcon included={feature.starter} />
                    </td>
                    <td className="text-center p-3">
                      <StatusIcon included={feature.professional} />
                    </td>
                    <td className="text-center p-3">
                      <StatusIcon included={feature.premium} dimmed />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
