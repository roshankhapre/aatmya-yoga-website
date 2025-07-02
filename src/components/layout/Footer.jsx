import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#5a4a42] text-[#e8dfd5] pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-light tracking-wide">
              Aatmya Yoga
            </h3>
            <p className="text-[#c8b6a8] leading-relaxed">
              Nurturing harmony between body, mind, and spirit through authentic
              yoga practice.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#c8b6a8] hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-[#c8b6a8] hover:text-white transition-colors duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-[#c8b6a8] hover:text-white transition-colors duration-300"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-light mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#programs"
                  className="hover:text-white transition-colors duration-300"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#workshops"
                  className="hover:text-white transition-colors duration-300"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-300"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-light mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#c8b6a8]" />
                <a
                  href="mailto:hello@aatmyayoga.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  hello@aatmyayoga.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-[#c8b6a8]" />
                <a
                  href="tel:+918281094117"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 82810 94117
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#c8b6a8]" />
                <span>Indore, Madhya Pradesh, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-light mb-4">Stay Updated</h4>
            <p className="text-[#c8b6a8]">
              Join our newsletter for mindful updates and workshop
              announcements.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-full bg-[#6d5b53] text-white placeholder-[#c8b6a8] focus:outline-none focus:ring-1 focus:ring-[#c8a798]"
              />
              <button
                type="submit"
                className="bg-[#c8a798] hover:bg-[#9f7164] text-[#5a4a42] px-4 py-2 rounded-r-full transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#6d5b53] my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#c8b6a8] text-sm">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Aatmya Yoga. All rights reserved.
          </div>
          <div>
            Built by{" "}
            <a
              href="https://hiddenleaftechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 underline underline-offset-2"
            >
              Hidden Leaf Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
