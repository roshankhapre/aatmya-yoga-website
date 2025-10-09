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
  FaHeart,
  FaShieldAlt,
  FaBookOpen,
  FaChalkboardTeacher,
  FaHandHoldingHeart,
  FaBrain,
  FaLaptop,
  FaAward,
  FaLeaf,
  FaSeedling,
  FaUserFriends,
  FaRegSmileBeam,
} from "react-icons/fa";
import { GiMeditation, GiNotebook, GiThreeLeaves } from "react-icons/gi";
import { MdSelfImprovement, MdPsychology } from "react-icons/md";
import PageMeta from "../seo/PageMeta";

export default function TeenYogaTraining() {
  // Compare today's date with July 10, 2024
  const today = new Date();
  const earlyBirdEnd = new Date("2024-07-10T23:59:59");
  const isEarlyBird = today < earlyBirdEnd;

  // Schema definitions (same as before)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Teen Yoga Teacher Training - 14-Day YACEP Certified Online Course",
    description:
      "YACEP certified teen yoga teacher training program. Learn to teach yoga to adolescents with specialized techniques for mental health and mindful movement.",
    url: "https://www.aatmyayoga.com/teen-yoga-training",
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
      <PageMeta
        title="Teen Yoga Teacher Training Online from Indore | 14-Day YACEP Certified | Aatmya Yoga"
        description="Become a certified teen yoga teacher with our 14-day YACEP certified online training from Indore, Madhya Pradesh. Learn adolescent yoga techniques for mental health and mindful movement. India's best teen yoga certification."
        canonical="https://www.aatmyayoga.com/teen-yoga-training"
        schema={[courseSchema, localBusinessSchema, TeenFAQSchema]}
      />

      <section className="min-h-screen bg-gradient-to-br from-[#fefcf8] via-[#f9f5f0] to-[#f1e8e0] relative overflow-hidden py-10">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-5 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-100/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-green-100/10 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/3 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Early Bird Banner */}
              {isEarlyBird && (
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                      <div className="flex items-center gap-3 text-sm sm:text-base font-semibold">
                        <FaStar className="text-yellow-300 animate-bounce" />
                        <span>🎉 Early Bird Discount - Save ₹2,000</span>
                        <span className="hidden sm:inline">
                          | Ends July 10th
                        </span>
                        <FaStar className="text-yellow-300 animate-bounce" />
                      </div>
                    </div>
                    {/* Ribbon ends */}
                    <div className="absolute -bottom-2 left-4 w-3 h-3 bg-green-700 rotate-45"></div>
                    <div className="absolute -bottom-2 right-4 w-3 h-3 bg-green-700 rotate-45"></div>
                  </div>
                </div>
              )}

              {/* Main Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-[#9f7164] text-sm uppercase tracking-wider font-semibold mb-6">
                  <GiThreeLeaves className="text-lg" />
                  <span>YACEP Certified Program</span>
                  <GiThreeLeaves className="text-lg" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#5a4a42] mb-6 leading-tight">
                  Teen Yoga Teacher
                  <br />
                  <span className="bg-gradient-to-r from-[#9f7164] to-[#7a5a50] bg-clip-text text-transparent">
                    Training
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-[#7a6b63] max-w-3xl mx-auto leading-relaxed">
                  Transform young lives through specialized yoga training.
                  Become a certified teen yoga instructor with our 14-day
                  intensive program.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <div className="flex items-center gap-2 text-[#7a6359] bg-white/80 px-4 py-2 rounded-full border border-[#e8d5c4]">
                    <FaCertificate className="text-[#9f7164]" />
                    <span className="text-sm font-medium">YACEP Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#7a6359] bg-white/80 px-4 py-2 rounded-full border border-[#e8d5c4]">
                    <FaClock className="text-[#9f7164]" />
                    <span className="text-sm font-medium">
                      14 Days Intensive
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#7a6359] bg-white/80 px-4 py-2 rounded-full border border-[#e8d5c4]">
                    <FaLaptop className="text-[#9f7164]" />
                    <span className="text-sm font-medium">Live Online</span>
                  </div>
                </div>
              </div>

              {/* Main Content Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                <div className="p-6 sm:p-8 lg:p-12">
                  {/* Features Grid */}
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    {/* What You'll Learn */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#9f7164] to-[#7a5a50] rounded-2xl flex items-center justify-center">
                          <GiNotebook className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#5a4a42]">
                          What You'll Master
                        </h2>
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            icon: MdPsychology,
                            text: "Teen psychology & developmental stages",
                          },
                          {
                            icon: FaHandHoldingHeart,
                            text: "Emotional wellness & mindfulness techniques",
                          },
                          {
                            icon: FaBrain,
                            text: "Mental health support through yoga",
                          },
                          {
                            icon: FaRegSmileBeam,
                            text: "Building confidence & self-esteem",
                          },
                          {
                            icon: GiMeditation,
                            text: "Age-appropriate asanas & pranayama",
                          },
                          {
                            icon: FaChalkboardTeacher,
                            text: "Classroom management for teens",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#f9f5f0] transition-colors duration-200"
                          >
                            <item.icon className="text-[#9f7164] text-lg mt-0.5 flex-shrink-0" />
                            <span className="text-[#6d5b53] leading-relaxed">
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Program Details */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#9f7164] to-[#7a5a50] rounded-2xl flex items-center justify-center">
                          <FaGraduationCap className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#5a4a42]">
                          Program Details
                        </h2>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-[#f9f5f0] to-[#e8d5c4] rounded-2xl p-6 border border-[#e8d5c4]">
                          <div className="grid sm:grid-cols-2 gap-4 text-[#6d5b53]">
                            <div className="flex items-center gap-3">
                              <FaClock className="text-[#9f7164] text-lg" />
                              <div>
                                <div className="font-semibold text-[#5a4a42]">
                                  Duration
                                </div>
                                <div className="text-sm">14 Days Intensive</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <FaLaptop className="text-[#9f7164] text-lg" />
                              <div>
                                <div className="font-semibold text-[#5a4a42]">
                                  Format
                                </div>
                                <div className="text-sm">Live Online</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <FaUsers className="text-[#9f7164] text-lg" />
                              <div>
                                <div className="font-semibold text-[#5a4a42]">
                                  Batch Size
                                </div>
                                <div className="text-sm">Limited to 15</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <FaAward className="text-[#9f7164] text-lg" />
                              <div>
                                <div className="font-semibold text-[#5a4a42]">
                                  Certification
                                </div>
                                <div className="text-sm">YACEP</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Card */}
                        <div className="bg-gradient-to-br from-[#fef7f4] to-[#f9e9e1] rounded-2xl p-6 border-2 border-[#e8d5c4] shadow-lg">
                          <div className="text-center mb-4">
                            <div className="flex items-center justify-center gap-2 text-[#5a4a42] mb-2">
                              <FaRupeeSign className="text-[#9f7164]" />
                              <span className="font-semibold text-lg">
                                Course Investment
                              </span>
                            </div>

                            {isEarlyBird ? (
                              <div className="space-y-2">
                                <div className="flex items-center justify-center gap-3">
                                  <span className="text-3xl font-bold text-green-700">
                                    ₹8,000
                                  </span>
                                  <span className="text-lg text-[#a79b91] line-through">
                                    ₹10,000
                                  </span>
                                </div>
                                <div className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full inline-block">
                                  🎉 You Save ₹2,000 (20% Off)
                                </div>
                                <div className="text-xs text-[#9f8e84] mt-2">
                                  Early bird ends July 10, 2024
                                </div>
                              </div>
                            ) : (
                              <div className="text-3xl font-bold text-[#5a4a42]">
                                ₹10,000
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Highlights */}
                  <div className="bg-gradient-to-br from-[#f8f2eb] to-[#f1e8e0] rounded-2xl p-6 sm:p-8 border border-[#e8dcd3] mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#9f7164] to-[#7a5a50] rounded-xl flex items-center justify-center">
                        <FaStar className="text-white text-lg" />
                      </div>
                      <h2 className="text-2xl font-serif font-light text-[#5a4a42]">
                        Why Choose Our Training?
                      </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          icon: FaChalkboardTeacher,
                          title: "Expert Instructors",
                          desc: "Learn from certified teen yoga specialists",
                        },
                        {
                          icon: FaBookOpen,
                          title: "Comprehensive Curriculum",
                          desc: "Teen psychology + teaching methodology",
                        },
                        {
                          icon: FaCertificate,
                          title: "YACEP Certified",
                          desc: "Globally recognized certification",
                        },
                        {
                          icon: FaUserFriends,
                          title: "Small Batch Size",
                          desc: "Personalized attention & mentorship",
                        },

                        {
                          icon: FaHeart,
                          title: "Community Support",
                          desc: "Join our alumni network",
                        },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="bg-white/80 rounded-xl p-4 border border-[#e8d5c4] hover:border-[#9f7164] transition-all duration-300 group"
                        >
                          <feature.icon className="text-2xl text-[#9f7164] mb-3 group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="font-semibold text-[#5a4a42] mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-[#6d5b53] leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Opportunities */}
                  <div className="bg-gradient-to-br from-[#f0f7f0] to-[#e8f5e8] rounded-2xl p-6 border border-[#d4e8d4] mb-8">
                    <h3 className="text-xl font-semibold text-[#5a4a42] mb-4 flex items-center gap-3">
                      <FaGraduationCap className="text-[#9f7164]" />
                      Your Career After Certification
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        {[
                          "Teen Yoga Teacher in Schools & Colleges",
                          "Private Yoga Instructor for Adolescents",
                          "Wellness Coach in Educational Institutions",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <FaLeaf className="text-green-600 flex-shrink-0" />
                            <span className="text-[#6d5b53] text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {[
                          "Online Teen Yoga Classes",
                          "Yoga Therapist for Teen Mental Health",
                          "Workshop Facilitator for Youth Groups",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <FaSeedling className="text-green-600 flex-shrink-0" />
                            <span className="text-[#6d5b53] text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-[#f9f5f0] to-[#e8d5c4] rounded-2xl p-8 border border-[#e8d5c4] mb-6">
                      <p className="text-lg sm:text-xl text-[#7a5a50] italic font-serif mb-6 leading-relaxed">
                        "Empower the next generation with yoga. Transform teen
                        lives through mindful movement and emotional wellness."
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                          href="https://wa.me/918281094117?text=Hi%2C%20I'm%20interested%20in%20the%20Teen%20Yoga%20Teacher%20Training%20course%20and%20would%20like%20to%20know%20more%20details%20about%20the%20YACEP%20certification%2C%20curriculum%2C%20and%20batch%20timings.%20Thank%20you%20%F0%9F%99%8F"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9f7164] to-[#7a5a50] hover:from-[#8b6358] hover:to-[#6d4f46] text-white px-8 py-4 rounded-full font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg min-w-[200px] justify-center"
                        >
                          <span> Enroll Now</span>
                        </a>

                        <a
                          href="tel:+918281094117"
                          className="inline-flex items-center gap-3 border-2 border-[#9f7164] text-[#7a5a50] hover:bg-[#9f7164] hover:text-white px-6 py-4 rounded-full font-medium tracking-wide transition-all duration-300 min-w-[180px] justify-center"
                        >
                          <span> Call Now</span>
                        </a>
                      </div>

                      <p className="text-sm text-[#7a6b63] mt-6 flex items-center justify-center gap-2 flex-wrap">
                        <FaUsers className="text-[#9f7164]" />
                        <span>
                          Only 15 seats per batch • Personalized mentorship •
                          YACEP Certified
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                <h2 className="text-3xl font-serif text-center text-[#5a4a42] mb-12">
                  Frequently Asked Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {[
                      {
                        question: "How long is the Teen Yoga Teacher Training?",
                        answer:
                          "The Teen Yoga Teacher Training is a 14-day intensive online program with live interactive sessions on Zoom, designed for comprehensive learning.",
                      },
                      {
                        question: "What certification will I receive?",
                        answer:
                          "You will receive YACEP (Yoga Alliance Continuing Education Provider) certification upon completion, recognized internationally.",
                      },
                    ].map((faq, index) => (
                      <div
                        key={index}
                        className="bg-[#f9f5f0] rounded-2xl p-6 border border-[#e8d5c4]"
                      >
                        <h3 className="text-lg font-semibold text-[#5a4a42] mb-3 flex items-center gap-2">
                          <FaCheckCircle className="text-[#9f7164] text-sm" />
                          {faq.question}
                        </h3>
                        <p className="text-[#6d5b53] text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        question: "Is this course suitable for beginners?",
                        answer:
                          "Basic yoga knowledge is preferred, but the course is designed for yoga teachers, school teachers, parents, and wellness coaches at various experience levels.",
                      },
                      {
                        question: "What age group does teen yoga cover?",
                        answer:
                          "Our teen yoga training focuses on adolescents aged 13-18 years with specialized techniques and methodologies tailored for this specific age group.",
                      },
                    ].map((faq, index) => (
                      <div
                        key={index}
                        className="bg-[#f9f5f0] rounded-2xl p-6 border border-[#e8d5c4]"
                      >
                        <h3 className="text-lg font-semibold text-[#5a4a42] mb-3 flex items-center gap-2">
                          <FaCheckCircle className="text-[#9f7164] text-sm" />
                          {faq.question}
                        </h3>
                        <p className="text-[#6d5b53] text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="mt-12 text-center">
                <p className="text-[#6d5b53] mb-6 text-lg">
                  Explore More Yoga Programs
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    {
                      name: "Yoga Teacher Training",
                      href: "/teacher-training",
                    },
                    { name: "Kids Yoga Training", href: "/kids-yoga-training" },
                    { name: "Workshops", href: "/workshops" },
                    { name: "Blog", href: "/blog" },
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[#9f7164] hover:text-[#7a5a50] underline hover:no-underline transition-all duration-300 font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
