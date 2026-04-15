import type { Article } from "@/lib/types";

type TeaserContentProps = {
  article: Article;
};

export function TeaserContent({ article }: TeaserContentProps) {
  const firstParagraph = article.content.find((block) => block.type === "paragraph");

  return (
    <section className="grid gap-5 text-lg leading-8">
      <p>{article.excerpt}</p>
      {firstParagraph?.type === "paragraph" ? <p>{firstParagraph.text}</p> : null}
    </section>
  );
}
