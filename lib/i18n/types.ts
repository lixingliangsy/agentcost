// lib/i18n/types.ts — message catalog type.
//
// A catalog is a nested map of strings. Keep the SHAPE identical across every
// locale file (en.ts is the reference). The translator's t('a.b.c') walks the
// path; missing keys fall back to English, then to the key path (so gaps are
// visible in dev, never a blank string).

export type Messages = { [key: string]: string | Messages }

/** Helper so each locales/X.ts file gets type-checking against the en shape. */
export type Catalog = Messages
