"use client";

import { useState } from "react";

type Props = {
  type: "contact" | "franchise";
  messageLabel?: string;
  withLocation?: boolean;
};

const field =
  "mt-1.5 w-full rounded-xl border border-yokii/30 bg-white px-4 py-3 text-ink outline-none focus:border-yokii focus:ring-2 focus:ring-yokii/30";

export function InquiryForm({ type, messageLabel = "Message", withLocation }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const body = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, type }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="rounded-[2rem] bg-sky p-8 text-navy">
        <p className="text-xl font-bold">Thank you! 💙</p>
        <p className="mt-2">We&apos;ve received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[2rem] bg-sky p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-bold text-navy">
          Name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="block font-bold text-navy">
          Phone
          <input name="phone" type="tel" required maxLength={30} autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="block font-bold text-navy">
        Email
        <input name="email" type="email" required maxLength={150} autoComplete="email" className={field} />
      </label>
      {withLocation && (
        <label className="block font-bold text-navy">
          Planned location / province
          <input name="location" maxLength={150} className={field} />
        </label>
      )}
      <label className="block font-bold text-navy">
        {messageLabel}
        <textarea name="message" required rows={5} maxLength={2000} className={field} />
      </label>
      {/* honeypot — hidden from people, bots fill it */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      {state === "error" && (
        <p role="alert" className="font-bold text-red-700">
          Something went wrong. Please try again or call us.
        </p>
      )}
      <button type="submit" disabled={state === "sending"} className="btn btn-primary disabled:opacity-60">
        {state === "sending" ? "Sending…" : "Send message"} <span aria-hidden>→</span>
      </button>
    </form>
  );
}
