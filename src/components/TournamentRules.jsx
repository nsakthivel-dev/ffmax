import React from 'react';
import { 
  Shield, 
  AlertOctagon, 
  Lock, 
  Heart, 
  MessageSquare, 
  User, 
  MoreVertical 
} from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function TournamentRules() {
  // Natural organic rotations for bulletin pinboard sticky notes
  const rotations = [
    '-rotate-[1.4deg]',
    'rotate-[1.2deg]',
    '-rotate-[0.9deg]',
    'rotate-[1.5deg]',
    '-rotate-[1.1deg]',
    'rotate-[0.8deg]',
    '-rotate-[1.5deg]',
    'rotate-[1.1deg]',
  ];

  const times = [
    '01:02 AM',
    '01:05 AM',
    '01:09 AM',
    '01:14 AM',
    '01:18 AM',
    '01:22 AM',
    '01:27 AM',
    '01:31 AM',
  ];

  return (
    <section id="rules" className="py-12 sm:py-24 relative overflow-hidden bg-tactical-grid">
      {/* Background glow flares */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-[11px] sm:text-xs font-tech text-amber-300 tracking-widest uppercase mb-2.5 sm:mb-3">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>COMBAT PROTOCOL &amp; COMPLIANCE MATRIX</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TOURNAMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">RULES &amp; CODE OF CONDUCT</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 font-tech">
            Strict adherence to tournament regulations is mandatory. Violations will lead to automatic rejection or disqualification without exception.
          </p>
        </div>

        {/* 8 Rules Pinned Sticky Notes on Tactical Bulletin Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TOURNAMENT_CONFIG.rules.map((rule, idx) => {
            const rotClass = rotations[idx % rotations.length];
            const timeTag = times[idx % times.length];

            return (
              <div
                key={rule.id}
                className="relative p-2 sm:p-2.5 rounded-2xl bg-gradient-to-br from-[#2c180d] via-[#3b2010] to-[#1d0d05] border-2 border-[#542d18] shadow-2xl overflow-visible flex flex-col justify-between group"
              >
                {/* Subtle Wood/Cork Board Texture & Vignette */}
                <div className="absolute inset-0 rounded-2xl bg-tactical-grid opacity-20 pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-950/20 via-transparent to-black/50 pointer-events-none" />

                {/* Pinned Paper Note */}
                <div className={`relative z-10 w-full h-full min-h-[250px] sm:min-h-[300px] bg-gradient-to-b from-[#f8e2b2] via-[#edd094] to-[#e4c27f] text-[#1c1917] p-3.5 sm:p-5 rounded-[4px] shadow-[0_16px_32px_-6px_rgba(0,0,0,0.7),0_6px_12px_rgba(0,0,0,0.5)] border border-[#d6b46e] ${rotClass} group-hover:rotate-0 transition-transform duration-300 flex flex-col justify-between`}>
                  
                  {/* Realistic 3D Red Pushpin (Thumbtack) */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <svg width="28" height="34" viewBox="0 0 28 34" fill="none" className="filter drop-shadow-[2px_4px_4px_rgba(0,0,0,0.45)]">
                      {/* Shadow cast by pin needle */}
                      <line x1="14" y1="20" x2="11" y2="30" stroke="rgba(0,0,0,0.35)" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Metal Needle tip */}
                      <line x1="14" y1="18" x2="13" y2="28" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                      <line x1="14" y1="18" x2="13" y2="28" stroke="#f1f5f9" strokeWidth="1" strokeLinecap="round" />
                      {/* Pushpin Collar / Base */}
                      <ellipse cx="14" cy="18" rx="5" ry="2.5" fill="#7f1d1d" />
                      <ellipse cx="14" cy="17" rx="4.5" ry="2" fill="#991b1b" />
                      {/* Pushpin Shank */}
                      <path d="M11 11 C11 15 12 17 14 17 C16 17 17 15 17 11 Z" fill={`url(#pinShank-${rule.id})`} />
                      {/* 3D Spherical Head */}
                      <circle cx="14" cy="10" r="8" fill={`url(#pinHeadGrad-${rule.id})`} />
                      {/* Specular 3D Highlight */}
                      <ellipse cx="11.5" cy="7.5" rx="2.5" ry="1.8" fill="white" opacity="0.9" transform="rotate(-25 11.5 7.5)" />
                      <circle cx="15.5" cy="13" r="1" fill="#fca5a5" opacity="0.6" />
                      <defs>
                        <radialGradient id={`pinHeadGrad-${rule.id}`} cx="35%" cy="30%" r="70%">
                          <stop offset="0%" stopColor="#f87171" />
                          <stop offset="35%" stopColor="#ef4444" />
                          <stop offset="70%" stopColor="#dc2626" />
                          <stop offset="100%" stopColor="#7f1d1d" />
                        </radialGradient>
                        <linearGradient id={`pinShank-${rule.id}`} x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#991b1b" />
                          <stop offset="50%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#7f1d1d" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div>
                    {/* Top Pill Container matching reference: "Last month 01:02 AM" style */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faefcd]/90 border border-[#dcba73]/70 shadow-sm text-xs font-['Kalam',cursive] font-bold text-[#451a03]">
                      <span>Last month {timeTag}</span>
                    </div>

                    {/* Handwritten Rule Content */}
                    <div className="mt-2 sm:mt-2.5">
                      <h3 className="font-['Kalam',cursive] text-base sm:text-lg font-bold text-[#1c1917] leading-tight tracking-tight mb-1">
                        {rule.title}:
                      </h3>
                      <p className="font-['Kalam',cursive] text-[13px] xs:text-[14px] sm:text-base leading-snug text-[#292524] font-medium">
                        {rule.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Toolbar matching reference: Heart 999, Chat 999, User 999, Menu dots */}
                  <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#d8b875]/70 flex items-center justify-between font-['Kalam',cursive] font-bold text-xs text-[#292524]">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                        <span>999</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-[#292524]" />
                        <span>999</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#292524]" />
                        <span>999</span>
                      </div>
                    </div>
                    <MoreVertical className="w-4 h-4 text-[#292524] opacity-80 cursor-pointer hover:opacity-100" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Organizer Fair Play High-Security Warning Terminal */}
        <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-red-500/40 shadow-2xl relative">
          
          {/* Top Hazard Caution Stripe */}
          <div className="h-2 hazard-stripes w-full" />

          <div className="p-4 sm:p-8 bg-gradient-to-r from-[#1c0c0a] via-[#140b07] to-[#1c0c0a] flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 backdrop-blur-xl">
            <div className="flex items-center gap-4 sm:gap-5 text-center md:text-left flex-col md:flex-row">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-red-600/20 border-2 border-red-500/50 text-red-500 shrink-0 shadow-lg shadow-red-950/60 animate-pulse">
                <AlertOctagon className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] sm:text-xs font-tech font-bold text-red-400 tracking-widest uppercase mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>CRITICAL COMPLIANCE NOTICE</span>
                </div>
                <div className="font-heading text-base sm:text-xl font-black text-white tracking-wide">
                  ZERO-TOLERANCE ANTI-CHEAT &amp; FAIR-PLAY ENFORCEMENT
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-tech mt-1 max-w-2xl leading-relaxed">
                  Any use of modified APKs, config scripts, third-party aimbots, teaming in solo lobbies, or macro scripts results in permanent ban and immediate report to Garena Free Fire anti-cheat moderation.
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center md:items-end gap-2 text-center md:text-right w-full md:w-auto">
              <div className="text-xs font-tech font-bold text-amber-300 bg-amber-500/15 px-3.5 sm:px-4 py-2 rounded-xl border border-amber-400/40 flex items-center justify-center gap-2 w-full md:w-auto">
                <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">Room ID &amp; Password sent to valid entries only</span>
              </div>
              <span className="text-[10px] font-tech text-slate-400">Moderated by FFM Mukesh &amp; RC Innovations</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

