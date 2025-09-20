import { ShieldCheck, DollarSign, Headphones } from "lucide-react"

export default function WhyKoov() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Control de calidad directo",
      description: "Supervisamos cada etapa del proceso de fabricación para garantizar durabilidad y resistencia",
    },
    {
      icon: DollarSign,
      title: "Precio de fábrica",
      description: "Sin intermediarios ni importadores. Obtienes el mejor precio directo del fabricante",
    },
    {
      icon: Headphones,
      title: "Soporte especializado",
      description: "Respaldo técnico directo del fabricante con garantía total en tu inversión",
    },
  ]

  return (
    <section className="section-padding bg-[var(--koov-graphite)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
            🇵🇪 Fabricantes peruanos con calidad mundial
          </h2>
          <p className="text-xl text-[var(--koov-light)] mb-8">Desarrollado por peruanos que entienden nuestro clima</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[var(--koov-electric)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bebas text-2xl text-white mb-4">{feature.title}</h3>
                <p className="text-[var(--koov-light)] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
