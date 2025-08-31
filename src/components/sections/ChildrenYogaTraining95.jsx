// src/components/sections/ChildrenYogaTraining95.jsx
import { FaCheckCircle } from "react-icons/fa";
import img1 from "../../assets/medium-shot-people-yoga-mat.webp";

export default function ChildrenYogaTraining95() {
  const highlights = [
    "Yoga Alliance RCYS Certified – Global Recognition",
    "Specialized training in Children’s Yoga (ages 3–18)",
    "Storytelling, games & activities for effective teaching",
    "Understanding child psychology & classroom management",
    "Includes lesson planning & sequencing for kids",
    "Blended learning: Online + Live Interactive Sessions",
  ];

  // ✅ WhatsApp CTA
  const whatsappLink =
    "https://wa.me/918281094117?text=Hello%2C%20I%20am%20interested%20in%20the%2095%20Hours%20Children's%20Yoga%20Teacher%20Training%20Program.";

  return (
    <section
      className="relative bg-gradient-to-b from-[#fdfaf7] to-[#f5eee8] py-20 md:py-24"
      id="children-ytt"
    >
      {/* 🔥 Highlight Ribbon */}
      <div className="relative w-full flex justify-center mb-10">
        <div className="absolute -top-5 sm:-top-6">
          <span className="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg bg-gradient-to-r from-[#9f7164] to-[#7a5a50] hover:from-[#8b6358] hover:to-[#6d4f46] text-white tracking-wider hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] animate-pulse">
            ⭐ Flagship Course – Most Popular
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-4 md:mb-6 leading-snug">
            95 Hours Children’s Yoga <br className="hidden sm:block" /> Teacher
            Training in Indore
          </h2>
          <p className="text-base sm:text-lg text-[#7a6b63] italic max-w-2xl mx-auto leading-relaxed px-2">
            A comprehensive RCYS-certified program for teachers, parents, and
            yoga practitioners to bring yoga, mindfulness, and joy into
            children’s lives.
          </p>
          <div className="w-20 md:w-24 h-[2px] bg-[#c8a798] opacity-50 mx-auto mt-5 md:mt-6"></div>
        </div>

        {/* Course Card */}
        <div className="relative bg-white border border-[#e6ded7] shadow-xl rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Side */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#5a4a42] mb-5 md:mb-6">
                Course Details
              </h3>

              <ul className="space-y-3 sm:space-y-4 mb-8 md:mb-10">
                {highlights.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start text-[#6a5c55] leading-relaxed text-sm sm:text-base"
                  >
                    <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#c8a798] mr-2.5 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Info Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 md:mb-10">
                <div className="bg-[#f9f5f0] border border-[#e6ded7] p-4 sm:p-5 rounded-xl text-center shadow-sm hover:shadow-md transition">
                  <p className="text-xs sm:text-sm text-[#7a6b63]">Duration</p>
                  <p className="font-bold text-[#5a4a42] text-base sm:text-lg">
                    8 Weeks
                  </p>
                </div>
                <div className="bg-[#f9f5f0] border border-[#e6ded7] p-4 sm:p-5 rounded-xl text-center shadow-sm hover:shadow-md transition">
                  <p className="text-xs sm:text-sm text-[#7a6b63]">
                    Certification
                  </p>
                  <p className="font-bold text-[#5a4a42] text-base sm:text-lg">
                    Yoga Alliance RCYS
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center sm:text-left">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#9f7164] to-[#7a5a50] hover:from-[#8b6358] hover:to-[#6d4f46] text-white px-10 py-3 rounded-full font-medium tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Enroll Now on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side – Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={img1}
                alt="RCYS Certified Children’s Yoga Teacher Training Course in Indore by Aatmya Yoga"
                className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg border border-[#e6ded7] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
