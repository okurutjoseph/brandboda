"use client"

import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Footer() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 flex items-center gap-2">
                From <Image src="/images/uganda-flag.png" alt="Uganda Flag" width={20} height={15} className="inline-block" /> with Passion
              </p>
              <h2 className="text-3xl mt-2">Local time – {time}</h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg">Got a question?</h3>
              <div className="space-y-2">
                <div>
                  Email to{" "}
                  <a href="mailto:hello@josephokurut.com" className="text-white font-bold hover:underline">
                    hello@josephokurut.com
                  </a>
                </div>
                <div>
                  Chat via{" "}
                  <a href="skype:username?chat" className="text-white font-bold hover:underline">
                    Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certificates */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { src: '/images/certificates/6431de9fdf323a07e6f8a44a_image 16-p-500.webp', alt: 'Certificate 1' },
              { src: '/images/certificates/6431de9fe9cbf0324f2c9c0c_image 18-p-500.webp', alt: 'Certificate 2' },
              { src: '/images/certificates/6431de9fe9cbf0324f2c9c0c_image 18-p-500.webp', alt: 'Certificate 3' },
              { src: '/images/certificates/6431de9e443cd24e02939e3e_image 19-p-500.webp', alt: 'Certificate 4' }
            ].map((cert, index) => (
              <div 
                key={index} 
                className="aspect-square relative bg-[#1C1C1C] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white">Copyright 2025 Joseph Okurut</p>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-white border-2 border-[#1d1d1d] p-1 rounded" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-white border-2 border-[#1d1d1d] p-1 rounded" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-white border-2 border-[#1d1d1d] p-1 rounded" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-white border-2 border-[#1d1d1d] p-1 rounded" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}