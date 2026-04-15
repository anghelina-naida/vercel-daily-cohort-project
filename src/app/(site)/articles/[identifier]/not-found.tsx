import Link from "next/link";

export default function ArticleNotFound() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Not found</p>
      <h1 className="mt-3 text-3xl font-semibold">That article could not be found.</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Try heading back to the homepage or use search to browse the latest stories.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)]"
      >
        Return home
      </Link>
    </section>
  );
}
