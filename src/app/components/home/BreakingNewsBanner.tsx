import Link from "next/link";

import { getBreakingNews } from "@/lib/dal/articles";

export async function BreakingNewsBanner() {
  const breakingNews = await getBreakingNews();

  return (
    <Link
      href={`/articles/${breakingNews.articleId}`}
      className="flex flex-col gap-2 rounded-3xl border border-[var(--border)] bg-[var(--highlight)] px-5 py-4 shadow-sm transition-transform hover:-translate-y-0.5"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]">
        Breaking news
      </span>
      <span className="text-xl font-semibold">{breakingNews.headline}</span>
      <span className="text-sm text-[rgba(16,33,43,0.8)]">{breakingNews.summary}</span>
    </Link>
  );
}
