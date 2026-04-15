import { SkeletonCard } from "@/app/components/ui/SkeletonCard";

export default function SearchLoading() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonCard key={index} label="Loading result" />
      ))}
    </div>
  );
}
