import { searchArticles } from "@/lib/dal/articles";

import { EmptyState } from "../ui/EmptyState";
import { SearchResultCard } from "./SearchResultCard";

type SearchResultsProps = {
  category?: string;
  query?: string;
};

export async function SearchResults({ category, query }: SearchResultsProps) {
  const articles = await searchArticles({
    category,
    limit: 5,
    query,
  });

  if (articles.length === 0) {
    return (
      <EmptyState
        description="Try a different keyword or switch to another category."
        title="No stories matched your search"
      />
    );
  }

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <SearchResultCard key={article.id} article={article} />
      ))}
    </section>
  );
}
