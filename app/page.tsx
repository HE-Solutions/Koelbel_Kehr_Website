import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { BrandschutzSection } from "@/components/brandschutz-section"
import { SicherheitSection } from "@/components/sicherheit-section"
import { BeratungSection } from "@/components/beratung-section"
import { UmweltSection } from "@/components/umwelt-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ContactSection />
      <BrandschutzSection />
      <SicherheitSection />
      <BeratungSection />
      <UmweltSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
