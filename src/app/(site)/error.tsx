"use client";

import Link from "next/link";

type SiteErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function SiteError({ error, reset }: SiteErrorProps) {
  return (
    <main className="mx-auto flex min-h-[50vh] w-full max-w-3xl flex-col justify-center gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] px-6 py-12 shadow-sm sm:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">Vercel Daily</p>
      <h1 className="max-w-[16ch] text-4xl font-semibold leading-tight tracking-[-0.03em]">
        Something interrupted this page.
      </h1>
      <p className="max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)]">
        The page hit an unexpected error while loading. You can try again right away, or head back to the
        homepage and continue browsing.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)]"
        >
          Go home
        </Link>
      </div>
      {error.digest ? <p className="text-sm text-[var(--muted)]">Reference: {error.digest}</p> : null}
    </main>
  );
}
