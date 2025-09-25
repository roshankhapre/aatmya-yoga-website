import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const dropdownRef = useRef(null);

  // ✅ Outside click logic for mobile menu
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

  // ✅ Outside click logic for desktop dropdown
  useEffect(() => {
    const handleDesktopDropdownClick = (event) => {
      if (
        desktopDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDesktopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDesktopDropdownClick);
    return () => {
      document.removeEventListener("mousedown", handleDesktopDropdownClick);
    };
  }, [desktopDropdownOpen]);

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
          {/* Programs Dropdown - IMPROVED */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="relative text-emerald-800/90 hover:text-emerald-700 font-light tracking-wide transition-colors duration-500 flex items-center space-x-1 group"
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              onMouseEnter={() => setDesktopDropdownOpen(true)}
            >
              <span>Programs</span>
              <FiChevronDown
                className={`transform transition-transform duration-300 ${
                  desktopDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-600 group-hover:w-full transition-all duration-500"></span>
            </button>

            {/* IMPROVED Dropdown Menu */}
            <div
              className={`absolute left-0 top-full mt-3 bg-white/95 backdrop-blur-md shadow-lg rounded-xl border border-emerald-100/50 w-64 z-50 transition-all duration-300 transform origin-top ${
                desktopDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              {/* Dropdown Arrow */}
              <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 backdrop-blur-md transform rotate-45 border-t border-l border-emerald-100/50"></div>

              {/* Dropdown Items */}
              <div className="relative z-10 p-2">
                <Link
                  to="/children-yoga-training"
                  className="flex items-center px-4 py-3 text-emerald-800/90 hover:bg-emerald-50/80 rounded-lg transition-all duration-300 group/item border-b border-emerald-50/50 last:border-b-0"
                  onClick={() => setDesktopDropdownOpen(false)}
                >
                  <div className="flex-1">
                    <div className="font-medium text-emerald-900 group-hover/item:text-emerald-700 transition-colors">
                      Children Yoga
                    </div>
                    <div className="text-xs text-emerald-600/80 mt-1">
                      Ages 6-12
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                </Link>

                <Link
                  to="/teen-yoga-training"
                  className="flex items-center px-4 py-3 text-emerald-800/90 hover:bg-emerald-50/80 rounded-lg transition-all duration-300 group/item border-b border-emerald-50/50 last:border-b-0"
                  onClick={() => setDesktopDropdownOpen(false)}
                >
                  <div className="flex-1">
                    <div className="font-medium text-emerald-900 group-hover/item:text-emerald-700 transition-colors">
                      Teen Yoga
                    </div>
                    <div className="text-xs text-emerald-600/80 mt-1">
                      Ages 13-18
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                </Link>

                <Link
                  to="/teacher-training"
                  className="flex items-center px-4 py-3 text-emerald-800/90 hover:bg-emerald-50/80 rounded-lg transition-all duration-300 group/item"
                  onClick={() => setDesktopDropdownOpen(false)}
                >
                  <div className="flex-1">
                    <div className="font-medium text-emerald-900 group-hover/item:text-emerald-700 transition-colors">
                      Teacher Training
                    </div>
                    <div className="text-xs text-emerald-600/80 mt-1">
                      Certification Program
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/workshops"
            className="relative text-emerald-800/90 hover:text-emerald-700 font-light tracking-wide transition-colors duration-500 group"
          >
            Workshops
            <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-600 group-hover:w-full transition-all duration-500"></span>
          </Link>

          <Link
            to="/about"
            className="relative text-emerald-800/90 hover:text-emerald-700 font-light tracking-wide transition-colors duration-500 group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-600 group-hover:w-full transition-all duration-500"></span>
          </Link>

          <Link
            to="/contact"
            className="relative text-emerald-800/90 hover:text-emerald-700 font-light tracking-wide transition-colors duration-500 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-600 group-hover:w-full transition-all duration-500"></span>
          </Link>

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

      {/* Mobile Dropdown - IMPROVED */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white/95 backdrop-blur-sm px-6 pt-4 pb-8 space-y-4 border-t border-emerald-100 animate-slideDown"
        >
          {/* Programs with sublinks - IMPROVED */}
          <div className="bg-emerald-50/50 rounded-lg p-3">
            <p className="text-emerald-800 font-medium mb-2 px-2">Programs</p>
            <div className="space-y-1">
              <Link
                to="/children-yoga-training"
                className="flex items-center justify-between px-4 py-3 text-emerald-700 hover:bg-white rounded-lg transition-all duration-300 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div>
                  <div className="font-medium">Children Yoga</div>
                  <div className="text-xs text-emerald-600/80 mt-1">
                    Ages 6-12
                  </div>
                </div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <Link
                to="/teen-yoga-training"
                className="flex items-center justify-between px-4 py-3 text-emerald-700 hover:bg-white rounded-lg transition-all duration-300 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div>
                  <div className="font-medium">Teen Yoga</div>
                  <div className="text-xs text-emerald-600/80 mt-1">
                    Ages 13-18
                  </div>
                </div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <Link
                to="/teacher-training"
                className="flex items-center justify-between px-4 py-3 text-emerald-700 hover:bg-white rounded-lg transition-all duration-300 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div>
                  <div className="font-medium">Teacher Training</div>
                  <div className="text-xs text-emerald-600/80 mt-1">
                    Certification Program
                  </div>
                </div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>

          <Link
            to="/workshops"
            className="block py-3 px-4 text-emerald-800/90 hover:text-emerald-700 text-lg font-light tracking-wide transition-colors duration-300 hover:bg-emerald-50/50 rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Workshops
          </Link>
          <Link
            to="/about"
            className="block py-3 px-4 text-emerald-800/90 hover:text-emerald-700 text-lg font-light tracking-wide transition-colors duration-300 hover:bg-emerald-50/50 rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block py-3 px-4 text-emerald-800/90 hover:text-emerald-700 text-lg font-light tracking-wide transition-colors duration-300 hover:bg-emerald-50/50 rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <a
            href="tel:8281094117"
            className="block mt-6 text-center bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white font-light rounded-full shadow-sm hover:shadow-md transition-all duration-500 px-6 py-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            Begin Journey
          </a>
        </div>
      )}
    </nav>
  );
}
