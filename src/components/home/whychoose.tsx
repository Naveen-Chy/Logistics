'use client'

import { motion } from 'framer-motion'
import { Truck, ShieldCheck, Clock } from 'lucide-react'

const features = [
  {
    icon: <Truck className="h-14 w-14 text-[#db7603]" />,
    title: 'Door-to-Door Pickup and Drop',
    description:
      'We handle the entire shipping process from the seller’s doorstep to the buyer’s doorstep, ensuring convenience and efficiency.',
  },
  {
    icon: <ShieldCheck className="h-14 w-14 text-[#db7603]" />,
    title: '24×7 Client Support',
    description:
      'Our customer service team is available around the clock to assist with any inquiries, ensuring continuous support and satisfaction.',
  },
  {
    icon: <Clock className="h-14 w-14 text-[#db7603]" />,
    title: 'Prompt Pickup & Drop',
    description:
      'We guarantee that your shipments are collected and delivered on time, minimizing delays and ensuring reliability with safety and insurance.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase text-[#db7603] font-semibold tracking-wider mb-2">
          Why Set with Bulls Logistics for Unmatched Excellence?
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 leading-tight">
          Agility, Assurance, and Expansion—
          <br />
          <span className="text-[#db7603]">Discover Your Edge</span> with{' '}
          <span className="text-[#db7603]">Bulls Logistics</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-7 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
