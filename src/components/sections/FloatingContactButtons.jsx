// components/common/FloatingContactButtons.jsx
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+918281094117";
  const whatsappMessage =
    "Hi, I'm interested in your yoga classes and would like to know more!";

  // Show buttons after slight delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Encode WhatsApp message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber.substring(
          1
        )}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute right-full mr-2 px-2 py-1 bg-[#25D366] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Message Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 bg-[#9f7164] text-white rounded-full shadow-lg hover:bg-[#7a5a50] transition-all duration-300 transform hover:scale-110 group"
        aria-label="Call Us"
      >
        <FaPhoneAlt className="text-xl" />
        <span className="absolute right-full mr-2 px-2 py-1 bg-[#9f7164] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
}
