import React, { useState, useEffect } from 'react';

export default function AppSplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
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
        {/* WYUE Official Logo */}
        <div className="relative flex items-center justify-center p-0 m-0 bg-transparent border-none shadow-none">
          <img
            src="/wyue-logo.png?v=21"
            alt="WYUE"
            className="h-16 sm:h-20 w-auto max-w-[240px] object-contain animate-pulse dark:hidden shadow-none border-none outline-none"
            style={{ boxShadow: 'none', filter: 'none', WebkitFilter: 'none', border: 'none', outline: 'none', background: 'transparent' }}
          />
          <img
            src="/wyue-logo-dark.png?v=21"
            alt="WYUE"
            className="h-16 sm:h-20 w-auto max-w-[240px] object-contain animate-pulse hidden dark:block shadow-none border-none outline-none"
            style={{ boxShadow: 'none', filter: 'none', WebkitFilter: 'none', border: 'none', outline: 'none', background: 'transparent' }}
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
