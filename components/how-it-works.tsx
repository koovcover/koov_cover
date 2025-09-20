import { MapPin, Wrench, Shield, Anchor, RotateCcw, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Preparar el área de instalación",
      description:
        "Selecciona un espacio plano de al menos el área mínima según el tamaño KOOV COVER seleccionado. Asegúrate de que el piso esté limpio y nivelado.",
    },
    {
      icon: Wrench,
      title: "Armar la estructura metálica",
      description:
        "Ensambla los tubos y accesorios siguiendo la numeración y el manual. Conecta los arcos plegables y las uniones con pernos y tornillos incluidos. Verifica que las uniones permitan el movimiento de apertura y cierre.",
    },
    {
      icon: Shield,
      title: "Colocar el forro protector",
      description:
        "Despliega el forro de Lona/Tarflex/Concord. Ajusta el material sobre la estructura con sujetadores o velcros incluidos. Asegúrate de que quede bien tensado para resistir viento y lluvia.",
    },
    {
      icon: Anchor,
      title: "Fijar al suelo (opcional)",
      description:
        "Coloca objetos pesados como pesas o bloques de concreto pequeños en esquinas de la estructura en caso sea necesario. Utiliza pernos de anclaje o estacas para mayor estabilidad en ambientes poco seguros.",
    },
    {
      icon: RotateCcw,
      title: "Prueba de apertura y cierre",
      description:
        "Abre y cierra la cúpula varias veces para comprobar el movimiento. Ajusta las uniones si notas resistencia.",
    },
    {
      icon: CheckCircle,
      title: "Listo para usar",
      description: "Estaciona tu moto dentro. Cierra el KOOV COVER para protegerla de lluvia, sol, polvo y rayaduras.",
    },
  ]

  return (
    <section id="como-funciona" className="section-padding bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            🔧 Proceso de Instalación del KOOV COVER
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sigue estos pasos detallados para instalar correctamente tu garaje portátil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-black rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-blue-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
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
