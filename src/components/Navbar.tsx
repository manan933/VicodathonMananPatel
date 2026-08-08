'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Moon, Sun, Zap, Compass, LayoutDashboard, CalendarCheck, Youtube, Briefcase, Settings, Globe } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export type ThemeMode = 'dark' | 'light' | 'brutal';

interface NavbarProps {
  streakCount?: number;
}

export default function Navbar({ streakCount = 12 }: NavbarProps) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const applyTheme = (mode: ThemeMode) => {
    document.documentElement.classList.remove('dark', 'light', 'brutal');
    if (mode === 'light') {
      document.documentElement.classList.add('light');
    } else if (mode === 'brutal') {
      document.documentElement.classList.add('brutal');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('abtalks-theme') as ThemeMode) || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : theme === 'light' ? 'brutal' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem('abtalks-theme', nextTheme);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200 dark:border-dark-border px-2.5 sm:px-4 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white font-['Outfit'] leading-none">
              ABTalks
            </span>
            <span className="text-[10px] text-slate-500 dark:text-gray-400 font-medium hidden lg:block mt-0.5 whitespace-nowrap">{t("Build Daily. Get Noticed.")}</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1 shrink min-w-0">
          <Link
            href="/"
            aria-label="Explore Tracks"
            className={`px-2 py-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 whitespace-nowrap ${
              pathname === '/' 
                ? 'bg-rose-100 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30 font-bold' 
                : 'text-slate-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-rose-500/10'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{t("Explore")}</span>
          </Link>

          <Link
            href="/dashboard"
            aria-label="Student Dashboard"
            className={`px-2 py-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 whitespace-nowrap ${
              pathname === '/dashboard' 
                ? 'bg-rose-100 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30 font-bold' 
                : 'text-slate-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-rose-500/10'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>{t("Dashboard")}</span>
          </Link>

          <Link
            href="/day/12"
            aria-label="Day 12 Workspace"
            className={`px-2 py-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 whitespace-nowrap ${
              pathname.startsWith('/day') 
                ? 'bg-rose-100 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30 font-bold' 
                : 'text-slate-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-rose-500/10'
            }`}
          >
            <CalendarCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{t("Day 12")}</span>
          </Link>

          <Link
            href="/hub"
            aria-label="Motivation and info YouTube Hub"
            className={`px-2 py-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 whitespace-nowrap ${
              pathname === '/hub' 
                ? 'bg-red-100 dark:bg-red-500/15 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30 font-bold' 
                : 'text-slate-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-rose-500/10'
            }`}
          >
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            <span>{t("Videos")}</span>
          </Link>

          <Link
            href="/recruiter"
            aria-label="Recruiter Dashboard View"
            className={`px-2 py-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 whitespace-nowrap ${
              pathname === '/recruiter' 
                ? 'bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/30 font-bold' 
                : 'text-slate-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-rose-500/10'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-violet-500" />
            <span>{t("Recruiter")}</span>
          </Link>

          <Link
            href="/admin"
            aria-label="System Admin View"
            className={`px-2 py-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 whitespace-nowrap ${
              pathname === '/admin' 
                ? 'bg-indigo-100 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 font-bold' 
                : 'text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-rose-500/10'
            }`}
          >
            <Settings className="w-3.5 h-3.5 text-indigo-500" />
            <span>{t("Admin")}</span>
          </Link>
        </nav>

        {/* Theme Toggle, Language Toggle & Streak Pill */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            aria-label="Switch Language between English and Hinglish"
            className="px-2 py-1.5 rounded-xl border border-slate-200 dark:border-dark-border text-[11px] font-bold flex items-center gap-1 hover:border-rose-500 shadow-sm bg-white dark:bg-dark-card text-slate-800 dark:text-gray-300"
            title="English / Hinglish Toggle"
          >
            <Globe className="w-3.5 h-3.5 text-rose-500" />
            <span>{language === 'english' ? 'EN 🇬🇧' : 'हि 🇮🇳'}</span>
          </button>

          {/* 3-Way Theme Switcher (Dark OLED, Light, Neo Brutalist) */}
          <button
            onClick={toggleTheme}
            aria-label={`Current Theme: ${theme}. Click to switch theme.`}
            className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border transition-all flex items-center gap-1.5 shadow-sm ${
              theme === 'brutal'
                ? 'bg-yellow-300 border-black text-black hover:bg-yellow-400 font-bold'
                : theme === 'light'
                ? 'bg-white border-slate-200 text-slate-800 hover:border-amber-400 font-bold'
                : 'bg-dark-card border-dark-border text-gray-300 hover:border-amber-400/60 font-bold'
            }`}
            title={`Current Theme: ${theme.toUpperCase()}. Click to cycle theme.`}
          >
            {mounted ? (
              theme === 'brutal' ? (
                <Zap className="w-4 h-4 text-black fill-black" />
              ) : theme === 'light' ? (
                <Sun className="w-4 h-4 text-amber-500 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400 transition-transform hover:-rotate-12" />
              )
            ) : (
              <Moon className="w-4 h-4 text-amber-400" />
            )}
            <span className="text-[11px] font-bold hidden md:inline">
              {mounted ? (theme === 'brutal' ? 'Brutal ⚡' : theme === 'light' ? 'Light ☀️' : 'Dark 🌙') : 'Theme'}
            </span>
          </button>

          {/* Active Streak Counter Badge */}
          <Link 
            href="/dashboard" 
            aria-label="Current Streak"
            className="flex items-center gap-1 px-2 py-1.5 sm:px-2.5 rounded-xl bg-amber-50 dark:bg-gradient-to-r dark:from-amber-500/20 dark:to-rose-500/20 border border-amber-300 dark:border-amber-500/40 text-amber-700 dark:text-amber-400 hover:border-amber-400 transition-all shadow-sm"
          >
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 fill-amber-500 dark:fill-amber-400 animate-bounce" />
            <span className="font-extrabold text-xs tracking-tight">{streakCount}d</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
