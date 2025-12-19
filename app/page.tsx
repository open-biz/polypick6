import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
