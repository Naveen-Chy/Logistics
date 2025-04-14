'use client'

import { motion } from 'framer-motion'
import { PhoneCall, Mail } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="relative w-full h-[350px]">
            <Image
              src="/images/van-png.webp"
              alt="Bulls Logistics Trucks"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </motion.div>

        {/* Right Side Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase text-[#db7603] font-semibold tracking-wide mb-2">
            We at Bulls Logistics
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Redefining Scale <span className="text-[#db7603]">Logistics</span>
          </h1>
          <p className="text-gray-700 text-md mb-6">
            Bulls Logistics provides unparalleled and unbeatable shipping solutions with bespoke COD options, economical surface transport, and swift express delivery. Enjoy seamless door-to-door service, real-time tracking, and unwavering 24x7 support. Bulls Logistics is a trustable brand to handle your logistics with a dedicated vendor manager, ensuring smooth and reliable operations for every business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-gray-300">
            <div className="flex items-center gap-4">
              <div className="bg-[#db7603] p-3 rounded-full">
                <PhoneCall className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-600">Call Now</p>
                <p className="font-bold text-lg text-gray-900">+91-9953-66-6767</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#db7603] p-3 rounded-full">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-600">Email Id</p>
                <p className="font-bold text-lg text-gray-900">info@bullslogistics.in</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
