'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ToastProvider';
import { Settings, Activity, Terminal, Database, Users, Calendar, Play, Server } from 'lucide-react';

export default function AdminDashboard() {
  const { showToast } = useToast();
  
  // Challenge State Form
  const [challengeTitle, setChallengeTitle] = useState('Distributed Auth Middleware with JWT & RSA');
  const [challengeTrack, setChallengeTrack] = useState('Full-Stack Web & Backend Systems');
  const [challengeMins, setChallengeMins] = useState(45);
  const [challengeDifficulty, setChallengeDifficulty] = useState('Advanced');
  const [isDeploying, setIsDeploying] = useState(false);

  // System Stats Simulation
  const [cpuUsage, setCpuUsage] = useState(42);
  const [latency, setLatency] = useState(18);
  const [activeUsers, setActiveUsers] = useState(542);
  const [announcementText, setAnnouncementText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      // Small simulated fluctuations
      setCpuUsage((prev) => Math.max(10, Math.min(95, prev + Math.floor(Math.random() * 9) - 4)));
      setLatency((prev) => Math.max(5, Math.min(80, prev + Math.floor(Math.random() * 7) - 3)));
      setActiveUsers((prev) => Math.max(500, Math.min(600, prev + Math.floor(Math.random() * 5) - 2)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDeployChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      showToast(`Challenge successfully deployed: ${challengeTitle}`, 'success');
      showToast(`Announced to ${activeUsers} online builders`, 'streak');
    }, 1200);
  };

  const handleBroadcast = () => {
    if (!announcementText.trim()) return;
    showToast(`Broadcast sent: "${announcementText}"`, 'recruiter');
    setAnnouncementText('');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-gray-100 flex flex-col font-sans">
      <Navbar streakCount={12} />

      <main className="max-w-5xl mx-auto w-full px-4 py-8 flex-1 flex flex-col gap-6">
        
        {/* Page Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Settings className="w-5 h-5 text-indigo-500" />
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Admin Control Panel
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] tracking-tight">
            System Administration
          </h1>
          <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">
            Publish daily challenges, monitor real-time system performance telemetry, and broadcast alerts to the student community.
          </p>
        </div>

        {/* Live System Telemetry Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Active Builders */}
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-500 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Online Builders</p>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] mt-0.5">
                {activeUsers}
              </h3>
            </div>
          </div>

          {/* CPU Load */}
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
              <Server className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">CPU Load</p>
                <span className="text-xs font-bold text-slate-700 dark:text-gray-200">{cpuUsage}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-dark-bg rounded-full overflow-hidden mt-1.5">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${cpuUsage > 80 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                  style={{ width: `${cpuUsage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Database Latency */}
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Redis DB Latency</p>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] mt-0.5">
                {latency} ms
              </h3>
            </div>
          </div>

        </div>

        {/* Challenge Builder and Broadcasting Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Challenge Form (7 cols) */}
          <div className="md:col-span-8 p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-indigo-500" />
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                  Schedule Tomorrow's Challenge
                </h2>
              </div>

              <form onSubmit={handleDeployChallenge} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Challenge Title
                    </label>
                    <input
                      type="text"
                      required
                      value={challengeTitle}
                      onChange={(e) => setChallengeTitle(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Engineering Track
                    </label>
                    <select
                      value={challengeTrack}
                      onChange={(e) => setChallengeTrack(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option>Full-Stack Web & Backend Systems</option>
                      <option>AI & Intelligent Agents</option>
                      <option>DevOps & Cloud Native Systems</option>
                      <option>Mobile App Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Estimated Build Duration (mins)
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={challengeMins}
                      onChange={(e) => setChallengeMins(parseInt(e.target.value) || 1)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Difficulty Level
                    </label>
                    <select
                      value={challengeDifficulty}
                      onChange={(e) => setChallengeDifficulty(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs text-slate-900 dark:text-white focus:outline-none"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isDeploying}
                  className="w-full mt-4 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDeploying ? (
                    <span>Deploying to System Queue...</span>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Deploy Challenge Prompt</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Broadcast Panel & Log Feed (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Announcements Panel */}
            <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-500" />
                <h3 className="text-xs font-extrabold text-slate-900 dark:text-white font-['Outfit'] uppercase tracking-wider">
                  Community Alert Dispatch
                </h3>
              </div>
              <textarea
                rows={3}
                value={announcementText}
                onChange={(e) => setAnnouncementText(e.target.value)}
                placeholder="Alert text to broadcast (e.g. Server maintenance scheduled tonight at 3 AM...)"
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={handleBroadcast}
                disabled={!announcementText.trim()}
                className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-950 font-bold text-[11px] shadow-sm transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Alert
              </button>
            </div>

            {/* Simulated Live Webhook Events */}
            <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-emerald-500" />
                <h3 className="text-xs font-extrabold text-slate-900 dark:text-white font-['Outfit'] uppercase tracking-wider">
                  Live Verify Log
                </h3>
              </div>
              <div className="space-y-2 text-[10px] font-mono text-slate-600 dark:text-gray-400 max-h-[140px] overflow-y-auto pr-1">
                <p className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span>
                  <span>Commit verified for @aarav_sharma</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span>
                  <span>LinkedIn post parsed for @priya_verma</span>
                </p>
                <p className="flex items-center gap-1.5 text-slate-400">
                  <span className="animate-pulse">●</span>
                  <span>Incoming GitHub webhook payload...</span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
