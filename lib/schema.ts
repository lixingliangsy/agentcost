// lib/schema.ts — L1 structured output schemas (zod) for agentcost steps.
import { z } from 'zod'

export const CostIngestSchema = z.object({
  parsedRows: z.number().int().nonnegative(),
  focus: z.string(),
  source: z.string().optional(),
})

export const CostAttributionSchema = z.object({
  drivers: z.array(z.object({ name: z.string(), pct: z.number() })),
  total: z.number(),
})

export const CostReportSchema = z.object({
  summary: z.string(),
  topDriver: z.string().optional(),
  guardrail: z.string().optional(),
  savings: z.string().optional(),
})

export const Schemas: Record<string, z.ZodTypeAny> = {
  ingest: CostIngestSchema,
  attribution: CostAttributionSchema,
  report: CostReportSchema,
}

export function getSchema(step: string): z.ZodTypeAny | null {
  return Schemas[step] || null
}

// --- GEO JSON-LD helpers (server-side Head injection) ---
export interface FaqItem {
  question: string
  answer: string
}

export interface HowToStep {
  name: string
  text: string
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  }
}

export function buildHowToJsonLd(name: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

export type ProductLike = {
  name: string
  slug?: string
  definitionLead?: string
  priceMonthly?: number
  priceYearly?: number
  productId?: string
}

export function buildProductJsonLd(p: ProductLike, siteUrl: string) {
  const offers: object[] = [
    {
      "@type": "Offer",
      name: p.name + " — Monthly subscription",
      price: String(p.priceMonthly ?? 0),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: siteUrl + "/pricing",
      eligibleQuantity: { "@type": "QuantitativeValue", unitCode: "MON" },
    },
  ]
  if (p.priceYearly) {
    offers.push({
      "@type": "Offer",
      name: p.name + " — Annual subscription",
      price: String(p.priceYearly),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: siteUrl + "/pricing",
    })
  }
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.definitionLead || "",
    url: siteUrl + "/",
    brand: { "@type": "Brand", name: "LXSAI" },
    offers,
    // aggregateRating / review omitted: no verified public reviews yet (GEO compliance red line)
  }
}
