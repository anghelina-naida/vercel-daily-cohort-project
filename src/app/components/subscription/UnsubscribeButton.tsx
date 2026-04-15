import { unsubscribeAction } from "@/app/actions/subscription";

export function UnsubscribeButton() {
  return (
    <form action={unsubscribeAction}>
      <button
        className="rounded-xl bg-[var(--foreground)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] transition-opacity hover:opacity-85"
        type="submit"
      >
        Subscribed
      </button>
    </form>
  );
}
