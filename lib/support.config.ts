import { KB } from "./agent/kb";
import type { SupportConfig } from "./support-kit/types";

export const SUPPORT: SupportConfig = {
  productSlug: "agentcost",
  productName: "CostLens",
  feedbackEmail: process.env.FEEDBACK_TO_EMAIL || "lixingliangsy@163.com",
  kb: KB,
  chatHost: process.env.APP_URL || "https://agentcost.lxsaihub.com",
  brandColor: "#4f46e5",
  complianceDisclaimer:
    "This assistant is for reference only. It is not legal advice, not credit advice, and not tax or professional financial advice.",
};
