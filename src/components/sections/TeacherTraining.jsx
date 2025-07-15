import { FaLeaf, FaCertificate, FaRegSmile, FaChild } from "react-icons/fa";
import { GiMeditation, GiLotus } from "react-icons/gi";
import yogaImg from "../../assets/yoga-trainer.webp";
import kidImg from "../../assets/kids_yoga_sequencing_workshop.webp";
import pranayamImg from "../../assets/pranayama_mudra_teacher_training_real_image.webp";
import faceImg from "../../assets/2surya-namaskar (2).webp";
import faceTrainImg from "../../assets/face_yoga_teacher_training_level_2_1_month (2).webp";
import faceExpImg from "../../assets/beautiful-female-dresses-white-casual-t-shirt-meditating-with-eyes-closed-relaxing-body-clearing-mind.webp";
import yogaTheraphyImg from "../../assets/woman-practising-yoga-gym-with-trainer.webp";

const faceYogaPrograms = [
  {
    title: "Face Yoga & Expression Science – Level 1",
    duration: "1 week",
    desc: "Introductory course teaching facial muscle toning and natural anti-aging methods.",
    icon: <FaRegSmile className="text-rose-500" />,
    badge: "Foundation",
    image: faceImg,
  },
  {
    title: "Face Yoga Teacher Training – Level 2",
    duration: "1 month",
    desc: "Certification covering facial anatomy, sequencing, and teaching methodology.",
    icon: <FaCertificate className="text-indigo-500" />,
    badge: "RYT-200 Eligible",
    image: faceTrainImg,
  },
  {
    title: "Advanced Face Yoga – Level 3",
    duration: "1 month",
    desc: "For professionals seeking mastery in therapeutic facial practices.",
    icon: <GiMeditation className="text-amber-500" />,
    badge: "Advanced",
    image: faceExpImg,
  },
];

const otherPrograms = [
  {
    title: "Pranayama & Mudra Teacher Training",
    duration: "1 month",
    desc: "Master breathwork and hand gestures with teaching practice.",
    icon: <FaLeaf className="text-teal-500" />,
    badge: "Certification",
    image: pranayamImg,
  },
  {
    title: "Yoga Therapy Certification",
    duration: "2 months",
    desc: "Therapeutic approaches for specific health conditions.",
    icon: <GiLotus className="text-blue-500" />,
    badge: "500-Hour",
    image: yogaTheraphyImg,
  },
  {
    title: "Kids Yoga Teacher Training",
    duration: "1 month",
    desc: "Fun, safe, and age-appropriate yoga for children.",
    icon: <FaChild className="text-pink-500" />,
    badge: "Certified",
    image: kidImg,
  },
];

export default function TeacherTraining() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#fbf8f3] to-[#e9e1d7]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-5 animate-fade-in">
            Teacher Training & Certifications
          </h2>
          <p className="text-lg text-[#786a61] max-w-3xl mx-auto leading-relaxed">
            Transform your passion into a meaningful profession with globally
            recognized programs.
          </p>
          <div className="w-24 h-1 bg-[#c8a798] opacity-40 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Face Yoga Programs */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-center text-[#5a4a42] mb-10 flex items-center justify-center gap-2">
            <FaRegSmile className="text-rose-400" /> Face Yoga Specializations
          </h3>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {faceYogaPrograms.map((program, i) => (
              <ProgramCard key={i} program={program} />
            ))}
          </div>
        </div>

        {/* Other Yoga TTCs */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-center text-[#5a4a42] mb-10 flex items-center justify-center gap-2">
            <GiLotus className="text-amber-400" /> Yoga Teacher Trainings
          </h3>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {otherPrograms.map((program, i) => (
              <ProgramCard key={i} program={program} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/918281094117?text=Hi!%20I'm%20interested%20in%20your%20teacher%20training%20programs.%20Can%20you%20share%20details%20about%20curriculum%20and%20pricing?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#7a5a50] to-[#5a4a42] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:from-[#9f7164] hover:to-[#7a5a50]"
          >
            Enquire Now via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }) {
  return (
    <div className="bg-white/95 border border-[#e8dfd5] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <img
          src={program.image || yogaImg}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-amber-500/90 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
          {program.badge}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-[#7a5a50] mb-2 text-sm">
          {program.icon}
          <span>{program.duration}</span>
        </div>
        <h4 className="text-lg font-serif text-[#5a4a42] mb-2">
          {program.title}
        </h4>
        <p className="text-sm text-[#6b5d55] leading-relaxed line-clamp-3 mb-4">
          {program.desc}
        </p>
        <a
          href={`https://wa.me/918281094117?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(
            program.title
          )}.%20Please%20share%20details.`}
          target="_blank"
          rel="noopener"
          className="text-sm font-medium text-[#7a5a50] hover:text-[#9f7164] flex items-center gap-1 group"
        >
          Get Syllabus
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
