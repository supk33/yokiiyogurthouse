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
  if (!s) return siteSettings;
  const phone = s.phone || siteSettings.phone;
  return {
    ...siteSettings,
    brand: s.name_en || s.name || siteSettings.brand,
    tagline: s.tagline || siteSettings.tagline,
    phone,
    phoneHref: s.phone ? `tel:${s.phone.replace(/[^\d+]/g, "")}` : siteSettings.phoneHref,
    email: s.email || siteSettings.email,
    line: s.line || siteSettings.line,
  };
}

// The CMS has no menu content type yet (the spec only has sk109's stat/service/strength/
// step/package/module/monthly). Add one in the admin, then map it here.
export async function getMenu(): Promise<MenuCategory[]> {
  return menu;
}

export type Inquiry = {
  type: "contact" | "franchise";
  name: string;
  phone: string;
  email: string;
  message: string;
  location?: string;
};

// The CMS API is read-only, so inquiries go to INQUIRY_WEBHOOK_URL (any endpoint that
// accepts a JSON POST: Zapier/Make, Slack, Google Apps Script, a mail relay...).
// Returns false when no destination is configured so the form never reports a lead
// as sent when it was not.
export async function submitInquiry(data: Inquiry): Promise<boolean> {
  const url = process.env.INQUIRY_WEBHOOK_URL;
  if (!url) {
    console.warn("[inquiry] INQUIRY_WEBHOOK_URL not set — inquiry NOT delivered");
    return false;
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
