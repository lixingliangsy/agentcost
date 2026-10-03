"use client";

import { useState } from "react";
import { useT } from "../lib/i18n/provider";

/**
 * Inline result feedback: thumbs up/down plus an optional one-line comment.
 * Posts to POST /api/customer-feedback - the same store + email pipeline
 * used by /feedback, so nothing new to operate.
 */
export default function InlineFeedback() {
  const { t } = useT();
  const [vote, setVote] = useState<"" | "up" | "down">("");
  const [note, setNote] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function send(v: "up" | "down") {
    if (state === "sending" || state === "done") return;
    setVote(v);
    setState("sending");
    const ctx = typeof window !== "undefined" ? window.location.pathname : "/";
    const label = v === "up" ? "Thumbs up" : "Thumbs down";
    const extra = note.trim();
    const body = extra ? label + " on " + ctx + " - " + extra : label + " on " + ctx + " (no comment)";
    try {
      const res = await fetch("/api/customer-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: "Other", body }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section
      data-inline-feedback="1"
      aria-label={t("feedback.helpful")}
      style={{
        maxWidth: 760,
        margin: "28px auto 8px",
        padding: "14px 16px",
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{t("feedback.helpful")}</span>
        <button
          type="button"
          onClick={() => send("up")}
          aria-label={t("feedback.yes")}
          style={{
            borderRadius: 999,
            border: "1px solid " + (vote === "up" ? "#16a34a" : "#cbd5e1"),
            background: vote === "up" ? "#dcfce7" : "#fff",
            color: "#0f172a",
            padding: "5px 14px",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {"\u{1F44D}"} {t("feedback.yes")}
        </button>
        <button
          type="button"
          onClick={() => send("down")}
          aria-label={t("feedback.no")}
          style={{
            borderRadius: 999,
            border: "1px solid " + (vote === "down" ? "#dc2626" : "#cbd5e1"),
            background: vote === "down" ? "#fee2e2" : "#fff",
            color: "#0f172a",
            padding: "5px 14px",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {"\u{1F44E}"} {t("feedback.no")}
        </button>
        <a href="/feedback" style={{ marginLeft: "auto", fontSize: 13, color: "#2563EB" }}>
          {t("feedback.open")}
        </a>
      </div>

      {vote !== "" && state !== "done" && (
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t("feedback.commentPlaceholder")}
            aria-label={t("feedback.commentPlaceholder")}
            style={{
              flex: 1,
              minWidth: 0,
              border: "1px solid #cbd5e1",
              borderRadius: 8,
              padding: "8px 10px",
              fontSize: 14,
              fontFamily: "inherit",
            }}
          />
          <button
            type="button"
            onClick={() => send(vote)}
            disabled={state === "sending"}
            style={{
              borderRadius: 8,
              background: "#2563EB",
              color: "#fff",
              border: 0,
              padding: "0 16px",
              fontSize: 14,
              fontWeight: 600,
              cursor: state === "sending" ? "not-allowed" : "pointer",
              opacity: state === "sending" ? 0.6 : 1,
            }}
          >
            {state === "sending" ? t("feedback.submitting") : t("feedback.submit")}
          </button>
        </div>
      )}

      {state === "done" && (
        <p style={{ margin: "10px 0 0", fontSize: 13, color: "#16a34a" }}>{t("feedback.thanks")}</p>
      )}
      {state === "error" && (
        <p style={{ margin: "10px 0 0", fontSize: 13, color: "#c2410c" }}>
          {t("feedback.openPage")}
        </p>
      )}
    </section>
  );
}
