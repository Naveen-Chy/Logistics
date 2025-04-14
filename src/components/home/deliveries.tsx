'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Streamlined() {
  return (
    <section className="bg-[#080820] text-white pt-5 pb-0 px-6 mb-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-1 md:gap-1">
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[400px] md:h-[500px]"
        >
          <Image
            src="/images/Deliveries.png"
            alt="Delivery Guy"
            fill
            className="object-left object-contain md:object-cover"
            priority
            // style={{ maxWidth: '100% !important', width: 'auto' }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="px-4 md:px-10"
        >
          <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-4">
            Streamlined & Swift <br />
            Courier{' '}
            <span className="text-[#db7603] relative inline-block">
              Deliveries
              <span className="block h-[3px] bg-[#db7603] w-full mt-1 rounded-full"></span>
            </span>
          </h1>

          <motion.p
            className="text-gray-300 text-base md:text-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our goal is to lead the way in the logistics across all our operational regions.
            By providing reliable expert logistic services, we enhance customer experiences
            and drive positive market transformation with personalized 24/7 client support.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
