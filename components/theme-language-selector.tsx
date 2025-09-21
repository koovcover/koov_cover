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
      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800" />
      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800" />
    </div>
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
      >
        {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Seleccionar idioma"
          >
            <Globe className="size-5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Seleccionar idioma</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.entries(languages).map(([code, name]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => setLanguage(code as "es" | "en" | "pt-BR")}
              className={language === code ? "bg-gray-100 dark:bg-gray-800" : ""}
            >
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
