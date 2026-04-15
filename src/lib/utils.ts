import type { Article } from "./types";

export const SUBSCRIPTION_COOKIE_NAME = "vercel-daily-subscription-token";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(input: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(input));
}

export function getArticleHref(article: Pick<Article, "id" | "slug">) {
  return `/articles/${article.slug || article.id}`;
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
