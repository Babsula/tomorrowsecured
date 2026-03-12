import { Zap } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
      <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-12 md:p-20 text-center overflow-hidden">
        <div className="absolute top-4 right-4 h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-4 left-4 h-24 w-24 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
        <div className="relative z-10">
          <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Secure Tomorrow?</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join the next cohort and start building the skills the world needs. Limited spots available.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity border-glow"
          >
            Apply Now — It's Free to Start
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
