import type { ApiEnvelope, ApiError } from "@/lib/types";

const API_BASE_URL = process.env.NEWS_API_BASE_URL ?? "https://vercel-daily-news-api.vercel.app/api";

function getBypassToken() {
  const token = process.env.NEWS_API_BYPASS_TOKEN;

  if (!token) {
    throw new Error("Missing NEWS_API_BYPASS_TOKEN");
  }

  return token;
}

export async function apiRequest(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);

  headers.set("x-vercel-protection-bypass", getBypassToken());

  if (!headers.has("Content-Type") && init.method && init.method !== "GET" && init.method !== "HEAD") {
    headers.set("Content-Type", "application/json");
  }

  return fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers,
  });
}

export async function apiJson<T>(path: string, init: RequestInit = {}) {
  const response = await apiRequest(path, init);
  const payload = (await response.json()) as ApiEnvelope<T>;

  if (!response.ok || !payload.success) {
    const error = payload.error as ApiError | undefined;
    throw new Error(error?.message ?? `Request failed with status ${response.status}`);
  }

  return payload.data;
}
