import { subscribeAction } from "@/app/actions/subscription";

export function SubscribeButton() {
  return (
    <form action={subscribeAction}>
      <button
        className="rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
}
