import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function Countdown() {
  const targetDateStr = TOURNAMENT_CONFIG.schedule?.targetDate?.trim();

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDateStr));

  function calculateTimeLeft(target) {
    const now = new Date();
    let targetTime = target ? new Date(target).getTime() : NaN;
    let diff = targetTime - now.getTime();

    // If target is missing, invalid, or in the past, automatically target the upcoming Monday 8:00 PM IST
    if (isNaN(diff) || diff <= 0) {
      const nextMonday = new Date(now);
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      let daysUntilMonday = (1 - day + 7) % 7;
      if (daysUntilMonday === 0) {
        const targetToday = new Date(now);
        targetToday.setHours(20, 0, 0, 0);
        if (now.getTime() >= targetToday.getTime()) {
          daysUntilMonday = 7;
        }
      }
      nextMonday.setDate(now.getDate() + daysUntilMonday);
      nextMonday.setHours(20, 0, 0, 0);
      diff = nextMonday.getTime() - now.getTime();
    }

    if (diff < 0) diff = 0;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPast: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateStr));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateStr]);

  // Fallback state if timer is somehow null
  if (!timeLeft) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-[#140e09]/90 border border-amber-500/30 backdrop-blur-sm shadow-md">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs uppercase font-tech text-amber-300 font-bold tracking-wider">Tournament Schedule</div>
            <div className="text-sm sm:text-base font-heading font-extrabold text-amber-400 tracking-wide">
              {TOURNAMENT_CONFIG.schedule?.fallbackMessage || "TOURNAMENT: MONDAY 8:00 PM IST"}
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
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-widest text-amber-400">
          <Clock className="w-4 h-4 text-orange-400 animate-pulse" />
          <span>MISSION T-MINUS // BATTLE LAUNCH</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-tech font-black bg-gradient-to-r from-amber-500/25 to-orange-500/25 text-amber-300 border border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.25)] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>MONDAY • 8:00 PM IST</span>
          </span>
          <span className="text-[10px] font-tech text-slate-400 font-semibold px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/25 hidden xs:inline-block">
            {TOURNAMENT_CONFIG.schedule?.timeZone || "IST (UTC+5:30)"}
          </span>
        </div>
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
