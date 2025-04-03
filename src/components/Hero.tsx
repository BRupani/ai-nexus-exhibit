import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Senior Generative AI Engineer";
  const typingSpeed = 100;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-tech-dark z-0 opacity-90"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-tech-blue opacity-5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-tech-purple opacity-5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col items-center text-center">
        <div className="mb-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Bhawna Rupani</h2>
        </div>
        
        <div className="mb-4 inline-block">
          <div className="px-4 py-1 rounded-full bg-tech-light-gray/50 backdrop-blur-sm text-sm font-medium text-tech-teal">
            Global AI Expertise • Fortune 500 Experience
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tighter">
          <span className="text-gradient">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">Transforming industries with AI solutions across Europe, India, and the US. Expertise in AI for cybersecurity, finance, travel, e-commerce, and legal technology.</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-tech-teal to-tech-blue hover:from-tech-blue hover:to-tech-teal transition-all duration-300"
            onClick={() => window.open('https://github.com/BRupani', '_blank')}
          >
            Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-500 hover:bg-tech-light-gray/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>

        <div className="flex space-x-6 mb-16">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => window.open('https://github.com/BRupani', '_blank')}
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => window.open('https://www.linkedin.com/in/bhawnarupani/', '_blank')}
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => window.open('https://x.com/RupaniBhawna', '_blank')}
          >
            <Twitter className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => window.open('https://medium.com/@Bhawna_Rupani', '_blank')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
              <path d="M18 7L11.8 15.1L11.1 14.1L6 7M7 7V14M11.8 7V15M16.5 7V14" />
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => window.open('mailto:bhawna.rupani@plaksha.edu.in', '_blank')}
          >
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#experience" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
