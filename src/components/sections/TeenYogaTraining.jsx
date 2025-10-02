import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";
import { GiMeditation, GiNotebook } from "react-icons/gi";
import { FaLeaf, FaOm } from "react-icons/fa";
import PageMeta from "../seo/PageMeta";

export default function TeenYogaTraining() {
  // Compare today's date with July 10, 2024
  const today = new Date();
  const earlyBirdEnd = new Date("2024-07-10T23:59:59");
  const isEarlyBird = today < earlyBirdEnd;

  // ✅ SEO Schema Markup
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Teen Yoga Teacher Training - 14-Day YACEP Certified Online Course",
    description:
      "YACEP certified teen yoga teacher training program. Learn to teach yoga to adolescents with specialized techniques for mental health and mindful movement.",
    provider: {
      "@type": "Organization",
      name: "Aatmya Yoga",
      sameAs: "https://www.aatmyayoga.com",
    },
    educationalCredentialAwarded: "YACEP Certification",
    courseCode: "TYTT-14",
    timeToComplete: "P14D",
    coursePrerequisites: "Basic yoga knowledge preferred",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseSchedule: "14 days intensive program",
    },
    offers: {
      "@type": "Offer",
      price: isEarlyBird ? "8000" : "10000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validThrough: "2024-07-10T23:59:59",
    },
    audience: {
      "@type": "Audience",
      audienceType: [
        "Yoga Teachers",
        "School Teachers",
        "Parents",
        "Wellness Coaches",
      ],
    },
    about: {
      "@type": "Thing",
      name: "Teen Yoga Teacher Training",
    },
  };

  // ✅ Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    name: "Aatmya Yoga - Teen Yoga Teacher Training in India",
    description:
      "Professional yoga studio offering YACEP certified teen yoga teacher training online. Specialized in adolescent yoga and mental wellness.",
    url: "https://www.aatmyayoga.com/teen-yoga-training",
    telephone: "+91-82810-94117",
    email: "yogasteni@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "India",
    },
    areaServed: "India",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Teen Yoga Teacher Training",
        description:
          "YACEP certified online course for teaching yoga to teenagers",
      },
    },
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <PageMeta
        title="Teen Yoga Teacher Training Online | 14-Day YACEP Certified Course | Aatmya Yoga"
        description="Become a certified teen yoga teacher with our 14-day YACEP certified online training. Learn specialized techniques for adolescent yoga, mental health, and mindful movement. Enroll now."
        canonical="https://www.aatmyayoga.com/teen-yoga-training"
        schema={[courseSchema, localBusinessSchema]}
      />

      <section
        className="py-20 px-4 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] relative overflow-hidden"
        itemScope
        itemType="https://schema.org/Course"
      >
        {/* Decorative Blurs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-purple-100/10 blur-2xl"></div>
          <div className="absolute bottom-[10%] right-[10%] w-56 h-56 rounded-full bg-pink-100/10 blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* 🔥 Early Bird Ribbon */}
          {isEarlyBird && (
            <div className="relative w-full flex justify-center mb-6">
              <div className="absolute -top-4">
                <span className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-green-600 to-green-700 text-white tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-pulse">
                  <FaStar className="text-yellow-300" />
                  🎉 Early Bird Discount - Save ₹2,000 | Ends July 10th
                </span>
              </div>
            </div>
          )}

          <div className="bg-white/80 backdrop-blur-md border border-white/30 shadow-xl rounded-[2rem] overflow-hidden">
            <div className="p-6 sm:p-10 md:p-16">
              {/* Header with Schema */}
              <div className="text-center mb-12 relative">
                <FaOm className="absolute -top-6 left-1/2 -translate-x-1/2 text-purple-200/60 text-5xl -z-10" />
                <h1
                  className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] tracking-wide"
                  itemProp="name"
                >
                  Teen Yoga Teacher Training
                </h1>
                <p
                  className="text-[#7a6b63] italic text-lg mt-2"
                  itemProp="description"
                >
                  YACEP Certified Online Course - Specialized Training for
                  Adolescent Yoga
                </p>
                <div className="w-20 h-[2px] bg-[#c8a798] opacity-50 mx-auto mt-4 mb-2" />
                <div className="text-sm text-[#7a6b63] uppercase tracking-widest mt-1 flex items-center justify-center gap-2">
                  <FaCertificate className="text-[#9f7164]" />
                  14-Day YACEP Certified Online Course
                </div>
              </div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 gap-10 mb-12">
                {/* What You'll Learn */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#5a4a42]">
                    <GiNotebook className="text-[#9f7164] text-xl" />
                    <h2 className="text-2xl font-serif font-light">
                      What You'll Learn in Teen Yoga Training
                    </h2>
                  </div>
                  <ul className="space-y-4 text-[#6d5b53]">
                    {[
                      "Understanding teen development & psychology through yoga",
                      "Creating safe, engaging yoga classes for adolescents (13-18 years)",
                      "Supporting mental health & emotional wellness through mindful movement",
                      "Building confidence & self-esteem in young practitioners",
                      "Age-appropriate asanas, pranayama & meditation techniques",
                      "Classroom management strategies for teen yoga sessions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#9f7164] mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Program Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#5a4a42]">
                    <FaGraduationCap className="text-[#9f7164] text-xl" />
                    <h2 className="text-2xl font-serif font-light">
                      Program Details
                    </h2>
                  </div>
                  <div className="space-y-4 text-[#6d5b53] text-base">
                    <div className="flex items-center gap-3">
                      <FaClock className="text-[#9f7164] flex-shrink-0" />
                      <span itemProp="timeToComplete">
                        <strong>Duration:</strong> 14 Days Intensive Training
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-[#9f7164] flex-shrink-0" />
                      <span>
                        <strong>Location:</strong> Live Interactive Sessions on
                        Zoom
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaUsers className="text-[#9f7164] flex-shrink-0" />
                      <span>
                        <strong>Batch Size:</strong> Limited to 15 Students
                      </span>
                    </div>

                    {/* FEES with Schema */}
                    <div
                      className="relative mt-4"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <div className="p-4 rounded-xl bg-[#fef7f4] border border-[#e0cfc6] shadow-sm">
                        <div className="flex items-center gap-3">
                          <FaRupeeSign className="text-[#9f7164] flex-shrink-0" />
                          <span className="text-lg text-[#5a4a42] font-medium">
                            <strong>Course Fees:</strong>{" "}
                            {isEarlyBird ? (
                              <>
                                <span
                                  className="text-green-700 font-bold text-xl"
                                  itemProp="price"
                                >
                                  8,000
                                </span>{" "}
                                <span className="line-through text-sm text-[#a79b91] ml-2">
                                  ₹10,000
                                </span>
                                <span className="text-xs text-green-600 block mt-1">
                                  🎉 Early Bird Discount - Save 20% | Ends July
                                  10
                                </span>
                              </>
                            ) : (
                              <>
                                <span
                                  className="text-[#5a4a42] font-bold text-xl"
                                  itemProp="price"
                                >
                                  10,000
                                </span>
                              </>
                            )}
                            <meta itemProp="priceCurrency" content="INR" />
                            <meta
                              itemProp="availability"
                              content="https://schema.org/InStock"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Highlights */}
              <div className="bg-[#f8f2eb] p-6 sm:p-8 rounded-xl border border-[#e8dcd3] mb-10 shadow-sm">
                <div className="flex items-center gap-3 text-[#5a4a42] mb-5">
                  <FaStar className="text-[#9f7164] text-xl" />
                  <h2 className="text-2xl font-serif font-light">
                    Teen Yoga Training Program Highlights
                  </h2>
                </div>
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 text-[#6d5b53] text-[15px]">
                  <li className="flex items-start gap-3">
                    <GiNotebook className="text-[#9f7164] mt-1 flex-shrink-0" />
                    <strong>Expert-Led Training:</strong> Learn from certified
                    yoga instructors with teen specialization
                  </li>
                  <li className="flex items-start gap-3">
                    <GiMeditation className="text-[#9f7164] mt-1 flex-shrink-0" />
                    <strong>Teen Psychology:</strong> Understand adolescent
                    development & classroom dynamics
                  </li>
                  <li className="flex items-start gap-3">
                    <FaGraduationCap className="text-[#9f7164] mt-1 flex-shrink-0" />
                    <strong>YACEP Certification:</strong> Internationally
                    recognized credential to start teaching immediately
                  </li>
                  <li className="flex items-start gap-3">
                    <FaUsers className="text-[#9f7164] mt-1 flex-shrink-0" />
                    <strong>Practical Teaching:</strong> Hands-on experience
                    with live demonstration classes
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCertificate className="text-[#9f7164] mt-1 flex-shrink-0" />
                    <strong>Lifetime Access:</strong> Course materials and
                    updates accessible forever
                  </li>
                  <li className="flex items-start gap-3">
                    <FaLeaf className="text-[#9f7164] mt-1 flex-shrink-0" />
                    <strong>Mindfulness Tools:</strong> Techniques for stress
                    management and emotional regulation
                  </li>
                </ul>
              </div>

              {/* Career Opportunities */}
              <div className="bg-[#f0f7f0] p-6 rounded-xl border border-[#d4e8d4] mb-8">
                <h3 className="text-xl font-semibold text-[#5a4a42] mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-[#9f7164]" />
                  Career Opportunities After Certification
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-[#6d5b53] text-sm">
                  <ul className="space-y-2">
                    <li>• Teen Yoga Teacher in Schools & Colleges</li>
                    <li>• Private Yoga Instructor for Adolescents</li>
                    <li>• Wellness Coach in Educational Institutions</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Online Teen Yoga Classes</li>
                    <li>• Yoga Therapist for Teen Mental Health</li>
                    <li>• Workshop Facilitator for Youth Groups</li>
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-6">
                <p className="text-lg text-[#7a5a50] italic font-serif mb-4">
                  "Empowering teens through yoga creates lifelong healthy habits
                  and emotional resilience."
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                  <a
                    href="https://wa.me/918281094117?text=Hi%2C%20I'm%20interested%20in%20the%20Teen%20Yoga%20Teacher%20Training%20course%20and%20would%20like%20to%20know%20more%20details%20about%20the%20YACEP%20certification%2C%20curriculum%2C%20and%20batch%20timings.%20Thank%20you%20%F0%9F%99%8F"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block bg-gradient-to-r from-[#9f7164] to-[#7a5a50] hover:from-[#8b6358] hover:to-[#6d4f46] text-white px-8 py-4 rounded-full font-semibold tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] text-lg"
                    aria-label="Enroll in Teen Yoga Teacher Training via WhatsApp - +91 82810 94117"
                  >
                    📞 Enroll Now on WhatsApp
                  </a>

                  <a
                    href="tel:+918281094117"
                    className="inline-block border-2 border-[#9f7164] text-[#7a5a50] hover:bg-[#9f7164] hover:text-white px-6 py-4 rounded-full font-medium tracking-wider transition-all duration-300"
                    aria-label="Call Aatmya Yoga for Teen Yoga Training - +91 82810 94117"
                  >
                    📱 Call: +91 82810 94117
                  </a>
                </div>

                <p className="text-sm text-[#7a6b63] mt-4 italic flex items-center justify-center gap-2">
                  <FaUsers className="text-[#9f7164]" />
                  Only 15 seats available • Personalized Guidance • YACEP
                  Certified
                </p>
              </div>
            </div>
          </div>

          {/* Additional SEO Content */}
          <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
            <h2 className="text-3xl font-serif text-center text-[#5a4a42] mb-8">
              Why Choose Our Teen Yoga Teacher Training?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[#6d5b53]">
              <div>
                <h3 className="text-xl font-semibold text-[#5a4a42] mb-4">
                  Comprehensive Curriculum
                </h3>
                <p className="mb-3">
                  Our 14-day intensive program covers everything from teen
                  psychology to practical teaching methodologies. Learn to
                  create engaging, age-appropriate yoga sessions that resonate
                  with adolescents.
                </p>
                <p>
                  Gain expertise in handling classroom dynamics, building
                  rapport with teens, and addressing common challenges in
                  adolescent yoga instruction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#5a4a42] mb-4">
                  YACEP Certification Benefits
                </h3>
                <p className="mb-3">
                  Yoga Alliance Continuing Education Provider (YACEP)
                  certification ensures your credentials are recognized
                  globally. This certification enhances your professional
                  credibility and opens doors to teaching opportunities
                  worldwide.
                </p>
                <p>
                  Join our alumni network of certified teen yoga teachers making
                  a difference in young lives across India and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
