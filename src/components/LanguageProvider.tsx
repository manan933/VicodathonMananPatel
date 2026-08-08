'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageType = 'english' | 'hinglish';

interface LanguageContextType {
  language: LanguageType;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Global translation dictionary for core headings, CTA buttons, and standard phrases
const translations: Record<string, Record<LanguageType, string>> = {
  // Brand & Nav
  "Build Daily. Get Noticed.": {
    english: "Build Daily. Get Noticed.",
    hinglish: "Daily Coding Karo. Spotlight Mein Aao."
  },
  "Explore": {
    english: "Explore",
    hinglish: "Tracks Dekho"
  },
  "Dashboard": {
    english: "Dashboard",
    hinglish: "Mera Board"
  },
  "Day 12": {
    english: "Day 12",
    hinglish: "Din 12"
  },
  "Videos": {
    english: "Videos",
    hinglish: "Learning Hub"
  },
  "Recruiter": {
    english: "Recruiter",
    hinglish: "Hiring Desk"
  },
  "Admin": {
    english: "Admin",
    hinglish: "System Control"
  },
  "Active Streak": {
    english: "Active Streak",
    hinglish: "Dhamaka Streak"
  },
  "Peak": {
    english: "Peak",
    hinglish: "Sabse Bada"
  },
  "days strong": {
    english: "days strong",
    hinglish: "din lagatar"
  },
  "60-Day Progress": {
    english: "60-Day Progress",
    hinglish: "60 Din Ka Safar"
  },

  // Hero Section Landing
  "Code Daily.": {
    english: "Code Daily.",
    hinglish: "Lagtatar Coding."
  },
  "Build Proof of Work.": {
    english: "Build Proof of Work.",
    hinglish: "Apna Kaam Dikhayein."
  },
  "Get Hired.": {
    english: "Get Hired.",
    hinglish: "Direct Job Paayein."
  },
  "The 60-Day College Coding Challenge": {
    english: "The 60-Day College Coding Challenge",
    hinglish: "60-Din Ka College Coding Challenge"
  },
  "A free challenge for Indian college students to build 1 project daily, maintain public proof-of-work, and get hired by top tech companies.": {
    english: "A free challenge for Indian college students to build 1 project daily, maintain public proof-of-work, and get hired by top tech companies.",
    hinglish: "Indian college students ke liye ekdum free challenge. Daily ek project banao, GitHub par proof dikhao, aur top companies mein select ho jao."
  },
  "Start Coding Today": {
    english: "Start Coding Today",
    hinglish: "Aaj Se Coding Shuru Karo"
  },
  "Explore Tracks": {
    english: "Explore Tracks",
    hinglish: "Tracks Ko Explore Karo"
  },

  // How it works
  "How It Works": {
    english: "How It Works",
    hinglish: "Yeh Kaise Kaam Karta Hai?"
  },
  "3 simple steps to upgrade your career": {
    english: "3 simple steps to upgrade your career",
    hinglish: "3 easy steps me apni career upgrade karo"
  },
  "Get Tonight's Challenge": {
    english: "Get Tonight's Challenge",
    hinglish: "Aaj Shaam Ka Challenge Lo"
  },
  "A fun, real-world coding problem drops every evening (Auth, Databases, APIs). Designed to finish in 45 minutes.": {
    english: "A fun, real-world coding problem drops every evening (Auth, Databases, APIs). Designed to finish in 45 minutes.",
    hinglish: "Har shaam ek badhiya coding challenge milega (Auth, Database, APIs). Bas 45 minutes me pura karne ke liye designed hai."
  },
  "Push to GitHub": {
    english: "Push to GitHub",
    hinglish: "GitHub Par Push Karo"
  },
  "Upload your code to GitHub and paste your link. Our automatic check verifies your commit in 2 seconds.": {
    english: "Upload your code to GitHub and paste your link. Our automatic check verifies your commit in 2 seconds.",
    hinglish: "Apna code GitHub par upload karke commit link paste karo. Hamara automatic system 2 second me check kar lega."
  },
  "Share & Get Hired": {
    english: "Share & Get Hired",
    hinglish: "Share Karo & Job Paao"
  },
  "One tap turns your code into a recruiter-ready LinkedIn post. Tech recruiters scout top builders on our leaderboard daily.": {
    english: "One tap turns your code into a recruiter-ready LinkedIn post. Tech recruiters scout top builders on our leaderboard daily.",
    hinglish: "Bas ek click me apne kaam ka recruiter-friendly LinkedIn post banao. Top companies ke recruiters daily hamare leaderboard par aate hain."
  },

  // Dashboard Page Alert Banners
  "Missed yesterday's code upload? No worries! Finish the quick catch-up challenge before midnight to save your 8-day streak.": {
    english: "Missed yesterday's code upload? No worries! Finish the quick catch-up challenge before midnight to save your 8-day streak.",
    hinglish: "Kal code upload karna bhool gaye? Koi baat nahi! Midnight se pehle catch-up challenge poora karke apni 8-day streak bachao."
  },
  "Connect GitHub and LinkedIn so top tech recruiters can scout your daily code proof.": {
    english: "Connect GitHub and LinkedIn so top tech recruiters can scout your daily code proof.",
    hinglish: "Apna GitHub aur LinkedIn connect karo taaki recruiters aapke daily code aur proof ko check kar sakein."
  },
  "Your streak starts today! Complete tonight's 45-minute project to earn your first flame badge.": {
    english: "Your streak starts today! Complete tonight's 45-minute project to earn your first flame badge.",
    hinglish: "Aapki streak aaj se shuru ho rahi hai! Aaj ka 45-minute ka project khatam karo aur apna pehla flame badge paao."
  },

  // Common UI Buttons
  "Save My Streak": {
    english: "Save My Streak",
    hinglish: "Mera Streak Bachao"
  },
  "Let's Go": {
    english: "Let's Go",
    hinglish: "Chalo Shuru Karein"
  },
  "Connect GitHub": {
    english: "Connect GitHub",
    hinglish: "GitHub Connect Karo"
  },
  "Connect LinkedIn": {
    english: "Connect LinkedIn",
    hinglish: "LinkedIn Connect Karo"
  },
  "Start Today's Build": {
    english: "Start Today's Build",
    hinglish: "Aaj Ka Project Shuru Karo"
  },
  "Recruiter Score": {
    english: "Recruiter Score",
    hinglish: "Recruiter Score"
  },
  "Campus Rank": {
    english: "Campus Rank",
    hinglish: "Campus Rank"
  },

  // Recruiter Dashboard Header
  "Scout Top College Developers": {
    english: "Scout Top College Developers",
    hinglish: "Top College Coders Ko Hire Karo"
  },
  "Filter, inspect, and directly hire students based on verifiable daily commits and streak data. No resume spam, just pure proof of work.": {
    english: "Filter, inspect, and directly hire students based on verifiable daily commits and streak data. No resume spam, just pure proof of work.",
    hinglish: "Students ke verified commits aur streak ke basis par unhe inspect karke hire karo. Koi resume spam nahi, sirf real proof of work."
  },
  "Search candidates by name, college, or skills...": {
    english: "Search candidates by name, college, or skills...",
    hinglish: "Candidates ko naam, college, ya skills se search karein..."
  },

  // Admin Dashboard
  "System Administration": {
    english: "System Administration",
    hinglish: "System Control Room"
  },
  "Publish daily challenges, monitor real-time system performance telemetry, and broadcast alerts to the student community.": {
    english: "Publish daily challenges, monitor real-time system performance telemetry, and broadcast alerts to the student community.",
    hinglish: "Daily challenge publish karo, server telemetry dekho, aur students ko important updates alert broadcast karo."
  },
  "Schedule Tomorrow's Challenge": {
    english: "Schedule Tomorrow's Challenge",
    hinglish: "Kal Ka Challenge Schedule Karo"
  },

  // Hub Page
  "Learning & Motivation Hub": {
    english: "Learning & Motivation Hub",
    hinglish: "Videos & Motivation Hub"
  },
  "Learn directly from Abhishek Bhatia's YouTube channel. High-value tech tutorials, motivation, and challenge roadmap explanations.": {
    english: "Learn directly from AB Talks YouTube channel. High-value tech tutorials, motivation, and challenge roadmap explanations.",
    hinglish: "AB Talks ke YouTube videos se seekho. Informational tech tutorials aur motivational videos ek hi jagah par."
  },
  "Subscribe on YouTube": {
    english: "Subscribe on YouTube",
    hinglish: "YouTube Par Subscribe Karo"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('english');

  useEffect(() => {
    const saved = localStorage.getItem('abtalks-language') as LanguageType;
    if (saved === 'hinglish' || saved === 'english') {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const next = language === 'english' ? 'hinglish' : 'english';
    setLanguage(next);
    localStorage.setItem('abtalks-language', next);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (translation) {
      return translation[language];
    }
    // Fallback if key not found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
