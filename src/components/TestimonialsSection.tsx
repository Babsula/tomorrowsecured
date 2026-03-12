import { Quote } from "lucide-react";

const testimonials = [
  { name: "Alex Rivera", role: "SOC Analyst @ CrowdStrike", text: "Tomorrow Secured gave me the hands-on skills I needed to land my first cybersecurity role. The labs felt like real-world scenarios." },
  { name: "Priya Mehta", role: "Pentester @ Deloitte", text: "The ethical hacking track was incredibly comprehensive. I went from zero to passing the CEH within 4 months." },
  { name: "Jordan Lee", role: "Security Engineer @ Google", text: "The mentorship and community set this program apart. I still connect with my cohort regularly for career advice." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold">What Our <span className="gradient-text">Alumni Say</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card p-8 card-hover">
            <Quote className="h-8 w-8 text-primary/40 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
