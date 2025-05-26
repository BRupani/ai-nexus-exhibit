
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { forwardRef } from "react";

export type TimelineItemData = {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  region: "Europe" | "US" | "India";
  type: "work" | "education";
};

type TimelineItemProps = {
  item: TimelineItemData;
  isVisible: boolean;
};

const getCompanyLink = (company: string): string | null => {
  const links: Record<string, string> = {
    "Plaksha University": "https://plaksha.edu.in/",
    "HRS Group": "https://www.hrs.de",
    "NetAnalytiks": "https://www.netanalytiks.com/",
    "Tech Startup": "https://lawroomai.com"
  };
  
  return links[company] || null;
};

const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ item, isVisible }, ref) => {
    const companyLink = getCompanyLink(item.company);
    
    return (
      <div
        id={`item-${item.id}`}
        ref={ref}
        className={`flex flex-col md:flex-row items-center md:even:flex-row-reverse gap-8 relative animate-on-scroll ${
          isVisible ? "active" : ""
        }`}
      >
        {/* Timeline dot */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${
            item.type === "education" ? "bg-tech-teal" : "bg-tech-purple"
          } border-4 border-tech-dark-gray z-10`}
        ></div>

        {/* Year */}
        <div className="md:w-1/2 text-center md:text-right md:even:text-left">
          <span className="inline-block px-4 py-1 rounded-full bg-tech-light-gray text-tech-teal font-medium">
            {item.year}
          </span>
        </div>

        {/* Content */}
        <div className="md:w-1/2 bg-tech-light-gray/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
          <h4 className="text-lg font-medium mb-2 text-tech-teal">
            {companyLink ? (
              <a 
                href={companyLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.company}
              </a>
            ) : (
              item.company
            )}
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
    );
  }
);

TimelineItem.displayName = "TimelineItem";

export default TimelineItem;
