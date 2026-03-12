import { useEffect, useState, useCallback, useRef } from "react";
import char1 from "@/assets/character-1.png";
import char2 from "@/assets/character-2.png";
import char3 from "@/assets/character-3.png";
import char4 from "@/assets/character-4.png";
import char5 from "@/assets/character-5.png";

type Position = "left" | "right" | "bottom-left" | "bottom-right";

const CHARACTERS = [
  { img: char1, tip: "📱 Think before you click!" },
  { img: char2, tip: "🦜 Use strong passwords!" },
  { img: char3, tip: "🔍 Verify before you trust!" },
  { img: char4, tip: "🦸 Enable MFA everywhere!" },
  { img: char5, tip: "😈 Watch out for phishing!" },
];

const POSITIONS: Record<Position, string> = {
  left: "bottom-0 left-4",
  right: "bottom-0 right-4",
  "bottom-left": "bottom-0 left-16",
  "bottom-right": "bottom-0 right-16",
};

const CharacterEasterEgg = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<Position>("right");
  const [charIndex, setCharIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const triggerPeek = useCallback(() => {
    const positions: Position[] = ["left", "right", "bottom-left", "bottom-right"];
    setPosition(positions[Math.floor(Math.random() * positions.length)]);
    setCharIndex(Math.floor(Math.random() * CHARACTERS.length));
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  }, []);

  useEffect(() => {
    const initialDelay = 15000 + Math.random() * 10000;
    const timeout = setTimeout(() => {
      triggerPeek();
      intervalRef.current = setInterval(() => {
        triggerPeek();
      }, 30000 + Math.random() * 30000);
    }, initialDelay);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [triggerPeek]);

  const character = CHARACTERS[charIndex];

  return (
    <div
      className={`fixed z-50 transition-all duration-700 ease-in-out cursor-pointer ${POSITIONS[position]}`}
      style={{
        transform: visible ? "translateY(15%)" : "translateY(110%)",
        opacity: visible ? 1 : 0,
      }}
      onClick={() => setVisible(false)}
      title="👋 One of our educational characters!"
    >
      <div className="relative group">
        {/* Speech bubble */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card border border-primary/30 text-foreground text-xs font-mono px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        >
          {character.tip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/30" />
        </div>
        <img
          src={character.img}
          alt="Tomorrow Secured character"
          className="w-28 h-28 object-contain drop-shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default CharacterEasterEgg;
