import type { NextApiRequest, NextApiResponse } from "next";
import { submitFeedback, dispatchEmail } from "../../lib/feedback";
import { SUPPORT } from "../../lib/support.config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { category, body, email, attachment } = (req.body || {}) as {
    category?: string;
    body?: string;
    email?: string;
    attachment?: { name: string; data: string };
  };
  try {
    if (!body) return res.status(400).json({ error: "Feedback body is required", code: "BODY_REQUIRED" });
    const fb = submitFeedback({
      category: category || "Other",
      body,
      email,
      attachment,
    });
    void dispatchEmail(fb, {
      to: SUPPORT.feedbackEmail,
      subjectPrefix: `[${SUPPORT.productName} feedback]`,
    }).catch((e) => console.error("[customer-feedback] dispatch error:", e?.message || e));
    return res.status(201).json({ ok: true, id: fb.id, emailStatus: fb.status });
  } catch (e: any) {
    const map: Record<string, [number, string]> = {
      BODY_TOO_SHORT: [400, "Feedback must be at least 5 characters"],
      BODY_TOO_LONG: [400, "Feedback too long (max 5000 characters)"],
    };
    const [status, message] = map[e?.message] || [500, "Submission failed"];
    return res.status(status).json({ error: message, code: e?.message });
  }
}
