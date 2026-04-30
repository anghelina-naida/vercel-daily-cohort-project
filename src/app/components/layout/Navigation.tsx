import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search", prefetch: true },
];

export function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-8 text-[1.05rem] font-medium text-[var(--muted)]">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="transition-colors hover:text-[var(--foreground)]" href={link.href} prefetch={!!link.prefetch}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
