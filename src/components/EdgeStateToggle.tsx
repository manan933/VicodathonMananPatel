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
    <div className="w-full mb-6 p-3 rounded-2xl bg-dark-card border border-rose-500/30 shadow-xl shadow-rose-950/20">
      <div className="flex items-center justify-between gap-2 mb-2 px-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400">
          <Sliders className="w-3.5 h-3.5" />
          <span>Real-World Edge Case Simulator</span>
        </div>
        <span className="text-[10px] text-gray-400 bg-dark-bg px-2 py-0.5 rounded-full border border-dark-border">
          Interactive Toggle
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        <button
          onClick={() => onStateChange('standard')}
          className={`px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentState === 'standard'
              ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/30'
              : 'bg-dark-bg text-gray-400 hover:text-white hover:bg-white/5 border border-dark-border'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>12-Day Active Streak</span>
        </button>

        <button
          onClick={() => onStateChange('firstDay')}
          className={`px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentState === 'firstDay'
              ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/30'
              : 'bg-dark-bg text-gray-400 hover:text-white hover:bg-white/5 border border-dark-border'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Day 1 (0 Streak)</span>
        </button>

        <button
          onClick={() => onStateChange('missedDay')}
          className={`px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentState === 'missedDay'
              ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/30'
              : 'bg-dark-bg text-gray-400 hover:text-white hover:bg-white/5 border border-dark-border'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
          <span>Missed Day / Recovery</span>
        </button>

        <button
          onClick={() => onStateChange('emptyProfile')}
          className={`px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentState === 'emptyProfile'
              ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/30'
              : 'bg-dark-bg text-gray-400 hover:text-white hover:bg-white/5 border border-dark-border'
          }`}
        >
          <UserX className="w-3.5 h-3.5 text-orange-400" />
          <span>Unlinked Profile</span>
        </button>
      </div>
    </div>
  );
}
