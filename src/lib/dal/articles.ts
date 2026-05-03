import { cacheLife, cacheTag } from "next/cache";

import {
  fetchArticle,
  fetchArticles,
  fetchBreakingNews,
  fetchCategories,
  fetchFeaturedArticles,
  fetchTrendingArticles,
} from "@/lib/api/news";
import type { SearchArticlesInput } from "@/lib/types";

export async function getFeaturedArticles() {
  "use cache";

  cacheTag("articles");
  cacheTag("featured-articles");
  cacheLife({ expire: 900 });

  return fetchFeaturedArticles(6);
}

export async function getArticleByIdentifier(identifier: string) {
  "use cache";

  cacheTag("articles");
  cacheTag(`article-${identifier}`);
  cacheLife({ expire: 900 });

  return fetchArticle(identifier);
}

export async function getTrendingArticles(excludeIds: string[] = []) {
  "use cache";

  cacheTag("articles");
  cacheTag("trending-articles");
  cacheLife({ expire: 60 });

  return fetchTrendingArticles(excludeIds);
}

export async function getBreakingNews() {
  "use cache: remote";

  cacheTag("breaking-news");
  cacheLife("minutes");

  return fetchBreakingNews();
}

export async function searchArticles(input: SearchArticlesInput = {}) {
  "use cache";

  cacheTag("articles");
  cacheTag("search-results");
  cacheLife({ expire: 300 });

  return fetchArticles({
    category: input.category,
    limit: input.limit ?? 5,
    page: input.page ?? 1,
    query: input.query,
  });
}

export async function getCategories() {
  "use cache";

  cacheTag("categories");
  cacheLife({ expire: 3600 });

  return fetchCategories();
}
