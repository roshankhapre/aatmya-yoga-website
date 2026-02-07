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
  FaBook,
  FaHeart,
  FaGlobe,
  FaChalkboardTeacher,
  FaBrain,
  FaBalanceScale,
  FaHandsHelping,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { MdOutlineSpa, MdSelfImprovement, MdFitnessCenter, MdPsychology } from "react-icons/md";

export default function Yoga500HourTTC() {
  const handleEnrollClick = () => {
    const phoneNumber = "+918281094117";
    const message = "Hi! I'm interested in enrolling in the 500-Hour Yoga Teacher Training Course. Please share more details.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918281094117";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const courseHighlights = [
    {
      icon: <FaBook className="text-xl" />,
      title: "Comprehensive Curriculum",
      description: "500 hours of immersive learning"
    },
    {
      icon: <FaHeart className="text-xl" />,
      title: "Traditional & Modern Blend",
      description: "Classical wisdom meets modern science"
    },
    {
      icon: <FaGlobe className="text-xl" />,
      title: "Global Certification",
      description: "Yoga Alliance recognized certificate"
    },
    {
      icon: <FaChalkboardTeacher className="text-xl" />,
      title: "Expert Mentorship",
      description: "Learn from experienced masters"
    }
  ];

  const curriculumSections = [
    {
      title: "Techniques, Training & Practice",
      icon: <MdFitnessCenter className="text-2xl" />,
      items: [
        "Guided practice of classical asanas",
        "Pranayama techniques & breath–movement coordination",
        "Cleansing kriyas & mantra chanting",
        "Meditation methods & alignment refinement",
        "Sukshma Vyayama & Surya Namaskar variations"
      ]
    },
    {
      title: "Teaching Methodology",
      icon: <FaChalkboardTeacher className="text-2xl" />,
      items: [
        "Principles of demonstration, observation & correction",
        "Communication skills & teaching presence",
        "Class management & sequencing intelligence",
        "Teaching styles & learning psychology",
        "Addressing special populations"
      ]
    },
    {
      title: "Anatomy & Physiology",
      icon: <FaBrain className="text-2xl" />,
      items: [
        "Skeletal system, joints & range of motion",
        "Muscular system engagement patterns",
        "Respiratory system & breathing physiology",
        "Nervous system & stress response",
        "Endocrine & reproductive systems"
      ]
    },
    {
      title: "Yoga Philosophy & Ethics",
      icon: <MdPsychology className="text-2xl" />,
      items: [
        "Chakras, nadis & subtle-body anatomy",
        "Classical yoga philosophy & texts",
        "Yoga lifestyle, dharma & karma",
        "Ethics for yoga teachers",
        "Seva & teaching responsibility"
      ]
    }
  ];

  const electives = [
    "Ashtanga Vinyasa – Primary Series",
    "Biomechanics in Yoga",
    "Ayurveda for yoga teachers",
    "Modern & Ayurvedic nutrition",
    "Introduction to Yoga Therapy",
    "Children's Yoga",
    "Corporate Yoga",
    "Yoga in healthcare settings"
  ];

  const testimonials = [
    {
      name: "Dr. Anjali Verma",
      role: "Medical Professional",
      text: "The 500-hour TTC transformed my understanding of holistic healing. Perfect blend of science and spirituality.",
      rating: 5,
    },
    {
      name: "Ravi Kumar",
      role: "Senior Yoga Teacher",
      text: "This course took my teaching to another level. The depth of philosophy and anatomy is unparalleled.",
      rating: 5,
    },
    {
      name: "Sofia Rodriguez",
      role: "International Student",
      text: "Coming from abroad, I found exactly what I was looking for - authentic tradition with modern application.",
      rating: 5,
    },
  ];

  const targetAudience = [
    "Beginners seeking deep yogic knowledge",
    "200/300-hour certified yoga teachers",
    "Dedicated yoga practitioners",
    "Wellness professionals",
    "Knowledge seekers & spiritual explorers",
    "Those ready for leadership roles"
  ];

  const benefits = [
    "Deep command over traditional & modern yoga",
    "Strong anatomical & biomechanical understanding",
    "Refined teaching confidence & presence",
    "Ethical, professional teaching foundation",
    "Ability to teach diverse populations safely",
    "Leadership & mentorship capabilities",
    "Yogic lifestyle integration",
    "Global teaching opportunities"
  ];

  const upcomingBatches = [
    {
      date: "April 1, 2026",
      duration: "6 Months Intensive",
      seats: "Only 12 Seats Available",
      status: "Early Bird Open",
      discount: "₹10,000 Early Bird Discount"
    },
    {
      date: "July 15, 2026",
      duration: "8 Months Weekend",
      seats: "Registration Open",
      status: "Apply Now",
      discount: "Flexible Payment Plans"
    }
  ];

  const faqs = [
    {
      question: "What is a 500-Hour Yoga Teacher Training Course?",
      answer: "A 500-Hour YTTC is an in-depth, comprehensive yoga education program covering practices, philosophy, anatomy, teaching methodology, and lifestyle principles for complete mastery."
    },
    {
      question: "Can beginners join this course?",
      answer: "Absolutely! The course is structured progressively, starting from fundamentals. Beginners benefit by learning correct alignment and philosophy from day one."
    },
    {
      question: "Do I need to be flexible?",
      answer: "No. Yoga is not about flexibility. We focus on body awareness, breath, alignment, and intelligent movement for all body types."
    },
    {
      question: "Is philosophy compulsory?",
      answer: "Yoga philosophy is taught practically, helping understand yoga's purpose and apply principles in daily life. Many find it deeply transformative."
    }
  ];

  return (
    <section
      id="yoga-500-hour-ttc"
      className="py-20 px-6 bg-gradient-to-b from-[#f0f7f0] via-white to-[#f9f5f0] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-50/40 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-emerald-50/40 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-[#9f7164]/10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-[#4a7c59]/10 animate-pulse delay-700"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-12 right-12 text-[#e8d5c8] text-7xl opacity-10 rotate-12">
        <MdOutlineSpa />
      </div>
      <div className="absolute bottom-20 left-10 text-[#d4e8d4] text-6xl opacity-10 -rotate-12">
        <FaLeaf />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Course Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-emerald-50 border border-[#e8d5c4]/60 shadow-sm">
            <FaCertificate className="text-[#9f7164] text-lg" />
            <span className="text-lg font-semibold text-[#5a4a42]">
              500-HOUR YOGA ALLIANCE CERTIFIED
            </span>
          </div>
        </div>

        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#5a4a42] mb-6 tracking-tight leading-tight">
            500-Hour Yoga Teacher Training
            <span className="block text-3xl md:text-4xl text-[#7a6b63] mt-4 font-normal">
              Transform Your Practice. Refine Your Teaching. Live the Yogic Path.
            </span>
          </h1>
          <div className="w-48 h-1.5 bg-gradient-to-r from-amber-200 via-[#c8a798] to-emerald-200 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Course Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courseHighlights.map((highlight, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#e8d5c4]/40 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-100 to-emerald-100 flex items-center justify-center mb-4">
                  <div className="text-[#9f7164]">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-light text-[#5a4a42] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-[#7a6359] text-sm">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Course */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#e8d5c4]/40 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9f7164]/20 to-[#c8a798]/20 flex items-center justify-center">
                  <FaLeaf className="text-[#9f7164] text-xl" />
                </div>
                <h2 className="text-3xl font-serif font-light text-[#5a4a42]">
                  About the Course
                </h2>
              </div>
              <p className="text-[#6d5b53] leading-relaxed text-lg mb-6">
                This 500-Hour Yoga Teacher Training Course is an advanced, in-depth program designed for dedicated practitioners and teachers who wish to master classical yoga, modern science, and professional teaching skills.
              </p>
              <p className="text-[#6d5b53] leading-relaxed">
                Rooted in traditional yogic wisdom and supported by anatomy, biomechanics, and teaching methodology, this course builds confident, ethical, and intelligent yoga teachers ready to transform lives.
              </p>
            </div>

            {/* Curriculum Sections */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#e8d5c4]/40 shadow-sm">
              <h2 className="text-3xl font-serif font-light text-[#5a4a42] mb-8 text-center">
                Comprehensive Curriculum
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {curriculumSections.map((section, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-[#f9f5f0] rounded-xl p-6 border border-[#e8d5c4]/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-[#9f7164] text-2xl">
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-serif font-light text-[#5a4a42]">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-[#6d5b53]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Electives Section */}
              <div className="mt-8 pt-8 border-t border-[#e8d5c4]/30">
                <div className="flex items-center gap-3 mb-6">
                  <FaStar className="text-amber-500 text-2xl" />
                  <h3 className="text-2xl font-serif font-light text-[#5a4a42]">
                    Electives & Specializations
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {electives.map((elective, index) => (
                    <div key={index} className="bg-gradient-to-r from-amber-50/50 to-white rounded-lg p-3 border border-amber-200/30 text-center">
                      <span className="text-sm text-[#6d5b53]">{elective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-gradient-to-r from-[#f0f7f0] to-[#f9f5f0] rounded-2xl p-8 border border-[#d4e8d4] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <FaUsers className="text-[#9f7164] text-2xl" />
                <h2 className="text-3xl font-serif font-light text-[#5a4a42]">
                  Who This Course Is For
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {targetAudience.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9f7164]/20 to-[#c8a798]/20 flex items-center justify-center">
                      <FaUserGraduate className="text-[#9f7164]" />
                    </div>
                    <span className="text-[#5a4a42] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#e8d5c4]/40 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <FaHeart className="text-[#9f7164] text-2xl" />
                <h2 className="text-3xl font-serif font-light text-[#5a4a42]">
                  What You Will Gain
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <FaCheckCircle className="text-emerald-600 text-sm" />
                    </div>
                    <span className="text-[#6d5b53]">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[#e8d5c4]/30 text-center">
                <p className="text-xl font-serif font-light text-[#5a4a42] italic">
                  "This is not just a certification. It is a journey into mastery, responsibility, and yogic living."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Enrollment & FAQ */}
          <div className="space-y-8">
            {/* Enrollment Card */}
            <div className="sticky top-24 bg-gradient-to-b from-white to-[#f9f5f0] rounded-2xl p-8 border border-[#e8d5c4]/50 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100/80 to-emerald-100/80 border border-amber-200/50 mb-6">
                  <FaCalendarAlt className="text-amber-500" />
                  <span className="text-sm font-semibold text-[#7a6359]">
                    LIMITED SEATS AVAILABLE
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-4">
                  Begin Your Transformational Journey
                </h3>
             
              </div>

              {/* Batch Selection */}
              {/* <div className="space-y-4 mb-8">
                <h4 className="text-lg font-medium text-[#5a4a42] mb-3">
                  Upcoming Batches:
                </h4>
                {upcomingBatches.map((batch, index) => (
                  <div key={index} className="bg-gradient-to-r from-white to-[#f9f5f0] rounded-xl p-4 border border-[#e8d5c4]/40 hover:border-[#c8a798] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-bold text-[#5a4a42]">{batch.date}</p>
                        <p className="text-sm text-[#7a6b63]">{batch.duration}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${index === 0 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {batch.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-[#9f7164] font-medium">{batch.seats}</p>
                      <p className="text-xs text-emerald-600 font-semibold">{batch.discount}</p>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* CTA Buttons */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={handleEnrollClick}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#4a7c59] to-[#9f7164] text-white rounded-full text-lg font-semibold hover:from-[#3e6a4a] hover:to-[#8c6558] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
                >
                  <FaCertificate className="text-xl" />
                  Enroll Now & Save ₹10,000
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
                >
                  <FaWhatsapp className="text-2xl" />
                  Schedule a Consultation
                </button>
              </div>

              {/* Included Features */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-[#5a4a42]">
                  Course Includes:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500" />
                    <span className="text-[#6d5b53]">500-Hour Yoga Alliance Certification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500" />
                    <span className="text-[#6d5b53]">Complete Study Materials & Manuals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500" />
                    <span className="text-[#6d5b53]">Lifetime Access to Resources</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500" />
                    <span className="text-[#6d5b53]">Personal Mentorship Sessions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#e8d5c4]/40 shadow-sm">
              <h3 className="text-xl font-serif font-light text-[#5a4a42] mb-6 text-center">
                Quick Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center cursor-pointer text-[#5a4a42] font-medium p-3 hover:bg-[#f9f5f0] rounded-lg">
                      {faq.question}
                      <span className="text-[#9f7164] group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-3 text-[#6d5b53] text-sm bg-white/50 rounded-b-lg">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-light text-[#5a4a42] mb-4">
              Hear From Our Graduates
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-200 via-[#c8a798] to-emerald-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#e8d5c4]/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
                <p className="text-[#6d5b53] italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8d5c4]/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-100 to-emerald-100 flex items-center justify-center">
                    <MdSelfImprovement className="text-[#9f7164]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#5a4a42]">{testimonial.name}</p>
                    <p className="text-sm text-[#7a6b63]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-[#4a7c59]/10 via-[#9f7164]/10 to-[#4a7c59]/10 rounded-2xl p-10 border border-[#d4e8d4] shadow-sm">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#5a4a42] mb-6">
              Ready to Transform Your Yoga Journey?
            </h2>
            <p className="text-[#6d5b53] text-lg mb-8 leading-relaxed">
              Join our community of dedicated yogis and become a certified master teacher. This 500-hour journey will transform not just your teaching, but your entire way of living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEnrollClick}
                className="px-10 py-4 bg-gradient-to-r from-[#4a7c59] to-[#9f7164] text-white rounded-full text-xl font-semibold hover:from-[#3e6a4a] hover:to-[#8c6558] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center gap-3"
              >
                <FaCertificate className="text-2xl" />
                Enroll in 500-Hour TTC
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" />
                Get Course Brochure
              </button>
            </div>
            <p className="mt-6 text-[#7a6b63] text-sm">
              Limited seats available for personalized attention | Payment plans available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}