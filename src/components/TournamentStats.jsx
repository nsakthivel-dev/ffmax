import React from 'react';
import { Trophy, Map, Users, Award, ShieldCheck, Gamepad2, Sparkles, ChevronRight, Zap, Target } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function TournamentStats({ onSelectMatch }) {
  const statTiles = [
    {
      id: 'maps',
      icon: Map,
      value: `01 / 0${TOURNAMENT_CONFIG.stats.totalMaps}`,
      label: 'ACTIVE BATTLEGROUNDS',
      sublabel: 'Bermuda Active • 5 Coming Soon',
      detail: 'Current Map: Bermuda',
      color: 'from-amber-400 to-amber-600',
      badge: 'MAP ROTATION'
    },
    {
      id: 'total-players',
      icon: Users,
      value: `${TOURNAMENT_CONFIG.stats.totalCapacity}`,
      label: 'TOTAL WARRIORS',
      sublabel: '96 Unique Contenders',
      detail: 'Strict No-Repeat Policy',
      color: 'from-orange-400 to-orange-600',
      badge: 'ROSTER CAPACITY'
    },
    {
      id: 'per-map',
      icon: ShieldCheck,
      value: `48 / 48`,
      label: 'TWO SOLO MATCHES',
      sublabel: 'Match 1: 48 • Match 2: 48',
      detail: 'Separate 48-Player Lobbies',
      color: 'from-yellow-400 to-amber-600',
      badge: 'MATCH CAPACITIES'
    },
    {
      id: 'format',
      icon: Gamepad2,
      value: 'SOLO BR',
      label: 'COMBAT FORMAT',
      sublabel: 'Solo Battle Royale Mode',
      detail: 'Custom Room Lobbies',
      color: 'from-amber-500 to-red-600',
      badge: 'COMPETITION MODE'
    }
  ];

  return (
    <section id="tournament" className="py-16 sm:py-24 relative overflow-hidden bg-tactical-grid">
      {/* Background Radial Ambiance */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Tactical Label */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-xs font-tech text-amber-300 tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>ESPORTS COMMAND CENTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TOURNAMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-500">STRUCTURE &amp; PRIZE VAULT</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 font-tech">
            Engineered for pure competitive excellence. Two independent Solo Matches on Bermuda, 48 players each, with cash rewards for champions and zero player repeats.
          </p>
        </div>

        {/* Compact Mobile-Only Statistics Ribbon (< lg screens) */}
        {(() => {
          const totalCapacity = TOURNAMENT_CONFIG.stats.totalCapacity || 96;
          const bermudaMap = TOURNAMENT_CONFIG.maps[0];
          const totalRegistered = bermudaMap.defaultRegistered || 55;
          const totalRemaining = Math.max(0, totalCapacity - totalRegistered);
          const isFull = totalRemaining <= 0;

          return (
            <div className="block lg:hidden mb-8">
              <div className="hud-card p-3.5 sm:p-5 rounded-2xl border border-amber-500/40 shadow-xl">
                {/* Header status */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-500/20 text-xs font-tech">
                  <span className="flex items-center gap-1.5 text-amber-300 font-bold uppercase tracking-wider">
                    <Target className="w-3.5 h-3.5 text-amber-400" />
                    <span>BERMUDA DUAL MATCH TELEMETRY</span>
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech ${
                    isFull ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isFull ? 'bg-rose-400' : 'bg-emerald-400 animate-pulse'}`} />
                    <span>{isFull ? 'MATCHES FULL' : 'STATUS: OPEN'}</span>
                  </span>
                </div>

                {/* 4 Compact Mobile Stats Cells */}
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 sm:gap-3 text-center">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">PER MATCH</div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-amber-400 mt-0.5">
                      48 <span className="text-[11px] font-tech text-amber-300/80">players</span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">REGISTERED</div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-orange-400 mt-0.5">
                      {totalRegistered} <span className="text-[11px] font-tech text-slate-400">/{totalCapacity}</span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">REMAINING SLOTS</div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-emerald-400 mt-0.5">
                      {totalRemaining} <span className="text-[11px] font-tech text-slate-400">left</span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">PRIZE / MATCH</div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-amber-300 mt-0.5">
                      ₹1,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Asymmetrical Layout: Left Grand Prize Vault & Right 2x2 Telemetry Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 Cols): Grand Championship Prize Vault */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="hud-card corner-bracket rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between relative overflow-hidden border-2 border-amber-500/50 shadow-2xl group">
              
              {/* Fiery Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400" />

              {/* Background Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-500/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div>
                {/* Vault Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-xs font-tech font-bold text-amber-300 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>PRIZE POOL BREAKDOWN</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                    VERIFIED POOL
                  </span>
                </div>

                {/* Main Cash Pool Display */}
                <div className="text-xs font-tech uppercase tracking-widest text-slate-400 font-bold">
                  TOTAL CHAMPIONSHIP PURSE
                </div>
                <div className="text-5xl sm:text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] mt-1">
                  ₹{TOURNAMENT_CONFIG.stats.totalPrizePool.toLocaleString()}
                </div>
                <p className="text-xs font-tech text-slate-300 mt-2">
                  Guaranteed ₹2,000 prize pool allocated across two independent solo matches on Bermuda (₹1,000 per match winner).
                </p>

                {/* Per Match Reward Pill Box */}
                <div className="mt-6 p-4 rounded-2xl bg-[#1f150c]/85 border border-amber-500/35 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-slate-950 font-black shadow-lg">
                      <Award className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="text-xs font-tech text-slate-400 font-bold uppercase tracking-wider">
                        WINNER PER MATCH
                      </div>
                      <div className="text-2xl font-extrabold font-heading text-emerald-400">
                        ₹{TOURNAMENT_CONFIG.stats.winnerPrizePerMatch.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-tech text-amber-300 block font-bold">2 WINNERS TOTAL</span>
                    <span className="text-[10px] text-slate-400">1 Champion per Match</span>
                  </div>
                </div>

                {/* Dual Match Allocation Micro-Grid */}
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl border bg-amber-950/60 border-amber-400/60 ring-1 ring-amber-400/30 text-center">
                    <div className="text-[10px] font-tech text-amber-400 font-bold">MATCH 1 • BERMUDA</div>
                    <div className="text-sm font-heading font-extrabold text-white mt-0.5">₹1,000 WINNER</div>
                    <div className="text-[10px] font-tech font-bold text-emerald-400">48 PLAYERS • SOLO</div>
                  </div>
                  <div className="p-2.5 rounded-xl border bg-amber-950/60 border-amber-400/60 ring-1 ring-amber-400/30 text-center">
                    <div className="text-[10px] font-tech text-amber-400 font-bold">MATCH 2 • BERMUDA</div>
                    <div className="text-sm font-heading font-extrabold text-white mt-0.5">₹1,000 WINNER</div>
                    <div className="text-[10px] font-tech font-bold text-emerald-400">48 PLAYERS • SOLO</div>
                  </div>
                </div>
              </div>

              {/* Action Link to Maps */}
              <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between">
                <span className="text-xs font-tech text-slate-400">
                  Select your match on Bermuda
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectMatch) onSelectMatch();
                    else window.location.hash = 'select-match';
                  }}
                  className="btn-tactical inline-flex items-center gap-1.5 text-xs font-heading font-bold text-amber-300 hover:text-white transition-colors"
                >
                  <span>SELECT MATCH</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column (7 Cols): 2x2 Telemetry HUD Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {statTiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <div
                    key={tile.id}
                    className="hud-card corner-bracket p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-400/60"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${tile.color} text-black font-black shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <span className="text-[10px] font-tech font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 tracking-wider">
                          {tile.badge}
                        </span>
                      </div>

                      <div className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                        {tile.value}
                      </div>

                      <div className="text-sm font-heading font-bold text-amber-400 mt-1 uppercase tracking-wider">
                        {tile.label}
                      </div>

                      <div className="text-xs font-tech text-slate-300 mt-1">
                        {tile.sublabel}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] font-tech text-slate-400">
                      <span>{tile.detail}</span>
                      <Target className="w-3.5 h-3.5 text-amber-400/60" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fair Play Notice Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#170e08]/90 via-[#22160d]/90 to-[#170e08]/90 border border-amber-500/35 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white tracking-wide">
                    ONE PLAYER • ONE MATCH REGISTRATION POLICY
                  </div>
                  <div className="text-xs text-slate-300 font-tech">
                    Every competitor is permitted to enter exactly 1 match. Duplicate registrations between Match 1 and Match 2 with the same Free Fire MAX UID are strictly prohibited.
                  </div>
                </div>
              </div>
              <a
                href="#rules"
                className="btn-tactical shrink-0 px-4 py-2 rounded-xl text-xs font-bold font-tech tracking-wider text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 transition-colors uppercase"
              >
                Read All Rules
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
