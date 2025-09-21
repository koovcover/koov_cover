"use client"

import { Gift } from "lucide-react"
import { useState, useEffect } from "react"
import CampaignModal from "./campaign-modal"

export default function CampaignFloat() {
  const [mounted, setMounted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Intentar abrir el modal automáticamente después de que el componente se monte
    const timer = setTimeout(() => {
      const lastShown = localStorage.getItem('modal-last-shown')
      const today = new Date().toDateString()
      
      if (lastShown !== today) {
        setShowModal(true)
        localStorage.setItem('modal-last-shown', today)
      }
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-24 right-4 z-50 bg-gradient-to-r from-[var(--koov-blue)] to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center"
        aria-label="Abrir campaña"
      >
        <Gift size={24} className="text-yellow-300" />
      </button>
      <CampaignModal open={showModal} onOpenChange={setShowModal} />
    </>
  )
}