import { Gift, Users, Star } from "lucide-react"

export default function CampaignSection() {
  return (
    <section
      id="campana"
      className="py-20 bg-gradient-to-r from-[var(--koov-blue)] to-blue-600 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Gift className="text-yellow-300" size={20} />
            <span className="font-semibold">¡Campaña Especial!</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ten tu propio KOOV COVER y cuéntanos tu experiencia
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Lanzamos nuestra primera campaña de usuarios. Queremos que seas de los primeros en probar KOOV COVER y
            compartir tu experiencia real. Estaremos regalando{" "}
            <strong className="text-yellow-300">5 KOOV COVER gratis</strong> a quienes se registren y nos cuenten por
            qué lo necesitan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Campaign highlights */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-yellow-300" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Primeros Usuarios</h3>
            <p className="text-blue-100">Sé parte del grupo exclusivo de usuarios pioneros de KOOV COVER</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="text-yellow-300" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">5 KOOV COVER Gratis</h3>
            <p className="text-blue-100">Los mejores testimonios recibirán su KOOV COVER completamente gratis</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-yellow-300" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Comparte tu Historia</h3>
            <p className="text-blue-100">Tu experiencia ayudará a otros motociclistas a proteger sus motos</p>
          </div>
        </div>

        {/* Campaign stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">5</div>
              <div className="text-sm text-blue-100">KOOV COVER Gratis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">30</div>
              <div className="text-sm text-blue-100">Días de Campaña</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-sm text-blue-100">Gratis para Ganadores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">⭐</div>
              <div className="text-sm text-blue-100">Experiencia Única</div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 text-center">¿Cómo Participar?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-300 text-[var(--koov-black)] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                1
              </div>
              <p>Regístrate y cuéntanos por qué necesitas un KOOV COVER</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-300 text-[var(--koov-black)] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                2
              </div>
              <p>Comparte una foto de tu moto y dónde la estacionas</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-300 text-[var(--koov-black)] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                3
              </div>
              <p>Explica cómo KOOV COVER mejoraría tu día a día</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-300 text-[var(--koov-black)] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                4
              </div>
              <p>Compromete a compartir tu experiencia real después</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=+51949165670&text=Hola%2C+quiero+participar+en+la+campa%C3%B1a+%22Ten+tu+propio+KOOV+COVER%22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-300 text-[var(--koov-black)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Gift size={24} />
            Participa en la campaña
          </a>
          <p className="text-blue-100 text-sm mt-4">* Campaña válida hasta agotar los 5 KOOV COVER disponibles</p>
        </div>
      </div>
    </section>
  )
}
