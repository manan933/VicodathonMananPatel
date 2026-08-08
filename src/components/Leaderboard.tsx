'use client';

import React, { useState } from 'react';
import { Trophy, Crown, Medal, Flame } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export interface LeaderboardItem {
  rank: number;
  name: string;
  college: string;
  track: string;
  streak: number;
  score: number;
  avatar: string;
  city: string;
}

const leaderboardData: LeaderboardItem[] = [
  { rank: 1, name: 'Kavya Nair', college: 'IIT Bombay', track: 'web-backend', streak: 47, score: 96, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', city: 'Mumbai' },
  { rank: 2, name: 'Arjun Mehta', college: 'IIIT Hyderabad', track: 'ai-ml', streak: 45, score: 94, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', city: 'Hyderabad' },
  { rank: 3, name: 'Sanjana Pillai', college: 'BITS Pilani', track: 'web-backend', streak: 42, score: 91, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', city: 'Pilani' },
  { rank: 4, name: 'Devansh Gupta', college: 'NIT Trichy', track: 'cloud-devops', streak: 40, score: 89, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', city: 'Trichy' },
  { rank: 5, name: 'Priya Verma', college: 'VIT Vellore', track: 'ai-ml', streak: 38, score: 87, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', city: 'Vellore' },
  { rank: 6, name: 'Rohan Joshi', college: 'DTU Delhi', track: 'web-backend', streak: 35, score: 84, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80', city: 'Delhi' },
  { rank: 7, name: 'Ananya Rao', college: 'IIIT Bangalore', track: 'mobile-dev', streak: 33, score: 82, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', city: 'Bangalore' },
  { rank: 8, name: 'Manan Patel', college: 'GIET University', track: 'web-backend', streak: 12, score: 88, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80', city: 'Gunupur' },
  { rank: 9, name: 'Ishaan Sharma', college: 'IIT Delhi', track: 'cloud-devops', streak: 28, score: 78, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', city: 'Delhi' },
  { rank: 10, name: 'Tanvi Kulkarni', college: 'COEP Pune', track: 'ai-ml', streak: 25, score: 75, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80', city: 'Pune' }
];

type TrackFilter = 'All' | 'Web & Backend' | 'AI & ML' | 'DevOps' | 'Mobile';

const filterTabToTrackKey: Record<TrackFilter, string | null> = {
  'All': null,
  'Web & Backend': 'web-backend',
  'AI & ML': 'ai-ml',
  'DevOps': 'cloud-devops',
  'Mobile': 'mobile-dev',
};

const filterTabs: TrackFilter[] = ['All', 'Web & Backend', 'AI & ML', 'DevOps', 'Mobile'];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState<TrackFilter>('All');
  const { language } = useLanguage();

  const filteredData = leaderboardData.filter((item) => {
    const trackKey = filterTabToTrackKey[activeTab];
    if (!trackKey) return true;
    return item.track === trackKey;
  });

  const getRankBadge = (rank: number) => {
    if (rank === 1) {
      return (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 font-bold text-sm">
          <Crown className="w-4 h-4 text-amber-500" />
        </span>
      );
    }
    if (rank === 2) {
      return (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-400/15 text-slate-400 border border-slate-400/30 font-bold text-sm">
          <Medal className="w-4 h-4 text-slate-400" />
        </span>
      );
    }
    if (rank === 3) {
      return (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-700/15 text-amber-700 border border-amber-700/30 font-bold text-sm">
          <Medal className="w-4 h-4 text-amber-700" />
        </span>
      );
    }
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 font-semibold text-xs text-slate-500 dark:text-gray-400">
        #{rank}
      </span>
    );
  };

  return (
    <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <Trophy className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-['Outfit'] text-slate-900 dark:text-white tracking-tight">
              {language === 'english' ? "Campus Leaderboard" : "Campus Leaderboard"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1 ml-1 font-semibold">
            {language === 'english' ? "Top builders across Indian colleges" : "Desh ke engineering colleges ke top builders"}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all shrink-0 ${
                isActive
                  ? 'bg-rose-600 text-white shadow-sm shadow-rose-600/20'
                  : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'All' ? (language === 'english' ? 'All' : 'Sab') : 
               tab === 'Web & Backend' ? (language === 'english' ? 'Web & Backend' : 'Web aur Backend') :
               tab}
            </button>
          );
        })}
      </div>

      {/* Leaderboard Table / Rows */}
      <div className="space-y-2">
        {filteredData.map((item) => {
          const isCurrentUser = item.name === 'Manan Patel';

          return (
            <div
              key={item.name}
              className={`flex items-center justify-between p-3 rounded-2xl transition-colors ${
                isCurrentUser
                  ? 'bg-rose-500/10 dark:bg-rose-500/15 border-2 border-rose-500/40 dark:border-rose-400/40 shadow-sm shadow-rose-500/10'
                  : 'bg-slate-50/50 dark:bg-slate-900/40 hover:bg-slate-100/80 dark:hover:bg-slate-800/50 border border-slate-100 dark:border-slate-800/50'
              }`}
            >
              {/* Left: Rank, Avatar, Name & College */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="shrink-0">{getRankBadge(item.rank)}</div>
                
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-8 h-8 rounded-xl object-cover shrink-0 ring-1 ring-slate-200 dark:ring-slate-700"
                />

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                      {item.name}
                    </span>
                    {isCurrentUser && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-rose-600 text-white rounded-md shrink-0 uppercase tracking-wider">
                        {language === 'english' ? 'You' : 'Aap'}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 truncate font-semibold">
                    {item.college} • {item.city}
                  </div>
                </div>
              </div>

              {/* Right: Streak & Score */}
              <div className="flex items-center gap-4 shrink-0 pl-2 font-bold">
                {/* Streak */}
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400">
                  <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{item.streak}</span>
                </div>

                {/* Score */}
                <div className="text-right min-w-[50px]">
                  <span className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {item.score}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 dark:text-gray-400 font-medium">
                    /100
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {filteredData.length === 0 && (
          <div className="text-center py-8 text-slate-400 dark:text-gray-400 text-sm font-semibold">
            {language === 'english' ? "No students found in this track." : "Is track me koi student nahi mila."}
          </div>
        )}
      </div>
    </div>
  );
}
