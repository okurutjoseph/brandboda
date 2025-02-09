"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HireMe() {
  return (
    <section className="py-12 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between p-6 rounded-2xl bg-[#141414] border border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex">
              <img src="/images/figma.svg" alt="Figma" className="w-10 h-10" />
              <div className="relative -ml-2">
                <img src="/images/react.svg" alt="Webflow" className="w-10 h-10" />
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-white/40 rotate-45" />
                </div>
              </div>
            </div>
            <p className="text-white text-lg">Already have a design and want me to build it on Webflow?</p>
          </div>
          <a 
            href="https://form.jotform.com/250384425998066" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-black"
            >
              Let&apos;s Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}