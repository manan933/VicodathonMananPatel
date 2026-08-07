'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Sparkles, Moon, Sun, Code2, Compass, LayoutDashboard, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  streakCount?: number;
}

export default function Navbar({ streakCount = 12 }: NavbarProps) {
  const pathname = usePathname();
  const [nightMode, setNightMode] = useState(true);

  // Apply or remove the eye-care night filter on the document root
  useEffect(() => {
    if (nightMode) {
      document.documentElement.classList.add('night-mode');
    } else {
      document.documentElement.classList.remove('night-mode');
    }
    // Cleanup on unmount
    return () => document.documentElement.classList.remove('night-mode');
  }, [nightMode]);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-dark-border/80 px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-brand-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 text-white fill-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1 font-['Outfit']">
              ABTalks <span className="text-xs px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-semibold border border-rose-500/30">60D</span>
            </span>
            <span className="text-[10px] text-gray-400 font-medium hidden xs:block">Build Daily. Get Noticed.</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              pathname === '/' 
                ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Explore</span>
          </Link>

          <Link
            href="/dashboard"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              pathname === '/dashboard' 
                ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/day/12"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              pathname.startsWith('/day') 
                ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Day 12</span>
          </Link>
        </nav>

        {/* Streak Pill & Night Focus Toggle */}
        <div className="flex items-center gap-2">
          {/* Midnight Eye-Comfort Toggle */}
          <button
            onClick={() => setNightMode(!nightMode)}
            className="p-2 rounded-lg bg-dark-card border border-dark-border text-gray-400 hover:text-amber-300 transition-colors"
            title="Midnight Eye-Care Mode"
          >
            {nightMode ? <Moon className="w-4 h-4 text-amber-400 fill-amber-400/20" /> : <Sun className="w-4 h-4 text-amber-500" />}
          </button>

          {/* Active Streak Counter Badge */}
          <Link href="/dashboard" className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/40 text-amber-400 hover:border-amber-400 transition-all shadow-sm">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
            <span className="font-extrabold text-xs tracking-tight">{streakCount}d</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
