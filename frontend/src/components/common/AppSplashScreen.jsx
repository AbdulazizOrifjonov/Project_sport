import React, { useState, useEffect } from 'react';

export default function AppSplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show on fresh page/app launch
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 600);

    const timer2 = setTimeout(() => {
      setVisible(false);
    }, 950);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white dark:bg-[#0a0a0c] flex flex-col items-center justify-center transition-opacity duration-350 ease-out select-none pointer-events-none ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        {/* WYUE Official Squircle Icon */}
        <div className="relative group">
          <img
            src="/wyue-app-icon.png?v=6"
            alt="WYUE"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-contain shadow-2xl animate-pulse"
          />
        </div>

        {/* Brand Name */}
        <h1 className="mt-4 font-black text-2xl sm:text-3xl tracking-wider text-slate-950 dark:text-white uppercase font-sans">
          WYUE
        </h1>
        <p className="mt-1 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Rasmiy do‘kon
        </p>

        {/* Loading Progress Indicator */}
        <div className="w-28 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-5">
          <div className="w-1/2 h-full bg-slate-950 dark:bg-white rounded-full animate-[wyueBar_1.2s_ease-in-out_infinite_alternate]" />
        </div>
      </div>
    </div>
  );
}
