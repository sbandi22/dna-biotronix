import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import TechnologySection from '@/components/sections/TechnologySection'
import ArchitectureSection from '@/components/sections/ArchitectureSection'
import DetectionSection from '@/components/sections/DetectionSection'
import ResearchSection from '@/components/sections/ResearchSection'
import AnalyticsSection from '@/components/sections/AnalyticsSection'
import EcosystemSection from '@/components/sections/EcosystemSection'
import TeamSection from '@/components/sections/TeamSection'
import ApplicationsSection from '@/components/sections/ApplicationsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechnologySection />
        <ArchitectureSection />
        <DetectionSection />
        <ResearchSection />
        <AnalyticsSection />
        <EcosystemSection />
        <TeamSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
