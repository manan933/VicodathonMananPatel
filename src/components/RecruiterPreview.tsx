'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import {
  Linkedin,
  Download,
  Flame,
  Trophy,
  ShieldCheck,
  Eye,
  Award,
  GraduationCap,
  Sparkles,
  Zap,
  Moon,
  GitCommit,
  Briefcase,
  Check,
  Building2,
  TrendingUp
} from 'lucide-react';

export interface Achievement {
  id?: string;
  title: string;
  desc?: string;
  icon?: string;
  unlocked: boolean;
}

export interface UserProfile {
  name: string;
  handle: string;
  college: string;
  year: string;
  track: string;
  currentStreak: number;
  longestStreak: number;
  completedDays: number;
  totalDays: number;
  recruiterScore?: number;
  avatar: string;
  achievements?: Achievement[];
  skills?: string[];
}

export interface RecruiterPreviewProps {
  user: UserProfile;
}

/**
 * Derives clean tech stack pills based on the track string.
 */
function getTechStackPills(trackName: string): string[] {
  if (!trackName) return ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'];
  const lower = trackName.toLowerCase();

  if (lower.includes('full-stack') || lower.includes('fullstack') || lower.includes('web')) {
    return ['React / Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'];
  }
  if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('ml')) {
    return ['Python', 'PyTorch', 'FastAPI', 'LLMs', 'Vector DBs'];
  }
  if (lower.includes('mobile') || lower.includes('android') || lower.includes('ios')) {
    return ['React Native', 'TypeScript', 'Mobile UX', 'REST APIs'];
  }
  if (lower.includes('backend') || lower.includes('systems')) {
    return ['Node.js', 'Go', 'Docker', 'PostgreSQL', 'System Architecture'];
  }

  // Fallback: split by delimiters
  const segments = trackName
    .split(/[\&\,\/\-]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 1);

  return segments.length > 0 ? segments.slice(0, 5) : ['Software Dev', 'Problem Solving', 'Git', 'Agile'];
}

/**
 * Maps achievement icon name string to lucide React element.
 */
function renderAchievementIcon(iconName?: string) {
  switch (iconName) {
    case 'Moon':
      return <Moon className="w-3.5 h-3.5 text-amber-400" />;
    case 'GitCommit':
      return <GitCommit className="w-3.5 h-3.5 text-emerald-400" />;
    case 'Briefcase':
      return <Briefcase className="w-3.5 h-3.5 text-blue-400" />;
    case 'Award':
      return <Award className="w-3.5 h-3.5 text-purple-400" />;
    case 'Trophy':
      return <Trophy className="w-3.5 h-3.5 text-yellow-400" />;
    case 'Zap':
      return <Zap className="w-3.5 h-3.5 text-rose-400" />;
    default:
      return <Sparkles className="w-3.5 h-3.5 text-amber-400" />;
  }
}

export default function RecruiterPreview({ user }: RecruiterPreviewProps) {
  const [linkedinClicked, setLinkedinClicked] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const { language } = useLanguage();

  // Safe destructuring & fallbacks
  const name = user?.name || 'Anonymous Student';
  const handle = user?.handle ? (user.handle.startsWith('@') ? user.handle : `@${user.handle}`) : '@developer';
  const college = user?.college || 'Engineering Institute';
  const year = user?.year || 'Undergraduate';
  const track = user?.track || 'Full-Stack Web & Backend Systems';
  const currentStreak = user?.currentStreak ?? 0;
  const longestStreak = user?.longestStreak ?? 0;
  const completedDays = user?.completedDays ?? 0;
  const totalDays = user?.totalDays > 0 ? user.totalDays : 60;
  const avatar = user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80';
  const achievements = user?.achievements || [];
  const recruiterScore = user?.recruiterScore ?? 85;

  // Calculate consistency score percentage
  const consistencyScore = Math.min(100, Math.max(0, Math.round((completedDays / totalDays) * 100)));

  // Reliability status check
  const isHighReliability = currentStreak > 7;

  // Derive tech stack pills
  const techPills = user?.skills && user.skills.length > 0 ? user.skills : getTechStackPills(track);

  // Unlocked achievements only
  const unlockedAchievements = achievements.filter((a) => a.unlocked);

  const handleLinkedInClick = () => {
    setLinkedinClicked(true);
    setTimeout(() => setLinkedinClicked(false), 2500);
  };

  const handleDownloadClick = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2500);
  };

  return (
    <div data-dark-card="true" className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-700 shadow-2xl relative overflow-hidden font-['Outfit',sans-serif]">
      {/* Background ambient glow accent */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Right 'Recruiter View' Badge */}
      <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/90 text-rose-400 border border-slate-700/80 shadow-inner z-10">
        <Eye className="w-3.5 h-3.5 text-rose-400" />
        <span>{language === 'english' ? "Recruiter View" : "Recruiter View"}</span>
      </div>

      {/* Header: Avatar, Name, Handle, College, Year, Reliability Badge */}
      <div className="flex items-center gap-4 pb-6 border-b border-slate-800 pr-28 sm:pr-32">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-2xl object-cover ring-2 ring-rose-500/30 border border-slate-700 shadow-md shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-bold text-white tracking-tight truncate">{name}</h2>
            {/* Reliability Badge */}
            {isHighReliability ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>{language === 'english' ? "High Reliability" : "High Reliability"}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30 shrink-0">
                <TrendingUp className="w-3 h-3 text-amber-400" />
                <span>{language === 'english' ? "Building" : "Building"}</span>
              </span>
            )}
          </div>

          <p className="text-xs font-mono text-slate-400 mt-0.5">{handle}</p>

          <div className="flex items-center gap-2 text-xs text-slate-300 mt-2 font-medium">
            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{college}</span>
            <span className="text-slate-600 shrink-0">•</span>
            <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="shrink-0">{year}</span>
          </div>
        </div>
      </div>

      {/* Main Stats Grid: Consistency Score & Streaks */}
      <div className="py-5 space-y-4 border-b border-slate-800">
        {/* Consistency Score Section */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1.5 font-semibold">
            <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
              {language === 'english' ? "Daily Consistency" : "Daily Consistency"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">
                {completedDays}/{totalDays} {language === 'english' ? "Days" : "Days"}
              </span>
              <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                {consistencyScore}%
              </span>
            </div>
          </div>
          {/* Green Gradient Progress Bar */}
          <div className="h-3 w-full bg-slate-950/70 rounded-full overflow-hidden border border-slate-800 p-0.5 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-700 ease-out shadow-sm"
              style={{ width: `${consistencyScore}%` }}
            />
          </div>
        </div>

        {/* 3 Key Stats Cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between min-w-0">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div data-icon-box="true" className="p-1 rounded-lg bg-amber-500/15 text-amber-400 shrink-0">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider truncate">Streak</span>
            </div>
            <p className="text-sm sm:text-base font-extrabold text-white truncate">
              {currentStreak} <span className="text-xs font-normal text-slate-400">Days</span>
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between min-w-0">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div data-icon-box="true" className="p-1 rounded-lg bg-purple-500/15 text-purple-400 shrink-0">
                <Trophy className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider truncate">Max Streak</span>
            </div>
            <p className="text-sm sm:text-base font-extrabold text-white truncate">
              {longestStreak} <span className="text-xs font-normal text-slate-400">Days</span>
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between min-w-0">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div data-icon-box="true" className="p-1 rounded-lg bg-rose-500/15 text-rose-400 shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider truncate">Score</span>
            </div>
            <p className="text-sm sm:text-base font-extrabold text-white truncate">{recruiterScore}/100</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills from Track */}
      <div className="py-4 border-b border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
            {language === 'english' ? "Track & Verified Tech Stack" : "Track aur Verified Tech Stack"}
          </span>
          <span className="text-xs text-rose-400 font-medium truncate max-w-[200px]">
            {language === 'english' ? track : 
             track === 'Full-Stack Web & Backend Systems' ? 'Full-Stack Web aur Backend Systems' :
             track === 'AI & Intelligent Agents' ? 'AI aur Intelligent Agents' :
             track === 'DevOps & Cloud Native Systems' ? 'DevOps aur Cloud Native Systems' :
             track === 'Mobile App Dev (React Native)' ? 'Mobile App Dev (React Native)' :
             track}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {techPills.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-medium bg-slate-800/90 text-slate-300 border border-slate-700/70 rounded-lg hover:border-slate-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Top Achievements (Only Unlocked) */}
      <div className="py-4 border-b border-slate-800">
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider text-[11px] block mb-2 font-bold">
          {language === 'english'
            ? `Top Achievements (${unlockedAchievements.length})`
            : `Main Achievements (${unlockedAchievements.length})`}
        </span>

        {unlockedAchievements.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {unlockedAchievements.map((ach) => (
              <div
                key={ach.id || ach.title}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                  {renderAchievementIcon(ach.icon)}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-200 truncate">
                    {language === 'english' ? ach.title : 
                     ach.id === 'ach_1' ? 'Raaton Ke Khiladi' :
                     ach.id === 'ach_2' ? 'Git Ke Bahubali' :
                     ach.id === 'ach_3' ? 'Recruiter Magnet' :
                     ach.title}
                  </p>
                  {ach.desc && (
                    <p className="text-[11px] text-slate-400 truncate font-semibold">
                      {language === 'english' ? ach.desc : 
                       ach.id === 'ach_1' ? '11 PM ke baad 5 builds ship kiye' :
                       ach.id === 'ach_2' ? 'Lagatar 10 din tak commit kiye' :
                       ach.id === 'ach_3' ? '5+ recruiters ne profile check ki' :
                       ach.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-slate-400 text-xs text-center italic font-semibold">
            {language === 'english' ? "No achievements unlocked yet." : "Abhi tak koi achievement nahi mili."}
          </div>
        )}
      </div>

      {/* Action Buttons: LinkedIn & Download Resume */}
      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Reach out on LinkedIn button */}
        <button
          onClick={handleLinkedInClick}
          type="button"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-blue-900/30 active:scale-[0.98] cursor-pointer text-sm"
        >
          {linkedinClicked ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>{language === 'english' ? 'Link Copied!' : 'Link Copy Ho Gaya!'}</span>
            </>
          ) : (
            <>
              <Linkedin className="w-4 h-4 text-white shrink-0" />
              <span>{language === 'english' ? "Reach out on LinkedIn" : "LinkedIn par message karein"}</span>
            </>
          )}
        </button>

        {/* Download Resume button */}
        <button
          onClick={handleDownloadClick}
          type="button"
          className="border border-slate-600 hover:border-slate-400 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white font-bold rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-sm"
        >
          {downloading ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">{language === 'english' ? 'Downloading...' : 'Download ho raha...'}</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 text-slate-300 shrink-0" />
              <span>{language === 'english' ? "Download Resume" : "Resume download karein"}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
