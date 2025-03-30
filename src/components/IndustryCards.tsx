
import { useState, useEffect, useRef } from "react";
import { Shield, Landmark, Plane, ShoppingBag, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Industry = {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
};

const industries: Industry[] = [
  {
    id: 1,
    title: "Cybersecurity & AI",
    icon: <Shield className="w-8 h-8" />,
    description:
      "Developing advanced threat detection systems and implementing AI-driven security protocols for enterprise networks and critical infrastructure protection.",
  },
  {
    id: 2,
    title: "Finance & AI",
    icon: <Landmark className="w-8 h-8" />,
    description:
      "Building predictive financial models, algorithmic trading systems, and fraud detection solutions leveraging latest advancements in machine learning.",
  },
  {
    id: 3,
    title: "Travel & AI",
    icon: <Plane className="w-8 h-8" />,
    description:
      "Creating personalized recommendation engines, dynamic pricing systems, and customer service automation for global travel and hospitality clients.",
  },
  {
    id: 4,
    title: "E-commerce & AI",
    icon: <ShoppingBag className="w-8 h-8" />,
    description:
      "Implementing product recommendation algorithms, customer behavior analysis, and supply chain optimization using generative AI and deep learning.",
  },
  {
    id: 5,
    title: "Legal Tech & AI",
    icon: <Scale className="w-8 h-8" />,
    description:
      "Developing document analysis systems, automated contract review, and legal research tools using natural language processing and large language models.",
  },
];

const IndustryCards = () => {
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({});
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.id.split("-")[1]);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="industries" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Industry Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Applying cutting-edge AI solutions across diverse sectors to solve complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              id={`card-${industry.id}`}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`animate-on-scroll ${visibleCards[industry.id] ? "active" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="bg-tech-light-gray/20 backdrop-blur-sm border-gray-700/50 hover:border-tech-purple/50 transition-all hover:shadow-lg hover:shadow-tech-purple/10 h-full group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 rounded-full bg-tech-light-gray/30 w-fit group-hover:bg-tech-light-gray/50 transition-all">
                    <div className="text-tech-teal group-hover:text-tech-purple transition-colors">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{industry.title}</h3>
                  <p className="text-gray-400 flex-grow">{industry.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;
