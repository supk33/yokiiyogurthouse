"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/visit-us", label: "Visit Us" },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky bg-white/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="YOKII Yogurt House — home" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-blue.png"
            alt="YOKII Yogurt House"
            width={720}
            height={330}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-bold uppercase tracking-[0.14em] transition-colors hover:text-yokii-deep ${
                  active ? "text-yokii-deep" : "text-navy"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/menu" className="btn btn-primary">
            View Menu <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-yokii/30 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-sky bg-white lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-bold uppercase tracking-[0.14em] text-navy"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link href="/menu" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                View Menu <span aria-hidden>→</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
