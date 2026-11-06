import React from 'react';
import { ExternalLink, Eye, Lock, ChevronRight, Clock } from 'lucide-react';

export default function MapCard({ 
  map, 
  slotData, 
  position = 'center', // 'center' | 'left' | 'right' | 'hidden'
  onClick, 
  onOpenDetails,
  onSelectMatch
}) {
  const isCenter = position === 'center';
  const isComingSoon = map.status === 'COMING_SOON';

  const max = map.max ?? (slotData?.max ?? 48);
  const registered = slotData?.registered ?? map.defaultRegistered ?? 0;
  const available = slotData?.available ?? Math.max(0, max - registered);
  const isFull = slotData?.isFull ?? (registered >= max);
  const percentage = slotData?.percentage ?? Math.min(100, Math.round((registered / max) * 100));

  return (
    <div
      onClick={onClick}
      className={`relative w-[260px] xs:w-[285px] sm:w-[330px] md:w-[360px] h-[460px] xs:h-[480px] sm:h-[510px] md:h-[530px] rounded-3xl overflow-hidden select-none transition-all duration-300 flex flex-col justify-between border ${
        isComingSoon
          ? 'bg-[#0e0a07]/90 border border-amber-500/20 shadow-xl shadow-black/90 cursor-pointer'
          : isCenter
            ? 'bg-[#120b07]/95 border-2 border-amber-400 ring-4 ring-amber-500/30 shadow-2xl shadow-black/90 shadow-amber-950/50 cursor-pointer'
            : 'bg-[#1a120c]/85 border border-amber-500/25 shadow-xl shadow-black/80 hover:border-amber-400/50 cursor-pointer'
      }`}
    >
      {/* Background Map Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={map.image}
          alt={`Free Fire MAX Map ${map.number} - ${map.name}`}
          className={`w-full h-full object-cover pointer-events-none select-none transition-transform duration-700 ${
            isComingSoon 
              ? 'grayscale-[45%] opacity-55' 
              : isCenter 
                ? 'scale-105' 
                : 'scale-100'
          }`}
          draggable={false}
        />
        {/* Darker Vignette for Center, slightly lighter for Sides, Darkened for Coming Soon */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isComingSoon
            ? 'bg-gradient-to-t from-[#080503] via-[#080503]/85 to-black/75'
            : isCenter 
              ? 'bg-gradient-to-t from-[#0e0804] via-[#0e0804]/75 to-black/60' 
              : 'bg-gradient-to-t from-[#140c07]/95 via-[#140c07]/80 to-black/50'
        }`} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
      </div>

      {/* Top Header Information */}
      <div className="relative z-10 p-4 sm:p-5 flex items-start justify-between pointer-events-none">
        <div className="flex flex-col items-start gap-1">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg backdrop-blur-md text-xs font-heading font-extrabold shadow-md w-fit self-start ${
            isComingSoon
              ? 'bg-black/80 border border-slate-700 text-slate-300'
              : isCenter 
                ? 'bg-black/90 border border-amber-400/70 text-amber-400 ring-1 ring-amber-400/40' 
                : 'bg-black/75 border border-amber-500/30 text-amber-300'
          }`}>
            MAP {map.number}
          </span>
          <span className="text-[11px] font-tech text-amber-200/90 uppercase tracking-widest pl-1 font-semibold">
            {map.terrain}
          </span>
        </div>

        {/* Status Badge */}
        <div>
          {isComingSoon ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-tech bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md backdrop-blur-md">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>COMING SOON</span>
            </span>
          ) : isFull ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-tech bg-rose-600/90 text-white shadow-lg shadow-rose-950/60 backdrop-blur-md">
              <Lock className="w-3 h-3" />
              <span>FULL</span>
            </span>
          ) : (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-tech text-white shadow-lg backdrop-blur-md ${
              isCenter 
                ? 'bg-emerald-600/95 ring-2 ring-emerald-400/40 shadow-emerald-950/60' 
                : 'bg-emerald-700/80 shadow-emerald-950/40'
            }`}>
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span>OPEN</span>
            </span>
          )}
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className={`relative z-10 p-4 sm:p-5 pt-3 transition-colors duration-300 select-none ${
        isCenter 
          ? 'bg-gradient-to-t from-[#0e0804] via-[#0e0804]/95 to-transparent' 
          : 'bg-gradient-to-t from-[#140c07] via-[#140c07]/90 to-transparent'
      }`}>
        
        {/* Map Name & Subtitle */}
        <h3 className={`font-heading font-extrabold tracking-wider drop-shadow-md ${
          isComingSoon
            ? 'text-xl sm:text-2xl text-slate-300'
            : isCenter 
              ? 'text-2xl sm:text-3xl text-white' 
              : 'text-xl sm:text-2xl text-slate-200'
        }`}>
          {map.name}
        </h3>
        <p className="text-xs font-tech text-slate-300 line-clamp-2 mt-1 leading-relaxed pointer-events-none">
          {map.description}
        </p>

        {/* Slots & Progress Bar */}
        <div className="mt-4 pt-3 border-t border-amber-500/20 pointer-events-none">
          {isComingSoon ? (
            <div>
              <div className="flex items-center justify-between text-xs font-tech mb-1.5">
                <span className="text-slate-400">Battlefield Status:</span>
                <span className="font-semibold text-amber-300 font-heading text-xs uppercase tracking-wider">
                  UPCOMING ROTATION
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-black/80 overflow-hidden border border-amber-500/20">
                <div className="h-full rounded-full bg-amber-500/30 w-full" />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between text-xs font-tech mb-1.5">
                <span className="text-slate-400">2 Matches Capacity:</span>
                <span className="font-semibold">
                  <strong className={isFull ? 'text-rose-400 font-heading text-sm' : 'text-emerald-400 font-heading text-sm'}>
                    {available}
                  </strong>{' '}
                  <span className="text-slate-400">({registered}/96)</span>
                </span>
              </div>

              {/* Mini Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-black/80 overflow-hidden border border-amber-500/30">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isFull
                      ? 'bg-rose-500'
                      : 'bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-400'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(map);
            }}
            className={`w-full py-2.5 px-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 pointer-events-auto ${
              isCenter 
                ? 'text-amber-200 bg-[#25170d]/80 hover:bg-[#342012] border border-amber-500/40 hover:border-amber-400' 
                : 'text-slate-300 bg-[#20140b]/50 hover:bg-[#2c1c10]/70 border border-amber-500/20'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>DETAILS</span>
          </button>

          {isComingSoon ? (
            <button
              disabled
              className="w-full py-2.5 px-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-black/60 text-slate-500 border border-slate-700/40 cursor-not-allowed flex items-center justify-center gap-1 pointer-events-auto"
              title="This map is coming soon in the next phase"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>COMING SOON</span>
            </button>
          ) : isFull ? (
            <button
              disabled
              className="w-full py-2.5 px-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-rose-950/60 text-rose-300 border border-rose-500/30 cursor-not-allowed flex items-center justify-center gap-1"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>ALL FULL</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectMatch) {
                  onSelectMatch();
                } else {
                  onOpenDetails(map);
                }
              }}
              className={`w-full py-2.5 px-3 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 group shadow-md pointer-events-auto ${
                isCenter 
                  ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-amber-500/30' 
                  : 'bg-[#2a1a0f] hover:bg-[#3d2616] border border-amber-500/30 text-amber-200'
              }`}
            >
              <span>SELECT MATCH</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
