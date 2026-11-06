import React from 'react';
import { MapPin, Users, Trophy, Sparkles, ZoomIn, ChevronRight, Gamepad2, Flame, Crosshair, ShieldCheck, Zap } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';
import Countdown from './Countdown';

export default function Hero({ onOpenPoster }) {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Cinematic Golden Amber Radial Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-amber-500/18 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-orange-600/14 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#120b07]/95 border border-amber-500/40 text-[10px] sm:text-xs font-tech tracking-wider text-amber-200 shadow-neon-gold backdrop-blur-md relative overflow-hidden group max-w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="text-amber-400 font-extrabold uppercase">{TOURNAMENT_CONFIG.host.name}</span>
            <span className="text-orange-400 font-bold">PRESENTS</span>
            <span className="text-slate-400">×</span>
            <span className="text-cyan-300 font-bold">{TOURNAMENT_CONFIG.technicalPartner.name}</span>
          </div>
        </div>

        {/* Main Grid: Left Content & Right Poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column (Text, Tagline, CTAs) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tactical Target Indicator */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded bg-amber-950/60 border-l-2 border-amber-400 text-[10px] sm:text-xs font-tech font-extrabold tracking-wider sm:tracking-widest text-amber-400 uppercase mb-2 sm:mb-3">
              <Crosshair className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-orange-500 animate-spin" style={{ animationDuration: '8s' }} />
              <span>BATTLE ROYALE ARENA // CLASSIFIED ESPORTS COMBAT</span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-7xl xl:text-8xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
              <span className="block drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">FREE FIRE</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-500 drop-shadow-[0_0_40px_rgba(245,158,11,0.7)]">
                MAX
              </span>{' '}
              <span className="text-slate-100 block text-2xl xs:text-3xl sm:text-5xl xl:text-6xl font-heading font-extrabold tracking-wider mt-1 drop-shadow-md">
                COMMUNITY TOURNAMENT
              </span>
            </h1>

            {/* Battle Tagline with HUD Glow */}
            <div className="mt-3 sm:mt-5 text-sm sm:text-xl lg:text-2xl font-black font-heading text-slate-200 tracking-wider flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] sm:text-sm">ENTER THE BATTLE.</span>
              <span className="px-2 sm:px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[11px] sm:text-sm">PROVE YOUR SKILLS.</span>
              <span className="px-2 sm:px-2.5 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-[11px] sm:text-sm">CLAIM VICTORY.</span>
            </div>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-300 font-tech tracking-wide max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
              The premier battle royale showdown. Two independent Solo matches on Bermuda, 48 players per match, exactly 96 total unique competitors. 
              Register for Match 1 or Match 2 and compete for championship victory.
            </p>

            {/* Asymmetrical High-Impact Telemetry HUD Cards (Displaying 48 Max Capacity & 2 Matches) */}
            <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="hud-card corner-bracket p-2 sm:p-3 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-xl sm:text-3xl font-extrabold font-heading text-amber-400">48</div>
                <div className="text-[9px] sm:text-xs font-tech text-slate-300 uppercase tracking-wider font-extrabold">PER MATCH</div>
                <div className="w-6 sm:w-8 h-0.5 bg-amber-400/40 rounded-full mt-1 sm:mt-1.5" />
              </div>
              <div className="hud-card corner-bracket p-2 sm:p-3 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-xl sm:text-3xl font-extrabold font-heading text-orange-400">02</div>
                <div className="text-[9px] sm:text-xs font-tech text-slate-300 uppercase tracking-wider font-extrabold">SOLO MATCHES</div>
                <div className="w-6 sm:w-8 h-0.5 bg-orange-400/40 rounded-full mt-1 sm:mt-1.5" />
              </div>
              <div className="hud-card corner-bracket p-2 sm:p-3 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-xl sm:text-3xl font-extrabold font-heading text-emerald-400">96</div>
                <div className="text-[9px] sm:text-xs font-tech text-slate-300 uppercase tracking-wider font-extrabold">TOTAL PLAYERS</div>
                <div className="w-6 sm:w-8 h-0.5 bg-emerald-400/40 rounded-full mt-1 sm:mt-1.5" />
              </div>
            </div>

            {/* Tactical CTA Buttons (Responsive stacking for Mobile, row for Desktop) */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
              <a
                href="#maps"
                className="btn-tactical clip-corner w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-black text-black bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-xl shadow-amber-500/40 transition-all font-heading tracking-wider inline-flex items-center justify-center gap-2 group uppercase"
              >
                <span>REGISTER NOW (BERMUDA SOLO)</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-4">
                <a
                  href="#maps"
                  className="btn-tactical clip-corner px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-base font-bold text-amber-200 bg-[#170e08]/90 hover:bg-[#25170d] border border-amber-500/40 hover:border-amber-400 shadow-md transition-all font-heading tracking-wider inline-flex items-center justify-center gap-1.5 uppercase"
                >
                  <span>EXPLORE MAPS</span>
                </a>

                <a
                  href="#rules"
                  className="btn-tactical clip-corner px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-base font-bold text-amber-200 bg-[#170e08]/90 hover:bg-[#25170d] border border-amber-500/40 hover:border-amber-400 shadow-md transition-all font-heading tracking-wider inline-flex items-center justify-center gap-1.5 uppercase"
                >
                  <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  <span>VIEW RULES</span>
                </a>
              </div>

              <button
                onClick={onOpenPoster}
                className="btn-tactical hidden sm:inline-flex px-4 py-3 text-xs sm:text-sm font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 rounded-xl transition-all font-tech tracking-wider items-center justify-center gap-1.5 uppercase"
              >
                <ZoomIn className="w-4 h-4" />
                <span>VIEW POSTER</span>
              </button>
            </div>

            {/* Countdown Integration */}
            <div className="mt-8 pt-6 border-t border-amber-500/25">
              <Countdown />
            </div>

          </div>

          {/* Right Column: Weapon Crate / Holopad Poster Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[280px] xs:max-w-xs sm:max-w-md w-full">
              
              {/* Outer Neon Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-95 transition duration-500 group-hover:scale-105" />

              {/* Poster Card Container with Tactical Corner Cuts */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0c0805] border-2 border-amber-500/50 shadow-2xl corner-bracket">
                
                {/* Tactical Top Bar */}
                <div className="p-2.5 bg-gradient-to-r from-[#1b1109] via-[#24170e] to-[#120b06] border-b border-amber-500/35 flex items-center justify-between text-[11px] font-tech">
                  <div className="flex items-center gap-1.5 font-bold text-amber-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>OFFICIAL TOURNAMENT ASSET</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider">INTEL // VERIFIED</span>
                </div>

                {/* Aspect ratio preserved 1:1 image container */}
                <div className="relative aspect-square w-full overflow-hidden bg-black/80">
                  <img
                    src={TOURNAMENT_CONFIG.poster.src}
                    alt={TOURNAMENT_CONFIG.poster.alt}
                    className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle Tactical HUD Grid Lines */}
                  <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />

                  {/* Hover Overlay with View Button */}
                  <div 
                    onClick={onOpenPoster}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 cursor-pointer"
                  >
                    <button
                      type="button"
                      className="btn-tactical px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-heading font-black text-sm tracking-wider shadow-xl inline-flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>ENLARGE POSTER</span>
                    </button>
                    <p className="mt-2 text-xs text-amber-200 font-tech">Click anywhere on the poster to expand</p>
                  </div>
                </div>

                {/* Tactical Telemetry Strip under the poster */}
                <div className="px-4 py-3 bg-gradient-to-r from-[#170f09] to-[#0d0905] border-t border-amber-500/35 flex items-center justify-between text-xs font-tech">
                  <div>
                    <span className="text-slate-400">Mode:</span>{' '}
                    <span className="text-amber-400 font-bold">{TOURNAMENT_CONFIG.stats.format}</span>
                  </div>
                  <div className="h-4 w-px bg-amber-500/30" />
                  <div>
                    <span className="text-slate-400">Winner:</span>{' '}
                    <span className="text-emerald-400 font-bold">₹{TOURNAMENT_CONFIG.stats.winnerPrizePerMap.toLocaleString()}/map</span>
                  </div>
                  <div className="h-4 w-px bg-amber-500/30" />
                  <button
                    onClick={onOpenPoster}
                    className="btn-tactical text-amber-300 hover:text-white font-bold underline decoration-amber-400 underline-offset-2 transition-colors uppercase"
                  >
                    FULL VIEW
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
