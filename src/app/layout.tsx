import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ABTalks | 60-Day College Coding Challenge',
  description: 'Reimagined platform for Indian college students to build 1 project daily, maintain public GitHub & LinkedIn proof-of-work streaks, and get hired by top tech companies.',
  keywords: ['ABTalks', '60 Day Coding Challenge', 'College Coders', 'GitHub Streak', 'LinkedIn Proof of Work', 'Indian Developers'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0A0A0E',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
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
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-gray-100 min-h-screen selection:bg-rose-500 selection:text-white antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
