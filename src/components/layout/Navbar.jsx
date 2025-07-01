import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import logo from "../../assets/logo.png"; // ✅ Your logo path

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { label: "Programmes", href: "#programmes" },
    { label: "Workshops", href: "#workshops" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  // ✅ Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-white/20 shadow-md">
      {/* Floating decorative leaf */}
      <div className="absolute -top-8 -right-8 text-emerald-200/30 text-7xl -z-10">
        <FaLeaf className="transform -rotate-45" />
      </div>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Branding */}
        <a href="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Aatmya Yoga Logo"
            className="h-14 w-16  shadow-sm"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative text-emerald-800/90 hover:text-emerald-700 font-light tracking-wide transition-colors duration-500 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-600 group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
          <a
            href="#programmes"
            className="ml-4 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white px-6 py-2 rounded-full font-light tracking-wider shadow-lg hover:shadow-emerald-200/50 transition-all duration-500 transform hover:scale-[1.03]"
          >
            Begin Journey
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-emerald-700/80 hover:text-emerald-600 focus:outline-none transition-colors duration-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FiX className="h-7 w-7" />
          ) : (
            <FiMenu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white/95 backdrop-blur-sm px-6 pt-4 pb-8 space-y-6 border-t border-emerald-100 animate-slideDown"
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block py-2 text-emerald-800/90 hover:text-emerald-700 text-lg font-light tracking-wide transition-colors duration-300 border-b border-emerald-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#programmes"
            className="block mt-4 text-center bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white py-3 rounded-full font-light tracking-wider shadow-lg transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Begin Journey
          </a>
        </div>
      )}
    </nav>
  );
}
