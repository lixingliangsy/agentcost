// components/LanguageSwitcher.tsx — vertical uppercase language list (fleet v1.3).
//
// UI mode: button + panel (not native <select>), screenshot-style vertical list.
// Labels from LOCALE_META.switcherLabel (ENGLISH / DANSK / … / 中文).
// Brand accent #4f46e5 = fleet standard (AGENTS.md §14.2) — do not copy competitor purple fills.
// Persists cookie and re-navigates so _app re-reads cookie and <html lang> SSR-updates.

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useT } from '../lib/i18n/provider'
import { LOCALES, LOCALE_META, Lang } from '../lib/i18n/config'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useT()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  function pick(next: Lang) {
    if (next === locale) {
      setOpen(false)
      return
    }
    setLocale(next)
    setOpen(false)
    // Re-run SSR with the new cookie so <html lang> is correct.
    router.replace(router.asPath, undefined, { scroll: false })
  }

  const current = LOCALE_META[locale]

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold tracking-wide text-slate-700 hover:border-[#4f46e5] hover:text-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
        </svg>
        <span>{current.switcherLabel}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute end-0 z-50 mt-1 max-h-80 min-w-[11rem] overflow-auto rounded-md border border-slate-200 bg-white py-1 shadow-lg"
        >
          {LOCALES.map((l) => {
            const meta = LOCALE_META[l]
            const active = l === locale
            return (
              <li key={l} role="option" aria-selected={active}>
                <button
                  type="button"
                  className={`block w-full px-3 py-2 text-left text-xs font-semibold tracking-wide ${
                    active
                      ? 'bg-[#4f46e5] text-white'
                      : 'text-slate-700 hover:bg-indigo-50 hover:text-[#4f46e5]'
                  }`}
                  onClick={() => pick(l)}
                >
                  {meta.switcherLabel}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
