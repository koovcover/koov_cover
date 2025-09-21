"use client"

import { Ruler, Wrench, CheckCircle } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

export default function CustomManufacturing() {
  const { t } = useI18n()
  
  return (
    <section id="fabricacion-medida" className="py-20 bg-[var(--koov-black)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t('manufacturing.title')}
          </h2>
          <p className="text-xl text-[var(--koov-light-gray)] max-w-3xl mx-auto leading-relaxed">
            {t('manufacturing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual representation */}
          <div className="relative">
            <div className="bg-[var(--koov-dark-gray)] rounded-2xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('manufacturing.sizes.title')}</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-lg border border-blue-800/30">
                  <div>
                    <h4 className="font-semibold text-white">{t('manufacturing.sizes.small.title')}</h4>
                    <p className="text-[var(--koov-light-gray)] text-sm">
                      {t('manufacturing.sizes.small.description')}
                    </p>
                  </div>
                  <CheckCircle className="text-green-400" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-lg border border-blue-800/30">
                  <div>
                    <h4 className="font-semibold text-white">{t('manufacturing.sizes.medium.title')}</h4>
                    <p className="text-[var(--koov-light-gray)] text-sm">
                      {t('manufacturing.sizes.medium.description')}
                    </p>
                  </div>
                  <CheckCircle className="text-green-400" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-lg border border-blue-800/30">
                  <div>
                    <h4 className="font-semibold text-white">{t('manufacturing.sizes.large.title')}</h4>
                    <p className="text-[var(--koov-light-gray)] text-sm">
                      {t('manufacturing.sizes.large.description')}
                    </p>
                  </div>
                  <CheckCircle className="text-green-400" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-900/30 rounded-lg border border-green-800/30">
                  <div>
                    <h4 className="font-semibold text-white">{t('manufacturing.sizes.custom.title')}</h4>
                    <p className="text-[var(--koov-light-gray)] text-sm">
                      {t('manufacturing.sizes.custom.description')}
                    </p>
                  </div>
                  <CheckCircle className="text-green-400" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--koov-blue)] rounded-lg flex items-center justify-center">
                <Ruler className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t('manufacturing.features.measurements.title')}</h3>
                <p className="text-[var(--koov-light-gray)] leading-relaxed">
                  {t('manufacturing.features.measurements.description')}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--koov-blue)] rounded-lg flex items-center justify-center">
                <Wrench className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t('manufacturing.features.custom.title')}</h3>
                <p className="text-[var(--koov-light-gray)] leading-relaxed">
                  {t('manufacturing.features.custom.description')}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--koov-blue)] rounded-lg flex items-center justify-center">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t('manufacturing.features.quality.title')}</h3>
                <p className="text-[var(--koov-light-gray)] leading-relaxed">
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