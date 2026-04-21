import { hasSubscriptionTokenCookie } from "@/lib/subscription";

import { SubscribeButton } from "../subscription/SubscribeButton";
import { UnsubscribeButton } from "../subscription/UnsubscribeButton";

export async function SubscriptionIndicator() {
  const hasSubscriptionToken = await hasSubscriptionTokenCookie();

  return hasSubscriptionToken ? <UnsubscribeButton /> : <SubscribeButton />;
}
