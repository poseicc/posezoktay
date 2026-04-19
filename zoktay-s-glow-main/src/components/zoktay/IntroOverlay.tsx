import { useEffect, useState } from "react";
import { Play } from "lucide-react";

interface IntroOverlayProps {
  onEnter: () => void;
}

const IntroOverlay = ({ onEnter }: IntroOverlayProps) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClick = () => {
    setLeaving(true);
    setTimeout(() => {
      document.body.style.overflow = "";
      onEnter();
    }, 850);
  };

  return (
    <div
      className={`fixed inset-0 z-[9000] flex items-center justify-center bg-[hsl(var(--love-deep))] ${
        leaving ? "animate-intro-out" : ""
      }`}
      style={{ background: "var(--gradient-page)" }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, hsl(var(--love-sky) / 0.15), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center animate-fade-in">
        <p className="mb-4 font-body text-[10px] uppercase tracking-[0.6em] text-[hsl(var(--love-sky)/0.7)]">
          poseic ♡ zoktay
        </p>
        <h1 className="text-gradient-soft font-display text-[clamp(4.5rem,15vw,12rem)] leading-[0.95] italic">
          zoktay
        </h1>
        <p className="mt-4 font-body text-xs tracking-[0.4em] text-[hsl(var(--love-mist)/0.55)] sm:text-sm">
          
        </p>

        <button
          onClick={handleClick}
          className="group mt-12 flex items-center gap-3 rounded-full border border-[hsl(var(--love-mist)/0.15)] bg-[hsl(var(--love-mist)/0.04)] px-7 py-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-[hsl(var(--love-mist))] backdrop-blur-md transition-all duration-500 hover:bg-[hsl(var(--love-mist)/0.08)] hover:border-[hsl(var(--love-sky)/0.5)] sm:text-sm"
        >
          <Play className="h-3.5 w-3.5 fill-current text-[hsl(var(--love-sky))]" />
          <span>Siteye gir & müziği başlat</span>
        </button>

        <p className="mt-10 font-body text-[10px] tracking-[0.4em] text-[hsl(var(--love-mist)/0.3)]">
          ◦ tap to enter ◦
        </p>
      </div>
    </div>
  );
};

export default IntroOverlay;
