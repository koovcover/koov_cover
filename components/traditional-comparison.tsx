import { Check, X, Clock, Droplets, Sparkles, Zap } from "lucide-react"

export default function TraditionalComparison() {
  const scenarios = [
    {
      title: "Experiencia matutina (prisa)",
      icon: Clock,
      traditional: "Quitar funda, doblar, ensuciar manos, buscar dónde dejarla",
      koov: "Abrir puerta, arrancar, partir limpio",
      impact: "Ahorras 3-5 minutos diarios + sin estrés"
    },
    {
      title: "Protección en clima húmedo",
      icon: Droplets,
      traditional: "Condensación atrapada, olor a humedad, tela pegajosa",
      koov: "Ambiente seco controlado, ventilación adecuada",
      impact: "Menos óxido, mejor conservación de partes metálicas"
    },
    {
      title: "Mantenimiento y limpieza",
      icon: Sparkles,
      traditional: "Polvo adherido, manchas permanentes, deterioro visible",
      koov: "Limpieza ocasional, aspecto profesional constante",
      impact: "Mantiene valor de reventa de tu motocicleta"
    },
    {
      title: "Uso diario habitual",
      icon: Zap,
      traditional: "Cargar bulto húmedo/sucio, buscar dónde guardarlo",
      koov: "Acceso directo sin manipular materiales",
      impact: "Zero complicaciones, máxima practicidad"
    }
  ]

  return (
    <section className="section-padding bg-[var(--koov-graphite)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
            Comparación: Protector Tradicional vs KOOV COVER
          </h2>
          <p className="text-xl text-[var(--koov-light)] mb-8 max-w-3xl mx-auto">
            Análisis detallado de experiencia de usuario en situaciones cotidianas del motociclista limeño
          </p>
        </div>

        {/* Header de la tabla de comparación */}
        <div className="bg-[var(--koov-carbon)] rounded-t-2xl overflow-hidden mb-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="bg-[var(--koov-carbon)] p-6 border-r border-[var(--koov-graphite)]">
              <h3 className="font-bebas text-lg text-[var(--koov-electric)]">SITUACIÓN</h3>
            </div>
            <div className="bg-red-900/30 p-6 border-r border-[var(--koov-graphite)]">
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-red-400" />
                <h3 className="font-bebas text-lg text-white">PROTECTOR TRADICIONAL</h3>
              </div>
            </div>
            <div className="bg-[var(--koov-electric)]/20 p-6 border-r border-[var(--koov-graphite)]">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[var(--koov-electric)]" />
                <h3 className="font-bebas text-lg text-white">KOOV COVER</h3>
              </div>
            </div>
            <div className="bg-[var(--koov-carbon)] p-6">
              <h3 className="font-bebas text-lg text-[var(--koov-lime)]">BENEFICIO REAL</h3>
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
              Resultado: Una experiencia completamente diferente
            </h3>
            <p className="text-xl text-white mb-6">
              KOOV COVER no es una "funda mejorada" - es una solución integral diseñada por peruanos para peruanos
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bebas text-2xl text-white">5 MIN</div>
                <div className="text-white/80 text-sm">Ahorras diario</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bebas text-2xl text-white">3+ AÑOS</div>
                <div className="text-white/80 text-sm">Vida útil garantizada</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bebas text-2xl text-white">CERO</div>
                <div className="text-white/80 text-sm">Complicaciones diarias</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA de la sección */}
        <div className="text-center mt-12">
          <a
            href="https://api.whatsapp.com/send/?phone=+51949165670&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+KOOV+COVER"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 font-sans"
          >
            Experimenta la diferencia
          </a>
        </div>
      </div>
    </section>
  )
}
