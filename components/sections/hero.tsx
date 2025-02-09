"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-black relative"
      style={{
        backgroundImage: "url('/images/643191e711af0d5ee2944774_background.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" /> {/* Adjust opacity as needed */}
      
      <div className="container mx-auto px-4 relative"> {/* Added relative for z-index */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Creative Web Developer for Hire
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            I create stunning websites that drive results and elevate your brand's digital presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-black group">
              Work with me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#333] text-white hover:bg-[#333]">
              Recent Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}