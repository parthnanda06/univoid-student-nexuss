import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Problems", href: "problems" },
    { label: "Solutions", href: "solutions" },
    { label: "Features", href: "features" },
    { label: "Team", href: "team" },
    { label: "Roadmap", href: "roadmap" },
    { label: "Join Us", href: "join" },
    { label: "Support", href: "support" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl md:text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
            >
              <span
                className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
                aria-label="UniVoid Logo"
              >
                UniVoid
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/demo.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground bg-primary/10 hover:bg-primary hover:text-white px-3 py-2 text-sm font-medium rounded transition-colors duration-200 hover:scale-105"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2 rounded-lg transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/demo.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground bg-primary/10 hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium rounded transition-colors duration-200 w-full text-left hover:scale-105"
              >
                Watch Demo
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Demo Video Modal removed, now using direct link */}
    </nav>
  );
};

export default Navbar;
