
import { useState, useEffect, useRef } from "react";
import TimelineItem, { TimelineItemData } from "./TimelineItem";
import TimelineFilters from "./TimelineFilters";
import { timelineData } from "./TimelineData";

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

          <TimelineFilters 
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            activeTypeFilter={activeTypeFilter}
            setActiveTypeFilter={setActiveTypeFilter}
          />
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tech-teal via-tech-purple to-tech-blue"></div>

          <div className="space-y-12">
            {filteredData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                isVisible={visibleItems[item.id] || false}
                ref={(el) => (itemRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
