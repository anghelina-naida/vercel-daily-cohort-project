import type { ContentBlock } from "@/lib/types";
import { canViewFullArticle } from "@/lib/dal/subscription";

import { ArticleContent } from "./ArticleContent";
import { PaywallCTA } from "./PaywallCTA";

export async function ArticleAccessSection({ continuationBlocks }: { continuationBlocks: ContentBlock[] }) {
  const isSubscribed = await canViewFullArticle();

  if (isSubscribed) {
    return continuationBlocks.length > 0 ? <ArticleContent blocks={continuationBlocks} /> : null;
  }

  return <PaywallCTA />;
}
