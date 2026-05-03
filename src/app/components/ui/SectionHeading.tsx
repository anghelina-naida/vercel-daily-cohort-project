export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold">{title}</h2>
    </div>
  );
}
