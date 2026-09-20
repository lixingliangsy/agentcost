# CostLens — Integrations

## API & Webhooks
- REST API for programmatic access to cost data
- Webhooks for real-time budget alerts
- Token usage webhook to ingest spend events

## Export Targets
- text/CSV copy (client-side / roadmap) for spreadsheets and accounting tools
- JSON export for custom pipelines
- Finance-system ready formats

## CI/CD Hooks
- GitHub Actions integration for budget checks
- Slack/Discord alert notifications
- Webhook triggers on budget thresholds

## Bring Your Own Key (BYOK)
Enterprise customers can supply their own LLM API keys. Keys are stored server-side only and never exposed to the browser.

## Honesty Note
Webhook export and advanced CI hooks are on the Enterprise roadmap. They are documented here only when live — we will not claim them before shipping.

ref: OWASP API Security Top 10