import { getFeaturedArticles } from "@/lib/dal/articles";

import { SectionHeading } from "../ui/SectionHeading";
import { FeaturedArticleCard } from "./FeaturedArticleCard";

export async function FeaturedArticles() {
  const articles = await getFeaturedArticles();

  return (
    <section className="space-y-5">
      <SectionHeading eyebrow="Editors' picks" title="Featured stories" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <FeaturedArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
