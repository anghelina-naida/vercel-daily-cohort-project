import { Suspense } from "react";

import { notFound } from "next/navigation";

import { ArticleContent } from "@/app/components/article/ArticleContent";
import { ArticleHeader } from "@/app/components/article/ArticleHeader";
import { PaywallCTA } from "@/app/components/article/PaywallCTA";
import { TeaserContent } from "@/app/components/article/TeaserContent";
import { TrendingArticles } from "@/app/components/article/TrendingArticles";
import { SkeletonCard } from "@/app/components/ui/SkeletonCard";
import { getArticleByIdentifier } from "@/lib/dal/articles";
import { canViewFullArticle } from "@/lib/dal/subscription";
import { buildArticleMetadata } from "@/lib/metadata";

type ArticlePageProps = {
  params: Promise<{
    identifier: string;
  }>;
};

export async function generateMetadata({ params }: ArticlePageProps) {
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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { identifier } = await params;

  try {
    const [article, isSubscribed] = await Promise.all([
      getArticleByIdentifier(identifier),
      canViewFullArticle(),
    ]);

    return (
      <article className="grid gap-10">
        <ArticleHeader article={article} />
        {isSubscribed ? <ArticleContent blocks={article.content} /> : <TeaserContent article={article} />}
        {!isSubscribed && <PaywallCTA />}
        <Suspense fallback={<SkeletonCard label="Loading trending articles" />}>
          <TrendingArticles currentArticleId={article.id} />
        </Suspense>
      </article>
    );
  } catch {
    notFound();
  }
}
