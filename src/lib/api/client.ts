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
  const contentType = response.headers.get("content-type") ?? "";
  const rawBody = await response.text();
  let payload: ApiEnvelope<T> | null = null;

  if (rawBody) {
    try {
      payload = JSON.parse(rawBody) as ApiEnvelope<T>;
    } catch {
      if (contentType.includes("text/html") || rawBody.startsWith("<!doctype html")) {
        throw new Error(
          `Received an HTML response from the news API for ${path}. Check NEWS_API_BYPASS_TOKEN and API protection settings.`,
        );
      }

      throw new Error(`Received a non-JSON response from the news API for ${path}.`);
    }
  }

  if (!payload) {
    throw new Error(`The news API returned an empty response for ${path}.`);
  }

  if (!response.ok || !payload.success) {
    const error = payload.error as ApiError | undefined;
    throw new Error(error?.message ?? `Request failed with status ${response.status}`);
  }

  return payload.data;
}
