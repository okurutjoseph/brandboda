"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-full z-50 fixed top-0 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'bg-black py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {!isScrolled && (
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/images/joseph.jpg" alt="Joseph Okurut" />
                <AvatarFallback>JO</AvatarFallback>
              </Avatar>
              <div>
                <Link href="/" className="text-xl font-bold text-white">
                  JosephOkurut
                </Link>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-white text-black px-2 py-1 rounded">Web Developer</span>
                </div>
              </div>
            </div>
          )}

          <div className={`hidden md:flex items-center gap-4 ${
            isScrolled ? 'mx-auto' : ''
          }`}>
            <nav className="flex items-center space-x-8 bg-[#1C1C1C] px-6 py-2 rounded-md border border-[#2C2C2C]">
              <Link href="#work" className="text-white hover:text-white/80">
                Work
              </Link>
              <Link href="#capabilities" className="text-white hover:text-white/80">
                Capabilities
              </Link>
              <Link href="#process" className="text-white hover:text-white/80">
                Process
              </Link>
              <Link href="#testimonial" className="text-white hover:text-white/80">
                Testimonial
              </Link>
              {isScrolled && (
                <Button 
                  variant="outline" 
                  className="ml-8 text-black border-[#2C2C2C] bg-white hover:bg-white/90"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Hire me
                </Button>
              )}
            </nav>
          </div>

          {!isScrolled && (
            <div className="hidden md:block">
              <Button 
                variant="outline" 
                className="text-white border-[#2C2C2C] hover:bg-[#2C2C2C]"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Hire me
              </Button>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 bg-[#1C1C1C] p-4 rounded-md border border-[#2C2C2C]">
              <Link href="#work" className="text-white hover:text-white/80">
                Work
              </Link>
              <Link href="#capabilities" className="text-white hover:text-white/80">
                Capabilities
              </Link>
              <Link href="#process" className="text-white hover:text-white/80">
                Process
              </Link>
              <Link href="#testimonial" className="text-white hover:text-white/80">
                Testimonial
              </Link>
              <Button variant="outline" className="w-full text-white border-[#2C2C2C] hover:bg-[#2C2C2C]">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Hire me
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}