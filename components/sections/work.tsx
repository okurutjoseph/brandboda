"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Work() {
  const projects = [
    {
      image: "/images/projects/643e0011e8106239df9bffa0_Weed Online - Home 1-p-500.webp",
      url: "https://example.com/project1"
    },
    {
      image: "/images/projects/643e0010626b1066c707c088_screencapture-sunology-eu-2023-04-09-09_12_53-p-500.webp",
      url: "https://example.com/project2"
    },
    {
      image: "/images/projects/643e001059394b4b78e77ed2_BhFieldHome 1-p-500.webp",
      url: "https://example.com/project3"
    },
    {
      image: "/images/projects/654ada717bb21ce275dce9c6_Homepage UPD 28 1-p-500.jpg",
      url: "https://example.com/project4"
    },
    {
      image: "/images/projects/654ada20477e6b142c00159a_Record Recharge 1-p-500.jpg",
      url: "https://example.com/project5"
    },
    {
      image: "/images/projects/654adb81d561e4616f1a823a_Atriz Global - Home 1-p-500.jpg",
      url: "https://example.com/project6"
    },
    {
      image: "/images/projects/654adc12c06793297b9397be_Frame 1 1-p-500.jpg",
      url: "https://example.com/project7"
    },
    {
      image: "/images/projects/643e0010626b102deb07c087_Wraffle - Home 1-p-500.webp",
      url: "https://example.com/project8"
    },
    {
      image: "/images/projects/643e0010f19df85f814150d8_P2 1-p-500.webp",
      url: "https://example.com/project9"
    }
  ]

  return (
    <section id="work" className="py-24">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A taste of what I can do for you
          </h2>
          <p className="text-lg text-white/80">
            Check what I made - this is worth a thousand words about me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-transparent border-0 overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-0 relative group">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="absolute top-0 left-0 w-full transition-transform duration-[3s] ease-linear group-hover:translate-y-[var(--scroll-height)]"
                    loading="lazy"
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      const scrollHeight = img.offsetHeight - 300;
                      if (scrollHeight > 0) {
                        img.style.setProperty('--scroll-height', `-${scrollHeight}px`);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Button 
                        variant="outline" 
                        className="bg-black/80 text-white border-0 hover:bg-black hover:text-white transition-all duration-300"
                      >
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}