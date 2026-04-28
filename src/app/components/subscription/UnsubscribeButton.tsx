import { unsubscribeAction } from "@/app/actions/subscription";

import { SubscriptionSubmitButton } from "./SubscriptionSubmitButton";

export function UnsubscribeButton() {
  return (
    <form action={unsubscribeAction}>
      <SubscriptionSubmitButton
        className="rounded-xl bg-[var(--foreground)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] transition-opacity hover:opacity-85"
        label="Unsubscribe"
        pendingLabel="Unsubscribing..."
      />
    </form>
  );
}
