import { ShieldCheck, Award, Briefcase } from "lucide-react";
import authorImg from "@/assets/amar-author.jpg";

const highlights = [
{ icon: Award, label: "30+ Certifications", sub: "CCNA, CompTIA, Microsoft & more" },
{ icon: Briefcase, label: "Multi-Role Experience", sub: "Security Manager, Risk Advisor, Analyst" },
{ icon: ShieldCheck, label: "Hands-On Training", sub: "Workshops, guest lectures & live labs" }];


const AuthorSection = () =>
<section id="author" className="py-24 bg-secondary/20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Founder</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          About the <span className="gradient-text">Author</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Photo */}
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 blur-lg opacity-60" />
            <img

            alt="Amar Licina — Founder of Tomorrow Secured"
            className="relative rounded-2xl w-72 md:w-80 object-cover border border-primary/20 shadow-lg"
            loading="lazy" src="/lovable-uploads/eff46bcd-8440-4975-8022-85419bf280ad.jpg" />
          
          </div>
        </div>

        {/* Bio */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="text-2xl font-bold">Amar Licina</h3>

          <p className="text-muted-foreground leading-relaxed">
            With nearly half a decade of experience in cybersecurity, Amar Licina founded{" "}
            <span className="text-primary font-semibold">Tomorrow Secured</span> to bridge the gap
            between theory and real-world practice. His teaching philosophy is simple:{" "}
            <em>security is a mindset, not just a toolset</em> — it is a continuous process of
            learning, adapting, and anticipating emerging threats.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Throughout his career, he has delivered guest lectures, workshops, and security training
            sessions for students and organizations, focusing on practical skills that translate
            directly into real security outcomes. He has worked across multiple cybersecurity roles,
            including Security Manager, Risk Advisor, and Security Analyst, gaining hands-on
            experience in protecting infrastructure, assessing risk, and responding to modern cyber
            threats.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Through Tomorrow Secured, Amar focuses on empowering learners with critical thinking and
            a proactive security mindset — helping them understand how attacks happen, how to prevent
            them, and how to stay resilient in an evolving threat landscape. Whether you are a
            beginner or simply curious about cybersecurity, the knowledge shared here is designed to
            help you secure a better tomorrow.
          </p>

          {/* Highlight chips */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {highlights.map((h) =>
          <div
            key={h.label}
            className="flex items-start gap-3 rounded-xl border border-primary/15 bg-card/60 p-4">
            
                <h.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.sub}</p>
                </div>
              </div>
          )}
          </div>
        </div>
      </div>
    </div>
  </section>;


export default AuthorSection;