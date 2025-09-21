"use client"

import { useEffect, useState, useCallback } from "react"
import { Gift, Users, Star, X } from "lucide-react"
import { useI18n } from "@/contexts/i18n-context"

interface CampaignModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  autoOpen?: boolean
}

export default function CampaignModal({ open: controlledOpen, onOpenChange, autoOpen = false }: CampaignModalProps) {
  const { t } = useI18n()
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  
  const setOpen = useCallback((newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen)
    } else {
      setUncontrolledOpen(newOpen)
    }
  }, [onOpenChange])

  useEffect(() => {
    if (typeof window === 'undefined' || !autoOpen) return;

    try {
      // Verificar si el modal ya se mostró hoy
      const lastShown = localStorage.getItem('modal-last-shown')
      const today = new Date().toDateString()
      
      if (lastShown === today) return;

      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem('modal-last-shown', today);
      }, 2500);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }, [autoOpen, setOpen])

  useEffect(() => {
    if (open) {
      setIsVisible(true)
    }
  }, [open])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => setOpen(false), 200)
  }, [setOpen])

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }, [handleClose])

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+51949165670&text=Hola%2C+quiero+participar+en+la+campa%C3%B1a+%22Ten+tu+propio+KOOV+COVER%22"

  const handleWhatsAppClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.open(whatsappUrl, '_blank')
    handleClose()
  }, [handleClose])


  console.log('Modal render:', { open, autoOpen })
  
  if (!open) return null

  return (
    <div 
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div className={`bg-gradient-to-br from-[var(--koov-carbon)] via-[var(--koov-dark-gray)] to-[var(--koov-graphite)] text-[var(--koov-white)] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-auto relative shadow-2xl border border-[var(--koov-lime)]/20 transition-all duration-300 ${
        isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
      }`}>
        
        {/* Efectos decorativos */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--koov-lime)]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--koov-electric)]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[var(--koov-lime)]/5 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Botón de cerrar */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 bg-[var(--koov-graphite)]/80 hover:bg-[var(--koov-graphite)] border border-[var(--koov-lime)]/30 text-[var(--koov-white)] p-2 rounded-full cursor-pointer z-10 transition-all duration-200 hover:scale-110 hover:border-[var(--koov-lime)]"
        >
          <X size={18} />
        </button>

        {/* Contenido del modal */}
        <div className="p-6 md:p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--koov-lime)] to-[var(--koov-lime)]/80 text-[var(--koov-carbon)] px-4 py-2 rounded-full mb-4 font-semibold text-sm shadow-lg shadow-[var(--koov-lime)]/25">
              <Gift size={16} />
              <span>{t('campaign.special')}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-[var(--koov-white)]">
              {t('campaign.title')}
            </h2>

            <p className="text-[var(--koov-light-gray)] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              {t('campaign.subtitle')}
            </p>
          </div>

          {/* Stats compactas */}
          <div className="bg-gradient-to-r from-[var(--koov-graphite)]/50 to-[var(--koov-dark-gray)]/30 rounded-xl p-4 mb-6 backdrop-blur-sm border border-[var(--koov-lime)]/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="transform hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-[var(--koov-lime)] mb-1 drop-shadow-sm">5</div>
                <div className="text-xs text-[var(--koov-light-gray)]">{t('campaign.stats.prizes')}</div>
              </div>
              <div className="transform hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-[var(--koov-lime)] mb-1 drop-shadow-sm">30</div>
                <div className="text-xs text-[var(--koov-light-gray)]">{t('campaign.stats.days')}</div>
              </div>
              <div className="transform hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-[var(--koov-lime)] mb-1 drop-shadow-sm">100%</div>
                <div className="text-xs text-[var(--koov-light-gray)]">{t('campaign.stats.free')}</div>
              </div>
              <div className="transform hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-[var(--koov-lime)] mb-1 drop-shadow-sm">⚡</div>
                <div className="text-xs text-[var(--koov-light-gray)]">{t('campaign.stats.exclusive')}</div>
              </div>
            </div>
          </div>

          {/* Características principales */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-[var(--koov-graphite)]/30 to-[var(--koov-dark-gray)]/20 backdrop-blur-sm border border-[var(--koov-lime)]/10 transform hover:scale-105 hover:border-[var(--koov-lime)]/20 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--koov-lime)]/20 to-[var(--koov-lime)]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[var(--koov-lime)]/20">
                <Users size={20} className="text-[var(--koov-lime)]" />
              </div>
              <h3 className="font-semibold mb-1 text-sm text-[var(--koov-white)]">{t('campaign.feature1.title')}</h3>
              <p className="text-[var(--koov-light-gray)] text-xs">{t('campaign.feature1.desc')}</p>
            </div>

            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-[var(--koov-graphite)]/30 to-[var(--koov-dark-gray)]/20 backdrop-blur-sm border border-[var(--koov-lime)]/10 transform hover:scale-105 hover:border-[var(--koov-lime)]/20 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--koov-lime)]/20 to-[var(--koov-lime)]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[var(--koov-lime)]/20">
                <Gift size={20} className="text-[var(--koov-lime)]" />
              </div>
              <h3 className="font-semibold mb-1 text-sm text-[var(--koov-white)]">{t('campaign.feature2.title')}</h3>
              <p className="text-[var(--koov-light-gray)] text-xs">{t('campaign.feature2.desc')}</p>
            </div>

            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-[var(--koov-graphite)]/30 to-[var(--koov-dark-gray)]/20 backdrop-blur-sm border border-[var(--koov-lime)]/10 transform hover:scale-105 hover:border-[var(--koov-lime)]/20 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--koov-lime)]/20 to-[var(--koov-lime)]/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-[var(--koov-lime)]/20">
                <Star size={20} className="text-[var(--koov-lime)]" />
              </div>
              <h3 className="font-semibold mb-1 text-sm text-[var(--koov-white)]">{t('campaign.feature3.title')}</h3>
              <p className="text-[var(--koov-light-gray)] text-xs">{t('campaign.feature3.desc')}</p>
            </div>
          </div>

          {/* Pasos para participar */}
          <div className="bg-gradient-to-r from-[var(--koov-graphite)]/40 to-[var(--koov-dark-gray)]/20 rounded-xl p-4 mb-6 backdrop-blur-sm border border-[var(--koov-lime)]/10">
            <h3 className="font-bold mb-3 text-center text-sm text-[var(--koov-white)]">{t('campaign.howTo.title')}</h3>
            <div className="space-y-2 text-xs text-[var(--koov-light-gray)]">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[var(--koov-lime)] to-[var(--koov-lime)]/80 text-[var(--koov-carbon)] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">1</div>
                <p>{t('campaign.step1')}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[var(--koov-lime)] to-[var(--koov-lime)]/80 text-[var(--koov-carbon)] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">2</div>
                <p>{t('campaign.step2')}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[var(--koov-lime)] to-[var(--koov-lime)]/80 text-[var(--koov-carbon)] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">3</div>
                <p>{t('campaign.step3')}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-[var(--koov-lime)] to-[var(--koov-lime)]/90 hover:from-[var(--koov-lime)]/90 hover:to-[var(--koov-lime)] text-[var(--koov-carbon)] px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[var(--koov-lime)]/25 hover:shadow-[var(--koov-lime)]/40 flex items-center justify-center gap-2 border border-[var(--koov-lime)]/50"
            >
              <Gift size={20} />
              {t('campaign.cta')}
            </button>
            <p className="text-[var(--koov-gray)] text-xs mt-3">
              {t('campaign.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}