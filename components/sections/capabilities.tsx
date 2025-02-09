"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const capabilities = [
  {
    icon: "/images/react.svg", // Add your Webflow icon
    title: "White Label Web Development",
    description: "Your team's trusted Webflow Expert: on-demand support for overflow work and skill gaps"
  },
  {
    icon: "/images/react.svg", // Add your Webflow with gear icon
    title: "Pay-as-you-go Web maintenance",
    description: "Need a slew of changes? New pages, performance tweaks, and more? No problem. I'm ready when you are."
  },
  {
    icon: "/images/figma.svg", // Add your Figma to Webflow icon
    title: "Figma/XD to Web development",
    description: "High-fidelity prototypes transformed into true-to-design Webflow websites, backed by experience, quality, and care."
  }
]

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 bg-black overflow-hidden">
      {/* Background grid image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/images/643191e711af0d5ee2944774_background.svg")', // Add your grid background image
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          I bring projects to life
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    src={capability.icon}
                    alt={capability.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center">
                {capability.title}
              </h3>
              <p className="text-white/60 text-center">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}