import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { getMenu } from "@/lib/api";

export const metadata: Metadata = {
  title: "Menu",
  description: "Yogurt smoothies from 59.- — Signature, Berry Bliss, Tropical Fresh, Superfood and more.",
};

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
                <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                  {withImages.map((item) => (
                    <li key={item.name} className="flex items-center gap-6 rounded-[2rem] bg-sky p-5">
                      <div className="relative h-52 w-32 shrink-0">
                        <Image src={item.image!} alt={item.name} fill sizes="128px" className="object-contain mix-blend-multiply" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy">{item.name}</h3>
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
                        <span className="font-medium text-ink">{item.name}</span>
                        <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-yokii/40" />
                        <span className="font-bold text-yokii-deep">{item.price}.-</span>
                      </li>
                    ))}
                </ul>
              )}
            </section>
          );
        })}

        <section aria-labelledby="board">
          <h2 id="board" className="h-display text-2xl md:text-3xl">The full menu board</h2>
          <div className="relative mt-6 aspect-[3508/2480] overflow-hidden rounded-[2rem] shadow-card">
            <Image src="/images/menu-board.webp" alt="YOKII Yogurt House menu board with all drinks, toppings and prices" fill sizes="(min-width:1280px) 1200px, 100vw" className="object-cover" />
          </div>
        </section>
      </div>
    </>
  );
}
