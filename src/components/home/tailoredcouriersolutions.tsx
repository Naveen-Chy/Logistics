'use client'

import { motion } from 'framer-motion'
import {
  PackageSearch,
  Warehouse,
  Handshake,
  Truck,
  PackageCheck,
  Globe,
} from 'lucide-react'

const services = [
  {
    icon: <PackageSearch className="h-10 w-10 text-white" />,
    title: 'Logistic Solutions',
    description:
      'Seamless and dependable logistics for cargo, couriers, shipments, and consignments offering rapid, safe, insured and secure movement tailored and customised to your needs.',
  },
  {
    icon: <Warehouse className="h-10 w-10 text-white" />,
    title: 'Advanced Warehouse Storage',
    description:
      'Maximize space and efficiency through automation, flexible shelving, and real-time tracking, helping businesses streamline operations and reduce costs.',
  },
  {
    icon: <Handshake className="h-10 w-10 text-white" />,
    title: 'B2B Pickup and Drop',
    description:
      'Reliable pickup and drop tailored for business-to-business transactions, ensuring smooth logistics between companies with precision.',
  },
  {
    icon: <PackageCheck className="h-10 w-10 text-white" />,
    title: 'B2C Pickup and Drop',
    description:
      'Pickup and drop for business-to-consumer interactions, facilitating smooth delivery from businesses to individual customers.',
  },
  {
    icon: <Truck className="h-10 w-10 text-white" />,
    title: 'D2C Delivery',
    description:
      'Shipping from businesses straight to end consumers, ensuring fast, dependable service and better customer satisfaction.',
  },
  {
    icon: <Globe className="h-10 w-10 text-white" />,
    title: 'National Logistic Solutions',
    description:
      'Domestic and global logistics services offering adaptable solutions for businesses operating across borders.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase text-[#db7603] font-semibold mb-2">
          What We Serve?
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 leading-tight">
          Tailored{' '}
          <span className="text-[#db7603] relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-[#db7603]">
            Courier
          </span>{' '}
          Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group perspective-1000"
            >
              <div className="flex justify-center mb-4">
                <div
                  className="bg-[#db7603] p-5 rounded-full shadow-md transform-style-3d transition-transform duration-500 group-hover:rotate-y-180"
                >
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
