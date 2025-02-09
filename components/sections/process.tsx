"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const steps = [
  {
    imageSrc: "/images/process/6431c6b38e9cf529c85e1d6c_048579A7-9748-4357-A675-BF76610495E7.webp",
    title: "Request",
    description: "Submit your request"
  },
  {
    imageSrc: "images/process/6431c6b1df323a4800f6ef35_EFB6AC06-B22C-42F1-B402-CF24DEF2A34D.webp",
    title: "Estimate",
    description: "Get an estimate asap"
  },
  {
    imageSrc: "images/process/6431c6b35d665fb8113608c0_D579D1FF-97FE-42E0-803A-33634CB722AD.webp",
    title: "Approve",
    description: "Send Figma/XD file & deposit"
  },
  {
    imageSrc: "images/process/6431c6b3e9cbf076e82af302_02073CC0-207B-4079-9DA5-BBFDA837CE50.webp",
    title: "Develop",
    description: "Exacted in Webflow"
  },
  {
    imageSrc: "images/process/6431c6b101d447dc105655f2_0C17496A-94A8-4C96-BA7A-447EE7E40FD4.webp",
    title: "Deliver",
    description: "Pay remainder only when 100%"
  }
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">You're 5 steps away from a <br />new website...</h2>
        <p className="text-white/60 text-center mb-12">Easy to begin and streamlined to the end. I use async communication <br /> and limit meetings to save time and optimize productivity.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-[#1C1C1C] border-[#333]">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-[120px] h-[120px] relative">
                    <Image
                      src={step.imageSrc}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-[#4ADE80] mb-2">0{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}