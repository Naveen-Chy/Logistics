'use client'
import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Riea Joseph",
    title: "Logistics Manager",
    review: "Bulls Logistics simplifies your national and international shipping. Their real-time tracking and personalized service ensure your logistics are always on point, no matter where we're shipping.",
  },
  {
    name: "Ankit Sharma",
    title: "Ecommerce Owner",
    review:
      "Bulls Logistics handles our D2C deliveries with precision. Their tailored COD facilities and dedicated vendor manager make our shipping process smooth and reliable.”								",
  },
  {
    name: "Neha Verma",
    title: "Operations Head",
    review: "Bulls Logistics has streamlined our B2B pickups and drops. Their reliability and real-time tracking keep us updated and confident in our logistics operations.",
  },
]

export function TestimonialsSlider() {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: false })
    )
  return (
    <section className="py-20 px-4 md:px-8 bg-white text-black text-center">
      <h4 className="text-sm font-medium text-[#db7603] mb-2 uppercase">Testimonials</h4>
      <h2 className="text-4xl font-bold mb-12">
        Client <span className="text-[#db7603]">Reviews</span>
      </h2>

      <div
        className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto"
        style={{ columnGap: "15px" }}
      >
        {/* Fixed Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/Testimonials.webp"
            alt="Client Testimonials"
            width={500}
            height={400}
            className="rounded-lg object-contain mx-auto"
          />
        </div>

        {/* Vertical Carousel */}
        <div className="w-full md:w-1/2 max-w-lg">
          <Carousel plugins={[plugin.current]} opts={{ align: "start" }} orientation="vertical" className="h-[250px]">
            <CarouselContent className="-mt-1 h-[300px]">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="pt-1">
                  <div className="p-1">
                    <Card className="bg-[#f9f9f9] text-left shadow-md h-full">
                      <CardContent className="px-8 py-4 space-y-3">
                        <Quote size={40} className="text-[#db7603]" />
                        <p className="text-gray-800 italic">"{item.review}"</p>
                        <div>
                          <h4 className="text-lg font-bold text-black">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
