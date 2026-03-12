import heroBg from "@/assets/hero-bg.jpg";
import { ChevronRight, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="font-mono">Cybersecurity Education for the Next Generation</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
          Defend the <span className="gradient-text">Digital Future</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Tomorrow Secured equips learners with hands-on cybersecurity skills — from ethical hacking to threat intelligence — through real-world labs and expert-led programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity border-glow"
          >
            Explore Programs <ChevronRight className="h-5 w-5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
