import { Suspense } from "react";

import Link from "next/link";

import { Navigation } from "./Navigation";
import { SubscriptionIndicator } from "./SubscriptionIndicator";

function NavigationFallback() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-8 text-[1.05rem] font-medium text-[var(--muted)]">
        <li>
          <Link className="border-b-2 border-transparent pb-1 transition-colors hover:text-[var(--foreground)]" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="border-b-2 border-transparent pb-1 transition-colors hover:text-[var(--foreground)]"
            href="/search"
          >
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-white">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-6 px-6 py-6 sm:px-10 lg:px-14">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-4 text-[1.7rem] font-semibold tracking-[-0.03em]">
            <span
              aria-hidden="true"
              className="h-0 w-0 border-x-[14px] border-b-[24px] border-x-transparent border-b-[var(--foreground)]"
            />
            <span>Vercel Daily</span>
          </Link>
          <Suspense fallback={<NavigationFallback />}>
            <Navigation />
          </Suspense>
        </div>

        <div className="flex items-center">
          <Suspense fallback={<div className="h-10 w-28 rounded-xl border border-[var(--border)] bg-white" />}>
            <SubscriptionIndicator />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
