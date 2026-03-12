import { Target, Users, Award } from "lucide-react";

const pillars = [
  { icon: Target, title: "Mission-Driven", desc: "We believe cybersecurity literacy is essential for everyone — not just engineers. Our programs are designed to be accessible and impactful." },
  { icon: Users, title: "Community-Centered", desc: "Join a global cohort of learners, mentors, and industry professionals. Collaborate on real projects and grow your network." },
  { icon: Award, title: "Industry-Recognized", desc: "Our curriculum aligns with CompTIA, CEH, and CISSP frameworks so your skills translate directly to certifications and careers." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-secondary/20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">About</p>
        <h2 className="text-4xl md:text-5xl font-bold">Why <span className="gradient-text">Tomorrow Secured</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p) => (
          <div key={p.title} className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <p.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
