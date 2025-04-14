'use client'
import { motion } from 'framer-motion'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function GetAQuote() {
  return (
    <>
      <Breadcrumb />
      <section className="max-w-2xl mx-auto my-5">
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

