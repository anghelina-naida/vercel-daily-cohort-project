import { subscribeAction } from "@/app/actions/subscription";

import { SubscriptionSubmitButton } from "./SubscriptionSubmitButton";

export function SubscribeButton() {
  return (
    <form action={subscribeAction}>
      <SubscriptionSubmitButton
        className="rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
        label="Subscribe"
        pendingLabel="Subscribing..."
      />
    </form>
  );
}
