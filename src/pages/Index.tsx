import { useState, useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
