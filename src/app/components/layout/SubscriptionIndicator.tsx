import { getSubscriptionStatus } from "@/lib/dal/subscription";

import { SubscribeButton } from "../subscription/SubscribeButton";
import { UnsubscribeButton } from "../subscription/UnsubscribeButton";

export async function SubscriptionIndicator() {
  const subscription = await getSubscriptionStatus();

  return subscription?.status === "active" ? <UnsubscribeButton /> : <SubscribeButton />;
}
