import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { getSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with YOKII Yogurt House.",
};

export default async function ContactPage() {
  const s = await getSettings();
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." />
      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6 text-lg">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-yokii-deep">Phone</h2>
            <a href={s.phoneHref} className="mt-1 block font-bold text-navy hover:underline">
              {s.phone}
            </a>
          </div>
          {s.email && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-yokii-deep">Email</h2>
              <a href={`mailto:${s.email}`} className="mt-1 block font-bold text-navy hover:underline">
                {s.email}
              </a>
            </div>
          )}
          {s.line && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-yokii-deep">LINE</h2>
              <p className="mt-1 font-bold text-navy">{s.line}</p>
            </div>
          )}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-yokii-deep">Address</h2>
            <address className="mt-1 not-italic text-ink/85">
              {s.address.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </address>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-yokii-deep">Social</h2>
            <ul className="mt-1 space-y-1">
              {s.social.map((x) => (
                <li key={x.label}>
                  <a href={x.href} target="_blank" rel="noopener noreferrer" className="font-medium text-navy hover:underline">
                    {x.label} · {x.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <InquiryForm type="contact" />
      </section>
    </>
  );
}
