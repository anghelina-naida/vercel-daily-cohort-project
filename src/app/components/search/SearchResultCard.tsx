import Link from "next/link";

import type { Article } from "@/lib/types";
import { formatDate, getArticleHref } from "@/lib/utils";

export function SearchResultCard({ article }: { article: Article }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{article.category}</p>
      <h2 className="mt-3 text-2xl font-semibold">
        <Link href={getArticleHref(article)}>{article.title}</Link>
      </h2>
      <p className="mt-3 text-[var(--muted)]">{article.excerpt}</p>
      <p className="mt-5 text-sm text-[var(--muted)]">{formatDate(article.publishedAt)}</p>
    </article>
  );
}
