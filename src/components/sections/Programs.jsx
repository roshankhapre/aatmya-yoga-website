import yogaImg1 from "../../assets/Hatha Yoga.webp";
import yogaImg2 from "../../assets/Vinyasa Flow.webp";
import yogaImg3 from "../../assets/Kids Yoga.webp";
import yogaImg4 from "../../assets/Prenatal Yoga.webp";
import yogaImg5 from "../../assets/Yoga Therapy.webp";
import yogaImg6 from "../../assets/Corporate & Group Yoga(online).webp";
import yogaImg7 from "../../assets/yoga-trainer.webp"; // Added new image
import yogaImg8 from "../../assets/master_complex_postures_with_a_focus_on.jpeg"; // Added new image
import yogaImg9 from "../../assets/geriatric_yoga_teacher_training_train_to_teach.jpeg"; // Added new image

const programs = [
  {
    title: "Hatha Yoga",
    desc: "Build a solid foundation through classical postures, breathwork, and relaxation practices. Ideal for beginners and those wanting a mindful, traditional approach.",
    img: yogaImg1,
    color: "from-amber-100/70 to-amber-200/70",
    features: [
      "Traditional approach",
      "Mindful movement",
      "Breath awareness",
      "Deep relaxation",
    ],
  },
  {
    title: "Vinyasa Flow",
    desc: "Dynamic, flowing sequences linking breath to movement, encouraging strength, flexibility, and focus. Great for creative and energizing practices.",
    img: yogaImg2,
    color: "from-teal-100/70 to-teal-200/70",
    features: [
      "Creative sequencing",
      "Energy building",
      "Fluid transitions",
      "Mind-body connection",
    ],
  },
  {
    title: "Kids Yoga",
    desc: "Fun, imaginative, and safe classes designed for children, developing body awareness, focus, and emotional regulation in an engaging online environment.",
    img: yogaImg3,
    color: "from-pink-100/70 to-pink-200/70",
    features: [
      "Imaginative play",
      "Emotional regulation",
      "Body awareness",
      "Fun learning",
    ],
  },
  {
    title: "Prenatal Yoga",
    desc: "Gentle, nurturing practices tailored for mothers-to-be, promoting strength, flexibility, and relaxation throughout pregnancy.",
    img: yogaImg4,
    color: "from-purple-100/70 to-purple-200/70",
    features: [
      "Pregnancy-safe",
      "Pelvic floor focus",
      "Relaxation techniques",
      "Community support",
    ],
  },
  {
    title: "Yoga Therapy",
    desc: "Personalized sessions addressing specific health conditions (e.g., back pain, anxiety) blending asana, pranayama, and yogic counseling.",
    img: yogaImg5,
    color: "from-blue-100/70 to-blue-200/70",
    features: [
      "Personalized approach",
      "Condition-specific",
      "Holistic healing",
      "Therapeutic sequences",
    ],
  },
  {
    title: "Corporate & Group Yoga",
    desc: "Bring yoga to your workplace or community group through virtual sessions that support stress reduction, focus, and well-being.",
    img: yogaImg6,
    color: "from-green-100/70 to-green-200/70",
    features: [
      "Team building",
      "Stress reduction",
      "Focus enhancement",
      "Customizable",
    ],
  },
  {
    title: "Teacher Training",
    desc: "Become a certified yoga teacher with our structured online YTTC programs. Learn asana methodology, philosophy, and teaching skills.",
    img: yogaImg7,
    color: "from-indigo-100/70 to-indigo-200/70",
    features: [
      "200 hr certification",
      "Expert mentors",
      "Live + recorded",
      "Teaching practice",
    ],
  },
  {
    title: "Certificate Course in Advanced Asanas",
    desc: "Master complex postures with a focus on alignment, endurance, and safety. Designed for intermediate to advanced practitioners.",
    img: yogaImg8,
    color: "from-red-100/70 to-red-200/70",
    features: [
      "Advanced postures",
      "Detailed alignment",
      "Progressive sequencing",
      "Injury prevention",
    ],
  },
  {
    title: "Geriatric Yoga Teacher Training",
    desc: "Train to teach yoga for older adults with emphasis on safety, accessibility, and therapeutic benefits for aging bodies.",
    img: yogaImg9,
    color: "from-yellow-100/70 to-yellow-200/70",
    features: [
      "Senior-friendly yoga",
      "Chair yoga techniques",
      "Therapeutic adaptations",
      "Age-specific anatomy",
    ],
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-28 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-100/20 blur-xl"></div>
        <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-teal-100/20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-6 tracking-wide">
            Our Yoga Pathways
          </h2>
          <p className="text-lg text-[#7a6b63] max-w-3xl mx-auto leading-relaxed">
            Thoughtfully designed programmes combining the warmth of live
            community with the flexibility of online learning.
          </p>
          <div className="w-24 h-px bg-[#c8a798] opacity-50 mx-auto mt-8"></div>
        </div>

        {/* Program Cards */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <div
              key={i}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden border border-white/30"
            >
              {/* Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 -z-10`}
              ></div>

              {/* Image */}
              <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden">
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-3 group-hover:text-[#9f7164] transition-colors duration-500">
                  {program.title}
                </h3>
                <p className="text-[#6d5b53] leading-relaxed text-base mb-4">
                  {program.desc}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {program.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#7a6359]"
                    >
                      <span className="text-[#9f7164]">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-20 bg-[#f8f2eb] rounded-2xl p-8 md:p-10 border border-[#e8dcd3]">
          <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-6 text-center">
            Benefits of Our Online Programmes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Practice from anywhere, anytime",
              "Save travel time and costs",
              "Join a supportive online community",
              "Access experienced, certified instructors",
              "Flexible schedules for busy lifestyles",
              "Personalized guidance available",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-[#e8d5c4] p-2 rounded-full text-[#7a6359] mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-[#6d5b53]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons with WhatsApp messages */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-6">
            Ready to begin your journey?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918281094117?text=Hi%2C%20I%20would%20like%20to%20view%20the%20yoga%20class%20schedule.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white font-light rounded-full shadow-sm hover:shadow-md transition-all duration-500"
            >
              View Class Schedule
            </a>
            <a
              href="https://wa.me/918281094117?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20trial%20yoga%20class.%20Please%20let%20me%20know%20the%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-[#7a6359] font-light rounded-full border border-[#d8c3b6] hover:border-[#9f7164] hover:text-[#9f7164] shadow-sm hover:shadow-md transition-all duration-500"
            >
              Book a Free Trial
            </a>
            <a
              href="https://wa.me/918281094117?text=Hi%2C%20I%20want%20to%20join%20a%20yoga%20workshop.%20Please%20share%20available%20workshops%20and%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-[#7a6359] font-light rounded-full border border-[#d8c3b6] hover:border-[#9f7164] hover:text-[#9f7164] shadow-sm hover:shadow-md transition-all duration-500"
            >
              Join a Workshop
            </a>
            <a
              href="https://wa.me/918281094117?text=Hi%2C%20I%27m%20interested%20in%20Yoga%20Teacher%20Training.%20Can%20you%20please%20provide%20the%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-[#5a4a42] to-[#44352d] text-white font-light rounded-full shadow-sm hover:shadow-md transition-all duration-500"
            >
              Start Teacher Training
            </a>
          </div>
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
