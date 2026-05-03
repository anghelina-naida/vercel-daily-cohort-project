"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import nyanCatGif from "nyan-cat-festival/assets/nyancat.gif";
import { type FormEvent, type ReactNode, useCallback, useEffect, useRef, useState, useTransition } from "react";

const AUTO_SEARCH_DEBOUNCE_MS = 900;

export function SearchFormControls({
  categorySelect,
  initialQuery,
}: {
  categorySelect: ReactNode;
  initialQuery?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery ?? "");
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const trimmedQuery = query.trim();
  const isSearchQueued =
    trimmedQuery !== (initialQuery ?? "") && (trimmedQuery.length === 0 || trimmedQuery.length >= 3);
  const isSearching = isPending || targetUrl !== null || isSearchQueued;

  const submitSearch = useCallback(
    (form: HTMLFormElement, mode: "push" | "replace" = "push") => {
      const formData = new FormData(form);
      const nextQuery = formData.get("query")?.toString().trim();
      const nextCategory = formData.get("category")?.toString();
      const params = new URLSearchParams();

      if (nextQuery) {
        params.set("query", nextQuery);
      }

      if (nextCategory) {
        params.set("category", nextCategory);
      }

      const nextSearch = params.toString();
      const nextUrl = nextSearch ? `${pathname}?${nextSearch}` : pathname;
      const currentSearch = searchParams.toString();
      const currentUrl = currentSearch ? `${pathname}?${currentSearch}` : pathname;

      if (nextUrl === currentUrl) {
        setTargetUrl(null);
        return;
      }

      setTargetUrl(nextUrl);
      startTransition(() => {
        if (mode === "replace") {
          router.replace(nextUrl);
          return;
        }

        router.push(nextUrl);
      });
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    if (trimmedQuery.length > 0 && trimmedQuery.length < 3) {
      return;
    }

    if (trimmedQuery === (initialQuery ?? "")) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const form = formRef.current;

      if (form) {
        submitSearch(form, "replace");
      }
    }, AUTO_SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(timeout);
  }, [initialQuery, submitSearch, trimmedQuery]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitSearch(event.currentTarget);
  }

  return (
    <form
      action="/search"
      className="flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm md:flex-row md:flex-wrap"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input
        aria-label="Search stories"
        autoComplete="off"
        className="min-w-0 flex-1 rounded-full border border-[var(--border)] bg-white px-4 py-3"
        minLength={0}
        name="query"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search stories, topics, and tags"
        type="search"
        value={query}
      />
      {categorySelect}
      <button
        className="rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-[var(--accent-foreground)]"
        type="submit"
      >
        {isSearching ? "Searching" : "Search"}
      </button>
      {isSearching ? <NyanProgressBar /> : null}
    </form>
  );
}

function NyanProgressBar() {
  return (
    <div
      aria-label="Searching stories"
      aria-live="polite"
      className="nyan-progress md:basis-full"
      role="status"
    >
      <span className="nyan-progress-track" aria-hidden="true">
        <span className="nyan-rainbow" />
        <Image alt="" className="nyan-cat" height={400} src={nyanCatGif} unoptimized width={400} />
      </span>
    </div>
  );
}
