
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import IndustryCards from "@/components/IndustryCards";
import CompanyShowcase from "@/components/CompanyShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once to show elements that are already in view on page load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Timeline />
      <IndustryCards />
      <CompanyShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
