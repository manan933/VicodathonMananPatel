'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  Youtube, 
  ExternalLink, 
  Search, 
  Sparkles, 
  Flame, 
  Play, 
  Filter, 
  Clock, 
  Tag, 
  Share2, 
  CheckCircle2,
  Tv,
  BookOpen,
  Zap
} from 'lucide-react';

interface VideoItem {
  id: string;
  title: Record<'english' | 'hinglish', string>;
  embedUrl: string;
  youtubeId: string;
  category: 'AI & ML' | 'Career & Streak' | 'Coding Projects';
  duration: string;
  description: Record<'english' | 'hinglish', string>;
  tags: string[];
  featured?: boolean;
}

const VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: {
      english: 'The Biggest AI Trends of 2026 | Claude AI, AI Agents & Physical AI',
      hinglish: '2026 Ke Sabse Bade AI Trends | Claude AI, AI Agents & Physical AI'
    },
    embedUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
    youtubeId: 'SqcY0GlETPk',
    category: 'AI & ML',
    duration: '31:31',
    description: {
      english: 'Explore the major shifts happening across AI — from Claude AI models and autonomous agent workflows to physical robotics and AI-driven software architecture.',
      hinglish: 'AI me ho rahe sabse bade shifts ko samjho — Claude AI models, AI Agents, physical AI aur software development ka naya future.'
    },
    tags: ['AI Trends 2026', 'Claude AI', 'AI Agents', 'Physical AI'],
    featured: true,
  },
  {
    id: '2',
    title: {
      english: 'Day 60/60: Build Your Portfolio & Release v1.0 | Claude AI Coding Challenge',
      hinglish: 'Din 60/60: Apna Portfolio Banao & v1.0 Release Karo | Claude AI Challenge'
    },
    embedUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
    youtubeId: 'rfscVS0vtbw',
    category: 'Coding Projects',
    duration: '0:45',
    description: {
      english: 'Final milestone of the 60-day challenge! Learn how to bundle your daily builds into a recruiter-ready portfolio site and launch your v1.0.',
      hinglish: '60-din challenge ka grand finale! Apne saare daily projects ko recruiter-ready portfolio me package karo aur v1.0 release karo.'
    },
    tags: ['60DayChallenge', 'Claude AI', 'Portfolio', 'Release v1.0'],
  },
  {
    id: '3',
    title: {
      english: 'Best AI Tools for Productivity in 2026 | ChatGPT vs Claude vs NotebookLM vs Gamma',
      hinglish: '2026 Ke Best AI Tools Productivity Ke Liye | ChatGPT vs Claude vs NotebookLM vs Gamma'
    },
    embedUrl: 'https://www.youtube.com/embed/zJsQxY5spEA',
    youtubeId: 'zJsQxY5spEA',
    category: 'AI & ML',
    duration: '15:36',
    description: {
      english: 'Comprehensive comparison of top developer and research tools: ChatGPT, Claude 3.5, Google NotebookLM, and Gamma for maximum workflow speed.',
      hinglish: 'Top AI tools ka full comparison: ChatGPT, Claude 3.5, NotebookLM aur Gamma. Sikhein kaunsa tool kis kaam me sabse fast hai.'
    },
    tags: ['Productivity', 'ChatGPT', 'Claude', 'NotebookLM', 'Gamma'],
  },
  {
    id: '4',
    title: {
      english: '90% of AI Projects FAIL! | ChatGPT, Claude, LLMs & AI Startups',
      hinglish: '90% AI Projects FAIL Ho Jaate Hain! | ChatGPT, Claude, LLMs & Startups'
    },
    embedUrl: 'https://www.youtube.com/embed/Ke90Tje7VS0',
    youtubeId: 'Ke90Tje7VS0',
    category: 'Career & Streak',
    duration: '18:45',
    description: {
      english: 'Why 90% of enterprise AI pilots fail before production, how token economics work, and what separates successful AI builders from failed startups.',
      hinglish: 'Janiye kyun 90% AI pilots production me fail ho jate hain, enterprise scaling pitfalls, aur ek successful AI builder kaise banein.'
    },
    tags: ['AI Engineering', 'LLM Pitfalls', 'AI Startups', 'Career Advice'],
  },
];

const CATEGORIES = ['All', 'AI & ML', 'Career & Streak', 'Coding Projects'] as const;

export default function HubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { language } = useLanguage();

  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      const matchesCategory =
        selectedCategory === 'All' || video.category === selectedCategory;

      const titleText = video.title[language];
      const descText = video.description[language];

      const matchesSearch =
        searchQuery.trim() === '' ||
        titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        descText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  const handleShare = (videoId: string, youtubeId: string) => {
    const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(videoUrl);
      setCopiedId(videoId);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-gray-100 flex flex-col font-sans">
      <Navbar streakCount={12} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 space-y-8">
        
        {/* Prominent Header / Banner with Channel Link */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 dark:from-red-950 dark:via-rose-900 dark:to-slate-900 border border-red-500/30 dark:border-rose-500/30 p-6 sm:p-10 shadow-2xl text-white">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-red-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-sm">
                <Youtube className="w-4 h-4 text-red-300 fill-red-400" />
                <span>{language === 'english' ? "Official ABTalks YouTube Hub" : "Official ABTalks YouTube Hub"}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] text-white leading-tight">
                {language === 'english' ? "ABTalks Video & Motivation Hub" : "ABTalks Video aur Motivation Hub"}
              </h1>

              <p className="text-sm sm:text-base text-rose-100 dark:text-gray-300 leading-relaxed font-medium">
                {language === 'english'
                  ? "Watch curated masterclasses, daily streak mindset guides, and full-stack AI engineering builds. Fuel your 60-day journey with insights directly from tech leaders."
                  : "AB Talks ke curated masterclasses, daily coding mindset guides aur AI projects dekho. Apne 60-din ke career safar ko boost karo."}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-rose-100 pt-1">
                <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-xl border border-white/10">
                  <Tv className="w-3.5 h-3.5 text-amber-300" />
                  <span>Channel: <strong>@ABTalksOnAI</strong></span>
                </span>
                <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-xl border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{language === 'english' ? "50,000+ Active Builders" : "50,000+ Active Builders"}</span>
                </span>
              </div>
            </div>

            {/* Channel CTA Link */}
            <div className="shrink-0 w-full md:w-auto">
              <a
                href="https://www.youtube.com/@ABTalksOnAI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-6 py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm flex items-center justify-center gap-3 shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all group border border-white/40"
              >
                <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md group-hover:bg-red-700 transition-colors">
                  <Youtube className="w-5 h-5 fill-white" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{language === 'english' ? "Subscribe & Watch" : "Subscribe & Watch"}</span>
                  <span className="text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors flex items-center gap-1">
                    @ABTalksOnAI
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Statistics & Info Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 fill-red-500" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">{language === 'english' ? "Curated Videos" : "Curated Videos"}</p>
              <p className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit']">{language === 'english' ? "4 Masterclasses" : "4 Masterclasses"}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">{language === 'english' ? "Streak Motivation" : "Streak Motivation"}</p>
              <p className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit']">{language === 'english' ? "Daily Mindset" : "Daily Mindset"}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">{language === 'english' ? "Topic Focus" : "Topic Focus"}</p>
              <p className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit']">{language === 'english' ? "AI, Code & Hiring" : "AI, Code & Hiring"}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">{language === 'english' ? "Access" : "Access"}</p>
              <p className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit']">{language === 'english' ? "100% Free" : "100% Free"}</p>
            </div>
          </div>
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={language === 'english' ? "Search videos by title, description, or tag..." : "Videos search karein title, description ya tag se..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900 dark:text-white placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-gray-200"
                >
                  {language === 'english' ? 'Clear' : 'Clear'}
                </button>
              )}
            </div>

            {/* Active Count Badge */}
            <div className="flex items-center gap-2 self-end md:self-auto text-xs font-semibold text-slate-500 dark:text-gray-400 shrink-0">
              <Filter className="w-4 h-4 text-red-500" />
              <span>
                {language === 'english' 
                  ? `Showing ${filteredVideos.length} of ${VIDEOS.length} videos`
                  : `${VIDEOS.length} me se ${filteredVideos.length} videos dikh rahi hain`}
              </span>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 border-t border-slate-100 dark:border-dark-border/60">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
              {language === 'english' ? "Categories:" : "Categories:"}
            </span>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm shrink-0 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-red-500/20'
                    : 'bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid (4 embedded video frames) */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border overflow-hidden shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300 flex flex-col"
              >
                {/* Embed Video Frame */}
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={video.embedUrl}
                    title={video.title[language]}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Video Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-red-100 dark:bg-red-500/15 text-red-700 dark:text-red-400 text-[11px] font-bold border border-red-200 dark:border-red-500/30">
                        {video.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-gray-400">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {video.duration}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-['Outfit'] group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                      {video.title[language]}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-3 font-medium">
                      {video.description[language]}
                    </p>
                  </div>

                  {/* Tags & Action Bar */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-dark-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {video.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-[10px] font-semibold text-slate-600 dark:text-gray-400 flex items-center gap-1"
                        >
                          <Tag className="w-2.5 h-2.5 text-slate-400" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 font-semibold">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1 transition-colors"
                      >
                        <span>{language === 'english' ? "Watch on YouTube" : "YouTube Par Dekho"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => handleShare(video.id, video.youtubeId)}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-bg hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-dark-border text-slate-700 dark:text-gray-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        title="Copy YouTube video link"
                      >
                        {copiedId === video.id ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{language === 'english' ? 'Link Copied!' : 'Link Copy Ho Gaya!'}</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5 text-slate-500" />
                            <span>{language === 'english' ? 'Share' : 'Share'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-500/10 text-red-500 flex items-center justify-center mx-auto">
              <Youtube className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">
              {language === 'english' ? "No videos match your search" : "Sarch match nahi ho raha"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 max-w-md mx-auto font-medium">
              {language === 'english' 
                ? "Try adjusting your search terms or category filter to discover relevant videos."
                : "Bhai, filter badlo ya search query change karke check karo."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors shadow-sm"
            >
              {language === 'english' ? "Reset Filters" : "Reset Filters"}
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
