import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    name: "Aatmya Yoga",
    description:
      "Professional yoga studio in Indore offering yoga classes, teacher training, biomechanics courses and wellness programs",
    url: "https://yourwebsite.com",
    telephone: "+91-82810-94117",
    email: "yogasteni@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.7196",
      longitude: "75.8577",
    },
    sameAs: [
      "https://www.instagram.com/aatmya_yoga/",
      "https://www.facebook.com/Aatmya.Yoga",
      "https://www.youtube.com/@aatmyayoga_steni",
    ],
  };

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <footer className="bg-[#5a4a42] text-[#e8dfd5] pt-16 pb-8">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* ================= GRID SECTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-light">
                Aatmya Yoga
              </h2>

              <p className="text-[#c8b6a8] leading-relaxed">
                Professional yoga studio in Indore nurturing harmony between
                body, mind, and spirit through authentic yoga practice.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/aatmya_yoga/"
                  className="hover:text-white transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/Aatmya.Yoga"
                  className="hover:text-white transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/@aatmyayoga_steni"
                  className="hover:text-white transition"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="mb-4 font-serif text-lg">
                Yoga Programs
              </h3>

              <ul className="space-y-2 text-[#c8b6a8]">
                <li>
                  <a href="/children-yoga-training" className="hover:text-white">
                    Children Yoga
                  </a>
                </li>
                <li>
                  <a href="/teen-yoga-training" className="hover:text-white">
                    Teen Yoga
                  </a>
                </li>
                <li>
                  <a href="/teacher-training" className="hover:text-white">
                    Teacher Training
                  </a>
                </li>
                <li>
                  <a href="/yoga-biomechanics-course" className="hover:text-white">
                    Biomechanics Course
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 font-serif text-lg">
                Contact
              </h3>

              <ul className="space-y-3 text-[#c8b6a8]">
                <li className="flex gap-2 items-start">
                  <FaEnvelope className="mt-1" />
                  yogasteni@gmail.com
                </li>

                <li className="flex gap-2 items-start">
                  <FaPhone className="mt-1" />
                  +91 82810 94117
                </li>

                <li className="flex gap-2 items-start">
                  <FaMapMarkerAlt className="mt-1" />
                  Indore, Madhya Pradesh
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 font-serif text-lg">
                Yoga Updates
              </h3>

              <p className="text-[#c8b6a8] mb-4">
                Get yoga tips, workshops and TTC updates.
              </p>

              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-full bg-[#6d5b53] text-white placeholder-[#c8b6a8]"
                />
                <button className="bg-[#c8a798] px-4 rounded-r-full">
                  Join
                </button>
              </form>
            </div>

          </div>

          {/* ================= DIVIDER ================= */}
          <div className="border-t border-[#6d5b53] my-8" />

          {/* ================= BOTTOM BAR ================= */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[#c8b6a8]">

            {/* Left */}
            <div>
              © {new Date().getFullYear()} Aatmya Yoga. All rights reserved.
            </div>

            {/* Center Policies */}
            <div className="flex gap-3">
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="/terms-conditions" className="hover:text-white transition">
                Terms
              </a>
              <span>|</span>
              <a href="/refund-policy" className="hover:text-white transition">
                Refund
              </a>
            </div>

            {/* Right Credit */}
            <div>
              Website by{" "}
              <a
                href="https://hiddenleaftechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Hidden Leaf Technologies
              </a>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}
