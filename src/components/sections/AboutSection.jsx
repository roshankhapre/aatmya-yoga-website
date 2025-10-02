import yogaImage from "../../assets/young-woman-doing-yoga-exercises.webp";
import yogaGuru from "../../assets/yoga-guru.webp";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#faf6f2] to-[#f1e8e0] relative overflow-hidden"
      aria-label="About Aatmya Yoga"
    >
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "YogaStudio",
          name: "Aatmya Yoga",
          description:
            "Authentic, soulful yoga classes and teacher training bringing harmony to mind, body, and spirit",
          url: window.location.href,
          telephone: "+91-8281094117",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
          offers: {
            "@type": "Offer",
            description: "Yoga classes and teacher training",
          },
        })}
      </script>

      {/* Floating decorative elements */}
      <div className="absolute left-0 right-0 h-24 -mt-24 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#e8d5c8] opacity-20 -translate-y-1/2"></div>
        <div className="absolute top-0 right-1/3 w-48 h-48 rounded-full bg-[#d8c3b6] opacity-15 -translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Header with SEO-rich content */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#5f4b44] mb-6 tracking-wide">
            Our Story — The Soul of Aatmya Yoga
          </h1>
          <div className="w-24 h-1 bg-[#c8a798] mx-auto opacity-60 mb-6"></div>
          <p className="text-lg text-[#7a6359] max-w-3xl mx-auto leading-relaxed">
            Discover the journey of Aatmya Yoga - from authentic yoga practices
            to soulful transformations. Join our community for online yoga
            classes, teacher training, and spiritual growth.
          </p>
        </header>

        {/* Story Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Left: Image with SEO optimization */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-[#e8d5c8] rounded-3xl opacity-30 -z-10"></div>
            <div className="absolute -inset-2 border-2 border-[#d8c3b6] rounded-3xl opacity-40 -z-10"></div>
            <img
              src={yogaImage}
              alt="Young woman practicing yoga meditation in peaceful setting - Aatmya Yoga classes"
              className="rounded-2xl shadow-lg w-full h-auto"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 space-y-7 text-[#5a4a42] text-lg leading-relaxed">
            <p>
              <strong className="text-[#9f7164] font-medium tracking-wide">
                AATMYA YOGA
              </strong>{" "}
              emerged from a vision — to bring{" "}
              <em className="italic text-[#7a6359]">
                authentic, soulful yoga practices
              </em>{" "}
              to all, wherever they may be.
            </p>

            <p>
              Our name, <strong className="text-[#8b6b5f]">"Aatmya"</strong>,
              comes from Sanskrit meaning{" "}
              <strong className="font-semibold text-[#7a6359]">
                "connected to the soul"
              </strong>
              . This embodies our purpose — guiding you back to harmony with
              your mind, body, and spirit through traditional yoga.
            </p>

            <blockquote
              className="relative pl-8 py-5 text-[#6d5b53] bg-white/50 rounded-xl border-l-4 border-[#e6a88d] my-6"
              cite="https://www.yogaalliance.org/About_Yoga/History_of_Yoga"
            >
              <span className="absolute text-6xl text-[#e6a88d] opacity-20 top-2 left-4">
                "
              </span>
              <p className="relative z-10 italic font-light text-base md:text-lg">
                Yoga is not just movement, but a sacred dialogue between breath
                and being — a pathway to discover the stillness within motion.
              </p>
            </blockquote>

            <p>
              From beginners to advanced practitioners, our{" "}
              <strong className="text-[#8b6b5f]">
                live online yoga classes
              </strong>
              , <strong className="text-[#8b6b5f]">on-demand sessions</strong>,{" "}
              <strong className="text-[#8b6b5f]">yoga workshops</strong>, and{" "}
              <strong className="text-[#8b6b5f]">yoga teacher training</strong>{" "}
              meet you exactly where you are on your journey.
            </p>

            <p>
              At Aatmya Yoga, we celebrate all bodies, all stories, all souls —
              because true yoga{" "}
              <em className="italic text-[#7a6359]">
                embraces without condition
              </em>
              .
            </p>

            <p>
              We are a community of kindred spirits, walking together toward
              healing and growth — inviting you to experience yoga as{" "}
              <em className="italic text-[#7a6359]">a sacred way of being</em>.
            </p>

            <p className="font-semibold text-[#7a6359] mt-8 text-lg border-t border-[#e8d5c8] pt-6">
              Come home to yourself. The journey begins within.
            </p>
          </div>
        </div>

        {/* Improved Guru Tribute Section */}
        <div className="mt-16 relative">
          {/* Separator */}
          <div className="flex items-center justify-center mb-16">
            <div className="w-20 h-px bg-[#c8a798] opacity-50"></div>
            <div className="w-3 h-3 border-2 border-[#c8a798] rounded-full mx-4 opacity-70"></div>
            <div className="w-20 h-px bg-[#c8a798] opacity-50"></div>
          </div>

          <div className="bg-gradient-to-br from-white to-[#f9f5f0] rounded-3xl shadow-lg overflow-hidden border border-[#e8d5c4]/30">
            <div className="flex flex-col lg:flex-row items-stretch min-h-96">
              {/* Guru Image Section */}
              <div className="lg:w-2/5 bg-gradient-to-br from-[#f1e8e0] to-[#e8d5c4] p-8 flex flex-col items-center justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e6a88d] to-[#d8b6a8]"></div>
                <img
                  src={yogaGuru}
                  alt="Maharshi Patanjali - Father of Yoga and author of Yoga Sutras"
                  className="w-48 h-72 md:w-56 md:h-80 object-contain  "
                  loading="lazy"
                  width={224}
                  height={224}
                />
                <div className="text-center mt-6">
                  <h2 className="text-2xl font-serif font-semibold text-[#5a4a42] mb-2">
                    Maharshi Patanjali
                  </h2>
                  <p className="text-[#7a6359] text-sm uppercase tracking-wider">
                    Father of Classical Yoga
                  </p>
                  <p className="text-[#8b6b5f] text-sm mt-2 max-w-xs">
                    Author of the Yoga Sutras - The foundational text of yoga
                    philosophy
                  </p>
                </div>
              </div>

              {/* Prayer Text Section */}
              <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#5a4a42] mb-3">
                    Prayer to Maharshi Patanjali
                  </h3>
                  <div className="w-16 h-1 bg-[#c8a798] mx-auto opacity-60"></div>
                </div>

                <div className="text-[#6d5b53] leading-relaxed space-y-4 text-center md:text-left">
                  <p className="text-lg font-light">
                    <strong className="text-[#7a6359]">
                      O sage of clarity, Maharshi Patanjali,
                    </strong>
                    <br />
                    Who gifted the science of mind and soul,
                  </p>

                  <p className="font-light">
                    We bow to your wisdom that lights the path of yoga,
                    <br />
                    Guiding seekers from restlessness to stillness.
                  </p>

                  <div className="border-l-4 border-[#e8d5c4] pl-4 my-4">
                    <p className="italic text-[#7a6359]">
                      With faith, discipline, and remembrance,
                      <br />
                      May we walk the way you showed,
                    </p>
                  </div>

                  <p className="font-light">
                    From body to breath, from breath to mind,
                    <br />
                    And from mind to the eternal Self.
                  </p>

                  <p className="text-lg font-light mt-6">
                    <strong className="text-[#7a6359]">
                      O knower of truth, guardian of inner freedom,
                    </strong>
                    <br />
                    We invoke your blessing in every practice,
                  </p>

                  <p className="font-light">
                    May our hearts grow pure, our efforts steady,
                    <br />
                    And may the light of yoga shine through us to the world.
                  </p>
                </div>

                {/* Yoga Sutras Reference */}
                <div className="mt-8 pt-6 border-t border-[#e8d5c4] text-center">
                  <p className="text-sm text-[#8b6b5f] uppercase tracking-wide mb-2">
                    From the Yoga Sutras of Patanjali
                  </p>
                  <p className="text-[#7a6359] italic text-sm">
                    "Yoga is the cessation of the fluctuations of the
                    mind-stuff"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-[#e8d5c4]/30">
          <h3 className="text-2xl font-serif text-[#5a4a42] mb-4">
            Ready to Begin Your Yoga Journey?
          </h3>
          <p className="text-[#7a6359] mb-6 max-w-2xl mx-auto">
            Join Aatmya Yoga today and experience authentic yoga practice that
            connects you with ancient wisdom and modern guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/programs"
              className="bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Our Programs
            </a>
            <a
              href="/contact"
              className="border border-[#9f7164] text-[#7a6359] px-8 py-3 rounded-full font-medium hover:bg-[#9f7164] hover:text-white transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
