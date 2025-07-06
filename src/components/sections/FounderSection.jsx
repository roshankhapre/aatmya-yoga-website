import founderImage from "../../assets/founder-steni-k-thomas.jpg";
import { FaQuoteLeft, FaLeaf, FaOm } from "react-icons/fa";
import bgTexture from "../../assets/pattern-yoga-img.webp";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-28 px-6 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] relative overflow-hidden"
    >
      {/* Decorative Floating Blurs & Om Symbol */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-100/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-teal-100/10 blur-xl"></div>
        <FaOm className="absolute top-1/3 left-1/4 text-[#e91b1b] text-6xl opacity-20 -rotate-12" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 w-44 h-44 rounded-full bg-amber-100/10 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-16 w-60 h-60 rounded-full bg-teal-100/10 blur-2xl"></div>
      </div>

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-multiply"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "35%" }}
      ></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-6 tracking-wide">
            The Heart Behind Aatmya
          </h2>
          <p className="text-lg text-[#7a6b63] max-w-2xl mx-auto leading-relaxed">
            Guided by wisdom, rooted in tradition, shared with love
          </p>
          <div className="w-24 h-px bg-[#c8a798] opacity-50 mx-auto mt-8"></div>
        </div>

        {/* Founder Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Bio Text */}
          <div className="w-full lg:w-1/2 space-y-8 text-[#5a4a42]">
            <div>
              <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-2">
                Steni K Thomas
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#9f7164] uppercase tracking-wider mb-4">
                <FaLeaf className="text-xs" />
                <span>Founder & Guide</span>
              </div>

              <ul className="text-sm text-[#7a6359] space-y-1 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#9f7164]">•</span> E-RYT® 200, RYT 500,
                  RPYT®, YACEP®
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9f7164]">•</span> Yog Prashikshak –
                  IYA/2025/YP9423
                </li>
              </ul>
            </div>

            <blockquote className="relative pl-8 py-4 text-[#6d5b53] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#e6a88d] before:to-[#d8b6a8] before:rounded-full">
              <FaQuoteLeft className="absolute top-4 left-4 text-[#e6a88d] opacity-40 text-2xl" />
              <p className="relative z-10 italic font-light leading-relaxed">
                Yoga is the sacred dance between breath and being — a return to
                wholeness, a pathway to remembering our true nature beyond the
                poses.
              </p>
            </blockquote>

            <div className="space-y-4 text-[#6d5b53] leading-relaxed">
              <p>
                With over a decade of dedicated practice and teaching, Steni's
                approach blends traditional wisdom with modern understanding,
                creating a space where students of all levels can awaken to
                their fullest potential.
              </p>
              <p>
                Her teachings emphasize the unity of movement, breath, and
                awareness — cultivating not just physical strength, but
                emotional resilience and spiritual connection.
              </p>
            </div>
          </div>

          {/* Founder Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-white/30">
              <img
                src={founderImage}
                alt="Steni K Thomas, Founder of Aatmya Yoga"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#e8d5c8] rounded-full -z-10 opacity-40"></div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <div className="w-24 h-px bg-[#c8a798] opacity-30"></div>
          <div className="w-3 h-3 border border-[#c8a798] rounded-full opacity-50"></div>
          <div className="w-24 h-px bg-[#c8a798] opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
