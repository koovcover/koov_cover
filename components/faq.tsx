"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useI18n } from '@/contexts/i18n-context'

export default function FAQ() {
  const { t } = useI18n()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: t('faq.1.question'),
      answer: t('faq.1.answer'),
    },
    {
      question: t('faq.2.question'),
      answer: t('faq.2.answer'),
    },
    {
      question: t('faq.3.question'),
      answer: t('faq.3.answer'),
    },
    {
      question: t('faq.4.question'),
      answer: t('faq.4.answer'),
    },
    {
      question: t('faq.5.question'),
      answer: t('faq.5.answer'),
    },
    {
      question: t('faq.6.question'),
      answer: t('faq.6.answer'),
    },
  ]

  return (
    <section id="preguntas" className="section-padding bg-[var(--koov-dark-gray)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 text-balance">
            {t('faq.title')}
          </h2>
          <p className="text-lg md:text-xl text-[var(--koov-light-gray)] max-w-2xl mx-auto text-pretty">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--koov-black)] rounded-2xl shadow-sm border border-[var(--koov-gray)] overflow-hidden"
            >
              <button
                className="w-full px-4 md:px-8 py-4 md:py-6 text-left flex items-center justify-between hover:bg-[var(--koov-dark-gray)] transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-base md:text-lg font-semibold text-white pr-4 text-balance">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--koov-light-gray)] transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 md:px-8 pb-4 md:pb-6">
                  <p className="text-sm md:text-base text-[var(--koov-light-gray)] leading-relaxed text-pretty">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
