import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { getSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Visit Us",
  description: "Find YOKII Yogurt House in Bangkok — address, phone and directions.",
};

export default async function VisitUsPage() {
  const s = await getSettings();
  return (
    <>
      <PageHero eyebrow="Visit us" title="Come say hi." />
      <section className="container-x grid items-center gap-12 py-16 md:grid-cols-2">
        <div className="relative aspect-[7/5] overflow-hidden rounded-[2.5rem] bg-sky shadow-card">
          <Image src="/images/shop.webp" alt="The YOKII Yogurt House shop front" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="h-display text-2xl md:text-3xl">YOKII Yogurt House</h2>
          <address className="mt-5 space-y-1 text-lg not-italic text-ink/85">
            {s.address.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </address>
          <p className="mt-4 text-lg">
            Tel{" "}
            <a href={s.phoneHref} className="font-bold text-yokii-deep hover:underline">
              {s.phone}
            </a>
          </p>
          {s.hours && <p className="mt-2 text-muted">{s.hours}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={s.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get directions <span aria-hidden>→</span>
            </a>
            <a href={s.phoneHref} className="btn btn-outline">
              Call us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
