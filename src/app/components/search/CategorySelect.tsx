import type { Category } from "@/lib/types";

export function CategorySelect({ categories, defaultValue }: { categories: Category[]; defaultValue?: string }) {
  return (
    <select
      aria-label="Filter stories by category"
      defaultValue={defaultValue}
      name="category"
      className="w-full rounded-full border border-[var(--border)] bg-white px-4 py-3 md:w-52"
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category.slug} value={category.slug}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
