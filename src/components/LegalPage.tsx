import { PageHero } from "@/components/PageHero";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  updated,
  en,
  th,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  en: LegalSection[];
  th: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title}>
        Last updated: {updated}
      </PageHero>
      <div className="container-x max-w-3xl space-y-16 py-16">
        <Block lang="en" label="English" sections={en} />
        <Block lang="th" label="ภาษาไทย" sections={th} />
      </div>
    </>
  );
}

function Block({ lang, label, sections }: { lang: string; label: string; sections: LegalSection[] }) {
  return (
    <section lang={lang} className="space-y-8">
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-yokii-deep">{label}</h2>
      {sections.map((s, i) => (
        <div key={s.heading}>
          <h3 className="text-xl font-bold text-navy">
            {i + 1}. {s.heading}
          </h3>
          <div className="mt-3 space-y-3 text-ink/85">
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
