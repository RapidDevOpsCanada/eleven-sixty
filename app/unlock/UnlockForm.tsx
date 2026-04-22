'use client';

import { useState } from 'react';

export default function UnlockForm({ next }: { next: string }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch('/api/unlock/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      if (res.ok) {
        window.location.href = next || '/';
        return;
      }
      setError(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/60 font-bold">
          Password
        </span>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          aria-invalid={error || undefined}
          className="bg-navy-deep border border-white/10 rounded-full px-5 py-3 font-body text-base text-white placeholder-white/30 outline-none focus:border-gold-luxe transition-colors"
        />
      </label>

      {error && (
        <p role="alert" className="font-body text-sm text-red-400 font-medium">
          Incorrect password. Try again.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting || password.length === 0}
        className="bg-gold-luxe hover:bg-white text-navy-deep font-label text-xs uppercase tracking-widest font-bold px-6 py-4 rounded-full transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {submitting ? 'Unlocking…' : 'Unlock'}
      </button>
    </form>
  );
}
