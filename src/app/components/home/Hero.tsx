export function Hero() {
  return (
    <section className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] px-6 py-10 shadow-sm sm:px-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Morning edition</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          Modern web stories shaped for teams shipping with confidence.
        </h1>
        <p className="max-w-2xl text-lg text-[var(--muted)]">
          A Hendrixer-inspired newsroom structure, adapted for App Router patterns, cache
          components, server actions, and a cookie-backed subscriber experience.
        </p>
      </div>
      <div className="rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(135deg,#10212b,#d14c2f)] p-6 text-[var(--accent-foreground)]">
        <p className="text-sm uppercase tracking-[0.3em] opacity-80">Featured beat</p>
        <p className="mt-4 text-2xl font-semibold">Engineering, changelog, and company news</p>
      </div>
    </section>
  );
}
