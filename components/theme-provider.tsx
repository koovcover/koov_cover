'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    // Limpiar cualquier tema guardado previamente
    localStorage.removeItem('theme')
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
