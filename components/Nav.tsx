'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/site';

export default function Nav() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: profile.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
        .formatToParts(new Date())
        .reduce<Record<string, string>>((acc, p) => {
          acc[p.type] = p.value;
          return acc;
        }, {});
      setTime(`${parts.hour}:${parts.minute}:${parts.second}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="max-w-[1120px] mx-auto px-7 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="ticked w-9 h-9 border border-ink flex items-center justify-center font-mono font-semibold text-[13px]">
            SLM
          </div>
        </a>

        <div className="hidden sm:flex gap-7 font-mono text-xs uppercase tracking-[0.06em]">
          <a href="#about" className="opacity-75 hover:opacity-100 transition-opacity">
            About
          </a>
          <a href="#work" className="opacity-75 hover:opacity-100 transition-opacity">
            Work
          </a>
          <a href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-ink-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-accent dot-pulse" />
          <span className="hidden md:inline">{profile.locationShort.toUpperCase()} · {profile.timezoneLabel} ·</span>
          <span>{time}</span>
        </div>
      </nav>
    </header>
  );
}
