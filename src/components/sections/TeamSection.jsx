import mentorImage from "../../assets/dr-shalini-verma-tonk.jpg";
import kunalImage from "../../assets/kunal-mishra.jpg";
import rajaniImage from "../../assets/dr-rajani-bala.jpg";
import vanshImage from "../../assets/vansh-raghav.jpg";
import roshanImage from "../../assets/roshanImage.png";
import founderImage from "../../assets/founder-steni-k-thomas.jpg";

import { FaLeaf, FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Steni K Thomas",
      role: "Founder & Lead Guide",

      certifications: [
        "E-RYT® 500",
        "RCYT®",
        "RPYT®",
        "YACEP®",
        "Yog Prashikshak – IYA/2025/YP9423",
      ],

      experience: "10+ Years Teaching & Training Experience",

      description:
        "With over a decade of dedicated practice and teaching, Steni's approach blends traditional wisdom with modern understanding, creating a space where students of all levels can awaken to their fullest potential.",

      image: founderImage,
    },

    {
      id: 2,
      name: "Dr. Shalini Verma Tonk",
      role: "BAMS · Ayurveda Mentor",
      experience: "14+ years in holistic Ayurvedic healing",
      description:
        "Specializes in dosha balancing, detoxification, and natural restoration through classical Ayurvedic principles.",
      image: mentorImage,
    },
    {
      id: 3,
      name: "Kunal Mishra",
      role: "Advanced Yoga Master",
      experience: "6+ years in advanced practices and alignment precision",
      description:
        "Specializes in Hatha yoga and advanced anatomy-based alignment, helping students refine postures and avoid injuries with deeper body awareness.",
      image: kunalImage,
    },
    {
      id: 4,
      name: "Vansh Raghav",
      role: "Ashtanga Vinyasa Yoga Teacher",
      experience: "6+ years teaching traditional Mysore-style yoga",
      description:
        "Guides students through structured Ashtanga sequences with an emphasis on strength, breath coordination, and graceful transitions.",
      image: vanshImage,
    },
    {
      id: 5,
      name: "Roshan Khapre",
      role: "Freelancer · UI/UX & Fullstack",
      experience: "Crafting digital experiences with design + code",
      description:
        "I blend aesthetics with functionality to create meaningful digital experiences. Specializing in wellness tech, I help yoga studios and wellness brands establish a strong online presence with custom websites and applications.",
      specialties: [
        "Custom Website Development",
        "Responsive UI/UX Design",
        "Performance Optimization",
        "Brand Identity Integration",
      ],
      image: roshanImage,
      isDeveloper: true,
      website: "https://hiddenleaf.vercel.app/",
    },
  ];

  return (
    <section
      id="team"
      className="py-28 px-6 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-6 tracking-wide">
            Our Guiding Lights
          </h1>
          <p className="text-lg text-[#7a6b63] max-w-2xl mx-auto leading-relaxed">
            Meet the compassionate experts who bring wisdom to your practice
          </p>
          <div className="w-24 h-px bg-[#c8a798] opacity-50 mx-auto mt-8"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden border border-[#e8d5c4]/40 relative"
            >
              {/* Image */}
              <div className="relative w-full h-72 mb-6 rounded-xl overflow-hidden shadow-inner border border-[#e8d5c4]/50">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Aatmya Yoga`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-serif font-light mb-1 text-[#5a4a42] group-hover:text-[#9f7164] transition-colors duration-500">
                  {member.name}
                </h2>

                <div className="flex items-center gap-2 text-sm uppercase tracking-wider mb-3 text-[#9f7164]">
                  <FaLeaf className="text-xs" />
                  <span>{member.role}</span>
                </div>

                {/* Certifications */}
                {member.certifications && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full
        bg-[#f3e8e2] text-[#9f7164]
        border border-[#e8d5c4]/60"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm mb-4 leading-relaxed border-b pb-4 text-[#7a6359] border-[#e8d5c4]/40">
                  {member.experience}
                </p>

                <p className="mb-3 text-sm leading-relaxed text-[#6d5b53]">
                  {member.description}
                </p>

                {/* Specialties only for Roshan */}
                {member.isDeveloper && member.specialties && (
                  <>
                    <h3 className="text-sm font-semibold mt-4 mb-2 text-[#5a4a42]">
                      Specializations:
                    </h3>
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {member.specialties.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-xs text-gray-600"
                        >
                          <svg
                            className="w-3 h-3 mt-0.5 mr-1.5 flex-shrink-0 text-amber-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* CTA Buttons only for Roshan */}
                {member.isDeveloper && (
                  <div className="flex flex-col gap-3 mt-4">
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href="https://wa.me/917089200175?text=Hi%20Roshan%2C%20I%E2%80%99m%20interested%20in%20designing%20a%20website%20for%20my%20yoga%20studio."
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 flex-1 justify-center"
                      >
                        <FaWhatsapp className="text-lg" />
                        WhatsApp
                      </a>
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full text-[#5a4a42] bg-[#f9f5f0] hover:bg-[#f1e6de] transition-colors duration-200 flex-1 justify-center"
                      >
                        <FaGlobe className="text-sm" />
                        Visit Website
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <div className="w-24 h-px bg-[#c8a798] opacity-30"></div>
          <div className="w-3 h-3 border border-[#c8a798] rounded-full opacity-50"></div>
          <div className="w-24 h-px bg-[#c8a798] opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
