'use client';

import React from 'react';

export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Liquid Flow RGB Orb 1 - Rose / Pink */}
      <div className="absolute -top-28 -left-20 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-rose-500/25 dark:bg-rose-600/30 blur-[100px] sm:blur-[140px] animate-blob-1" />
      
      {/* Liquid Flow RGB Orb 2 - Violet / Purple */}
      <div className="absolute top-1/3 -right-24 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-purple-500/25 dark:bg-purple-600/30 blur-[110px] sm:blur-[140px] animate-blob-2" />
      
      {/* Liquid Flow RGB Orb 3 - Amber / Cyan */}
      <div className="absolute -bottom-28 left-1/4 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full bg-amber-500/20 dark:bg-cyan-500/25 blur-[100px] sm:blur-[130px] animate-blob-3" />
    </div>
  );
}
