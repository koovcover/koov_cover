import { Star, Users, MapPin, Flag } from "lucide-react"

export default function SocialProof() {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      location: "Lima, Perú",
      text: "Excelente producto. Mi moto está siempre limpia y protegida. Lo recomiendo totalmente.",
      rating: 5,
    },
    {
      name: "Ana Rodriguez",
      location: "Arequipa, Perú",
      text: "Fácil de usar y muy práctico. Perfecto para mi departamento sin cochera.",
      rating: 5,
    },
    {
      name: "Miguel Torres",
      location: "Trujillo, Perú",
      text: "La mejor inversión para proteger mi moto. Calidad excepcional y muy resistente.",
      rating: 5,
    },
  ]

  return (
    <section className="section-padding bg-[var(--koov-carbon)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-white mb-4 text-balance">
            Lo que dicen nuestros usuarios
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-[var(--koov-light)] mb-8">
            <div className="flex items-center gap-2 bg-[var(--koov-electric)] text-white px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
              <Flag className="w-4 h-4" />
              <span className="font-medium">🇵🇪 Fabricantes peruanos desde 2023</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Users className="w-4 h-4 md:w-5 md:h-5" />
              <span>+500 usuarios satisfechos</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 valoración</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--koov-graphite)] rounded-2xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-[var(--koov-light)] mb-6 leading-relaxed text-sm md:text-base text-pretty">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--koov-electric)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm md:text-base">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm md:text-base">{testimonial.name}</div>
                  <div className="flex items-center gap-1 text-xs md:text-sm text-[var(--koov-light)]">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
