import type { ContentBlock } from "@/lib/types";

type ArticleContentProps = {
  blocks: ContentBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="grid gap-5 text-lg leading-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.text}</p>;
          case "heading":
            return block.level === 2 ? (
              <h2 key={index} className="text-3xl font-semibold">
                {block.text}
              </h2>
            ) : (
              <h3 key={index} className="text-2xl font-semibold">
                {block.text}
              </h3>
            );
          case "blockquote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-[var(--accent)] pl-5 text-xl italic text-[var(--muted)]"
              >
                {block.text}
              </blockquote>
            );
          case "unordered-list":
            return (
              <ul key={index} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ordered-list":
            return (
              <ol key={index} className="list-decimal space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "image":
            return (
              <figure key={index} className="space-y-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={block.alt} className="rounded-3xl" src={block.src} />
                {block.caption ? (
                  <figcaption className="text-sm text-[var(--muted)]">{block.caption}</figcaption>
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
