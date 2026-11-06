import React, { useEffect } from 'react';
import { X, ExternalLink, MapPin, Users, ShieldAlert, CheckCircle2, Lock, Sparkles, Navigation, Clock, Gamepad2, ChevronRight } from 'lucide-react';

export default function MapDetailsModal({ map, slotData, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !map) return null;

  const isComingSoon = map.status === 'COMING_SOON';
  const isBermuda = map.id === 'map-01' || map.name === 'BERMUDA';

  // Bermuda Dual Match Metrics (48 players each = 96 unique players)
  const matches = map.matches || [
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
  const isAllFull = match1Slot.isFull && match2Slot.isFull;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-[#120b07] rounded-t-3xl sm:rounded-3xl border-t sm:border border-amber-500/40 shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Swipe / Sheet Grab Handle */}
        <div className="w-12 h-1.5 rounded-full bg-amber-500/40 mx-auto my-2 block sm:hidden shrink-0" />

        {/* Top Header with Image Preview */}
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-black shrink-0">
          <img
            src={map.image}
            alt={`Free Fire MAX Map ${map.number} - ${map.name}`}
            className={`w-full h-full object-cover ${isComingSoon ? 'grayscale-[45%] opacity-60' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120b07] via-black/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-black/80 hover:bg-black/95 text-slate-200 hover:text-white border border-amber-500/40 transition-all shadow-lg flex items-center justify-center"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Coordinates */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
            <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-amber-400/60 text-xs font-heading font-extrabold text-amber-400">
              MAP {map.number}
            </span>
            {isComingSoon ? (
              <span className="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold font-tech backdrop-blur-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                STATUS: COMING SOON
              </span>
            ) : isAllFull ? (
              <span className="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold font-tech backdrop-blur-md bg-rose-600/90 text-white">
                STATUS: BOTH MATCHES FULL
              </span>
            ) : (
              <span className="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold font-tech backdrop-blur-md bg-emerald-600/90 text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>OPEN • 2 SOLO MATCHES</span>
              </span>
            )}
          </div>

          {/* Title Area */}
          <div className="absolute bottom-2.5 sm:bottom-3 left-4 sm:left-5 right-4 sm:right-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-wider drop-shadow-md">
              {map.name}
            </h2>
            <p className="text-xs sm:text-sm font-tech text-amber-200/90 font-semibold">
              {map.subtitle} • {map.terrain}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-5 sm:space-y-6 flex-1 overscroll-contain">
          
          {/* Map Tactical Description */}
          <div>
            <h3 className="text-xs uppercase font-tech font-bold text-amber-400/90 tracking-widest mb-1.5 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>MAP TACTICAL BRIEFING</span>
            </h3>
            <p className="text-sm font-tech text-slate-200 leading-relaxed">
              {map.description}
            </p>
          </div>

          {/* Key Combat Zones */}
          <div>
            <h3 className="text-xs uppercase font-tech font-bold text-amber-400/90 tracking-widest mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>KEY COMBAT ZONES</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {map.hotspots.map((spot, idx) => (
                <div
                  key={idx}
                  className="px-2.5 sm:px-3 py-2 rounded-xl bg-[#1e140d]/80 border border-amber-500/30 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span className="text-xs font-tech font-bold text-slate-100 truncate">{spot}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IF COMING SOON: Clear Upcoming Notice */}
          {isComingSoon && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-bold text-sm text-amber-300">UPCOMING BATTLEFIELD</h4>
                <p className="text-xs font-tech text-slate-300 mt-1 leading-relaxed">
                  {map.name} is scheduled for an upcoming tournament phase. Bermuda is currently the sole playable battleground hosting two independent 48-player solo matches. Stay tuned to FFM Mukesh’s official YouTube &amp; Discord channels for launch announcements!
                </p>
              </div>
            </div>
          )}

          {/* IF BERMUDA: Display TWO SEPARATE MATCH CARDS */}
          {!isComingSoon && isBermuda && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase font-tech font-bold text-amber-400 tracking-widest flex items-center gap-1.5">
                  <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>TWO SEPARATE SOLO MATCHES (48 PLAYERS EACH = 96 TOTAL)</span>
                </h3>
                <span className="text-xs font-tech text-emerald-400 font-bold">
                  {totalAvailable} Slots Remaining
                </span>
              </div>

              {/* 2 Match Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* MATCH 1 CARD */}
                <div className="p-4 rounded-2xl bg-[#190f09] border-2 border-amber-500/40 hover:border-amber-400 transition-all shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/50 text-[11px] font-heading font-black">
                        MATCH 1
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-tech font-bold ${
                        match1Slot.isFull ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      }`}>
                        {match1Slot.isFull ? 'CLOSED (FULL)' : 'STATUS: OPEN'}
                      </span>
                    </div>

                    <h4 className="font-heading font-extrabold text-base text-white">
                      MATCH 1 – BERMUDA SOLO
                    </h4>
                    <p className="text-[11px] font-tech text-slate-300 mt-0.5">
                      Mode: Solo • 48 Unique Combatants
                    </p>

                    <div className="mt-3 flex items-center justify-between text-xs font-tech">
                      <span className="text-slate-400">Slots:</span>
                      <span>
                        <strong className={match1Slot.isFull ? 'text-rose-400' : 'text-emerald-400'}>
                          {match1Slot.available} Available
                        </strong>{' '}
                        <span className="text-slate-400">({match1Slot.registered}/48)</span>
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-black/80 overflow-hidden border border-amber-500/30 mt-1.5">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          match1Slot.isFull ? 'bg-rose-500' : 'bg-gradient-to-r from-orange-600 to-amber-400'
                        }`}
                        style={{ width: `${match1Slot.percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-500/20">
                    {match1Slot.isFull ? (
                      <button
                        disabled
                        className="w-full py-2.5 rounded-xl text-xs font-heading font-bold uppercase bg-rose-950/60 text-rose-300 border border-rose-500/30 cursor-not-allowed flex items-center justify-center gap-1.5"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>MATCH 1 FULL</span>
                      </button>
                    ) : (
                      <a
                        href={matches[0]?.googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tactical w-full py-2.5 px-3 rounded-xl text-xs font-heading font-extrabold uppercase bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-md flex items-center justify-center gap-1.5 group"
                      >
                        <span>REGISTER FOR MATCH 1</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

                {/* MATCH 2 CARD */}
                <div className="p-4 rounded-2xl bg-[#190f09] border-2 border-amber-500/40 hover:border-amber-400 transition-all shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-orange-500/20 text-orange-300 border border-orange-400/50 text-[11px] font-heading font-black">
                        MATCH 2
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-tech font-bold ${
                        match2Slot.isFull ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      }`}>
                        {match2Slot.isFull ? 'CLOSED (FULL)' : 'STATUS: OPEN'}
                      </span>
                    </div>

                    <h4 className="font-heading font-extrabold text-base text-white">
                      MATCH 2 – BERMUDA SOLO
                    </h4>
                    <p className="text-[11px] font-tech text-slate-300 mt-0.5">
                      Mode: Solo • 48 Different Combatants
                    </p>

                    <div className="mt-3 flex items-center justify-between text-xs font-tech">
                      <span className="text-slate-400">Slots:</span>
                      <span>
                        <strong className={match2Slot.isFull ? 'text-rose-400' : 'text-emerald-400'}>
                          {match2Slot.available} Available
                        </strong>{' '}
                        <span className="text-slate-400">({match2Slot.registered}/48)</span>
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-black/80 overflow-hidden border border-amber-500/30 mt-1.5">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          match2Slot.isFull ? 'bg-rose-500' : 'bg-gradient-to-r from-orange-600 to-amber-400'
                        }`}
                        style={{ width: `${match2Slot.percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-500/20">
                    {match2Slot.isFull ? (
                      <button
                        disabled
                        className="w-full py-2.5 rounded-xl text-xs font-heading font-bold uppercase bg-rose-950/60 text-rose-300 border border-rose-500/30 cursor-not-allowed flex items-center justify-center gap-1.5"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>MATCH 2 FULL</span>
                      </button>
                    ) : (
                      <a
                        href={matches[1]?.googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tactical w-full py-2.5 px-3 rounded-xl text-xs font-heading font-extrabold uppercase bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 hover:from-orange-400 hover:to-amber-300 text-black shadow-md flex items-center justify-center gap-1.5 group"
                      >
                        <span>REGISTER FOR MATCH 2</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

              {/* Strict No Repeated Players Notice */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-start gap-2.5 text-xs font-tech text-slate-300">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300 font-heading">STRICT NO-REPEAT POLICY:</strong> Each competitor may participate in only ONE match. A player registered for Match 1 cannot register for Match 2. Shared UID validation automatically rejects duplicate registrations across both matches.
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-5 bg-[#0e0804] border-t border-amber-500/30 flex items-center justify-between gap-3 sm:gap-4 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-300 bg-black/60 hover:bg-black/90 border border-amber-500/30 transition-colors shrink-0 min-h-[44px]"
          >
            CLOSE
          </button>

          {isComingSoon ? (
            <button
              disabled
              className="flex-1 py-3 px-4 sm:px-6 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-black/60 text-slate-500 border border-slate-700/40 cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Clock className="w-4 h-4 text-slate-500" />
              <span>REGISTRATION OPENS SOON</span>
            </button>
          ) : isAllFull ? (
            <button
              disabled
              className="flex-1 py-3 px-4 sm:px-6 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-rose-950/80 text-rose-300 border border-rose-500/40 cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Lock className="w-4 h-4 shrink-0" />
              <span>BOTH MATCHES ARE FULL</span>
            </button>
          ) : (
            <div className="flex-1 flex items-center justify-end gap-2 text-xs font-tech text-slate-400">
              <span className="hidden xs:inline">Select Match 1 or Match 2 above to register</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

