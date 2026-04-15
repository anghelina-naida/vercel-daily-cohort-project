import { getCategories } from "@/lib/dal/articles";

import { CategorySelect } from "./CategorySelect";

type SearchFormProps = {
  initialCategory?: string;
  initialQuery?: string;
};

export async function SearchForm({ initialCategory, initialQuery }: SearchFormProps) {
  const categories = await getCategories();

  return (
    <form action="/search" className="flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm md:flex-row">
      <input
        className="min-w-0 flex-1 rounded-full border border-[var(--border)] bg-white px-4 py-3"
        defaultValue={initialQuery}
        minLength={0}
        name="query"
        placeholder="Search stories, topics, and tags"
        type="search"
      />
      <CategorySelect categories={categories} defaultValue={initialCategory} />
      <button
        className="rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-[var(--accent-foreground)]"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
