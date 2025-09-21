"use client"

import { Check, X, Clock, Droplets, Sparkles, Zap } from "lucide-react"
import { useI18n } from '@/contexts/i18n-context'

export default function TraditionalComparison() {
  const { t } = useI18n()
  
  const scenarios = [
    {
      title: t('comparison.morning.title'),
      icon: Clock,
      traditional: t('comparison.morning.traditional'),
      koov: t('comparison.morning.koov'),
      impact: t('comparison.morning.impact')
    },
    {
      title: t('comparison.weather.title'),
      icon: Droplets,
      traditional: t('comparison.weather.traditional'),
      koov: t('comparison.weather.koov'),
      impact: t('comparison.weather.impact')
    },
    {
      title: t('comparison.maintenance.title'),
      icon: Sparkles,
      traditional: t('comparison.maintenance.traditional'),
      koov: t('comparison.maintenance.koov'),
      impact: t('comparison.maintenance.impact')
    },
    {
      title: t('comparison.daily.title'),
      icon: Zap,
      traditional: t('comparison.daily.traditional'),
      koov: t('comparison.daily.koov'),
      impact: t('comparison.daily.impact')
    }
  ]

  return (
    <section className="section-padding theme-bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl theme-text-primary mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-xl theme-text-secondary mb-8 max-w-3xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        {/* Header de la tabla de comparación */}
        <div className="theme-gradient-card rounded-t-2xl overflow-hidden mb-0 theme-shadow-lg theme-border border backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="theme-gradient-subtle p-6 theme-border-light border-r">
              <h3 className="font-bebas text-lg theme-text-accent">{t('comparison.situation')}</h3>
            </div>
            <div className="bg-red-500/10 p-6 theme-border-light border-r">
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                <h3 className="font-bebas text-lg theme-text-primary">{t('comparison.traditional')}</h3>
              </div>
            </div>
            <div className="bg-blue-500/10 p-6 theme-border-light border-r">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 theme-text-accent" />
                <h3 className="font-bebas text-lg theme-text-primary">{t('comparison.koov')}</h3>
              </div>
            </div>
            <div className="theme-gradient-subtle p-6">
              <h3 className="font-bebas text-lg text-[var(--koov-lime)]">{t('comparison.benefit')}</h3>
            </div>
          </div>
        </div>

        {/* Filas de comparación */}
        <div className="theme-gradient-card rounded-b-2xl overflow-hidden theme-border-light border-t theme-shadow-lg backdrop-blur-sm">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon
            return (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-4 gap-0 ${index !== scenarios.length - 1 ? 'theme-border-light border-b' : ''}`}>
                {/* Situación */}
                <div className="p-6 theme-border-light border-r">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 theme-text-accent" />
                    <span className="font-medium theme-text-primary text-sm">{scenario.title}</span>
                  </div>
                </div>
                
                {/* Protector Tradicional */}
                <div className="p-6 theme-border-light border-r bg-red-500/5">
                  <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed">{scenario.traditional}</p>
                </div>
                
                {/* KOOV COVER */}
                <div className="p-6 theme-border-light border-r bg-blue-500/5">
                  <p className="theme-text-primary text-sm leading-relaxed">{scenario.koov}</p>
                </div>
                
                {/* Beneficio */}
                <div className="p-6">
                  <p className="text-[var(--koov-lime)] text-sm font-medium leading-relaxed">{scenario.impact}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Resumen final */}
        <div className="mt-12 bg-gradient-to-r from-[var(--theme-brand-primary)] to-blue-600 rounded-2xl p-8 theme-shadow-lg">
          <div className="text-center">
            <h3 className="font-bebas text-3xl text-white mb-4">
              {t('comparison.conclusion.title')}
            </h3>
            <p className="text-xl text-white mb-6">
              {t('comparison.conclusion.subtitle')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="font-bebas text-2xl text-white">{t('comparison.stats.time')}</div>
                <div className="text-white/90 text-sm">{t('comparison.stats.time.desc')}</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="font-bebas text-2xl text-white">{t('comparison.stats.life')}</div>
                <div className="text-white/90 text-sm">{t('comparison.stats.life.desc')}</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="font-bebas text-2xl text-white">{t('comparison.stats.hassle')}</div>
                <div className="text-white/90 text-sm">{t('comparison.stats.hassle.desc')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA de la sección */}
        <div className="text-center mt-12">
          <a
            href={`https://api.whatsapp.com/send/?phone=+51949165670&text=${encodeURIComponent(t('whatsapp.message'))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 font-sans"
          >
            {t('comparison.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
