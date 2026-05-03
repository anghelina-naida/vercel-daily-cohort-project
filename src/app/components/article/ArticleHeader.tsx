import Image from "next/image";

import type { Article } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="space-y-6">
      <div className="mx-auto flex w-full max-w-[44rem] flex-col gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-[var(--muted)]">{article.category}</p>
        <h1 className="max-w-[13ch] text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[4.4rem]">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 border-y border-[rgba(15,15,16,0.08)] py-4 text-sm text-[var(--muted)]">
          <span className="font-medium text-[var(--foreground)]">{article.author.name}</span>
          <span className="text-[rgba(15,15,16,0.2)]">·</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
      </div>
      <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(16,33,43,0.08)]">
        <Image
          alt={article.title}
          className="object-cover"
          fill
          priority
          sizes="(min-width: 1280px) 72rem, 100vw"
          src={article.image}
        />
      </div>
    </header>
  );
}
