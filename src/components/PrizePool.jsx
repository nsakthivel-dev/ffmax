import React from 'react';
import { 
  Trophy, 
  Award, 
  Crown, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Coins, 
  Gamepad2 
} from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function PrizePool({ onSelectMatch }) {
  const { stats } = TOURNAMENT_CONFIG;

  // Four Mandatory Key Statistics
  const keyStatistics = [
    {
      id: 'total-pool',
      label: 'TOTAL PRIZE POOL',
      value: `₹${stats.totalPrizePool.toLocaleString()}`,
      sublabel: 'Two Solo Matches Combined',
      icon: Trophy,
      color: 'from-amber-400 via-yellow-300 to-amber-500',
      badge: 'OFFICIAL PURSE',
      highlight: true
    },
    {
      id: 'match1-winner',
      label: 'MATCH 1 WINNER',
      value: `₹${stats.match1Prize.toLocaleString()}`,
      sublabel: 'Match 1 Solo Champion',
      icon: Crown,
      color: 'from-amber-400 to-orange-500',
      badge: 'MATCH 1 BOUNTY',
      highlight: false
    },
    {
      id: 'match2-winner',
      label: 'MATCH 2 WINNER',
      value: `₹${stats.match2Prize.toLocaleString()}`,
      sublabel: 'Match 2 Solo Champion',
      icon: Crown,
      color: 'from-orange-400 to-amber-500',
      badge: 'MATCH 2 BOUNTY',
      highlight: false
    },
    {
      id: 'total-winners',
      label: 'TOTAL WINNERS',
      value: `${stats.totalWinners}`,
      sublabel: '1 Champion Per Solo Match',
      icon: Award,
      color: 'from-yellow-400 to-amber-600',
      badge: '2 CHAMPIONS',
      highlight: false
    }
  ];

  const matches = [
    {
      number: 1,
      title: 'MATCH 1',
      subtitle: 'BERMUDA SOLO CHAMPIONSHIP',
      mode: 'SOLO',
      map: 'Bermuda',
      maxPlayers: stats.match1Capacity || 48,
      winnerCount: '1 Player',
      prize: `₹${stats.match1Prize.toLocaleString()}`,
      badge: 'MATCH 1 • ₹1,000 PRIZE',
      badgeColor: 'border-amber-400/50 bg-amber-500/10 text-amber-300',
      glow: 'group-hover:border-amber-400/70',
      accent: 'from-amber-500 to-orange-500',
    },
    {
      number: 2,
      title: 'MATCH 2',
      subtitle: 'BERMUDA SOLO CHAMPIONSHIP',
      mode: 'SOLO',
      map: 'Bermuda',
      maxPlayers: stats.match2Capacity || 48,
      winnerCount: '1 Player',
      prize: `₹${stats.match2Prize.toLocaleString()}`,
      badge: 'MATCH 2 • ₹1,000 PRIZE',
      badgeColor: 'border-orange-400/50 bg-orange-500/10 text-orange-300',
      glow: 'group-hover:border-orange-400/70',
      accent: 'from-orange-500 to-amber-500',
    }
  ];

  return (
    <section id="prize-pool" className="py-14 sm:py-24 relative overflow-hidden bg-tactical-grid border-y border-amber-500/20">
      {/* Dynamic Background Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-950/70 border border-amber-500/40 text-xs font-tech text-amber-300 tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>OFFICIAL ESPORTS PRIZE STRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TOURNAMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-500">PRIZE POOL</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-300 font-tech leading-relaxed max-w-2xl mx-auto">
            The tournament features a total guaranteed prize pool of <strong className="text-amber-300 font-bold">₹2,000</strong> conducted across two independent solo matches on Bermuda (48 players each, divided by the organizer after 96 registrations). Each match rewards its champion with an independent <strong className="text-emerald-400 font-bold">₹1,000</strong> cash prize.
          </p>
        </div>

        {/* 4 Key Statistics Showcase (Grid 4-Cols on Desktop, 2x2 on Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {keyStatistics.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`hud-card corner-bracket p-4 sm:p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                  stat.highlight 
                    ? 'border-2 border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.25)] bg-gradient-to-b from-[#24160a] to-[#120b06]' 
                    : 'border border-amber-500/30 hover:border-amber-400/50'
                }`}
              >
                {/* Accent Ribbon for Total Pool */}
                {stat.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${stat.color} text-slate-950 font-black shadow-lg`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-tech font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 uppercase tracking-wider">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="text-[10px] sm:text-xs font-tech text-slate-400 font-extrabold uppercase tracking-wider">
                    {stat.label}
                  </div>

                  <div className={`text-2xl sm:text-4xl font-display font-extrabold tracking-tight mt-1 ${
                    stat.highlight
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                      : 'text-white'
                  }`}>
                    {stat.value}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-amber-500/20 text-[10px] sm:text-xs font-tech text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Two Separate Matches Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {matches.map((m) => (
            <div
              key={m.number}
              className={`hud-card corner-bracket rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-amber-500/40 relative overflow-hidden group shadow-2xl transition-all duration-300 ${m.glow}`}
            >
              {/* Fiery Top Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${m.accent}`} />
              
              {/* Card Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-tech font-bold tracking-wider uppercase ${m.badgeColor}`}>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{m.badge}</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                    STATUS: OPEN
                  </span>
                </div>

                {/* Match Title & Subtitle */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-display font-black text-white">
                    {m.title}
                  </span>
                  <span className="text-xs font-tech text-amber-400 font-bold">
                    • SOLO BATTLE ROYALE
                  </span>
                </div>
                <div className="text-xs font-tech text-slate-400 uppercase tracking-widest mt-1">
                  {m.subtitle}
                </div>

                {/* Prize Hero Display */}
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#1d1209]/90 border border-amber-500/40 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-lg">
                      <Trophy className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-tech text-slate-400 font-bold uppercase tracking-wider">
                        WINNING PRIZE
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-400 leading-none mt-0.5">
                        {m.prize}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-tech text-amber-300 block font-bold">1 WINNER</span>
                    <span className="text-[10px] text-slate-400">Sole Champion</span>
                  </div>
                </div>

                {/* Match Parameter Matrix */}
                <div className="mt-5 grid grid-cols-2 gap-2.5 text-xs font-tech">
                  <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Game Mode</span>
                    <span className="text-white font-bold text-sm font-heading">{m.mode}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Official Map</span>
                    <span className="text-amber-300 font-bold text-sm font-heading">{m.map}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Maximum Capacity</span>
                    <span className="text-white font-bold text-sm font-heading">{m.maxPlayers} Players</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Winner Allocation</span>
                    <span className="text-emerald-400 font-bold text-sm font-heading">{m.winnerCount}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-5 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-tech text-slate-400 text-center sm:text-left">
                  48 players allocated per match after registration.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectMatch) onSelectMatch();
                    else window.location.hash = 'select-match';
                  }}
                  className="btn-tactical w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-heading font-black text-xs uppercase tracking-wider hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <span>REGISTER NOW (96 SLOTS POOL)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Prize Pool Distribution Footnote & Single Match Rule */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#170e08]/90 via-[#22160d]/90 to-[#170e08]/90 border border-amber-500/35 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-sm font-bold text-white tracking-wide">
                TOURNAMENT PRIZE GOVERNANCE • TOTAL POOL ₹2,000
              </div>
              <div className="text-xs text-slate-300 font-tech">
                Match 1 Champion receives ₹1,000. Match 2 Champion receives ₹1,000. Exactly 2 winners total. A single registration pool of 96 players is divided by the organizer into two 48-player matches.
              </div>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30">
              2 Matches • 2 Winners • ₹2,000 Pool
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

