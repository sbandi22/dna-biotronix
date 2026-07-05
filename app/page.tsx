import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import TechnologyHub from '@/components/sections/TechnologyHub'
import ApplicationsSection from '@/components/sections/ApplicationsSection'
import ResearchSection from '@/components/sections/ResearchSection'
import EcosystemSection from '@/components/sections/EcosystemSection'
import TeamSection from '@/components/sections/TeamSection'
import NewsSection from '@/components/sections/NewsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechnologyHub />
        <ApplicationsSection />
        <ResearchSection />
        <EcosystemSection />
        <TeamSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
