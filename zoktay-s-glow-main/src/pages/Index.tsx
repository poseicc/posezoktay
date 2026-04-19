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
import Aurora from "@/components/zoktay/Aurora";

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

      {/* 🌌 Aurora — bütün glowlar buradan idarə olunur */}
      <Aurora />

      {/* Audio — preload="none" ilk yükləməni sürətləndirir */}
      <audio
        ref={audioRef}
        src="/basrol.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {introOpen && <IntroOverlay onEnter={handleEnter} />}
      <FloatingPill />

      <main className="relative z-10 w-full">
        <Hero />
        <Stats />
        <Bio />
        <Countdown />
        <FanWall />
        <Footer />
      </main>

      <MusicPlayer audioRef={audioRef} isPlaying={isPlaying} onTogglePlay={togglePlay} />
    </div>
  );
};

export default Index;
