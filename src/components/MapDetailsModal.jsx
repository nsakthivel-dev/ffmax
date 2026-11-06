import React, { useEffect } from 'react';
import { X, ExternalLink, MapPin, Users, ShieldAlert, CheckCircle2, Lock, Sparkles, Navigation, Clock, Gamepad2, ChevronRight, Trophy } from 'lucide-react';

export default function MapDetailsModal({ map, slotData, isOpen, onClose, onSelectMatch }) {
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

  const totalMax = 96;
  const registeredCount = slotData?.registered ?? map.defaultRegistered ?? 55;
  const totalRegistered = Math.min(totalMax, registeredCount);
  const totalAvailable = Math.max(0, totalMax - totalRegistered);
  const isAllFull = totalRegistered >= totalMax;
  const progressPercentage = Math.min(100, Math.round((totalRegistered / totalMax) * 100));

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-[#120b07] rounded-t-3xl sm:rounded-3xl border-t sm:border border-amber-500/40 shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Swipe / Sheet Grab Handle */}
        <div className="w-12 h-1.5 rounded-full bg-amber-500/40 mx-auto my-2 block sm:hidden shrink-0" />

        {/* Top Header with Compact Image Preview */}
        <div className="relative h-32 sm:h-44 w-full overflow-hidden bg-black shrink-0">
          <img
            src={map.image}
            alt={`Free Fire MAX Map ${map.number} - ${map.name}`}
            className={`w-full h-full object-cover ${isComingSoon ? 'grayscale-[45%] opacity-60' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120b07] via-black/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-w-[40px] min-h-[40px] p-2 rounded-xl bg-black/80 hover:bg-black/95 text-slate-200 hover:text-white border border-amber-500/40 transition-all shadow-lg flex items-center justify-center"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Coordinates */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-black/85 backdrop-blur-md border border-amber-400/60 text-xs font-heading font-extrabold text-amber-400">
              MAP {map.number}
            </span>
            {isComingSoon ? (
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-bold font-tech backdrop-blur-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                STATUS: COMING SOON
              </span>
            ) : isAllFull ? (
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-bold font-tech backdrop-blur-md bg-rose-600/90 text-white">
                STATUS: REGISTRATION FULL (96/96)
              </span>
            ) : (
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-bold font-tech backdrop-blur-md bg-emerald-600/90 text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>OPEN • 96 SLOTS POOL</span>
              </span>
            )}
          </div>

          {/* Title Area */}
          <div className="absolute bottom-2 sm:bottom-2.5 left-4 sm:left-5 right-4 sm:right-5">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white tracking-wider drop-shadow-md">
              {map.name}
            </h2>
            <p className="text-[11px] sm:text-xs font-tech text-amber-200/90 font-semibold truncate">
              {map.subtitle} • {map.terrain}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 flex-1 min-h-0 overscroll-contain">
          
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
                  {map.name} is scheduled for an upcoming tournament phase. Bermuda is currently the sole playable battleground hosting the official 96-player single registration pool. Stay tuned to official announcements for future launches!
                </p>
              </div>
            </div>
          )}

          {/* IF BERMUDA: Display Single Pool Telemetry & Post-Registration Match Division */}
          {!isComingSoon && isBermuda && (
            <div className="space-y-4">
              
              {/* Single Pool Status Box */}
              <div className="p-4 rounded-2xl bg-black/60 border border-amber-500/35">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs uppercase font-tech font-bold text-amber-400 tracking-wider flex items-center gap-1.5">
                    <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>COMMON REGISTRATION POOL (96 SLOTS TOTAL)</span>
                  </h3>
                  <span className="text-xs font-tech text-emerald-400 font-bold font-mono">
                    {totalAvailable} Slots Remaining
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center my-3 font-tech">
                  <div className="p-2 rounded-xl bg-[#1c120a] border border-amber-500/20">
                    <span className="text-[10px] text-slate-400 block uppercase">Capacity</span>
                    <span className="text-base font-heading font-black text-white">96</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#1c120a] border border-amber-500/20">
                    <span className="text-[10px] text-slate-400 block uppercase">Registered</span>
                    <span className="text-base font-heading font-black text-amber-400">{totalRegistered}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#1c120a] border border-amber-500/20">
                    <span className="text-[10px] text-slate-400 block uppercase">Available</span>
                    <span className="text-base font-heading font-black text-emerald-400">{totalAvailable}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-black/90 overflow-hidden border border-amber-500/30">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isAllFull ? 'bg-rose-500' : 'bg-gradient-to-r from-orange-600 via-amber-400 to-yellow-300'
                    }`}
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Match Division Explanation */}
              <div className="p-4 rounded-2xl bg-[#180e08] border border-amber-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-amber-300">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>MATCH DIVISION AFTER REGISTRATION</span>
                </div>
                <p className="text-xs font-tech text-slate-300 leading-relaxed">
                  Players do not choose Match 1 or Match 2 during registration. Once all 96 registration slots are filled, the organizer will manually divide the 96 registered players into two separate matches of 48 players each:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-black/50 border border-amber-500/20 text-xs font-tech">
                    <div className="font-heading font-bold text-white text-sm">MATCH 1</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">Solo • Bermuda • 48 Players</div>
                    <div className="text-emerald-400 font-bold mt-1">₹1,000 Winner Prize</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-orange-500/20 text-xs font-tech">
                    <div className="font-heading font-bold text-white text-sm">MATCH 2</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">Solo • Bermuda • 48 Players</div>
                    <div className="text-emerald-400 font-bold mt-1">₹1,000 Winner Prize</div>
                  </div>
                </div>
              </div>

              {/* Strict No Repeated Players Notice */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-start gap-2.5 text-xs font-tech text-slate-300">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300 font-heading">ONE REGISTRATION PER PLAYER:</strong> Each competitor may register only once. Duplicate Free Fire MAX UIDs are strictly prohibited. Room ID &amp; Password will be dispatched via official announcements prior to match time.
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
              <span>REGISTRATION IS FULL</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onClose();
                if (onSelectMatch) onSelectMatch();
              }}
              className="btn-tactical flex-1 py-3 px-4 sm:px-6 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>REGISTER NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
