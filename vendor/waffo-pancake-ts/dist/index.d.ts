interface WaffoPancakeConfig {
    /** Merchant ID in `MER_{base62}` format (sent as X-Merchant-Id header) */
    merchantId: string;
    /** RSA private key in PEM format for request signing */
    privateKey: string;
    /** Base URL override (default: https://api.waffo.ai) */
    baseUrl?: string;
    /** Custom fetch implementation (default: global fetch) */
    fetch?: typeof fetch;
    /**
     * Custom RSA public key(s) for webhook signature verification.
     *
     * - `string` — single key used for both test and prod environments
     * - `{ test?, prod? }` — per-environment keys
     *
     * Resolution order per environment: config key → env var → built-in key.
     * @see {@link VerifyWebhookOptions} for per-call overrides
     */
    webhookPublicKey?: WebhookPublicKeys;
}
/**
 * Options for {@link HttpClient.post}.
 * Not exported publicly — used by resource classes.
 */
interface PostOptions {
    /**
     * Time window in seconds for idempotency key rotation.
     * When set, a floored timestamp is mixed into the key so identical params
     * produce a new key after the window elapses (e.g. 60 = per-minute dedup).
     */
    idempotencyWindow?: number;
    /**
     * Skip the X-Idempotency-Key header entirely. Set for read-only queries
     * (e.g. GraphQL) so the gateway's 24h idempotency cache does not serve
     * stale data on identical repeat queries.
     */
    noIdempotency?: boolean;
}
/**
 * Single Notice entry within `errors` or `warnings` arrays.
 *
 * Both REST and GraphQL envelopes use the same Notice shape. `aiHint` is the
 * structured migration instruction for LLM consumers (see handbook
 * `command-layer.md` aiHint four-line template).
 *
 * @example
 * { message: "Store slug already exists", layer: "store" }
 * @example
 * { message: "webhookSettings field ignored", layer: "store",
 *   aiHint: "Switch to client.webhooks.add / update / remove" }
 */
interface Notice {
    /** Human-readable message */
    message: string;
    /** Layer that produced this notice */
    layer: `${ErrorLayer}`;
    /** Structured migration / remediation instruction for LLM consumers */
    aiHint?: string;
}
/** @deprecated Use {@link Notice}. Kept for backwards compatibility with existing imports. */
type ApiError = Notice;
/**
 * API response envelope. Both REST writes and GraphQL queries return this shape:
 * - Success: `{ data: T }` (optionally with `warnings`)
 * - Failure: `{ data: null, errors: Notice[] }`
 * - Partial success (GraphQL only): `{ data: T, errors: Notice[] }`
 *
 * `errors` are ordered by call stack: `[0]` is the deepest layer, `[n]` is the outermost.
 *
 * See handbook `coding-standards/code-style-guide/command-layer.md` for the wire contract.
 */
interface Envelope<T> {
    data: T | null;
    errors?: Notice[];
    warnings?: Notice[];
}
/** Transport-layer result: HTTP status plus the parsed envelope. */
interface PostResult<T> extends Envelope<T> {
    /** HTTP status code from the response */
    status: number;
}
/**
 * Environment type.
 * @see waffo-pancake-order-service/app/lib/types.ts
 */
declare enum Environment {
    Test = "test",
    Prod = "prod"
}
/**
 * Tax category for products.
 * @see waffo-pancake-product-service/app/lib/resources/types.ts
 */
declare enum TaxCategory {
    DigitalGoods = "digital_goods",
    SaaS = "saas",
    Software = "software",
    Ebook = "ebook",
    OnlineCourse = "online_course",
    Consulting = "consulting",
    ProfessionalService = "professional_service"
}
/**
 * Subscription billing period.
 * @see waffo-pancake-product-service/app/lib/resources/types.ts
 */
declare enum BillingPeriod {
    Weekly = "weekly",
    Monthly = "monthly",
    Quarterly = "quarterly",
    Yearly = "yearly"
}
/**
 * Product version status.
 * @see waffo-pancake-product-service/app/lib/resources/types.ts
 */
declare enum ProductVersionStatus {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Store entity status.
 * @see waffo-pancake-store-service/app/lib/resources/store.ts
 */
declare enum EntityStatus {
    Active = "active",
    Inactive = "inactive",
    Suspended = "suspended"
}
/**
 * Store member role.
 * @see waffo-pancake-store-service/app/lib/resources/store.ts
 */
declare enum StoreRole {
    Owner = "owner",
    Admin = "admin",
    Member = "member"
}
/**
 * One-time order status.
 * @see waffo-pancake-order-service/app/lib/resources/onetime-order.ts
 */
declare enum OnetimeOrderStatus {
    Pending = "pending",
    Completed = "completed",
    Canceled = "canceled"
}
/**
 * Subscription order status.
 *
 * State machine:
 * - pending -> active, canceled, closed (PSP CLOSE from never-activated)
 * - active -> canceling, past_due, canceled, expired
 * - canceling -> active, canceled
 * - past_due -> active, canceled
 * - closed -> terminal (never-activated subscription closed by PSP)
 * - canceled -> terminal
 * - expired -> terminal
 *
 * @see waffo-pancake-order-service/app/lib/resources/subscription-order.ts
 */
declare enum SubscriptionOrderStatus {
    Pending = "pending",
    Active = "active",
    Canceling = "canceling",
    PastDue = "past_due",
    Closed = "closed",
    Canceled = "canceled",
    Expired = "expired"
}
/**
 * Payment status.
 * @see waffo-pancake-order-service/app/lib/resources/payment.ts
 */
declare enum PaymentStatus {
    Pending = "pending",
    Succeeded = "succeeded",
    Failed = "failed",
    Canceled = "canceled"
}
/**
 * Refund ticket status.
 * @see waffo-pancake-order-service/app/lib/resources/refund-ticket.ts
 */
declare enum RefundTicketStatus {
    Pending = "pending",
    UnderReview = "under_review",
    Approved = "approved",
    Rejected = "rejected",
    Returned = "returned",
    Processing = "processing",
    Succeeded = "succeeded",
    Failed = "failed",
    Cancelled = "cancelled"
}
/**
 * Refund status.
 * @see waffo-pancake-order-service/app/lib/resources/refund.ts
 */
declare enum RefundStatus {
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Media asset type.
 * @see waffo-pancake-product-service/app/lib/resources/types.ts
 */
declare enum MediaType {
    Image = "image",
    Video = "video"
}
/** Error layer identifier in the call stack. */
declare enum ErrorLayer {
    Gateway = "gateway",
    User = "user",
    Store = "store",
    Product = "product",
    Order = "order",
    Ticket = "ticket",
    GraphQL = "graphql",
    Resource = "resource",
    /** SDK-specific layer for email delivery errors (not part of the service-side error layers). */
    Email = "email",
    /** SDK-side input validation (caught before network request). */
    Sdk = "sdk"
}
/**
 * Parameters for issuing a buyer session token.
 *
 * Provide either `storeId` or `productId` (at least one required).
 * When `productId` is given without `storeId`, the server derives the store from the product.
 *
 * @see waffo-pancake-user-service/app/lib/utils/jwt.ts IssueSessionTokenRequest
 */
interface IssueSessionTokenParams {
    /**
     * Buyer identity — encoded into the JWT payload for merchant-side buyer
     * identification. Accepts an email or any merchant-provided identifier string.
     * To pre-fill the checkout page's email field, use `buyerEmail` on
     * `checkout.authenticated.create`.
     */
    buyerIdentity: string;
    /** Store ID (optional when `productId` is provided) */
    storeId?: string;
    /** Product ID — used to derive the store when `storeId` is omitted */
    productId?: string;
}
/**
 * Issued session token response.
 *
 * @example
 * { token: "eyJhbGciOi...", expiresAt: "2026-03-10T09:00:00.000Z" }
 */
interface SessionToken {
    /** JWT token string */
    token: string;
    /** Expiration time (ISO 8601 UTC) */
    expiresAt: string;
}
/**
 * Webhook channel — HTTP for the standard RSA-signed envelope, the rest for
 * IM platform native payloads (Feishu / Discord / Telegram / Slack).
 */
type WebhookChannel = "http" | "feishu" | "discord" | "telegram" | "slack";
/**
 * Configured webhook endpoint (one row of `store.store_webhooks`).
 *
 * @see waffo-pancake-store-service/app/lib/types.ts
 */
interface StoreWebhook {
    /** Webhook UUID (not Short ID) */
    id: string;
    /** Owning store Short ID (`STO_…`) */
    storeId: string;
    channel: WebhookChannel;
    /** Target webhook URL */
    url: string;
    /** Subscribed event types (use `WebhookEventType` enum or its string literal) */
    events: `${WebhookEventType}`[];
    /** Whether this webhook fires in test or prod environment */
    testMode: boolean;
    /** Channel-specific credential (e.g. Telegram chat_id) */
    secret: string | null;
    createdAt: string;
    updatedAt: string;
}
/** Parameters for creating a webhook. */
interface AddWebhookParams {
    /** Store Short ID (`STO_…`) */
    storeId: string;
    channel: WebhookChannel;
    /** Target webhook URL */
    url: string;
    /** Subscribed event types (use `WebhookEventType` enum or its string literal) */
    events: `${WebhookEventType}`[];
    /** Whether this webhook fires in test (true) or prod (false) */
    testMode: boolean;
    /** Channel-specific credential (e.g. Telegram chat_id) */
    secret?: string | null;
}
/** Parameters for updating a webhook. `channel` and `testMode` are immutable. */
interface UpdateWebhookParams {
    /** Webhook UUID */
    id: string;
    /** Replace target URL (must remain on the same channel host) */
    url?: string;
    /** Replace subscribed event types (use `WebhookEventType` enum or its string literal) */
    events?: `${WebhookEventType}`[];
    /** Replace channel-specific credential */
    secret?: string | null;
}
/** Parameters for hard-deleting a webhook. */
interface RemoveWebhookParams {
    /** Webhook UUID */
    id: string;
}
/**
 * Notification settings (all default to true).
 * @see waffo-pancake-store-service/app/lib/types.ts
 */
interface NotificationSettings {
    emailOrderConfirmation: boolean;
    emailSubscriptionConfirmation: boolean;
    emailSubscriptionCycled: boolean;
    emailSubscriptionCanceled: boolean;
    emailSubscriptionRevoked: boolean;
    emailSubscriptionPastDue: boolean;
    emailTrialStarted: boolean;
    emailTrialEnding: boolean;
    notifyNewOrders: boolean;
    notifyNewSubscriptions: boolean;
    notifySubscriptionCanceled: boolean;
    notifySubscriptionEnded: boolean;
    notifySubscriptionPastDue: boolean;
    notifySubscriptionRenewed: boolean;
    notifySubscriptionUncanceled: boolean;
    notifySubscriptionUpdated: boolean;
    notifyChargeback: boolean;
    notifyPayoutCompleted: boolean;
    notifyPayoutFailed: boolean;
}
/**
 * Merchant-writable subset of {@link NotificationSettings}.
 *
 * Consumer-email toggles (`email*`) are managed by the PANCAKE platform (admin-only
 * via DB) and **not** writable from this SDK; they would be silently dropped by the
 * `update-store` endpoint if included. Use this type for any merchant-side update.
 */
type MerchantWritableNotificationSettings = Pick<NotificationSettings, "notifyNewOrders" | "notifyNewSubscriptions" | "notifySubscriptionCanceled" | "notifySubscriptionEnded" | "notifySubscriptionPastDue" | "notifySubscriptionRenewed" | "notifySubscriptionUncanceled" | "notifySubscriptionUpdated" | "notifyChargeback" | "notifyPayoutCompleted" | "notifyPayoutFailed">;
/**
 * Single-theme checkout page styling.
 * @see waffo-pancake-store-service/app/lib/types.ts
 */
interface CheckoutThemeSettings {
    checkoutLogo: string | null;
    checkoutColorPrimary: string;
    checkoutColorBackground: string;
    checkoutColorCard: string;
    checkoutColorText: string;
    checkoutBorderRadius: string;
}
/**
 * Checkout page configuration (light and dark themes).
 * @see waffo-pancake-store-service/app/lib/types.ts
 */
interface CheckoutSettings {
    defaultDarkMode: boolean;
    light: CheckoutThemeSettings;
    dark: CheckoutThemeSettings;
}
/**
 * Store entity.
 * @see waffo-pancake-store-service/app/lib/resources/store.ts
 */
interface Store {
    id: string;
    name: string;
    status: EntityStatus;
    logo: string | null;
    supportEmail: string | null;
    website: string | null;
    slug: string | null;
    prodEnabled: boolean;
    notificationSettings: NotificationSettings | null;
    checkoutSettings: CheckoutSettings | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}
/** Parameters for creating a store. */
interface CreateStoreParams {
    /** Store name (slug is auto-generated) */
    name: string;
}
/**
 * Parameters for updating a store.
 *
 * Settings objects support partial updates — omitted sub-fields keep their
 * existing values, `null` clears a field, and a concrete value sets it.
 * Pass the entire settings object as `null` to clear all fields in the group.
 *
 * **BREAKING (2026-05)**: the legacy `webhookSettings` field is removed.
 * Manage webhooks via `client.webhooks.add / update / remove`; query the
 * webhook list through GraphQL `Store.storeWebhooks`.
 */
interface UpdateStoreParams {
    /** Store ID */
    id: string;
    /** Store display name */
    name?: string;
    /** Store status */
    status?: EntityStatus;
    /** Store logo URL (set to `null` to remove) */
    logo?: string | null;
    /** Support email address (set to `null` to remove) */
    supportEmail?: string | null;
    /** Store website URL (set to `null` to remove) */
    website?: string | null;
    /** Notification preferences (partial update — omitted fields keep existing values, set to `null` to clear all) */
    notificationSettings?: Partial<MerchantWritableNotificationSettings> | null;
    /** Checkout page theme configuration (partial update — omitted fields keep existing values, set to `null` to clear all) */
    checkoutSettings?: Partial<CheckoutSettings> | null;
}
/** Parameters for deleting (soft-delete) a store. */
interface DeleteStoreParams {
    /** Store ID */
    id: string;
}
/** Parameters for adding a merchant to a store. */
interface AddMerchantParams {
    storeId: string;
    email: string;
    role: "admin" | "member";
}
/** Result of adding a merchant to a store. */
interface AddMerchantResult {
    storeId: string;
    merchantId: string;
    email: string;
    role: string;
    status: string;
    addedAt: string;
}
/** Parameters for removing a merchant from a store. */
interface RemoveMerchantParams {
    storeId: string;
    merchantId: string;
}
/** Result of removing a merchant from a store. */
interface RemoveMerchantResult {
    message: string;
    removedAt: string;
}
/** Parameters for updating a merchant's role. */
interface UpdateRoleParams {
    storeId: string;
    merchantId: string;
    role: "admin" | "member";
}
/** Result of updating a merchant's role. */
interface UpdateRoleResult {
    storeId: string;
    merchantId: string;
    role: string;
    updatedAt: string;
}
/**
 * Price for a single currency.
 *
 * Amounts are represented as display strings (e.g., "9.99" for USD, "1000" for JPY).
 * The server handles conversion to/from smallest currency units internally.
 *
 * @see waffo-pancake-product-service/app/lib/resources/types.ts
 *
 * @example
 * // USD $9.99
 * { amount: "9.99", taxCategory: "saas" }
 *
 * @example
 * // JPY ¥1000
 * { amount: "1000", taxCategory: "software" }
 */
interface PriceInfo {
    /** Price amount as display string (e.g., "9.99" for USD, "1000" for JPY) */
    amount: string;
    /** Tax category */
    taxCategory: TaxCategory;
}
/**
 * Multi-currency prices (keyed by ISO 4217 currency code).
 *
 * @see waffo-pancake-product-service/app/lib/resources/types.ts
 *
 * @example
 * {
 *   "USD": { amount: "9.99", taxCategory: "saas" },
 *   "EUR": { amount: "8.99", taxCategory: "saas" }
 * }
 */
type Prices = Record<string, PriceInfo>;
/**
 * Media asset (image or video).
 * @see waffo-pancake-product-service/app/lib/resources/types.ts
 */
interface MediaItem {
    /** Media type */
    type: `${MediaType}`;
    /** Asset URL */
    url: string;
    /** Alt text */
    alt?: string;
    /** Thumbnail URL */
    thumbnail?: string;
}
/**
 * One-time product detail (public API shape).
 * @see waffo-pancake-product-service/app/lib/resources/onetime-product.ts OnetimeProductDetail
 */
interface OnetimeProductDetail {
    id: string;
    storeId: string;
    name: string;
    description: string | null;
    prices: Prices;
    media: MediaItem[];
    successUrl: string | null;
    metadata: Record<string, unknown>;
    status: ProductVersionStatus;
    createdAt: string;
    updatedAt: string;
}
/**
 * Parameters for creating a one-time product.
 * @see waffo-pancake-product-service/app/lib/resources/onetime-product.ts CreateOnetimeProductRequestBody
 */
interface CreateOnetimeProductParams {
    storeId: string;
    name: string;
    prices: Prices;
    description?: string | null;
    media?: MediaItem[];
    successUrl?: string | null;
    metadata?: Record<string, unknown>;
}
/**
 * Parameters for updating a one-time product (creates a new version; skips if unchanged).
 * @see waffo-pancake-product-service/app/lib/resources/onetime-product.ts UpdateOnetimeProductContentRequestBody
 */
interface UpdateOnetimeProductParams {
    id: string;
    name?: string;
    prices?: Prices;
    description?: string | null;
    media?: MediaItem[];
    successUrl?: string | null;
    metadata?: Record<string, unknown>;
}
/** Parameters for publishing a one-time product's test version to production. */
interface PublishOnetimeProductParams {
    /** Product ID */
    id: string;
}
/**
 * Parameters for updating a one-time product's status.
 * @see waffo-pancake-product-service/app/lib/resources/onetime-product.ts UpdateOnetimeStatusRequestBody
 */
interface UpdateOnetimeStatusParams {
    id: string;
    status: ProductVersionStatus;
}
/**
 * Subscription product detail (public API shape).
 * @see waffo-pancake-product-service/app/lib/resources/subscription-product.ts SubscriptionProductDetail
 */
interface SubscriptionProductDetail {
    id: string;
    storeId: string;
    name: string;
    description: string | null;
    billingPeriod: BillingPeriod;
    prices: Prices;
    media: MediaItem[];
    successUrl: string | null;
    metadata: Record<string, unknown>;
    status: ProductVersionStatus;
    createdAt: string;
    updatedAt: string;
}
/**
 * Parameters for creating a subscription product.
 * @see waffo-pancake-product-service/app/lib/resources/subscription-product.ts CreateSubscriptionProductRequestBody
 */
interface CreateSubscriptionProductParams {
    storeId: string;
    name: string;
    billingPeriod: BillingPeriod;
    prices: Prices;
    description?: string | null;
    media?: MediaItem[];
    successUrl?: string | null;
    metadata?: Record<string, unknown>;
}
/**
 * Parameters for updating a subscription product (creates a new version; skips if unchanged).
 * @see waffo-pancake-product-service/app/lib/resources/subscription-product.ts UpdateSubscriptionProductContentRequestBody
 */
interface UpdateSubscriptionProductParams {
    id: string;
    name?: string;
    billingPeriod?: BillingPeriod;
    prices?: Prices;
    description?: string | null;
    media?: MediaItem[];
    successUrl?: string | null;
    metadata?: Record<string, unknown>;
}
/** Parameters for publishing a subscription product's test version to production. */
interface PublishSubscriptionProductParams {
    /** Product ID */
    id: string;
}
/**
 * Parameters for updating a subscription product's status.
 * @see waffo-pancake-product-service/app/lib/resources/subscription-product.ts UpdateSubscriptionStatusRequestBody
 */
interface UpdateSubscriptionStatusParams {
    id: string;
    status: ProductVersionStatus;
}
/**
 * Group rules for subscription product groups.
 * @see waffo-pancake-product-service/app/lib/resources/subscription-product-group.ts
 */
interface GroupRules {
    /** Whether trial period is shared across products in the group */
    sharedTrial: boolean;
}
/**
 * Subscription product group entity.
 * @see waffo-pancake-product-service/app/lib/resources/subscription-product-group.ts
 */
interface SubscriptionProductGroup {
    id: string;
    storeId: string;
    name: string;
    description: string | null;
    rules: GroupRules;
    productIds: string[];
    environment: Environment;
    createdAt: string;
    updatedAt: string;
}
/**
 * Parameters for creating a subscription product group.
 * @see waffo-pancake-product-service/app/lib/resources/subscription-product-group.ts CreateGroupRequestBody
 */
interface CreateSubscriptionProductGroupParams {
    storeId: string;
    name: string;
    description?: string;
    rules?: GroupRules;
    productIds?: string[];
}
/**
 * Parameters for updating a subscription product group (`productIds` is a full replacement).
 * @see waffo-pancake-product-service/app/lib/resources/subscription-product-group.ts UpdateGroupRequestBody
 */
interface UpdateSubscriptionProductGroupParams {
    id: string;
    name?: string;
    description?: string;
    rules?: GroupRules;
    productIds?: string[];
}
/** Parameters for hard-deleting a subscription product group. */
interface DeleteSubscriptionProductGroupParams {
    /** Group ID */
    id: string;
}
/** Parameters for publishing a test-environment group to production (upsert). */
interface PublishSubscriptionProductGroupParams {
    /** Group ID */
    id: string;
}
/** Parameters for canceling a subscription order. */
interface CancelSubscriptionParams {
    /** Order ID */
    orderId: string;
}
/**
 * Result of canceling a subscription order.
 * @see waffo-pancake-order-service cancel-order route.ts
 */
interface CancelSubscriptionResult {
    orderId: string;
    /** Status after cancellation (`"canceled"` or `"canceling"`) */
    status: `${SubscriptionOrderStatus}`;
}
/**
 * Buyer billing details for checkout.
 * @see waffo-pancake-order-service/app/lib/types.ts
 */
interface BillingDetail {
    /** Country code (ISO 3166-1 alpha-2) */
    country: string;
    /** Whether this is a business purchase */
    isBusiness: boolean;
    /** Postal / ZIP code (required for US, at least one of postcode/state for CA) */
    postcode?: string;
    /** State / province code (at least one of state/postcode for CA) */
    state?: string;
    /** Business name (recommended for invoicing, does not affect tax calculation) */
    businessName?: string;
    /** Tax ID / VAT number (EU businesses: triggers reverse charge 0% when provided) */
    taxId?: string;
}
/**
 * Parameters for creating a checkout session.
 * @see waffo-pancake-order-service/app/lib/types.ts CreateCheckoutSessionRequest
 */
interface CreateCheckoutSessionParams {
    /** Product ID */
    productId: string;
    /** Currency code (ISO 4217) */
    currency: string;
    /** Optional price snapshot override (reads from DB if omitted) */
    priceSnapshot?: PriceInfo;
    /** Trial toggle override (subscription only) */
    withTrial?: boolean;
    /** Pre-filled buyer email */
    buyerEmail?: string;
    /** Pre-filled billing details */
    billingDetail?: BillingDetail;
    /** Redirect URL after successful payment */
    successUrl?: string;
    /** Session expiration in seconds (default: 45 minutes) */
    expiresInSeconds?: number;
    /** Dark mode override (true=dark, false=light, omit=use store default) */
    darkMode?: boolean;
    /** Custom metadata */
    metadata?: Record<string, string>;
    /** Order-side business identifier (max 128 chars); inherited by orders, payments, refunds */
    orderMerchantExternalId?: string;
}
/** Result of creating a checkout session. */
interface CheckoutSessionResult {
    /** Session ID */
    sessionId: string;
    /** URL to redirect the customer to */
    checkoutUrl: string;
    /** Session expiration time (ISO 8601 UTC) */
    expiresAt: string;
}
/** Parameters for canceling a one-time order (buyer-side). */
interface CancelOnetimeOrderParams {
    /** Order ID */
    orderId: string;
}
/** Result of canceling a one-time order. */
interface CancelOnetimeOrderResult {
    /** Order ID */
    orderId: string;
    /** Resulting status (`"canceled"`) */
    status: string;
}
/** Parameters for reactivating a subscription (buyer-side). */
interface ReactivateSubscriptionParams {
    /** Subscription order ID */
    orderId: string;
}
/** Result of reactivating a subscription. */
interface ReactivateSubscriptionResult {
    /** Order ID */
    orderId: string;
    /** Resulting status (`"active"`) */
    status: string;
}
/** Requested refund amount. */
interface RequestedAmount {
    /** Refund amount in display format (e.g., `"29.00"`) */
    amount: string;
    /** Currency code (ISO 4217) */
    currency: string;
}
/**
 * Per-version data for a refund ticket. Each ticket can be submitted/resubmitted
 * multiple times; this is the shape of a single submission.
 */
interface RefundTicketVersionData {
    /** Refund reason supplied by the buyer */
    reason: string;
    /** Requested refund amount; `null` if the version has no amount recorded */
    requestedAmount: RequestedAmount | null;
}
/** Parameters for creating a refund ticket (buyer-side). */
interface CreateRefundTicketParams {
    /** Payment ID to refund */
    paymentId: string;
    /** Reason for the refund request */
    reason: string;
    /** Requested refund amount */
    requestedAmount: RequestedAmount;
    /** Custom metadata */
    metadata?: Record<string, unknown>;
    /** Refund-ticket business-side identifier (max 128 chars); inherited by the executed refund on PSP success */
    refundTicketMerchantExternalId?: string;
}
/** Parameters for resubmitting a rejected refund ticket (buyer-side). */
interface ResubmitRefundTicketParams {
    /** Existing ticket ID */
    ticketId: string;
    /** Payment ID */
    paymentId: string;
    /** Updated reason */
    reason: string;
    /** Updated requested amount */
    requestedAmount: RequestedAmount;
}
/** Refund ticket entity returned from create/resubmit operations. */
interface RefundTicket {
    /** Ticket ID */
    id: string;
    /** Ticket type (e.g., `"refund"`) */
    type: string;
    /** Ticket status (e.g., `"pending"`, `"approved"`, `"rejected"`) */
    status: string;
    /** Associated payment ID */
    subjectId: string;
    /** Submitter identifier (email or merchant ID) */
    submitterId: string;
    /** Submitter type (e.g., `"customer"`, `"merchant"`) */
    submitterType: string;
    /** Current version ID */
    currentVersionId: string | null;
    /** Reviewer ID (null if not yet reviewed) */
    reviewerId: string | null;
    /** Review timestamp (ISO 8601, null if not yet reviewed) */
    reviewedAt: string | null;
    /** Reviewer's note */
    reviewNote: string | null;
    /** Rejection reason (null if approved or pending) */
    rejectReason: string | null;
    /** Execution timestamp (ISO 8601, null if not yet executed) */
    executedAt: string | null;
    /** Custom metadata */
    metadata: Record<string, unknown>;
    /** Refund-ticket business-side identifier (max 128 chars, immutable across resubmits) */
    refundTicketMerchantExternalId: string | null;
    /** Current version number */
    versionNumber: number | null;
    /** Current (latest) version data */
    versionData: RefundTicketVersionData | null;
    /** Creation timestamp (ISO 8601) */
    createdAt: string;
    /** Last update timestamp (ISO 8601) */
    updatedAt: string;
}
/**
 * Parameters for anonymous checkout.
 *
 * The buyer reaches the checkout page without a session token. Merchants may still
 * pre-fill `buyerEmail` and `billingDetail`; omitting them leaves the form blank.
 *
 * Accepts every field of {@link CreateCheckoutSessionParams} — this wrapper simply
 * forwards the params unchanged to `/v1/actions/checkout/create-session`.
 *
 * @example
 * const result = await client.checkout.anonymous.create({
 *   productId: "PROD_xxx",
 *   currency: "USD",
 * });
 * // Redirect to result.checkoutUrl
 */
type AnonymousCheckoutParams = CreateCheckoutSessionParams;
/**
 * Parameters for authenticated checkout.
 *
 * Merges the checkout-session fields ({@link CreateCheckoutSessionParams}) with the
 * extra `buyerIdentity` required by `issue-session-token`. The wrapper splits the
 * input: `buyerIdentity` goes to the token call; everything else (including
 * `buyerEmail`) goes to the create-session call. The two fields are independent.
 *
 * @example
 * const result = await client.checkout.authenticated.create({
 *   productId: "PROD_xxx",
 *   currency: "USD",
 *   buyerIdentity: "user-123",            // merchant-side buyer id (goes into JWT)
 *   buyerEmail: "customer@example.com",   // pre-filled on the checkout page
 * });
 * // Redirect to result.checkoutUrl (includes #token=...)
 */
interface AuthenticatedCheckoutParams extends CreateCheckoutSessionParams {
    /**
     * Buyer identity — sent to `issue-session-token` and encoded into the JWT
     * payload for merchant-side buyer identification. Accepts an email or any
     * merchant-provided identifier string. Use `buyerEmail` to pre-fill the
     * checkout page's email input.
     */
    buyerIdentity: string;
}
/**
 * Result of an authenticated checkout creation.
 *
 * Extends the base session result with the issued token details.
 */
interface AuthenticatedCheckoutResult {
    /** Session ID */
    sessionId: string;
    /** Checkout URL with session token appended as URL fragment (`#token=...`) */
    checkoutUrl: string;
    /** Session expiration time (ISO 8601 UTC) */
    expiresAt: string;
    /** Issued JWT token */
    token: string;
    /** Token expiration time (ISO 8601 UTC) */
    tokenExpiresAt: string;
}
/** Parameters for a GraphQL query. */
interface GraphQLParams {
    /** GraphQL query string */
    query: string;
    /** Query variables */
    variables?: Record<string, unknown>;
}
/**
 * GraphQL response envelope. Same shape as {@link Envelope}, but `errors` entries
 * may additionally carry `locations` and `path` (graphql-js fields). The `layer`
 * field is optional on GraphQL because resolver errors don't carry one.
 */
interface GraphQLResponse<T = Record<string, unknown>> {
    data: T | null;
    errors?: Array<{
        message: string;
        locations?: Array<{
            line: number;
            column: number;
        }>;
        path?: string[];
        aiHint?: string;
        /** Service stage that produced the error ("graphql", "gateway"). Resolver errors omit it. */
        layer?: string;
    }>;
    warnings?: Notice[];
}
/**
 * Webhook event types.
 * @see docs/api-reference/webhooks.mdx
 */
declare enum WebhookEventType {
    /** One-time order first payment succeeded */
    OrderCompleted = "order.completed",
    /** Subscription first payment succeeded (newly activated) */
    SubscriptionActivated = "subscription.activated",
    /** Subscription renewal payment succeeded */
    SubscriptionPaymentSucceeded = "subscription.payment_succeeded",
    /** Buyer initiated cancellation (expires at end of current period) */
    SubscriptionCanceling = "subscription.canceling",
    /** Buyer withdrew cancellation (subscription restored) */
    SubscriptionUncanceled = "subscription.uncanceled",
    /** Subscription product changed (upgrade/downgrade) */
    SubscriptionUpdated = "subscription.updated",
    /** Subscription fully terminated */
    SubscriptionCanceled = "subscription.canceled",
    /** Renewal payment failed (past due) */
    SubscriptionPastDue = "subscription.past_due",
    /** Refund succeeded */
    RefundSucceeded = "refund.succeeded",
    /** Refund failed */
    RefundFailed = "refund.failed"
}
/**
 * Common data fields in a webhook event payload.
 * @see docs/api-reference/webhooks.mdx
 */
interface WebhookEventData {
    orderId: string;
    /** Order status (e.g., "completed", "active", "canceling") */
    orderStatus?: string;
    buyerEmail: string;
    /** Merchant-provided buyer identity from checkout session */
    merchantProvidedBuyerIdentity?: string;
    /** Order business identifier; present on order/payment + refund events (inherited from order) */
    orderMerchantExternalId?: string;
    /** Refund-ticket business identifier; only present on refund.* events */
    refundTicketMerchantExternalId?: string;
    currency: string;
    /** Billing/shipping address (structured object) */
    billingDetail?: Record<string, unknown>;
    /** Order-level metadata from checkout session (flat key-value pairs) */
    orderMetadata?: Record<string, string>;
    /** Amount as display string (e.g., "9.99" for USD, "1000" for JPY) */
    amount: string;
    /** Tax amount as display string (e.g., "0.91" for USD) */
    taxAmount: string;
    /** Tax rate as decimal (e.g., 0.1 for 10%) */
    taxRate?: number;
    /** Tax name (e.g., "Consumption Tax") */
    taxName?: string;
    /** Subtotal as display string (before tax) */
    subtotal?: string;
    /** Total as display string (after tax) */
    total?: string;
    productName: string;
    /** Product description */
    productDescription?: string;
    /** Product-level metadata set when creating/updating the product */
    productMetadata?: Record<string, string>;
    /** Payment ID */
    paymentId?: string;
    /** Payment status (e.g., "succeeded", "failed") */
    paymentStatus?: string;
    /** Payment method type (e.g., "card") */
    paymentMethod?: string;
    /** Last 4 digits of payment instrument */
    paymentLast4?: string;
    /** Payment failure reason (present when payment failed) */
    paymentFailureReason?: string;
    /** Payment date (ISO 8601 date, e.g., "2026-04-18") */
    paymentDate?: string;
    /** Billing period: "weekly", "monthly", "quarterly", "yearly" */
    billingPeriod?: string;
    /** Current billing period start date (ISO 8601, e.g., "2026-04-01") */
    currentPeriodStart?: string;
    /** Current billing period end date (ISO 8601, e.g., "2026-05-01") */
    currentPeriodEnd?: string;
    /** Subscription cancellation timestamp (ISO 8601, present when canceled) */
    canceledAt?: string;
    /** Refund status (e.g., "succeeded", "failed") */
    refundStatus?: string;
    /** Refund reason */
    refundReason?: string;
    /** Refund creation timestamp (ISO 8601) */
    refundCreatedAt?: string;
}
/**
 * Webhook event payload.
 *
 * @see docs/api-reference/webhooks.mdx
 *
 * @example
 * {
 *   id: "550e8400-...",
 *   timestamp: "2026-03-10T08:30:00.000Z",
 *   eventType: "order.completed",
 *   eventId: "PAY_5xK9mRtYvWnPqLsJ3hBfDe",
 *   storeId: "STO_2aUyqjCzEIiEcYMKj7TZtw",
 *   storeName: "My Store",
 *   mode: "prod",
 *   data: { orderId: "...", buyerEmail: "...", currency: "USD", amount: "29.00", taxAmount: "2.90", productName: "Pro Plan", orderMetadata: { planId: "pro" } }
 * }
 */
interface WebhookEvent<T = WebhookEventData> {
    /** Delivery record unique ID (UUID), usable for idempotent deduplication */
    id: string;
    /** Event timestamp (ISO 8601 UTC) */
    timestamp: string;
    /** Event type */
    eventType: `${WebhookEventType}` | (string & {});
    /** Business event ID (e.g. payment ID, order ID) */
    eventId: string;
    /** Store ID the event belongs to */
    storeId: string;
    /** Store name */
    storeName: string;
    /** Environment identifier */
    mode: `${Environment}`;
    /** Event data */
    data: T;
}
/**
 * Webhook public key configuration.
 *
 * - `string` — single key used for both test and prod environments
 * - `{ test?, prod? }` — per-environment keys
 */
type WebhookPublicKeys = string | {
    test?: string;
    prod?: string;
};
/** Options for {@link verifyWebhook}. */
interface VerifyWebhookOptions {
    /**
     * Specify which environment's public key to use for verification.
     * When omitted, both keys are tried automatically (prod first).
     * Ignored when `publicKey` is provided.
     */
    environment?: `${Environment}`;
    /**
     * Timestamp tolerance window in milliseconds for replay protection.
     * Set to 0 to skip timestamp checking.
     * @default 300000 (5 minutes)
     */
    toleranceMs?: number;
    /**
     * Per-call public key override (highest priority).
     * When provided, skips all other key resolution (config, env vars, built-in).
     */
    publicKey?: string;
    /**
     * Config-level public key(s) for the resolution chain.
     * When using `client.webhooks.verify()`, this is set automatically from `WaffoPancakeConfig.webhookPublicKey`.
     * When using the standalone `verifyWebhook()`, you can pass this directly for config-level key injection.
     *
     * Resolution order per environment:
     * 1. `publicKey` (per-call override)
     * 2. `publicKeys[env]` or `publicKeys` (config)
     * 3. `WAFFO_WEBHOOK_{TEST|PROD}_PUBLIC_KEY` (env var)
     * 4. `WAFFO_WEBHOOK_PUBLIC_KEY` (env var)
     * 5. Built-in hardcoded key
     */
    publicKeys?: WebhookPublicKeys;
}

/**
 * Internal HTTP client that auto-signs requests.
 *
 * The transport is intentionally thin: one {@link post} method that signs,
 * sends, and parses the {data, errors?, warnings?} envelope. It does NOT
 * unwrap `data`, throw on `errors[]`, or hide `warnings` — those are policy
 * choices that belong to the resource layer. See handbook
 * `coding-standards/code-style-guide/command-layer.md`.
 *
 * The `X-Merchant-Id` header is sent in `MER_{base62}` format as provided
 * by the user. The gateway decodes it to a raw UUID before forwarding.
 *
 * Not exported publicly — used by resource classes via {@link WaffoPancake}.
 */
declare class HttpClient {
    private readonly merchantId;
    private readonly privateKey;
    private readonly baseUrl;
    private readonly _fetch;
    constructor(config: WaffoPancakeConfig);
    /**
     * Send a signed POST and return the full envelope plus HTTP status.
     *
     * Behavior:
     * - Builds RSA-SHA256 signature (`X-Merchant-Id` / `X-Timestamp` / `X-Signature`)
     * - Attaches `X-Idempotency-Key` (deterministic `sha256(merchantId + path + body)`)
     *   unless `options.noIdempotency` is set
     * - When `options.idempotencyWindow` is set, a floored timestamp is mixed into the
     *   key so identical params produce a new key after the window elapses
     * - Does NOT throw on `errors[]` or non-2xx status — caller inspects the result
     * - Throws {@link WaffoPancakeError} only on transport failures (non-JSON body)
     *
     * @param path - API path (e.g. `/v1/actions/store/create-store`, `/v1/graphql`)
     * @param body - Request body object
     * @param options - Optional settings
     * @returns Parsed envelope with HTTP status
     * @throws {WaffoPancakeError} When the response body is not valid JSON
     */
    post<T>(path: string, body: object, options?: PostOptions): Promise<PostResult<T>>;
}

/** Authentication resource — issue session tokens for buyers. */
declare class AuthResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Issue a session token for a buyer.
     *
     * @param params - Token issuance parameters
     * @returns Issued session token with expiration
     *
     * @example
     * // By store ID
     * const { token, expiresAt } = await client.auth.issueSessionToken({
     *   storeId: "STO_xxx",
     *   buyerIdentity: "customer@example.com",
     * });
     *
     * @example
     * // By product ID (store derived automatically)
     * const { token, expiresAt } = await client.auth.issueSessionToken({
     *   productId: "PROD_xxx",
     *   buyerIdentity: "customer@example.com",
     * });
     */
    issueSessionToken(params: IssueSessionTokenParams): Promise<SessionToken & {
        warnings?: Notice[];
    }>;
}

/**
 * Internal HTTP client for buyer-side requests using Bearer token authentication.
 *
 * Unlike {@link HttpClient} which signs requests with RSA-SHA256 (API Key auth),
 * this client attaches a session token as `Authorization: Bearer <token>` and
 * never sends an idempotency key (buyer session actions are not protected by
 * gateway idempotency in the current architecture).
 *
 * Not exported publicly — used internally by {@link BuyerSession}.
 */
declare class BuyerHttpClient {
    private readonly token;
    private readonly baseUrl;
    private readonly _fetch;
    constructor(token: string, config: Pick<WaffoPancakeConfig, "baseUrl" | "fetch">);
    /**
     * Send a Bearer-authenticated POST and return the full envelope plus HTTP status.
     *
     * Does NOT throw on `errors[]` or non-2xx status — caller inspects the result.
     * Throws {@link WaffoPancakeError} only when the response body is not valid JSON.
     */
    post<T>(path: string, body: object): Promise<PostResult<T>>;
}

/**
 * Buyer session — lets authenticated buyers manage their own orders and subscriptions.
 *
 * Created via `client.buyer(token)` using a session token issued by
 * `client.auth.issueSessionToken()`. All requests use Bearer token authentication.
 *
 * @example
 * const { token } = await client.auth.issueSessionToken({
 *   storeId: "STO_xxx",
 *   buyerIdentity: "customer@example.com",
 * });
 * const buyer = client.buyer(token);
 * await buyer.cancelSubscription({ orderId: "ORD_xxx" });
 */
declare class BuyerSession {
    private readonly http;
    /** GraphQL query access scoped to the buyer's data. */
    readonly graphql: BuyerGraphQL;
    constructor(http: BuyerHttpClient);
    /**
     * Cancel a subscription order.
     *
     * @param params - Order to cancel
     * @returns Order ID and resulting status
     *
     * @example
     * const { orderId, status } = await buyer.cancelSubscription({ orderId: "ORD_xxx" });
     * // status: "canceled" (was pending) or "canceling" (was active)
     */
    cancelSubscription(params: CancelSubscriptionParams): Promise<CancelSubscriptionResult & {
        warnings?: Notice[];
    }>;
    /**
     * Cancel a one-time order (only while payment is still pending).
     *
     * @param params - Order to cancel
     * @returns Order ID and resulting status
     *
     * @example
     * const { orderId, status } = await buyer.cancelOnetimeOrder({ orderId: "ORD_xxx" });
     */
    cancelOnetimeOrder(params: CancelOnetimeOrderParams): Promise<CancelOnetimeOrderResult & {
        warnings?: Notice[];
    }>;
    /**
     * Reactivate a subscription that is in `canceling` status.
     *
     * @param params - Order to reactivate
     * @returns Order ID and resulting status
     *
     * @example
     * const { orderId, status } = await buyer.reactivateSubscription({ orderId: "ORD_xxx" });
     * // status: "active"
     */
    reactivateSubscription(params: ReactivateSubscriptionParams): Promise<ReactivateSubscriptionResult & {
        warnings?: Notice[];
    }>;
    /**
     * Submit a refund request for a payment.
     *
     * @param params - Refund ticket details
     * @returns Created refund ticket
     *
     * @example
     * const { ticket } = await buyer.createRefundTicket({
     *   paymentId: "PAY_xxx",
     *   reason: "Product not as described",
     *   requestedAmount: { amount: "29.00", currency: "USD" },
     *   refundTicketMerchantExternalId: "REF-2026-00891",
     * });
     */
    createRefundTicket(params: CreateRefundTicketParams): Promise<{
        ticket: RefundTicket;
        warnings?: Notice[];
    }>;
    /**
     * Resubmit a previously rejected refund ticket with updated details.
     *
     * @param params - Updated ticket details
     * @returns Updated refund ticket
     *
     * @example
     * const { ticket } = await buyer.resubmitRefundTicket({
     *   ticketId: "TKT_xxx",
     *   paymentId: "PAY_xxx",
     *   reason: "Updated reason with more detail",
     *   requestedAmount: { amount: "29.00", currency: "USD" },
     * });
     */
    resubmitRefundTicket(params: ResubmitRefundTicketParams): Promise<{
        ticket: RefundTicket;
        warnings?: Notice[];
    }>;
}
/**
 * GraphQL access scoped to the buyer's session token.
 */
declare class BuyerGraphQL {
    private readonly http;
    constructor(http: BuyerHttpClient);
    /**
     * Execute a GraphQL query scoped to the buyer's data.
     *
     * @param params - GraphQL query and variables
     * @returns GraphQL response
     *
     * @example
     * const result = await buyer.graphql.query({
     *   query: `query { orders { id status } }`,
     * });
     */
    query<T = Record<string, unknown>>(params: GraphQLParams): Promise<GraphQLResponse<T>>;
}

/**
 * Anonymous checkout — no buyer identity provided.
 *
 * The buyer reaches the checkout page without a session token. Merchants may still
 * pre-fill `buyerEmail` and `billingDetail` on the page by passing them here.
 * Internally creates a checkout session and returns the redirect URL.
 */
declare class CheckoutAnonymousResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Create an anonymous checkout session.
     *
     * @param params - Checkout parameters (no buyer identity required)
     * @returns Session ID, checkout URL, and expiration
     *
     * @example
     * // Minimal — buyer fills everything on the page
     * const result = await client.checkout.anonymous.create({
     *   productId: "PROD_xxx",
     *   currency: "USD",
     * });
     *
     * @example
     * // Pre-fill email + billing + attach business-side order reference
     * const result = await client.checkout.anonymous.create({
     *   productId: "PROD_xxx",
     *   currency: "USD",
     *   buyerEmail: "customer@example.com",
     *   billingDetail: { country: "US", isBusiness: false, postcode: "10001" },
     *   orderMerchantExternalId: "ORDER-2026-00891",
     * });
     */
    create(params: AnonymousCheckoutParams): Promise<CheckoutSessionResult & {
        warnings?: Notice[];
    }>;
}

/**
 * Authenticated checkout — merchant provides buyer identity.
 *
 * Issues a session token, creates a checkout session, and returns a
 * checkout URL with the token appended as a URL fragment (`#token=...`).
 * The checkout page reads the fragment to pre-fill buyer information.
 */
declare class CheckoutAuthenticatedResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Create an authenticated checkout session.
     *
     * Behavior:
     * - Issues a session token via `issue-session-token` (receives `buyerIdentity` + `productId` only)
     * - Creates a checkout session via `create-session` (receives every other field unchanged)
     * - Appends the token to the checkout URL as a URL fragment (`#token=...`)
     *
     * `buyerIdentity` and `buyerEmail` are independent inputs: identity is for the JWT,
     * email is for pre-filling the checkout page. The SDK forwards each to its own endpoint.
     *
     * @param params - Checkout parameters including buyer identity
     * @returns Session details with token-appended checkout URL
     *
     * @example
     * const result = await client.checkout.authenticated.create({
     *   productId: "PROD_xxx",
     *   currency: "USD",
     *   buyerIdentity: "user-123",
     *   buyerEmail: "customer@example.com",
     *   orderMerchantExternalId: "ORDER-2026-00891",
     * });
     * // Redirect to result.checkoutUrl (includes #token=...)
     */
    create(params: AuthenticatedCheckoutParams): Promise<AuthenticatedCheckoutResult & {
        warnings?: Notice[];
    }>;
}

/**
 * Checkout resource — create checkout sessions for payments.
 *
 * Provides two convenience sub-resources for the common checkout flows:
 * - `anonymous` — no buyer identity, empty form
 * - `authenticated` — merchant provides buyer identity, pre-filled form + token
 *
 * The low-level `createSession()` method is still available for full control.
 *
 * @example
 * // Anonymous checkout (no identity)
 * const result = await client.checkout.anonymous.create({
 *   productId: "PROD_xxx",
 *   currency: "USD",
 * });
 *
 * @example
 * // Authenticated checkout (with buyer identity)
 * const result = await client.checkout.authenticated.create({
 *   productId: "PROD_xxx",
 *   currency: "USD",
 *   buyerIdentity: "userIdInYourSystem",
 *   buyerEmail: "customer@example.com",
 * });
 * // result.checkoutUrl includes #token=...
 */
declare class CheckoutResource {
    private readonly http;
    /** Anonymous checkout — no buyer identity, empty form. */
    readonly anonymous: CheckoutAnonymousResource;
    /** Authenticated checkout — merchant provides buyer identity. */
    readonly authenticated: CheckoutAuthenticatedResource;
    constructor(http: HttpClient);
    /**
     * Create a checkout session (low-level). Returns a URL to redirect the customer to.
     *
     * For most use cases, prefer `checkout.anonymous.create()` or
     * `checkout.authenticated.create()` which handle the full flow automatically.
     *
     * @param params - Checkout session parameters
     * @returns Session ID, checkout URL, and expiration
     *
     * @example
     * const session = await client.checkout.createSession({
     *   productId: "PROD_xxx",
     *   currency: "USD",
     *   buyerEmail: "customer@example.com",
     * });
     * // Redirect to session.checkoutUrl
     */
    createSession(params: CreateCheckoutSessionParams): Promise<CheckoutSessionResult & {
        warnings?: Notice[];
    }>;
}

/** GraphQL query resource (Query only, no Mutations). */
declare class GraphQLResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Execute a GraphQL query (Query only, no Mutations).
     *
     * @param params - GraphQL query and optional variables
     * @returns GraphQL response with data and optional errors
     *
     * @example
     * const result = await client.graphql.query<{ stores: Array<{ id: string; name: string }> }>({
     *   query: `query { stores { id name status } }`,
     * });
     * console.log(result.data?.stores);
     *
     * @example
     * const result = await client.graphql.query({
     *   query: `query ($id: ID!) { onetimeProduct(id: $id) { id name prices } }`,
     *   variables: { id: "PROD_xxx" },
     * });
     */
    query<T = Record<string, unknown>>(params: GraphQLParams): Promise<GraphQLResponse<T>>;
}

/** One-time product management resource. */
declare class OnetimeProductsResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Create a one-time product with multi-currency pricing.
     *
     * @param params - Product creation parameters
     * @returns Created product detail
     *
     * @example
     * const { product } = await client.onetimeProducts.create({
     *   storeId: "STO_xxx",
     *   name: "E-Book",
     *   prices: { USD: { amount: "29.00", taxCategory: "digital_goods" } },
     * });
     */
    create(params: CreateOnetimeProductParams): Promise<{
        product: OnetimeProductDetail;
        warnings?: Notice[];
    }>;
    /**
     * Update a one-time product. Creates a new version; skips if unchanged.
     *
     * @param params - Product update parameters (only `id` is required)
     * @returns Updated product detail
     *
     * @example
     * // Update only the name
     * const { product } = await client.onetimeProducts.update({
     *   id: "PROD_xxx",
     *   name: "E-Book v2",
     * });
     *
     * @example
     * // Update prices while preserving other fields
     * const { product } = await client.onetimeProducts.update({
     *   id: "PROD_xxx",
     *   prices: { USD: { amount: "39.00", taxCategory: "digital_goods" } },
     * });
     */
    update(params: UpdateOnetimeProductParams): Promise<{
        product: OnetimeProductDetail;
        warnings?: Notice[];
    }>;
    /**
     * Publish a one-time product's test version to production.
     *
     * @param params - Product to publish
     * @returns Published product detail
     *
     * @example
     * const { product } = await client.onetimeProducts.publish({ id: "PROD_xxx" });
     */
    publish(params: PublishOnetimeProductParams): Promise<{
        product: OnetimeProductDetail;
        warnings?: Notice[];
    }>;
    /**
     * Update a one-time product's status (active/inactive).
     *
     * @param params - Status update parameters
     * @returns Updated product detail
     *
     * @example
     * const { product } = await client.onetimeProducts.updateStatus({
     *   id: "PROD_xxx",
     *   status: ProductVersionStatus.Inactive,
     * });
     */
    updateStatus(params: UpdateOnetimeStatusParams): Promise<{
        product: OnetimeProductDetail;
        warnings?: Notice[];
    }>;
}

/** Order management resource. */
declare class OrdersResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Cancel a subscription order.
     *
     * - pending -> canceled (immediate)
     * - active/trialing -> canceling (PSP cancel, webhook updates later)
     *
     * @param params - Order to cancel
     * @returns Order ID and resulting status
     *
     * @example
     * const { orderId, status } = await client.orders.cancelSubscription({
     *   orderId: "ORD_xxx",
     * });
     * // status: "canceled" or "canceling"
     */
    cancelSubscription(params: CancelSubscriptionParams): Promise<CancelSubscriptionResult & {
        warnings?: Notice[];
    }>;
}

/** Store merchant management resource (coming soon — endpoints return 501). */
declare class StoreMerchantsResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Add a merchant to a store.
     *
     * @param params - Merchant addition parameters
     * @returns Added merchant details
     *
     * @example
     * const result = await client.storeMerchants.add({
     *   storeId: "STO_xxx",
     *   email: "member@example.com",
     *   role: "admin",
     * });
     */
    add(params: AddMerchantParams): Promise<AddMerchantResult & {
        warnings?: Notice[];
    }>;
    /**
     * Remove a merchant from a store.
     *
     * @param params - Merchant removal parameters
     * @returns Removal confirmation
     *
     * @example
     * const result = await client.storeMerchants.remove({
     *   storeId: "STO_xxx",
     *   merchantId: "MER_xxx",
     * });
     */
    remove(params: RemoveMerchantParams): Promise<RemoveMerchantResult & {
        warnings?: Notice[];
    }>;
    /**
     * Update a merchant's role in a store.
     *
     * @param params - Role update parameters
     * @returns Updated role details
     *
     * @example
     * const result = await client.storeMerchants.updateRole({
     *   storeId: "STO_xxx",
     *   merchantId: "MER_xxx",
     *   role: "member",
     * });
     */
    updateRole(params: UpdateRoleParams): Promise<UpdateRoleResult & {
        warnings?: Notice[];
    }>;
}

/** Store management resource — create, update, and delete stores. */
declare class StoresResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Create a new store. Slug is auto-generated from the name.
     *
     * @param params - Store creation parameters
     * @returns Created store entity
     *
     * @example
     * const { store } = await client.stores.create({ name: "My Store" });
     */
    create(params: CreateStoreParams): Promise<{
        store: Store;
        warnings?: Notice[];
    }>;
    /**
     * Update an existing store's settings.
     *
     * Settings objects (`notificationSettings`, `checkoutSettings`) support
     * partial updates: omitted sub-fields keep existing values, `null` clears a
     * field. Pass the entire settings object as `null` to clear all fields.
     *
     * **BREAKING (2026-05)**: the legacy `webhookSettings` parameter is removed.
     * Use `client.webhooks.add / update / remove` to manage webhook endpoints,
     * and query the configured webhook list via GraphQL `Store.storeWebhooks`.
     *
     * @param params - Fields to update (only provided fields are changed)
     * @returns Updated store entity
     *
     * @example
     * // Update name
     * const { store } = await client.stores.update({
     *   id: "STO_xxx",
     *   name: "Updated Name",
     * });
     *
     * @example
     * // Toggle a notification preference
     * const { store } = await client.stores.update({
     *   id: "STO_xxx",
     *   notificationSettings: { emailOrderConfirmation: false },
     * });
     */
    update(params: UpdateStoreParams): Promise<{
        store: Store;
        warnings?: Notice[];
    }>;
    /**
     * Soft-delete a store. Only the owner can delete.
     *
     * @param params - Store to delete
     * @returns Deleted store entity (with `deletedAt` set)
     *
     * @example
     * const { store } = await client.stores.delete({ id: "STO_xxx" });
     */
    delete(params: DeleteStoreParams): Promise<{
        store: Store;
        warnings?: Notice[];
    }>;
}

/** Subscription product group management resource (shared trial, plan switching). */
declare class SubscriptionProductGroupsResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Create a subscription product group for shared-trial or plan switching.
     *
     * @param params - Group creation parameters
     * @returns Created group entity
     *
     * @example
     * const { group } = await client.subscriptionProductGroups.create({
     *   storeId: "STO_xxx",
     *   name: "Pro Plans",
     *   rules: { sharedTrial: true },
     *   productIds: ["PROD_aaa", "PROD_bbb"],
     * });
     */
    create(params: CreateSubscriptionProductGroupParams): Promise<{
        group: SubscriptionProductGroup;
        warnings?: Notice[];
    }>;
    /**
     * Update a subscription product group. `productIds` is a full replacement.
     *
     * @param params - Group update parameters
     * @returns Updated group entity
     *
     * @example
     * const { group } = await client.subscriptionProductGroups.update({
     *   id: "GRP_xxx",
     *   productIds: ["PROD_aaa", "PROD_bbb", "PROD_ccc"],
     * });
     */
    update(params: UpdateSubscriptionProductGroupParams): Promise<{
        group: SubscriptionProductGroup;
        warnings?: Notice[];
    }>;
    /**
     * Hard-delete a subscription product group.
     *
     * @param params - Group to delete
     * @returns Deleted group entity
     *
     * @example
     * const { group } = await client.subscriptionProductGroups.delete({ id: "GRP_xxx" });
     */
    delete(params: DeleteSubscriptionProductGroupParams): Promise<{
        group: SubscriptionProductGroup;
        warnings?: Notice[];
    }>;
    /**
     * Publish a test-environment group to production (upsert).
     *
     * @param params - Group to publish
     * @returns Published group entity
     *
     * @example
     * const { group } = await client.subscriptionProductGroups.publish({ id: "GRP_xxx" });
     */
    publish(params: PublishSubscriptionProductGroupParams): Promise<{
        group: SubscriptionProductGroup;
        warnings?: Notice[];
    }>;
}

/** Subscription product management resource. */
declare class SubscriptionProductsResource {
    private readonly http;
    constructor(http: HttpClient);
    /**
     * Create a subscription product with billing period and multi-currency pricing.
     *
     * @param params - Product creation parameters
     * @returns Created product detail
     *
     * @example
     * const { product } = await client.subscriptionProducts.create({
     *   storeId: "STO_xxx",
     *   name: "Pro Plan",
     *   billingPeriod: "monthly",
     *   prices: { USD: { amount: "9.99", taxCategory: "saas" } },
     * });
     */
    create(params: CreateSubscriptionProductParams): Promise<{
        product: SubscriptionProductDetail;
        warnings?: Notice[];
    }>;
    /**
     * Update a subscription product. Creates a new version; skips if unchanged.
     *
     * @param params - Product update parameters (only `id` is required)
     * @returns Updated product detail
     *
     * @example
     * // Update only the name
     * const { product } = await client.subscriptionProducts.update({
     *   id: "PROD_xxx",
     *   name: "Pro Plan v2",
     * });
     *
     * @example
     * // Update prices and billing period
     * const { product } = await client.subscriptionProducts.update({
     *   id: "PROD_xxx",
     *   billingPeriod: "yearly",
     *   prices: { USD: { amount: "99.00", taxCategory: "saas" } },
     * });
     */
    update(params: UpdateSubscriptionProductParams): Promise<{
        product: SubscriptionProductDetail;
        warnings?: Notice[];
    }>;
    /**
     * Publish a subscription product's test version to production.
     *
     * @param params - Product to publish
     * @returns Published product detail
     *
     * @example
     * const { product } = await client.subscriptionProducts.publish({ id: "PROD_xxx" });
     */
    publish(params: PublishSubscriptionProductParams): Promise<{
        product: SubscriptionProductDetail;
        warnings?: Notice[];
    }>;
    /**
     * Update a subscription product's status (active/inactive).
     *
     * @param params - Status update parameters
     * @returns Updated product detail
     *
     * @example
     * const { product } = await client.subscriptionProducts.updateStatus({
     *   id: "PROD_xxx",
     *   status: ProductVersionStatus.Active,
     * });
     */
    updateStatus(params: UpdateSubscriptionStatusParams): Promise<{
        product: SubscriptionProductDetail;
        warnings?: Notice[];
    }>;
}

/**
 * Webhook resource — manages webhook configurations (HTTP / Feishu / Discord
 * / Telegram / Slack) and verifies inbound webhook signatures.
 *
 * **Mutations only**: `add`, `update`, `remove` all hit POST endpoints.
 * To list a store's webhooks, use GraphQL `Store.storeWebhooks` via
 * `client.graphql.query`.
 *
 * Verification (`verify`) is a local cryptographic operation that does not
 * require API calls.
 */
declare class WebhooksResource {
    private readonly http;
    private readonly publicKeys;
    /**
     * @param http - HTTP client (used for add/update/remove)
     * @param publicKeys - Optional config-level public key(s) from WaffoPancakeConfig
     */
    constructor(http: HttpClient, publicKeys: WebhookPublicKeys | undefined);
    /**
     * Add a webhook endpoint to a store.
     *
     * @param params - Webhook configuration
     * @returns Created webhook entity
     *
     * @example
     * // HTTP webhook (RSA-signed envelope, default)
     * const { webhook } = await client.webhooks.add({
     *   storeId: "STO_xxx",
     *   channel: "http",
     *   url: "https://example.com/webhook",
     *   events: ["order.completed", "refund.succeeded"],
     *   testMode: false,
     * });
     *
     * @example
     * // Discord webhook (uses Discord embed format)
     * await client.webhooks.add({
     *   storeId: "STO_xxx",
     *   channel: "discord",
     *   url: "https://discord.com/api/webhooks/...",
     *   events: ["order.completed"],
     *   testMode: false,
     * });
     *
     * @example
     * // Telegram bot — chat_id goes in `secret`; URL is the bot's sendMessage endpoint
     * await client.webhooks.add({
     *   storeId: "STO_xxx",
     *   channel: "telegram",
     *   url: "https://api.telegram.org/bot123:ABC/sendMessage",
     *   events: ["order.completed"],
     *   testMode: false,
     *   secret: "8737101383",
     * });
     */
    add(params: AddWebhookParams): Promise<{
        webhook: StoreWebhook;
        warnings?: Notice[];
    }>;
    /**
     * Update an existing webhook (only `url`, `events`, and `secret` are mutable).
     *
     * `channel` and `testMode` cannot be changed — remove the webhook and
     * re-add it instead. URL changes must remain on the same channel host
     * whitelist.
     *
     * @param params - Fields to update
     * @returns Updated webhook entity
     *
     * @example
     * await client.webhooks.update({
     *   id: "11111111-2222-3333-4444-555555555555",
     *   events: ["order.completed", "refund.succeeded", "subscription.canceled"],
     * });
     */
    update(params: UpdateWebhookParams): Promise<{
        webhook: StoreWebhook;
        warnings?: Notice[];
    }>;
    /**
     * Hard-delete a webhook. Historical `webhook_deliveries` rows are retained
     * (with `storeWebhookId` set to null) for audit purposes.
     *
     * @param params - Webhook to remove
     * @returns The removed webhook entity (snapshot before deletion)
     *
     * @example
     * await client.webhooks.remove({ id: "11111111-..." });
     */
    remove(params: RemoveWebhookParams): Promise<{
        webhook: StoreWebhook;
        warnings?: Notice[];
    }>;
    /**
     * Verify and parse an incoming webhook event.
     *
     * Key resolution order:
     * 1. `options.publicKey` — per-call override (highest priority)
     * 2. `config.webhookPublicKey[env]` or `config.webhookPublicKey` (string)
     * 3. `WAFFO_WEBHOOK_{TEST|PROD}_PUBLIC_KEY` environment variable
     * 4. `WAFFO_WEBHOOK_PUBLIC_KEY` environment variable
     * 5. Built-in hardcoded key
     *
     * @param payload - Raw request body string (must be unparsed)
     * @param signatureHeader - Value of the `X-Waffo-Signature` header
     * @param options - Verification options (optional)
     * @returns Parsed webhook event
     * @throws Error if signature is invalid, header is malformed, or timestamp is stale
     *
     * @example
     * const event = client.webhooks.verify(rawBody, signatureHeader);
     *
     * @example
     * // Specify environment
     * const event = client.webhooks.verify(rawBody, sig, { environment: "test" });
     *
     * @example
     * // Per-call key override
     * const event = client.webhooks.verify(rawBody, sig, { publicKey: oneOffKey });
     */
    verify<T = Record<string, unknown>>(payload: string, signatureHeader: string | undefined | null, options?: VerifyWebhookOptions): WebhookEvent<T>;
}

/**
 * Waffo Pancake TypeScript SDK client.
 *
 * Uses Merchant API Key (RSA-SHA256) authentication. All requests are
 * automatically signed — no manual header construction needed.
 *
 * @example
 * import { WaffoPancake } from "@waffo/pancake-ts";
 *
 * const client = new WaffoPancake({
 *   merchantId: "MER_2D5F8G3H1K4M6N9P0Q7R8S", // MER_{base62} format
 *   privateKey: process.env.WAFFO_PRIVATE_KEY!,
 * });
 *
 * // Create a store — IDs are returned in {prefix}_{base62} format
 * const { store } = await client.stores.create({ name: "My Store" });
 * // => store.id = "STO_..."
 *
 * // Create a product
 * const { product } = await client.onetimeProducts.create({
 *   storeId: store.id, // "STO_..."
 *   name: "E-Book",
 *   prices: { USD: { amount: "29.00", taxCategory: "digital_goods" } },
 * });
 * // => product.id = "PROD_..."
 *
 * // Create a checkout session
 * const session = await client.checkout.createSession({
 *   productId: product.id,
 *   currency: "USD",
 * });
 * // => redirect customer to session.checkoutUrl
 *
 * // Query data via GraphQL
 * const result = await client.graphql.query({
 *   query: `query { stores { id name status } }`,
 * });
 *
 * @example
 * // Per-environment webhook public keys
 * const client = new WaffoPancake({
 *   merchantId: "...",
 *   privateKey: "...",
 *   webhookPublicKey: {
 *     test: process.env.WAFFO_TEST_PUB_KEY!,
 *     prod: process.env.WAFFO_PROD_PUB_KEY!,
 *   },
 * });
 * const event = client.webhooks.verify(rawBody, signatureHeader);
 */
declare class WaffoPancake {
    private readonly http;
    private readonly config;
    readonly auth: AuthResource;
    readonly stores: StoresResource;
    readonly storeMerchants: StoreMerchantsResource;
    readonly onetimeProducts: OnetimeProductsResource;
    readonly subscriptionProducts: SubscriptionProductsResource;
    readonly subscriptionProductGroups: SubscriptionProductGroupsResource;
    readonly orders: OrdersResource;
    readonly checkout: CheckoutResource;
    readonly graphql: GraphQLResource;
    readonly webhooks: WebhooksResource;
    constructor(config: WaffoPancakeConfig);
    /**
     * Create a buyer session for self-service operations.
     *
     * The returned session uses Bearer token authentication and provides
     * methods for order cancellation, subscription management, refund tickets,
     * and scoped GraphQL queries.
     *
     * @param token - Session token from `client.auth.issueSessionToken()`
     * @returns A buyer session with self-service methods
     *
     * @example
     * const { token } = await client.auth.issueSessionToken({
     *   storeId: "STO_xxx",
     *   buyerIdentity: "customer@example.com",
     * });
     * const buyer = client.buyer(token);
     * await buyer.cancelSubscription({ orderId: "ORD_xxx" });
     */
    buyer(token: string): BuyerSession;
}

/**
 * Error thrown when the API returns a non-success response.
 *
 * @example
 * try {
 *   await client.stores.create({ name: "My Store" });
 * } catch (err) {
 *   if (err instanceof WaffoPancakeError) {
 *     console.log(err.status);        // 400
 *     console.log(err.errors[0]);     // { message: "...", layer: "store" }
 *   }
 * }
 */
declare class WaffoPancakeError extends Error {
    readonly status: number;
    readonly errors: ApiError[];
    constructor(status: number, errors: ApiError[]);
}

/**
 * Verify and parse an incoming Waffo Pancake webhook event.
 *
 * Public key resolution (per environment):
 * 1. `options.publicKey` — per-call override (highest priority, skips all other resolution)
 * 2. `options.publicKeys[env]` or `options.publicKeys` (string) — config-level
 * 3. `WAFFO_WEBHOOK_{TEST|PROD}_PUBLIC_KEY` environment variable
 * 4. `WAFFO_WEBHOOK_PUBLIC_KEY` environment variable
 * 5. Built-in hardcoded key
 *
 * Behavior:
 * - Parses the `X-Waffo-Signature` header (`t=<timestamp>,v1=<base64sig>`)
 * - Builds signature input `${t}.${rawBody}` and verifies with RSA-SHA256
 * - When `environment` is not specified, tries prod key first, then test key
 * - Optional: checks timestamp to prevent replay attacks (default 5-minute tolerance)
 *
 * @param payload - Raw request body string (must be unparsed)
 * @param signatureHeader - Value of the `X-Waffo-Signature` header
 * @param options - Verification options
 * @returns Parsed webhook event
 * @throws Error if header is missing/malformed, signature is invalid, or timestamp is stale
 *
 * @example
 * // Express (use raw body!)
 * app.post("/webhooks", express.raw({ type: "application/json" }), (req, res) => {
 *   try {
 *     const event = verifyWebhook(
 *       req.body.toString("utf-8"),
 *       req.headers["x-waffo-signature"] as string,
 *     );
 *     res.status(200).send("OK");
 *     handleEventAsync(event).catch(console.error);
 *   } catch {
 *     res.status(401).send("Invalid signature");
 *   }
 * });
 *
 * @example
 * // Next.js App Router
 * export async function POST(request: Request) {
 *   const body = await request.text();
 *   const sig = request.headers.get("x-waffo-signature");
 *   const event = verifyWebhook(body, sig);
 *   // handle event ...
 *   return new Response("OK");
 * }
 *
 * @example
 * // Specify environment explicitly
 * const event = verifyWebhook(body, sig, { environment: "prod" });
 *
 * @example
 * // Disable replay protection
 * const event = verifyWebhook(body, sig, { toleranceMs: 0 });
 */
declare function verifyWebhook<T = Record<string, unknown>>(payload: string, signatureHeader: string | undefined | null, options?: VerifyWebhookOptions): WebhookEvent<T>;

export { type AddMerchantParams, type AddMerchantResult, type AddWebhookParams, type AnonymousCheckoutParams, type ApiError, type AuthenticatedCheckoutParams, type AuthenticatedCheckoutResult, type BillingDetail, BillingPeriod, type CancelOnetimeOrderParams, type CancelOnetimeOrderResult, type CancelSubscriptionParams, type CancelSubscriptionResult, type CheckoutSessionResult, type CheckoutSettings, type CheckoutThemeSettings, type CreateCheckoutSessionParams, type CreateOnetimeProductParams, type CreateRefundTicketParams, type CreateStoreParams, type CreateSubscriptionProductGroupParams, type CreateSubscriptionProductParams, type DeleteStoreParams, type DeleteSubscriptionProductGroupParams, EntityStatus, type Envelope, Environment, ErrorLayer, type GraphQLParams, type GraphQLResponse, type GroupRules, type IssueSessionTokenParams, type MediaItem, MediaType, type MerchantWritableNotificationSettings, type Notice, type NotificationSettings, OnetimeOrderStatus, type OnetimeProductDetail, PaymentStatus, type PostResult, type PriceInfo, type Prices, ProductVersionStatus, type PublishOnetimeProductParams, type PublishSubscriptionProductGroupParams, type PublishSubscriptionProductParams, type ReactivateSubscriptionParams, type ReactivateSubscriptionResult, RefundStatus, type RefundTicket, RefundTicketStatus, type RefundTicketVersionData, type RemoveMerchantParams, type RemoveMerchantResult, type RemoveWebhookParams, type RequestedAmount, type ResubmitRefundTicketParams, type SessionToken, type Store, StoreRole, type StoreWebhook, SubscriptionOrderStatus, type SubscriptionProductDetail, type SubscriptionProductGroup, TaxCategory, type UpdateOnetimeProductParams, type UpdateOnetimeStatusParams, type UpdateRoleParams, type UpdateRoleResult, type UpdateStoreParams, type UpdateSubscriptionProductGroupParams, type UpdateSubscriptionProductParams, type UpdateSubscriptionStatusParams, type UpdateWebhookParams, type VerifyWebhookOptions, WaffoPancake, type WaffoPancakeConfig, WaffoPancakeError, type WebhookChannel, type WebhookEvent, type WebhookEventData, WebhookEventType, type WebhookPublicKeys, verifyWebhook };
