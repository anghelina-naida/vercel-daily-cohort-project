export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-3 px-6 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <p className="font-medium text-[var(--foreground)]">Vercel Daily</p>
        {/* layout is being treated as something that can be prerendered/cached, and new Date() is considered request-time dynamic data.*/}
        <p>{ "2026 Vercel Daily. All rights reserved." }</p>
      </div>
    </footer>
  );
}
