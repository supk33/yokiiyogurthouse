"use client";

import { useState } from "react";

type Props = {
  type: "contact" | "franchise";
  /** Where the visitor's mail app sends the message. */
  email?: string;
  phone: string;
  messageLabel?: string;
  withLocation?: boolean;
};

const field =
  "mt-1.5 w-full rounded-xl border border-yokii/30 bg-white px-4 py-3 text-ink outline-none focus:border-yokii focus:ring-2 focus:ring-yokii/30";

export function InquiryForm({ type, email, phone, messageLabel = "Message", withLocation }: Props) {
  const [sent, setSent] = useState(false);

  if (!email) {
    return (
      <div className="rounded-[2rem] bg-sky p-8 text-navy">
        <p className="text-xl font-bold">Get in touch by phone</p>
        <p className="mt-2">
          Please call us on <span className="font-bold">{phone}</span>.
        </p>
      </div>
    );
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const subject = type === "franchise" ? `Franchise inquiry from ${d.name}` : `Website message from ${d.name}`;
    const body = [
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email}`,
      d.location ? `Location: ${d.location}` : "",
      "",
      d.message,
    ]
      .filter((l, i) => l !== "" || i > 3)
      .join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
        Your email
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
      <button type="submit" className="btn btn-primary">
        Send by email <span aria-hidden>→</span>
      </button>
      <p role="status" className="text-sm text-muted">
        {sent ? (
          <>
            Your email app should now be open with your message ready — press send there. No luck? Write to{" "}
            <a href={`mailto:${email}`} className="font-bold text-yokii-deep underline">
              {email}
            </a>{" "}
            or call {phone}.
          </>
        ) : (
          "This opens your email app with the message filled in."
        )}
      </p>
    </form>
  );
}
