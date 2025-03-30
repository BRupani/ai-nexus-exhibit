
import { useState, useEffect } from "react";

const companies = [
  {
    id: 1,
    name: "Google",
    icon: "G",
    color: "bg-gradient-to-r from-blue-500 to-green-500",
  },
  {
    id: 2,
    name: "Amazon",
    icon: "A",
    color: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    id: 3,
    name: "Airbus",
    icon: "A",
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    id: 4,
    name: "Financial Institutions",
    icon: "F",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
  {
    id: 5,
    name: "Technology Startups",
    icon: "T",
    color: "bg-gradient-to-r from-purple-500 to-indigo-500",
  },
  {
    id: 6,
    name: "Legal Tech",
    icon: "L",
    color: "bg-gradient-to-r from-slate-600 to-slate-800",
  },
];

const CompanyShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("companies");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="companies"
      className="py-20 bg-gradient-to-b from-tech-dark-gray to-tech-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHpNNDAgMzRoNHYxaC00ek00NCAzNGg0djFoLTR6TTM0IDM0aDJ2MWgtMnpNMzIgMzRoMnYxaC0yek0zMCAzNGgydjFoLTJ6TTM0IDM2aDJ2MWgtMnpNMzIgMzZoMnYxaC0yek0zMCAzNmgydjFoLTJ6TTM2IDM2aDR2MWgtNHpNNDAgMzZoNHYxaC00ek00NCAzNmg0djFoLTR6TTIyIDMwaDJ2MWgtMnpNMjAgMzBoMnYxaC0yek0xOCAzMGgydjFoLTJ6TTI0IDMwaDJ2MWgtMnpNMjYgMzBoMnYxaC0yek0yOCAzMGgydjFoLTJ6TTMwIDMwaDJ2MWgtMnpNMzIgMzBoMnYxaC0yek0zNCAzMGgydjFoLTJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Fortune 500 & Beyond
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering AI excellence to industry leaders and innovative startups around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className={`flex flex-col items-center transform transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(company.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg transition-all duration-300 ${company.color} ${
                  hoveredId === company.id
                    ? "scale-110 shadow-xl"
                    : "scale-100"
                }`}
              >
                {company.icon}
              </div>
              <h3 className="text-lg font-medium text-center text-white">
                {company.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;
