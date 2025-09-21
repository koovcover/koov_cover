"use client"

import { Gift } from "lucide-react"
import { useState, useEffect } from "react"
import CampaignModal from "./campaign-modal"

export default function CampaignFloat() {
  const [mounted, setMounted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Solo intentar abrir el modal automáticamente una vez al cargar
    const lastShown = localStorage.getItem('modal-last-shown')
    const today = new Date().toDateString()
    
    if (lastShown !== today) {
      const timer = setTimeout(() => {
        console.log('Auto-opening modal') // Debug log
        setShowModal(true)
        localStorage.setItem('modal-last-shown', today)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleModalOpen = () => {
    console.log('Manual modal open') // Debug log
    setShowModal(true)
  }

  if (!mounted) return null

  return (
    <>
      <button
        onClick={handleModalOpen}
        className="fixed bottom-24 right-4 z-50 bg-gradient-to-r from-[var(--theme-brand-primary)] to-blue-600 text-white p-3 rounded-full theme-shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center"
        aria-label="Abrir campaña"
      >
        <Gift size={24} className="text-yellow-300" />
      </button>
      <CampaignModal
        open={showModal}
        onOpenChange={(open) => {
          console.log('Modal open state changing to:', open) // Debug log
          setShowModal(open)
        }}
      />
    </>
  )
}