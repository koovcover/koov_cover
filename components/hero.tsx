"use client"

import { Shield, Zap, Package } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

export default function Hero() {
  const { t } = useI18n()
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=+51949165670&text=${encodeURIComponent(t('whatsapp.message'))}`

  const scrollToBeneficios = () => {
    const element = document.getElementById("beneficios")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="pt-16 section-padding bg-white dark:bg-[var(--koov-black)] relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-gray-900 dark:text-white leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-[var(--koov-electric)] font-medium font-sans">
                {t('hero.tagline')}
              </p>
            </div>

            {/* Benefits bullets */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--koov-electric)] rounded-lg flex items-center justify-center shadow-md">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 font-sans">{t('hero.benefit1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--koov-electric)] rounded-lg flex items-center justify-center shadow-md">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 font-sans">{t('hero.benefit2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--koov-electric)] rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 font-sans">{t('hero.benefit3')}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-12 py-5 font-sans inline-block"
              >
                {t('hero.cta')}
              </a>
              <div>
                <button
                  onClick={scrollToBeneficios}
                  className="text-[var(--koov-electric)] hover:text-gray-900 dark:hover:text-white transition-colors font-medium font-sans ml-6"
                >
                  {t('hero.seeBenefits')} →
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg">
              <img
                src="/Koovcover_en_campo.jpg"
                alt="Motocicleta protegida con KOOV COVER"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-600 backdrop-blur-sm">
              <div className="text-sm font-medium text-gray-900 dark:text-white font-sans">{t('hero.highlight1')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-sans">{t('hero.highlight2')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
