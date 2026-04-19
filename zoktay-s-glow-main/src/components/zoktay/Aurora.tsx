/**
 * Aurora — GPU-accelerated ambient glow orbs.
 * Bütün səhifə üçün vahid arxa plan effekti.
 * Bio, Stats, Countdown, FanWall heç bir arxa plan div daşımır —
 * bütün glowlar buradan gəlir.
 */
const Aurora = () => {
  const base: React.CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
    pointerEvents: "none",
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Orb A — Sol üst, ana mavi glow */}
      <div
        style={{
          ...base,
          top: "-10%",
          left: "-5%",
          width: "65vw",
          height: "65vw",
          background: "radial-gradient(circle, hsl(205 90% 65% / 0.22) 0%, transparent 65%)",
          filter: "blur(55px)",
          animation: "aurora-drift-a 22s ease-in-out infinite",
        }}
      />

      {/* Orb B — Sağ orta, azure glow */}
      <div
        style={{
          ...base,
          top: "30%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, hsl(215 75% 60% / 0.16) 0%, transparent 65%)",
          filter: "blur(60px)",
          animation: "aurora-drift-b 28s ease-in-out infinite",
        }}
      />

      {/* Orb C — Aşağı sol, çəhrayı/bənövşəyi aksan */}
      <div
        style={{
          ...base,
          bottom: "-5%",
          left: "10%",
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, hsl(260 60% 60% / 0.10) 0%, transparent 65%)",
          filter: "blur(65px)",
          animation: "aurora-drift-c 32s ease-in-out infinite",
        }}
      />

      {/* Orb D — Mərkəz sabit halo (animasiyasız, yüngül) */}
      <div
        style={{
          ...base,
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%) translateZ(0)",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, hsl(205 90% 70% / 0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Vignette — kənarları qaraldır */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 45%, hsl(222 45% 4% / 0.5) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Aurora;
