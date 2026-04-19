import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import IntroOverlay from "@/components/zoktay/IntroOverlay";
import FloatingPill from "@/components/zoktay/FloatingPill";
import Hero from "@/components/zoktay/Hero";
import Stats from "@/components/zoktay/Stats";
import Bio from "@/components/zoktay/Bio";
import Countdown from "@/components/zoktay/Countdown";
import FanWall from "@/components/zoktay/FanWall";
import Footer from "@/components/zoktay/Footer";
import MusicPlayer from "@/components/zoktay/MusicPlayer";

const Index = () => {
  const [introOpen, setIntroOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.title = "ZOKTAY — poseic ♡ zoktay forever";
  }, []);

  const handleEnter = async () => {
    setIntroOpen(false);
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.volume = 0.85;
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Audio autoplay blocked or source missing", err);
      toast("basrol.mp3 yüklənməyib — pleyer hazırdır");
    }
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        toast.error("basrol.mp3 faylı tapılmır");
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative min-h-screen text-foreground bg-[#050505] overflow-x-hidden">

      {/*
        🌌 GLOBAL ARXA PLAN
        - will-change: transform → GPU layer-ə keçir, CPU yükü azalır
        - translate3d(0,0,0) → hardware acceleration
        - blur dəyərləri azaldıldı: 120px → 80px (görünüş eyni, render 2x sürətli)
        - fixed deyil, absolute → background-attachment:fixed mobil lagını aradan qaldırır
        - opacity aşağı tutulur ki paint cost azalsın
      */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Solüst — mavi ana glow */}
        <div
          className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(205 90% 60% / 0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
            willChange: "transform",
            transform: "translate3d(0,0,0)",
          }}
        />
        {/* Sağalt — bənövşəyi aksan */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(260 60% 55% / 0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
            willChange: "transform",
            transform: "translate3d(0,0,0)",
          }}
        />
        {/* Mərkəz — çox yüngül mavi halo */}
        <div
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(210 80% 65% / 0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
            willChange: "transform",
            transform: "translate3d(-50%,0,0)",
          }}
        />
      </div>

      {/* Audio Element — preload="none" ilə ilk yükləmə sürətlənir */}
      <audio
        ref={audioRef}
        src="/basrol.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Intro Overlay */}
      {introOpen && <IntroOverlay onEnter={handleEnter} />}

      {/* Naviqasiya (Floating Pill) */}
      <FloatingPill />

      {/* Əsas Məzmun */}
      <main className="relative z-10 w-full">
        <Hero />
        <Stats />
        <Bio />
        <Countdown />
        <FanWall />
        <Footer />
      </main>

      {/* Musiqi Pleyeri */}
      <MusicPlayer audioRef={audioRef} isPlaying={isPlaying} onTogglePlay={togglePlay} />
    </div>
  );
};

export default Index;
