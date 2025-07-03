import { FaCalendarAlt, FaLeaf } from "react-icons/fa";
import bgTexture from "../../assets/pattern-yoga-img.webp";
import workshopImg1 from "../../assets/196_yoga_sutras_workshop (2).webp";
import workshopImg2 from "../../assets/kids_yoga_sequencing_workshop.webp";
import workshopImg3 from "../../assets/therapy_yoga_sequencing_workshop (1).webp";
import workshopImg4 from "../../assets/prenatal_yoga_sequencing_workshop.webp";
import workshopImg5 from "../../assets/kids_yoga_themes_workshop (1).webp";
import workshopImg6 from "../../assets/2surya-namaskar (2).webp";

const workshops = [
  {
    title: "196 Yoga Sutras Workshop",
    desc: "Explore all 196 sutras of Patanjali with guided study and real-life application. Ideal for deepening your philosophical foundation.",
    tag: "Philosophy",
    img: workshopImg1,
    color: "from-amber-100/30 to-amber-200/30",
    whatsappMessage:
      "Hi, I'm interested in the 196 Yoga Sutras Workshop. Please share more details. Thank you!",
  },
  {
    title: "Kids Yoga Sequencing Workshop",
    desc: "Master creative storytelling and sequencing for kids. Learn how to build engaging and age-appropriate kids yoga classes.",
    tag: "Kids Yoga",
    img: workshopImg2,
    color: "from-pink-100/30 to-pink-200/30",
    whatsappMessage:
      "Hi, I'm interested in the Kids Yoga Sequencing Workshop. Please share more details. Thank you!",
  },
  {
    title: "Therapy Yoga Sequencing Workshop",
    desc: "Design safe, evidence-informed sequences for back pain, stress, and chronic conditions using therapeutic frameworks.",
    tag: "Yoga Therapy",
    img: workshopImg3,
    color: "from-blue-100/30 to-blue-200/30",
    whatsappMessage:
      "Hi, I'm interested in the Therapy Yoga Sequencing Workshop. Kindly send more info. Thank you!",
  },
  {
    title: "Prenatal Yoga Sequencing Workshop",
    desc: "Build empowering prenatal classes. Learn trimester-specific sequencing, safety guidelines, and confidence-building practices.",
    tag: "Prenatal",
    img: workshopImg4,
    color: "from-purple-100/30 to-purple-200/30",
    whatsappMessage:
      "Hi, I'm interested in the Prenatal Yoga Sequencing Workshop. Please provide more details. Thank you!",
  },
  {
    title: "Kids Yoga Themes Workshop",
    desc: "Create themed kids classes like jungle safaris or underwater adventures. Includes tools for storytelling, games, and engagement.",
    tag: "Creative Teaching",
    img: workshopImg5,
    color: "from-teal-100/30 to-teal-200/30",
    whatsappMessage:
      "Hi, I'm interested in the Kids Yoga Themes Workshop. Please share workshop details. Thank you!",
  },
  {
    title: "Surya Namaskar Variations Workshop",
    desc: "Go beyond the basics of sun salutations with creative variations to enhance strength, flexibility, and flow adaptability.",
    tag: "Asana Practice",
    img: workshopImg6,
    color: "from-orange-100/30 to-orange-200/30",
    whatsappMessage:
      "Hi, I'm interested in the Surya Namaskar Variations Workshop. Kindly send more information. Thank you!",
  },
];

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="relative py-28 bg-gradient-to-b from-[#fbf8f5] to-[#f1e9e1] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 w-44 h-44 rounded-full bg-amber-100/10 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-16 w-60 h-60 rounded-full bg-teal-100/10 blur-2xl"></div>
      </div>

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-multiply"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "35%" }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5f4b44] mb-6 tracking-wide">
            Sacred Learning Spaces
          </h2>
          <p className="text-lg text-[#7a6b63] max-w-2xl mx-auto leading-relaxed">
            Discover workshops rooted in tradition, crafted to bring healing,
            knowledge, and inner connection.
          </p>
          <div className="w-24 h-px bg-[#c8a798] opacity-50 mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-lg border border-[#e8dacc] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${workshop.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10 rounded-2xl`}
              ></div>

              {/* Image */}
              <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={workshop.img}
                  alt={`${workshop.title} workshop`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                <div className="absolute bottom-3 left-3 px-3 py-1 text-xs font-light rounded-full backdrop-blur-sm bg-white/80 text-[#5a4a42]">
                  {workshop.tag}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-3 group-hover:text-[#9f7164] transition-colors duration-300">
                {workshop.title}
              </h3>
              <p className="text-[#6d5b53] text-base leading-relaxed mb-4">
                {workshop.desc}
              </p>

              {/* Date & Button */}
              <p className="text-sm text-[#9f7164] mb-5 font-light flex items-center gap-2">
                <FaCalendarAlt className="text-[#c8a798]" />{" "}
                {/* Optional: add date if needed */}
              </p>

              <a
                href={`https://wa.me/918281094117?text=${encodeURIComponent(
                  workshop.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#d8c3b6] text-[#7a6359] hover:border-[#9f7164] hover:text-[#9f7164] transition-all duration-300 bg-white shadow hover:shadow-md text-sm font-light"
              >
                <FaLeaf className="text-[#9f7164] opacity-70" />
                Register Now
              </a>
            </div>
          ))}
        </div>

        {/* Decorative Center Divider */}
        <div className="mt-24 flex justify-center items-center gap-4">
          <div className="w-20 h-px bg-[#c8a798] opacity-30"></div>
          <div className="w-3 h-3 border border-[#c8a798] rounded-full opacity-50"></div>
          <div className="w-20 h-px bg-[#c8a798] opacity-30"></div>
        </div>
      </div>
      <div className="mt-12 bg-[#f8f2eb] rounded-2xl p-8 md:p-10 border border-[#e8dcd3]">
        <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-6 text-center">
          Workshop Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#e8d5c4] p-3 rounded-full text-[#7a6359]">
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-[#5a4a42] mb-1">
                Live Interactive Sessions
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Real-time guidance with opportunities to ask questions and
                receive feedback
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#e8d5c4] p-3 rounded-full text-[#7a6359]">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-[#5a4a42] mb-1">
                Compassionate Facilitators
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Learn from experienced teachers who prioritize your growth and
                wellbeing
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#e8d5c4] p-3 rounded-full text-[#7a6359]">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-[#5a4a42] mb-1">
                Comprehensive Resources
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Downloadable manuals, worksheets, and reference materials
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#e8d5c4] p-3 rounded-full text-[#7a6359]">
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-[#5a4a42] mb-1">
                Session Recordings
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Access workshop recordings for review and continued practice
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#e8d5c4] p-3 rounded-full text-[#7a6359]">
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-[#5a4a42] mb-1">
                Personalized Guidance
              </h4>
              <p className="text-[#6d5b53] text-sm">
                Dedicated Q&A sessions for your individual questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
