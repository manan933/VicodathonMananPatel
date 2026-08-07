import React from 'react';
import Link from 'next/link';
import { Flame, Github, Linkedin, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-dark-border bg-dark-bg/80 py-8 px-4 mt-12 text-gray-400">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-500/20 flex items-center justify-center border border-rose-500/30">
              <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
            </div>
            <span className="font-bold text-white tracking-tight font-['Outfit']">ABTalks 60-Day Challenge</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="hover:text-rose-400 transition-colors">Landing Page (/)</Link>
            <Link href="/dashboard" className="hover:text-rose-400 transition-colors">Dashboard (/dashboard)</Link>
            <Link href="/day/12" className="hover:text-rose-400 transition-colors">Challenge Day (/day/12)</Link>
          </div>
        </div>

        <div className="pt-4 border-t border-dark-border/60 flex flex-col xs:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p className="flex items-center gap-1">
            Built for Indian College Students <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> Late-Night Coders
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Recruiter Proof of Work Engine</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
