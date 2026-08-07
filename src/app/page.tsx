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

export default function LandingPage() {
  const [selectedTrack, setSelectedTrack] = useState('web-backend');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeTrackObj = mockData.tracks.find(t => t.id === selectedTrack) || mockData.tracks[0];

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col font-sans">
      <Navbar streakCount={12} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 px-4 border-b border-dark-border/60">
        
        {/* Glow background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-600/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-60 h-60 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Mobile First Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold mb-5 shadow-lg shadow-rose-950/40 animate-pulse">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>60-Day Daily College Coding Challenge</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-['Outfit'] mb-4 max-w-3xl">
            Build 1 Project Daily. <br />
            Maintain Your Streak. <br />
            <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-rose-500 bg-clip-text text-transparent">
              Get Hired by Top Tech.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Designed for Indian college students coding late at night after classes. 
            Build consistency with daily <strong className="text-white">GitHub commits</strong> and <strong className="text-white">LinkedIn proof of work</strong>.
          </p>

          {/* Call to Actions */}
          <div className="w-full max-w-xs sm:max-w-md flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-10">
            <Link
              href="/dashboard"
              className="w-full px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-brand-500 to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 hover:scale-[1.02] transition-transform active:scale-[0.98]"
            >
              <span>Start 60-Day Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/day/12"
              className="w-full px-6 py-3.5 rounded-2xl bg-dark-card border border-dark-border text-gray-200 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
            >
              <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Preview Day 12 Task</span>
            </Link>
          </div>

          {/* Trust Stat Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl text-left">
            <div className="p-3.5 rounded-2xl glass-card border border-dark-border">
              <div className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>Active Coders</span>
              </div>
              <p className="text-xl font-extrabold text-white font-['Outfit']">12,450+</p>
              <p className="text-[10px] text-gray-400">Across 400+ Indian Colleges</p>
            </div>

            <div className="p-3.5 rounded-2xl glass-card border border-dark-border">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                <Github className="w-3.5 h-3.5" />
                <span>Verified Commits</span>
              </div>
              <p className="text-xl font-extrabold text-white font-['Outfit']">850,000+</p>
              <p className="text-[10px] text-gray-400">Public GitHub Proof</p>
            </div>

            <div className="p-3.5 rounded-2xl glass-card border border-dark-border">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Recruiter Spotlights</span>
              </div>
              <p className="text-xl font-extrabold text-white font-['Outfit']">420+</p>
              <p className="text-[10px] text-gray-400">Hiring Partners Active</p>
            </div>

            <div className="p-3.5 rounded-2xl glass-card border border-dark-border">
              <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Streak Finishers</span>
              </div>
              <p className="text-xl font-extrabold text-white font-['Outfit']">94%</p>
              <p className="text-[10px] text-gray-400">Hired within 90 Days</p>
            </div>
          </div>

        </div>
      </section>

      {/* Recruiter Hiring Partner Logos */}
      <section className="py-6 border-b border-dark-border/60 bg-dark-card/40 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Recruiters hiring directly from ABTalks streak leaderboards
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap opacity-75">
            {mockData.hiringPartners.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-bg/60 border border-dark-border">
                <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] font-bold text-rose-400">
                  {partner.name[0]}
                </div>
                <span className="text-xs font-bold text-gray-300">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - The Daily Proof Loop */}
      <section className="py-12 px-4 border-b border-dark-border/60 max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">The Daily 45-Min Loop</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-['Outfit']">
            How ABTalks Turns Students Into Hirable Engineers
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            Consistency beats cramming. Solve one real system requirement every night after college.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Step 1 */}
          <div className="p-5 rounded-2xl glass-card border border-dark-border relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg mb-4 border border-rose-500/30">
                1
              </div>
              <h3 className="text-base font-bold text-white mb-2">Read Today&apos;s Task</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unlock a bite-sized real-world feature prompt (e.g., Redis Rate Limiter, Auth Middleware, Vector Search).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-dark-border/60 flex items-center text-[11px] text-amber-400 font-medium">
              <Zap className="w-3.5 h-3.5 mr-1" />
              <span>45 Mins Estimated Time</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl glass-card border border-dark-border relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg mb-4 border border-amber-500/30">
                2
              </div>
              <h3 className="text-base font-bold text-white mb-2">Push GitHub Commit</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Submit your repository & commit hash. Our validator verifies exact implementation proof of work.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-dark-border/60 flex items-center text-[11px] text-rose-400 font-medium">
              <Github className="w-3.5 h-3.5 mr-1" />
              <span>Verifiable Git Proof</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl glass-card border border-dark-border relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-500/30">
                3
              </div>
              <h3 className="text-base font-bold text-white mb-2">Share LinkedIn Post</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Post your learnings using our 1-click AI draft helper. Recruiters reach out directly in your DMs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-dark-border/60 flex items-center text-[11px] text-emerald-400 font-medium">
              <Linkedin className="w-3.5 h-3.5 mr-1" />
              <span>Recruiter Visibility Boost</span>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Track Explorer */}
      <section className="py-12 px-4 border-b border-dark-border/60 max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Choose Your Track</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-['Outfit']">
            Curated 60-Day Engineering Tracks
          </h2>
        </div>

        {/* Track Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {mockData.tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all ${
                selectedTrack === track.id
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-dark-card border border-dark-border text-gray-400 hover:text-white'
              }`}
            >
              {track.id === 'web-backend' && <Code2 className="w-4 h-4" />}
              {track.id === 'ai-ml' && <Cpu className="w-4 h-4" />}
              {track.id === 'cloud-devops' && <Cloud className="w-4 h-4" />}
              {track.id === 'mobile-dev' && <Smartphone className="w-4 h-4" />}
              <span>{track.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Track Details Card */}
        <div className="p-6 rounded-3xl glass-card border border-dark-border relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-rose-500/20 text-rose-400 text-[10px] font-bold border border-rose-500/30">
                  {activeTrackObj.level}
                </span>
                <span className="text-xs text-gray-400">{activeTrackObj.duration}</span>
              </div>
              <h3 className="text-xl font-extrabold text-white font-['Outfit']">{activeTrackObj.title}</h3>
              <p className="text-xs text-gray-300 mt-1">{activeTrackObj.tagline}</p>
            </div>

            <Link
              href="/dashboard"
              className="px-4 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/30 transition-colors self-start sm:self-auto"
            >
              <span>Enroll in Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-400 mb-2">Technologies You Master:</p>
            <div className="flex flex-wrap gap-1.5">
              {activeTrackObj.skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-dark-bg border border-dark-border text-xs font-medium text-amber-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 60-Day Project Milestones Preview */}
          <div className="pt-4 border-t border-dark-border/60">
            <p className="text-xs font-bold text-gray-300 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sample 60-Day Build Roadmap:</span>
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-3 rounded-xl bg-dark-bg/80 border border-dark-border">
                <span className="text-[10px] font-bold text-rose-400">DAY 01</span>
                <p className="text-xs font-bold text-white mt-0.5">REST API Boilerplate</p>
                <p className="text-[10px] text-gray-400 mt-1">Express + TypeScript setup</p>
              </div>

              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 relative">
                <span className="text-[10px] font-bold text-amber-400">DAY 12 (TODAY)</span>
                <p className="text-xs font-bold text-white mt-0.5">Redis Rate Limiter</p>
                <p className="text-[10px] text-gray-300 mt-1">Token bucket middleware</p>
              </div>

              <div className="p-3 rounded-xl bg-dark-bg/80 border border-dark-border">
                <span className="text-[10px] font-bold text-rose-400">DAY 30</span>
                <p className="text-xs font-bold text-white mt-0.5">Distributed Queue</p>
                <p className="text-[10px] text-gray-400 mt-1">BullMQ background worker</p>
              </div>

              <div className="p-3 rounded-xl bg-dark-bg/80 border border-dark-border">
                <span className="text-[10px] font-bold text-rose-400">DAY 60</span>
                <p className="text-xs font-bold text-white mt-0.5">Capstone Microservice</p>
                <p className="text-[10px] text-gray-400 mt-1">Full production deploy</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Student Thoughtful Innovations Showcase */}
      <section className="py-12 px-4 border-b border-dark-border/60 max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Engineered for Late-Night Coders</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-['Outfit']">
            Designed for Real College Life
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl glass-card border border-dark-border">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
              <Moon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Midnight OLED UI</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Default true-black mode with eye-comfort tint, customized for coding at 1 AM after hostel hours.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-dark-border">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">1-Click Post Assistant</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Tired at night? Our built-in assistant turns your raw git commit message into a polished LinkedIn post.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-dark-border">
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Streak Recovery Quest</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Exams or sickness? Recover a missed day within 24 hours without losing your hard-earned streak.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-4 max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-white font-['Outfit']">Frequently Asked Questions</h2>
          <p className="text-xs text-gray-400 mt-1">Everything you need to know about starting your streak.</p>
        </div>

        <div className="flex flex-col gap-3">
          {mockData.faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl glass-card border border-dark-border overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-xs sm:text-sm text-white flex items-center justify-between gap-2 hover:bg-white/5 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-rose-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-gray-300 leading-relaxed border-t border-dark-border/40 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-3 glass-panel border-t border-dark-border sm:hidden z-40">
        <Link
          href="/dashboard"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-brand-500 to-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/40"
        >
          <Flame className="w-4 h-4 fill-white" />
          <span>Start 60-Day Challenge (Free)</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
