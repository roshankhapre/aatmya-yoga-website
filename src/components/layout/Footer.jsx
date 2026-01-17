import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  // Local Business Schema for Yoga Studio
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    name: "Aatmya Yoga",
    description:
      "Professional yoga studio in Indore offering yoga classes for children, teens, adults, teacher training certification, and specialized biomechanics courses",
    url: "https://yourwebsite.com",
    telephone: "+91-82810-94117",
    email: "yogasteni@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Indore",
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
    openingHours: "Mo-Su 06:00-20:00",
    priceRange: "$$",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "22.7196",
        longitude: "75.8577",
      },
      geoRadius: "20000",
    },
    sameAs: [
      "https://www.instagram.com/aatmya_yoga/",
      "https://www.facebook.com/Aatmya.Yoga",
      "https://www.youtube.com/@aatmyayoga_steni",
    ],
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <footer
        role="contentinfo"
        aria-label="Website footer"
        className="bg-[#5a4a42] text-[#e8dfd5] pt-16 pb-8"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-light tracking-wide">
                Aatmya Yoga
              </h2>
              <p className="text-[#c8b6a8] leading-relaxed">
                Professional yoga studio in Indore nurturing harmony between
                body, mind, and spirit through authentic yoga practice. Offering
                specialized programs in yoga biomechanics, children yoga, teen
                yoga, and certified teacher training.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/aatmya_yoga/?hl=en"
                  aria-label="Follow us on Instagram"
                  className="text-[#c8b6a8] hover:text-white transition-colors duration-300"
                >
                  <FaInstagram className="text-xl" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/Aatmya.Yoga"
                  aria-label="Follow us on Facebook"
                  className="text-[#c8b6a8] hover:text-white transition-colors duration-300"
                >
                  <FaFacebook className="text-xl" aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/@aatmyayoga_steni"
                  aria-label="Subscribe to our YouTube channel"
                  className="text-[#c8b6a8] hover:text-white transition-colors duration-300"
                >
                  <FaYoutube className="text-xl" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-light mb-4">
                Yoga Programs
              </h3>
              <ul className="space-y-3" role="list">
                <li>
                  <a
                    href="/children-yoga-training"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Children Yoga (6-12 years)
                  </a>
                </li>
                <li>
                  <a
                    href="/teen-yoga-training"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Teen Yoga (13-18 years)
                  </a>
                </li>
                <li>
                  <a
                    href="/teacher-training"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Teacher Training
                  </a>
                </li>
                <li>
                  <a
                    href="/yoga-biomechanics-course"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Yoga Biomechanics Course
                  </a>
                </li>
                <li>
                  <a
                    href="/workshops"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Yoga Workshops
                  </a>
                </li>
              
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-light mb-4">
                Contact Info
              </h3>
              <ul className="space-y-3" role="list">
                <li className="flex items-start gap-3">
                  <FaEnvelope
                    className="mt-1 text-[#c8b6a8]"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:yogasteni@gmail.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    yogasteni@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone className="mt-1 text-[#c8b6a8]" aria-hidden="true" />
                  <a
                    href="tel:+918281094117"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +91 82810 94117
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    className="mt-1 text-[#c8b6a8]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Yoga Studio in Indore</strong>
                    <br />
                    Madhya Pradesh, India
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-light mb-4">
                Yoga Updates
              </h3>
              <p className="text-[#c8b6a8]">
                Subscribe to our newsletter for yoga tips, workshop
                announcements, biomechanics insights, and mindfulness updates
                from Aatmya Yoga Studio in Indore.
              </p>
              <form
                className="mt-4 flex"
                role="form"
                aria-label="Newsletter subscription"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="px-4 py-2 w-full rounded-l-full bg-[#6d5b53] text-white placeholder-[#c8b6a8] focus:outline-none focus:ring-1 focus:ring-[#c8a798]"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-[#c8a798] hover:bg-[#9f7164] text-[#5a4a42] px-4 py-2 rounded-r-full transition-colors duration-300 font-medium"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div
            className="border-t border-[#6d5b53] my-8"
            aria-hidden="true"
          ></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-[#c8b6a8] text-sm">
            <div className="mb-2 md:mb-0">
              © {new Date().getFullYear()} Aatmya Yoga - Yoga Classes in Indore.
              All rights reserved.
            </div>
            <div className="text-center md:text-right">
              Professional yoga website by{" "}
              <a
                href="https://hiddenleaftechnologies.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-white transition-colors duration-300 underline underline-offset-2"
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
