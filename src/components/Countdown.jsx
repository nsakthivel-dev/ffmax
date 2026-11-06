import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function Countdown() {
  const targetDateStr = TOURNAMENT_CONFIG.schedule?.targetDate?.trim();

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDateStr));

  function calculateTimeLeft(target) {
    if (!target) return null;
    const diff = new Date(target).getTime() - new Date().getTime();
    if (isNaN(diff) || diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPast: false
    };
  }

  useEffect(() => {
    if (!targetDateStr) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateStr));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateStr]);

  // If no date is configured in the config file, display the required fallback message
  if (!targetDateStr || !timeLeft) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-[#140e09]/90 border border-amber-500/30 backdrop-blur-sm shadow-md">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs uppercase font-tech text-amber-300 font-bold tracking-wider">Tournament Schedule</div>
            <div className="text-sm sm:text-base font-heading font-extrabold text-amber-400 tracking-wide">
              {TOURNAMENT_CONFIG.schedule?.fallbackMessage || "TOURNAMENT DATE WILL BE ANNOUNCED."}
            </div>
          </div>
        </div>
        <span className="text-xs font-tech text-slate-400">Stay tuned on YouTube: @FFM__MUKESH</span>
      </div>
    );
  }

  // Active countdown cards
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-widest text-amber-400">
          <Clock className="w-4 h-4 text-orange-400 animate-pulse" />
          <span>MISSION T-MINUS // BATTLE LAUNCH</span>
        </div>
        <span className="text-[11px] font-tech text-amber-300/80 font-semibold px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/25">
          {TOURNAMENT_CONFIG.schedule.timeZone || "IST (UTC+5:30)"}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {[
          { label: 'DAYS', value: timeLeft.days, color: 'text-amber-400' },
          { label: 'HOURS', value: timeLeft.hours, color: 'text-amber-300' },
          { label: 'MINUTES', value: timeLeft.minutes, color: 'text-orange-400' },
          { label: 'SECONDS', value: timeLeft.seconds, color: 'text-yellow-400' },
        ].map((unit) => (
          <div
            key={unit.label}
            className="hud-card corner-bracket p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center text-center shadow-xl group hover:border-amber-400/60 transition-all"
          >
            <div className={`text-2xl sm:text-3xl xl:text-4xl font-extrabold font-display ${unit.color} tracking-wider drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]`}>
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-[9px] sm:text-[11px] font-tech font-extrabold tracking-widest text-slate-300 uppercase mt-0.5">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
