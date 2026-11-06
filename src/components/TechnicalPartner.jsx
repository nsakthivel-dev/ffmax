import React from 'react';
import { Cpu, ExternalLink, Globe, Sparkles, Layers, ShieldCheck, Server } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function TechnicalPartner() {
  return (
    <section id="technical-partner" className="py-12 sm:py-24 relative overflow-hidden bg-tactical-grid">
      {/* Cyan/Cyber Accent Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-[11px] sm:text-xs font-tech text-cyan-400 tracking-widest uppercase mb-2.5 sm:mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNOLOGY &amp; DIGITAL INFRASTRUCTURE</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">PARTNER</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 font-tech">
            Empowering the tournament's promotional architecture and digital presentation with robust modern web technologies and seamless user experience.
          </p>
        </div>

        {/* Featured Technical Partner Card with Cyber-Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="hud-card corner-bracket p-5 sm:p-10 rounded-3xl border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden">
            
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-amber-500" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left: Official RC Innovations Circular Logo Centered */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="relative group flex items-center justify-center">
                  
                  {/* Glowing Ambient Cyan/Amber Halo */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/35 via-teal-400/25 to-amber-500/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  
                  {/* Circular Logo Emblem - Enlarged and Centered */}
                  <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-teal-300 to-amber-400 shadow-2xl shadow-cyan-500/40 group-hover:shadow-cyan-400/70 group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <img 
                      src={TOURNAMENT_CONFIG.technicalPartner.logoUrl || "/assets/branding/rc.png"} 
                      alt="RC Innovations Official Logo" 
                      className="w-full h-full object-contain rounded-full bg-white shadow-2xl"
                    />
                  </div>

                </div>
              </div>

              {/* Right: Partner Description and Visit CTA */}
              <div className="md:col-span-7 text-center md:text-left flex flex-col justify-center">
                
                <div className="inline-flex items-center justify-center md:justify-start gap-1.5 text-xs font-tech font-bold uppercase tracking-wider text-cyan-400 mb-1.5 sm:mb-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Digital Engineering &amp; Solutions</span>
                </div>

                <div className="text-[11px] sm:text-xs font-tech text-slate-400 uppercase tracking-widest font-semibold">
                  OFFICIAL TECHNICAL ARCHITECT
                </div>

                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-wide mt-1">
                  {TOURNAMENT_CONFIG.technicalPartner.name}
                </h3>

                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300 font-tech leading-relaxed">
                  {TOURNAMENT_CONFIG.technicalPartner.description}
                </p>

                {/* Digital Pillars */}
                <div className="mt-4 sm:mt-5 grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-left">
                    <div className="text-xs font-bold font-heading text-white flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-cyan-400" />
                      <span>WEB ENGINEERING</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-tech mt-1">Mobile-first Esports Architecture</div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-left">
                    <div className="text-xs font-bold font-heading text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>AUTOMATION</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-tech mt-1">Integrated Registration Systems</div>
                  </div>
                </div>

                {/* Prominent Action Button: Redirect to Official Website */}
                <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4">
                  <a
                    href={TOURNAMENT_CONFIG.technicalPartner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactical clip-corner w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl font-heading font-black text-xs sm:text-sm tracking-wider text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 hover:from-cyan-300 hover:to-teal-300 shadow-xl shadow-cyan-950/70 transition-all flex items-center justify-center gap-2.5 group uppercase min-h-[44px]"
                  >
                    <Globe className="w-4 h-4 shrink-0" />
                    <span>VISIT PARTNER WEBSITE</span>
                    <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <span className="text-[11px] sm:text-xs font-tech text-slate-400 font-semibold text-center sm:text-left">
                    Official Portfolio &amp; Innovations
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

