import {
  Linkedin,
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-gradient mb-4">UniVoid</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing student life through unified communities,
              AI-powered guidance, and gamified growth. Join the movement today.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/univoid"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/univoid_community"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href=" https://chat.whatsapp.com/J8Bzkfs1pNJJXwM5Lm7GvU " // Please provide actual WhatsApp link
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "about" },
                { label: "Features", href: "features" },
                { label: "Team", href: "team" },
                { label: "Roadmap", href: "roadmap" },
                { label: "Join Us", href: "join" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact & Legal
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@univoid.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">India</span>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 UniVoid. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground text-sm">
                  In Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
