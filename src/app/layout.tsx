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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-bg text-gray-100 min-h-screen selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
