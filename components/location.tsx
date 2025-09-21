"use client"
import { useI18n } from '@/contexts/i18n-context'

export default function Location() {
  const { t } = useI18n()
  return (
    <section className="section-padding bg-[var(--koov-black)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bebas text-white mb-4">{t('location.title')}</h2>
          <p className="text-xl text-[var(--koov-light-gray)]">{t('location.subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--koov-gray)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3!2d-77.0428!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee79cd%3A0x14206cb9cc452e4a!2sAv.%20Colonial%203046%2C%20Cercado%20de%20Lima%2015001!5e0!3m2!1sen!2spe!4v1234567890"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación KOOV COVER - Av. Colonial 3046"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
