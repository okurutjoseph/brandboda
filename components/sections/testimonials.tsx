"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      text: "Lissan provides great design and has a great sense of user experience and aesthetics. He delivers on time and is an overall great communicator. I highly recommend working with him.",
      author: "Mara Nikolic",
      role: "Founder",
      company: "Mara99",
      companyLogo: "/images/testimonials/6431f3e7637d393a8dce0040_2840C62A-D4CB-43F2-9C07-F6DDF99263E3 1.webp",
      avatar: "/images/testimonials/6431ef43bbbc42965be365d2_Rectangle 104.webp"
    },
    {
      text: "Amazing designer with an eye for aesthetics. I had pretty vigorous requests and he hit every single one. He was patient and highly skilled!",
      author: "John D Saunders",
      role: "Co-founder",
      company: "5fourdigital",
      companyLogo: "/images/testimonials/64757960d104ff46441490c5_61432af3e1400e82b836b822_Group 67 1.svg",
      avatar: "/images/testimonials/6431ef43a316083f5db05e7d_Rectangle 106.webp"
    },
    {
      text: "Working with Lissan was a game-changer for our project. His attention to detail and innovative approach brought our vision to life perfectly.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow",
      companyLogo: "/images/testimonials/6431fec45c88a3065c313095_bh logo.svg",
      avatar: "/images/testimonials/6431fe7e3f44a7a2f15b7521_1612848404581 1.webp"
    },
    {
      text: "Exceptional talent in UI/UX design. Lissan's work transformed our user engagement metrics and received outstanding feedback from our clients.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "DigitalPeak",
      companyLogo: "/images/testimonials/64319ff9b89d6666a45d0d09_Group.svg",
      avatar: "/images/testimonials/6431ef435d665f753a38d003_Rectangle 105.webp"
    },
    {
      text: "Lissan's design expertise and professionalism made our collaboration seamless. He consistently delivered beyond expectations.",
      author: "Emma Thompson",
      role: "Creative Director",
      company: "ArtisanWeb",
      companyLogo: "/images/testimonials/6431ffcd9d91c6839ec4eeba_Group 359.svg",
      avatar: "/images/testimonials/6431ffcd9d91c6037ec4eeb4_1650581562449 1.webp"
    },
    {
      text: "Outstanding work ethic and creative solutions. Lissan's designs perfectly captured our brand identity while improving user experience.",
      author: "David Kim",
      role: "Marketing Director",
      company: "Innovate",
      companyLogo: "/images/testimonials/6431fa2c3030fd49a1c5a80c_62093c2678b45fa4609e15d0_Evvvolution_Logo_Klein_Web Kopie-p-500.webp",
      avatar: "/images/testimonials/6431fa2b8e9cf5d85a621615_82f1be4f-6faf-4b7d-b015-425c661ea7a3.webp"
    },
    {
      text: "Lissan's design capabilities are truly exceptional. He brought fresh perspectives and innovative solutions to our project challenges.",
      author: "Rachel Foster",
      role: "UX Lead",
      company: "DesignHub",
      companyLogo: "/images/testimonials/6431fc6a01d447cf515a4721_kate-bagoy 1.webp",
      avatar: "/images/testimonials/6431fc3b11af0d33619cbbf2_23245494-d5fd-4296-ac3a-a49c775da77b 1.webp"
    },
    {
      text: "A rare combination of technical expertise and creative brilliance. Lissan delivered a stunning design that exceeded our expectations.",
      author: "James Wilson",
      role: "Product Owner",
      company: "WebCraft",
      companyLogo: "/images/testimonials/6431fa2be2d0572c3af28690_webk-sydney-logo-circle-Light-500.webp",
      avatar: "/images/testimonials/6431fa2a5c88a3df4c30d458_1b2fee8c-e67f-4cfd-ad9c-352a2c6ae6e4.webp"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">What they say about me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white text-lg mb-8">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="pr-4 border-r border-white/20">
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-white/60">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <img 
                    src={testimonial.companyLogo} 
                    alt={`${testimonial.company} logo`}
                    className="h-8 ml-auto"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}