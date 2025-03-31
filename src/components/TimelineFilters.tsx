
type TimelineFiltersProps = {
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
  activeTypeFilter: string | null;
  setActiveTypeFilter: (filter: string | null) => void;
};

const TimelineFilters = ({
  activeFilter,
  setActiveFilter,
  activeTypeFilter,
  setActiveTypeFilter,
}: TimelineFiltersProps) => {
  return (
    <div>
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
  );
};

export default TimelineFilters;
