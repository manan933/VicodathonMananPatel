'use client';

import React from 'react';
import { Brain, TrendingUp } from 'lucide-react';

export interface StreakPredictorProps {
  currentStreak?: number;
  completedDays: number;
  totalDays: number;
  currentDay: number;
}

export default function StreakPredictor({
  currentStreak = 0,
  completedDays,
  totalDays,
  currentDay
}: StreakPredictorProps) {
  // Prevent division by zero if currentDay is 0 or unassigned
  const safeCurrentDay = currentDay > 0 ? currentDay : 1;

  // Calculate prediction probability formula:
  // Math.min(99, Math.round((completedDays / currentDay) * 100 * 0.95))
  const probability = Math.min(
    99,
    Math.max(0, Math.round((completedDays / safeCurrentDay) * 100 * 0.95))
  );

  // Challenge duration text
  const challengeDays = totalDays > 0 ? totalDays : 60;

  // Dynamic styling according to probability thresholds (>75%, >50%, <=50%)
  const getColorClasses = (prob: number) => {
    if (prob > 75) {
      return {
        text: 'text-emerald-600 dark:text-emerald-400',
        bgIcon: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40',
        progressFill: 'bg-emerald-500'
      };
    }
    if (prob > 50) {
      return {
        text: 'text-amber-600 dark:text-amber-400',
        bgIcon: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/40',
        progressFill: 'bg-amber-500'
      };
    }
    return {
      text: 'text-rose-600 dark:text-rose-400',
      bgIcon: 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800/40',
      progressFill: 'bg-rose-500'
    };
  };

  const themeColors = getColorClasses(probability);

  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex flex-col justify-between font-['Outfit',sans-serif]">
      {/* Top Header: Brain Icon & Title */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${themeColors.bgIcon}`}
          >
            <Brain className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-slate-800 dark:text-gray-200">
            Streak Finish Probability
          </span>
        </div>
      </div>

      {/* Percentage Display */}
      <div className="my-1">
        <div className="flex items-baseline gap-1.5">
          <span className={`text-3xl font-extrabold tracking-tight ${themeColors.text}`}>
            {probability}%
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">
          chance of finishing the {challengeDays}-day challenge
        </p>
      </div>

      {/* Mini Progress Indicator */}
      <div className="w-full bg-slate-100 dark:bg-slate-800/60 rounded-full h-1.5 my-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${themeColors.progressFill}`}
          style={{ width: `${probability}%` }}
        />
      </div>

      {/* Footer Trend Line */}
      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-gray-400 pt-1 border-t border-slate-100 dark:border-slate-800/60">
        <TrendingUp className="w-3 h-3 shrink-0 text-slate-400 dark:text-gray-400" />
        <span>Based on your current consistency</span>
      </div>
    </div>
  );
}
