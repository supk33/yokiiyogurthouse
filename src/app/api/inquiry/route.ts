import { NextResponse } from "next/server";
import { submitInquiry, type Inquiry } from "@/lib/api";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't retry.
  if (str(raw.website, 10)) return NextResponse.json({ ok: true });

  const data: Inquiry = {
    type: raw.type === "franchise" ? "franchise" : "contact",
    name: str(raw.name, 100),
    phone: str(raw.phone, 30),
    email: str(raw.email, 150),
    message: str(raw.message, 2000),
    location: str(raw.location, 150) || undefined,
  };

  if (!data.name || !data.phone || !data.message || !/^\S+@\S+\.\S+$/.test(data.email)) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }

  const ok = await submitInquiry(data);
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}
