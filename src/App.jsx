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
import NotFound from "./components/sections/NotFound";
import Testimonials from "./components/sections/Testimonials";
import BlogList from "./components/blog/BlogList";
import BlogPost from "./components/blog/BlogPost";
import YogaBiomechanicsCourse from "./components/sections/YogaMechanicsCourse";
import Policies from "./components/sections/PoliciesTemp";


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
          <Route path="/testimonials" element={<Testimonials />} />

          <Route
            path="/children-yoga-training"
            element={<ChildrenYogaTraining95 />}
          />
          <Route path="/teen-yoga-training" element={<TeenYogaTraining />} />
          <Route path="/teacher-training" element={<TeacherTraining />} />
          <Route path="/privacy-policy" element={<Policies/>} />
          <Route
            path="/yoga-biomechanics-course"
            element={<YogaBiomechanicsCourse />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
