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

// The CMS has no menu content type yet (the spec only has sk109's stat/service/strength/
// step/package/module/monthly). Add one in the admin, then map it here.
export async function getMenu(): Promise<MenuCategory[]> {
  return menu;
}
