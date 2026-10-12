export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  source: string;
}

export interface ContactResult {
  ok: boolean;
  error: string;
}

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: data.error || "Something went wrong. Please try again." };
    }
    return { ok: true, error: "" };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
