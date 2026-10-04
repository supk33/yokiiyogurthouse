import Image from "next/image";
import Link from "next/link";

const pillars = [
  { n: "01", title: "Pure Yogurt", body: "100% Pure Yogurt", img: "/images/black-sesame.webp", color: "text-yokii-deep" },
  { n: "02", title: "Real Fruit", body: "Made with Real Fruits", img: "/images/strawberry-smoothie.webp", color: "text-berry" },
  { n: "03", title: "No Yogurt Powder", body: "Just the good stuff.", img: "/images/berry-bliss.webp", color: "text-[#d98a1c]" },
];

export default function Home() {
  return (
    <>
      <section className="bg-sky">
        <div className="container-x grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">Yogurt • Real Fruit • Good Mood</p>
            <h1 className="h-display mt-5 text-4xl sm:text-5xl">Every smoothie starts with fresh fruit.</h1>
            <p className="mt-6 max-w-md text-lg text-ink/80">
              Fresh fruit, 100% pure yogurt, and a whole lot of care — blended into something worth coming back for.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/menu" className="btn btn-primary">
                Explore the menu <span aria-hidden>→</span>
              </Link>
              <Link href="/visit-us" className="btn btn-outline">
                Visit us <span aria-hidden>→</span>
              </Link>
            </div>
            <p className="mt-8 font-medium text-muted">100% Pure Yogurt • No Yogurt Powder • Real Fruit</p>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <span aria-hidden className="absolute -right-4 -top-6 h-28 w-28 rounded-full bg-sun" />
            <span aria-hidden className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-berry/80" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] shadow-card">
              <Image
                src="/images/hero.webp"
                alt="A YOKII mixed berry yogurt smoothie topped with berries and granola"
                fill
                priority
                sizes="(min-width:1024px) 600px, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-5 py-3.5 shadow-lg">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-yokii-deep">YOKII Favorite</p>
                <p className="mt-0.5 font-bold text-navy">Fresh fruit. Thick yogurt. Big mood.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">What makes YOKII, YOKII</p>
            <h2 className="h-display mt-2 text-3xl md:text-4xl">Real ingredients. Real good mood.</h2>
          </div>
          <Link href="/menu" className="btn btn-primary">
            See the full menu <span aria-hidden>→</span>
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.n} className="overflow-hidden rounded-[2rem] bg-cream">
              <div className="relative aspect-[7/5] bg-sky">
                <Image src={p.img} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-top" />
              </div>
              <div className="px-6 pb-7 pt-5">
                <p className={`text-xs font-bold tracking-widest ${p.color}`}>{p.n}</p>
                <h3 className="h-display mt-2 text-xl">{p.title}</h3>
                <p className="mt-1 text-muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy text-white">
        <div className="container-x grid items-center gap-10 py-14 md:grid-cols-[1.15fr_1fr] md:py-16">
          <div className="relative aspect-[5/2] overflow-hidden rounded-[2rem] bg-sky">
            <Image src="/images/staff.webp" alt="A YOKII team member in a blue apron and cap" fill sizes="(min-width:768px) 55vw, 100vw" className="object-cover object-[50%_20%]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">The YOKII moment</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">Sip the good mood.</h2>
            <p className="mt-4 max-w-md text-lg text-white/90">
              Your study break. Your after-school treat. Your weekend refresh. Your little moment for yourself.
            </p>
            <Link href="/our-story" className="btn mt-8 bg-white text-yokii-deep hover:bg-sky">
              Read our story <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
