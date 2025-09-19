import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null); // 🔁 New ref for the toggle button

  const navLinks = [
    { label: "Programs", href: "/Programs" },
    { label: "Workshops", href: "/workshops" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  {
    navLinks.map((link, i) => (
      <Link
        key={i}
        to={link.href}
        className="relative text-emerald-800/90 hover:text-emerald-700 font-light tracking-wide transition-colors duration-500 group"
      >
        {link.label}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-600 group-hover:w-full transition-all duration-500"></span>
      </Link>
    ));
  }

  // ✅ Improved outside click logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-white/20 shadow-md">
      {/* Decorative Leaf */}
      <div className="absolute -top-8 -right-8 text-emerald-200/30 text-7xl -z-10">
        <FaLeaf className="transform -rotate-45" />
      </div>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Aatmya Yoga – Yoga Classes in Indore"
            className="h-14 w-16 shadow-sm"
          />
        </Link>

        {/* Desktop Links */}
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
            href="tel:8281094117"
            className="ml-4 bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white font-light rounded-full shadow-sm hover:shadow-md transition-all duration-500 px-6 py-2"
          >
            Begin Journey
          </a>
        </div>

        {/* Toggle Button */}
        <button
          ref={toggleRef}
          className="md:hidden text-emerald-700/80 hover:text-emerald-600 focus:outline-none transition-colors duration-500"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
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
            href="tel:8281094117"
            className="block mt-4 text-center bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white font-light rounded-full shadow-sm hover:shadow-md transition-all duration-500 px-6 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Begin Journey
          </a>
        </div>
      )}
    </nav>
  );
}
