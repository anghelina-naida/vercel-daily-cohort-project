import Link from "next/link";

import type { Pagination } from "@/lib/types";

type SearchPaginationProps = {
  category?: string;
  pagination: Pagination;
  query?: string;
};

function getSearchHref({ category, page, query }: { category?: string; page: number; query?: string }) {
  const params = new URLSearchParams();

  if (query) {
    params.set("query", query);
  }

  if (category) {
    params.set("category", category);
  }

  if (page > 1) {
    params.set("page", String(page));
  }

  const search = params.toString();

  return search ? `/search?${search}` : "/search";
}

function getPageItems(currentPage: number, totalPages: number) {
  const pages = new Set([1, currentPage - 1, currentPage, currentPage + 1, totalPages]);

  return Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);
}

export function SearchPagination({ category, pagination, query }: SearchPaginationProps) {
  const firstResult = pagination.total === 0 ? 0 : (pagination.page - 1) * pagination.limit + 1;
  const lastResult = Math.min(pagination.page * pagination.limit, pagination.total);
  const pages = getPageItems(pagination.page, pagination.totalPages);

  if (pagination.totalPages <= 1) {
    return (
      <p className="text-sm text-[var(--muted)]">
        Showing {firstResult}-{lastResult} of {pagination.total} stories
      </p>
    );
  }

  return (
    <nav
      aria-label="Search results pagination"
      className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 text-sm shadow-sm sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-[var(--muted)]">
        Showing {firstResult}-{lastResult} of {pagination.total} stories
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {pagination.hasPreviousPage ? (
          <Link
            className="rounded-full border border-[var(--border)] px-4 py-2 font-semibold transition-colors hover:border-[var(--foreground)]"
            href={getSearchHref({ category, page: pagination.page - 1, query })}
          >
            Previous
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="rounded-full border border-[var(--border)] px-4 py-2 font-semibold text-[var(--muted)] opacity-60"
          >
            Previous
          </span>
        )}

        {pages.map((page, index) => {
          const previousPage = pages[index - 1];
          const showGap = previousPage && page - previousPage > 1;
          const isCurrent = page === pagination.page;

          return (
            <span className="flex items-center gap-2" key={page}>
              {showGap ? <span className="px-1 text-[var(--muted)]">...</span> : null}
              {isCurrent ? (
                <span
                  aria-current="page"
                  className="rounded-full bg-[var(--accent)] px-4 py-2 font-semibold text-[var(--accent-foreground)]"
                >
                  {page}
                </span>
              ) : (
                <Link
                  className="rounded-full border border-[var(--border)] px-4 py-2 font-semibold transition-colors hover:border-[var(--foreground)]"
                  href={getSearchHref({ category, page, query })}
                >
                  {page}
                </Link>
              )}
            </span>
          );
        })}

        {pagination.hasNextPage ? (
          <Link
            className="rounded-full border border-[var(--border)] px-4 py-2 font-semibold transition-colors hover:border-[var(--foreground)]"
            href={getSearchHref({ category, page: pagination.page + 1, query })}
          >
            Next
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="rounded-full border border-[var(--border)] px-4 py-2 font-semibold text-[var(--muted)] opacity-60"
          >
            Next
          </span>
        )}
      </div>
    </nav>
  );
}
