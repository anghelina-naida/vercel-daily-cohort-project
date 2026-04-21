import { cache } from "react";

import { headers } from "next/headers";

import { fetchSubscriptionStatus } from "@/lib/api/subscription";

import { getSubscriptionTokenFromCookie } from "../subscription";

export const getSubscriptionStatus = cache(async () => {
  const token = await getSubscriptionTokenFromCookie();

  if (!token) {
    return null;
  }

  try {
    return await fetchSubscriptionStatus(token);
  } catch {
    return null;
  }
});

export async function canViewFullArticle() {
  const requestHeaders = await headers();
  const accessMode = requestHeaders.get("x-vercel-daily-access");

  if (accessMode === "paywalled") {
    return false;
  }

  const subscription = await getSubscriptionStatus();
  return subscription?.status === "active";
}
