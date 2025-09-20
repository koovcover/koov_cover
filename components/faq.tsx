"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Protege contra lluvia intensa y polvo fino?",
      answer:
        "Sí, KOOV COVER está diseñado con materiales impermeables de alta calidad que protegen completamente contra lluvia intensa, polvo fino y rayos UV. Su diseño hermético garantiza que tu moto permanezca completamente seca y limpia.",
    },
    {
      question: "¿Cuánto tiempo toma desplegarlo?",
      answer:
        "El proceso de despliegue toma entre 3 a 5 minutos. Gracias a su diseño intuitivo y sistema de plegado optimizado, cualquier persona puede armarlo rápidamente sin necesidad de herramientas especiales o experiencia previa.",
    },
    {
      question: "¿Necesita instalación fija?",
      answer:
        "No, KOOV COVER es completamente portátil. No requiere instalación permanente, tornillos o modificaciones en el suelo. Puedes moverlo fácilmente a cualquier ubicación según tus necesidades.",
    },
    {
      question: "¿Sirve para espacios reducidos?",
      answer:
        "Absolutamente. KOOV COVER está especialmente diseñado para espacios urbanos limitados como patios pequeños, azoteas, estacionamientos de departamentos y áreas compactas donde las cocheras tradicionales no son viables.",
    },
    {
      question: "¿Cómo se limpia y mantiene?",
      answer:
        "El mantenimiento es muy sencillo. Solo necesitas limpiar la superficie con agua y jabón suave ocasionalmente. Los materiales son resistentes a la intemperie y no requieren tratamientos especiales o mantenimiento complejo.",
    },
    {
      question: "¿Hacen envíos a todo el Perú?",
      answer:
        "Sí, realizamos envíos a nivel nacional. Contamos con cobertura en todas las principales ciudades del Perú. Los tiempos de entrega varían según la ubicación, pero generalmente oscilan entre 2 a 7 días hábiles.",
    },
  ]

  return (
    <section id="preguntas" className="section-padding bg-[var(--koov-dark-gray)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 text-balance">
            Preguntas frecuentes
          </h2>
          <p className="text-lg md:text-xl text-[var(--koov-light-gray)] max-w-2xl mx-auto text-pretty">
            Resolvemos las dudas más comunes sobre KOOV COVER
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
