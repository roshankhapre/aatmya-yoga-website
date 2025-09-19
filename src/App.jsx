import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/sections/Home";
import AboutSection from "./components/sections/AboutSection";
import ContactForm from "./components/sections/ContactForm";
import ChildrenYogaTraining95 from "./components/sections/ChildrenYogaTraining95";
import TeenYogaTraining from "./components/sections/TeenYogaTraining";
import TeacherTraining from "./components/sections/TeacherTraining";
import Workshops from "./components/sections/Workshops";
import Programs from "./components/sections/Programs";
import FloatingContactButtons from "./components/sections/FloatingContactButtons";

export default function App() {
  return (
    <HelmetProvider>
      <FloatingContactButtons />
      <div className="font-sans bg-primary-light text-gray-800">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/contact" element={<ContactForm />} />

          <Route
            path="/children-yoga-training"
            element={<ChildrenYogaTraining95 />}
          />
          <Route path="/teen-yoga-training" element={<TeenYogaTraining />} />
          <Route path="/teacher-training" element={<TeacherTraining />} />
        </Routes>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
