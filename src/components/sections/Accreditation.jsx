import React from "react";
import yacep from "../../assets/yacep_yoga-removebg-preview.png";
import yoga_alliance from "../../assets/yoga_alliance-removebg-preview.png";
import rcys from "../../assets/rcys_yoga_-removebg-preview.png";

export default function AccreditationSection() {
  const logos = [
    {
      src: yacep,
      alt: "YACEP Yoga Accreditation",
      description: "Yoga Alliance Continuing Education Provider",
    },
    {
      src: yoga_alliance,
      alt: "Yoga Alliance Accreditation",
      description: "Internationally Recognized Yoga Standards",
    },
    {
      src: rcys,
      alt: "RCYS Yoga Accreditation",
      description: "Yoga Alliance Registered Children’s Yoga School",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-48 h-48 rounded-full bg-amber-100/10 blur-2xl"></div>
        <div className="absolute bottom-[15%] right-[12%] w-64 h-64 rounded-full bg-teal-100/10 blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-4 tracking-wide">
            Our Accreditations
          </h2>
          <p className="text-lg text-[#7a6b63] italic max-w-2xl mx-auto leading-relaxed">
            Honored and recognized by global yoga organizations
          </p>
          <div className="w-24 h-[2px] bg-[#c8a798] opacity-50 mx-auto mt-6"></div>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="relative group">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-white/50 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-12 h-12">
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-200/70 rounded-tl-lg"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12">
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-200/70 rounded-br-lg"></div>
                </div>

                {/* Logo container */}
                <div className="relative z-10 h-40 flex items-center justify-center p-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-20 object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Description text */}
                <p className="relative z-10 text-sm text-[#7a6b63] mt-4 font-medium italic">
                  {logo.description}
                </p>

                {/* Hover effect line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-amber-200 to-amber-300 mx-auto transition-all duration-500 group-hover:w-24 mt-2"></div>
              </div>

              {/* Subtle shadow underneath */}
              <div className="absolute -bottom-2 left-4 right-4 h-4 bg-amber-900/5 blur-md rounded-xl group-hover:bg-amber-900/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
