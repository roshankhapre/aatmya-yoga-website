import { useState, useEffect } from "react";
import { FaQuoteLeft, FaLeaf } from "react-icons/fa";
import bgPattern from "../../assets/yoga-pattern.jpg";
import avatar1 from "../../assets/testimonial-female-2.webp";
import avatar2 from "../../assets/testimonial-female-3.webp";
import avatar3 from "../../assets/testimonial-female.webp/";
import avatar4 from "../../assets/testimonial-male.webp";

const testimonials = [
  {
    quote:
      "Joining Aatmya Yoga has transformed my daily life. The online classes feel just as personal and powerful as being in a studio.",
    author: "Sonal, Indore",
    avatar: avatar1,
    color: "from-amber-100/30 to-amber-200/30",
  },
  {
    quote:
      "Their workshops helped me deepen my knowledge and build confidence in my practice.",
    author: "Prachi, Indore",
    avatar: avatar2,
    color: "from-teal-100/30 to-teal-200/30",
  },
  {
    quote:
      "I love how accessible and welcoming the sessions are — even as a beginner, I feel completely supported.",
    author: "Divya, Pune",
    avatar: avatar3,
    color: "from-pink-100/30 to-pink-200/30",
  },
  {
    quote:
      "The flexibility of on-demand and live sessions fits perfectly into my busy schedule. Aatmya Yoga is a blessing.",
    author: "Raj, Mumbai",
    avatar: avatar4,
    color: "from-purple-100/30 to-purple-200/30",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Slower transition for calmer feel
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-100/10 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-teal-100/10 blur-xl"></div>
      </div>

      {/* Subtle mandala background */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "40%" }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-6 tracking-wide">
            Voices of Harmony
          </h2>
          <p className="text-lg text-[#7a6b63] max-w-2xl mx-auto leading-relaxed">
            Hear from our community of practitioners who have found peace
            through their practice
          </p>
          <div className="w-24 h-px bg-[#c8a798] opacity-50 mx-auto mt-8"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial card */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all duration-500 group overflow-hidden border border-white/30">
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 -z-10`}
            ></div>

            {/* Decorative quote icon */}
            <FaQuoteLeft className="absolute top-8 left-8 text-[#c8a798] text-3xl opacity-30" />

            {/* Testimonial content */}
            <div className="flex flex-col items-center">
              {/* Avatar with organic frame */}
              <div className="relative mb-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-inner">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={`${testimonials[currentIndex].author} avatar`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>
                <FaLeaf className="absolute -bottom-3 -right-3 text-[#9f7164] text-xl opacity-70" />
              </div>

              {/* Quote text */}
              <blockquote className="relative max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-[#6d5b53] mb-6 leading-relaxed font-light italic">
                  {testimonials[currentIndex].quote}
                </p>
                <p className="font-serif text-[#5a4a42] text-lg group-hover:text-[#9f7164] transition-colors duration-500">
                  — {testimonials[currentIndex].author}
                </p>
              </blockquote>
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <button className="px-6 py-2 bg-white text-[#7a6359] font-light tracking-wide rounded-full border border-[#d8c3b6] hover:border-[#9f7164] hover:text-[#9f7164] transition-all duration-500 shadow-sm hover:shadow-md">
                Join Our Community
              </button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? "bg-[#9f7164] scale-125"
                    : "bg-[#d8c3b6] hover:bg-[#c8a798]"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
