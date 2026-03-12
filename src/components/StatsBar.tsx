const stats = [
  { value: "10,000+", label: "Students Trained" },
  { value: "95%", label: "Job Placement Rate" },
  { value: "50+", label: "Hands-On Labs" },
  { value: "24/7", label: "Mentor Access" },
];

const StatsBar = () => (
  <section className="border-y border-border bg-secondary/30">
    <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-primary text-glow">{s.value}</p>
          <p className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
