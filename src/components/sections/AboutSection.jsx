import yogaImage from "../../assets/young-woman-doing-yoga-exercises.webp";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#faf6f2] to-[#f1e8e0]"
    >
      {/* Floating decorative elements */}
      <div className="absolute left-0 right-0 h-24 -mt-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#e8d5c8] opacity-20 -translate-y-1/2"></div>
        <div className="absolute top-0 right-1/3 w-48 h-48 rounded-full bg-[#d8c3b6] opacity-15 -translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5f4b44] mb-6 tracking-wide">
            Our Story — The Soul of Aatmya Yoga
          </h2>
          <div className="w-24 h-1 bg-[#c8a798] mx-auto opacity-60"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Image with soft frame */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-[#e8d5c8] rounded-3xl opacity-30 -z-10"></div>
            <div className="absolute -inset-2 border-2 border-[#d8c3b6] rounded-3xl opacity-40 -z-10"></div>
            <img
              src={yogaImage}
              alt="Woman doing yoga peacefully"
              className="rounded-2xl shadow-lg w-full transform transition-all duration-500 hover:scale-[1.01]"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 space-y-7 text-[#5a4a42] text-lg leading-relaxed">
            <p className="animate-fadeIn">
              <span className="text-[#9f7164] font-medium tracking-wide">
                AATMYA YOGA
              </span>{" "}
              emerged from a vision — to bring{" "}
              <span className="italic text-[#7a6359]">
                authentic, soulful yoga
              </span>{" "}
              to all, wherever they may be.
            </p>

            <p className="animate-fadeIn delay-100">
              Our name, <em className="text-[#8b6b5f]">"Aatmya"</em>, comes from
              Sanskrit meaning{" "}
              <strong className="font-normal text-[#7a6359]">
                "connected to the soul"
              </strong>
              . This embodies our purpose — guiding you back to harmony with
              your mind, body, and spirit.
            </p>

            <blockquote className="relative pl-8 py-5 text-[#6d5b53] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#e6a88d] before:to-[#d8b6a8] before:rounded-full">
              <span className="absolute text-6xl text-[#e6a88d] opacity-20 top-2 left-4">
                "
              </span>
              <p className="relative z-10 italic font-light">
                Yoga is not just movement, but a sacred dialogue between breath
                and being — a pathway to discover the stillness within motion.
              </p>
            </blockquote>

            <p className="animate-fadeIn delay-200">
              From beginners to advanced practitioners, our{" "}
              <span className="text-[#8b6b5f]">live classes</span>,{" "}
              <span className="text-[#8b6b5f]">on-demand sessions</span>,{" "}
              <span className="text-[#8b6b5f]">workshops</span>, and{" "}
              <span className="text-[#8b6b5f]">teacher trainings</span> meet you
              exactly where you are on your journey.
            </p>

            <p className="animate-fadeIn delay-300">
              At Aatmya Yoga, we celebrate all bodies, all stories, all souls —
              because true yoga{" "}
              <span className="italic text-[#7a6359]">
                embraces without condition
              </span>
              .
            </p>

            <p className="animate-fadeIn delay-400">
              We are a community of kindred spirits, walking together toward
              healing and growth — inviting you to experience yoga as{" "}
              <span className="italic text-[#7a6359]">
                a sacred way of being
              </span>
              .
            </p>

            <p className="font-medium text-[#7a6359] mt-8 animate-fadeIn delay-500">
              Come home to yourself. The journey begins within.
            </p>

            {/* Decorative element */}
            <div className="flex justify-center mt-10">
              <div className="w-20 h-px bg-[#c8a798] opacity-50"></div>
              <div className="w-3 h-3 border-2 border-[#c8a798] rounded-full mx-4 mt-1 opacity-70"></div>
              <div className="w-20 h-px bg-[#c8a798] opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
