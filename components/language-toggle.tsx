"use client"

import { Globe } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

export default function LanguageToggle() {
  const { language, setLanguage } = useI18n()

  const toggleLanguage = () => {
    if (language === 'es') {
      setLanguage('en')
    } else if (language === 'en') {
      setLanguage('pt-BR')
    } else {
      setLanguage('es')
    }
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] transition-all duration-200 hover:scale-105"
      aria-label="Cambiar idioma"
    >
      <Globe size={16} className="text-[var(--text-primary)]" />
      <span className="text-sm font-medium text-[var(--text-primary)]">
        {language.toUpperCase()}
      </span>
    </button>
  )
}
