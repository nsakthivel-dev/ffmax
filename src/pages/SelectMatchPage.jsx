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
  Award,
  Crown,
  ChevronRight
} from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';
import { fetchLiveSlotStatus } from '../services/registrationService';
import BulletFx from '../components/BulletFx';

export default function SelectMatchPage({ onBack }) {
  const bermudaMap = TOURNAMENT_CONFIG.maps.find(
    (m) => m.id === 'map-01' || m.name === 'BERMUDA'
  ) || TOURNAMENT_CONFIG.maps[0];

  const registrationFormUrl = bermudaMap?.googleFormUrl || "https://docs.google.com/forms/d/e/1FAIpQLSdbiU8lWiPD2eG4LUNXNtph6YyGaxfdDMfTfA-FxvMV48TkvQ/viewform?usp=publish-editor";

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

  // Compute metrics for the single 96-player registration pool
  const totalMax = 96;
  const registeredCount = slotData?.['map-01']?.registered ?? bermudaMap.defaultRegistered ?? 55;
  const totalRegistered = Math.min(totalMax, registeredCount);
  const totalAvailable = Math.max(0, totalMax - totalRegistered);
  const isFull = totalRegistered >= totalMax;
  const progressPercentage = Math.min(100, Math.round((totalRegistered / totalMax) * 100));

  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black relative bg-[#0a0705]">
      {/* Tactical Bullet Sparks FX */}
      <BulletFx />

      {/* Primary AAA Background Layer from opening.jpg */}
      <div className="site-bg-wrapper" aria-hidden="true" />

      {/* Sticky Top Esports Bar */}
      <header className="sticky top-0 z-40 bg-[#0a0705]/95 backdrop-blur-xl border-b border-amber-500/35 shadow-2xl py-2.5 px-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            className="btn-tactical inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 hover:text-white font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all group min-h-[40px]"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 group-hover:-translate-x-1 transition-transform shrink-0" />
            <span className="hidden xs:inline">BACK TO TOURNAMENT</span>
            <span className="xs:hidden">BACK</span>
          </button>

          {/* Tournament Center Identity */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-tech font-bold text-amber-400 tracking-widest uppercase">
              BERMUDA SOLO ARENA // SINGLE REGISTRATION PORTAL
            </span>
          </div>

          {/* Telemetry Capsule */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-tech">
            <span className="px-2.5 py-1 rounded-lg bg-amber-950/80 border border-amber-500/50 text-amber-300 font-bold font-tech uppercase text-[11px] sm:text-xs shrink-0 flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>SLOTS GETTING FULL</span>
            </span>
          </div>

        </div>
      </header>

      {/* Main Full-Page Scrollable Content Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 sm:py-12 relative z-10">

        {/* Hero Banner for Bermuda Solo Registration */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-gradient-to-b from-[#1b1008] via-[#120a05] to-[#0e0704] p-4 xs:p-6 sm:p-10 mb-6 sm:mb-12">
          {/* Top Fiery Accent Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400" />
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-amber-500/20 border border-amber-400/40 text-[10px] sm:text-xs font-tech font-bold text-amber-300 uppercase tracking-widest mb-2.5 sm:mb-3">
                <Flame className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span className="truncate">OFFICIAL REGISTRATION • SINGLE POOL</span>
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black font-heading text-white tracking-wide uppercase leading-tight">
                BERMUDA SOLO ARENA – <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-500">96 PLAYER POOL</span>
              </h1>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 font-tech leading-relaxed">
                One common registration pool for all 96 players. After registration concludes, the organizer (<strong className="text-amber-300">{TOURNAMENT_CONFIG.host.name}</strong>) will manually divide all 96 registered warriors into two separate 48-player matches with independent <strong className="text-emerald-400">₹1,000 cash prizes</strong> for each match winner.
              </p>

              {/* Hotspots */}
              <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs font-tech text-slate-400 uppercase font-semibold">Official Hotspots:</span>
                {bermudaMap.hotspots?.map((spot, i) => (
                  <span key={i} className="text-[11px] sm:text-xs font-tech px-2 sm:px-2.5 py-0.5 rounded-md bg-black/60 border border-amber-500/30 text-amber-200">
                    {spot}
                  </span>
                ))}
              </div>
            </div>

            {/* Total Roster Telemetry Box */}
            <div className="p-3.5 xs:p-4 sm:p-5 rounded-2xl bg-black/70 border border-amber-500/40 text-center w-full lg:w-48 shrink-0 font-tech shadow-xl">
              <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">REGISTRATION STATUS</span>
              <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-black text-amber-400 mt-0.5 sm:mt-1 uppercase">
                SLOTS GETTING FULL
              </div>
              <span className="text-[11px] sm:text-xs text-emerald-400/90 block mt-0.5 sm:mt-1 font-tech font-bold uppercase tracking-wider">
                96 Capacity • Filling Fast
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: SINGLE UNIFIED REGISTRATION POOL CARD */}
        {/* ========================================================= */}
        <div className="hud-card corner-bracket p-4 xs:p-6 sm:p-10 rounded-2xl sm:rounded-3xl border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.25)] relative overflow-hidden bg-gradient-to-b from-[#1c1008] via-[#120a05] to-[#150c07] mb-8 sm:mb-12 group">
          {/* Top Fiery Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500" />

          {/* Header Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/60 text-[10px] sm:text-xs font-heading font-black text-amber-300 tracking-wider">
              <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span>OFFICIAL REGISTRATION • BERMUDA SOLO</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-tech font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-950/40">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>STATUS: SLOTS GETTING FULL</span>
            </span>
          </div>

          {/* Card Title & Mode */}
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-wide">
            COMMON SOLO REGISTRATION POOL
          </h2>
          <p className="text-[11px] sm:text-sm font-tech text-amber-300/90 mt-1 uppercase tracking-wider">
            SOLO BATTLE ROYALE • MAP: BERMUDA • ONE UNIFIED ENTRY FOR ALL 96 PLAYERS
          </p>

          {/* Key Registration Statistics (3 Primary Metrics without specific counts) */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-4">
            
            {/* Metric 1: Total Player Capacity */}
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-amber-500/30 text-center flex flex-col justify-between">
              <span className="text-[10px] sm:text-[11px] font-tech text-slate-400 uppercase font-bold tracking-wider">
                TOTAL CAPACITY
              </span>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-heading font-black text-white mt-1 sm:mt-2">
                96
              </div>
              <span className="text-[10px] sm:text-[11px] font-tech text-slate-400 mt-0.5 sm:mt-1">
                Maximum Limit
              </span>
            </div>

            {/* Metric 2: Registration Status */}
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-amber-500/30 text-center flex flex-col justify-between">
              <span className="text-[10px] sm:text-[11px] font-tech text-slate-400 uppercase font-bold tracking-wider">
                REGISTRATION STATUS
              </span>
              <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-black text-amber-400 mt-1 sm:mt-2 uppercase">
                GETTING FULL
              </div>
              <span className="text-[10px] sm:text-[11px] font-tech text-amber-300/80 mt-0.5 sm:mt-1 font-semibold">
                Slots Filling Fast
              </span>
            </div>

            {/* Metric 3: Match Allocation */}
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-amber-500/30 text-center flex flex-col justify-between">
              <span className="text-[10px] sm:text-[11px] font-tech text-slate-400 uppercase font-bold tracking-wider">
                MATCH FORMAT
              </span>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-heading font-black text-emerald-400 mt-1 sm:mt-2">
                SOLO BR
              </div>
              <span className="text-[10px] sm:text-[11px] font-tech text-emerald-300/80 mt-0.5 sm:mt-1">
                2 Matches (48 Each)
              </span>
            </div>

          </div>

          {/* Registration Progress Bar (Focus on Slots Getting Full) */}
          <div className="mt-6 sm:mt-8 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/70 border border-amber-500/30">
            <div className="flex items-center justify-between text-xs font-tech mb-2">
              <span className="text-slate-300 font-semibold uppercase text-[11px] sm:text-xs">Registration Demand</span>
              <span className="font-heading font-bold text-amber-300 text-[11px] sm:text-xs uppercase flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                <span>SLOTS GETTING FULL</span>
              </span>
            </div>
            
            <div className="w-full h-3 sm:h-3.5 bg-black/90 rounded-full overflow-hidden border border-amber-500/40 p-0.5">
              <div 
                className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-orange-600 via-amber-400 to-yellow-300 shadow-[0_0_15px_rgba(245,158,11,0.6)] w-[85%]"
              />
            </div>

            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-tech text-slate-400 mt-2">
              <span className="text-amber-300 font-semibold">High Demand • Register Fast</span>
              <span className="text-amber-400/80">Auto-locks at 96 submissions</span>
            </div>
          </div>

          {/* ONE REGISTER NOW BUTTON */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-amber-500/30">
            {isFull ? (
              <button
                type="button"
                disabled
                className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-700 text-slate-500 font-heading font-bold text-sm sm:text-base uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                <span>REGISTRATION CLOSED • 96/96 FULL</span>
              </button>
            ) : (
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactical w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-heading font-black text-sm xs:text-base sm:text-lg tracking-wider shadow-2xl shadow-amber-500/40 transition-all uppercase flex items-center justify-center gap-2 sm:gap-3 group min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black animate-pulse" />
                <span>REGISTER NOW</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
            <p className="text-[11px] sm:text-xs font-tech text-slate-300 text-center mt-2.5 sm:mt-3">
              * One registration per player. Requires your valid Free Fire MAX UID. Duplicate entries will be automatically discarded.
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* SECTION 2: MATCH DIVISION AFTER REGISTRATION */}
        {/* ========================================================= */}
        <div className="mb-12">
          
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/70 border border-amber-500/40 text-xs font-tech text-amber-300 uppercase tracking-widest mb-2">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>POST-REGISTRATION ALLOCATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-wide">
              MATCH DIVISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">AFTER REGISTRATION</span>
            </h2>
            <p className="text-xs sm:text-sm font-tech text-slate-300 mt-2 leading-relaxed">
              Players do <strong>not</strong> choose Match 1 or Match 2 during registration. Once all 96 registration slots are filled, the organizer (<strong className="text-amber-300">{TOURNAMENT_CONFIG.host.name}</strong>) will manually divide the 96 registered players into two separate matches of 48 players each. Official match assignments, schedules, room IDs, and passwords will be announced via official channels.
            </p>
          </div>

          {/* Two Divided Match Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* MATCH 1 PREVIEW */}
            <div className="hud-card corner-bracket p-4 xs:p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#180e08]/90 via-[#100905] to-[#150c07] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/50 text-[11px] sm:text-xs font-heading font-black text-amber-300 tracking-wider">
                    MATCH 1
                  </span>
                  <span className="text-[11px] sm:text-xs font-tech font-bold text-amber-300">
                    48 PLAYERS
                  </span>
                </div>

                <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold font-heading text-white">
                  MATCH 1 – BERMUDA SOLO
                </h3>
                <p className="text-[11px] sm:text-xs font-tech text-slate-400 mt-0.5 uppercase tracking-wider">
                  SOLO BATTLE ROYALE • MAP: BERMUDA
                </p>

                {/* Match Specs */}
                <div className="mt-3.5 sm:mt-4 space-y-2 font-tech text-xs">
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <span className="text-slate-400">Game Mode:</span>
                    <span className="font-bold text-white font-heading">SOLO</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <span className="text-slate-400">Map:</span>
                    <span className="font-bold text-amber-300 font-heading">Bermuda</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <span className="text-slate-400">Players:</span>
                    <span className="font-bold text-white font-heading">48 Competitors</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <span className="text-slate-400">Winner:</span>
                    <span className="font-bold text-white font-heading">1 Champion</span>
                  </div>
                </div>
              </div>

              {/* Prize Tag */}
              <div className="mt-4 sm:mt-5 p-3 sm:p-3.5 rounded-xl bg-[#22140a] border border-amber-500/35 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-tech text-slate-300 font-bold uppercase">Winning Prize:</span>
                </div>
                <span className="text-lg sm:text-xl font-heading font-black text-emerald-400">
                  ₹1,000
                </span>
              </div>
            </div>

            {/* MATCH 2 PREVIEW */}
            <div className="hud-card corner-bracket p-4 xs:p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-orange-500/40 bg-gradient-to-b from-[#180e08]/90 via-[#100905] to-[#150c07] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-lg bg-orange-500/20 border border-orange-400/50 text-[11px] sm:text-xs font-heading font-black text-orange-300 tracking-wider">
                    MATCH 2
                  </span>
                  <span className="text-[11px] sm:text-xs font-tech font-bold text-orange-300">
                    48 PLAYERS
                  </span>
                </div>

                <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold font-heading text-white">
                  MATCH 2 – BERMUDA SOLO
                </h3>
                <p className="text-[11px] sm:text-xs font-tech text-slate-400 mt-0.5 uppercase tracking-wider">
                  SOLO BATTLE ROYALE • MAP: BERMUDA
                </p>

                {/* Match Specs */}
                <div className="mt-3.5 sm:mt-4 space-y-2 font-tech text-xs">
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <span className="text-slate-400">Game Mode:</span>
                    <span className="font-bold text-white font-heading">SOLO</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <span className="text-slate-400">Map:</span>
                    <span className="font-bold text-amber-300 font-heading">Bermuda</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <span className="text-slate-400">Players:</span>
                    <span className="font-bold text-white font-heading">48 Competitors</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-amber-500/20">
                    <span className="text-slate-400">Winner:</span>
                    <span className="font-bold text-white font-heading">1 Champion</span>
                  </div>
                </div>
              </div>

              {/* Prize Tag */}
              <div className="mt-4 sm:mt-5 p-3 sm:p-3.5 rounded-xl bg-[#22140a] border border-orange-500/35 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-tech text-slate-300 font-bold uppercase">Winning Prize:</span>
                </div>
                <span className="text-lg sm:text-xl font-heading font-black text-emerald-400">
                  ₹1,000
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* SECTION 3: PRIZE POOL BREAKDOWN */}
        {/* ========================================================= */}
        <div className="p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#22150a] via-[#160d06] to-[#0e0704] border-2 border-amber-500/50 shadow-2xl mb-8 sm:mb-12">
          
          <div className="text-center mb-5 sm:mb-6">
            <span className="text-[10px] sm:text-xs font-tech text-amber-300 uppercase font-bold tracking-widest block">
              OFFICIAL VERIFIED PURSE
            </span>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              TOURNAMENT PRIZE STRUCTURE
            </h3>
            <p className="text-[11px] sm:text-xs font-tech text-slate-300 mt-1">
              Total prize pool is divided across two separate solo matches.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 text-center">
            
            <div className="p-3 xs:p-4 rounded-xl sm:rounded-2xl bg-black/60 border border-amber-400/50">
              <span className="text-[9px] xs:text-[10px] font-tech text-slate-400 uppercase font-bold block truncate">TOTAL PRIZE POOL</span>
              <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-black text-amber-300 mt-1">₹2,000</div>
              <span className="text-[9px] xs:text-[10px] font-tech text-slate-400">2 Matches Combined</span>
            </div>

            <div className="p-3 xs:p-4 rounded-xl sm:rounded-2xl bg-black/60 border border-amber-500/30">
              <span className="text-[9px] xs:text-[10px] font-tech text-slate-400 uppercase font-bold block truncate">MATCH 1 WINNER</span>
              <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-black text-emerald-400 mt-1">₹1,000</div>
              <span className="text-[9px] xs:text-[10px] font-tech text-slate-400">1 Match 1 Champion</span>
            </div>

            <div className="p-3 xs:p-4 rounded-xl sm:rounded-2xl bg-black/60 border border-amber-500/30">
              <span className="text-[9px] xs:text-[10px] font-tech text-slate-400 uppercase font-bold block truncate">MATCH 2 WINNER</span>
              <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-black text-emerald-400 mt-1">₹1,000</div>
              <span className="text-[9px] xs:text-[10px] font-tech text-slate-400">1 Match 2 Champion</span>
            </div>

            <div className="p-3 xs:p-4 rounded-xl sm:rounded-2xl bg-black/60 border border-amber-500/30">
              <span className="text-[9px] xs:text-[10px] font-tech text-slate-400 uppercase font-bold block truncate">TOTAL WINNERS</span>
              <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-black text-orange-400 mt-1">2</div>
              <span className="text-[9px] xs:text-[10px] font-tech text-slate-400">1 Winner Per Match</span>
            </div>

          </div>

        </div>

        {/* Strict Compliance Notice Banner */}
        <div className="rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 bg-gradient-to-r from-[#200e08]/90 via-[#170a04] to-[#200e08]/90 border-2 border-amber-500/40 shadow-2xl mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left text-xs sm:text-sm font-tech text-slate-300 leading-relaxed">
            <strong className="text-amber-300 font-heading block text-sm sm:text-base uppercase mb-1">
              STRICT COMPLIANCE NOTICE – SINGLE REGISTRATION PER PLAYER
            </strong>
            Every player is permitted to register <strong className="text-white">only once</strong>. Duplicate Free Fire MAX UIDs are strictly blocked. After 96 players register, the organizer will announce your assigned match, schedule, custom room ID, and password via official YouTube &amp; Discord channels.
          </div>
        </div>

        {/* Bottom Navigation Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 pt-6 border-t border-amber-500/20 text-center sm:text-left">
          <button
            type="button"
            onClick={onBack}
            className="btn-tactical w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black/60 hover:bg-black/80 border border-amber-500/40 text-amber-300 font-heading text-xs font-bold uppercase tracking-wider transition-all min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>RETURN TO TOURNAMENT MAPS</span>
          </button>

          <span className="text-[11px] sm:text-xs font-tech text-slate-400">
            Organized by {TOURNAMENT_CONFIG.host.name} × {TOURNAMENT_CONFIG.technicalPartner.name}
          </span>
        </div>

      </main>
    </div>
  );
}
