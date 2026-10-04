import Image from "next/image";
import Link from "next/link";
import type { SiteSettings } from "@/lib/data";

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="bg-yokii text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo-white.png" alt="YOKII Yogurt House" width={720} height={330} className="h-16 w-auto" />
          <p className="mt-5 max-w-xs text-lg font-bold italic">Real Yogurt. Real Fruits. Real Happiness.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Explore</h2>
          <ul className="mt-4 space-y-2 font-medium">
            {[
              ["/menu", "Menu"],
              ["/our-story", "Our Story"],
              ["/visit-us", "Visit Us"],
              ["/franchise", "Franchise"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Find us</h2>
          <address className="mt-4 space-y-1 font-medium not-italic">
            {settings.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="pt-2">
              <a href={settings.phoneHref} className="font-bold hover:underline">
                {settings.phone}
              </a>
            </p>
          </address>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-bold">
            {settings.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/25 py-5 text-center text-sm font-medium text-white/90">
        © {new Date().getFullYear()} YOKII Yogurt House. All rights reserved.
      </div>
    </footer>
  );
}
