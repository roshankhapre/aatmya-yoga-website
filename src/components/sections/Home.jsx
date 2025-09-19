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

export default function Home() {
  return (
    <div>
      
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
    </div>
  );
}
