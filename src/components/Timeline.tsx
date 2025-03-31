
import { useState, useEffect, useRef } from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

type TimelineItem = {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  region: "Europe" | "US" | "India";
  type: "work" | "education";
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2025-Present",
    title: "Senior Gen AI Developer",
    company: "Cygeniq",
    location: "Bangalore, India",
    region: "India",
    type: "work",
    description:
      "Working at the intersection of cybersecurity and AI. Leading generative AI solutions with focus on reliability and fine-tuning for specific security domains.",
  },
  {
    id: 2,
    year: "2022-2024",
    title: "Data Scientist",
    company: "HRS Group",
    location: "Remote & Onsite, Berlin, Germany",
    region: "Europe",
    type: "work",
    description:
      "Directed AI initiatives for travel and e-commerce optimization. Implemented recommendation engines and generative models for product recommendations across Fortune 500 clients and finance projects.",
  },
  {
    id: 3,
    year: "2021-2022",
    title: "Tech Leaders Fellowship Program",
    company: "Plaksha University",
    location: "Mohali, Punjab, India",
    region: "India",
    type: "education",
    description:
      "Completed post-graduate degree in collaboration with UC-Berkeley and Purdue University. Selected among <5% acceptance rate and mentored by top start-up founders, angel investors and global AI leaders from Fractal, Inc42, Infoedge, IBM, Indifi, Havells, etc.",
  },
  {
    id: 4,
    year: "2017-2021",
    title: "Bachelor of Engineering",
    company: "Visvesvaraya Technological University",
    location: "Bangalore, India",
    region: "India",
    type: "education",
    description:
      "Graduated with First Class with Distinction (FCD) in Engineering.",
  },
  {
    id: 5,
    year: "2018-2020",
    title: "ML Engineer - Cybersecurity",
    company: "Airbus",
    location: "Toulouse, France",
    region: "Europe",
    type: "work",
    description:
      "Designed neural network architectures for threat detection in aviation systems. Integrated AI with traditional security protocols for enhanced defense capabilities.",
  },
  {
    id: 6,
    year: "2016-2018",
    title: "AI Consultant - Finance",
    company: "Major Financial Institution",
    location: "London, UK",
    region: "Europe",
    type: "work",
    description:
      "Developed predictive models for risk assessment and fraud detection. Implemented NLP solutions for automated compliance and regulatory reporting.",
  },
  {
    id: 7,
    year: "2014-2016",
    title: "Machine Learning Specialist",
    company: "Tech Startup",
    location: "Bangalore, India",
    region: "India",
    type: "work",
    description:
      "Built innovative AI solutions for travel industry clients. Created recommendation engines and customer service automation systems using early transformer models.",
  },
];

const Timeline = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeTypeFilter, setActiveTypeFilter] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<{ [key: number]: boolean }>(
    {}
  );
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredData = timelineData
    .filter((item) => (activeFilter ? item.region === activeFilter : true))
    .filter((item) => 
      (activeTypeFilter ? item.type === activeTypeFilter : true)
    );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.id.split("-")[1]);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredData]);

  return (
    <section
      id="experience"
      className="py-20 bg-tech-dark-gray relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-tech-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-tech-dark to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My career spans multiple continents, Fortune 500 companies, and prestigious educational institutions, bringing AI solutions to diverse industries and markets.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                activeFilter === null
                  ? "bg-tech-blue text-white"
                  : "bg-tech-light-gray text-gray-300 hover:bg-tech-light-gray/80"
              }`}
            >
              All Regions
            </button>
            <button
              onClick={() => setActiveFilter("US")}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                activeFilter === "US"
                  ? "bg-tech-blue text-white"
                  : "bg-tech-light-gray text-gray-300 hover:bg-tech-light-gray/80"
              }`}
            >
              United States
            </button>
            <button
              onClick={() => setActiveFilter("Europe")}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                activeFilter === "Europe"
                  ? "bg-tech-blue text-white"
                  : "bg-tech-light-gray text-gray-300 hover:bg-tech-light-gray/80"
              }`}
            >
              Europe
            </button>
            <button
              onClick={() => setActiveFilter("India")}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                activeFilter === "India"
                  ? "bg-tech-blue text-white"
                  : "bg-tech-light-gray text-gray-300 hover:bg-tech-light-gray/80"
              }`}
            >
              India
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <button
              onClick={() => setActiveTypeFilter(null)}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                activeTypeFilter === null
                  ? "bg-tech-purple text-white"
                  : "bg-tech-light-gray text-gray-300 hover:bg-tech-light-gray/80"
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setActiveTypeFilter("work")}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                activeTypeFilter === "work"
                  ? "bg-tech-purple text-white"
                  : "bg-tech-light-gray text-gray-300 hover:bg-tech-light-gray/80"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTypeFilter("education")}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                activeTypeFilter === "education"
                  ? "bg-tech-purple text-white"
                  : "bg-tech-light-gray text-gray-300 hover:bg-tech-light-gray/80"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tech-teal via-tech-purple to-tech-blue"></div>

          <div className="space-y-12">
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                id={`item-${item.id}`}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`flex flex-col md:flex-row items-center md:even:flex-row-reverse gap-8 relative animate-on-scroll ${
                  visibleItems[item.id] ? "active" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${
                  item.type === "education" ? "bg-tech-teal" : "bg-tech-purple"
                } border-4 border-tech-dark-gray z-10`}></div>

                {/* Year */}
                <div className="md:w-1/2 text-center md:text-right md:even:text-left">
                  <span className="inline-block px-4 py-1 rounded-full bg-tech-light-gray text-tech-teal font-medium">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="md:w-1/2 bg-tech-light-gray/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold mb-1 text-white">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-medium mb-2 text-tech-teal">
                    {item.company}
                  </h4>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    {item.type === "education" ? (
                      <GraduationCap className="w-4 h-4 mr-1" />
                    ) : (
                      <Briefcase className="w-4 h-4 mr-1" />
                    )}
                    <MapPin className="w-4 h-4 mr-1 ml-2" />
                    {item.location}
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
