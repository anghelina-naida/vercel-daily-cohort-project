import { fetchSubscriptionStatus } from "@/lib/api/subscription";

import { getSubscriptionTokenFromCookie } from "../subscription";

export async function getSubscriptionStatus() {
  const token = await getSubscriptionTokenFromCookie();

  if (!token) {
    return null;
  }

  try {
    return await fetchSubscriptionStatus(token);
  } catch {
    return null;
  }
}

export async function canViewFullArticle() {
  const subscription = await getSubscriptionStatus();
  return subscription?.status === "active";
}
