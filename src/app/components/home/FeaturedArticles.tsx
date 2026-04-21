import { getFeaturedArticles } from "@/lib/dal/articles";

import { EmptyState } from "../ui/EmptyState";
import { SectionHeading } from "../ui/SectionHeading";
import { FeaturedArticleCard } from "./FeaturedArticleCard";

export async function FeaturedArticles() {
  const articles = await getFeaturedArticles().catch(() => null);

  if (!articles) {
    return (
      <EmptyState
        title="Featured stories are loading slowly"
        description="The featured feed is temporarily unavailable. Refresh in a moment or browse the search page instead."
      />
    );
  }

  return (
    <section className="space-y-5">
      <SectionHeading eyebrow="Editors' picks" title="Featured stories" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <FeaturedArticleCard key={article.id} article={article} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}
