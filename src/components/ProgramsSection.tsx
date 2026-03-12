import { ShieldCheck, Bug, Network, Lock, Server, Eye } from "lucide-react";

const programs = [
  { icon: ShieldCheck, title: "Cyber Defense Fundamentals", desc: "Build a strong foundation in network security, firewalls, and intrusion detection systems." },
  { icon: Bug, title: "Ethical Hacking & Pentesting", desc: "Learn offensive security techniques including vulnerability assessment and exploitation." },
  { icon: Network, title: "Network Security", desc: "Master TCP/IP, packet analysis, VPNs, and secure network architecture design." },
  { icon: Lock, title: "Cryptography & Data Protection", desc: "Understand encryption algorithms, PKI, and data privacy regulations." },
  { icon: Server, title: "Cloud Security", desc: "Secure cloud infrastructure across AWS, Azure, and GCP with real-world scenarios." },
  { icon: Eye, title: "Threat Intelligence & SOC", desc: "Analyze threats, respond to incidents, and operate within a Security Operations Center." },
];

const ProgramsSection = () => (
  <section id="programs" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Programs</p>
        <h2 className="text-4xl md:text-5xl font-bold">What You'll <span className="gradient-text">Master</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div key={p.title} className="rounded-xl border border-border bg-card p-8 card-hover group">
            <p.icon className="h-10 w-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
