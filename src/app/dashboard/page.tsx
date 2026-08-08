'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EdgeStateToggle, { EdgeStateType } from '@/components/EdgeStateToggle';
import AnalyticsPanel from '@/components/AnalyticsPanel';
import mockData from '@/data/mockData.json';
import { 
  Flame, 
  CalendarCheck, 
  Trophy, 
  Award, 
  ArrowRight, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  AlertCircle, 
  ShieldAlert, 
  Sparkles, 
  UserCheck, 
  TrendingUp, 
  Clock, 
  BookOpen, 
  Lock
} from 'lucide-react';

export default function DashboardPage() {
  const [edgeState, setEdgeState] = useState<EdgeStateType>('standard');

  // Determine user data based on simulated edge state
  const getUserData = () => {
    switch (edgeState) {
      case 'firstDay':
        return mockData.edgeStates.firstDay;
      case 'missedDay':
        return mockData.edgeStates.missedDay;
      case 'emptyProfile':
        return mockData.edgeStates.emptyProfile;
      default:
        return mockData.currentUser;
    }
  };

  const user = getUserData();
  const isFirstDay = edgeState === 'firstDay';
  const isMissedDay = edgeState === 'missedDay';
  const isEmptyProfile = edgeState === 'emptyProfile';

  const progressPercent = Math.round((user.completedDays / user.totalDays) * 100) || 0;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-gray-100 flex flex-col font-sans">
      <Navbar streakCount={user.currentStreak} />

      <main className="max-w-4xl mx-auto w-full px-4 py-6 flex-1">
        
        {/* Interactive Edge Case Simulator Control */}
        <EdgeStateToggle currentState={edgeState} onStateChange={setEdgeState} />

        {/* Dynamic Edge Case Alert Banners */}
        {isFirstDay && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-gradient-to-r dark:from-amber-500/15 dark:via-rose-500/10 dark:to-amber-500/15 border border-amber-300 dark:border-amber-500/40 text-slate-900 dark:text-white relative overflow-hidden shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-300 dark:border-amber-500/30">
                <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-extrabold text-amber-800 dark:text-amber-300 font-['Outfit']">Welcome Aboard — Day 1 Starts Now</h3>
                <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5">
                  Your streak counter is at zero. Finish tonight's challenge to light your first flame.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    href="/day/12"
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1 hover:bg-amber-400 transition-colors shadow-sm"
                  >
                    <span>Let's Go</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {isMissedDay && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-gradient-to-r dark:from-rose-950/80 dark:via-rose-900/40 dark:to-dark-card border border-rose-300 dark:border-rose-500/50 text-slate-900 dark:text-white shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-500/20 flex items-center justify-center shrink-0 border border-rose-300 dark:border-rose-500/40">
                <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400 animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-extrabold text-rose-700 dark:text-rose-400 font-['Outfit']">Streak at Risk — Clock's Ticking</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30">
                    11h 42m Left
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-gray-300 mt-1">
                  Yesterday's commit didn't land. No stress — finish the catch-up challenge before midnight and your 8-day streak stays intact.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Link
                    href="/day/12"
                    className="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center gap-1 shadow-md shadow-rose-600/40 hover:bg-rose-700 transition-colors"
                  >
                    <span>Save My Streak</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {isEmptyProfile && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-dark-card border border-amber-300 dark:border-amber-500/40 text-slate-900 dark:text-white shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-300 dark:border-amber-500/30">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-extrabold text-amber-800 dark:text-amber-300 font-['Outfit']">Link Your Profiles to Get Noticed</h3>
                <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5">
                  Your builds won't show up on recruiter radars until GitHub and LinkedIn are connected.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-bg border border-slate-300 dark:border-dark-border text-xs font-semibold text-slate-800 dark:text-gray-200 flex items-center gap-1.5 hover:border-rose-500 shadow-sm">
                    <Github className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
                    <span>Connect GitHub</span>
                  </button>
                  <button className="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-bg border border-slate-300 dark:border-dark-border text-xs font-semibold text-slate-800 dark:text-gray-200 flex items-center gap-1.5 hover:border-rose-500 shadow-sm">
                    <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Connect LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Student Profile Header Header */}
        <div className="p-5 rounded-3xl bg-white dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-rose-500/40 shadow-lg shadow-rose-950/30"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-dark-bg flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-white fill-white" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-extrabold text-slate-900 dark:text-white font-['Outfit']">{user.name}</h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30">
                  @{user.handle}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5 flex items-center gap-1">
                <span>{user.college}</span>
                <span>•</span>
                <span className="text-amber-700 dark:text-amber-400 font-semibold">{user.year}</span>
              </p>
              <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-1 flex items-center gap-1 font-medium">
                <BookOpen className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                <span>Track: {user.track}</span>
              </p>
            </div>
          </div>

          {/* Quick Recruiter Index Pill */}
          <div className="w-full sm:w-auto p-3 rounded-2xl bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border flex items-center justify-between sm:justify-start gap-4">
            <div>
              <p className="text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Hire-Ready Score</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 font-['Outfit']">{user.recruiterScore}/100</span>
                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-dark-border" />
            <div>
              <p className="text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Campus Rank</p>
              <p className="text-lg font-extrabold text-amber-600 dark:text-amber-400 font-['Outfit']">
                {user.rankInCollege > 0 ? `#${user.rankInCollege}` : 'Unranked'}
              </p>
            </div>
          </div>
        </div>

        {/* Grid Stats & Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
          {/* Main Streak Counter Card */}
          <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-amber-300 dark:border-amber-500/30 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Flame className="w-32 h-32 text-amber-500 fill-amber-500" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400 fill-amber-500 dark:fill-amber-400 animate-bounce" />
                  <span>Active Streak</span>
                </span>
                <span className="text-[10px] text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-dark-bg px-2 py-0.5 rounded-full border border-slate-200 dark:border-dark-border font-medium">
                  Peak: {user.longestStreak} days
                </span>
              </div>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">{user.currentStreak}</span>
                <span className="text-sm font-bold text-amber-700 dark:text-amber-400">days strong</span>
              </div>
            </div>

            {/* Streak Status Bar */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/60">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-500 dark:text-gray-400 text-[11px] font-medium">Today</span>
                <span className={`font-bold text-[11px] ${user.streakHistory?.find(h => h.day === user.currentDay)?.completed ? 'text-emerald-600 dark:text-emerald-400' : edgeState === 'firstDay' ? 'text-slate-400 dark:text-gray-500' : 'text-amber-700 dark:text-amber-400'}`}>
                  {user.streakHistory?.find(h => h.day === user.currentDay)?.completed 
                    ? 'Submitted ✓' 
                    : edgeState === 'firstDay' 
                    ? 'Waiting on you' 
                    : 'In progress'}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-dark-bg overflow-hidden border border-slate-300 dark:border-dark-border">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (user.currentStreak / 60) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Overall 60-Day Progress Card */}
          <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1">
                  <CalendarCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>60-Day Progress</span>
                </span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white font-['Outfit']">{progressPercent}%</span>
              </div>

              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">Day {user.currentDay}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">/ 60 Days</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/60">
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-gray-400 mb-1 font-medium">
                <span>Done: {user.completedDays} days</span>
                <span>Left: {user.totalDays - user.completedDays} days</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-dark-bg overflow-hidden border border-slate-300 dark:border-dark-border">
                <div 
                  className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Recruiter Spotlight Score Card */}
          <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Visibility Score</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  {user.recruiterScore > 75 ? 'Top 10%' : 'Rising'}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">{user.recruiterScore}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">/ 100</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/60 text-[11px] text-slate-600 dark:text-gray-300 flex items-center justify-between font-medium">
              <span>Next feature:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Monday spotlight</span>
              </span>
            </div>
          </div>

        </div>

        {/* Featured Today's Task Banner -> Link to /day/12 */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white border border-rose-500/40 mb-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-300 font-bold text-[10px] border border-rose-500/40">
                  DAY 12 TASK
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/30 text-amber-300 font-bold text-[10px] border border-amber-500/40 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>45 Mins</span>
                </span>
                <span className="text-xs text-gray-300 font-medium">+100 XP</span>
              </div>

              <h2 className="text-xl font-extrabold text-white font-['Outfit'] leading-snug">
                {mockData.day12Challenge.title}
              </h2>
              
              <p className="text-xs text-gray-300 mt-1 line-clamp-2 leading-relaxed">
                {mockData.day12Challenge.overview}
              </p>
            </div>

            <Link
              href="/day/12"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 hover:scale-[1.02] transition-all shrink-0 w-full md:w-auto"
            >
              <span>{isMissedDay ? 'Save My Streak' : "Start Today's Build"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Daily Streak Heatmap Matrix (Days 1 to 60) */}
        <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-['Outfit']">Your 60-Day Grid</h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">Day 12 of 60</span>
          </div>

          {/* 60 Grid Blocks */}
          <div className="grid grid-cols-6 xs:grid-cols-10 sm:grid-cols-12 gap-1.5">
            {Array.from({ length: 60 }).map((_, index) => {
              const dayNum = index + 1;
              const isCompleted = dayNum < user.currentDay;
              const isCurrent = dayNum === user.currentDay;
              const isFuture = dayNum > user.currentDay;

              return (
                <Link
                  key={dayNum}
                  href={`/day/${dayNum}`}
                  className={`h-9 rounded-xl flex flex-col items-center justify-center text-[10px] font-bold transition-all relative group shadow-sm ${
                    isCurrent
                      ? 'bg-gradient-to-tr from-amber-500 to-rose-500 text-white ring-2 ring-amber-400 shadow-md shadow-rose-500/40 animate-pulse'
                      : isCompleted
                      ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40 hover:bg-rose-200 dark:hover:bg-rose-500/30'
                      : 'bg-slate-100 dark:bg-dark-bg text-slate-400 dark:text-gray-600 border border-slate-200 dark:border-dark-border hover:text-slate-700 dark:hover:text-gray-400'
                  }`}
                >
                  <span>{dayNum}</span>
                  {isCompleted && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400 mt-0.5" />}
                  {isCurrent && <Flame className="w-2.5 h-2.5 text-white fill-white mt-0.5" />}
                  {isFuture && <Lock className="w-2.5 h-2.5 text-slate-400 dark:text-gray-600 mt-0.5" />}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Analytics Dashboard Panel */}
        <div className="mb-6">
          <AnalyticsPanel />
        </div>

        {/* Achievements & Unlocked Badges */}
        <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-['Outfit']">Badges & Milestones</h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
              {user.achievements?.filter(a => a.unlocked).length || 0} Unlocked
            </span>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2.5">
            {user.achievements?.map((ach) => (
              <div
                key={ach.id}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                  ach.unlocked
                    ? 'bg-slate-50 dark:bg-dark-bg border-rose-200 dark:border-rose-500/30 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-slate-100/60 dark:bg-dark-bg/40 border-slate-200 dark:border-dark-border/40 text-slate-400 dark:text-gray-600 opacity-60'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  ach.unlocked ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30' : 'bg-slate-200 dark:bg-dark-card text-slate-400 dark:text-gray-600'
                }`}>
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-snug">{ach.title}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-gray-400 line-clamp-1 mt-0.5 font-medium">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
