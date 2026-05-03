export function EmptyState({ description, title }: { description: string; title: string }) {
  return (
    <section className="rounded-3xl border border-dashed border-[var(--border)] bg-[var(--card)] p-10 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-[var(--muted)]">{description}</p>
    </section>
  );
}
