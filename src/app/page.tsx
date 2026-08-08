'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import mockData from '@/data/mockData.json';
import { 
  Flame, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Cloud, 
  Smartphone, 
  ShieldCheck, 
  Moon, 
  Sparkles, 
  Zap, 
  Briefcase, 
  ChevronDown, 
  Users, 
  Award,
  Play,
  Github,
  Linkedin
} from 'lucide-react';

import { useLanguage } from '@/components/LanguageProvider';

export default function LandingPage() {
  const [selectedTrack, setSelectedTrack] = useState('web-backend');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { language } = useLanguage();

  const activeTrackObj = mockData.tracks.find(t => t.id === selectedTrack) || mockData.tracks[0];

  // Translating FAQs dynamically
  const faqList = [
    {
      q: language === 'english' 
        ? "Is this challenge really free?" 
        : "Kya yeh challenge sach me free hai?",
      a: language === 'english'
        ? "Yes, 100% free. Our goal is to help students build real proof-of-work and get hired. No hidden charges."
        : "Haan bhai, 100% free hai. ABTalks ka maqsad college students ko real skills build karwana hai taaki unhe direct hiring mil sake."
    },
    {
      q: language === 'english'
        ? "What if I miss a day?"
        : "Agar main ek din code karna bhool gaya toh?",
      a: language === 'english'
        ? "You have a Streak Shield! You get 24 hours to complete a catch-up challenge to save your streak from resetting."
        : "Aapke paas Streak Shield hai. 24 hours ke andar catch-up challenge poora karke apni streak bachayein."
    },
    {
      q: language === 'english'
        ? "How do recruiters scout me?"
        : "Recruiters ko main kaise dikhunga?",
      a: language === 'english'
        ? "Recruiters use our dedicated recruiter panel to filter candidates by skills and streak length. The higher your streak, the more visible you are."
        : "Recruiters directly humara hiring dashboard use karte hain. Aapke verified GitHub commits aur continuous streak se aap top list me aayenge."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-gray-100 flex flex-col font-sans">
      <Navbar streakCount={12} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 px-4 border-b border-slate-200 dark:border-dark-border/60">
        
        {/* Glow background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-600/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-60 h-60 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Mobile First Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-500/10 border border-rose-300 dark:border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs font-semibold mb-5 shadow-sm animate-pulse">
            <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
            <span>
              {language === 'english' 
                ? "Code Daily for 60 Days — Build Real Proof" 
                : "60 Din Lagatar Code Karo — Asli Proof Banao"}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight font-['Outfit'] mb-4 max-w-3xl">
            {language === 'english' ? "Code It. Ship It. Prove It." : "Code Karo. Push Karo. Proof Dikhao."} <br />
            <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 dark:from-rose-400 dark:via-amber-400 dark:to-rose-500 bg-clip-text text-transparent font-black">
              {language === 'english' ? "Land Your Dream Role." : "Apni Dream Job Paao."}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed font-medium">
            {language === 'english'
              ? "60 days. One 45-minute challenge a night. Verify your GitHub code, share automated LinkedIn posts, and let top tech recruiters scout you directly."
              : "60 din. Har raat ek 45-minute ka problem. GitHub code verify karo, auto LinkedIn post share karo, aur top tech recruiters se direct offer paao."}
          </p>

          {/* Call to Actions */}
          <div className="w-full max-w-xs sm:max-w-md flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-10">
            <Link
              href="/dashboard"
              className="w-full px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 hover:scale-[1.02] transition-transform active:scale-[0.98]"
            >
              <span>{language === 'english' ? "Begin Your Streak" : "Streak Shuru Karo"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/day/12"
              className="w-full px-6 py-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border text-slate-800 dark:text-gray-200 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors shadow-sm"
            >
              <Play className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
              <span>{language === 'english' ? "See Today's Challenge" : "Aaj Ka Challenge Dekho"}</span>
            </Link>
          </div>

          {/* Trust Stat Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl text-left">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
              <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>{language === 'english' ? "Builders Online" : "Coders Active Hain"}</span>
              </div>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">12,450+</p>
              <p className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">
                {language === 'english' ? "from 400+ colleges across India" : "India ke 400+ colleges se"}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-1">
                <Github className="w-3.5 h-3.5" />
                <span>{language === 'english' ? "Commits Shipped" : "Commits Verified"}</span>
              </div>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">850,000+</p>
              <p className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">
                {language === 'english' ? "lines of public proof" : "lines of real code proof"}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{language === 'english' ? "Hiring Partners" : "Hiring Partners"}</span>
              </div>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">420+</p>
              <p className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">
                {language === 'english' ? "actively scouting builders" : "top coders ko search karte hain"}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
              <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>{language === 'english' ? "Completion Rate" : "Placement Rate"}</span>
              </div>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">94%</p>
              <p className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">
                {language === 'english' ? "placed within 90 days of finishing" : "challenge ke baad 90 days me job"}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Recruiter Hiring Partner Logos - Infinite Animated Loop */}
      <section className="py-7 border-b border-slate-200 dark:border-dark-border/60 bg-slate-100/70 dark:bg-dark-card/40 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-4 mb-4">
          <div className="flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-center text-xs font-bold text-slate-600 dark:text-gray-400 uppercase tracking-widest font-['Outfit']">
              {language === 'english' 
                ? "These companies hire directly from our leaderboard" 
                : "Yeh saari companies humare leaderboard se direct hire karti hain"}
            </p>
          </div>
        </div>

        {/* Infinite Looping Ticker Track */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 py-2 w-max">
            {/* First list */}
            {mockData.hiringPartners.map((partner, idx) => (
              <div
                key={`partner-1-${idx}`}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-200 cursor-pointer shrink-0 shadow-sm"
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs border ${partner.color || 'bg-rose-500/20 text-rose-400 border-rose-500/30'}`}>
                  {partner.name[0]}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {partner.name}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Active Hiring Partner" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">
                    {partner.role || 'Active Hiring Partner'}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate list for seamless infinite loop */}
            {mockData.hiringPartners.map((partner, idx) => (
              <div
                key={`partner-2-${idx}`}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-200 cursor-pointer shrink-0 shadow-sm"
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs border ${partner.color || 'bg-rose-500/20 text-rose-400 border-rose-500/30'}`}>
                  {partner.name[0]}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {partner.name}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Active Hiring Partner" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">
                    {partner.role || 'Active Hiring Partner'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - The Daily Proof Loop */}
      <section className="py-12 px-4 border-b border-slate-200 dark:border-dark-border/60 max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
            {language === 'english' ? "Your Nightly Routine" : "Aapka Daily Routine"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 font-['Outfit']">
            {language === 'english' ? "How It Works — In Three Simple Steps" : "Yeh Kaise Kaam Karta Hai — Bas 3 Steps Me"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mt-2 max-w-xl mx-auto font-medium">
            {language === 'english' 
              ? "No courses. No lectures. Just real problems, real commits, and real proof — every single night." 
              : "Koi boring classes nahi, koi fattu lectures nahi. Har raat real coding problems aur verified commits."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border relative flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 flex items-center justify-center font-bold text-lg mb-4 border border-rose-200 dark:border-rose-500/30">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {language === 'english' ? "Get Tonight's Challenge" : "Aaj Raat Ka Challenge Lo"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                {language === 'english'
                  ? "A fun, real-world coding problem drops every evening (Auth, Databases, APIs). Designed to finish in 45 minutes."
                  : "Har shaam ek solid real-world coding problem milega (Auth, Database, API). Bas 45 mins me solve karne ke liye."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border/60 flex items-center text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
              <Zap className="w-3.5 h-3.5 mr-1" />
              <span>{language === 'english' ? "~45 min build time" : "~45 mins ka build time"}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border relative flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-lg mb-4 border border-amber-200 dark:border-amber-500/30">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {language === 'english' ? "Push to GitHub" : "GitHub Par Push Karo"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                {language === 'english'
                  ? "Upload your code to GitHub and paste your link. Our automatic check verifies your commit in 2 seconds."
                  : "Apna code GitHub par push karke link paste karo. Humara automatic checker 2 seconds me commit verify kar dega."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border/60 flex items-center text-[11px] text-rose-600 dark:text-rose-400 font-semibold">
              <Github className="w-3.5 h-3.5 mr-1" />
              <span>{language === 'english' ? "Instant verification" : "Turant verification"}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border relative flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-200 dark:border-emerald-500/30">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {language === 'english' ? "Share & Get Hired" : "Share Karo aur Job Paao"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                {language === 'english'
                  ? "One tap turns your code into a recruiter-ready LinkedIn post. Tech recruiters scout top builders on our leaderboard daily."
                  : "Bas ek click me apne code ko recruiter-ready LinkedIn post me convert karo. HRs daily leaderboard se hire karte hain."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border/60 flex items-center text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <Linkedin className="w-3.5 h-3.5 mr-1" />
              <span>{language === 'english' ? "Visible to 420+ hiring partners" : "420+ hiring partners ko dikhega"}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Track Explorer */}
      <section className="py-12 px-4 border-b border-slate-200 dark:border-dark-border/60 max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
            {language === 'english' ? "Pick Your Stack" : "Apna Stack Select Karo"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 font-['Outfit']">
            {language === 'english' ? "Four Tracks. Sixty Days. Zero Fluff." : "4 Stacks. 60 Din. Zero Bakwaas."}
          </h2>
        </div>

        {/* Track Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {mockData.tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all shadow-sm ${
                selectedTrack === track.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              {track.id === 'web-backend' && <Code2 className="w-4 h-4" />}
              {track.id === 'ai-ml' && <Cpu className="w-4 h-4" />}
              {track.id === 'cloud-devops' && <Cloud className="w-4 h-4" />}
              {track.id === 'mobile-dev' && <Smartphone className="w-4 h-4" />}
              <span>
                {language === 'english' ? track.title : 
                 track.id === 'web-backend' ? 'Full-Stack Web aur Backend Systems' :
                 track.id === 'ai-ml' ? 'AI aur Machine Learning Applications' :
                 track.id === 'cloud-devops' ? 'Cloud, Systems aur DevOps Systems' :
                 'Mobile App Dev (React Native/Flutter)'}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Track Details Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border relative overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 text-[10px] font-bold border border-rose-200 dark:border-rose-500/30">
                  {activeTrackObj.level === 'Intermediate' && language === 'hinglish' ? 'Medium Level' : 
                   activeTrackObj.level === 'Advanced' && language === 'hinglish' ? 'Advanced Level' : 
                   activeTrackObj.level}
                </span>
                <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                  {language === 'english' ? activeTrackObj.duration : 'Pura 60 Din'}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                {language === 'english' ? activeTrackObj.title : 
                 selectedTrack === 'web-backend' ? 'Full-Stack Web aur Backend Systems' :
                 selectedTrack === 'ai-ml' ? 'AI aur Machine Learning Applications' :
                 selectedTrack === 'cloud-devops' ? 'Cloud, Systems aur DevOps Systems' :
                 'Mobile App Dev (React Native/Flutter)'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-300 mt-1 font-medium">
                {language === 'english' ? activeTrackObj.tagline : 
                 selectedTrack === 'web-backend' ? 'High-performance backend systems, Redis cache aur API rate limiters banana seekhein.' :
                 selectedTrack === 'ai-ml' ? 'Large Language Models (LLMs), dynamic prompts aur local models ko integration karna seekhein.' :
                 selectedTrack === 'cloud-devops' ? 'Docker, CI/CD pipelines, AWS deployment aur system monitoring automate karein.' :
                 'React Native aur Flutter se responsive Android/iOS apps deploy karna seekhein.'}
              </p>
            </div>

            <Link
              href="/dashboard"
              className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-600/30 transition-colors self-start sm:self-auto"
            >
              <span>{language === 'english' ? "Start This Track" : "Yeh Track Shuru Karo"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold text-slate-600 dark:text-gray-400 mb-2">
              {language === 'english' ? "You'll work with:" : "Aap in tools par kaam karoge:"}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {activeTrackObj.skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs font-semibold text-slate-800 dark:text-amber-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 60-Day Project Milestones Preview */}
          <div className="pt-4 border-t border-slate-200 dark:border-dark-border/60">
            <p className="text-xs font-bold text-slate-800 dark:text-gray-300 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{language === 'english' ? "What you'll ship:" : "Aap kya build karoge:"}</span>
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border">
                <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400">DAY 01</span>
                <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  {language === 'english' ? "REST API Boilerplate" : "REST API Shuruat"}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-1 font-medium">
                  {language === 'english' ? "Express + TypeScript setup" : "Express + TypeScript setup"}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-300 dark:border-rose-500/40 relative">
                <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400">DAY 12 (TODAY)</span>
                <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  {language === 'english' ? "API Rate Limiter" : "API Rate Limiter"}
                </p>
                <p className="text-[10px] text-slate-600 dark:text-gray-300 mt-1 font-medium">
                  {language === 'english' ? "Protect servers from traffic overload" : "Server ko traffic overload se bachayein"}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border">
                <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400">DAY 30</span>
                <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  {language === 'english' ? "Background Task Worker" : "Background Task Worker"}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-1 font-medium">
                  {language === 'english' ? "Run heavy background jobs automatically" : "Heavy background tasks auto run karein"}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border">
                <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400">DAY 60</span>
                <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  {language === 'english' ? "Capstone Microservice" : "Final Capstone Project"}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-1 font-medium">
                  {language === 'english' ? "Full production deploy" : "Pura production deploy"}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Student Thoughtful Innovations Showcase */}
      <section className="py-12 px-4 border-b border-slate-200 dark:border-dark-border/60 max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
            {language === 'english' ? "Built for How You Actually Study" : "Coders ke liye soch-samajh kar banaya"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 font-['Outfit']">
            {language === 'english' ? "Features That Get It" : "Khaas Features Jo Samjhein"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 flex items-center justify-center mb-3 border border-indigo-200 dark:border-indigo-500/30">
              <Moon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              {language === 'english' ? "Dark Mode That Doesn't Fry Your Eyes" : "OLED Dark Mode Jo Aankhein Kharab Na Kare"}
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
              {language === 'english'
                ? "Pitch-black OLED mode for 2 AM sessions, clean white for daytime focus, and a neo-brutalist theme because why not."
                : "Raat ko 2 baje ke liye ekdum black OLED mode, din ke liye light mode, aur neo-brutalist theme show-off ke liye."}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3 border border-amber-200 dark:border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              {language === 'english' ? "One-Tap LinkedIn Posts" : "Ek Click Me LinkedIn Post"}
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
              {language === 'english'
                ? "Too tired to write? Hit one button and your commit turns into a recruiter-ready LinkedIn post. Copy, paste, sleep."
                : "Raat ko thak gaye? Bas ek button dabao aur commit se recruiter-friendly LinkedIn post generate karo. Copy-paste karo aur so jao."}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 flex items-center justify-center mb-3 border border-rose-200 dark:border-rose-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              {language === 'english' ? "Streak Shield" : "Streak Shield (Khaas Bachav)"}
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
              {language === 'english'
                ? "Exams, fever, life happens. Miss a day? You get 24 hours to catch up before your streak resets. No guilt trips."
                : "Exams, beemari, ya koi problem? Miss hone par streak reset nahi hogi, recover karne ke liye 24 hours milenge. Chill karo!"}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-4 max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
            {language === 'english' ? "Got Questions?" : "Dimaag me sawal hain?"}
          </h2>
          <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
            {language === 'english' ? "Here's everything you need before you start." : "Shuru karne se pehle poori jaankari yahan dekho."}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqList.map((faq, idx) => (
            <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-rose-600 dark:text-rose-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-700 dark:text-gray-300 leading-relaxed border-t border-slate-200 dark:border-dark-border/40 pt-3 font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-3 glass-panel border-t border-slate-200 dark:border-dark-border sm:hidden z-40">
        <Link
          href="/dashboard"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/40"
        >
          <Flame className="w-4 h-4 fill-white" />
          <span>{language === 'english' ? "Start Building — It's Free" : "Coding Shuru Karo — Bilkul Free"}</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
