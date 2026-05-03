import { Suspense } from "react";

import { notFound } from "next/navigation";

import { ArticleAccessSection } from "@/app/components/article/ArticleAccessSection";
import { ArticleHeader } from "@/app/components/article/ArticleHeader";
import { TeaserContent } from "@/app/components/article/TeaserContent";
import { TrendingArticles } from "@/app/components/article/TrendingArticles";
import { SkeletonCard } from "@/app/components/ui/SkeletonCard";
import { getArticleByIdentifier } from "@/lib/dal/articles";
import { buildArticleMetadata } from "@/lib/metadata";

function ArticleAccessFallback() {
  return (
    <section
      aria-label="Loading article access"
      className="grid gap-4 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
    >
      <div className="h-6 w-36 animate-pulse rounded-full bg-[rgba(17,17,17,0.08)]" />
      <div className="h-4 w-full animate-pulse rounded-full bg-[rgba(17,17,17,0.08)]" />
      <div className="h-4 w-[92%] animate-pulse rounded-full bg-[rgba(17,17,17,0.08)]" />
      <div className="h-4 w-[84%] animate-pulse rounded-full bg-[rgba(17,17,17,0.08)]" />
      <div className="mt-4 h-14 w-56 animate-pulse rounded-2xl bg-[rgba(17,17,17,0.08)]" />
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    identifier: string;
  }>;
}) {
  const { identifier } = await params;

  try {
    const article = await getArticleByIdentifier(identifier);
    return buildArticleMetadata(article);
  } catch {
    return {
      title: "Article not found",
    };
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{
    identifier: string;
  }>;
}) {
  const { identifier } = await params;
  const article = await getArticleByIdentifier(identifier).catch(() => null);

  if (!article) {
    notFound();
  }

  const firstParagraphIndex = article.content.findIndex((block) => block.type === "paragraph");
  const continuationBlocks =
    firstParagraphIndex === -1
      ? article.content
      : article.content.filter((_, index) => index !== firstParagraphIndex);

  return (
    <article className="grid gap-10">
      <ArticleHeader article={article} />
      <TeaserContent article={article} />
      <Suspense fallback={<ArticleAccessFallback />}>
        <ArticleAccessSection continuationBlocks={continuationBlocks} />
      </Suspense>
      <Suspense fallback={<SkeletonCard label="Loading trending articles" />}>
        <TrendingArticles currentArticleId={article.id} />
      </Suspense>
    </article>
  );
}
