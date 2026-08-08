import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold mb-2">404</h1>
      <p className="text-slate-400 mb-6 text-sm">Page Not Found</p>
      <Link
        href="/"
        className="px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-xl text-sm font-semibold transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
