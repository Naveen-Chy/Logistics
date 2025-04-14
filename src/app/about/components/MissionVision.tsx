'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Our Mission',
    desc: 'At the heart of our mission is a commitment to delivering supply chain solutions that are both flexible and dependable, all while maintaining cost efficiency. With a trusted network of over 1,000 clients—ranging from major e-commerce platforms and direct-to-consumer brands to SMEs across diverse sectors like FMCG, electronics, lifestyle, retail, automotive, and manufacturing—we ensure unparalleled service.',
    img: '/images/ourmission.jpg',
    bg: 'bg-gray-100',
  },
  {
    title: 'Our Vision',
    desc: 'To set a quality benchmark in logistics, establishing new standards for excellence and dedicated service, and empowering businesses with unparalleled solutions worldwide',
    img: '/images/Our-Vision.jpg',
    bg: 'bg-red-100',
  },
  {
    title: 'Our Philosophy',
    desc: 'Focused on reliability and customer-centricity, we believe in building strong partnerships through transparency, dedication, and tailored solutions that meet the unique needs of every business.',
    img: '/images/Philosophy.jpg',
    bg: 'bg-purple-100',
  },
]

export default function MissionVision() {
  return (
    <div className="space-y-12 py-10 md:py-16">
      {sections.map((item, index) => {
        const isReversed = index % 2 !== 0
        return (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div
                className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl shadow-sm ${
                  isReversed ? 'md:flex-row-reverse' : ''
                } ${item.bg}`}
              >
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex-1 w-full h-64 relative rounded-md overflow-hidden shadow-md">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )
      })}
    </div>
  )
}
