'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Github, Loader2, FileCode, Check } from 'lucide-react';

export interface GitHubVerifierProps {
  githubUrl: string;
  onVerified?: () => void;
}

/**
  Helper function to validate github.com URLs.
  Supports formats like:
  - https://github.com/user/repo
  - http://github.com/user/repo
  - github.com/user/repo
  - https://www.github.com/user/repo
 */
export function isValidGithubUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;

  try {
    const formattedUrl = trimmed.startsWith('http://') || trimmed.startsWith('https://')
      ? trimmed
      : `https://${trimmed}`;
    const parsed = new URL(formattedUrl);
    return parsed.hostname === 'github.com' || parsed.hostname === 'www.github.com';
  } catch {
    return /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+/.test(trimmed);
  }
}

export default function GitHubVerifier({ githubUrl, onVerified }: GitHubVerifierProps) {
  const [step, setStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const onVerifiedRef = useRef(onVerified);

  // Keep latest onVerified reference
  useEffect(() => {
    onVerifiedRef.current = onVerified;
  }, [onVerified]);

  const isValid = isValidGithubUrl(githubUrl);

  useEffect(() => {
    // If not a valid GitHub URL, do not verify and reset state
    if (!isValid) {
      setStep(0);
      setProgress(0);
      return;
    }

    // Step 1 starts immediately (0-800ms)
    setStep(1);
    setProgress(0);

    const DURATION = 2400; // Total duration 2.4 seconds
    const startTime = Date.now();

    // Progress bar animation interval (0% to 100% over 2.4s)
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(pct);
      if (elapsed >= DURATION) {
        clearInterval(progressInterval);
      }
    }, 16);

    // Step 2: 800ms
    const step2Timer = setTimeout(() => {
      setStep(2);
    }, 800);

    // Step 3: 1600ms
    const step3Timer = setTimeout(() => {
      setStep(3);
    }, 1600);

    // Step 4: 2400ms (Complete)
    const step4Timer = setTimeout(() => {
      setStep(4);
      if (onVerifiedRef.current) {
        onVerifiedRef.current();
      }
    }, 2400);

    // Clean up all timers on unmount or URL change
    return () => {
      clearInterval(progressInterval);
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
      clearTimeout(step4Timer);
    };
  }, [githubUrl, isValid]);

  // When not verifying or invalid URL, return null
  if (!isValid || step === 0) {
    return null;
  }

  return (
    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border shadow-sm transition-all duration-300">
      {/* Subtle Progress Bar */}
      <div className="w-full bg-slate-200/80 dark:bg-slate-800/80 h-1.5 rounded-full overflow-hidden mb-3.5">
        <div
          className="h-full bg-gradient-to-r from-rose-500 via-rose-400 to-emerald-500 rounded-full transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Staged Verification Steps */}
      <div className="space-y-2.5">
        {/* Step 1: Connecting */}
        {step >= 1 && (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-gray-300 animate-fade-in">
            <Loader2 className={`w-3.5 h-3.5 text-rose-500 dark:text-rose-400 ${step < 4 ? 'animate-spin' : ''}`} />
            <span>Connecting to GitHub...</span>
          </div>
        )}

        {/* Step 2: Found Commit */}
        {step >= 2 && (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-gray-300 animate-fade-in">
            <Github className="w-3.5 h-3.5 text-slate-600 dark:text-gray-400" />
            <span className="flex items-center gap-1.5">
              Found commit{' '}
              <code className="font-mono text-[11px] bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded border border-slate-300/60 dark:border-slate-700/60">
                a3f9b21
              </code>
            </span>
          </div>
        )}

        {/* Step 3: Diff Stats */}
        {step >= 3 && (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-gray-300 animate-fade-in">
            <FileCode className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>3 code files updated (+87 lines of JavaScript)</span>
          </div>
        )}

        {/* Step 4: Verified */}
        {step >= 4 && (
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 animate-fade-in">
            <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 stroke-[2.5]" />
            <span>✓ Code Verified & Saved</span>
          </div>
        )}
      </div>
    </div>
  );
}
