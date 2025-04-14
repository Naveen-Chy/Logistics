'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const bannerImages = ["/images/banner1.jpg", "/images/banner2.jpg", "/images/banner3.jpg"]

export function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {bannerImages.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="p-0">
                <CardContent className="relative w-full h-[40vh] sm:h-[60vh] md:h-[80vh] p-0 px-0">
                  <Image
                    src={src}
                    alt={`Banner ${index + 1}`}
                    width={1920}
                    height={800}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  )
}
