"use client";

import { useId, useState } from "react";
import { site } from "@/data/site";

type AddressCheckFormProps = {
  /** "light": for white/light backgrounds. "dark": for navy/black/purple backgrounds. */
  tone?: "light" | "dark";
  buttonLabel?: string;
  layout?: "stacked" | "inline";
  className?: string;
};

/** Address / plan-check form. UI only, no backend yet. */
export function AddressCheckForm({
  tone = "light",
  buttonLabel = "Check availability",
  layout = "stacked",
  className = "",
}: AddressCheckFormProps) {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);
  const dark = tone === "dark";

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor={`${id}-address`} className={`mb-2 block text-sm font-medium ${dark ? "text-white" : "text-navy"}`}>
        Enter your street address to see Kinetic plans available to you
      </label>
      <div className={layout === "inline" ? "flex flex-col gap-3 sm:flex-row" : "flex flex-col gap-3"}>
        <input
          id={`${id}-address`}
          name="address"
          type="text"
          autoComplete="street-address"
          required
          placeholder="Street address, apt, city, ZIP"
          className="min-h-12 w-full flex-1 rounded-lg border-2 border-navy bg-white px-4 text-navy placeholder:text-gray-500"
        />
        <button
          type="submit"
          className={`min-h-12 rounded-lg px-6 font-bold transition-colors ${
            dark ? "bg-green text-navy hover:bg-green-light" : "bg-navy text-white hover:bg-purple"
          }`}
        >
          {buttonLabel}
        </button>
      </div>
      <p role="status" aria-live="polite" className={`mt-3 text-sm ${dark ? "text-white" : "text-navy"}`}>
        {submitted
          ? `Thanks! Online availability results are coming soon. For now, call ${site.phoneDisplay} and a Kinetic sales specialist will check your address.`
          : ""}
      </p>
    </form>
  );
}
