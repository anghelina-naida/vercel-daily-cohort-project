import type { Metadata } from "next";

import type { Article } from "./types";
import { getSiteUrl } from "./utils";

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  generator: "vnews-cert-v3",
  title: {
    default: "Vercel Daily",
    template: "%s | Vercel Daily",
  },
  description: "A fictional news publication built with Next.js 16 and modern server-first patterns.",
  openGraph: {
    title: "Vercel Daily",
    description: "A fictional news publication built with Next.js 16 and modern server-first patterns.",
    siteName: "Vercel Daily",
    type: "website",
  },
};

export function buildArticleMetadata(article: Article): Metadata {
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ alt: article.title, url: article.image }],
      type: "article",
    },
  };
}
