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
import { CalendarDays, User } from "lucide-react"

const blogs = [
  {
    id: 1,
    title: "Gaushala: Preserving Cow Heritage",
    image: "/images/blog1.jpg",
    date: "Apr 10, 2024",
    author: "Admin",
  },
  {
    id: 2,
    title: "Gau Dham Seva Initiatives",
    image: "/images/blog2.jpg",
    date: "Apr 7, 2024",
    author: "Team Gaugram",
  },
  {
    id: 3,
    title: "Health Benefits of A2 Milk",
    image: "/images/blog3.jpg",
    date: "Apr 3, 2024",
    author: "Dr. Gopal",
  },
  {
    id: 4,
    title: "Sustainable Living With Cows",
    image: "/images/blog4.jpg",
    date: "Mar 30, 2024",
    author: "Eco India",
  },
  {
    id: 5,
    title: "Building Homes with Cow Dung",
    image: "/images/blog5.jpg",
    date: "Mar 25, 2024",
    author: "Vastu Expert",
  },
]

export function BlogSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <section className="py-20 px-4 md:px-8 bg-white text-black text-center relative pt-0">
      <h4 className="text-sm font-medium text-[#db7603] mb-2 uppercase">Latest News</h4>
      <h2 className="text-4xl md:text-4xl font-bold mb-12">
        Our Latest <span className="text-[#db7603]">News</span> & Blog
        <span className="block w-20 h-1 mx-auto mt-2 bg-[#db7603] rounded-full" />
      </h2>

      <Carousel
        plugins={[plugin.current]} // 🔥 This enables autoplay!
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-1 pb-5">
          {blogs.map((blog, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="shadow-lg overflow-hidden h-full pt-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={300}
                    className="w-full h-60 object-cover"
                  />
                  <CardContent className="p-6 text-left space-y-2 pt-0">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={16} /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={16} /> {blog.author}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-black">{blog.title}</h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
