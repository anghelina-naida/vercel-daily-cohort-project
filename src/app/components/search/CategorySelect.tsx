import type { Category } from "@/lib/types";

type CategorySelectProps = {
  categories: Category[];
  defaultValue?: string;
};

export function CategorySelect({ categories, defaultValue }: CategorySelectProps) {
  return (
    <select
      defaultValue={defaultValue}
      name="category"
      className="rounded-full border border-[var(--border)] bg-white px-4 py-3"
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
