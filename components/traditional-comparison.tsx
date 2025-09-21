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
    <section className="section-padding bg-[var(--koov-graphite)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-[var(--koov-light)] mb-8 max-w-3xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        {/* Header de la tabla de comparación */}
        <div className="bg-[var(--koov-carbon)] rounded-t-2xl overflow-hidden mb-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="bg-[var(--koov-carbon)] p-6 border-r border-[var(--koov-graphite)]">
              <h3 className="font-bebas text-lg text-[var(--koov-electric)]">{t('comparison.situation')}</h3>
            </div>
            <div className="bg-red-900/30 p-6 border-r border-[var(--koov-graphite)]">
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-red-400" />
                <h3 className="font-bebas text-lg text-white">{t('comparison.traditional')}</h3>
              </div>
            </div>
            <div className="bg-[var(--koov-electric)]/20 p-6 border-r border-[var(--koov-graphite)]">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[var(--koov-electric)]" />
                <h3 className="font-bebas text-lg text-white">{t('comparison.koov')}</h3>
              </div>
            </div>
            <div className="bg-[var(--koov-carbon)] p-6">
              <h3 className="font-bebas text-lg text-[var(--koov-lime)]">{t('comparison.benefit')}</h3>
            </div>
          </div>
        </div>

        {/* Filas de comparación */}
        <div className="bg-[var(--koov-carbon)] rounded-b-2xl overflow-hidden border-t border-[var(--koov-graphite)]">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon
            return (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-4 gap-0 ${index !== scenarios.length - 1 ? 'border-b border-[var(--koov-graphite)]' : ''}`}>
                {/* Situación */}
                <div className="p-6 border-r border-[var(--koov-graphite)]">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-[var(--koov-electric)]" />
                    <span className="font-medium text-white text-sm">{scenario.title}</span>
                  </div>
                </div>
                
                {/* Protector Tradicional */}
                <div className="p-6 border-r border-[var(--koov-graphite)] bg-red-900/10">
                  <p className="text-red-200 text-sm leading-relaxed">{scenario.traditional}</p>
                </div>
                
                {/* KOOV COVER */}
                <div className="p-6 border-r border-[var(--koov-graphite)] bg-[var(--koov-electric)]/10">
                  <p className="text-white text-sm leading-relaxed">{scenario.koov}</p>
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
        <div className="mt-12 bg-gradient-to-r from-[var(--koov-electric)] to-blue-600 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="font-bebas text-3xl text-white mb-4">
              {t('comparison.conclusion.title')}
            </h3>
            <p className="text-xl text-white mb-6">
              {t('comparison.conclusion.subtitle')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bebas text-2xl text-white">{t('comparison.stats.time')}</div>
                <div className="text-white/80 text-sm">{t('comparison.stats.time.desc')}</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bebas text-2xl text-white">{t('comparison.stats.life')}</div>
                <div className="text-white/80 text-sm">{t('comparison.stats.life.desc')}</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bebas text-2xl text-white">{t('comparison.stats.hassle')}</div>
                <div className="text-white/80 text-sm">{t('comparison.stats.hassle.desc')}</div>
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
