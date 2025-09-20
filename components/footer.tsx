import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[var(--koov-carbon)] text-[var(--koov-white)] py-12 border-t border-[var(--koov-graphite)]">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div>
            <div className="text-2xl font-mono font-bold mb-2 text-[var(--koov-white)]">KOOV COVER</div>
            <p className="text-[var(--koov-light)] text-sm">© 2025 KOOV COVER. Todos los derechos reservados.</p>
            <p className="text-[var(--koov-electric)] text-sm font-medium mt-1">
              KOOV COVER – Producto diseñado en Perú
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/koov.cover/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--koov-electric)] hover:text-[var(--koov-lime)] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@koovcover"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--koov-electric)] hover:text-[var(--koov-lime)] transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/koovcover/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--koov-electric)] hover:text-[var(--koov-lime)] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <p className="text-[var(--koov-light)] text-sm">koovcover@gmail.com</p>
            <p className="text-[var(--koov-light)] text-sm">WhatsApp: +51 949 165 670</p>
            <p className="text-[var(--koov-light)] text-sm">Av. Colonial 3046, Cercado de Lima</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
