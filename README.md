# Vercel Daily

Vercel Daily is a Next.js news app built for browsing articles from the Vercel Daily News API. It includes a homepage with breaking news and featured stories, a searchable archive, article detail pages, and an anonymous subscription flow with paywalled content.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file with:

```bash
NEWS_API_BASE_URL=
NEWS_API_BYPASS_TOKEN=
NEXT_PUBLIC_SITE_URL=
```

`NEWS_API_BYPASS_TOKEN` is required because the API is protected by Vercel Deployment Protection.

## Project Structure

The app uses the Next.js App Router under `src/app`.

- `src/app/(site)` contains the main public routes.
- `src/app/actions` contains Server Actions for subscription mutations.
- `src/app/components` contains reusable UI sections and controls.
- `src/lib/api` contains low-level API clients for the Vercel Daily News API.
- `src/lib/dal` contains app-level data helpers used by pages and components.
- `src/lib/subscription.ts` contains cookie helpers for the anonymous subscription token.

## Main Features

- Responsive homepage with breaking news, featured articles, and trending stories.
- Search page with query, category filtering, pagination, URL-persisted state, and debounced auto-search.
- Article detail pages with typed content block rendering.
- Anonymous subscription using an HTTP-only cookie.
- Paywall UI for non-subscribed users.
- Root and page-specific metadata, including Open Graph metadata.

## Useful Commands

```bash
pnpm lint
pnpm build
pnpm dev
```
