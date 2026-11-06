import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Trophy, 
  Gamepad2, 
  Users, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  ExternalLink, 
  Lock, 
  Sparkles, 
  Clock, 
  MapPin, 
  AlertOctagon, 
  Radio, 
  RefreshCw,
  Flame,
  Award
} from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';
import { fetchLiveSlotStatus } from '../services/registrationService';
import BulletFx from '../components/BulletFx';

export default function SelectMatchPage({ onBack }) {
  const bermudaMap = TOURNAMENT_CONFIG.maps.find(
    (m) => m.id === 'map-01' || m.name === 'BERMUDA'
  ) || TOURNAMENT_CONFIG.maps[0];

  const matches = bermudaMap.matches || [
    {
      id: "match-01",
      number: 1,
      name: "MATCH 1",
      title: "MATCH 1 – BERMUDA SOLO",
      mode: "SOLO",
      map: "Bermuda",
      max: 48,
      defaultRegistered: 34,
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-BERMUDA-MATCH-01-PLACEHOLDER/viewform"
    },
    {
      id: "match-02",
      number: 2,
      name: "MATCH 2",
      title: "MATCH 2 – BERMUDA SOLO",
      mode: "SOLO",
      map: "Bermuda",
      max: 48,
      defaultRegistered: 21,
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-BERMUDA-MATCH-02-PLACEHOLDER/viewform"
    }
  ];

  const [slotData, setSlotData] = useState({});
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Poll live slot status
  const loadSlots = async () => {
    setLoading(true);
    try {
      const data = await fetchLiveSlotStatus();
      if (data && data.slots) {
        setSlotData(data.slots);
        setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    } catch (err) {
      console.warn("Live status check error, fallback active:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSlots();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Compute metrics for both matches
  const match1Slot = slotData?.['match-01'] || {
    registered: matches[0]?.defaultRegistered ?? 34,
    max: 48,
    available: Math.max(0, 48 - (matches[0]?.defaultRegistered ?? 34)),
    isFull: (matches[0]?.defaultRegistered ?? 34) >= 48,
    percentage: Math.round(((matches[0]?.defaultRegistered ?? 34) / 48) * 100)
  };

  const match2Slot = slotData?.['match-02'] || {
    registered: matches[1]?.defaultRegistered ?? 21,
    max: 48,
    available: Math.max(0, 48 - (matches[1]?.defaultRegistered ?? 21)),
    isFull: (matches[1]?.defaultRegistered ?? 21) >= 48,
    percentage: Math.round(((matches[1]?.defaultRegistered ?? 21) / 48) * 100)
  };

  const totalRegistered = match1Slot.registered + match2Slot.registered;
  const totalMax = 96;
  const totalAvailable = Math.max(0, totalMax - totalRegistered);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black relative bg-[#0a0705]">
      {/* Tactical Bullet Sparks FX */}
      <BulletFx />

      {/* Primary AAA Background Layer from opening.jpg */}
      <div className="site-bg-wrapper" aria-hidden="true" />

      {/* Sticky Top Esports Bar */}
      <header className="sticky top-0 z-40 bg-[#0a0705]/95 backdrop-blur-xl border-b border-amber-500/35 shadow-2xl py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            className="btn-tactical inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 hover:text-white font-heading text-xs font-bold uppercase tracking-wider transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO TOURNAMENT</span>
          </button>

          {/* Tournament Center Identity */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-tech font-bold text-amber-400 tracking-widest uppercase">
              BERMUDA SOLO ARENA // MATCH SELECTION PORTAL
            </span>
          </div>

          {/* Telemetry Capsule */}
          <div className="flex items-center gap-2 text-xs font-tech">
            <span className="text-slate-400 hidden xs:inline">SLOTS REMAINING:</span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold font-mono">
              {totalAvailable} / 96 LEFT
            </span>
          </div>

        </div>
      </header>

      {/* Main Full-Page Scrollable Content Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">

        {/* Hero Banner for Bermuda */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-gradient-to-b from-[#1b1008] via-[#120a05] to-[#0e0704] p-6 sm:p-10 mb-8 sm:mb-12">
          {/* Top Fiery Accent Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400" />
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 border border-amber-400/40 text-xs font-tech font-bold text-amber-300 uppercase tracking-widest mb-3">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>OFFICIAL TOURNAMENT BATTLEGROUND • MAP 01</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-wide uppercase">
                BERMUDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-500">SOLO MATCHES</span>
              </h1>
              <p className="mt-3 text-xs sm:text-base text-slate-300 font-tech leading-relaxed">
                Choose between <strong className="text-amber-300">Match 1</strong> or <strong className="text-orange-400">Match 2</strong>. Each match operates as an independent 48-player custom room lobby with its own champion receiving a <strong className="text-emerald-400">₹1,000 cash prize</strong>. Total capacity: 96 unique players.
              </p>

              {/* Hotspots */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-tech text-slate-400 uppercase font-semibold">Key Hotspots:</span>
                {bermudaMap.hotspots?.map((spot, i) => (
                  <span key={i} className="text-xs font-tech px-2.5 py-0.5 rounded-md bg-black/60 border border-amber-500/30 text-amber-200">
                    {spot}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick 4-Item Telemetry Matrix */}
            <div className="grid grid-cols-2 gap-3 w-full lg:w-auto shrink-0 font-tech text-xs">
              <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-center">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Total Pool</span>
                <span className="text-xl font-heading font-black text-amber-300">₹2,000</span>
                <span className="text-[10px] text-slate-400 block">₹1,000 / Match</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-center">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Capacity</span>
                <span className="text-xl font-heading font-black text-emerald-400">96</span>
                <span className="text-[10px] text-slate-400 block">48 per Match</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-center">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Game Mode</span>
                <span className="text-sm font-heading font-bold text-white mt-1 block">SOLO BR</span>
                <span className="text-[10px] text-slate-400 block">No Teaming</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-center">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Winners</span>
                <span className="text-xl font-heading font-black text-orange-400">2</span>
                <span className="text-[10px] text-slate-400 block">1 per Match</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/70 border border-amber-500/40 text-xs font-tech text-amber-300 uppercase tracking-widest mb-2">
            <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
            <span>SELECT YOUR BATTLE LOBBY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-wide">
            AVAILABLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">SOLO MATCHES</span>
          </h2>
          <p className="text-xs sm:text-sm font-tech text-slate-300 mt-1">
            Click on your preferred match below to register via the official form. Remember: each player can register for only ONE match.
          </p>
        </div>

        {/* The Two Separate Match Cards (Full-Width, Uncramped, High Accessibility) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          
          {/* ========================================= */}
          {/* MATCH 1 – BERMUDA SOLO CARD */}
          {/* ========================================= */}
          <div className="hud-card corner-bracket p-6 sm:p-8 rounded-3xl border-2 border-amber-500/50 hover:border-amber-400 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#180e08]/95 via-[#100905] to-[#150c07] flex flex-col justify-between group transition-all duration-300">
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-amber-500/25 border border-amber-400/60 text-xs font-heading font-black text-amber-300 tracking-wider">
                  MATCH 1 • BERMUDA
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-tech font-bold ${
                  match1Slot.isFull 
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${match1Slot.isFull ? 'bg-rose-400' : 'bg-emerald-400 animate-pulse'}`} />
                  <span>{match1Slot.isFull ? 'MATCH FULL' : 'STATUS: OPEN'}</span>
                </span>
              </div>

              {/* Title & Prize */}
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-wide">
                MATCH 1 – BERMUDA SOLO
              </h3>
              <p className="text-xs font-tech text-amber-400 uppercase tracking-wider mt-1">
                SOLO BATTLE ROYALE • 48 PLAYERS MAX
              </p>

              {/* Prize Banner */}
              <div className="mt-5 p-4 rounded-2xl bg-[#22140a]/90 border border-amber-500/35 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-lg">
                    <Trophy className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech text-slate-400 uppercase tracking-wider font-bold block">
                      WINNING PRIZE
                    </span>
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400 leading-none">
                      ₹1,000
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-tech font-bold text-amber-300 block">1 CHAMPION</span>
                  <span className="text-[10px] text-slate-400">Sole Match Winner</span>
                </div>
              </div>

              {/* Match Slot Telemetry */}
              <div className="mt-5 p-4 rounded-2xl bg-black/60 border border-amber-500/25 space-y-3 font-tech text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Match Capacity:</span>
                  <span className="font-heading font-bold text-white text-sm">48 Players</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Registered Contenders:</span>
                  <span className="font-heading font-bold text-amber-400 text-sm">
                    {match1Slot.registered} / 48
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Remaining Slots:</span>
                  <span className="font-heading font-bold text-emerald-400 text-sm">
                    {match1Slot.available} SLOTS AVAILABLE
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="pt-1">
                  <div className="w-full h-3 bg-black/80 rounded-full overflow-hidden border border-amber-500/30 p-0.5">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${
                        match1Slot.isFull 
                          ? 'bg-rose-500' 
                          : 'bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-400'
                      }`}
                      style={{ width: `${Math.min(100, match1Slot.percentage)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5">
                    <span>{match1Slot.percentage}% Filled</span>
                    <span>Locks automatically at 48</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Registration CTA Button */}
            <div className="mt-6 pt-5 border-t border-amber-500/25">
              {match1Slot.isFull ? (
                <button
                  type="button"
                  disabled
                  className="w-full py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-500 font-heading font-bold text-sm uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-slate-500" />
                  <span>MATCH 1 REGISTRATION FULL</span>
                </button>
              ) : (
                <a
                  href={matches[0]?.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactical w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-heading font-black text-sm tracking-wider shadow-xl shadow-amber-500/30 transition-all uppercase flex items-center justify-center gap-2 group"
                >
                  <span>REGISTER FOR MATCH 1</span>
                  <ExternalLink className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              <p className="text-[11px] font-tech text-slate-400 text-center mt-2">
                Registration requires your verified Free Fire MAX UID.
              </p>
            </div>

          </div>

          {/* ========================================= */}
          {/* MATCH 2 – BERMUDA SOLO CARD */}
          {/* ========================================= */}
          <div className="hud-card corner-bracket p-6 sm:p-8 rounded-3xl border-2 border-orange-500/50 hover:border-orange-400 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#180e08]/95 via-[#100905] to-[#150c07] flex flex-col justify-between group transition-all duration-300">
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-400" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-orange-500/25 border border-orange-400/60 text-xs font-heading font-black text-orange-300 tracking-wider">
                  MATCH 2 • BERMUDA
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-tech font-bold ${
                  match2Slot.isFull 
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${match2Slot.isFull ? 'bg-rose-400' : 'bg-emerald-400 animate-pulse'}`} />
                  <span>{match2Slot.isFull ? 'MATCH FULL' : 'STATUS: OPEN'}</span>
                </span>
              </div>

              {/* Title & Prize */}
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-wide">
                MATCH 2 – BERMUDA SOLO
              </h3>
              <p className="text-xs font-tech text-orange-400 uppercase tracking-wider mt-1">
                SOLO BATTLE ROYALE • 48 PLAYERS MAX
              </p>

              {/* Prize Banner */}
              <div className="mt-5 p-4 rounded-2xl bg-[#22140a]/90 border border-orange-500/35 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-lg">
                    <Trophy className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech text-slate-400 uppercase tracking-wider font-bold block">
                      WINNING PRIZE
                    </span>
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400 leading-none">
                      ₹1,000
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-tech font-bold text-orange-300 block">1 CHAMPION</span>
                  <span className="text-[10px] text-slate-400">Sole Match Winner</span>
                </div>
              </div>

              {/* Match Slot Telemetry */}
              <div className="mt-5 p-4 rounded-2xl bg-black/60 border border-amber-500/25 space-y-3 font-tech text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Match Capacity:</span>
                  <span className="font-heading font-bold text-white text-sm">48 Players</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Registered Contenders:</span>
                  <span className="font-heading font-bold text-orange-400 text-sm">
                    {match2Slot.registered} / 48
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Remaining Slots:</span>
                  <span className="font-heading font-bold text-emerald-400 text-sm">
                    {match2Slot.available} SLOTS AVAILABLE
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="pt-1">
                  <div className="w-full h-3 bg-black/80 rounded-full overflow-hidden border border-amber-500/30 p-0.5">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${
                        match2Slot.isFull 
                          ? 'bg-rose-500' 
                          : 'bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400'
                      }`}
                      style={{ width: `${Math.min(100, match2Slot.percentage)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5">
                    <span>{match2Slot.percentage}% Filled</span>
                    <span>Locks automatically at 48</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Registration CTA Button */}
            <div className="mt-6 pt-5 border-t border-amber-500/25">
              {match2Slot.isFull ? (
                <button
                  type="button"
                  disabled
                  className="w-full py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-500 font-heading font-bold text-sm uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-slate-500" />
                  <span>MATCH 2 REGISTRATION FULL</span>
                </button>
              ) : (
                <a
                  href={matches[1]?.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactical w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-amber-300 text-black font-heading font-black text-sm tracking-wider shadow-xl shadow-orange-500/30 transition-all uppercase flex items-center justify-center gap-2 group"
                >
                  <span>REGISTER FOR MATCH 2</span>
                  <ExternalLink className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              <p className="text-[11px] font-tech text-slate-400 text-center mt-2">
                Registration requires your verified Free Fire MAX UID.
              </p>
            </div>

          </div>

        </div>

        {/* Strict Compliance Notice Banner */}
        <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-[#200e08]/90 via-[#170a04] to-[#200e08]/90 border-2 border-amber-500/40 shadow-2xl mb-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left text-xs sm:text-sm font-tech text-slate-300 leading-relaxed">
            <strong className="text-amber-300 font-heading block text-sm sm:text-base uppercase mb-1">
              STRICT COMPLIANCE NOTICE – ZERO REPEATED PLAYERS
            </strong>
            Every player is permitted to enter <strong className="text-white">only ONE match</strong>. Duplicate submissions across Match 1 and Match 2 using the same Free Fire MAX UID are strictly blocked. Your Room ID &amp; Password will be dispatched via official organizer channels prior to match time.
          </div>
        </div>

        {/* Bottom Navigation Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-amber-500/20 text-center sm:text-left">
          <button
            type="button"
            onClick={onBack}
            className="btn-tactical inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/60 hover:bg-black/80 border border-amber-500/40 text-amber-300 font-heading text-xs font-bold uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>RETURN TO TOURNAMENT MAPS</span>
          </button>

          <span className="text-xs font-tech text-slate-400">
            Organized by {TOURNAMENT_CONFIG.host.name} × {TOURNAMENT_CONFIG.technicalPartner.name}
          </span>
        </div>

      </main>
    </div>
  );
}
