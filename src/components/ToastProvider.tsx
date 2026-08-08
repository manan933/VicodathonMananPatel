'use client';

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { CheckCircle2, Flame, Award, Eye, X } from 'lucide-react';

export type ToastType = 'success' | 'streak' | 'badge' | 'recruiter';

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  isExiting?: boolean;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const toastConfig: Record<
  ToastType,
  {
    icon: React.ComponentType<{ className?: string }>;
    iconBg: string;
    iconColor: string;
    borderColor: string;
  }
> = {
  success: {
    icon: CheckCircle2,
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-200 dark:border-emerald-800/40',
  },
  streak: {
    icon: Flame,
    iconBg: 'bg-amber-50 dark:bg-amber-950/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-200 dark:border-amber-800/40',
  },
  badge: {
    icon: Award,
    iconBg: 'bg-rose-50 dark:bg-rose-950/40',
    iconColor: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-rose-200 dark:border-rose-800/40',
  },
  recruiter: {
    icon: Eye,
    iconBg: 'bg-violet-50 dark:bg-violet-950/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-200 dark:border-violet-800/40',
  },
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, { dismissTimer: NodeJS.Timeout; removeTimer: NodeJS.Timeout }>>(
    new Map()
  );

  const startDismissAnimation = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, isExiting: true } : toast))
    );

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
      const timers = timersRef.current.get(id);
      if (timers) {
        clearTimeout(timers.dismissTimer);
        clearTimeout(timers.removeTimer);
        timersRef.current.delete(id);
      }
    }, 300);
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const newToast: ToastItem = { id, message, type, isExiting: false };

      setToasts((prev) => [...prev, newToast]);

      // Auto-dismiss after 4 seconds total (starts fade-out at 3.7s, removes at 4.0s)
      const dismissTimer = setTimeout(() => {
        startDismissAnimation(id);
      }, 3700);

      const removeTimer = setTimeout(() => {
        // Fallback cleanup
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);

      timersRef.current.set(id, { dismissTimer, removeTimer });
    },
    [startDismissAnimation]
  );

  const handleClose = (id: string) => {
    const timers = timersRef.current.get(id);
    if (timers) {
      clearTimeout(timers.dismissTimer);
      clearTimeout(timers.removeTimer);
    }
    startDismissAnimation(id);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <style>{`
        @keyframes toastSlideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes toastFadeOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .animate-toast-slide-in {
          animation: toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-toast-fade-out {
          animation: toastFadeOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div
        className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0"
        aria-live="polite"
      >
        {toasts.map((toast) => {
          const config = toastConfig[toast.type];
          const Icon = config.icon;

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-dark-card border dark:border-dark-border shadow-lg text-xs font-bold transition-all duration-200 ${
                config.borderColor
              } ${toast.isExiting ? 'animate-toast-fade-out' : 'animate-toast-slide-in'}`}
            >
              <div className="flex items-center gap-3 pr-2 min-w-0">
                <div
                  className={`p-2 rounded-xl flex items-center justify-center shrink-0 ${config.iconBg} ${config.iconColor}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-slate-900 dark:text-gray-100 leading-snug break-words">
                  {toast.message}
                </span>
              </div>
              <button
                onClick={() => handleClose(toast.id)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-gray-200 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors shrink-0 ml-2"
                aria-label="Close toast notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};
