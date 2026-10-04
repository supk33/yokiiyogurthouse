import type { MetadataRoute } from "next";

const base = "https://www.yokiiyogurthouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "", priority: 1 },
    { path: "/menu", priority: 0.9 },
    { path: "/our-story", priority: 0.7 },
    { path: "/visit-us", priority: 0.7 },
    { path: "/franchise", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
  ].map(({ path, priority }) => ({ url: `${base}${path}`, changeFrequency: "weekly", priority }));
}
