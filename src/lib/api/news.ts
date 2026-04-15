import type { Article, Category, BreakingNews, SearchArticlesInput } from "@/lib/types";

import { apiJson } from "./client";

export async function fetchArticles(input: SearchArticlesInput = {}) {
  const searchParams = new URLSearchParams();

  if (input.page) {
    searchParams.set("page", String(input.page));
  }

  if (input.limit) {
    searchParams.set("limit", String(input.limit));
  }

  if (input.category) {
    searchParams.set("category", input.category);
  }

  if (input.query) {
    searchParams.set("search", input.query);
  }

  const query = searchParams.toString();

  return apiJson<Article[]>(`/articles${query ? `?${query}` : ""}`);
}

export async function fetchFeaturedArticles(limit = 6) {
  const searchParams = new URLSearchParams({
    featured: "true",
    limit: String(limit),
  });

  return apiJson<Article[]>(`/articles?${searchParams.toString()}`);
}

export async function fetchArticle(identifier: string) {
  return apiJson<Article>(`/articles/${identifier}`);
}

export async function fetchTrendingArticles(excludeIds: string[] = []) {
  const searchParams = new URLSearchParams();

  if (excludeIds.length > 0) {
    searchParams.set("exclude", excludeIds.join(","));
  }

  const query = searchParams.toString();

  return apiJson<Article[]>(`/articles/trending${query ? `?${query}` : ""}`);
}

export async function fetchBreakingNews() {
  return apiJson<BreakingNews>("/breaking-news");
}

export async function fetchCategories() {
  return apiJson<Category[]>("/categories");
}
