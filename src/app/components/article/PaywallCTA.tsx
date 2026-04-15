import { SubscribeButton } from "../subscription/SubscribeButton";

export function PaywallCTA() {
  return (
    <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Subscriber access</p>
      <h2 className="mt-3 text-3xl font-semibold">Unlock the full article</h2>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        This story continues with the full reported context, examples, and supporting details.
        Subscribe to keep reading.
      </p>
      <div className="mt-6">
        <SubscribeButton />
      </div>
    </section>
  );
}
