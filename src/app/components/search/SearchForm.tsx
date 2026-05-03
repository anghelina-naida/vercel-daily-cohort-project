import { getCategories } from "@/lib/dal/articles";

import { CategorySelect } from "./CategorySelect";
import { SearchFormControls } from "./SearchFormControls";

export async function SearchForm({
  initialCategory,
  initialQuery,
}: {
  initialCategory?: string;
  initialQuery?: string;
}) {
  const categories = await getCategories().catch(() => []);

  return (
    <SearchFormControls
      key={`${initialCategory ?? ""}:${initialQuery ?? ""}`}
      categorySelect={<CategorySelect categories={categories} defaultValue={initialCategory} />}
      initialQuery={initialQuery}
    />
  );
}
