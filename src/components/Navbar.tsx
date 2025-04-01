
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "#home"
    }, 
    {
      name: "Experience",
      href: "#experience"
    }, 
    {
      name: "Industries",
      href: "#industries"
    }, 
    {
      name: "Companies",
      href: "#companies"
    }, 
    {
      name: "Contact",
      href: "#contact"
    }
  ];

  const resumeUrl = "https://docs.google.com/document/d/1NMPU_DZXWqoysbo6J8UkF0LiIwn2yHMAZ0UlixApqx8/edit?usp=sharing";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${isScrolled ? "bg-tech-dark/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gradient">AI Solutions Engineer</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>)}
          <Button 
            className="bg-gradient-to-r from-tech-teal to-tech-blue hover:from-tech-blue hover:to-tech-teal transition-all duration-300"
            onClick={() => window.open(resumeUrl, '_blank')}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && 
        <div className="md:hidden absolute top-full left-0 w-full bg-tech-dark-gray shadow-lg py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => 
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-white py-2 transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )}
            <Button 
              className="bg-gradient-to-r from-tech-teal to-tech-blue hover:from-tech-blue hover:to-tech-teal transition-all duration-300 w-full"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              Resume
            </Button>
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;
