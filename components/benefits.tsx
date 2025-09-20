import { Shield, Wrench, Package, Building, Clock, Factory } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Protección climática integral",
      description: "Resguarda tu moto del sol intenso, lluvia torrencial y polvo urbano las 24 horas.",
    },
    {
      icon: Wrench,
      title: "Menos óxido en cadena y telescopios",
      description: "Mantiene las partes metálicas secas y protegidas, extendiendo la vida útil de tu moto.",
    },
    {
      icon: Package,
      title: "Portabilidad y fácil armado",
      description: "Se pliega compactamente y se despliega en minutos sin herramientas especiales.",
    },
    {
      icon: Building,
      title: "Ideal para espacios urbanos sin cochera",
      description: "Perfecto para departamentos, oficinas y lugares donde no hay estacionamiento techado.",
    },
    {
      icon: Clock,
      title: "Ahorra tiempo de limpieza",
      description: "Reduce significativamente el tiempo dedicado al mantenimiento y limpieza diaria.",
    },
    {
      icon: Factory,
      title: "Fabricación local, calidad garantizada",
      description: "Control directo en cada etapa de producción y soporte especializado del fabricante.",
    },
  ]

  return (
    <section id="beneficios" className="section-padding bg-[var(--koov-black)] relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 text-balance">
            ¿Por qué elegir KOOV COVER?
          </h2>
          <p className="text-lg md:text-xl text-[var(--koov-light-gray)] max-w-2xl mx-auto text-pretty">
            Diseñado específicamente para motociclistas que buscan protección práctica y eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[var(--koov-dark-gray)] rounded-2xl p-6 md:p-8 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[var(--koov-blue)] rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold text-white mb-3 md:mb-4 text-balance">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--koov-light-gray)] leading-relaxed text-pretty">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
