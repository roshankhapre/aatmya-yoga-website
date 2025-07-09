import mentorImage from "../../assets/dr-shalini-verma-tonk.jpg";
import { FaLeaf, FaOm } from "react-icons/fa";

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
    // Add more team members here as needed:
    // {
    //   id: 2,
    //   name: "Next Team Member",
    //   role: "Role",
    //   experience: "Experience",
    //   description: "Description",
    //   image: "path/to/image.jpg"
    // }
  ];

  return (
    <section
      id="team"
      className="py-28 px-6 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-100/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-teal-100/10 blur-xl"></div>
        <FaOm className="absolute top-1/3 left-1/4 text-[#e8d5c8] text-6xl opacity-20 -rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-6 tracking-wide">
            Our Guiding Lights
          </h2>
          <p className="text-lg text-[#7a6b63] max-w-2xl mx-auto leading-relaxed">
            Meet the compassionate experts who bring wisdom to your practice
          </p>
          <div className="w-24 h-px bg-[#c8a798] opacity-50 mx-auto mt-8"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden border border-white/30"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/10 to-teal-100/10 opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10 rounded-2xl"></div>

              {/* Image */}
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden shadow-inner border border-[#e8d5c4]/50">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-1 group-hover:text-[#9f7164] transition-colors duration-500">
                  {member.name}
                </h3>

                <div className="flex items-center gap-2 text-sm uppercase text-[#9f7164] tracking-wider mb-3">
                  <FaLeaf className="text-xs" />
                  <span>{member.role}</span>
                </div>

                <p className="text-sm text-[#7a6359] mb-4 leading-relaxed border-b border-[#e8d5c4]/40 pb-4">
                  {member.experience}
                </p>

                <p className="text-[#6d5b53] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-100/30 to-teal-100/30 opacity-20 rounded-bl-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Team Member Placeholder (Comment out when not needed) */}
        {/* <div className="text-center mt-12">
          <p className="text-[#7a6b63] italic">
            We're growing our family of healers and guides...
          </p>
        </div> */}

        {/* Decorative divider */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <div className="w-24 h-px bg-[#c8a798] opacity-30"></div>
          <div className="w-3 h-3 border border-[#c8a798] rounded-full opacity-50"></div>
          <div className="w-24 h-px bg-[#c8a798] opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
