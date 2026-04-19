import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const formatTime = (s: number) => {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const MusicPlayer = ({ audioRef, isPlaying, onTogglePlay }: MusicPlayerProps) => {
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
    };
  }, [audioRef]);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = barRef.current;
    if (!audio || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setCurrent(audio.currentTime);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="glass-card mx-auto flex max-w-5xl flex-col gap-3 rounded-3xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Cover / visualizer */}
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-soft sm:h-14 sm:w-14">
            <div className="flex h-7 items-end gap-[2px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="block w-[3px] rounded-sm bg-[hsl(var(--love-deep))]/80"
                  style={{
                    height: "100%",
                    transformOrigin: "bottom",
                    animation: isPlaying
                      ? `equalizer 0.${6 + i}s ease-in-out infinite`
                      : "none",
                    animationDelay: `${i * 0.08}s`,
                    transform: isPlaying ? undefined : "scaleY(0.3)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-base italic text-[hsl(var(--love-mist))] sm:text-lg">
              Başrol Sensin
            </p>
            <p className="truncate font-body text-xs font-light text-[hsl(var(--love-mist)/0.6)] sm:text-sm">
              Manifest
              <span className="ml-2 text-gradient-soft text-[10px] font-medium uppercase tracking-[0.25em] sm:text-xs">
                · special for poseic ♡
              </span>
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Səsi aç" : "Səsi söndür"}
              className="hidden h-10 w-10 items-center justify-center rounded-full text-[hsl(var(--love-mist)/0.7)] transition hover:bg-[hsl(var(--love-mist)/0.06)] hover:text-[hsl(var(--love-mist))] sm:flex"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={onTogglePlay}
              aria-label={isPlaying ? "Dayandır" : "Oxut"}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-soft text-[hsl(var(--love-deep))] transition hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              )}
            </button>
          </div>
        </div>

        {/* Seek bar */}
        <div className="flex items-center gap-3">
          <span className="w-10 text-right font-body text-[10px] tabular-nums text-[hsl(var(--love-mist)/0.5)] sm:text-xs">
            {formatTime(current)}
          </span>
          <div
            ref={barRef}
            onClick={seek}
            className="group relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-[hsl(var(--love-mist)/0.08)]"
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-soft transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="w-10 font-body text-[10px] tabular-nums text-[hsl(var(--love-mist)/0.5)] sm:text-xs">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
