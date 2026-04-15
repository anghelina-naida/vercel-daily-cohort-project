import type { Article } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type ArticleHeaderProps = {
  article: Article;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="space-y-5">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">{article.category}</p>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{article.title}</h1>
      <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
        <span>{article.author.name}</span>
        <span>{formatDate(article.publishedAt)}</span>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(16,33,43,0.08)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={article.title} className="h-full w-full object-cover" src={article.image} />
      </div>
    </header>
  );
}
