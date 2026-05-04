import { useState } from "react";
import { Menu, X } from "lucide-react";
import VLM_LOGO from "../assets/vlm_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Villas", href: "#villas" },
    { name: "Our Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
  ];

  const whatsappMessage =
    "Hello! I'm interested in availability and pricing for the villas.";
  const whatsappLink = `https://wa.me/917709589459?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50"
      style={{ backgroundColor: "#586460" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white text-2xl font-bold flex items-center space-x-2">
              <img src={VLM_LOGO} alt="logo" className="h-8 w-auto" />
              <span>Villa Lake Mountain by Artios</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href.substring(1))}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-md font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href.substring(1))}
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
