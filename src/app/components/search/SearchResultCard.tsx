import Link from "next/link";

import type { Article } from "@/lib/types";
import { formatDate, getArticleHref } from "@/lib/utils";

export function SearchResultCard({ article }: { article: Article }) {
  const href = getArticleHref(article);

  return (
    <Link className="group block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4" href={href}>
      <article className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:border-[var(--foreground)]">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{article.category}</p>
        <h2 className="mt-3 text-2xl font-semibold">{article.title}</h2>
        <p className="mt-3 text-[var(--muted)]">{article.excerpt}</p>
        <p className="mt-5 text-sm text-[var(--muted)]">{formatDate(article.publishedAt)}</p>
      </article>
    </Link>
  );
}
