import { useEffect, useState } from "react";

const getNextBirthday = () => {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, 3, 18, 0, 0, 0); // April = 3 (0-based)
  if (target.getTime() <= now.getTime()) {
    target = new Date(year + 1, 3, 18, 0, 0, 0);
  }
  return target;
};

const Countdown = () => {
  const [target] = useState(getNextBirthday());
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const blocks = [
    { v: time.d, l: "gün" },
    { v: time.h, l: "saat" },
    { v: time.m, l: "dak" },
    { v: time.s, l: "san" },
  ];

  return (
    <section id="countdown" className="relative px-4 py-24 sm:py-32 overflow-hidden bg-[#0a0a0a]">
      
      {/* Arxa plan gradienti - qaralığı azaldır və dərinlik verir */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-[#0a0a0a]" />
      
      {/* Yüngül mavi glow effekti (tema ilə uyğun) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3b82f630_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14 border border-white/10">
          
          {/* Üst glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 20%, hsl(var(--love-sky) / 0.15), transparent 70%)",
            }}
          />

          <div className="relative">
            <p className="mb-2 font-body text-[10px] uppercase tracking-[0.6em] text-[hsl(var(--love-sky)/0.8)]">
              18 nisan · happy birthday
            </p>
            
            <h2 className="text-gradient-soft font-display text-4xl italic sm:text-6xl">
              Zoktay Day
            </h2>
            
            <p className="mx-auto mt-4 max-w-md font-body text-sm font-light text-[hsl(var(--love-mist)/0.75)] sm:text-base">
              Büyük gün yaklaşıyor: Işığın doğuşuna geri sayım. 💙
            </p>

            {/* Countdown blokları */}
            <div className="mt-12 grid grid-cols-4 gap-3 sm:gap-6">
              {blocks.map((b, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-[hsl(var(--love-mist)/0.1)] bg-[hsl(var(--love-mist)/0.04)] py-6 backdrop-blur-md transition-all hover:border-[hsl(var(--love-sky)/0.3)] hover:bg-white/5"
                >
                  <div className="text-gradient-soft font-display text-3xl tabular-nums italic sm:text-5xl lg:text-6xl">
                    {b.v.toString().padStart(2, "0")}
                  </div>
                  <p className="mt-2 font-body text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--love-mist)/0.6)] sm:text-xs">
                    {b.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;