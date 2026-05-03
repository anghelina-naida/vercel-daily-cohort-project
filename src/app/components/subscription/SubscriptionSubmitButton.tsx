"use client";

import { useFormStatus } from "react-dom";

export function SubscriptionSubmitButton({
  className,
  label,
  pendingLabel,
}: {
  className: string;
  label: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      aria-live="polite"
      className={`${className} inline-flex min-w-32 items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-70`}
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <span
          aria-hidden="true"
          className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      ) : null}
      <span>{pending ? pendingLabel : label}</span>
    </button>
  );
}
