// lib/i18n/config.ts — locale registry (fleet v1.3).
// ★ PER-PRODUCT: SITE_URL + COOKIE_NAME only.

export type Lang =
  | 'en'
  | 'da'
  | 'de'
  | 'es'
  | 'fr'
  | 'it'
  | 'nl'
  | 'pt-BR'
  | 'pt-PT'
  | 'zh'

export const DEFAULT_LOCALE: Lang = 'en'

export const LOCALES: Lang[] = [
  'en',
  'da',
  'de',
  'es',
  'fr',
  'it',
  'nl',
  'pt-BR',
  'pt-PT',
  'zh',
]

export interface LocaleMeta {
  code: Lang
  englishName: string
  nativeName: string
  switcherLabel: string
  dir: 'ltr' | 'rtl'
  hrefLang: string
  intlLocale: string
}

export const LOCALE_META: Record<Lang, LocaleMeta> = {
  en: { code: 'en', englishName: 'English', nativeName: 'English', switcherLabel: 'ENGLISH', dir: 'ltr', hrefLang: 'en', intlLocale: 'en' },
  da: { code: 'da', englishName: 'Danish', nativeName: 'Dansk', switcherLabel: 'DANSK', dir: 'ltr', hrefLang: 'da', intlLocale: 'da' },
  de: { code: 'de', englishName: 'German', nativeName: 'Deutsch', switcherLabel: 'DEUTSCH', dir: 'ltr', hrefLang: 'de', intlLocale: 'de' },
  es: { code: 'es', englishName: 'Spanish', nativeName: 'Español', switcherLabel: 'ESPAÑOL', dir: 'ltr', hrefLang: 'es', intlLocale: 'es' },
  fr: { code: 'fr', englishName: 'French', nativeName: 'Français', switcherLabel: 'FRANÇAIS', dir: 'ltr', hrefLang: 'fr', intlLocale: 'fr' },
  it: { code: 'it', englishName: 'Italian', nativeName: 'Italiano', switcherLabel: 'ITALIANO', dir: 'ltr', hrefLang: 'it', intlLocale: 'it' },
  nl: { code: 'nl', englishName: 'Dutch', nativeName: 'Nederlands', switcherLabel: 'NEDERLANDS', dir: 'ltr', hrefLang: 'nl', intlLocale: 'nl' },
  'pt-BR': { code: 'pt-BR', englishName: 'Portuguese (Brazil)', nativeName: 'Português (BR)', switcherLabel: 'PORTUGUÊS (BR)', dir: 'ltr', hrefLang: 'pt-BR', intlLocale: 'pt-BR' },
  'pt-PT': { code: 'pt-PT', englishName: 'Portuguese (Portugal)', nativeName: 'Português (PT)', switcherLabel: 'PORTUGUÊS (PT)', dir: 'ltr', hrefLang: 'pt-PT', intlLocale: 'pt-PT' },
  zh: { code: 'zh', englishName: 'Chinese', nativeName: '中文', switcherLabel: '中文', dir: 'ltr', hrefLang: 'zh', intlLocale: 'zh-CN' },
}

export const COOKIE_NAME = 'agentcost_locale'
export const SITE_URL = 'https://agentcost.lxsaihub.com'
export const I18N_PROGRESSIVE = true as const
