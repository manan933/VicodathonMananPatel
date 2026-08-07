import type { Metadata, Viewport } from 'next';
import './globals.css';

import AmbientBackground from '@/components/AmbientBackground';

export const metadata: Metadata = {
  title: 'ABTalks | 60-Day College Coding Challenge',
  description: 'Reimagined platform for Indian college students to build 1 project daily, maintain public GitHub & LinkedIn proof-of-work streaks, and get hired by top tech companies.',
  keywords: ['ABTalks', '60 Day Coding Challenge', 'College Coders', 'GitHub Streak', 'LinkedIn Proof of Work', 'Indian Developers'],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ABTalks',
  },
  icons: {
    icon: '/icon-192.png',
    shortcut: '/icon-192.png',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('abtalks-theme');
                document.documentElement.classList.remove('dark', 'light', 'cyber');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                } else if (theme === 'cyber') {
                  document.documentElement.classList.add('dark', 'cyber');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}

              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('SW registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-dark-bg text-slate-900 dark:text-gray-100 min-h-screen selection:bg-rose-500 selection:text-white antialiased transition-colors duration-200 relative overflow-x-hidden">
        <AmbientBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
