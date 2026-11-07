import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function PosterModal({ isOpen, onClose, poster }) {
  const activePoster = poster || TOURNAMENT_CONFIG.poster;

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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/92 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="hud-card corner-bracket relative max-w-4xl w-full max-h-[94vh] sm:max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl border-2 border-amber-500/50 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-[#170e08] via-[#22160d] to-[#0c0805] border-b border-amber-500/35">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-400 animate-ping shrink-0" />
            <h3 className="font-heading text-xs xs:text-sm sm:text-xl font-black tracking-wider text-white truncate">
              TOURNAMENT CAMPAIGN POSTER
            </h3>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={activePoster.src}
              download={activePoster.downloadName || 'tournament-poster.jpeg'}
              className="btn-tactical inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md uppercase min-h-[36px]"
              title="Download Poster"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DOWNLOAD</span>
            </a>
            <button
              onClick={onClose}
              className="btn-tactical p-2 rounded-xl text-slate-300 hover:text-white bg-black/60 hover:bg-black/90 border border-amber-500/30 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="relative flex-1 p-2 sm:p-6 flex items-center justify-center bg-black/90 overflow-auto">
          <img
            src={activePoster.src}
            alt={activePoster.alt || "Free Fire MAX Tournament Poster"}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl border border-amber-500/30 shadow-2xl"
          />
        </div>

        {/* Modal Footer Info */}
        <div className="px-3.5 sm:px-5 py-3 sm:py-3.5 bg-[#0a0705] border-t border-amber-500/30 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 sm:gap-3 text-xs text-slate-300 font-tech">
          <div className="text-[11px] sm:text-xs">
            <span className="text-amber-400 font-bold uppercase">Organized by:</span> {TOURNAMENT_CONFIG.host.name} × {TOURNAMENT_CONFIG.technicalPartner.name}
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <span>Format: <strong className="text-white">{TOURNAMENT_CONFIG.stats.format}</strong></span>
            <span>Winner: <strong className="text-emerald-400 font-heading">₹{TOURNAMENT_CONFIG.stats.winnerPrizePerMatch.toLocaleString()} / Match</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
}
