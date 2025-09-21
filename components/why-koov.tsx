"use client"

import { ShieldCheck, DollarSign, Headphones } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

export default function WhyKoov() {
  const { t } = useI18n()
  
  const features = [
    {
      icon: ShieldCheck,
      title: t('why.feature1.title'),
      description: t('why.feature1.description'),
    },
    {
      icon: DollarSign,
      title: t('why.feature2.title'),
      description: t('why.feature2.description'),
    },
    {
      icon: Headphones,
      title: t('why.feature3.title'),
      description: t('why.feature3.description'),
    },
  ]

  return (
    <section className="section-padding theme-bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl theme-text-primary mb-4">
            {t('why.main.title')}
          </h2>
          <p className="text-xl theme-text-secondary mb-8">{t('why.main.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[var(--theme-brand-primary)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 theme-shadow-md group-hover:theme-shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bebas text-2xl theme-text-primary mb-4 transition-colors duration-300">{feature.title}</h3>
                <p className="theme-text-secondary leading-relaxed transition-colors duration-300">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
