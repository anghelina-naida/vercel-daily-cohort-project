import Link from "next/link";

const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

export function InlineMarkdownText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(markdownLinkPattern)) {
    const [fullMatch, label, href] = match;
    const matchIndex = match.index ?? 0;

    if (matchIndex > lastIndex) {
      parts.push(text.slice(lastIndex, matchIndex));
    }

    parts.push(
      <Link
        key={`${href}-${matchIndex}`}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-[#0f5cc0] underline decoration-[#0f5cc0]/35 underline-offset-[0.18em] transition-colors hover:text-[#084899]"
      >
        {label}
      </Link>,
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex === 0) {
    return text;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
