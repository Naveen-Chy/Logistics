'use client'
import { motion } from 'framer-motion'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={45} className="text-orange-600" />,
    title: 'Office address',
    desc: 'Plot No. 61, Top Floor, Vijay Block, Laxmi Nagar, East Delhi-110092',
  },
  {
    icon: <FaPhoneAlt size={45} className="text-orange-500" />,
    title: 'Telephone number',
    desc: '+91-9953-66-6767',
  },
  {
    icon: <FaEnvelope size={45} className="text-orange-500" />,
    title: 'Mail address',
    desc: 'info@bullslogistics.in',
  },
]

export default function GetAQuote() {
  return (
    <>
      <Breadcrumb />
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <p className="text-orange-600 font-semibold text-2xl">Get a Quote</p>
        <h2 className="text-4xl font-bold text-gray-700 leading-snug">
          Get in Touch And We’ll <br/> Help Your Business
        </h2>

        <div className="space-y-4">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <div className="bg-orange-300 p-4 rounded-md mr-4">
                {info.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{info.title}</h4>
                <p className="text-gray-600 text-md">{info.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 p-6 rounded-xl space-y-4"
      >
        <h3 className="text-4xl font-semibold text-center text-gray-900 mb-5">Get a Quote</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Your Name" className='form-control' />
          <Input placeholder="Your Email Id" className='form-control' />
          <Input placeholder="Contact Number" className='form-control' />
          <Input placeholder="Your Place" className='form-control' />
        </div>

        <select className="w-full p-2 border border-gray-300 rounded form-control text-gray-600">
          <option value="selected">—Please choose an option—</option>
          <option value="transport">Transport Services</option>
          <option value="logistics">Logistics Support</option>
          <option value="moving">Packers & Movers</option>
        </select>

        <Textarea placeholder="Your Message?"  className="resize-none h-40" />

        <Button className="w-full bg-orange-600 hover:bg-orange-700 py-6 text-1xl form-control text-white mt-4">
          Submit Now
        </Button>
      </motion.div>
     </section>
    </>
   
  )
}

