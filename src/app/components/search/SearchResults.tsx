import { searchArticles } from "@/lib/dal/articles";

import { EmptyState } from "../ui/EmptyState";
import { SearchPagination } from "./SearchPagination";
import { SearchResultCard } from "./SearchResultCard";

type SearchResultsProps = {
  category?: string;
  page: number;
  query?: string;
};

export async function SearchResults({ category, page, query }: SearchResultsProps) {
  const result = await searchArticles({
    category,
    limit: 5,
    page,
    query,
  }).catch(() => null);

  if (!result) {
    return (
      <EmptyState
        description="The search service is temporarily unavailable. Please try again in a moment."
        title="Search is taking a quick break"
      />
    );
  }

  const { articles, pagination } = result;

  if (articles.length === 0) {
    return (
      <EmptyState
        description="Try a different keyword or switch to another category."
        title="No stories matched your search"
      />
    );
  }

  return (
    <div className="grid gap-5">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <SearchResultCard key={article.id} article={article} />
        ))}
      </section>
      {pagination ? <SearchPagination category={category} pagination={pagination} query={query} /> : null}
    </div>
  );
}
