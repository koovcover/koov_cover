"use client"

import { useTheme } from "next-themes"
import { useI18n } from "@/contexts/i18n-context"
import { useEffect, useState } from "react"
import { Sun, Moon, Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = {
  es: "Español",
  en: "English",
  "pt-BR": "Português (BR)",
}

export function ThemeLanguageSelector() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useI18n()

  // Prevenir hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="flex items-center gap-2 animate-pulse">
      <div className="w-8 h-8 rounded-full theme-bg-tertiary" />
      <div className="w-8 h-8 rounded-full theme-bg-tertiary" />
    </div>
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 theme-hover rounded-full transition-all duration-300 theme-border border theme-shadow-sm hover:theme-shadow-md"
        aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
        title={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        {theme === "dark" ? 
          <Sun className="size-5 theme-text-accent transition-colors duration-300" /> : 
          <Moon className="size-5 theme-text-accent transition-colors duration-300" />
        }
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="p-2 theme-hover rounded-full transition-all duration-300 theme-border border theme-shadow-sm hover:theme-shadow-md"
            aria-label="Seleccionar idioma"
            title="Cambiar idioma"
          >
            <Globe className="size-5 theme-text-accent transition-colors duration-300" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="theme-bg-card theme-border border theme-shadow-lg">
          <DropdownMenuLabel className="theme-text-primary">Seleccionar idioma</DropdownMenuLabel>
          <DropdownMenuSeparator className="theme-border-light" />
          {Object.entries(languages).map(([code, name]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => setLanguage(code as "es" | "en" | "pt-BR")}
              className={`theme-text-primary transition-colors duration-200 ${
                language === code 
                  ? "theme-bg-tertiary theme-text-accent font-medium" 
                  : "hover:theme-bg-secondary"
              }`}
            >
              {name}
              {language === code && (
                <span className="ml-auto text-xs theme-text-accent">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
