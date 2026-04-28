import { getCategories } from "@/lib/dal/articles";

import { CategorySelect } from "./CategorySelect";
import { SearchFormControls } from "./SearchFormControls";

type SearchFormProps = {
  initialCategory?: string;
  initialQuery?: string;
};

export async function SearchForm({ initialCategory, initialQuery }: SearchFormProps) {
  const categories = await getCategories().catch(() => []);

  return (
    <SearchFormControls
      key={`${initialCategory ?? ""}:${initialQuery ?? ""}`}
      categorySelect={<CategorySelect categories={categories} defaultValue={initialCategory} />}
      initialQuery={initialQuery}
    />
  );
}
