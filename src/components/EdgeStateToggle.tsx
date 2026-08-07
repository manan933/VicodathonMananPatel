'use client';

import React from 'react';
import { Sliders, ShieldAlert, Sparkles, UserX, CheckCircle2 } from 'lucide-react';

export type EdgeStateType = 'standard' | 'firstDay' | 'missedDay' | 'emptyProfile';

interface EdgeStateToggleProps {
  currentState: EdgeStateType;
  onStateChange: (state: EdgeStateType) => void;
}

export default function EdgeStateToggle({ currentState, onStateChange }: EdgeStateToggleProps) {
  return (
    <div className="w-full mb-6 p-3 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-rose-500/30 shadow-md">
      <div className="flex items-center justify-between gap-2 mb-2 px-1">
        <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
          <Sliders className="w-3.5 h-3.5" />
          <span>Real-World Edge Case Simulator</span>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-dark-bg px-2 py-0.5 rounded-full border border-slate-200 dark:border-dark-border font-medium">
          Interactive Toggle
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        <button
          onClick={() => onStateChange('standard')}
          aria-label="Simulate 12-day active streak state"
          className={`px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentState === 'standard'
              ? 'bg-rose-600 dark:bg-rose-500 text-white font-bold shadow-md shadow-rose-600/30'
              : 'bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-dark-border'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>12-Day Active Streak</span>
        </button>

        <button
          onClick={() => onStateChange('firstDay')}
          aria-label="Simulate first day with zero streak state"
          className={`px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentState === 'firstDay'
              ? 'bg-rose-600 dark:bg-rose-500 text-white font-bold shadow-md shadow-rose-600/30'
              : 'bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-dark-border'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Day 1 (0 Streak)</span>
        </button>

        <button
          onClick={() => onStateChange('missedDay')}
          aria-label="Simulate missed day streak recovery state"
          className={`px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentState === 'missedDay'
              ? 'bg-rose-600 dark:bg-rose-500 text-white font-bold shadow-md shadow-rose-600/30'
              : 'bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-dark-border'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
          <span>Missed Day / Recovery</span>
        </button>

        <button
          onClick={() => onStateChange('emptyProfile')}
          aria-label="Simulate unlinked profile state"
          className={`px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentState === 'emptyProfile'
              ? 'bg-rose-600 dark:bg-rose-500 text-white font-bold shadow-md shadow-rose-600/30'
              : 'bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-dark-border'
          }`}
        >
          <UserX className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
          <span>Unlinked Profile</span>
        </button>
      </div>
    </div>
  );
}
