import React, { useEffect } from 'react';
import { X, ExternalLink, MapPin, Users, ShieldAlert, CheckCircle2, Lock, Sparkles, Navigation } from 'lucide-react';

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

  const registered = slotData?.registered ?? map.defaultRegistered ?? 0;
  const max = slotData?.max ?? 48;
  const available = slotData?.available ?? Math.max(0, max - registered);
  const isFull = slotData?.isFull ?? (registered >= max);
  const percentage = slotData?.percentage ?? Math.min(100, Math.round((registered / max) * 100));

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#120b07] rounded-t-3xl sm:rounded-3xl border-t sm:border border-amber-500/40 shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Swipe / Sheet Grab Handle */}
        <div className="w-12 h-1.5 rounded-full bg-amber-500/40 mx-auto my-2 block sm:hidden shrink-0" />

        {/* Top Header with Image Preview */}
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-black shrink-0">
          <img
            src={map.image}
            alt={`Free Fire MAX Map ${map.number} - ${map.name}`}
            className="w-full h-full object-cover"
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
            <span className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold font-tech backdrop-blur-md ${
              isFull ? 'bg-rose-600/90 text-white' : 'bg-emerald-600/90 text-white'
            }`}>
              {isFull ? 'STATUS: FULL' : 'STATUS: OPEN'}
            </span>
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

          {/* Slot Allocation and Capacity */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#180f0a]/80 border border-amber-500/30">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-tech">
              <div>
                <span className="text-slate-400">Total: </span>
                <strong className="text-white font-heading text-sm">48 Players</strong>
              </div>
              <div>
                <span className="text-slate-400">Registered: </span>
                <strong className={isFull ? 'text-rose-400 font-heading text-sm' : 'text-white font-heading text-sm'}>
                  {registered}/{max}
                </strong>
              </div>
              <div>
                <span className="text-slate-400">Available: </span>
                <strong className={isFull ? 'text-rose-400 font-heading text-sm' : 'text-emerald-400 font-heading text-sm'}>
                  {available} SLOTS
                </strong>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 rounded-full bg-black/80 overflow-hidden border border-amber-500/30">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isFull 
                    ? 'bg-rose-500' 
                    : 'bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-400'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            
            <div className="flex justify-between items-center mt-2 text-[11px] font-tech text-slate-400">
              <span>{percentage}% Slots Reserved</span>
              <span>1 UID per Player Policy</span>
            </div>
          </div>

          {/* Registration Disclaimer */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs font-tech text-slate-300">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              Registration takes place strictly via the map's official Google Form. Please provide your authentic Free Fire MAX UID.
            </span>
          </div>

        </div>

        {/* Modal Footer with Registration CTA */}
        <div className="p-3.5 sm:p-5 bg-[#0e0804] border-t border-amber-500/30 flex items-center justify-between gap-3 sm:gap-4 shrink-0">
          <button
            onClick={onClose}
            className="px-4 sm:px-5 py-3 sm:py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-300 bg-black/60 hover:bg-black/90 border border-amber-500/30 transition-colors shrink-0 min-h-[44px]"
          >
            CLOSE
          </button>

          {isFull ? (
            <button
              disabled
              className="flex-1 py-3 px-4 sm:px-6 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-rose-950/80 text-rose-300 border border-rose-500/40 cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Lock className="w-4 h-4 shrink-0" />
              <span>REGISTRATION CLOSED</span>
            </button>
          ) : (
            <a
              href={map.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 sm:px-6 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 group min-h-[44px]"
            >
              <span className="truncate">REGISTER FOR {map.name}</span>
              <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

