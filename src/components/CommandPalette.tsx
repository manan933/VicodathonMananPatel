'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  LayoutDashboard,
  Flame,
  Home,
  Moon,
  Github,
  Check,
  Command,
  X,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  Briefcase,
  Settings,
  Youtube,
} from 'lucide-react';

export interface CommandItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  badge?: string;
}

interface CommandPaletteProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CommandPalette({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
}: CommandPaletteProps) {
  const router = useRouter();
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isMac, setIsMac] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Controlled vs Uncontrolled state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleClose = useCallback(() => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
    setSearchQuery('');
    setSelectedIndex(0);
  }, [externalOnClose]);

  // Detect OS for Mac vs Windows hint display
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
    }
  }, []);

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          handleClose();
        } else {
          setInternalIsOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Theme toggle action handler
  const handleToggleTheme = () => {
    const currentTheme = localStorage.getItem('abtalks-theme') || 'brutal';
    let nextTheme: 'dark' | 'light' | 'brutal' = 'dark';
    if (currentTheme === 'dark') nextTheme = 'light';
    else if (currentTheme === 'light') nextTheme = 'brutal';
    else nextTheme = 'dark';

    document.documentElement.classList.remove('dark', 'light', 'brutal');
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else if (nextTheme === 'brutal') {
      document.documentElement.classList.add('brutal');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('abtalks-theme', nextTheme);
    handleClose();
  };

  // Copy GitHub URL handler
  const handleCopyGithub = () => {
    const githubUrl = 'https://github.com/manan933/VicodathonMananPatel';
    navigator.clipboard.writeText(githubUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      handleClose();
    }, 1200);
  };

  // List of commands
  const commands: CommandItem[] = [
    {
      id: 'dashboard',
      label: 'Go to Dashboard',
      icon: LayoutDashboard,
      action: () => {
        router.push('/dashboard');
        handleClose();
      },
    },
    {
      id: 'recruiter',
      label: 'Recruiter Dashboard',
      icon: Briefcase,
      action: () => {
        router.push('/recruiter');
        handleClose();
      },
    },
    {
      id: 'admin',
      label: 'Admin Control Panel',
      icon: Settings,
      action: () => {
        router.push('/admin');
        handleClose();
      },
    },
    {
      id: 'hub',
      label: 'YouTube Motivation Hub',
      icon: Youtube,
      action: () => {
        router.push('/hub');
        handleClose();
      },
    },
    {
      id: 'today-build',
      label: "Start Today's Build",
      icon: Flame,
      action: () => {
        router.push('/day/12');
        handleClose();
      },
    },
    {
      id: 'home',
      label: 'Go Home',
      icon: Home,
      action: () => {
        router.push('/');
        handleClose();
      },
    },
    {
      id: 'toggle-theme',
      label: 'Toggle Theme',
      icon: Moon,
      action: handleToggleTheme,
    },
    {
      id: 'copy-github',
      label: copied ? 'Copied to Clipboard!' : 'Copy GitHub URL',
      icon: copied ? Check : Github,
      action: handleCopyGithub,
      badge: copied ? 'Copied!' : undefined,
    },
  ];

  // Filter commands case-insensitively
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  // Reset selected index when filtered list changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Modal keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands.length > 0 && filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] backdrop-blur-sm bg-black/40 flex items-start justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      onKeyDown={handleModalKeyDown}
    >
      <div
        className="max-w-lg w-full mx-auto mt-[20vh] rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="relative flex items-center px-4 border-b border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-card/50">
          <Search className="w-5 h-5 text-slate-400 dark:text-gray-500 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type a command..."
            className="w-full py-3.5 bg-transparent text-slate-900 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 text-sm focus:outline-none font-medium"
            autoFocus
          />
          <div className="flex items-center gap-2 shrink-0">
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/10 rounded border border-slate-200 dark:border-dark-border">
              {isMac ? '⌘K' : 'Ctrl+K'}
            </kbd>
            <button
              onClick={handleClose}
              className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-400 dark:text-gray-400 transition-colors"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Command List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, idx) => {
              const IconComponent = command.icon;
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={command.id}
                  onClick={command.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center gap-3 text-sm rounded-xl transition-colors ${
                    isSelected
                      ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 font-semibold'
                      : 'text-slate-700 dark:text-gray-300'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="flex-1 truncate">{command.label}</span>
                  {command.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                      {command.badge}
                    </span>
                  )}
                  {isSelected && (
                    <CornerDownLeft className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 shrink-0 opacity-80" />
                  )}
                </div>
              );
            })
          ) : (
            <div className="py-8 text-center text-sm text-slate-500 dark:text-gray-400 font-medium">
              No matching commands found
            </div>
          )}
        </div>

        {/* Footer Hints */}
        <div className="px-4 py-2.5 border-t border-slate-100 dark:border-dark-border/60 bg-slate-50/50 dark:bg-dark-card/30 flex items-center justify-between text-[11px] text-slate-400 dark:text-gray-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded text-[10px] text-slate-600 dark:text-gray-300">
                <ArrowUp className="w-2.5 h-2.5 inline" />
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded text-[10px] text-slate-600 dark:text-gray-300">
                <ArrowDown className="w-2.5 h-2.5 inline" />
              </kbd>
              <span className="ml-0.5">Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded text-[10px] text-slate-600 dark:text-gray-300">
                ↵
              </kbd>
              <span className="ml-0.5">Select</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded text-[10px] text-slate-600 dark:text-gray-300">
              Esc
            </kbd>
            <span className="ml-0.5">Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
