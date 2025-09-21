"use client"

import { MapPin, Wrench, Shield, Anchor, RotateCcw, CheckCircle } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

export default function HowItWorks() {
  const { t } = useI18n()

  const steps = [
    {
      icon: MapPin,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
    },
    {
      icon: Wrench,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
    },
    {
      icon: Shield,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
    },
    {
      icon: Anchor,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
    },
    {
      icon: RotateCcw,
      title: t('howItWorks.step5.title'),
      description: t('howItWorks.step5.description'),
    },
    {
      icon: CheckCircle,
      title: t('howItWorks.step6.title'),
      description: t('howItWorks.step6.description'),
    },
  ]

  return (
    <section id="como-funciona" className="section-padding bg-[var(--koov-dark-gray)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-[var(--koov-light-gray)] max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="w-16 h-16 bg-[var(--koov-electric)] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-[var(--koov-black)] rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-[var(--koov-electric)]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-[var(--koov-light-gray)] leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Visual demonstration */}
        {/* <div className="mt-16 bg-black rounded-2xl p-8 shadow-lg">
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800">
            <img
              src="/koov-cover-installation-steps.png"
              alt="Proceso de instalación paso a paso de KOOV COVER"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}
