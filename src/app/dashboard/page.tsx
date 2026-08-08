'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EdgeStateToggle, { EdgeStateType } from '@/components/EdgeStateToggle';
import AnalyticsPanel from '@/components/AnalyticsPanel';
import Leaderboard from '@/components/Leaderboard';
import StreakPredictor from '@/components/StreakPredictor';
import CountdownTimer from '@/components/CountdownTimer';
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

import { useLanguage } from '@/components/LanguageProvider';

export default function DashboardPage() {
  const [edgeState, setEdgeState] = useState<EdgeStateType>('standard');
  const { language } = useLanguage();

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
                <h3 className="text-sm font-extrabold text-amber-800 dark:text-amber-300 font-['Outfit'] font-bold">
                  {language === 'english' ? "Welcome Aboard — Day 1 Starts Now" : "Swagat Hai — Shuruat Aaj Se!"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5 font-medium">
                  {language === 'english'
                    ? "Your streak starts today! Complete tonight's 45-minute project to earn your first flame badge."
                    : "Aapki streak aaj se shuru ho rahi hai! Aaj ka 45-minute ka project khatam karo aur apna pehla flame badge paao."}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    href="/day/12"
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1 hover:bg-amber-400 transition-colors shadow-sm"
                  >
                    <span>{language === 'english' ? "Let's Go" : "Chalo Shuru Karein"}</span>
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
                  <h3 className="text-sm font-extrabold text-rose-700 dark:text-rose-400 font-['Outfit']">
                    {language === 'english' ? "Streak at Risk — Clock's Ticking" : "Streak Khatre Mein Hai — Time Nikal Raha"}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30">
                    {language === 'english' ? "11h 42m Left" : "11 Ghante Bache Hain"}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-gray-300 mt-1 font-medium">
                  {language === 'english'
                    ? "Missed yesterday's code upload? No worries! Finish the quick catch-up challenge before midnight to save your 8-day streak."
                    : "Kal code upload karna bhool gaye? Koi baat nahi! Midnight se pehle catch-up challenge poora karke apni streak bachao."}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Link
                    href="/day/12"
                    className="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center gap-1 shadow-md shadow-rose-600/40 hover:bg-rose-700 transition-colors"
                  >
                    <span>{language === 'english' ? "Save My Streak" : "Mera Streak Bachao"}</span>
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
                <h3 className="text-sm font-extrabold text-amber-800 dark:text-amber-300 font-['Outfit']">
                  {language === 'english' ? "Link Your Profiles to Get Noticed" : "Noticed Hone Ke Liye Profiles Connect Karo"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5 font-medium">
                  {language === 'english'
                    ? "Connect GitHub and LinkedIn so top tech recruiters can scout your daily code proof."
                    : "Apna GitHub aur LinkedIn connect karo taaki recruiters aapke daily code aur proof ko check kar sakein."}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-bg border border-slate-300 dark:border-dark-border text-xs font-semibold text-slate-800 dark:text-gray-200 flex items-center gap-1.5 hover:border-rose-500 shadow-sm">
                    <Github className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
                    <span>{language === 'english' ? "Connect GitHub" : "GitHub Connect Karo"}</span>
                  </button>
                  <button className="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-bg border border-slate-300 dark:border-dark-border text-xs font-semibold text-slate-800 dark:text-gray-200 flex items-center gap-1.5 hover:border-rose-500 shadow-sm">
                    <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{language === 'english' ? "Connect LinkedIn" : "LinkedIn Connect Karo"}</span>
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
              <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5 flex items-center gap-1 font-medium">
                <span>{user.college}</span>
                <span>•</span>
                <span className="text-amber-700 dark:text-amber-400 font-bold">
                  {language === 'english' ? user.year : `${user.year.replace('3rd Year B.Tech CSE', '3rd Year CSE Student')}`}
                </span>
              </p>
              <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-1 flex items-center gap-1 font-semibold">
                <BookOpen className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                <span>
                  {language === 'english' ? `Track: ${user.track}` : 
                   user.track === 'Full-Stack Web & Backend Systems' ? 'Track: Full-Stack Web aur Backend Systems' :
                   user.track === 'AI & Machine Learning Apps' ? 'Track: AI aur Machine Learning Applications' :
                   user.track === 'Cloud Dev & DevOps Systems' ? 'Track: Cloud, Systems aur DevOps' :
                   user.track === 'Mobile App Dev (React Native)' ? 'Track: Mobile App Dev (React Native)' :
                   `Track: ${user.track}`}
                </span>
              </p>
            </div>
          </div>

          {/* Quick Recruiter Index Pill */}
          <div className="w-full sm:w-auto p-3 rounded-2xl bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border flex items-center justify-between sm:justify-start gap-4">
            <div>
              <p className="text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                {language === 'english' ? "Recruiter Score" : "Recruiter Score"}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 font-['Outfit']">{user.recruiterScore}/100</span>
                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-dark-border" />
            <div>
              <p className="text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                {language === 'english' ? "Campus Rank" : "Campus Rank"}
              </p>
              <p className="text-lg font-extrabold text-amber-600 dark:text-amber-400 font-['Outfit']">
                {user.rankInCollege > 0 ? `#${user.rankInCollege}` : 'Unranked'}
              </p>
            </div>
          </div>
        </div>

        {/* Grid Stats & Progress Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          
          {/* Main Streak Counter Card */}
          <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-amber-300 dark:border-amber-500/30 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Flame className="w-32 h-32 text-amber-500 fill-amber-500" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400 fill-amber-500 dark:fill-amber-400 animate-bounce" />
                  <span>{language === 'english' ? "Active Streak" : "Dhamaka Streak"}</span>
                </span>
                <span className="text-[10px] text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-dark-bg px-2 py-0.5 rounded-full border border-slate-200 dark:border-dark-border font-medium">
                  {language === 'english' ? `Peak: ${user.longestStreak} days` : `Sabse Bada: ${user.longestStreak} din`}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">{user.currentStreak}</span>
                <span className="text-sm font-bold text-amber-700 dark:text-amber-400">
                  {language === 'english' ? "days strong" : "din lagatar"}
                </span>
              </div>
            </div>

            {/* Streak Status Bar */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/60">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-500 dark:text-gray-400 text-[11px] font-semibold">
                  {language === 'english' ? "Today" : "Aaj"}
                </span>
                <span className={`font-bold text-[11px] ${user.streakHistory?.find(h => h.day === user.currentDay)?.completed ? 'text-emerald-600 dark:text-emerald-400' : edgeState === 'firstDay' ? 'text-slate-400 dark:text-gray-500' : 'text-amber-700 dark:text-amber-400'}`}>
                  {user.streakHistory?.find(h => h.day === user.currentDay)?.completed 
                    ? (language === 'english' ? 'Submitted ✓' : 'Submit Ho Gaya ✓') 
                    : edgeState === 'firstDay' 
                    ? (language === 'english' ? 'Waiting on you' : 'Aapka Intezar Hai') 
                    : (language === 'english' ? 'In progress' : 'Kaam Chal Raha Hai')}
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
                  <span>{language === 'english' ? "60-Day Progress" : "60 Din Ka Safar"}</span>
                </span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white font-['Outfit']">{progressPercent}%</span>
              </div>

              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                  {language === 'english' ? `Day ${user.currentDay}` : `Din ${user.currentDay}`}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">/ 60 Days</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/60">
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-gray-400 mb-1 font-medium">
                <span>{language === 'english' ? `Done: ${user.completedDays} days` : `Ho Gaya: ${user.completedDays} din`}</span>
                <span>{language === 'english' ? `Left: ${user.totalDays - user.completedDays} days` : `Bacha: ${user.totalDays - user.completedDays} din`}</span>
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
                  <span>{language === 'english' ? "Recruiter Score" : "Recruiter Score"}</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  {user.recruiterScore > 75 ? (language === 'english' ? 'Top 10%' : 'Top 10%') : (language === 'english' ? 'Rising' : 'Upar Ja Raha')}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">{user.recruiterScore}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">/ 100</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/60 text-[11px] text-slate-600 dark:text-gray-300 flex items-center justify-between font-semibold">
              <span>{language === 'english' ? "Next feature:" : "Agla Feature:"}</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{language === 'english' ? "Monday spotlight" : "Monday Spotlight"}</span>
              </span>
            </div>
          </div>

          {/* Completion Forecast Predictor Card */}
          <StreakPredictor
            currentStreak={user.currentStreak ?? 8}
            completedDays={user.completedDays ?? 8}
            totalDays={user.totalDays ?? 60}
            currentDay={user.currentDay ?? 12}
          />

        </div>

        {/* Featured Today's Task Banner -> Link to /day/12 */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white border border-rose-500/40 mb-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-300 font-bold text-[10px] border border-rose-500/40">
                  {user.currentDay === 1 ? (language === 'english' ? "DAY 1 TASK" : "DIN 1 CHALLENGE") : (language === 'english' ? "DAY 12 TASK" : "DIN 12 CHALLENGE")}
                </span>
                <CountdownTimer />
                <span className="text-xs text-gray-300 font-medium">+100 XP</span>
              </div>

              <h2 className="text-xl font-extrabold text-white font-['Outfit'] leading-snug">
                {user.currentDay === 1 
                  ? (language === 'english' ? "Set Up Local Dev Environment & Link Git" : "Local Dev Environment Setup Karo aur Git Link Karo")
                  : (language === 'english' ? mockData.day12Challenge.title : "API Rate Limiter Banao — Server Overload Roko")}
              </h2>
              
              <p className="text-xs text-gray-300 mt-1 line-clamp-2 leading-relaxed font-medium">
                {user.currentDay === 1
                  ? (language === 'english'
                      ? "Onboard onto the challenge track by installing Git, configuring your editor, and pushing your first commit."
                      : "Challenge track par ready hone ke liye Git install karo, editor set up karo, aur apni pehli commit push karo.")
                  : (language === 'english' 
                      ? mockData.day12Challenge.overview 
                      : "Zomato/Swiggy jaise apps rate limiter use karte hain taaki spam traffic se servers crash na ho. Aaj 45 mins me Express aur Redis ke sath ise build karo.")}
              </p>
            </div>

            <Link
              href="/day/12"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 hover:scale-[1.02] transition-all shrink-0 w-full md:w-auto"
            >
              <span>
                {isMissedDay 
                  ? (language === 'english' ? 'Save My Streak' : 'Mera Streak Bachao') 
                  : (language === 'english' ? "Start Today's Build" : "Aaj Ka Build Shuru Karo")}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Daily Streak Heatmap Matrix (Days 1 to 60) */}
        <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CalendarCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                {language === 'english' ? "Consistency Matrix" : "Consistency Matrix"}
              </h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-gray-400 font-bold">
              {language === 'english' ? `Day ${user.currentDay} of 60` : `60 me se Din ${user.currentDay}`}
            </span>
          </div>

          <div className="flex flex-col gap-2 overflow-x-auto no-scrollbar">
            {/* Week Labels Row */}
            <div className="flex pl-8 text-[9px] font-bold text-slate-400 dark:text-gray-500 gap-[20px] sm:gap-[24px] select-none">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
              <span>W5</span>
              <span>W6</span>
              <span>W7</span>
              <span>W8</span>
              <span>W9</span>
            </div>

            <div className="flex gap-2">
              {/* Day Labels Column */}
              <div className="flex flex-col justify-between text-[9px] font-bold text-slate-400 dark:text-gray-500 py-1.5 select-none w-6 shrink-0 leading-none">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
                <span>Sun</span>
              </div>

              {/* Grid matrix container */}
              <div className="grid grid-rows-7 grid-flow-col gap-1.5 select-none pb-1 shrink-0">
                {Array.from({ length: 60 }).map((_, index) => {
                  const dayNum = index + 1;
                  const isCompleted = dayNum < user.currentDay;
                  const isCurrent = dayNum === user.currentDay;
                  const isFuture = dayNum > user.currentDay;

                  // Varying intensities to make it look like a contribution graph
                  const intensities = [1, 2, 4, 3, 2, 1, 3, 4, 2, 3, 1, 2];
                  const intensity = intensities[dayNum % intensities.length];

                  let cellColor = '';
                  if (isCurrent) {
                    cellColor = 'bg-amber-400 ring-2 ring-amber-300 dark:ring-amber-500 animate-pulse';
                  } else if (isCompleted) {
                    if (isMissedDay && dayNum === 11) {
                      // Missed day warning indicator (broken commit)
                      cellColor = 'bg-rose-500/15 border border-rose-500 dark:border-rose-400 border-dashed';
                    } else {
                      // Rose levels matching intensity
                      if (intensity === 1) cellColor = 'bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20';
                      else if (intensity === 2) cellColor = 'bg-rose-200 dark:bg-rose-500/30 border border-rose-300 dark:border-rose-500/40';
                      else if (intensity === 3) cellColor = 'bg-rose-400 dark:bg-rose-500/60';
                      else cellColor = 'bg-rose-600 dark:bg-rose-500/80';
                    }
                  } else {
                    cellColor = 'bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border hover:bg-slate-200 dark:hover:bg-slate-800';
                  }

                  return (
                    <Link
                      key={dayNum}
                      href={`/day/${dayNum}`}
                      title={
                        isCompleted
                          ? `Day ${dayNum}: Commit Verified`
                          : isCurrent
                          ? `Day ${dayNum}: Active Challenge`
                          : `Day ${dayNum}: Locked`
                      }
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center text-[9px] font-bold transition-all relative group shadow-sm ${cellColor} ${
                        isCurrent ? 'text-slate-900' : isCompleted ? 'text-rose-950 dark:text-rose-200' : 'text-slate-400 dark:text-slate-600'
                      }`}
                    >
                      <span>{dayNum}</span>
                      
                      {/* Tooltip */}
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-[9px] bg-slate-950 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap border border-slate-700 font-semibold shadow-xl">
                        {isCompleted ? `Day ${dayNum}: Verified ✅` : isCurrent ? `Day ${dayNum}: Today ⚡` : `Day ${dayNum}: Locked 🔒`}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Legend */}
            <div className="flex items-center justify-end gap-1.5 text-[9px] font-bold text-slate-400 dark:text-gray-500 pt-2 border-t border-slate-100 dark:border-dark-border/40 select-none">
              <span>Less</span>
              <div className="w-3 h-3 rounded bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border" />
              <div className="w-3 h-3 rounded bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20" />
              <div className="w-3 h-3 rounded bg-rose-200 dark:bg-rose-500/30 border border-rose-300 dark:border-rose-500/40" />
              <div className="w-3 h-3 rounded bg-rose-400 dark:bg-rose-500/60" />
              <div className="w-3 h-3 rounded bg-rose-600 dark:bg-rose-500/80" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard Panel */}
        <div className="mb-6">
          <AnalyticsPanel edgeState={edgeState} />
        </div>

        {/* Campus Leaderboard Panel */}
        <div className="mb-6">
          <Leaderboard />
        </div>

        {/* Achievements & Unlocked Badges */}
        <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                {language === 'english' ? "Badges & Milestones" : "Badges & Milestones"}
              </h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-gray-400 font-semibold">
              {language === 'english'
                ? `${user.achievements?.filter(a => a.unlocked).length || 0} Unlocked`
                : `${user.achievements?.filter(a => a.unlocked).length || 0} Mil Chuke Hain`}
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
                  <h4 className="text-xs font-bold leading-snug">
                    {language === 'english' ? ach.title : 
                     ach.id === 'ach_1' ? 'Raaton Ke Khiladi' :
                     ach.id === 'ach_2' ? 'Git Ke Bahubali' :
                     ach.id === 'ach_3' ? 'Recruiter Magnet' :
                     'Aadha Safar Poora'}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-gray-400 line-clamp-1 mt-0.5 font-medium">
                    {language === 'english' ? ach.desc : 
                     ach.id === 'ach_1' ? '11 PM ke baad 5 builds ship kiye' :
                     ach.id === 'ach_2' ? 'Lagatar 10 din tak commit kiye' :
                     ach.id === 'ach_3' ? '5+ recruiters ne profile check ki' :
                     '30 days ka milestone hit kiya'}
                  </p>
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
