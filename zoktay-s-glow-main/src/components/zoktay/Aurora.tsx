/**
 * Aurora — Highly optimized GPU-accelerated blurred orbs.
 * - Added will-change for hardware acceleration.
 * - Simplified gradients to reduce fragment shader load.
 * - Used backface-visibility to force layer promotion.
 */
const Aurora = () => {
  const commonStyle: React.CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(60px)", // Blur dərəcəsini bir az azaltdıq (performans üçün)
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)", // GPU-nu aktivləşdirir
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {/* Orb A */}
      <div
        className="aurora opacity-50"
        style={{
          ...commonStyle,
          top: "-5%",
          left: "-5%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, hsl(var(--love-sky) / 0.5), transparent 70%)",
          animation: "aurora-drift-a 25s ease-in-out infinite",
        }}
      />

      {/* Orb B */}
      <div
        className="aurora opacity-40"
        style={{
          ...commonStyle,
          top: "25%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, hsl(var(--love-azure) / 0.4), transparent 70%)",
          animation: "aurora-drift-b 30s ease-in-out infinite",
        }}
      />

      {/* Orb C */}
      <div
        className="aurora opacity-20"
        style={{
          ...commonStyle,
          bottom: "-10%",
          left: "15%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, hsl(var(--love-rose) / 0.25), transparent 70%)",
          animation: "aurora-drift-c 35s ease-in-out infinite",
        }}
      />

      {/* Optimized Static Vignette */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: "radial-gradient(circle at center, transparent 50%, hsl(var(--love-deep) / 0.4) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Aurora;