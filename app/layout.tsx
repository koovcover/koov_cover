import type React from "react"
import type { Viewport } from 'next'
import { Montserrat, Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/contexts/i18n-context"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bebas",
})

export const metadata = {
  title: "KOOV COVER | Garaje Portátil Plegable para Motos - Fabricado en Perú",
  description:
    "Protege tu moto del sol, lluvia y polvo con KOOV COVER. Garaje portátil plegable fabricado en Perú. Ideal para espacios sin cochera. Instalación rápida en 5 minutos. ¡Cotiza gratis por WhatsApp!",
  keywords:
    "garaje portátil, protector moto, cochera plegable, KOOV COVER, fabricado Perú, protección moto, garaje móvil",
  authors: [{ name: "KOOV COVER" }],
  creator: "KOOV COVER",
  publisher: "KOOV COVER",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://koovcover.com",
    siteName: "KOOV COVER",
    title: "KOOV COVER | Garaje Portátil Plegable para Motos - Fabricado en Perú",
    description:
      "Protege tu moto del sol, lluvia y polvo con KOOV COVER. Garaje portátil plegable fabricado en Perú. Ideal para espacios sin cochera. ¡Cotiza gratis!",
    images: [
      {
        url: "/koov_cover.jpg",
        width: 1200,
        height: 630,
        alt: "KOOV COVER - Garaje portátil plegable para motocicletas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@koovcover",
    creator: "@koovcover",
    title: "KOOV COVER | Garaje Portátil Plegable para Motos - Fabricado en Perú",
    description:
      "Protege tu moto del sol, lluvia y polvo con KOOV COVER. Garaje portátil plegable fabricado en Perú. ¡Cotiza gratis por WhatsApp!",
    images: ["/koov_cover.jpg"],
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E40AF"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} ${bebasNeue.variable} antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/logo_koov_cover.svg" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
