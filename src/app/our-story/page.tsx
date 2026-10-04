import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { whyYokii } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Healthy can be happy. Why YOKII makes yogurt smoothies with 100% real yogurt and real fruit.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Healthy can be happy." />

      <section className="container-x grid items-center gap-12 py-16 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-ink/85">
          <h2 className="h-display text-2xl md:text-3xl">Sip the good mood</h2>
          <p>
            At YOKII, we believe that healthy choices should be something to look forward to. Our mission is to create
            yogurt smoothies that are both nourishing and delicious, making wellness a natural part of everyday life.
          </p>
          <p>
            Made with 100% real yogurt, real fruits, and carefully selected ingredients, every cup is freshly blended to
            deliver premium taste, natural goodness, and a refreshing experience.
          </p>
          <p>
            Whether it&apos;s a busy morning, an afternoon break, or a little treat for yourself, YOKII is here to bring
            happiness to your day — one cup at a time.
          </p>
        </div>
        <div className="relative aspect-[7/5] overflow-hidden rounded-[2.5rem] shadow-card">
          <Image src="/images/hero.webp" alt="YOKII mixed berry smoothie — Real Yogurt. Real Fruits. Real Happiness." fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-sky">
        <div className="container-x grid gap-12 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Brand philosophy</p>
            <h2 className="h-display mt-2 text-2xl md:text-3xl">Every cup is made to give you</h2>
            <ul className="mt-6 space-y-3 text-lg font-bold text-navy">
              <li>• Better ingredients</li>
              <li>• Better nutrition</li>
              <li>• Better mood</li>
            </ul>
            <p className="mt-6 max-w-md text-muted">
              Because good days often start with something simple — a great cup of yogurt.
            </p>
          </div>
          <div>
            <p className="eyebrow">Why YOKII?</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {whyYokii.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 font-medium text-navy">
                  <span aria-hidden className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-yokii" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-16 text-center">
        <h2 className="h-display text-2xl md:text-3xl">Ready for your good mood?</h2>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/menu" className="btn btn-primary">Explore the menu <span aria-hidden>→</span></Link>
          <Link href="/visit-us" className="btn btn-outline">Visit us <span aria-hidden>→</span></Link>
        </div>
      </section>
    </>
  );
}
