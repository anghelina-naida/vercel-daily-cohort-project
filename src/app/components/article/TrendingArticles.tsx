import Link from "next/link";

import { getTrendingArticles } from "@/lib/dal/articles";
import { formatDate, getArticleHref } from "@/lib/utils";

import { SectionHeading } from "../ui/SectionHeading";

type TrendingArticlesProps = {
  currentArticleId: string;
};

export async function TrendingArticles({ currentArticleId }: TrendingArticlesProps) {
  const articles = await getTrendingArticles([currentArticleId]);

  return (
    <section className="space-y-5">
      <SectionHeading eyebrow="Trending now" title="More stories to explore" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={getArticleHref(article)}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{article.category}</p>
            <h3 className="mt-3 text-xl font-semibold">{article.title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">{formatDate(article.publishedAt)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
