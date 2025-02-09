import { Hero } from "@/components/sections/hero"
import { Work } from "@/components/sections/work"
import { Capabilities } from "@/components/sections/capabilities"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { HireMe } from "@/components/sections/hire-me"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Work />
      <Capabilities />
      <Process />
      <Testimonials />
      <HireMe />
      <Footer />
    </main>
  )
}