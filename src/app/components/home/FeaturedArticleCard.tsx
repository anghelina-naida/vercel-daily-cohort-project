import Link from "next/link";

import type { Article } from "@/lib/types";
import { formatDate, getArticleHref } from "@/lib/utils";

type FeaturedArticleCardProps = {
  article: Article;
};

export function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
      <div className="mb-4 aspect-[16/10] overflow-hidden rounded-2xl bg-[rgba(16,33,43,0.08)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={article.title} className="h-full w-full object-cover" src={article.image} />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{article.category}</p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight">
        <Link href={getArticleHref(article)}>{article.title}</Link>
      </h2>
      <p className="mt-3 text-sm text-[var(--muted)]">{article.excerpt}</p>
      <div className="mt-auto pt-5 text-sm text-[var(--muted)]">{formatDate(article.publishedAt)}</div>
    </article>
  );
}
