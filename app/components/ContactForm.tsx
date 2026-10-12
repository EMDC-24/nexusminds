"use client";
import React, { useState } from "react";
import { submitContact } from "@/lib/contact";
import SubmitButton from "./SubmitButton";

interface ContactFormProps {
  source: string;
  submitLabel?: string;
}

const inputClass =
  "w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors";

type Status = "idle" | "loading" | "success" | "error";

const ContactForm = ({ source, submitLabel = "Submit" }: ContactFormProps) => {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const res = await submitContact({
      firstName: String(fd.get("first-name") || "").trim(),
      lastName: String(fd.get("last-name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      source,
    });
    if (res.ok) {
      setStatus("success");
      e.currentTarget.reset();
    } else {
      setStatus("error");
      setError(res.error);
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4 items-start">
        <h3 className="text-2xl font-light text-gray-900">Thanks — we&apos;ve got it.</h3>
        <p className="text-stone-500 text-sm lg:text-md font-light">
          Your message has been sent to our team. We&apos;ll be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm underline text-stone-500 hover:text-black"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:gap-4">
      <input
        type="text"
        name="first-name"
        required
        placeholder="First name"
        autoComplete="given-name"
        className={inputClass}
      />
      <input
        type="text"
        name="last-name"
        required
        placeholder="Last name"
        autoComplete="family-name"
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        autoComplete="email"
        className={inputClass}
      />
      <textarea
        name="message"
        rows={4}
        required
        placeholder="Message"
        defaultValue={""}
        className={inputClass}
      />
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      <SubmitButton
        variant="black"
        text={submitLabel}
        loading={status === "loading"}
      />
    </form>
  );
};

export default ContactForm;
