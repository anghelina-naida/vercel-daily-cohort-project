"use server";

import { revalidatePath } from "next/cache";

import {
  activateSubscription,
  createSubscription,
  deactivateSubscription,
} from "@/lib/api/subscription";
import {
  clearSubscriptionTokenCookie,
  getSubscriptionTokenFromCookie,
  setSubscriptionTokenCookie,
} from "@/lib/subscription";

export async function subscribeAction() {
  let token = await getSubscriptionTokenFromCookie();

  if (token) {
    try {
      await activateSubscription(token);
      await setSubscriptionTokenCookie(token);

      revalidatePath("/");
      revalidatePath("/search");

      return;
    } catch {
      await clearSubscriptionTokenCookie();
      token = undefined;
    }
  }

  const createdSubscription = await createSubscription();
  token = createdSubscription.token;

  await activateSubscription(token);
  await setSubscriptionTokenCookie(token);

  revalidatePath("/");
  revalidatePath("/search");
}

export async function unsubscribeAction() {
  const token = await getSubscriptionTokenFromCookie();

  if (token) {
    try {
      await deactivateSubscription(token);
    } catch {
      // If the token is already stale, clearing the cookie is still enough
      // to complete the local unsubscribe flow.
    }
  }

  await clearSubscriptionTokenCookie();

  revalidatePath("/");
  revalidatePath("/search");
}
