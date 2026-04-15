import type { ApiEnvelope, Subscription } from "@/lib/types";

import { apiJson, apiRequest } from "./client";

export async function createSubscription() {
  const response = await apiRequest("/subscription/create", {
    method: "POST",
  });
  const payload = (await response.json()) as ApiEnvelope<Subscription>;
  const token = response.headers.get("x-subscription-token");

  if (!response.ok || !payload.success || !token) {
    throw new Error(payload.error?.message ?? "Unable to create a subscription token.");
  }

  return {
    subscription: payload.data,
    token,
  };
}

export async function activateSubscription(token: string) {
  return apiJson<Subscription>("/subscription", {
    headers: {
      "x-subscription-token": token,
    },
    method: "POST",
  });
}

export async function fetchSubscriptionStatus(token: string) {
  return apiJson<Subscription>("/subscription", {
    headers: {
      "x-subscription-token": token,
    },
    method: "GET",
  });
}

export async function deactivateSubscription(token: string) {
  return apiJson<Subscription>("/subscription", {
    headers: {
      "x-subscription-token": token,
    },
    method: "DELETE",
  });
}
