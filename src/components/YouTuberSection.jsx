import React from 'react';
import { Youtube, ExternalLink, Flame, MessageSquare, Sparkles, Users, Radio, ShieldCheck, Play } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

// Custom Discord SVG Icon
function DiscordIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export default function YouTuberSection() {
  return (
    <section id="host" className="py-12 sm:py-24 relative overflow-hidden bg-tactical-grid">
      {/* Crimson & Amber Ambient Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/40 text-[11px] sm:text-xs font-tech text-red-400 tracking-widest uppercase mb-2.5 sm:mb-3">
            <Youtube className="w-3.5 h-3.5 text-red-400" />
            <span>OFFICIAL TOURNAMENT HOST</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-orange-400">HOST &amp; CREATOR</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 font-tech">
            The Free Fire MAX Tournament is hosted and organized by gaming creator FFM Mukesh. Connect on YouTube for match broadcasts and join the official Discord server for match announcements.
          </p>
        </div>

        {/* Featured Host Card with Cyber-Esports Chassis */}
        <div className="max-w-4xl mx-auto">
          <div className="hud-card corner-bracket p-5 sm:p-10 rounded-3xl border-2 border-red-500/40 shadow-2xl relative overflow-hidden">
            
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-[#5865F2]" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left: Host Avatar Badge with Live Radar Halo */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 via-orange-600 to-[#5865F2] rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
                  
                  <div className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-2xl bg-gradient-to-br from-red-950/90 via-[#180f0a] to-[#25160d] border-2 border-red-500/60 flex flex-col items-center justify-center p-4 sm:p-6 text-center shadow-2xl corner-bracket">
                    
                    {/* Pulsing Live Badge */}
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-red-600/90 text-white text-[9px] sm:text-[10px] font-tech font-bold uppercase shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>OFFICIAL HOST</span>
                    </div>

                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-600/20 border-2 border-red-500/50 flex items-center justify-center text-red-500 mb-2 sm:mb-3 shadow-inner group-hover:scale-110 transition-transform">
                      <Youtube className="w-9 h-9 sm:w-12 sm:h-12 stroke-[1.8]" />
                    </div>
                    
                    <div className="font-heading font-black text-lg sm:text-2xl text-white tracking-wider">
                      {TOURNAMENT_CONFIG.host.name}
                    </div>
                    
                    <div className="text-[11px] sm:text-xs font-tech text-amber-400 uppercase tracking-widest mt-0.5 sm:mt-1 font-bold flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-orange-500" />
                      <span>CONTENT CREATOR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Channel Details & Two Prominent Action Buttons */}
              <div className="md:col-span-7 text-center md:text-left flex flex-col justify-center">
                
                <div className="inline-flex items-center justify-center md:justify-start gap-1.5 text-xs font-tech font-bold uppercase tracking-wider text-red-400 mb-1.5 sm:mb-2">
                  <Radio className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>Free Fire MAX Esports Community</span>
                </div>

                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-wide">
                  {TOURNAMENT_CONFIG.host.name}
                </h3>

                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300 font-tech leading-relaxed">
                  {TOURNAMENT_CONFIG.host.description} Subscribe for tournament live streams, match rooms, and join our active Discord community for room IDs, rules, and schedules.
                </p>

                {/* Community Telemetry Pillars */}
                <div className="mt-4 sm:mt-5 grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-red-950/40 border border-red-500/30 text-left">
                    <div className="text-xs font-bold font-heading text-white flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 text-red-400 fill-current" />
                      <span>YOUTUBE BROADCASTS</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-tech mt-1">Live Match Gameplay &amp; Streams</div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-[#1c110a]/80 border border-amber-500/30 text-left">
                    <div className="text-xs font-bold font-heading text-white flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                      <span>DISCORD COMMUNITY</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-tech mt-1">Custom Room IDs &amp; Player Chat</div>
                  </div>
                </div>

                {/* TWO PROMINENT ACTION BUTTONS */}
                <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-3.5">
                  
                  {/* YouTube Button */}
                  <a
                    href={TOURNAMENT_CONFIG.host.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactical clip-corner w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl font-heading font-black text-xs sm:text-sm tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-900/50 hover:shadow-red-700/70 transition-all flex items-center justify-center gap-2 group uppercase min-h-[44px]"
                  >
                    <Youtube className="w-4 h-4 fill-current text-white shrink-0" />
                    <span>SUBSCRIBE ON YOUTUBE</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Discord Button */}
                  <a
                    href={TOURNAMENT_CONFIG.host.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactical clip-corner w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl font-heading font-black text-xs sm:text-sm tracking-wider text-white bg-gradient-to-r from-[#5865F2] via-[#4752C4] to-indigo-700 hover:from-[#6975F4] hover:to-indigo-600 shadow-xl shadow-indigo-900/50 hover:shadow-indigo-700/70 transition-all flex items-center justify-center gap-2 group uppercase min-h-[44px]"
                  >
                    <DiscordIcon className="w-4 h-4 text-white shrink-0" />
                    <span>JOIN DISCORD SERVER</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
