"use client"

import { Shield, Wrench, Package, Building, Clock, Factory } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

export default function Benefits() {
  const { t } = useI18n()

  const benefits = [
    {
      icon: Shield,
      title: t('benefits.weather.title'),
      description: t('benefits.weather.description'),
    },
    {
      icon: Wrench,
      title: t('benefits.maintenance.title'),
      description: t('benefits.maintenance.description'),
    },
    {
      icon: Package,
      title: t('benefits.portability.title'),
      description: t('benefits.portability.description'),
    },
    {
      icon: Building,
      title: t('benefits.storage.title'),
      description: t('benefits.storage.description'),
    },
    {
      icon: Clock,
      title: t('benefits.time.title'),
      description: t('benefits.time.description'),
    },
    {
      icon: Factory,
      title: t('benefits.quality.title'),
      description: t('benefits.quality.description'),
    },
  ]

  return (
    <section id="beneficios" className="section-padding theme-gradient-secondary relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold theme-text-primary mb-4 text-balance">
            {t('benefits.title')}
          </h2>
          <p className="text-lg md:text-xl theme-text-secondary max-w-2xl mx-auto text-pretty">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="theme-gradient-card rounded-2xl p-6 md:p-8 theme-shadow-md hover:theme-shadow-lg hover:scale-105 transition-all duration-300 theme-border border backdrop-blur-sm"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[var(--theme-brand-primary)] rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold theme-text-primary mb-3 md:mb-4 text-balance">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base theme-text-secondary leading-relaxed text-pretty">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
