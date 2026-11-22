import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { getMenu } from "@/lib/api";

export const metadata: Metadata = {
  title: "Menu",
  description: "Yogurt smoothies from 59.- — Signature cups, toppings and Greek yogurt bowls.",
};

// Thai has no spaces, so browsers guess where to wrap and often split mid-word. Names in data.ts
// carry a zero-width space (U+200B) at the word boundaries we want; each segment never breaks inside.
function ThaiName({ text }: { text: string }) {
  const parts = text.split("​");
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          <span className="whitespace-nowrap">{p}</span>
          {i < parts.length - 1 && <wbr />}
        </Fragment>
      ))}
    </>
  );
}

export default async function MenuPage() {
  const categories = await getMenu();

  return (
    <>
      <PageHero eyebrow="Our menu" title="Pick your good mood.">
        Every cup is freshly blended with 100% real yogurt and real fruit. Prices in Thai baht (฿).
      </PageHero>

      <div className="container-x space-y-16 py-16">
        {categories.map((cat) => {
          const withImages = cat.items.filter((i) => i.image);
          return (
            <section key={cat.slug} id={cat.slug} aria-labelledby={`h-${cat.slug}`}>
              <h2 id={`h-${cat.slug}`} className="h-display text-2xl md:text-3xl">
                {cat.title}
              </h2>
              {cat.tagline && <p className="mt-1 text-muted">{cat.tagline}</p>}

              {withImages.length > 0 && (
                <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {withImages.map((item) => (
                    <li key={item.name} className="flex items-center gap-6 rounded-[2rem] bg-gradient-to-b from-[#acdefc] to-[#d9eefd] p-5">
                      <div className="relative h-56 w-40 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm">
                        <Image src={item.image!} alt={item.name.replace(/​/g, "")} fill sizes="320px" quality={90} className="object-contain p-1" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-snug text-navy [text-wrap:balance]">
                          <ThaiName text={item.name} />
                        </h3>
                        {item.nameEn && <p className="text-sm text-muted">{item.nameEn}</p>}
                        {item.note && <p className="mt-1 text-sm text-muted">{item.note}</p>}
                        <p className="mt-2 inline-block rounded-full bg-yokii px-4 py-1 font-bold text-white">{item.price}.-</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {withImages.length < cat.items.length && (
                <ul className="mt-8 grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items
                    .filter((i) => !i.image)
                    .map((item) => (
                      <li key={item.name} className="flex items-baseline gap-3 border-b border-sky py-3">
                        <span className="font-medium text-ink">
                          <ThaiName text={item.name} />
                          {item.nameEn && <span className="ml-2 text-sm font-normal text-muted">{item.nameEn}</span>}
                        </span>
                        <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-yokii/40" />
                        <span className="font-bold text-yokii-deep">{item.price}.-</span>
                      </li>
                    ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
