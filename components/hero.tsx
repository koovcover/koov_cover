"use client"

import { Shield, Zap, Package } from "lucide-react"

export default function Hero() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=+51949165670&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+KOOV+COVER"

  const scrollToBeneficios = () => {
    const element = document.getElementById("beneficios")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="pt-16 section-padding bg-[var(--koov-carbon)] relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(18,18,18,0.35), rgba(18,18,18,0.8)), url('/koovcover_en_vereda.png')`,
      }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-[var(--koov-white)] leading-tight">
                Tu moto siempre limpia y protegida
              </h1>
              <p className="text-xl text-[var(--koov-light)] leading-relaxed font-sans">
                Garaje portátil plegable que cuida tu moto del sol, la lluvia y el polvo.
              </p>
              <p className="text-lg text-[var(--koov-electric)] font-medium font-sans">
                Diseñado en Perú para proteger tu moto en cualquier lugar
              </p>
            </div>

            {/* Benefits bullets */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--koov-electric)] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[var(--koov-carbon)]" />
                </div>
                <span className="font-medium text-[var(--koov-white)] font-sans">Rápido de usar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--koov-electric)] rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-[var(--koov-carbon)]" />
                </div>
                <span className="font-medium text-[var(--koov-white)] font-sans">Diseño portátil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--koov-electric)] rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[var(--koov-carbon)]" />
                </div>
                <span className="font-medium text-[var(--koov-white)] font-sans">Protección total</span>
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
                Protege tu moto ahora
              </a>
              <div>
                <button
                  onClick={scrollToBeneficios}
                  className="text-[var(--koov-electric)] hover:text-[var(--koov-white)] transition-colors font-medium font-sans ml-6"
                >
                  Ver beneficios →
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--koov-graphite)] to-[var(--koov-carbon)] border border-[var(--koov-graphite)]">
              <img
                src="/Koovcover_en_campo.jpg"
                alt="Motocicleta protegida con KOOV COVER"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[var(--koov-light)] rounded-xl p-4 shadow-lg border border-[var(--koov-graphite)]">
              <div className="text-sm font-medium text-[var(--koov-carbon)] font-sans">Primer garaje</div>
              <div className="text-sm text-[var(--koov-graphite)] font-sans">portátil plegable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
