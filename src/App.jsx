// App.jsx
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Programs from "./components/sections/Programs";
import Testimonials from "./components/sections/Testimonials";
import Workshops from "./components/sections/Workshops";
import Accreditation from "./components/sections/Accreditation";
import AboutSection from "./components/sections/AboutSection";
import ContactForm from "./components/sections/ContactForm";
import FloatingContactButtons from "./components/sections/FloatingContactButtons";
import TeenYogaTraining from "./components/sections/TeenYogaTraining";
import FounderSection from "./components/sections/FounderSection";
import TeamSection from "./components/sections/TeamSection";
import TeacherTraining from "./components/sections/TeacherTraining";

export default function App() {
  return (
    <div className="font-sans bg-primary-light text-gray-800">
      <Navbar />
      <FloatingContactButtons />
      <Hero />
      <TeenYogaTraining />
      <AboutSection />
      <FounderSection />
      <Accreditation />

      <TeamSection />
      <Programs />
      <TeacherTraining />
      <Testimonials />
      <Workshops />
      <ContactForm />
      <Footer />
    </div>
  );
}
