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
      
      {/* 🌌 GLOBAL ARXA PLAN (Ancaq Rəngli Glowlar) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-cyan-500/10 blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-purple-500/5 blur-[120px] rounded-full opacity-40" />
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/basrol.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Intro Overlay */}
      {introOpen && <IntroOverlay onEnter={handleEnter} />}

      {/* Naviqasiya (Floating Pill) */}
      <FloatingPill />

      {/* Əsas Məzmun */}
      <main className="relative z-10 w-full">
        {/* Hero içindəki şəkil artıq ancaq Hero-da qalacaq */}
        <Hero />
        
        {/* Digər hissələr təmiz qara fon üzərində glowlarla görünəcək */}
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