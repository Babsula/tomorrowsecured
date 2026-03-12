import Navbar from "@/components/Navbar";
import ScrollBackground from "@/components/ScrollBackground";
import ClickParticles from "@/components/ClickParticles";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AuthorSection from "@/components/AuthorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CharacterEasterEgg from "@/components/CharacterEasterEgg";

const Index = () => (
  <div className="min-h-screen bg-background">
    <ScrollBackground />
    <ClickParticles />
    <CharacterEasterEgg />
    <Navbar />
    <ScrollFadeIn>
      <HeroSection />
    </ScrollFadeIn>
    <ScrollFadeIn delay={0.1}>
      <StatsBar />
    </ScrollFadeIn>
    <ScrollFadeIn delay={0.05}>
      <ProgramsSection />
    </ScrollFadeIn>
    <ScrollFadeIn delay={0.05}>
      <AboutSection />
    </ScrollFadeIn>
    <ScrollFadeIn delay={0.05}>
      <TestimonialsSection />
    </ScrollFadeIn>
    <ScrollFadeIn delay={0.05}>
      <AuthorSection />
    </ScrollFadeIn>
    <ScrollFadeIn delay={0.05}>
      <CTASection />
    </ScrollFadeIn>
    <ScrollFadeIn>
      <Footer />
    </ScrollFadeIn>
  </div>
);

export default Index;
