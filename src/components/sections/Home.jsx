import AboutSection from "./AboutSection";
import AccreditationSection from "./Accreditation";
import ChildrenYogaTraining95 from "./ChildrenYogaTraining95";
import ContactForm from "./ContactForm";
import FloatingContactButtons from "./FloatingContactButtons";
import FounderSection from "./FounderSection";
import Hero from "./Hero";
import Programs from "./Programs";
import TeacherTraining from "./TeacherTraining";
import TeamSection from "./TeamSection";
import TeenYogaTraining from "./TeenYogaTraining";
import Testimonials from "./Testimonials";
import Workshops from "./Workshops";
import PageMeta from "../seo/PageMeta";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aatmya Yoga - Yoga Classes & Teacher Training in Indore",
    description:
      "Professional yoga studio in Indore offering children yoga, teen yoga, teacher training, and workshops. Yoga Alliance certified programs.",
    url: "https://www.aatmyayoga.com/",
    mainEntity: {
      "@type": "YogaStudio",
      name: "Aatmya Yoga",
      description: "Yoga classes and teacher training in Indore, India",
    },
  };

  return (
    <>
      <PageMeta
        title="Aatmya Yoga | Yoga Classes & Teacher Training in Indore | Yoga Alliance Certified"
        description="Join Aatmya Yoga in Indore for professional yoga classes, children yoga programs, teen yoga, and Yoga Alliance certified teacher training. Transform your life with yoga."
        canonical="https://www.aatmyayoga.com/"
        schema={homeSchema}
      />

      {/* Your existing home content */}
      <Hero />
      <ChildrenYogaTraining95 />
      <TeenYogaTraining />
      <AboutSection />
      <FounderSection />
      <AccreditationSection />
      <TeamSection />
      <Programs />
      <TeacherTraining />
      <Testimonials />
      <Workshops />
      <ContactForm />
    </>
  );
}
