'use client';

import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import { TrendingUp, Flame, Clock, Code } from 'lucide-react';

// Mock Data
const streakData = [
  { day: 'Day 1', streak: 1 },
  { day: 'Day 2', streak: 2 },
  { day: 'Day 3', streak: 3 },
  { day: 'Day 4', streak: 4 },
  { day: 'Day 5', streak: 5 },
  { day: 'Day 6', streak: 6 },
  { day: 'Day 7', streak: 7 },
  { day: 'Day 8', streak: 8 },
  { day: 'Day 9', streak: 9 },
  { day: 'Day 10', streak: 10 },
  { day: 'Day 11', streak: 11 },
  { day: 'Day 12', streak: 12 },
];

const codingHoursData = [
  { hour: '8PM', sessions: 2 },
  { hour: '9PM', sessions: 5 },
  { hour: '10PM', sessions: 8 },
  { hour: '11PM', sessions: 14 },
  { hour: '12AM', sessions: 18 },
  { hour: '1AM', sessions: 12 },
  { hour: '2AM', sessions: 6 },
];

const techStackData = [
  { name: 'JavaScript', value: 35 },
  { name: 'TypeScript', value: 28 },
  { name: 'Python', value: 18 },
  { name: 'Go', value: 12 },
  { name: 'Rust', value: 7 },
];

// Color palette for Tech Stack (PieChart): rose-500, amber-500, emerald-500, cyan-500, violet-500
const TECH_COLORS = ['#f43f5e', '#f59e0b', '#10b981', '#06b6d4', '#8b5cf6'];

// Custom Tooltip for Streak AreaChart
const StreakCustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md border border-slate-700/80 px-3 py-2 rounded-xl shadow-xl text-white">
        <p className="font-semibold text-rose-400 text-[11px] mb-0.5">{label}</p>
        <div className="flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span className="text-[11px] text-gray-200">
            Streak: <strong className="text-white font-bold">{payload[0].value} Days</strong>
          </span>
        </div>
      </div>
    );
  }
  return null;
};

// Custom Tooltip for Coding Hours BarChart
const HoursCustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md border border-slate-700/80 px-3 py-2 rounded-xl shadow-xl text-white">
        <p className="font-semibold text-rose-400 text-[11px] mb-0.5">{label}</p>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-rose-400" />
          <span className="text-[11px] text-gray-200">
            Sessions: <strong className="text-white font-bold">{payload[0].value}</strong>
          </span>
        </div>
      </div>
    );
  }
  return null;
};

// Custom Tooltip for Tech Stack PieChart
const TechCustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md border border-slate-700/80 px-3 py-2 rounded-xl shadow-xl text-white flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: data.fill || data.color }} />
        <span className="text-[11px] text-gray-200">
          {data.name}: <strong className="text-white font-bold">{data.value}%</strong>
        </span>
      </div>
    );
  }
  return null;
};

// Custom Label Renderer for PieChart to meet slate-500 dark:text-gray-400 text-[10px] requirement
const renderCustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 14;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      className="text-slate-500 dark:text-gray-400 text-[10px] font-medium"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function AnalyticsPanel({ edgeState = 'standard' }: { edgeState?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dynamically compute data based on edgeState
  const getStreakData = () => {
    switch (edgeState) {
      case 'firstDay':
      case 'emptyProfile':
        return [{ day: 'Day 1', streak: 0 }];
      case 'missedDay':
        return [
          { day: 'Day 1', streak: 1 },
          { day: 'Day 2', streak: 2 },
          { day: 'Day 3', streak: 3 },
          { day: 'Day 4', streak: 4 },
          { day: 'Day 5', streak: 5 },
          { day: 'Day 6', streak: 6 },
          { day: 'Day 7', streak: 7 },
          { day: 'Day 8', streak: 8 },
          { day: 'Day 9', streak: 0 },
          { day: 'Day 10', streak: 1 },
          { day: 'Day 11', streak: 2 },
          { day: 'Day 12', streak: 0 },
        ];
      default:
        return [
          { day: 'Day 1', streak: 1 },
          { day: 'Day 2', streak: 2 },
          { day: 'Day 3', streak: 3 },
          { day: 'Day 4', streak: 4 },
          { day: 'Day 5', streak: 5 },
          { day: 'Day 6', streak: 6 },
          { day: 'Day 7', streak: 7 },
          { day: 'Day 8', streak: 8 },
          { day: 'Day 9', streak: 9 },
          { day: 'Day 10', streak: 10 },
          { day: 'Day 11', streak: 11 },
          { day: 'Day 12', streak: 12 },
        ];
    }
  };

  const getCodingHoursData = () => {
    switch (edgeState) {
      case 'firstDay':
      case 'emptyProfile':
        return [
          { hour: '8PM', sessions: 0 },
          { hour: '9PM', sessions: 0 },
          { hour: '10PM', sessions: 0 },
          { hour: '11PM', sessions: 0 },
          { hour: '12AM', sessions: 0 },
          { hour: '1AM', sessions: 0 },
          { hour: '2AM', sessions: 0 },
        ];
      case 'missedDay':
        return [
          { hour: '8PM', sessions: 1 },
          { hour: '9PM', sessions: 3 },
          { hour: '10PM', sessions: 5 },
          { hour: '11PM', sessions: 10 },
          { hour: '12AM', sessions: 12 },
          { hour: '1AM', sessions: 8 },
          { hour: '2AM', sessions: 4 },
        ];
      default:
        return [
          { hour: '8PM', sessions: 2 },
          { hour: '9PM', sessions: 5 },
          { hour: '10PM', sessions: 8 },
          { hour: '11PM', sessions: 14 },
          { hour: '12AM', sessions: 18 },
          { hour: '1AM', sessions: 12 },
          { hour: '2AM', sessions: 6 },
        ];
    }
  };

  const getTechStackData = () => {
    switch (edgeState) {
      case 'firstDay':
      case 'emptyProfile':
        return [
          { name: 'JavaScript', value: 0 },
          { name: 'TypeScript', value: 0 },
          { name: 'Python', value: 0 },
          { name: 'Go', value: 0 },
          { name: 'Rust', value: 0 },
        ];
      case 'missedDay':
        return [
          { name: 'Python', value: 55 },
          { name: 'TypeScript', value: 20 },
          { name: 'JavaScript', value: 15 },
          { name: 'Go', value: 5 },
          { name: 'Rust', value: 5 },
        ];
      default:
        return [
          { name: 'JavaScript', value: 35 },
          { name: 'TypeScript', value: 28 },
          { name: 'Python', value: 18 },
          { name: 'Go', value: 12 },
          { name: 'Rust', value: 7 },
        ];
    }
  };

  const dynamicStreakData = getStreakData();
  const dynamicCodingHoursData = getCodingHoursData();
  const dynamicTechStackData = getTechStackData().filter(item => item.value > 0 || edgeState === 'firstDay' || edgeState === 'emptyProfile');

  const getStreakLabel = () => {
    switch (edgeState) {
      case 'firstDay':
      case 'emptyProfile':
        return '0 Days';
      case 'missedDay':
        return '0 Days (Peak 8)';
      default:
        return '12 Days';
    }
  };

  return (
    <div className="p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20 shadow-sm shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white font-['Outfit'] tracking-tight font-bold">
              Your Analytics
            </h2>
            <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">
              Insights from your 60-day journey
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Activity
          </span>
        </div>
      </div>

      {/* Grid containing 3 charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Chart 1: Streak Trend (AreaChart, spans full width md:col-span-2) */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-bg/60 border border-slate-200/80 dark:border-dark-border/60 md:col-span-2 transition-all hover:border-slate-300 dark:hover:border-dark-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center text-amber-500">
                <Flame className="w-4 h-4 fill-amber-500" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-gray-100 font-['Outfit']">
                  Streak Trend
                </h3>
                <p className="text-slate-500 dark:text-gray-400 text-[10px]">
                  Continuous day-by-day progress tracking
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400">{getStreakLabel()}</span>
              <span className="block text-slate-500 dark:text-gray-400 text-[10px]">Current Streak</span>
            </div>
          </div>

          <div className="h-52 w-full">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%" key={`streak-${edgeState}`}>
                <AreaChart data={dynamicStreakData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="streakGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.15} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    className="text-slate-500 dark:text-gray-400 text-[10px]"
                    dy={5}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    className="text-slate-500 dark:text-gray-400 text-[10px]"
                    domain={[0, 'auto']}
                  />
                  <Tooltip content={<StreakCustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="streak"
                    stroke="#f43f5e"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#streakGradient)"
                    activeDot={{ r: 6, fill: '#f43f5e', stroke: '#fff', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full animate-pulse bg-slate-200/50 dark:bg-dark-bg/80 rounded-xl" />
            )}
          </div>
        </div>

        {/* Chart 2: Coding Hours Distribution (BarChart) */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-bg/60 border border-slate-200/80 dark:border-dark-border/60 transition-all hover:border-slate-300 dark:hover:border-dark-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 flex items-center justify-center text-rose-500">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-gray-100 font-['Outfit'] font-bold">
                    Coding Hours Distribution
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-[10px]">
                    Sessions by time of day
                  </p>
                </div>
              </div>
            </div>
            <p className="text-slate-500 dark:text-gray-400 text-[10px] mb-3 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-300 px-2.5 py-1 rounded-lg border border-rose-200 dark:border-rose-500/20">
              {edgeState === 'firstDay' || edgeState === 'emptyProfile' ? (
                <span>No coding sessions tracked yet</span>
              ) : (
                <span>⚡ Students code most between <strong>11PM - 1AM</strong></span>
              )}
            </p>
          </div>

          <div className="h-44 w-full">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%" key={`hours-${edgeState}`}>
                <BarChart data={dynamicCodingHoursData} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
                  <XAxis
                    dataKey="hour"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    className="text-slate-500 dark:text-gray-400 text-[10px]"
                    dy={5}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    className="text-slate-500 dark:text-gray-400 text-[10px]"
                  />
                  <Tooltip content={<HoursCustomTooltip />} cursor={{ fill: 'rgba(244, 63, 94, 0.08)' }} />
                  <Bar
                    dataKey="sessions"
                    fill="#f43f5e"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={32}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full animate-pulse bg-slate-200/50 dark:bg-dark-bg/80 rounded-xl" />
            )}
          </div>
        </div>

        {/* Chart 3: Tech Stack Usage (PieChart) */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-bg/60 border border-slate-200/80 dark:border-dark-border/60 transition-all hover:border-slate-300 dark:hover:border-dark-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-gray-100 font-['Outfit']">
                    Tech Stack Usage
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-[10px]">
                    Languages used across challenges
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-44 w-full relative flex items-center justify-center">
            {mounted ? (
              dynamicTechStackData.length > 0 && dynamicTechStackData[0].value > 0 ? (
                <ResponsiveContainer width="100%" height="100%" key={`tech-${edgeState}`}>
                  <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                    <Pie
                      data={dynamicTechStackData}
                      cx="50%"
                      cy="50%"
                      innerRadius={28}
                      outerRadius={52}
                      paddingAngle={3}
                      dataKey="value"
                      label={renderCustomPieLabel}
                      labelLine={false}
                    >
                      {dynamicTechStackData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={TECH_COLORS[index % TECH_COLORS.length]}
                          className="transition-all duration-300 hover:opacity-80 stroke-white dark:stroke-dark-card"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<TechCustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-slate-400 dark:text-gray-600 text-xs italic font-medium">
                  No submissions yet
                </div>
              )
            ) : (
              <div className="w-full h-full animate-pulse bg-slate-200/50 dark:bg-dark-bg/80 rounded-xl" />
            )}
          </div>

          {/* Color Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-1 pt-2 border-t border-slate-200/60 dark:border-dark-border/40">
            {dynamicTechStackData.length > 0 && dynamicTechStackData[0].value > 0 ? (
              dynamicTechStackData.map((item, idx) => (
                <div key={item.name} className="flex items-center gap-1">
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: TECH_COLORS[idx % TECH_COLORS.length] }}
                  />
                  <span className="text-slate-500 dark:text-gray-400 text-[10px] font-medium">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))
            ) : (
              <span className="text-[10px] text-slate-400 dark:text-gray-600">Connect GitHub to populate stack metrics</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
