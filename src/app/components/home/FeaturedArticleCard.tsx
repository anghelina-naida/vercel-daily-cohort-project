import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/lib/types";
import { formatDate, getArticleHref } from "@/lib/utils";

export function FeaturedArticleCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  const href = getArticleHref(article);

  return (
    <Link className="group block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4" href={href}>
      <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:border-[var(--foreground)]">
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl bg-[rgba(16,33,43,0.08)]">
          <Image
            alt={article.title}
            className="object-cover transition-transform group-hover:scale-[1.03]"
            fill
            priority={priority}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            src={article.image}
          />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{article.category}</p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight">{article.title}</h2>
        <p className="mt-3 text-sm text-[var(--muted)]">{article.excerpt}</p>
        <div className="mt-auto pt-5 text-sm text-[var(--muted)]">{formatDate(article.publishedAt)}</div>
      </article>
    </Link>
  );
}
