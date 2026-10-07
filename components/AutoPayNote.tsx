import { autoPayNote } from "@/data/plans";

/** "Prices include the $5/mo AutoPay credit." Shown once near each plan list. */
export function AutoPayNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm font-medium ${className}`}>
      {autoPayNote}{" "}
      <a href="#offer-conditions" className="underline underline-offset-4">
        See offer details
      </a>
    </p>
  );
}
