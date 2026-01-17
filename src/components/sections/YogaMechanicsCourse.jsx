import {
  FaWhatsapp,
  FaCheckCircle,
  FaClock,
  FaRupeeSign,
  FaCertificate,
  FaUsers,
  FaLeaf,
  FaStar,
  FaLock,
  FaUnlock,
} from "react-icons/fa";
import { MdOutlineSpa } from "react-icons/md";

export default function YogaBiomechanicsCourse() {
  const handleEnrollClick = () => {
    const phoneNumber = "+918281094117"; // Your WhatsApp number
    const message =
      "Hi! I'm interested in enrolling in the Yoga Biomechanics Course. Please share more details.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918281094117"; // Your WhatsApp number
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const courseBenefits = [
    "Understand how the body really moves in yoga",
    "Learn safe alignment based on joints & bones, not guesswork",
    "Prevent common yoga injuries (knees, back, shoulders, neck)",
    "Improve cueing, corrections & adjustments",
    "Master stability vs mobility principles in asanas",
    "Apply muscle actions – concentric, eccentric & isometric",
    "Create injury-aware modifications & variations",
    "Teach yoga with confidence, logic & scientific clarity",
    "Enhance movement efficiency & energy conservation",
    "Bridge traditional yoga with modern anatomy & science",
    "Essential knowledge for TTCs & advanced teachers",
    "Stand out as a professional, knowledge-based yoga teacher",
  ];

  const curriculumModules = [
    {
      week: "Module 1",
      title: "Fundamentals of Biomechanics",
      topics: [
        "Day 1: Introduction to Biomechanics in Yoga",
        "Day 2: Planes of Movement",
        "Day 3: Muscle Actions in Yoga",
        "Day 4: Stability vs Mobility Principle",
        "Day 5: Load, Leverage & Movement Efficiency",
      ],
      isUnlocked: true,
      description: "Build your foundation with core biomechanics principles",
    },
    {
      week: "Module 2",
      title: "Joint Biomechanics & Functional Movement",
      isUnlocked: false,
      description: "Apply principles to advanced asanas and teaching scenarios",
    },
    {
      week: "Module 3",
      title: " Functional Anatomy Applied to Yoga",
      isUnlocked: false,
      description: "Learn to prevent and modify for common yoga injuries",
    },
    {
      week: "Module 4",
      title: "Biomechanics in Asana Practice",
      isUnlocked: false,
      description: "Develop confidence in biomechanics-based teaching",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Yoga Teacher",
      text: "This course transformed how I teach. The biomechanics knowledge is invaluable!",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      role: "Fitness Instructor",
      text: "Best investment in my teaching career. The stability vs mobility module alone was worth it.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      role: "Studio Owner",
      text: "My students noticed immediate improvement in their practice after I completed this course.",
      rating: 5,
    },
  ];

  const targetAudience = [
    "Yoga teachers & TTC trainees",
    "Fitness trainers & movement coaches",
    "Kids yoga & therapeutic yoga teachers",
    "Anyone serious about safe & effective movement",
    "Advanced practitioners seeking deeper understanding",
    "Yoga studio owners & teacher trainers",
  ];

  const upcomingBatches = [
    {
      date: "March 16, 2026",
      seats: "Limited Seats Available",
      status: "Open for Enrollment",
    },
    {
      date: "May 18, 2026",
      seats: "Early Bird Open",
      status: "Register Now",
    },
  ];

  return (
    <section
      id="yoga-biomechanics"
      className="py-28 px-6 bg-gradient-to-b from-[#f9f5f0] via-white to-[#f9f5f0] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-50/50 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-50/50 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-[#c8a798]/20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-[#9f7164]/20 animate-pulse delay-300"></div>
      </div>

      {/* Floating Om Symbol */}
      <div className="absolute top-10 right-10 text-[#e8d5c8] text-6xl opacity-10 rotate-12">
        <MdOutlineSpa />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-emerald-50 border border-[#e8d5c4]/60 shadow-sm">
            <FaLeaf className="text-[#9f7164] text-sm" />
            <span className="text-sm font-medium text-[#7a6359]">
              Science-Based Yoga Training
            </span>
          </div>
        </div>

        {/* Main Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#5a4a42] mb-4 tracking-tight">
            Yoga <span className="text-[#9f7164]">Biomechanics</span> Mastery
          </h1>
          <p className="text-xl text-[#7a6b63] max-w-3xl mx-auto leading-relaxed">
            Bridge Traditional Yoga with Modern Science for Safe & Effective
            Teaching
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-200 via-[#c8a798] to-emerald-200 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Highlight Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e8d5c4]/40 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FaClock className="text-[#9f7164]" />
                  <span className="text-sm font-medium text-[#5a4a42]">
                    Duration
                  </span>
                </div>
                <div className="text-xl font-serif font-light text-[#5a4a42]">
                  1 Month
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e8d5c4]/40 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FaRupeeSign className="text-[#9f7164]" />
                  <span className="text-sm font-medium text-[#5a4a42]">
                    Investment
                  </span>
                </div>
                <div className="text-xl font-serif font-light text-[#5a4a42]">
                  <span className="text-2xl font-normal">₹15,000</span>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e8d5c4]/40 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FaCertificate className="text-[#9f7164]" />
                  <span className="text-sm font-medium text-[#5a4a42]">
                    Certificate
                  </span>
                </div>
                <div className="text-xl font-serif font-light text-[#5a4a42]">
                  Included
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e8d5c4]/40 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FaUsers className="text-[#9f7164]" />
                  <span className="text-sm font-medium text-[#5a4a42]">
                    Batch Size
                  </span>
                </div>
                <div className="text-xl font-serif font-light text-[#5a4a42]">
                  Max 15
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#e8d5c4]/40 shadow-sm">
              <h2 className="text-2xl font-serif font-light text-[#5a4a42] mb-6">
                Course Overview
              </h2>
              <p className="text-[#6d5b53] leading-relaxed mb-6">
                The Yoga Biomechanics Mastery course is designed for serious
                yoga practitioners and teachers who want to understand the
                science behind movement. This intensive program bridges
                traditional yoga wisdom with modern biomechanics, providing
                evidence-based tools to teach safely, prevent injuries, and
                enhance practice effectiveness.
              </p>

              {/* Target Audience */}
              <div className="bg-gradient-to-r from-[#f0f7f0] to-[#f9f5f0] rounded-xl p-6 border border-[#d4e8d4] mb-8">
                <h3 className="text-xl font-serif font-light text-[#5a4a42] mb-4 flex items-center gap-2">
                  <FaUsers className="text-[#9f7164]" />
                  Who This Course Is For:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {targetAudience.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <FaStar className="text-amber-500 mt-1 flex-shrink-0 text-sm" />
                      <span className="text-[#6d5b53] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <h3 className="text-xl font-serif font-light text-[#5a4a42] mb-4">
                Benefits of Learning Biomechanics ✨️
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {courseBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-[#6d5b53]">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Curriculum */}
              <h3 className="text-xl font-serif font-light text-[#5a4a42] mb-4">
                Complete Curriculum (4 Modules)
              </h3>
              <div className="space-y-4 mb-8">
                {curriculumModules.map((module, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-5 border shadow-sm transition-all duration-300 ${
                      module.isUnlocked
                        ? "bg-gradient-to-r from-white to-[#f9f5f0] border-[#e8d5c4]"
                        : "bg-gradient-to-r from-[#f5f5f5] to-[#f0f0f0] border-[#e0e0e0]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${module.isUnlocked ? "bg-gradient-to-r from-[#9f7164] to-[#c8a798]" : "bg-gradient-to-r from-gray-400 to-gray-500"}`}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h4
                              className={`font-bold text-lg ${module.isUnlocked ? "text-[#5a4a42]" : "text-gray-600"}`}
                            >
                              {module.title}
                            </h4>
                            {!module.isUnlocked && (
                              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                <FaLock className="text-gray-500 text-xs" />
                                <span className="text-xs text-gray-500">
                                  Locked
                                </span>
                              </div>
                            )}
                            {module.isUnlocked && (
                              <div className="flex items-center gap-1 bg-emerald-100 px-2 py-1 rounded-full">
                                <FaUnlock className="text-emerald-600 text-xs" />
                                <span className="text-xs text-emerald-600">
                                  Preview Available
                                </span>
                              </div>
                            )}
                          </div>
                          <p
                            className={`text-sm mb-3 ${module.isUnlocked ? "text-[#7a6359]" : "text-gray-500"}`}
                          >
                            {module.description}
                          </p>

                          {/* Show topics only for unlocked module */}
                          {module.isUnlocked && module.topics && (
                            <div className="bg-white/50 rounded-lg p-4 border border-[#e8d5c4]/30">
                              <h5 className="font-medium text-[#5a4a42] mb-2">
                                What You'll Learn:
                              </h5>
                              <ul className="space-y-1">
                                {module.topics.map((topic, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-[#6d5b53] flex items-start gap-2"
                                  >
                                    <span className="text-[#9f7164] mt-1">
                                      🗓
                                    </span>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center bg-gradient-to-r from-amber-50/50 to-amber-100/30 rounded-xl p-4 border border-amber-200/40">
                <p className="text-[#7a6359]">
                  <span className="font-semibold">🔓 Unlock All Modules:</span>{" "}
                  Enroll now to access the complete curriculum including Modules
                  2, 3, and 4
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="space-y-8">
            {/* Enrollment Card */}
            <div className="sticky top-24 bg-gradient-to-b from-white to-[#f9f5f0] rounded-2xl p-8 border border-[#e8d5c4]/50 shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100/80 to-emerald-100/80 border border-amber-200/50 mb-4">
                  <FaStar className="text-amber-500 text-sm" />
                  <span className="text-sm font-medium text-[#7a6359]">
                    Early Bird Enrollment Open
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-2">
                  Secure Your Spot
                </h3>
                <div className="text-4xl font-light text-[#5a4a42] mb-4">
                  ₹15,000
                </div>

                {/* Upcoming Batches */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-[#5a4a42] mb-3">
                    Upcoming Batches:
                  </h4>
                  <div className="space-y-3">
                    {upcomingBatches.map((batch, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-[#f9f5f0] to-white rounded-lg p-3 border border-[#e8d5c4]/40"
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-left">
                            <p className="font-medium text-[#5a4a42]">
                              {batch.date}
                            </p>
                            <p className="text-xs text-[#7a6b63]">
                              {batch.seats}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${index === 0 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                          >
                            {batch.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleEnrollClick}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#9f7164] to-[#c8a798] text-white rounded-full text-lg font-medium hover:from-[#8c6558] hover:to-[#b49684] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95"
                >
                  <FaCertificate className="text-xl" />
                  Enroll Now
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-lg font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95"
                >
                  <FaWhatsapp className="text-2xl" />
                  WhatsApp for Details
                </button>
              </div>

              {/* Bonuses */}
              <div className="mt-8 pt-8 border-t border-[#e8d5c4]/40">
                <h4 className="text-lg font-medium text-[#5a4a42] mb-4">
                  Enrollment Includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <FaCheckCircle className="text-amber-600 text-sm" />
                    </div>
                    <span className="text-[#6d5b53]">
                      Complete 4-Module Curriculum
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaCheckCircle className="text-blue-600 text-sm" />
                    </div>
                    <span className="text-[#6d5b53]">
                      Personalized Mentorship Sessions
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                      <FaCheckCircle className="text-purple-600 text-sm" />
                    </div>
                    <span className="text-[#6d5b53]">
                      Teaching Practice & Feedback
                    </span>
                  </li>
                </ul>
              </div>

              {/* Countdown Timer */}
              <div className="mt-8 bg-gradient-to-r from-amber-50/80 to-amber-100/50 rounded-xl p-4 border border-amber-200/50">
                <p className="text-sm text-[#7a6359] text-center font-medium">
                  ⏰ March batch filling fast - Limited seats available
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#e8d5c4]/40 shadow-sm">
              <h3 className="text-xl font-serif font-light text-[#5a4a42] mb-6 text-center">
                Student Feedback
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#c8a798] pl-4 py-2"
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-amber-400 text-sm" />
                      ))}
                    </div>
                    <p className="text-[#6d5b53] text-sm italic mb-2">
                      "{testimonial.text}"
                    </p>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#5a4a42]">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-[#7a6b63]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#e8d5c4]/40 shadow-sm mb-16">
          <h2 className="text-2xl font-serif font-light text-[#5a4a42] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium text-[#5a4a42]">
                Who is this course for?
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Yoga teachers wanting to deepen their anatomy knowledge, serious
                practitioners aiming to prevent injuries, and aspiring teachers
                looking for scientific foundation.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-[#5a4a42]">
                When are the upcoming batches?
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Next batches start on March 16, 2026 and May 18, 2026. Early
                bird enrollment is now open for both batches.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-[#5a4a42]">
                Will I get a certificate?
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Yes, upon successful completion, you'll receive a Yoga
                Biomechanics Mastery certificate recognized by Yoga Alliance.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-[#5a4a42]">
                Can I preview the curriculum?
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Yes! Module 1 is available for preview above. The complete
                4-module curriculum is unlocked upon enrollment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-[#9f7164]/10 via-[#c8a798]/10 to-[#9f7164]/10 rounded-2xl p-8 border border-[#e8d5c4]/40 shadow-sm text-center">
          <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-4">
            Ready to Teach with Scientific Confidence?
          </h3>
          <p className="text-[#6d5b53] mb-6 max-w-2xl mx-auto">
            Join the growing community of yoga professionals who teach with
            evidence-based biomechanics knowledge. Choose your preferred batch:
          </p>

          {/* Batch Selection */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            {upcomingBatches.map((batch, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e8d5c4]/40 shadow-sm min-w-[200px]"
              >
                <p className="font-semibold text-[#5a4a42]">{batch.date}</p>
                <p className="text-sm text-[#7a6b63] mb-2">{batch.seats}</p>
                <button
                  onClick={handleEnrollClick}
                  className="w-full py-2 bg-gradient-to-r from-[#9f7164] to-[#c8a798] text-white rounded-full font-medium hover:from-[#8c6558] hover:to-[#b49684] transition-all duration-300"
                >
                  Enroll for {batch.date.split(",")[0]}
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEnrollClick}
              className="px-8 py-3 bg-gradient-to-r from-[#9f7164] to-[#c8a798] text-white rounded-full font-medium hover:from-[#8c6558] hover:to-[#b49684] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              <FaCertificate />
              Enroll Today
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Chat with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
