"use client"
import Image from "next/image"
import { Instagram, Facebook, Menu, X } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"
import { useState, useEffect } from "react"
import { ThemeLanguageSelector } from "./theme-language-selector"
import { useTheme } from "next-themes"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const { t } = useI18n()
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=+51949165670&text=${encodeURIComponent(t('whatsapp.message'))}`

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
    <header className={`fixed top-0 w-full z-50 shadow-lg backdrop-blur-sm border-b ${
      mounted && theme === 'light' 
        ? 'bg-white/95 border-gray-200' 
        : 'bg-gray-950/95 border-gray-800'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src={mounted && theme === 'light' ? "/logo/Logo-koovcover_negro.png" : "/logo/Logo-koovcover_blanco.png"}
                alt="KOOV COVER Logo"
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              <span className={`text-2xl font-serif font-bold flex items-center gap-2 ${
                mounted && theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                KOOV COVER
              </span>
            </button>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {mounted && (
              <>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className={`transition-colors font-medium ${
                    activeSection === "beneficios" 
                      ? "text-[var(--koov-electric)]" 
                      : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)]" : "text-gray-300 hover:text-[var(--koov-electric)]"
                  }`}
                >
                  {t('nav.benefits')}
                </button>
                <button
                  onClick={() => scrollToSection("como-funciona")}
                  className={`transition-colors font-medium ${
                    activeSection === "como-funciona" 
                      ? "text-[var(--koov-electric)]" 
                      : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)]" : "text-gray-300 hover:text-[var(--koov-electric)]"
                  }`}
                >
                  {t('nav.howItWorks')}
                </button>
                <button
                  onClick={() => scrollToSection("preguntas")}
                  className={`transition-colors font-medium ${
                    activeSection === "preguntas" 
                      ? "text-[var(--koov-electric)]" 
                      : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)]" : "text-gray-300 hover:text-[var(--koov-electric)]"
                  }`}
                >
                  {t('nav.questions')}
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className={`transition-colors font-medium ${
                    activeSection === "contacto" 
                      ? "text-[var(--koov-electric)]" 
                      : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)]" : "text-gray-300 hover:text-[var(--koov-electric)]"
                  }`}
                >
                  {t('nav.contact')}
                </button>
              </>
            )}
          </nav>

          {/* Right side - Social Links, Theme/Language toggles, and CTA */}
          <div className="flex items-center gap-4">
            {/* Social Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.instagram.com/koov.cover/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[var(--koov-electric)] transition-colors ${
                  mounted && theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@koovcover"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[var(--koov-electric)] transition-colors ${
                  mounted && theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579959260936"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[var(--koov-electric)] transition-colors ${
                  mounted && theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Theme and Language Selector - Desktop only */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeLanguageSelector />
            </div>

            {/* WhatsApp CTA - Desktop only */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm hidden md:flex max-sm:!hidden"
            >
              {t('nav.contactUs')}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 hover:text-[var(--koov-electric)] transition-colors ${
                mounted && theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && mounted && (
          <div className={`md:hidden border-t backdrop-blur-sm ${
            mounted && theme === 'light' 
              ? 'border-gray-200 bg-white/95' 
              : 'border-gray-800 bg-gray-950/95'
          }`}>
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className={`block w-full text-left px-4 py-2 transition-colors font-medium ${
                  activeSection === "inicio" 
                    ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" 
                    : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)] hover:bg-gray-50" : "text-gray-300 hover:text-[var(--koov-electric)] hover:bg-gray-800"
                }`}
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className={`block w-full text-left px-4 py-2 transition-colors font-medium ${
                  activeSection === "beneficios" 
                    ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" 
                    : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)] hover:bg-gray-50" : "text-gray-300 hover:text-[var(--koov-electric)] hover:bg-gray-800"
                }`}
              >
                {t('nav.benefits')}
              </button>
              <button
                onClick={() => scrollToSection("fabricacion-medida")}
                className={`block w-full text-left px-4 py-2 transition-colors font-medium ${
                  activeSection === "fabricacion-medida" 
                    ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" 
                    : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)] hover:bg-gray-50" : "text-gray-300 hover:text-[var(--koov-electric)] hover:bg-gray-800"
                }`}
              >
                {t('nav.manufacturing')}
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className={`block w-full text-left px-4 py-2 transition-colors font-medium ${
                  activeSection === "como-funciona" 
                    ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" 
                    : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)] hover:bg-gray-50" : "text-gray-300 hover:text-[var(--koov-electric)] hover:bg-gray-800"
                }`}
              >
                {t('nav.howItWorks')}
              </button>
              <button
                onClick={() => scrollToSection("preguntas")}
                className={`block w-full text-left px-4 py-2 transition-colors font-medium ${
                  activeSection === "preguntas" 
                    ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" 
                    : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)] hover:bg-gray-50" : "text-gray-300 hover:text-[var(--koov-electric)] hover:bg-gray-800"
                }`}
              >
                {t('nav.questions')}
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className={`block w-full text-left px-4 py-2 transition-colors font-medium ${
                  activeSection === "contacto" 
                    ? "text-[var(--koov-electric)] bg-[var(--koov-electric)]/10" 
                    : mounted && theme === 'light' ? "text-gray-700 hover:text-[var(--koov-electric)] hover:bg-gray-50" : "text-gray-300 hover:text-[var(--koov-electric)] hover:bg-gray-800"
                }`}
              >
                {t('nav.contact')}
              </button>

              {/* WhatsApp CTA - Mobile only */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full block mt-2 mx-4"
              >
                {t('nav.contactUs')}
              </a>

              {/* Mobile Theme and Language Selector */}
              <div className="px-4 py-2 flex items-center gap-2">
                <ThemeLanguageSelector />
              </div>

              {/* Mobile social links */}
              <div className={`px-4 py-2 border-t mt-2 pt-4 ${
                mounted && theme === 'light' ? 'border-gray-200' : 'border-gray-800'
              }`}>
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://www.instagram.com/koov.cover/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-[var(--koov-electric)] transition-colors ${
                      mounted && theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@koovcover"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-[var(--koov-electric)] transition-colors ${
                      mounted && theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                    aria-label="TikTok"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61579959260936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-[var(--koov-electric)] transition-colors ${
                      mounted && theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
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
