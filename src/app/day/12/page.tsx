'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import mockData from '@/data/mockData.json';
import confetti from 'canvas-confetti';
import GitHubVerifier, { isValidGithubUrl } from '@/components/GitHubVerifier';
import { useToast } from '@/components/ToastProvider';
import { 
  Flame, 
  Github, 
  Linkedin, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Clock, 
  Send, 
  ThumbsUp, 
  ExternalLink, 
  Zap, 
  ShieldCheck
} from 'lucide-react';

export default function ChallengeDayPage() {
  const challenge = mockData.day12Challenge;
  const { showToast } = useToast();

  // Form State
  const [githubUrl, setGithubUrl] = useState('https://github.com/manan-dev/abtalks-day12-redis-limiter');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [linkedinText, setLinkedinText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [verifyingUrl, setVerifyingUrl] = useState('');
  const [verifyKey, setVerifyKey] = useState(0);
  const [upvoteCounts, setUpvoteCounts] = useState<{ [key: string]: number }>({
    sub_1: mockData.peerSubmissions[0].upvotes,
    sub_2: mockData.peerSubmissions[1].upvotes,
    sub_3: mockData.peerSubmissions[2].upvotes,
  });

  // Copy Starter Code
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(challenge.starterSnippet);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Fallback for browsers without clipboard API permission
      const el = document.createElement('textarea');
      el.value = challenge.starterSnippet;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.focus();
      el.select();
      try { document.execCommand('copy'); } catch { /* silent fail */ }
      document.body.removeChild(el);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Cleanup speech synthesis on unmount to prevent memory leak
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Audio Summary simulation
  const handleToggleAudio = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(challenge.audioBrief);
        utterance.onend = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    } else {
      setIsPlayingAudio(!isPlayingAudio);
    }
  };

  // AI LinkedIn Draft Helper
  const handleGenerateAiPost = () => {
    const aiDraft = `🚀 Day 12/60 of the ABTalks Challenge finished tonight! 🌙\n\nToday I built an API Rate Limiter in Node.js & Redis to protect servers from traffic overload. Implemented HTTP 429 status code handling and automatic reset timers.\n\nCode Proof: ${githubUrl || 'https://github.com/manan-dev/abtalks-day12-redis-limiter'}\n\n#60DaysOfCode #ABTalks #NodeJS #BackendEngineering`;
    setLinkedinText(aiDraft);
    setLinkedinUrl('https://linkedin.com/posts/manan-patel-tech_abtalks-day12-redis-rate-limiter');
  };

  // Submit Proof of Work
  const handleSubmitProof = (e: React.FormEvent) => {
    e.preventDefault();
    if (!githubUrl) return;

    if (!isValidGithubUrl(githubUrl)) {
      showToast('Please enter a valid GitHub URL', 'badge');
      return;
    }

    setSubmitting(true);
    setVerifyKey(prev => prev + 1);
    setVerifyingUrl(githubUrl);
  };

  const handleVerified = () => {
    setSubmitting(false);
    setIsSubmitted(true);

    // Show dual toast notifications
    showToast('GitHub Commit Verified & Linked!', 'success');
    showToast('🔥 Streak Increased! 12 → 13 Days', 'streak');

    // Trigger Celebration Confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered', err);
    }
  };

  const handleUpvote = (id: string) => {
    setUpvoteCounts(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-gray-100 flex flex-col font-sans">
      <Navbar streakCount={isSubmitted ? 13 : 12} />

      <main className="max-w-4xl mx-auto w-full px-4 py-6 flex-1">
        
        {/* Top Day Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/dashboard"
            className="text-xs text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Dashboard</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/day/11"
              className="p-1.5 px-3 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-xs text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm font-medium"
              title="Previous Day"
            >
              Day 11
            </Link>
            <span className="text-xs font-bold px-3 py-1 rounded-xl bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30">
              Day 12 of 60
            </span>
            <Link
              href="/day/13"
              className="p-1.5 px-3 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-xs text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm font-medium"
              title="Next Day"
            >
              Day 13
            </Link>
          </div>
        </div>

        {/* Success Banner if Submitted */}
        {isSubmitted && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-gradient-to-r dark:from-emerald-950/80 dark:via-emerald-900/40 dark:to-dark-card border border-emerald-300 dark:border-emerald-500/50 text-slate-900 dark:text-white flex items-center justify-between gap-3 shadow-sm animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-300 dark:border-emerald-500/40 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-emerald-800 dark:text-emerald-400 font-['Outfit']">Day 12 — Shipped & Verified 🎉</h3>
                <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5">
                  Streak bumped to <strong className="text-amber-700 dark:text-amber-400 font-bold">13 days</strong>. Recruiters can now see this build.
                </p>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shrink-0 hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Dashboard
            </Link>
          </div>
        )}

        {/* Challenge Header Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border mb-6 relative overflow-hidden shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 text-[10px] font-bold border border-rose-200 dark:border-rose-500/30">
              {challenge.track}
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-500/30 flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              <span>{challenge.estimatedMinutes} Mins</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold border border-indigo-200 dark:border-indigo-500/30">
              {challenge.difficulty}
            </span>
            <span className="text-xs text-amber-700 dark:text-amber-400 font-bold ml-auto">+{challenge.points} XP</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] mb-3">
            {challenge.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4 font-normal">
            {challenge.overview}
          </p>

          {/* Late-Night Audio Brief Button */}
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs">
              <Volume2 className={`w-4 h-4 text-amber-600 dark:text-amber-400 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
              <span className="text-slate-700 dark:text-gray-300 font-medium">Audio walkthrough — plug in your earbuds:</span>
            </div>

            <button
              onClick={handleToggleAudio}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm ${
                isPlayingAudio 
                  ? 'bg-rose-600 text-white' 
                  : 'bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border text-amber-700 dark:text-amber-400 hover:border-amber-400'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isPlayingAudio ? 'Stop' : 'Listen'}</span>
            </button>
          </div>
        </div>

        {/* Task Details & Starter Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Objectives & Requirements */}
          <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-['Outfit'] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>What You'll Learn</span>
              </h3>

              <ul className="space-y-2 mb-4">
                {challenge.learningObjectives.map((obj, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-gray-300 flex items-start gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">Requirements:</h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-gray-400 mb-4 font-medium">
                {challenge.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-xs">
              <span className="font-bold text-amber-800 dark:text-amber-300">💡 Bonus: </span>
              <span className="text-slate-600 dark:text-gray-300 font-medium">{challenge.bonusChallenge}</span>
            </div>
          </div>

          {/* Starter Code Block */}
          <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-['Outfit']">Starter Code</h3>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white flex items-center gap-1 transition-colors font-medium shadow-sm"
                >
                  {isCopied ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="p-3.5 rounded-2xl bg-slate-900 text-amber-300 font-mono text-[11px] leading-relaxed overflow-x-auto border border-slate-800 max-h-64 shadow-inner">
                <code>{challenge.starterSnippet}</code>
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/60 text-[11px] text-slate-500 dark:text-gray-400 flex items-center justify-between font-medium">
              <span>Runs on Node 18+ / Redis 7</span>
              <span className="text-rose-600 dark:text-rose-400 font-bold">Ready to run</span>
            </div>
          </div>

        </div>

        {/* Proof of Work Submission Form */}
        <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-rose-300 dark:border-rose-500/40 mb-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white font-['Outfit'] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-rose-600 dark:text-rose-500" />
                <span>Submit Your Build</span>
              </h2>
              <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5">
                Drop your GitHub link and LinkedIn post to lock in today's streak.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-500/30 self-start sm:self-auto">
              Recruiter-visible
            </span>
          </div>

          <form onSubmit={handleSubmitProof} className="space-y-4">
            
            {/* GitHub URL Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5">
                <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                <span>GitHub repo or commit link *</span>
              </label>
              <input
                type="url"
                required
                disabled={submitting || isSubmitted}
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/repo-name/commit/..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-dark-bg border border-slate-300 dark:border-dark-border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            {/* LinkedIn Post Input & AI Draft Helper */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn post link *</span>
                </label>

                {/* Thoughtful Innovation: 1-Click AI LinkedIn Post Helper */}
                <button
                  type="button"
                  disabled={submitting || isSubmitted}
                  onClick={handleGenerateAiPost}
                  className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-gradient-to-r dark:from-amber-500/20 dark:to-rose-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 text-[11px] font-bold flex items-center gap-1 hover:border-amber-400 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400 animate-pulse" />
                  <span>Draft with AI ✨</span>
                </button>
              </div>

              {linkedinText && (
                <div className="mb-2 p-3 rounded-xl bg-slate-100 dark:bg-dark-bg/90 border border-amber-300 dark:border-amber-500/30 text-xs text-slate-800 dark:text-gray-300 whitespace-pre-wrap shadow-inner">
                  <p className="text-[10px] font-bold text-amber-800 dark:text-amber-400 mb-1">Your draft:</p>
                  {linkedinText}
                </div>
              )}

              <input
                type="url"
                required
                disabled={submitting || isSubmitted}
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://linkedin.com/posts/username_abtalks-day12-..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-dark-bg border border-slate-300 dark:border-dark-border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            {/* GitHub Verifier Progress Animation */}
            {verifyingUrl && (
              <GitHubVerifier
                key={verifyKey}
                githubUrl={verifyingUrl}
                onVerified={handleVerified}
              />
            )}

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={submitting || isSubmitted}
              className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
                isSubmitted
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white hover:scale-[1.01] active:scale-[0.99] shadow-rose-600/30'
              }`}
            >
              {submitting ? (
                <span>Verifying...</span>
              ) : isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span>Day 12 — Locked In ✓</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit & Lock Today's Streak</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Peer Submissions Feed */}
        <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-['Outfit']">What Others Built Today</h3>
              <p className="text-xs text-slate-500 dark:text-gray-400">Real submissions from students across the country.</p>
            </div>
            <span className="text-xs text-rose-600 dark:text-rose-400 font-bold">142 shipped today</span>
          </div>

          <div className="space-y-3">
            {mockData.peerSubmissions.map((sub) => (
              <div key={sub.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={sub.avatar} alt={sub.studentName} className="w-8 h-8 rounded-xl object-cover border border-rose-300 dark:border-rose-500/30" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{sub.studentName}</h4>
                      <p className="text-[10px] text-slate-500 dark:text-gray-400">{sub.college} • {sub.timeAgo}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUpvote(sub.id)}
                    className="px-2.5 py-1 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border text-xs text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1 transition-colors shadow-sm font-medium"
                  >
                    <ThumbsUp className="w-3 h-3 text-amber-500" />
                    <span className="font-bold">{upvoteCounts[sub.id]}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-700 dark:text-gray-300 leading-relaxed mb-2">
                  {sub.linkedinPost}
                </p>

                <div className="flex items-center gap-3 text-[11px]">
                  <a
                    href={sub.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Github className="w-3 h-3" />
                    <span>View code</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
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
