// lib/i18n/provider.tsx — React context + useT() hook (SSR-safe).
//
// The provider is mounted once in _app with the server-detected initialLocale.
// setLocale() persists a cookie and updates <html lang/dir> immediately, then
// the LanguageSwitcher triggers a client navigation so _app re-reads the cookie
// and re-renders with the correct <html lang>.

import React, { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react'
import { Lang, DEFAULT_LOCALE, COOKIE_NAME, LOCALE_META } from './config'
import { createTranslator, Translator } from './index'

interface I18nValue extends Translator {
  locale: Lang
  dir: 'ltr' | 'rtl'
  setLocale: (l: Lang) => void
}

const I18nCtx = createContext<I18nValue | null>(null)

function writeLocaleCookie(l: Lang) {
  if (typeof document === 'undefined') return
  // encodeURIComponent so regional codes like pt-BR survive cookie round-trips.
  // Host-only (no Domain=) so *.lxsaihub.com cookies stay on the product host.
  // Secure on HTTPS so production browsers accept after SameSite=Lax.
  const secure =
    typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(l)}; path=/; max-age=31536000; SameSite=Lax${secure}`
  document.documentElement.lang = l
  document.documentElement.dir = LOCALE_META[l].dir
}

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Lang
  children: React.ReactNode
}) {
  const [locale, setLocaleState] = useState<Lang>(initialLocale)
  const translator = useMemo(() => createTranslator(locale), [locale])

  // Keep CSR state aligned when App.getInitialProps re-detects after navigation.
  useEffect(() => {
    setLocaleState(initialLocale)
  }, [initialLocale])

  const setLocale = useCallback((l: Lang) => {
    setLocaleState(l)
    writeLocaleCookie(l)
  }, [])

  const value = useMemo<I18nValue>(
    () => ({ ...translator, locale, dir: LOCALE_META[locale].dir, setLocale }),
    [translator, locale, setLocale],
  )

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}

export function useT(): I18nValue {
  const v = useContext(I18nCtx)
  if (!v) {
    // Defensive fallback (should never happen inside the provider).
    const fb = createTranslator(DEFAULT_LOCALE)
    return { ...fb, locale: DEFAULT_LOCALE, dir: 'ltr', setLocale: () => {} }
  }
  return v
}
