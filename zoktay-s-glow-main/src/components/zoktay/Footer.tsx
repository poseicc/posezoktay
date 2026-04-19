import React from "react";
import { Github, Globe, Heart, Code2, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-black/60 backdrop-blur-xl mt-20 pb-44">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Üst Hissə: Mobil üçün mərkəzlənmiş, Desktop üçün aralı */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
          
          {/* Brending */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span className="text-[9px] text-slate-400 tracking-[0.2em] uppercase font-bold">Project Glow v2</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase italic leading-none">
              ZOKTAY<span className="text-cyan-400 not-italic">.</span>
            </h3>
            <p className="text-[10px] text-slate-500 tracking-[0.3em] uppercase">
              Digital Experience Design
            </p>
          </div>

          {/* Havalı Poseic Düyməsi - Mobildə tam genişlik */}
          <div className="w-full md:w-auto flex flex-col items-center">
            <a 
              href="https://poseic.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-full sm:w-64 md:w-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative px-8 py-4 bg-black border border-white/10 rounded-lg flex items-center justify-center gap-3 transition-transform active:scale-95">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
                  Visit <span className="text-cyan-400">poseic</span>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Orta Hissə: Ayrıcı və İmza */}
        <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <p className="text-[9px] text-slate-600 tracking-[0.5em] uppercase font-bold">
              Architect of this universe
            </p>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
              <a 
                href="https://poseic.vercel.app" 
                target="_blank"
                className="text-3xl font-black tracking-tighter text-white hover:text-cyan-400 transition-all duration-500 active:opacity-70"
              >
                poseic
              </a>
              <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
            </div>
          </div>

          {/* Sosial Linklər - Mobildə daha böyük toxunuş sahəsi */}
          <div className="flex items-center gap-12 text-slate-500">
             <a href="https://github.com/poseic" target="_blank" className="p-2 hover:text-white transition-colors">
               <Github className="w-6 h-6" />
             </a>
             <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
             <a href="https://poseic.vercel.app" target="_blank" className="p-2 hover:text-white transition-colors">
               <Globe className="w-6 h-6" />
             </a>
          </div>

          {/* Copyright */}
          <p className="text-[8px] md:text-[9px] text-slate-700 uppercase tracking-[0.6em] font-medium text-center leading-loose">
            &copy; 2026 — ZOKTAY X POSEIC <br className="md:hidden" /> ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;