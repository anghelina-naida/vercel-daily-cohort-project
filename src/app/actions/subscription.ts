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

  if (!token) {
    const createdSubscription = await createSubscription();
    token = createdSubscription.token;
  }

  await activateSubscription(token);
  await setSubscriptionTokenCookie(token);

  revalidatePath("/");
  revalidatePath("/search");

  return { success: true };
}

export async function unsubscribeAction() {
  const token = await getSubscriptionTokenFromCookie();

  if (token) {
    await deactivateSubscription(token);
  }

  await clearSubscriptionTokenCookie();

  revalidatePath("/");
  revalidatePath("/search");

  return { success: true };
}
