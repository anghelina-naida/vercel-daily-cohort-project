import { Suspense } from "react";

import type { Metadata } from "next";

import { BreakingNewsBanner } from "@/app/components/home/BreakingNewsBanner";
import { FeaturedArticles } from "@/app/components/home/FeaturedArticles";
import { Hero } from "@/app/components/home/Hero";
import { SkeletonCard } from "@/app/components/ui/SkeletonCard";

export const metadata: Metadata = {
  title: "Vercel Daily",
  description: "Featured stories, breaking news, and editor picks from Vercel Daily.",
  openGraph: {
    title: "Vercel Daily",
    description: "Featured stories, breaking news, and editor picks from Vercel Daily.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonCard label="Loading breaking news" />}>
        <BreakingNewsBanner />
      </Suspense>
      <Suspense fallback={<SkeletonCard label="Loading featured stories" />}>
        <FeaturedArticles />
      </Suspense>
    </>
  );
}
