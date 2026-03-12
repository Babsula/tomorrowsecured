import { useEffect, useState } from "react";

const ScrollBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 5000;
  const progress = Math.min(scrollY / maxScroll, 1);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {/* Orb 1 - primary glow, moves down-right */}
      <div
        className="absolute rounded-full blur-[120px] opacity-20"
        style={{
          width: 500,
          height: 500,
          background: "hsl(160 100% 50%)",
          top: `${-10 + progress * 80}%`,
          left: `${-5 + progress * 40}%`,
          transition: "none",
        }}
      />

      {/* Orb 2 - accent glow, moves up-left */}
      <div
        className="absolute rounded-full blur-[140px] opacity-15"
        style={{
          width: 600,
          height: 600,
          background: "hsl(270 80% 65%)",
          bottom: `${-20 + progress * 60}%`,
          right: `${-10 + progress * 50}%`,
          transition: "none",
        }}
      />

      {/* Orb 3 - smaller accent */}
      <div
        className="absolute rounded-full blur-[100px] opacity-10"
        style={{
          width: 350,
          height: 350,
          background: "hsl(190 90% 50%)",
          top: `${30 + progress * 40}%`,
          right: `${20 - progress * 30}%`,
          transition: "none",
        }}
      />

      {/* Grid overlay that fades in on scroll */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(160 100% 50% / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(160 100% 50% / 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.3 + progress * 0.7,
        }}
      />
    </div>
  );
};

export default ScrollBackground;
