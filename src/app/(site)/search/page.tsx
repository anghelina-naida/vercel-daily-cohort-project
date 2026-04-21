import { Suspense } from "react";

import type { Metadata } from "next";

import { SearchForm } from "@/app/components/search/SearchForm";
import { SearchResults } from "@/app/components/search/SearchResults";
import { SkeletonCard } from "@/app/components/ui/SkeletonCard";

export const metadata: Metadata = {
  title: "Search",
  description: "Find Vercel Daily stories by topic and category.",
  openGraph: {
    title: "Search | Vercel Daily",
    description: "Find Vercel Daily stories by topic and category.",
  },
};

type SearchPageProps = {
  searchParams: Promise<{
    category?: string;
    query?: string;
  }>;
};

function SearchFormFallback() {
  return (
    <div
      aria-label="Loading search form"
      className="flex min-h-24 animate-pulse flex-col gap-3 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm md:flex-row"
    >
      <div className="min-h-12 flex-1 rounded-full bg-[rgba(17,17,17,0.06)]" />
      <div className="min-h-12 w-full rounded-full bg-[rgba(17,17,17,0.06)] md:w-52" />
      <div className="min-h-12 w-full rounded-full bg-[rgba(17,17,17,0.06)] md:w-32" />
    </div>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { category, query } = await searchParams;

  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Search the archive
        </p>
        <h1 className="text-4xl font-semibold">Discover the next story worth reading</h1>
      </header>
      <Suspense fallback={<SearchFormFallback />}>
        <SearchForm initialCategory={category} initialQuery={query} />
      </Suspense>
      <Suspense
        key={`${category ?? "all"}:${query ?? ""}`}
        fallback={<SkeletonCard label="Loading search results" />}
      >
        <SearchResults category={category} query={query} />
      </Suspense>
    </section>
  );
}
