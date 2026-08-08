'use client';

import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export interface CountdownTimerProps {
  className?: string;
}

interface TimeRemaining {
  hours: string;
  minutes: string;
  seconds: string;
  totalSeconds: number;
}

export default function CountdownTimer({ className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    // Calculates time remaining until 23:59:59 tonight
    const calculateTimeRemaining = (): TimeRemaining => {
      const now = new Date();
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59,
        999
      );

      const totalSeconds = Math.max(0, Math.floor((endOfDay.getTime() - now.getTime()) / 1000));
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');

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
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/30 text-xs font-extrabold text-slate-900 dark:text-amber-300 ${className}`}
      >
        <Clock className="w-3.5 h-3.5 animate-spin text-amber-600 dark:text-amber-400 shrink-0" />
        <span className="whitespace-nowrap">
          {language === 'english' ? "Next challenge drops in ..." : "Agla challenge aayega ..."}
        </span>
      </div>
    );
  }

  const isUnderOneHour = timeLeft.totalSeconds < 3600;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-extrabold transition-all ${
        isUnderOneHour
          ? 'bg-rose-100 dark:bg-rose-500/20 border-rose-400 dark:border-rose-500/40 text-slate-900 dark:text-rose-300 animate-pulse'
          : 'bg-amber-100 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/40 text-slate-900 dark:text-amber-300'
      } ${className}`}
    >
      <Clock className={`w-3.5 h-3.5 shrink-0 ${isUnderOneHour ? 'text-rose-600 dark:text-rose-400' : 'text-amber-600 dark:text-amber-400'}`} />
      <span className="whitespace-nowrap">
        {language === 'english'
          ? `Next challenge drops in ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
          : `Agla challenge aayega ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s me`}
      </span>
    </div>
  );
}
