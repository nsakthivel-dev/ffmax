import React from 'react';
import { Youtube, Globe, ArrowUp, ExternalLink, ShieldCheck, Radio, Sparkles } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

// Discord SVG Icon
function DiscordIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export default function Footer({ onOpenPoster }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070402]/98 border-t-2 border-amber-500/35 pt-10 sm:pt-16 pb-8 sm:pb-10 text-slate-400 relative backdrop-blur-2xl">
      
      {/* Top Hazard Caution Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 pb-8 sm:pb-12 border-b border-amber-500/20">
          
          {/* Brand & Tournament Summary */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#0e0804] to-orange-500/15 border border-amber-500/40 shadow-lg shadow-amber-500/25 flex items-center justify-center">
                <img 
                  src={TOURNAMENT_CONFIG.logo?.src || "/assets/branding/logo.png"} 
                  alt={TOURNAMENT_CONFIG.logo?.alt || "Free Fire MAX Logo"} 
                  className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
                />
              </div>
              <div className="border-l border-amber-500/30 pl-2.5">
                <div className="font-heading font-black text-sm sm:text-base tracking-wider text-white">
                  COMMUNITY ESPORTS
                </div>
                <div className="text-[10px] font-tech text-amber-400 uppercase tracking-widest font-bold">
                  TOURNAMENT 2026
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-tech leading-relaxed text-slate-300 max-w-sm">
              Enter the battle. Prove your skills. Claim victory. Bermuda Solo Arena, 2 independent matches, 96 unique players, and community esports action powered by Free Fire MAX competitors.
            </p>

            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenPoster}
                className="btn-tactical w-full sm:w-auto px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/40 transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>OFFICIAL TOURNAMENT POSTER</span>
              </button>
            </div>
          </div>

          {/* Tournament Organizer & Host with YouTube + Discord */}
          <div className="lg:col-span-4">
            <div className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>TOURNAMENT HOSTED BY</span>
            </div>
            <div className="hud-card p-4 rounded-2xl border border-red-500/30">
              <div className="font-heading font-black text-lg text-white">
                {TOURNAMENT_CONFIG.host.name}
              </div>
              <div className="text-xs font-tech text-amber-400 mb-3 font-semibold">
                Official YouTuber &amp; Creator
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={TOURNAMENT_CONFIG.host.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactical inline-flex items-center gap-2 text-xs font-tech font-bold text-red-400 hover:text-red-300 transition-colors p-2.5 sm:p-1.5 rounded-lg bg-red-950/30 hover:bg-red-950/60 border border-red-500/20 min-h-[44px]"
                >
                  <Youtube className="w-4 h-4 fill-current shrink-0" />
                  <span>Subscribe on YouTube</span>
                  <ExternalLink className="w-3 h-3 ml-auto shrink-0" />
                </a>
                <a
                  href={TOURNAMENT_CONFIG.host.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactical inline-flex items-center gap-2 text-xs font-tech font-bold text-[#7289da] hover:text-white transition-colors p-2.5 sm:p-1.5 rounded-lg bg-indigo-950/30 hover:bg-indigo-950/60 border border-indigo-500/20 min-h-[44px]"
                >
                  <DiscordIcon className="w-4 h-4 text-[#5865F2] shrink-0" />
                  <span>Join Discord Community</span>
                  <ExternalLink className="w-3 h-3 ml-auto shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Technical Partner */}
          <div className="lg:col-span-3">
            <div className="text-xs font-tech font-bold uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>TECHNICAL PARTNER</span>
            </div>
            <div className="hud-card p-4 rounded-2xl border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-amber-400 shadow-md shrink-0 flex items-center justify-center">
                  <img 
                    src={TOURNAMENT_CONFIG.technicalPartner.logoUrl || "/assets/branding/rc.png"} 
                    alt="RC Innovations Logo" 
                    className="w-full h-full object-contain rounded-full bg-white" 
                  />
                </div>
                <div>
                  <div className="font-heading font-black text-lg text-white leading-tight">
                    {TOURNAMENT_CONFIG.technicalPartner.name}
                  </div>
                  <div className="text-xs font-tech text-cyan-400 font-semibold">
                    Digital Infrastructure Partner
                  </div>
                </div>
              </div>
              <a
                href={TOURNAMENT_CONFIG.technicalPartner.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactical inline-flex items-center gap-2 text-xs font-tech font-bold text-cyan-400 hover:text-cyan-300 transition-colors p-2.5 sm:p-2 rounded-lg bg-cyan-950/30 hover:bg-cyan-950/60 border border-cyan-500/20 w-full min-h-[44px]"
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span>Visit Partner Website</span>
                <ExternalLink className="w-3 h-3 ml-auto shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Disclaimer & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-tech text-slate-400">
          <div className="text-center md:text-left">
            <p>
              © {TOURNAMENT_CONFIG.footer.copyrightYear} Free Fire MAX Tournament. All rights reserved.
            </p>
            <p className="mt-1 text-[11px] text-slate-400 max-w-2xl leading-relaxed">
              {TOURNAMENT_CONFIG.footer.disclaimer}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-tactical shrink-0 w-full sm:w-auto p-3 rounded-xl bg-amber-950/70 hover:bg-amber-900/80 border border-amber-500/50 text-amber-300 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 text-xs font-heading font-black min-h-[44px]"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
