import { SkeletonCard } from "@/app/components/ui/SkeletonCard";

export default function ArticleLoading() {
  return (
    <div className="grid gap-6">
      <SkeletonCard label="Loading article header" />
      <SkeletonCard label="Loading article body" />
      <SkeletonCard label="Loading trending articles" />
    </div>
  );
}
