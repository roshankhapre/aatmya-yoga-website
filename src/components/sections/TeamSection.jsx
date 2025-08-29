import mentorImage from "../../assets/dr-shalini-verma-tonk.jpg";
import kunalImage from "../../assets/kunal-mishra.jpg";
import rajaniImage from "../../assets/dr-rajani-bala.jpg";
import vanshImage from "../../assets/vansh-raghav.jpg";
import roshanImage from "../../assets/roshanImage.png";

import {
  FaLeaf,
  FaWhatsapp,
  FaGlobe,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Shalini Verma Tonk",
      role: "BAMS · Ayurveda Mentor",
      experience: "14+ years in holistic Ayurvedic healing",
      description:
        "Specializes in dosha balancing, detoxification, and natural restoration through classical Ayurvedic principles.",
      image: mentorImage,
    },
    {
      id: 2,
      name: "Kunal Mishra",
      role: "Advanced Yoga Master",
      experience: "6+ years in advanced practices and alignment precision",
      description:
        "Specializes in Hatha yoga and advanced anatomy-based alignment, helping students refine postures and avoid injuries with deeper body awareness.",
      image: kunalImage,
    },
    {
      id: 3,
      name: "Vansh Raghav",
      role: "Ashtanga Vinyasa Yoga Teacher",
      experience: "6+ years teaching traditional Mysore-style yoga",
      description:
        "Guides students through structured Ashtanga sequences with an emphasis on strength, breath coordination, and graceful transitions.",
      image: vanshImage,
    },
    {
      id: 4,
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
      website: "https://www.hiddenleaftechnologies.com/",
      linkedin: "https://linkedin.com/in/roshan-khapre",
      github: "https://github.com/roshankhapre",
      email: "roshan@hiddenleaftechnologies.com",
      location: "India",
    },
  ];

  // Current page URL for canonical tags
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // ✅ Improved JSON-LD Schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aatmya Yoga",
    url: "https://www.aatmayayoga.com",
    logo: "https://www.aatmayayoga.com/logo.png",
    description:
      "Professional yoga training and teacher certification programs",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aatmya Yoga",
    url: "https://www.aatmayayoga.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.aatmayayoga.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Person schema for Roshan (important for your personal SEO)
  const roshanSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Roshan Khapre",
    jobTitle: "UI/UX Designer & Fullstack Developer",
    url: "https://www.hiddenleaftechnologies.com",
    image: "https://www.hiddenleaftechnologies.com/images/roshan-image.jpg",
    sameAs: [
      "https://www.linkedin.com/in/roshan-khapre",
      "https://github.com/roshankhapre",
      "https://wa.me/917089200175",
    ],
    knowsAbout: [
      "Web Development",
      "UI/UX Design",
      "React.js",
      "Node.js",
      "Wellness Technology",
      "Yoga Website Development",
    ],
    description:
      "Freelance UI/UX designer and fullstack developer specializing in creating digital experiences for wellness brands and yoga studios.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
  };

  return (
    <section
      id="team"
      className="py-28 px-6 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ✅ Comprehensive SEO Helmet */}
      <Helmet>
        <title>
          Meet Our Yoga Team Experts | Aatmya Yoga Mentors & Trainers
        </title>
        <meta
          name="description"
          content="Meet the expert team at Aatmya Yoga - Certified yoga instructors, Ayurveda specialists, and wellness mentors. Including Roshan Khapre, UI/UX & Fullstack developer specializing in yoga website development."
        />
        <meta
          name="keywords"
          content="yoga instructors, yoga teachers, Ayurveda experts, yoga website developer, UI/UX designer for wellness, Roshan Khapre, Hidden Leaf Technologies"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:title"
          content="Our Expert Yoga Team - Aatmya Yoga Instructors & Developers"
        />
        <meta
          property="og:description"
          content="Meet our team of certified yoga instructors, Ayurveda experts, and web developers specializing in wellness websites."
        />
        <meta
          property="og:image"
          content="https://www.aatmayayoga.com/team-og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta
          property="twitter:title"
          content="Our Expert Yoga Team - Aatmya Yoga"
        />
        <meta
          property="twitter:description"
          content="Certified yoga instructors, Ayurveda specialists, and wellness website developers."
        />
        <meta
          property="twitter:image"
          content="https://www.aatmayayoga.com/team-twitter-image.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(roshanSchema)}
        </script>
      </Helmet>

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
              itemScope
              itemType="https://schema.org/Person"
              itemProp="member"
            >
              {/* Image */}
              <div className="relative w-full h-72 mb-6 rounded-xl overflow-hidden shadow-inner border border-[#e8d5c4]/50">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Aatmya Yoga`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div>
                <h2
                  className="text-2xl font-serif font-light mb-1 text-[#5a4a42] group-hover:text-[#9f7164] transition-colors duration-500"
                  itemProp="name"
                >
                  {member.name}
                </h2>

                <div
                  className="flex items-center gap-2 text-sm uppercase tracking-wider mb-3 text-[#9f7164]"
                  itemProp="jobTitle"
                >
                  <FaLeaf className="text-xs" />
                  <span>{member.role}</span>
                </div>

                <p
                  className="text-sm mb-4 leading-relaxed border-b pb-4 text-[#7a6359] border-[#e8d5c4]/40"
                  itemProp="experience"
                >
                  {member.experience}
                </p>

                <p
                  className="mb-3 text-sm leading-relaxed text-[#6d5b53]"
                  itemProp="description"
                >
                  {member.description}
                </p>

                {/* Specialties only for Roshan */}
                {member.isDeveloper && member.specialties && (
                  <>
                    <h3 className="text-sm font-semibold mt-4 mb-2 text-[#5a4a42]">
                      Specializations:
                    </h3>
                    <ul
                      className="grid grid-cols-2 gap-2 mb-4"
                      itemProp="knowsAbout"
                    >
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
                        aria-label="Contact Roshan on WhatsApp for website development"
                      >
                        <FaWhatsapp className="text-lg" />
                        WhatsApp
                      </a>
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full text-[#5a4a42] bg-[#f9f5f0] hover:bg-[#f1e6de] transition-colors duration-200 flex-1 justify-center"
                        aria-label="Visit Roshan's Web Development Portfolio"
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
