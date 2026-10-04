import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSettings } from "@/lib/api";

const maven = localFont({
  src: "../../public/fonts/MavenPro-VariableFont_wght.ttf",
  variable: "--font-maven",
  weight: "400 900",
  display: "swap",
});

const opun = localFont({
  src: [
    { path: "../../public/fonts/Opun-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Opun-Medium-Italic.ttf", weight: "500", style: "italic" },
    { path: "../../public/fonts/Opun-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Opun-Bold-Italic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-opun",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yokiiyogurthouse.com"),
  title: {
    default: "YOKII Yogurt House — Sip the good mood",
    template: "%s | YOKII Yogurt House",
  },
  description:
    "100% real yogurt, real fruits, freshly blended every cup. Yogurt smoothies made to bring a good mood to your day.",
  openGraph: {
    title: "YOKII Yogurt House — Sip the good mood",
    description: "Real Yogurt. Real Fruits. Real Happiness.",
    images: ["/brand/og.jpg"],
    type: "website",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const settings = await getSettings();
  return (
    <html lang="en" className={`${maven.variable} ${opun.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
