const FloatingPill = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[80] flex justify-center px-4 sm:top-6">
      <div className="glass-pill float-y pointer-events-auto inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-[0_0_30px_-12px_hsl(var(--love-sky)/0.7)] sm:px-5 sm:py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--love-sky))] shadow-[0_0_6px_hsl(var(--love-sky))]" />
        <span className="shimmer-text font-display text-xs italic tracking-wide sm:text-sm">
          poseic & zoktay ♡ forever
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--love-sky))] shadow-[0_0_6px_hsl(var(--love-sky))]" />
      </div>
    </div>
  );
};

export default FloatingPill;
