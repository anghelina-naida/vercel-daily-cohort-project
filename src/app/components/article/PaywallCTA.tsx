import { SubscribeButton } from "../subscription/SubscribeButton";

export function PaywallCTA() {
  return (
    <section className="mx-auto w-full max-w-[42rem] border-y border-[rgba(15,15,16,0.08)] py-10">
      <p className="text-xs font-medium uppercase tracking-[0.26em] text-[var(--muted)]">Subscriber access</p>
      <h2 className="mt-4 max-w-[18ch] text-3xl font-semibold leading-tight tracking-[-0.03em]">
        Unlock the rest of the story
      </h2>
      <p className="mt-4 max-w-[34rem] text-[1.05rem] leading-7 text-[var(--article-muted)]">
        This story continues with the full reported context, examples, and supporting details.
        Subscribe to keep reading.
      </p>
      <div className="mt-6">
        <SubscribeButton />
      </div>
    </section>
  );
}
