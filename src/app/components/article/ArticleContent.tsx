import Image from "next/image";

import type { ContentBlock } from "@/lib/types";

import { InlineMarkdownText } from "../ui/InlineMarkdownText";

type ArticleContentProps = {
  blocks: ContentBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div
      className="mx-auto grid w-full max-w-[42rem] gap-6 text-[1.2rem] leading-[1.9] tracking-[0.002em] text-[var(--article-ink)] sm:text-[1.28rem]"
      style={{ fontFamily: "var(--article-serif)" }}
    >
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index}>
                <InlineMarkdownText text={block.text} />
              </p>
            );
          case "heading":
            return block.level === 2 ? (
              <h2
                key={index}
                className="mt-6 max-w-[24rem] text-[2rem] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--foreground)]"
                style={{ fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
              >
                {block.text}
              </h2>
            ) : (
              <h3
                key={index}
                className="mt-4 max-w-[24rem] text-[1.6rem] font-semibold leading-[1.25] tracking-[-0.02em] text-[var(--foreground)]"
                style={{ fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
              >
                {block.text}
              </h3>
            );
          case "blockquote":
            return (
              <blockquote
                key={index}
                className="mx-2 border-l border-[rgba(15,15,16,0.14)] pl-6 text-[1.5rem] leading-[1.6] text-[var(--article-muted)]"
              >
                <InlineMarkdownText text={block.text} />
              </blockquote>
            );
          case "unordered-list":
            return (
              <ul key={index} className="list-disc space-y-3 pl-6 marker:text-[var(--article-muted)]">
                {block.items.map((item) => (
                  <li key={item}>
                    <InlineMarkdownText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ordered-list":
            return (
              <ol key={index} className="list-decimal space-y-3 pl-6 marker:text-[var(--article-muted)]">
                {block.items.map((item) => (
                  <li key={item}>
                    <InlineMarkdownText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "image":
            if (!block.src) {
              return null;
            }

            return (
              <figure key={index} className="mx-auto mt-4 w-full max-w-[50rem] space-y-3">
                <Image
                  alt={block.alt || "Article illustration"}
                  className="h-auto w-full rounded-3xl"
                  height={900}
                  sizes="(min-width: 1280px) 64rem, 100vw"
                  src={block.src}
                  width={1600}
                />
                {block.caption ? (
                  <figcaption
                    className="mx-auto max-w-[36rem] text-center text-sm leading-6 text-[var(--article-muted)]"
                    style={{ fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
                  >
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
