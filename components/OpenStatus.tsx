'use client';

import { useEffect, useState } from 'react';

type Schedule = { open: number; close: number }; // minutes since midnight

// 0=Sun, 1=Mon, ... 6=Sat
const HOURS: Record<number, Schedule> = {
  0: { open: 11 * 60 + 30, close: 21 * 60 }, // Sun: 11:30am – 9pm
  1: { open: 11 * 60 + 30, close: 21 * 60 }, // Mon: 11:30am – 9pm
  2: { open: 11 * 60 + 30, close: 21 * 60 }, // Tue
  3: { open: 11 * 60 + 30, close: 21 * 60 }, // Wed
  4: { open: 11 * 60 + 30, close: 21 * 60 }, // Thu
  5: { open: 11 * 60 + 30, close: 22 * 60 }, // Fri: 11:30am – 10pm
  6: { open: 11 * 60 + 30, close: 22 * 60 } // Sat: 11:30am – 10pm
};

const formatTime = (mins: number): string => {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const period = h24 >= 12 ? 'pm' : 'am';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return m === 0 ? `${h12}${period}` : `${h12}:${m.toString().padStart(2, '0')}${period}`;
};

const RESTAURANT_TZ = 'America/Toronto';

// Get day-of-week (0-6) and minutes-since-midnight as they are in the
// restaurant's local timezone, regardless of the viewer's clock.
function getLocalDayAndMins(now: Date): { day: number; mins: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: RESTAURANT_TZ,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(now);
  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6
  };
  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Sun';
  let hour = parseInt(parts.find((p) => p.type === 'hour')?.value ?? '0', 10);
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value ?? '0', 10);
  // en-US hour12:false returns 24 for midnight in some implementations
  if (hour === 24) hour = 0;
  return { day: dayMap[weekday] ?? 0, mins: hour * 60 + minute };
}

function compute(now: Date): { open: boolean; label: string } {
  const { day, mins } = getLocalDayAndMins(now);
  const todays = HOURS[day];

  if (todays && mins >= todays.open && mins < todays.close) {
    return { open: true, label: `Open · closes ${formatTime(todays.close)}` };
  }

  // Before opening today
  if (todays && mins < todays.open) {
    return { open: false, label: `Closed · opens ${formatTime(todays.open)}` };
  }

  // After closing today: find the next day with hours
  for (let i = 1; i <= 7; i++) {
    const next = (day + i) % 7;
    const sched = HOURS[next];
    if (sched) {
      const names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const whenLabel = i === 1 ? 'tomorrow' : names[next];
      return { open: false, label: `Closed · opens ${formatTime(sched.open)} ${whenLabel}` };
    }
  }

  return { open: false, label: 'Closed' };
}

export default function OpenStatus({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const tick = () => setStatus(compute(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.15em] font-bold ${
        status.open ? 'text-white' : 'text-white/60'
      } ${className}`}
    >
      <span
        className={`relative inline-flex w-2 h-2 rounded-full ${
          status.open ? 'bg-emerald-400' : 'bg-white/40'
        }`}
      >
        {status.open && (
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
        )}
      </span>
      {status.label}
    </div>
  );
}
