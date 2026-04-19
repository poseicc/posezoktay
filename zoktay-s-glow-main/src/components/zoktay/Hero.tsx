import React from "react";
import { MoveDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ====================== ARXA PLAN ====================== */}
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 w-screen h-full -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/zoktay-bg.jpg')",
        }}
      >
        {/* Ümumi qaraltma (yumşaq) */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Aşağıya doğru yumşaq qaralma - PROBLEMİ DÜZƏLDİLDİ */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
      </div>

      {/* ====================== MƏZMUN ====================== */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6">
        
        <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-12">
          <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold">Project Glow v2</span>
        </div>

        <div className="flex flex-col items-center gap-8">
          <span className="text-[10px] text-slate-500 tracking-[0.5em] uppercase font-bold">
            Poseic • 2026
          </span>
          
          <h1 className="text-7xl md:text-[8.5rem] lg:text-[9.8rem] font-black tracking-[-0.04em] leading-[0.85] text-white uppercase italic">
            ZOKTAY<span className="text-cyan-400 not-italic">.</span>
          </h1>
        </div>

        <p className="mt-10 text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed font-light italic px-4">
          "Geceyi sabaha bağlayan gençliğe içilen bir and.<br />
          Her şarkı, sahne arkasında saklı kalmış eşsiz bir hikaye."
        </p>

        <button className="mt-20 flex items-center gap-3 text-white text-sm font-bold uppercase tracking-widest group transition-all">
          <MoveDown className="w-6 h-6 text-cyan-400 group-hover:animate-bounce" />
          SCROLL FOR MANIFEST
        </button>
      </div>
    </section>
  );
};

export default Hero;