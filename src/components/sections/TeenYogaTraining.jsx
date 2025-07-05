import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";
import { GiMeditation, GiNotebook } from "react-icons/gi";
import { FaLeaf, FaOm } from "react-icons/fa";

export default function TeenYogaTraining() {
  // Compare today's date with July 10, 2024
  const today = new Date("2024-07-05"); // simulate an earlier date

  const earlyBirdEnd = new Date("2024-07-10T23:59:59");
  const isEarlyBird = today < earlyBirdEnd;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-purple-100/10 blur-2xl"></div>
        <div className="absolute bottom-[10%] right-[10%] w-56 h-56 rounded-full bg-pink-100/10 blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/80 backdrop-blur-md border border-white/30 shadow-xl rounded-[2rem] overflow-hidden">
          <div className="p-6 sm:p-10 md:p-16">
            {/* Header */}
            <div className="text-center mb-12 relative">
              <FaOm className="absolute -top-6 left-1/2 -translate-x-1/2 text-purple-200/60 text-5xl -z-10" />
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] tracking-wide">
                Teen Yoga Teacher Training
              </h2>
              <p className="text-[#7a6b63] italic text-lg mt-2">
                Nurturing the Next Generation with Mindful Movement
              </p>
              <div className="w-20 h-[2px] bg-[#c8a798] opacity-50 mx-auto mt-4 mb-2" />
              <div className="text-sm text-[#7a6b63] uppercase tracking-widest mt-1">
                14-Day YACEP Certified Online Course
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              {/* What You’ll Learn */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#5a4a42]">
                  <FaLeaf className="text-[#9f7164] text-xl" />
                  <h3 className="text-2xl font-serif font-light">
                    What You’ll Learn
                  </h3>
                </div>
                <ul className="space-y-4 text-[#6d5b53]">
                  {[
                    "Understanding teen development through yoga",
                    "Creating safe, engaging classes for adolescents",
                    "Supporting mental health through mindful movement",
                    "Building confidence in young practitioners",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#9f7164] mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Program Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#5a4a42]">
                  <FaLeaf className="text-[#9f7164] text-xl" />
                  <h3 className="text-2xl font-serif font-light">
                    Program Details
                  </h3>
                </div>
                <div className="space-y-4 text-[#6d5b53] text-base">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-[#9f7164]" />
                    <span>
                      <strong>Dates:</strong> July 28th – Aug 14th
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-[#9f7164]" />
                    <span>
                      <strong>Duration:</strong> 14 Days
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#9f7164]" />
                    <span>
                      <strong>Location:</strong> Live on Zoom
                    </span>
                  </div>

                  {/* FEES */}
                  <div className="relative mt-4">
                    <div className="p-4 rounded-xl bg-[#fef7f4] border border-[#e0cfc6] shadow-sm">
                      <div className="flex items-center gap-3">
                        <FaRupeeSign className="text-[#9f7164]" />
                        <span className="text-lg text-[#5a4a42] font-medium">
                          <strong>Fees:</strong>{" "}
                          {isEarlyBird ? (
                            <>
                              <span className="text-green-700 font-bold text-xl">
                                ₹8,000
                              </span>{" "}
                              <span className="line-through text-sm text-[#a79b91] ml-2">
                                ₹10,000
                              </span>
                              <span className="text-xs text-green-600 block mt-1">
                                🎉 Early Bird Discount till July 10
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-[#5a4a42] font-bold text-xl">
                                ₹10,000
                              </span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-[#f8f2eb] p-6 sm:p-8 rounded-xl border border-[#e8dcd3] mb-10 shadow-sm">
              <div className="flex items-center gap-3 text-[#5a4a42] mb-5">
                <FaLeaf className="text-[#9f7164] text-xl" />
                <h3 className="text-2xl font-serif font-light">
                  Program Highlights
                </h3>
              </div>
              <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 text-[#6d5b53] text-[15px]">
                <li className="flex items-start gap-3">
                  <GiNotebook className="text-[#9f7164] mt-1" />
                  Expert-led training with practical teaching methods
                </li>
                <li className="flex items-start gap-3">
                  <GiMeditation className="text-[#9f7164] mt-1" />
                  Teen psychology, classroom dynamics & mindfulness tools
                </li>
                <li className="flex items-start gap-3">
                  <FaGraduationCap className="text-[#9f7164] mt-1" />
                  YACEP certification to start teaching right away
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center mt-6">
              <p className="text-lg text-[#7a5a50] italic font-serif mb-4">
                “Teaching teens is planting seeds for lifelong well-being.”
              </p>
              <a
                href="https://wa.me/918281094117?text=Hi%2C%20I%27m%20interested%20in%20the%20Teen%20Yoga%20Teacher%20Training%20course%20and%20would%20like%20to%20know%20more.%20Please%20share%20details.%20Thank%20you%20%F0%9F%99%8F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#9f7164] to-[#7a5a50] hover:from-[#8b6358] hover:to-[#6d4f46] text-white px-10 py-3 rounded-full font-medium tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
              >
                Begin Your Teaching Journey on WhatsApp
              </a>

              <p className="text-sm text-[#7a6b63] mt-4 italic">
                Only 15 seats available • Personalized Guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
