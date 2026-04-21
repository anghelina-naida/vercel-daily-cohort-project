import { cookies } from "next/headers";

import { SUBSCRIPTION_COOKIE_NAME } from "./utils";

const baseCookieOptions = {
  httpOnly: true,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
};

export async function getSubscriptionTokenFromCookie() {
  const cookieStore = await cookies();
  return cookieStore.get(SUBSCRIPTION_COOKIE_NAME)?.value;
}

export async function hasSubscriptionTokenCookie() {
  const token = await getSubscriptionTokenFromCookie();
  return Boolean(token);
}

export async function setSubscriptionTokenCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SUBSCRIPTION_COOKIE_NAME, token, baseCookieOptions);
}

export async function clearSubscriptionTokenCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SUBSCRIPTION_COOKIE_NAME);
}
