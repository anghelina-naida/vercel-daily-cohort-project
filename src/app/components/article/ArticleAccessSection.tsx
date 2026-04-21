import type { ContentBlock } from "@/lib/types";
import { canViewFullArticle } from "@/lib/dal/subscription";

import { ArticleContent } from "./ArticleContent";
import { PaywallCTA } from "./PaywallCTA";

type ArticleAccessSectionProps = {
  continuationBlocks: ContentBlock[];
};

export async function ArticleAccessSection({ continuationBlocks }: ArticleAccessSectionProps) {
  const isSubscribed = await canViewFullArticle();

  if (isSubscribed) {
    return continuationBlocks.length > 0 ? <ArticleContent blocks={continuationBlocks} /> : null;
  }

  return <PaywallCTA />;
}
