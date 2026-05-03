"use client";

import Link from "next/link";

export default function SearchError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="mx-auto flex min-h-[40vh] w-full max-w-3xl flex-col justify-center gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] px-6 py-12 shadow-sm sm:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">Search</p>
      <h1 className="max-w-[16ch] text-4xl font-semibold leading-tight tracking-[-0.03em]">
        We couldn&apos;t load the archive right now.
      </h1>
      <p className="max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)]">
        The search page ran into a temporary problem. Refresh the results or go back home and try again in a
        moment.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)]"
        >
          Reload search
        </button>
        <Link
          href="/"
          className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)]"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
