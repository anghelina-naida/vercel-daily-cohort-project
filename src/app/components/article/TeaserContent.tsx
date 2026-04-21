import type { Article } from "@/lib/types";

import { InlineMarkdownText } from "../ui/InlineMarkdownText";

type TeaserContentProps = {
  article: Article;
};

export function TeaserContent({ article }: TeaserContentProps) {
  const firstParagraph = article.content.find((block) => block.type === "paragraph");

  return (
    <section
      className="mx-auto grid w-full max-w-[42rem] gap-6 text-[1.2rem] leading-[1.85] tracking-[0.002em] text-[var(--article-ink)] sm:text-[1.28rem]"
      style={{ fontFamily: "var(--article-serif)" }}
    >
      <p>
        <InlineMarkdownText text={article.excerpt} />
      </p>
      {firstParagraph?.type === "paragraph" ? (
        <p>
          <InlineMarkdownText text={firstParagraph.text} />
        </p>
      ) : null}
    </section>
  );
}
