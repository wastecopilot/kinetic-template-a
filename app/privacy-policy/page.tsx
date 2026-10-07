import type { Metadata } from "next";
import { AgentNotice } from "@/components/AgentNotice";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName}, an Authorized Kinetic Agent, collects, uses and protects your information.`,
};

export default function TemplateAPrivacy() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <AgentNotice tone="dark" />
          <p className="mt-6 text-base font-black text-green">{site.legalName}</p>
          <h1 className="mt-2 text-5xl sm:text-6xl">privacy policy</h1>
          <p className="mt-3 text-lg">How we collect, use and protect your information, in plain language.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <PrivacyPolicyContent />
        </div>
      </section>
    </>
  );
}
