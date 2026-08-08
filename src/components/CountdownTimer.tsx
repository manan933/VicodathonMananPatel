'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  className?: string;
}

export default function CountdownTimer({ className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const utcMs = now.getTime();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istDate = new Date(utcMs + istOffset);

      const istYear = istDate.getUTCFullYear();
      const istMonth = istDate.getUTCMonth();
      const istDay = istDate.getUTCDate();

      // Next day 00:00 Asia/Kolkata
      const nextMidnightUtc = Date.UTC(istYear, istMonth, istDay + 1, 0, 0, 0);
      const diffMs = nextMidnightUtc - (utcMs + istOffset);

      const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return { hours, minutes, seconds, totalSeconds };
    };

    // Calculate immediately on mount
    setTimeLeft(calculateTimeRemaining());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-xs font-bold text-amber-700 dark:text-amber-400 ${className}`}
      >
        <Clock className="w-3.5 h-3.5 animate-spin" />
        <span>Next challenge drops in ...</span>
      </div>
    );
  }

  const isUnderOneHour = timeLeft.totalSeconds < 3600;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
        isUnderOneHour
          ? 'bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 animate-pulse'
          : 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-400'
      } ${className}`}
    >
      <Clock className={`w-3.5 h-3.5 ${isUnderOneHour ? 'text-rose-600 dark:text-rose-400' : 'text-amber-700 dark:text-amber-400'}`} />
      <span>
        Next challenge drops in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
    </div>
  );
}
