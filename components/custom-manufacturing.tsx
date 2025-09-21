"use client"

import { Ruler, Wrench, CheckCircle } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

export default function CustomManufacturing() {
  const { t } = useI18n()
  
  return (
    <section id="fabricacion-medida" className="py-20 theme-bg-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold theme-text-primary mb-6">
            {t('manufacturing.title')}
          </h2>
          <p className="text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t('manufacturing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual representation */}
          <div className="relative">
            <div className="theme-bg-card rounded-2xl p-8 theme-shadow-lg theme-border border">
              <h3 className="text-2xl font-bold theme-text-primary mb-6 text-center">{t('manufacturing.sizes.title')}</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg theme-border-light border">
                  <div>
                    <h4 className="font-semibold theme-text-primary">{t('manufacturing.sizes.small.title')}</h4>
                    <p className="theme-text-secondary text-sm">
                      {t('manufacturing.sizes.small.description')}
                    </p>
                  </div>
                  <CheckCircle className="text-green-500" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg theme-border-light border">
                  <div>
                    <h4 className="font-semibold theme-text-primary">{t('manufacturing.sizes.medium.title')}</h4>
                    <p className="theme-text-secondary text-sm">
                      {t('manufacturing.sizes.medium.description')}
                    </p>
                  </div>
                  <CheckCircle className="text-green-500" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg theme-border-light border">
                  <div>
                    <h4 className="font-semibold theme-text-primary">{t('manufacturing.sizes.large.title')}</h4>
                    <p className="theme-text-secondary text-sm">
                      {t('manufacturing.sizes.large.description')}
                    </p>
                  </div>
                  <CheckCircle className="text-green-500" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-lg theme-border-light border">
                  <div>
                    <h4 className="font-semibold theme-text-primary">{t('manufacturing.sizes.custom.title')}</h4>
                    <p className="theme-text-secondary text-sm">
                      {t('manufacturing.sizes.custom.description')}
                    </p>
                  </div>
                  <CheckCircle className="text-green-500" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--theme-brand-primary)] rounded-lg flex items-center justify-center theme-shadow-md">
                <Ruler className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">{t('manufacturing.features.measurements.title')}</h3>
                <p className="theme-text-secondary leading-relaxed">
                  {t('manufacturing.features.measurements.description')}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--theme-brand-primary)] rounded-lg flex items-center justify-center theme-shadow-md">
                <Wrench className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">{t('manufacturing.features.custom.title')}</h3>
                <p className="theme-text-secondary leading-relaxed">
                  {t('manufacturing.features.custom.description')}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--theme-brand-primary)] rounded-lg flex items-center justify-center theme-shadow-md">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">{t('manufacturing.features.quality.title')}</h3>
                <p className="theme-text-secondary leading-relaxed">
                  {t('manufacturing.features.quality.description')}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href={`https://api.whatsapp.com/send/?phone=+51949165670&text=${encodeURIComponent(t('whatsapp.custom'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                {t('manufacturing.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}