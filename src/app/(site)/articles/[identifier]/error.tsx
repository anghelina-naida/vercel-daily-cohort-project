"use client";

import Link from "next/link";

type ArticleErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ArticleError({ reset }: ArticleErrorProps) {
  return (
    <section className="mx-auto flex min-h-[42vh] w-full max-w-3xl flex-col justify-center gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] px-6 py-12 shadow-sm sm:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">Article</p>
      <h1 className="max-w-[16ch] text-4xl font-semibold leading-tight tracking-[-0.03em]">
        This story slipped away for a moment.
      </h1>
      <p className="max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)]">
        The article page failed while loading. Try the story again, or return to the homepage and pick up
        another read.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)]"
        >
          Reload article
        </button>
        <Link
          href="/"
          className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)]"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
