import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { franchisePackage } from "@/lib/data";
import { getSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Franchise",
  description: "Bring good mood in every cup to your community — YOKII franchise and kiosk opportunities.",
};

export default async function FranchisePage() {
  const s = await getSettings();
  return (
    <>
      <PageHero eyebrow="Franchise opportunities" title="Bring good mood in every cup to your community." />

      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
        <div className="relative aspect-[1/0.93] overflow-hidden rounded-[2rem] bg-white shadow-card">
          <Image src="/images/franchise.webp" alt="Render of a YOKII kiosk shop" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-contain" />
        </div>
        <div className="rounded-[2.5rem] bg-yokii p-8 text-white sm:p-10">
          <h2 className="text-2xl font-bold">Franchise package includes:</h2>
          <ul className="mt-5 space-y-2.5 text-lg font-medium">
            {franchisePackage.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden>•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Let&apos;s talk</p>
            <h2 className="h-display mt-2 text-2xl md:text-3xl">Interested in opening a YOKII?</h2>
            <p className="mt-4 max-w-md text-lg text-muted">
              Tell us a little about yourself and where you&apos;d like to open. Our team will contact you with next
              steps.
            </p>
          </div>
          <InquiryForm type="franchise" email={s.email} phone={s.phone} withLocation messageLabel="Tell us about your plans" />
        </div>
      </section>
    </>
  );
}
