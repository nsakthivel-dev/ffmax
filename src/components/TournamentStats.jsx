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
            Engineered for pure competitive excellence. A single 96-player registration pool divided by the organizer into two separate Solo Matches on Bermuda (48 players each), with ₹1,000 champion prizes and zero player repeats.
          </p>
        </div>

        {/* Compact Mobile-Only Statistics Ribbon (< lg screens) */}
        {(() => {
          const totalCapacity = TOURNAMENT_CONFIG.stats.totalCapacity || 96;

          return (
            <div className="block lg:hidden mb-8">
              <div className="hud-card p-3.5 sm:p-5 rounded-2xl border border-amber-500/40 shadow-xl">
                {/* Header status */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-500/20 text-xs font-tech">
                  <span className="flex items-center gap-1.5 text-amber-300 font-bold uppercase tracking-wider">
                    <Target className="w-3.5 h-3.5 text-amber-400" />
                    <span>BERMUDA REGISTRATION TELEMETRY</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>STATUS: SLOTS GETTING FULL</span>
                  </span>
                </div>

                {/* 4 Compact Mobile Stats Cells */}
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 sm:gap-3 text-center">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">CAPACITY</div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-white mt-0.5">
                      {totalCapacity} <span className="text-[11px] font-tech text-slate-400">players</span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">PER MATCH</div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-amber-400 mt-0.5">
                      48 <span className="text-[11px] font-tech text-amber-300/80">players</span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">STATUS</div>
                    <div className="text-sm sm:text-base font-heading font-black text-amber-400 mt-1 uppercase truncate">
                      GETTING FULL
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">PRIZE / MATCH</div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-emerald-400 mt-0.5">
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
            <div className="hud-card corner-bracket rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-7 flex-1 flex flex-col justify-between relative overflow-hidden border-2 border-amber-500/50 shadow-2xl group gap-5">
              
              {/* Fiery Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400" />

              {/* Background Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-500/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-[10px] sm:text-xs font-tech font-bold text-amber-300 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>PRIZE &amp; MATCH STRUCTURE</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                    VERIFIED POOL
                  </span>
                </div>

                {/* Main Cash Pool Display */}
                <div>
                  <div className="text-[10px] sm:text-[11px] font-tech uppercase tracking-widest text-slate-400 font-bold">
                    TOTAL TOURNAMENT PRIZE POOL
                  </div>
                  <div className="text-3xl sm:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.5)] mt-0.5">
                    ₹{TOURNAMENT_CONFIG.stats.totalPrizePool.toLocaleString()}
                  </div>
                  <p className="text-xs font-tech text-slate-300 mt-1">
                    Distributed across two separate solo matches on Bermuda. Each match champion wins ₹1,000 cash.
                  </p>
                </div>

                {/* How Tournament Works (Clear 3-Step Process) */}
                <div className="p-3.5 rounded-2xl bg-[#1a110a]/90 border border-amber-500/30 space-y-2.5">
                  <div className="text-[11px] font-tech text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>HOW THIS TOURNAMENT WORKS</span>
                  </div>

                  <div className="space-y-2 text-xs font-tech">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        1
                      </span>
                      <p className="text-slate-300 leading-snug">
                        <strong className="text-white">Common Registration:</strong> All 96 players register in one pool. No match selection needed.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        2
                      </span>
                      <p className="text-slate-300 leading-snug">
                        <strong className="text-white">Match Division:</strong> After 96 slots fill, the organizer divides players into 2 matches of 48.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        3
                      </span>
                      <p className="text-slate-300 leading-snug">
                        <strong className="text-emerald-400">Two Winners:</strong> Match 1 Winner gets ₹1,000 and Match 2 Winner gets ₹1,000.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dual Match Allocation Preview */}
                <div className="grid grid-cols-2 gap-2 xs:gap-2.5">
                  <div className="p-2.5 xs:p-3 rounded-xl border bg-black/50 border-amber-500/30 hover:border-amber-400/50 transition-colors text-center">
                    <div className="text-[9px] xs:text-[10px] font-tech text-amber-400 font-bold uppercase truncate">MATCH 1 • BERMUDA</div>
                    <div className="text-base xs:text-lg font-heading font-black text-white mt-0.5">₹1,000 WINNER</div>
                    <div className="text-[9px] xs:text-[10px] font-tech text-emerald-400 font-semibold">48 Players • 1 Winner</div>
                  </div>
                  <div className="p-2.5 xs:p-3 rounded-xl border bg-black/50 border-orange-500/30 hover:border-orange-400/50 transition-colors text-center">
                    <div className="text-[9px] xs:text-[10px] font-tech text-orange-400 font-bold uppercase truncate">MATCH 2 • BERMUDA</div>
                    <div className="text-base xs:text-lg font-heading font-black text-white mt-0.5">₹1,000 WINNER</div>
                    <div className="text-[9px] xs:text-[10px] font-tech text-emerald-400 font-semibold">48 Players • 1 Winner</div>
                  </div>
                </div>
              </div>

              {/* Action Link to Maps */}
              <div className="pt-3 border-t border-amber-500/20 flex flex-col xs:flex-row items-center justify-between gap-2.5 text-center xs:text-left">
                <span className="text-[11px] sm:text-xs font-tech text-slate-400">
                  Single 96-slot registration pool on Bermuda
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectMatch) onSelectMatch();
                    else window.location.hash = 'select-match';
                  }}
                  className="btn-tactical inline-flex items-center gap-1.5 text-xs font-heading font-bold text-amber-300 hover:text-white transition-colors shrink-0 min-h-[38px]"
                >
                  <span>REGISTER NOW</span>
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
                    ONE REGISTRATION PER PLAYER POLICY
                  </div>
                  <div className="text-xs text-slate-300 font-tech">
                    Every competitor is permitted to register once for the 96-player tournament. Duplicate registrations with the same Free Fire MAX UID are strictly prohibited.
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
