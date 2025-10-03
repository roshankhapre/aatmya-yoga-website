// src/components/sections/ChildrenYogaTraining95.jsx
import {
  FaCheckCircle,
  FaStar,
  FaClock,
  FaAward,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";
import img1 from "../../assets/medium-shot-people-yoga-mat.webp";
import PageMeta from "../seo/PageMeta";

export default function ChildrenYogaTraining95() {
  const highlights = [
    "Yoga Alliance RCYS Certified – Global Recognition",
    "Specialized training in Children's Yoga (ages 3–18)",
    "Storytelling, games & activities for effective teaching",
    "Understanding child psychology & classroom management",
    "Includes lesson planning & sequencing for kids",
    "Blended learning: Online + Live Interactive Sessions",
  ];

  // ✅ WhatsApp CTA
  const whatsappLink =
    "https://wa.me/918281094117?text=Hello%2C%20I%20am%20interested%20in%20the%2095%20Hours%20Children's%20Yoga%20Teacher%20Training%20Program%20in%20Indore.";

  // ✅ Course Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "95 Hours Children's Yoga Teacher Training in Indore",
    description:
      "Yoga Alliance RCYS certified children's yoga teacher training program in Indore. Learn to teach yoga to children ages 3-18 through storytelling, games, and specialized techniques.",
    provider: {
      "@type": "Organization",
      name: "Aatmya Yoga",
      sameAs: [
        "https://www.instagram.com/aatmya_yoga/",
        "https://www.facebook.com/Aatmya.Yoga",
        "https://www.youtube.com/@aatmyayoga_steni",
      ],
    },
    offers: {
      "@type": "Offer",
      category: "Yoga Teacher Training",
      availability: "https://schema.org/InStock",
    },
    courseCode: "RCYS-95",
    numberOfCredits: "95",
    educationalCredentialAwarded: "Yoga Alliance RCYS Certification",
    coursePrerequisites: "Basic yoga knowledge preferred",
    duration: "P8W",
    timeToComplete: "PT95H",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["blended", "online", "in-person"],
      location: {
        "@type": "Place",
        name: "Aatmya Yoga Studio",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          addressCountry: "India",
        },
      },
    },
    about: {
      "@type": "Thing",
      name: "Children's Yoga Teacher Training",
    },
    competencyRequired: "Basic yoga practice",
    audience: {
      "@type": "Audience",
      audienceType: [
        "Yoga Teachers",
        "Parents",
        "School Teachers",
        "Childcare Professionals",
      ],
    },
  };

  // ✅ Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    name: "Aatmya Yoga - Children's Yoga Teacher Training in Indore",
    description:
      "Leading yoga studio in Indore offering RCYS certified children's yoga teacher training programs. Specialized in yoga for kids, teens, and teacher certification.",
    url: "https://www.aatmyayoga.com/children-yoga-training",
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
    areaServed: "Indore and surrounding areas",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "95 Hours Children's Yoga Teacher Training",
        description:
          "Yoga Alliance RCYS certified program for teaching yoga to children",
      },
    },
  };

  // ✅ FAQ Schema
  const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the duration of the Children's Yoga Teacher Training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 95-hour Children's Yoga Teacher Training runs for 8 weeks with flexible online and in-person options in Indore.",
        },
      },
      {
        "@type": "Question",
        name: "Is this Yoga Alliance certified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this is Yoga Alliance RCYS (Registered Children's Yoga School) certified, recognized globally.",
        },
      },
      {
        "@type": "Question",
        name: "Who can join this children's yoga training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yoga teachers, school teachers, parents, childcare professionals, and anyone passionate about children's wellness in Indore can join.",
        },
      },
      {
        "@type": "Question",
        name: "What age groups does this training cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our training covers teaching yoga to children from ages 3 to 18 years with age-appropriate methodologies.",
        },
      },
    ],
  };

  return (
    <>
      {/* ✅ SEO Meta with Schema */}
      <PageMeta
        title="Children's Yoga Teacher Training in Indore | 95 Hours RCYS Certified | Aatmya Yoga"
        description="Yoga Alliance RCYS certified 95-hour Children's Yoga Teacher Training in Indore. Learn specialized techniques for teaching yoga to children ages 3-18. Enroll now."
        canonical="https://www.aatmyayoga.com/children-yoga-training"
        schema={[courseSchema, localBusinessSchema, FAQSchema]}
      />

      {/* ✅ Main Section */}
      <section className="relative bg-gradient-to-b from-[#fdfaf7] to-[#f5eee8] py-36 md:py-36">
        {/* 🔥 Highlight Ribbon */}
        <div className="relative w-full flex justify-center mb-10">
          <div className="absolute -top-5 sm:-top-6">
            <span className="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg bg-gradient-to-r from-[#9f7164] to-[#7a5a50] hover:from-[#8b6358] hover:to-[#6d4f46] text-white tracking-wider hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] animate-pulse">
              <FaStar className="text-yellow-300" />
              Yoga Alliance RCYS Certified – Most Popular Course in Indore
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* ✅ Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-4 md:mb-6 leading-snug"
              itemProp="name"
            >
              95 Hours Children's Yoga Teacher Training in Indore
            </h1>
            <p
              className="text-base sm:text-lg text-[#7a6b63] italic max-w-2xl mx-auto leading-relaxed px-2"
              itemProp="description"
            >
              Yoga Alliance RCYS-certified program in Indore for teachers,
              parents, and yoga practitioners. Learn to teach yoga to children
              ages 3-18 through specialized techniques, storytelling, and
              mindfulness activities.
            </p>
            <div className="w-20 md:w-24 h-[2px] bg-[#c8a798] opacity-50 mx-auto mt-5 md:mt-6"></div>
          </div>

          {/* ✅ Course Card */}
          <div className="relative bg-white border border-[#e6ded7] shadow-xl rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left – Course Info */}
              <div
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-[#5a4a42] mb-5 md:mb-6">
                  Children's Yoga Teacher Training Course Details
                </h2>

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

                {/* ✅ Info Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-10">
                  <div className="bg-[#f9f5f0] border border-[#e6ded7] p-4 sm:p-5 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <FaClock className="mx-auto text-[#c8a798] text-xl mb-2" />
                    <p className="text-xs sm:text-sm text-[#7a6b63]">
                      Duration
                    </p>
                    <p className="font-bold text-[#5a4a42] text-base sm:text-lg">
                      8 Weeks
                    </p>
                  </div>
                  <div className="bg-[#f9f5f0] border border-[#e6ded7] p-4 sm:p-5 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <FaAward className="mx-auto text-[#c8a798] text-xl mb-2" />
                    <p className="text-xs sm:text-sm text-[#7a6b63]">
                      Certification
                    </p>
                    <p className="font-bold text-[#5a4a42] text-base sm:text-lg">
                      Yoga Alliance RCYS
                    </p>
                  </div>
                  <div className="bg-[#f9f5f0] border border-[#e6ded7] p-4 sm:p-5 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <FaMapMarkerAlt className="mx-auto text-[#c8a798] text-xl mb-2" />
                    <p className="text-xs sm:text-sm text-[#7a6b63]">
                      Location
                    </p>
                    <p className="font-bold text-[#5a4a42] text-base sm:text-lg">
                      Indore, MP
                    </p>
                  </div>
                </div>

                {/* ✅ Audience */}
                <div className="bg-[#f0f7f0] border border-[#d4e8d4] p-4 rounded-xl mb-6">
                  <h3 className="font-semibold text-[#5a4a42] mb-2 flex items-center">
                    <FaUsers className="text-[#c8a798] mr-2" />
                    Perfect For:
                  </h3>
                  <p className="text-sm text-[#6a5c55]">
                    Yoga Teachers • School Teachers • Parents • Childcare
                    Professionals • Anyone passionate about children's wellness
                    in Indore
                  </p>
                </div>

                {/* ✅ CTA */}
                <div className="text-center sm:text-left">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block bg-gradient-to-r from-[#9f7164] to-[#7a5a50] hover:from-[#8b6358] hover:to-[#6d4f46] text-white px-10 py-3 rounded-full font-medium tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
                  >
                    Enroll Now - WhatsApp +91 82810 94117
                  </a>
                  <p className="text-xs text-[#7a6b63] mt-2">
                    Limited seats available for next batch in Indore
                  </p>
                </div>
              </div>

              {/* ✅ Right – Course Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src={img1}
                  alt="RCYS Certified Children's Yoga Teacher Training Course in Indore - Aatmya Yoga Studio"
                  className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg border border-[#e6ded7] object-cover"
                  width="400"
                  height="300"
                  loading="lazy"
                />
              </div>
            </div>

            {/* ✅ Extra SEO Content */}
            <div className="mt-12 pt-8 border-t border-[#e6ded7]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#6a5c55]">
                <div>
                  <h3 className="text-lg font-semibold text-[#5a4a42] mb-4">
                    Why Choose Our Children's Yoga Training in Indore?
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • Only Yoga Alliance RCYS certified program in Central
                      India
                    </li>
                    <li>• Practical teaching experience with real children</li>
                    <li>
                      • Comprehensive curriculum covering all age groups (3-18
                      years)
                    </li>
                    <li>
                      • Flexible learning options: online and in-person in
                      Indore
                    </li>
                    <li>• Lifetime access to updated teaching materials</li>
                    <li>• Job placement assistance for certified teachers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#5a4a42] mb-4">
                    Career Opportunities After Certification
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Children's Yoga Teacher in schools across Indore</li>
                    <li>• Start your own kids yoga classes</li>
                    <li>• Yoga instructor in preschools and daycare centers</li>
                    <li>• Corporate wellness programs for families</li>
                    <li>• Online children's yoga sessions</li>
                    <li>• International teaching opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ✅ FAQ Section */}
            <div className="mt-16 bg-[#f9f5f0] rounded-2xl p-8 border border-[#e6ded7]">
              <h2 className="text-3xl font-serif text-center text-[#5a4a42] mb-8">
                Frequently Asked Questions - Children's Yoga Training
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-[#6d5b53]">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#5a4a42] mb-2">
                      What is the duration of the Children's Yoga Teacher
                      Training?
                    </h3>
                    <p className="text-sm">
                      The 95-hour Children's Yoga Teacher Training runs for 8
                      weeks with flexible online and in-person options in
                      Indore.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#5a4a42] mb-2">
                      Is this Yoga Alliance certified?
                    </h3>
                    <p className="text-sm">
                      Yes, this is Yoga Alliance RCYS (Registered Children's
                      Yoga School) certified, recognized globally.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#5a4a42] mb-2">
                      Who can join this children's yoga training?
                    </h3>
                    <p className="text-sm">
                      Yoga teachers, school teachers, parents, childcare
                      professionals, and anyone passionate about children's
                      wellness in Indore can join.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#5a4a42] mb-2">
                      What age groups does this training cover?
                    </h3>
                    <p className="text-sm">
                      Our training covers teaching yoga to children from ages 3
                      to 18 years with specialized methodologies for each stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Internal Linking Section */}
            <div className="mt-12 text-center">
              <p className="text-[#6d5b53] mb-4">
                <strong>Explore More Yoga Programs:</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/teen-yoga-training"
                  className="text-[#9f7164] hover:text-[#7a5a50] underline"
                >
                  Teen Yoga Training
                </a>
                <a
                  href="/teacher-training"
                  className="text-[#9f7164] hover:text-[#7a5a50] underline"
                >
                  Teacher Training
                </a>
                <a
                  href="/blog"
                  className="text-[#9f7164] hover:text-[#7a5a50] underline"
                >
                  Yoga Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
