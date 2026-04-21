import Link from "next/link";

import { getBreakingNews } from "@/lib/dal/articles";

export async function BreakingNewsBanner() {
  const breakingNews = await getBreakingNews().catch(() => null);

  if (!breakingNews) {
    return (
      <section className="flex flex-col gap-3 rounded-3xl border border-[#f0d7ca] bg-[#fff4ed] px-5 py-4 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a3d27]">
          Newsroom update
        </span>
        <span className="text-xl font-semibold text-[#2c1711]">Breaking news is temporarily unavailable</span>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#6d5248]">
          <span>The live banner feed is reconnecting.</span>
          <Link className="font-semibold text-[#8a3d27] underline underline-offset-4" href="/search">
            Browse the latest stories
          </Link>
        </div>
      </section>
    );
  }

  return (
    <Link
      href={`/articles/${breakingNews.articleId}`}
      className="flex flex-col gap-2 rounded-3xl border border-[#f0d7ca] bg-[#fff4ed] px-5 py-4 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#ffede2]"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a3d27]">
        Breaking news
      </span>
      <span className="text-xl font-semibold text-[#2c1711]">{breakingNews.headline}</span>
      <span className="max-w-4xl text-sm leading-6 text-[#6d5248]">{breakingNews.summary}</span>
    </Link>
  );
}
