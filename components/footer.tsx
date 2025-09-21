"use client"

import { Instagram, Facebook } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="theme-bg-section theme-text-primary py-12 theme-border-light border-t">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div>
            <div className="text-2xl font-mono font-bold mb-2 theme-text-primary">KOOV COVER</div>
            <p className="theme-text-secondary text-sm">{t('footer.copyright')}</p>
            <p className="theme-text-accent text-sm font-medium mt-1">
              {t('footer.product')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/koov.cover/"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-text-accent hover:text-[var(--theme-brand-secondary)] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@koovcover"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-text-accent hover:text-[var(--theme-brand-secondary)] transition-colors duration-200"
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
                className="theme-text-accent hover:text-[var(--theme-brand-secondary)] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <p className="theme-text-secondary text-sm">koovcover@gmail.com</p>
            <p className="theme-text-secondary text-sm">WhatsApp: +51 949 165 670</p>
            <p className="theme-text-secondary text-sm">Av. Colonial 3046, Cercado de Lima</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
