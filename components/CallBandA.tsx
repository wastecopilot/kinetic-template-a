import { AddressCheckForm } from "@/components/AddressCheckForm";
import { PhoneLink } from "@/components/PhoneLink";
import { site } from "@/data/site";

/** Phone CTA + address check shown on every Template A page. */
export function CallBandA() {
  return (
    <section aria-labelledby="call-band-a" className="bg-purple text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 id="call-band-a" className="text-4xl sm:text-5xl">
            get help choosing a plan
          </h2>
          <p className="mt-3 text-lg">
            Talk to a Kinetic sales specialist on our team. We&apos;ll check your address, compare speeds and place
            your order with Kinetic.
          </p>
          <PhoneLink className="mt-6 min-h-12 rounded-lg bg-white px-6 text-xl font-black text-navy hover:bg-yellow-light" />
          <p className="mt-3 text-sm">{site.salesHours}</p>
        </div>
        <div className="rounded-2xl bg-navy p-5 sm:p-6">
          <AddressCheckForm tone="dark" buttonLabel="Check availability" />
        </div>
      </div>
    </section>
  );
}
