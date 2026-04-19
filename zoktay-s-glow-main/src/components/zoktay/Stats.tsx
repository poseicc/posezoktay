import { useEffect, useRef, useState } from "react";

const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

const CountUp = ({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) => {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.floor(eased * end));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const formatted = val >= 1000 ? `${(val / 1000).toFixed(val >= 10000 ? 0 : 1)}K` : val.toString();
  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const items = [
    { label: "Instagram", value: 902, suffix: "+" },
    { label: "TikTok", value: 542, suffix: "+" },
    { label: "Listeners", value: 1, suffix: "M+" },
    { label: "Streams", value: 32, suffix: "M+" },
  ];

  return (
    <section id="stats" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-body text-[10px] uppercase tracking-[0.6em] text-[hsl(var(--love-sky)/0.7)]">
            in numbers
          </p>
          <h2 className="text-gradient-soft font-display text-4xl italic sm:text-6xl">
            Culture in Motion
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="glass-card group relative overflow-hidden rounded-3xl p-6 text-center transition-all duration-500 hover:border-[hsl(var(--love-sky)/0.3)] sm:p-8"
              style={{ animation: `fade-in 0.7s ${i * 0.1}s both` }}
            >
              <div className="text-gradient-soft font-display text-4xl italic tracking-tight sm:text-6xl">
                <CountUp end={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-3 font-body text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--love-mist)/0.5)] sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
