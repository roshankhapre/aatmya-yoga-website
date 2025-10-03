// src/components/sections/Home.jsx - CORRECTED VERSION
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
  // ✅ Only add page-specific schema, DON'T override title/description
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aatmya Yoga - Home",
    description: "Yoga classes and teacher training in Indore, India",
    url: "https://www.aatmyayoga.com/",
    mainEntity: {
      "@type": "YogaStudio",
      name: "Aatmya Yoga",
      description: "Yoga classes and teacher training in Indore, India",
    },
  };

  return (
    <>
      {/* ✅ ONLY schema, NO title/description override for home page */}
      <PageMeta schema={homeSchema} canonical="https://www.aatmyayoga.com/" />

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
