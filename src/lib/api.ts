import "server-only";
import { menu, siteSettings, type MenuCategory, type SiteSettings } from "./data";

// Backend: SARAKUL CMS public content API (sk109-openapi.json).
//   GET {CMS_API_URL}/api/v1/{CMS_SITE}/{type}[/{slug}]  — read-only, no token for published content.
// The CMS currently only hosts the "sk109" site (SARAKUL's own content), so there is no
// YOKII site yet. Until CMS_SITE points at one, or any request fails, the static
// fallback in ./data.ts is used.

const BASE = process.env.CMS_API_URL?.replace(/\/$/, "");
const SITE = process.env.CMS_SITE;
// Optional: CMS_DRAFT=1 + CMS_API_KEY previews unpublished drafts (uncached). Never set on production.
const DRAFT = process.env.CMS_DRAFT === "1" && !!process.env.CMS_API_KEY;

async function cms<T>(type: string): Promise<T | null> {
  if (!BASE || !SITE) return null;
  try {
    const res = await fetch(`${BASE}/api/v1/${SITE}/${type}${DRAFT ? "?draft=1" : ""}`, {
      headers: DRAFT ? { Authorization: `Bearer ${process.env.CMS_API_KEY}` } : undefined,
      ...(DRAFT ? { cache: "no-store" as const } : { next: { revalidate: 300 } }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[cms] ${SITE}/${type} failed, using fallback:`, err);
    return null;
  }
}

// CMS "Settings" schema: slug, name, name_en, tagline, email, phone, line, pricing_note.
type CmsSettings = {
  name?: string;
  name_en?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  line?: string;
};

export async function getSettings(): Promise<SiteSettings> {
  const s = await cms<CmsSettings>("settings");
  const email = s?.email || process.env.CONTACT_EMAIL || siteSettings.email;
  if (!s) return { ...siteSettings, email };
  const phone = s.phone || siteSettings.phone;
  return {
    ...siteSettings,
    brand: s.name_en || s.name || siteSettings.brand,
    tagline: s.tagline || siteSettings.tagline,
    phone,
    phoneHref: s.phone ? `tel:${s.phone.replace(/[^\d+]/g, "")}` : siteSettings.phoneHref,
    email,
    line: s.line || siteSettings.line,
  };
}

// CMS types: menu_category {slug,title,tagline,order} and menu_item
// {slug,name,price,image,category,order}. `category` is the category slug (a category title also works).
// Falls back to / merges with the static menu until the CMS is fully filled in (see getMenu).
type CmsCategory = { slug: string; title?: string; tagline?: string; order?: string | number };
type CmsItem = {
  slug: string;
  name?: string;
  price?: string | number;
  image?: string;
  category?: string;
  order?: string | number;
};

const num = (v: unknown, fallback = 0) => {
  const n = typeof v === "number" ? v : parseFloat(String(v ?? "").replace(/[^\d.]/g, ""));
  return Number.isFinite(n) ? n : fallback;
};
const key = (s: string) => s.trim().toLowerCase();

export function buildMenu(cats: CmsCategory[], items: CmsItem[]): MenuCategory[] {
  const localImage = new Map(
    menu.flatMap((c) => c.items.filter((i) => i.image).map((i) => [key(i.name), i.image!] as const)),
  );
  return [...cats]
    .sort((a, b) => num(a.order, 999) - num(b.order, 999))
    .map((c) => {
      const title = c.title || c.slug;
      const mine = items
        .filter((i) => i.category && [key(c.slug), key(title)].includes(key(i.category)))
        .sort((a, b) => num(a.order, 999) - num(b.order, 999))
        .filter((i) => i.name)
        .map((i) => ({
          name: i.name!,
          price: num(i.price),
          image: i.image || localImage.get(key(i.name!)),
        }));
      return { slug: c.slug, title, tagline: c.tagline || undefined, items: mine };
    })
    .filter((c) => c.items.length > 0);
}

export async function getMenu(): Promise<MenuCategory[]> {
  const [cats, items] = await Promise.all([cms<CmsCategory[]>("menu_category"), cms<CmsItem[]>("menu_item")]);
  if (!cats?.length || !items?.length) return menu;
  const built = buildMenu(cats, items);
  if (!built.length) return menu;
  // While the CMS menu is being filled in, a CMS category replaces the static one with the
  // same slug and the remaining static categories stay, so a partly filled CMS never shrinks
  // the live menu. Once every category is in the CMS, delete the static `menu` in ./data.ts.
  const bySlug = new Map(built.map((c) => [c.slug, c]));
  const merged = menu.map((c) => bySlug.get(c.slug) ?? c);
  const known = new Set(menu.map((c) => c.slug));
  return [...merged, ...built.filter((c) => !known.has(c.slug))];
}
