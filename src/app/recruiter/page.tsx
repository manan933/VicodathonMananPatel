'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import RecruiterPreview, { UserProfile } from '@/components/RecruiterPreview';
import { Search, Filter, Briefcase, Award, GraduationCap, Flame, ArrowRight, Eye, Sparkles, X } from 'lucide-react';

const mockCandidates: UserProfile[] = [
  {
    name: 'Kavya Nair',
    handle: 'kavya_nair',
    college: 'Indian Institute of Technology (IIT) Bombay',
    year: '4th Year B.Tech CSE',
    track: 'Full-Stack Web & Backend Systems',
    currentStreak: 47,
    longestStreak: 50,
    completedDays: 45,
    totalDays: 60,
    recruiterScore: 96,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    achievements: [
      { id: 'ach_1', title: 'Night Owl Builder', unlocked: true, icon: 'Moon', desc: '5 builds shipped past 11 PM' },
      { id: 'ach_2', title: 'Git Titan', unlocked: true, icon: 'GitCommit', desc: '10 straight days of commits' },
      { id: 'ach_3', title: 'Recruiter Magnet', unlocked: true, icon: 'Briefcase', desc: 'Post seen by 5+ hiring managers' }
    ]
  },
  {
    name: 'Arjun Mehta',
    handle: 'arjun_codes',
    college: 'International Institute of Information Technology (IIIT) Hyderabad',
    year: '3rd Year B.Tech ECE',
    track: 'AI & Intelligent Agents',
    currentStreak: 45,
    longestStreak: 45,
    completedDays: 43,
    totalDays: 60,
    recruiterScore: 94,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    skills: ['Python', 'PyTorch', 'FastAPI', 'LangChain', 'LLMs', 'Vector DBs'],
    achievements: [
      { id: 'ach_2', title: 'Git Titan', unlocked: true, icon: 'GitCommit', desc: '10 straight days of commits' },
      { id: 'ach_3', title: 'Recruiter Magnet', unlocked: true, icon: 'Briefcase', desc: 'Post seen by 5+ hiring managers' }
    ]
  },
  {
    name: 'Sanjana Pillai',
    handle: 'sanjana_p',
    college: 'BITS Pilani',
    year: '3rd Year B.Tech CSE',
    track: 'Full-Stack Web & Backend Systems',
    currentStreak: 42,
    longestStreak: 44,
    completedDays: 41,
    totalDays: 60,
    recruiterScore: 91,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    skills: ['React', 'Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    achievements: [
      { id: 'ach_1', title: 'Night Owl Builder', unlocked: true, icon: 'Moon', desc: '5 builds shipped past 11 PM' },
      { id: 'ach_3', title: 'Recruiter Magnet', unlocked: true, icon: 'Briefcase', desc: 'Post seen by 5+ hiring managers' }
    ]
  },
  {
    name: 'Devansh Gupta',
    handle: 'devansh_g',
    college: 'National Institute of Technology (NIT) Trichy',
    year: '4th Year B.Tech Prod',
    track: 'DevOps & Cloud Native Systems',
    currentStreak: 40,
    longestStreak: 41,
    completedDays: 39,
    totalDays: 60,
    recruiterScore: 89,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'AWS', 'Linux'],
    achievements: [
      { id: 'ach_2', title: 'Git Titan', unlocked: true, icon: 'GitCommit', desc: '10 straight days of commits' }
    ]
  },
  {
    name: 'Priya Verma',
    handle: 'priya_builds',
    college: 'VIT Vellore',
    year: '4th Year B.Tech CSE',
    track: 'AI & Intelligent Agents',
    currentStreak: 38,
    longestStreak: 38,
    completedDays: 36,
    totalDays: 60,
    recruiterScore: 87,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    skills: ['Python', 'PyTorch', 'Scikit-Learn', 'FastAPI', 'TensorFlow'],
    achievements: [
      { id: 'ach_1', title: 'Night Owl Builder', unlocked: true, icon: 'Moon', desc: '5 builds shipped past 11 PM' }
    ]
  },
  {
    name: 'Manan Patel',
    handle: 'manan_codes',
    college: 'National Institute of Technology (NIT) Surat',
    year: '3rd Year B.Tech CSE',
    track: 'Full-Stack Web & Backend Systems',
    currentStreak: 12,
    longestStreak: 12,
    completedDays: 11,
    totalDays: 60,
    recruiterScore: 88,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Redis', 'Git'],
    achievements: [
      { id: 'ach_1', title: 'Night Owl Builder', unlocked: true, icon: 'Moon', desc: '5 builds shipped past 11 PM' },
      { id: 'ach_2', title: 'Git Titan', unlocked: true, icon: 'GitCommit', desc: '10 straight days of commits' },
      { id: 'ach_3', title: 'Recruiter Magnet', unlocked: true, icon: 'Briefcase', desc: 'Post seen by 5+ hiring managers' }
    ]
  }
];

export default function RecruiterDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('All');
  const [minStreak, setMinStreak] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState<UserProfile | null>(mockCandidates[0]);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const { language } = useLanguage();

  // Filters candidates based on inputs
  const filteredCandidates = mockCandidates.filter((candidate) => {
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !searchLower ||
      candidate.name.toLowerCase().includes(searchLower) ||
      candidate.college.toLowerCase().includes(searchLower) ||
      candidate.track.toLowerCase().includes(searchLower) ||
      (candidate.skills && candidate.skills.some((skill) => skill.toLowerCase().includes(searchLower)));

    const matchesTrack = selectedTrack === 'All' || candidate.track.toLowerCase().includes(selectedTrack.toLowerCase());
    const matchesStreak = candidate.currentStreak >= minStreak;

    return matchesSearch && matchesTrack && matchesStreak;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-gray-100 flex flex-col font-sans">
      <Navbar streakCount={12} />

      <main className="max-w-5xl mx-auto w-full px-4 py-8 flex-1 flex flex-col">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-violet-500" />
            <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              {language === 'english' ? "Recruiter Dashboard" : "Recruiter Dashboard"}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] tracking-tight">
            {language === 'english' ? "Scout Top College Developers" : "College Ke Top Developers Ko Scout Karo"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-gray-400 mt-1 max-w-2xl font-medium">
            {language === 'english'
              ? "Filter, inspect, and directly hire students based on verifiable daily commits and streak data. No resume spam, just pure proof of work."
              : "Verifiable daily commits aur streak data ke basis par directly students ko inspect aur hire karein. Faltu resumes nahi, bas asli proof of work."}
          </p>
        </div>

        {/* Filters and Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
          
          {/* Left Panel: Search & Candidate List (8 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Search and Filters Bar */}
            <div className="p-4 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex flex-col gap-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 dark:text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'english' ? "Search candidates by name, college, or skills..." : "Candidates search karein name, college ya skills se..."}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-xs text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors shadow-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  {['All', 'Web', 'AI', 'DevOps', 'Mobile'].map((track) => (
                    <button
                      key={track}
                      onClick={() => setSelectedTrack(track)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all ${
                        (track === 'All' && selectedTrack === 'All') ||
                        (track !== 'All' && selectedTrack === track)
                          ? 'bg-violet-600 text-white border-violet-600 shadow-sm shadow-violet-500/20'
                          : 'bg-slate-50 dark:bg-dark-bg text-slate-600 dark:text-gray-400 border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      {track}
                    </button>
                  ))}
                </div>

                {/* Minimum Streak Slider */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>{language === 'english' ? `Streak >= ${minStreak}` : `Streak >= ${minStreak}`}</span>
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={minStreak}
                    onChange={(e) => setMinStreak(parseInt(e.target.value))}
                    className="w-20 accent-violet-500 bg-slate-200 dark:bg-dark-bg rounded-lg cursor-pointer h-1.5"
                  />
                </div>
              </div>
            </div>

            {/* Candidates List */}
            <div className="space-y-3 flex-1 overflow-y-auto max-h-[550px] pr-2">
              {filteredCandidates.length > 0 ? (
                filteredCandidates.map((candidate) => {
                  const isSelected = selectedCandidate?.name === candidate.name;
                  return (
                    <div
                      key={candidate.name}
                      onClick={() => {
                        setSelectedCandidate(candidate);
                        setIsMobileModalOpen(true);
                      }}
                      className={`p-4 rounded-3xl border cursor-pointer transition-all flex items-center justify-between gap-4 bg-white dark:bg-dark-card ${
                        isSelected
                          ? 'border-violet-500 ring-2 ring-violet-500/10 shadow-md'
                          : 'border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <img
                          src={candidate.avatar}
                          alt={candidate.name}
                          className="w-12 h-12 rounded-2xl object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight truncate">
                              {candidate.name}
                            </h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/30">
                              {candidate.recruiterScore}/100
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1 mt-0.5 truncate font-medium">
                            <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{candidate.college}</span>
                          </p>
                          <p className="text-[10px] text-slate-400 dark:text-gray-500 mt-1 truncate font-semibold">
                            {language === 'english' ? candidate.track : 
                             candidate.track === 'Full-Stack Web & Backend Systems' ? 'Full-Stack Web aur Backend Systems' :
                             candidate.track === 'AI & Intelligent Agents' ? 'AI aur Intelligent Agents' :
                             candidate.track === 'DevOps & Cloud Native Systems' ? 'DevOps aur Cloud Native Systems' :
                             candidate.track === 'Mobile App Dev (React Native)' ? 'Mobile App Dev (React Native)' :
                             candidate.track}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {language === 'english' ? "Active Streak" : "Dhamaka Streak"}
                          </p>
                          <div className="flex items-center gap-1 justify-end mt-0.5">
                            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-bold text-sm text-slate-900 dark:text-white">
                              {candidate.currentStreak}{language === 'english' ? 'd' : ' din'}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-violet-500' : 'text-slate-400'}`} />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-3xl text-slate-500 dark:text-gray-400 italic font-semibold">
                  {language === 'english' ? "No candidates match the search filters." : "Koi candidates search filters se match nahi ho rahe."}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: High-fidelity Candidate Detail Card (5 cols on desktop, hidden on mobile in favor of modal) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-start">
            {selectedCandidate ? (
              <div className="sticky top-24">
                <div className="mb-2 flex items-center gap-1 px-1">
                  <Sparkles className="w-4 h-4 text-violet-500 animate-pulse" />
                  <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
                    {language === 'english' ? "Candidate Dossier" : "Candidate Dossier"}
                  </span>
                </div>
                <RecruiterPreview user={selectedCandidate} />
              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border flex flex-col items-center justify-center text-center text-slate-400 dark:text-gray-500 shadow-sm min-h-[300px]">
                <Eye className="w-8 h-8 text-slate-300 dark:text-gray-600 mb-2" />
                <p className="text-xs font-semibold">
                  {language === 'english'
                    ? "Select a candidate on the left to inspect their dossier."
                    : "Kisi candidate ko select karke unka live dossier check karein."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Candidate Dossier Modal */}
      {isMobileModalOpen && selectedCandidate && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 lg:hidden">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
            <button
              onClick={() => setIsMobileModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors border border-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <RecruiterPreview user={selectedCandidate} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
