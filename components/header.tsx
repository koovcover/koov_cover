"use client"
import Image from "next/image"
import { Instagram, Facebook, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=+51949165670&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+KOOV+COVER"

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "beneficios",
        "fabricacion-medida",
        "como-funciona",
        "preguntas",
        "campana",
        "contacto",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-[var(--koov-carbon)]/95 backdrop-blur-sm border-b border-[var(--koov-graphite)] z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo_koov_cover.png"
                alt="KOOV COVER Logo"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
              <span className="text-2xl font-serif font-bold text-white flex items-center gap-2">KOOV COVER</span>
            </button>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("beneficios")}
              className={`transition-colors ${activeSection === "beneficios" ? "text-[var(--koov-electric)]" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)]"}`}
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className={`transition-colors ${activeSection === "como-funciona" ? "text-[var(--koov-electric)]" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)]"}`}
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection("preguntas")}
              className={`transition-colors ${activeSection === "preguntas" ? "text-[var(--koov-electric)]" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)]"}`}
            >
              Preguntas
            </button>
            <button
              onClick={() => scrollToSection("campana")}
              className={`transition-colors ${activeSection === "campana" ? "text-[var(--koov-electric)]" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)]"}`}
            >
              Campaña
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className={`transition-colors ${activeSection === "contacto" ? "text-[var(--koov-electric)]" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)]"}`}
            >
              Contacto
            </button>
          </nav>

          {/* Social Links & CTA */}
          <div className="flex items-center gap-4">
            {/* Social Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.instagram.com/koov.cover/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--koov-light)] hover:text-[var(--koov-electric)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@koovcover"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--koov-light)] hover:text-[var(--koov-electric)] transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579959260936"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--koov-light)] hover:text-[var(--koov-electric)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* WhatsApp CTA - Hidden on mobile */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm hidden md:inline-flex"
            >
              Contáctanos
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-[var(--koov-light)] hover:text-[var(--koov-electric)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--koov-graphite)] bg-[var(--koov-carbon)]/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className={`block w-full text-left px-4 py-2 transition-colors ${activeSection === "inicio" ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)] hover:bg-[var(--koov-graphite)]"}`}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className={`block w-full text-left px-4 py-2 transition-colors ${activeSection === "beneficios" ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)] hover:bg-[var(--koov-graphite)]"}`}
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("fabricacion-medida")}
                className={`block w-full text-left px-4 py-2 transition-colors ${activeSection === "fabricacion-medida" ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)] hover:bg-[var(--koov-graphite)]"}`}
              >
                Fabricación
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className={`block w-full text-left px-4 py-2 transition-colors ${activeSection === "como-funciona" ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)] hover:bg-[var(--koov-graphite)]"}`}
              >
                Cómo Funciona
              </button>
              <button
                onClick={() => scrollToSection("preguntas")}
                className={`block w-full text-left px-4 py-2 transition-colors ${activeSection === "preguntas" ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)] hover:bg-[var(--koov-graphite)]"}`}
              >
                Preguntas
              </button>
              <button
                onClick={() => scrollToSection("campana")}
                className={`block w-full text-left px-4 py-2 transition-colors ${activeSection === "campana" ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)] hover:bg-[var(--koov-graphite)]"}`}
              >
                Campaña
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className={`block w-full text-left px-4 py-2 transition-colors ${activeSection === "contacto" ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" : "text-[var(--koov-light)] hover:text-[var(--koov-electric)] hover:bg-[var(--koov-graphite)]"}`}
              >
                Contacto
              </button>

              {/* Mobile social links only - removed duplicate contact button */}
              <div className="px-4 py-2 border-t border-[var(--koov-graphite)] mt-2 pt-4">
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://www.instagram.com/koov.cover/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--koov-light)] hover:text-[var(--koov-electric)] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@koovcover"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--koov-light)] hover:text-[var(--koov-electric)] transition-colors"
                    aria-label="TikTok"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61579959260936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--koov-light)] hover:text-[var(--koov-electric)] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
