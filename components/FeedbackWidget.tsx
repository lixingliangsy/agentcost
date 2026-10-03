"use client";

import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import { useT } from "../lib/i18n/provider";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const { t } = useT();

  return (
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            left: 20,
            bottom: 88,
            zIndex: 9999,
            width: 360,
            maxWidth: "calc(100vw - 40px)",
            maxHeight: "80vh",
            overflow: "auto",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 12px 40px rgba(15,23,42,.18)",
            padding: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <strong style={{ fontSize: 15, color: "#0f172a" }}>{t("feedback.title")}</strong>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("feedback.close")}
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: 0,
                fontSize: 18,
                cursor: "pointer",
                color: "#64748b",
              }}
            >
              ×
            </button>
          </div>
          <p style={{ margin: "0 0 12px", fontSize: 13, color: "#64748b" }}>{t("feedback.blurb")}</p>
          <FeedbackForm />
          <p style={{ marginTop: 12, fontSize: 12, color: "#94a3b8" }}>
            {t("feedback.fullPage")}{" "}
            <a href="/feedback" style={{ color: "#2563EB" }}>
              {t("feedback.openPage")}
            </a>
          </p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t("feedback.open")}
        style={{
          position: "fixed",
          left: 20,
          bottom: 20,
          zIndex: 9999,
          height: 44,
          padding: "0 16px",
          borderRadius: 999,
          background: "#0f172a",
          color: "#fff",
          border: 0,
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(15,23,42,.35)",
        }}
      >
        {t("feedback.open")}
      </button>
    </>
  );
}
