import Header from "@/components/header"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import CustomManufacturing from "@/components/custom-manufacturing"
import WhyKoov from "@/components/why-koov"
import TraditionalComparison from "@/components/traditional-comparison"
import HowItWorks from "@/components/how-it-works"
import SocialProof from "@/components/social-proof"
import FAQ from "@/components/faq"
import CampaignSection from "@/components/campaign-section"
import Location from "@/components/location"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--koov-carbon)]">
      <Header />
      <Hero />
      <Benefits />
      <CustomManufacturing />
      <WhyKoov />
      <TraditionalComparison />
      <HowItWorks />
      {/* <SocialProof /> */}
      <FAQ />
      <CampaignSection />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
