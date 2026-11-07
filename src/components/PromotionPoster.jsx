import React from 'react';
import { ZoomIn, Download, Sparkles, CheckCircle2, Trophy, ShieldAlert, FileText, Crosshair, ExternalLink } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function PromotionPoster({ onOpenPoster }) {
  return (
    <section id="poster-section" className="py-12 sm:py-24 relative overflow-hidden bg-tactical-grid">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-orange-600/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-[11px] sm:text-xs font-tech text-amber-300 tracking-widest uppercase mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>OFFICIAL CAMPAIGN INTEL</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TOURNAMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-500">PROMOTIONAL POSTER</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 font-tech">
            The authentic tournament banner featuring official host FFM Mukesh, technical partner RC Innovations, verified prize breakdown, and registration credentials.
          </p>
        </div>

        {/* Main Grid: Left Large Poster & Right Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Poster Presentation with Aspect Ratio & Cyber Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[380px] group">
              
              {/* Vibrant Back Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-95 transition duration-500" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0c0805] border-2 border-amber-500/50 shadow-2xl corner-bracket">
                
                {/* Tactical Chassis Header */}
                <div className="p-2.5 px-4 bg-gradient-to-r from-[#170e08] via-[#22160d] to-[#120b06] border-b border-amber-500/35 flex items-center justify-between text-xs font-tech">
                  <div className="flex items-center gap-2 text-amber-300 font-bold">
                    <Crosshair className="w-3.5 h-3.5 text-amber-400" />
                    <span>VERIFIED OFFICIAL ASSET</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded bg-black/60 border border-amber-500/20">
                    RES: 9:16 HD
                  </span>
                </div>

                {/* Aspect Ratio Box */}
                <div 
                  onClick={() => onOpenPoster && onOpenPoster(TOURNAMENT_CONFIG.campaignPoster || TOURNAMENT_CONFIG.poster)}
                  className="relative aspect-[9/15] w-full cursor-pointer overflow-hidden bg-black/90 flex items-center justify-center group"
                >
                  <img
                    src={TOURNAMENT_CONFIG.campaignPoster?.src || "/assets/promotion/last.jpeg"}
                    alt={TOURNAMENT_CONFIG.campaignPoster?.alt || "Free Fire MAX Tournament Campaign Poster - FFM Mukesh"}
                    className="w-full h-full object-cover sm:object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Interactive Click Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="btn-tactical px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-heading font-black text-sm tracking-wider shadow-2xl flex items-center gap-2">
                      <ZoomIn className="w-4 h-4" />
                      CLICK TO ENLARGE
                    </span>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#170e08] to-[#0d0905] border-t border-amber-500/35 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5 sm:gap-3">
                  <button
                    onClick={() => onOpenPoster && onOpenPoster(TOURNAMENT_CONFIG.campaignPoster || TOURNAMENT_CONFIG.poster)}
                    className="btn-tactical flex-1 min-w-[140px] px-4 py-3 sm:py-3.5 rounded-xl text-xs font-black font-heading tracking-wider text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-md transition-all flex items-center justify-center gap-2 uppercase min-h-[44px]"
                  >
                    <ZoomIn className="w-4 h-4 shrink-0" />
                    <span>VIEW FULL POSTER</span>
                  </button>

                  <a
                    href={TOURNAMENT_CONFIG.campaignPoster?.src || "/assets/promotion/last.jpeg"}
                    download={TOURNAMENT_CONFIG.campaignPoster?.downloadName || "FFM-Tournament-Campaign-Poster.jpeg"}
                    className="btn-tactical px-4 py-3 sm:py-3.5 rounded-xl text-xs font-bold font-heading tracking-wider text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 transition-colors flex items-center justify-center gap-2 uppercase min-h-[44px]"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    <span>DOWNLOAD</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Detailed Poster Breakdown and Highlights */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            <div className="hud-card corner-bracket p-4 xs:p-6 sm:p-7 rounded-xl sm:rounded-2xl border border-amber-500/40">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span>VERIFIED CAMPAIGN HIGHLIGHTS</span>
                </h3>
                <span className="text-[10px] font-tech text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  OFFICIAL INTEL
                </span>
              </div>
              <p className="text-sm text-slate-300 font-tech">
                The official Free Fire MAX Tournament artwork certifies the following structure established by the organizers:
              </p>

              <div className="mt-5 space-y-3.5">
                {[
                  {
                    title: "Organized by FFM Mukesh × RC Innovations",
                    desc: "Official collaboration between popular gaming creator FFM Mukesh and digital technology partner RC Innovations."
                  },
                  {
                    title: "₹1,000 Winner Prize Per Match (₹2,000 Total Pool)",
                    desc: "Two separate solo matches on Bermuda, with one winner from each match receiving a ₹1,000 cash prize (₹2,000 total tournament prize pool)."
                  },
                  {
                    title: "Solo Battle Royale Mode",
                    desc: "Classic survival competition with 48 players per map competing in individual skill matchups."
                  },
                  {
                    title: "Single 96-Player Registration Pool (Divided into 2 Matches)",
                    desc: "A total of 96 players register in one pool. The organizer manually assigns 48 players to Match 1 and 48 players to Match 2 after registration closes."
                  },
                  {
                    title: "Together For Gaming Community",
                    desc: "Focused on uniting esports enthusiasts and skilled mobile gamers in a fair, community-driven event."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-black/40 border border-amber-500/15">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold font-heading text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 font-tech mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fair Registration Callout */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-start gap-3 backdrop-blur-md">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 font-tech">
                <strong className="text-amber-300 font-heading tracking-wide">NOTICE FOR COMPETITORS:</strong>{' '}
                Always register using the exact Google Form corresponding to your intended map. Provide your authentic Free Fire MAX UID inside the form.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
