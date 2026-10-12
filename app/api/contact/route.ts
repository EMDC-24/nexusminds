import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br />");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message, source } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@nexusmindstech.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const safeMessage = escapeHtml(String(message));
    const safeName = escapeHtml(`${firstName} ${lastName}`);
    const safeSource = escapeHtml(String(source || "website"));
    const safeEmail = escapeHtml(String(email));

    const { data, error } = await resend.emails.send({
      from: `Nexus Minds <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New ${safeSource} enquiry — ${safeName}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color:#111; border-bottom: 2px solid #5227FF; padding-bottom: 8px;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Source</td><td style="padding: 8px 0;">${safeSource}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Name</td><td style="padding: 8px 0;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          </table>
          <p style="font-weight: bold; margin-top: 16px;">Message:</p>
          <blockquote style="border-left: 3px solid #5227FF; padding: 8px 14px; background: #f7f7f8; color: #333; margin: 0;">${safeMessage}</blockquote>
          <p style="margin-top: 24px; font-size: 12px; color: #888;">Sent from the Nexus Minds website contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
