import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import LogoScroller from "./components/LogoScroller";
import CaseStudyPage from "./components/CaseStudyPage";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // Prevent background scrolling when case study overlay is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen relative bg-[#fcfcfc] dark:bg-[#030303] text-stone-900 dark:text-stone-100 transition-colors duration-300">
      
      {/* Background Radial Glow overlays */}
      <div className="absolute inset-0 radial-glow dark:radial-glow-dark pointer-events-none -z-10" />

      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Bento Layout Container */}
      <main className="max-w-5xl mx-auto px-6 md:px-8 space-y-32 pt-20 pb-32">
        <div className="space-y-20">
          <div className="space-y-16">
            <ScrollReveal>
              <Hero setSelectedProject={setSelectedProject} hasActiveModal={!!selectedProject} />
            </ScrollReveal>
            <ScrollReveal>
              <LogoScroller />
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <Services />
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <Projects setSelectedProject={setSelectedProject} />
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />

      {/* Slide-up case study overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#fafafa] dark:bg-[#030303] text-zinc-800 dark:text-zinc-200"
          >
            <CaseStudyPage project={selectedProject} onClose={() => setSelectedProject(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
