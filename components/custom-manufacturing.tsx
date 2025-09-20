import { Ruler, Wrench, CheckCircle } from "lucide-react"

export default function CustomManufacturing() {
  return (
    <section id="fabricacion-medida" className="py-20 bg-[var(--koov-black)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Fabricado a Medida para tu Moto o Espacio
          </h2>
          <p className="text-xl text-[var(--koov-light-gray)] max-w-3xl mx-auto leading-relaxed">
            Cada KOOV COVER puede adaptarse al tamaño de tu moto o al espacio que quieras proteger. Ofrecemos
            fabricación personalizada para asegurar el mejor ajuste, ya sea para motos pequeñas, medianas, grandes o
            incluso bicicletas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual representation */}
          <div className="relative">
            <div className="bg-[var(--koov-dark-gray)] rounded-2xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Adaptable a Cualquier Tamaño</h3>

              {/* Size comparison visual */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-lg border border-blue-800/30">
                  <div className="w-12 h-8 bg-[var(--koov-blue)] rounded opacity-80"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Motos Pequeñas</p>
                    <p className="text-sm text-[var(--koov-light-gray)]">125cc - 200cc</p>
                  </div>
                  <CheckCircle className="text-green-400" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-lg border border-blue-800/30">
                  <div className="w-16 h-10 bg-[var(--koov-blue)] rounded opacity-80"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Motos Medianas</p>
                    <p className="text-sm text-[var(--koov-light-gray)]">250cc - 600cc</p>
                  </div>
                  <CheckCircle className="text-green-400" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-lg border border-blue-800/30">
                  <div className="w-20 h-12 bg-[var(--koov-blue)] rounded opacity-80"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Motos Grandes</p>
                    <p className="text-sm text-[var(--koov-light-gray)]">700cc+</p>
                  </div>
                  <CheckCircle className="text-green-400" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-900/30 rounded-lg border border-green-800/30">
                  <div className="w-10 h-6 bg-green-500 rounded opacity-80"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Bicicletas</p>
                    <p className="text-sm text-[var(--koov-light-gray)]">También disponible</p>
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
                <h3 className="text-xl font-bold text-white mb-2">Medidas Exactas</h3>
                <p className="text-[var(--koov-light-gray)] leading-relaxed">
                  Tomamos las medidas específicas de tu moto para garantizar un ajuste perfecto que maximice la
                  protección.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--koov-blue)] rounded-lg flex items-center justify-center">
                <Wrench className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Fabricación Personalizada</h3>
                <p className="text-[var(--koov-light-gray)] leading-relaxed">
                  Cada KOOV COVER se fabrica específicamente para tu vehículo, asegurando la mejor calidad y
                  durabilidad.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--koov-blue)] rounded-lg flex items-center justify-center">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Garantía de Ajuste</h3>
                <p className="text-[var(--koov-light-gray)] leading-relaxed">
                  Si no queda perfecto, lo ajustamos sin costo adicional. Tu satisfacción es nuestra prioridad.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="https://api.whatsapp.com/send/?phone=+51949165670&text=Hola%2C+quiero+solicitar+un+KOOV+COVER+a+medida"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Solicita tu KOOV COVER a medida
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
