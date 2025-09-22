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
  title: "KOOV COVER - Garaje Portátil Plegable para Motos - Fabricado en Perú",
  description: "Protege tu moto del sol, lluvia y polvo con KOOV COVER. Garaje portátil plegable fabricado en Perú. Instalación rápida en 5 minutos. Ideal para espacios sin cochera. Consulta precios y cotiza gratis por WhatsApp.",
  authors: [{ name: "KOOV COVER Team" }],
  creator: "KOOV COVER",
  publisher: "KOOV COVER",
  copyright: "© 2025 KOOV COVER",
  robots: "index, follow",
  keywords: "KOOV COVER, koov cover precio, koov cover peru, garaje portátil moto, protector moto, cochera plegable, garaje móvil motocicleta, protección moto lluvia, carpa moto plegable, garage portátil Lima, protector solar moto, cochera temporal moto, fabricado en Perú, garaje desmontable",
  openGraph: {
    siteName: "KOOV COVER",
    title: "KOOV COVER - Garaje Portátil Plegable para Motos",
    description: "Protege tu moto con KOOV COVER y viaja con tranquilidad. Garaje portátil fabricado en Perú. Consulta precios y cotiza gratis.",
    image: "/assets/logo_koov_cover.svg",
    imageWidth: 1200,
    imageHeight: 630,
    url: "https://koovcover.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOOV COVER - Garaje Portátil para Motos en Perú",
    description: "Protege tu moto con KOOV COVER. Garaje portátil plegable fabricado en Perú.",
    image: "/assets/logo_koov_cover.svg",
  },
  other: {
    "geo.region": "PE",
    "geo.placename": "Lima, Peru",
  }
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
      lang="es-PE"
      className={`${montserrat.variable} ${inter.variable} ${bebasNeue.variable} antialiased scroll-smooth`}
    >
      <head>
        {/* Configuración de compatibilidad */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Favicon */}
        <link rel="icon" href="/assets/logo_koov_cover.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo_koov_cover.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "KOOV COVER",
              "description": "Protege tu moto del sol, lluvia y polvo con KOOV COVER. Garaje portátil plegable fabricado en Perú. Instalación rápida y fácil para espacios sin cochera.",
              "url": "https://koovcover.com/",
              "image": "https://koovcover.com/publicidad_koov_cover.png",
              "brand": {
                "@type": "Brand",
                "name": "KOOV COVER",
                "url": "https://koovcover.com/",
                "logo": "https://koovcover.com/assets/logo_koov_cover.svg"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "PEN",
                "price": "Desde 299",
                "url": "https://koovcover.com/"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "KOOV COVER",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "PE",
                  "addressLocality": "Lima"
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+51949165670",
                "contactType": "customer service",
                "areaServed": "PE",
                "availableLanguage": ["Spanish", "English"]
              }
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
