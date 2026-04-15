type SkeletonCardProps = {
  label: string;
};

export function SkeletonCard({ label }: SkeletonCardProps) {
  return (
    <div
      aria-label={label}
      className="min-h-40 animate-pulse rounded-3xl border border-[var(--border)] bg-[rgba(255,250,242,0.75)] p-5 shadow-sm"
    />
  );
}
