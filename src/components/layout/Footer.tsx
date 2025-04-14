"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#080820] text-white pt-16 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Column 1 - Logo + Desc */}
        <motion.div className="md:col-span-3" custom={0} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <Image
            src="/images/footerlogo.png"
            alt="Bulls Logistics Logo"
            width={130}
            height={60}
            className="mb-4"
          />
          <p className="text-sm text-gray-300 leading-7">
            Seamlessly connecting you to the world, our logistic experts ensure your packages arrive with speed and care.
            From local drops to global reaches, tested and trusted to deliver excellence every time irrespective of your business size.
          </p>
        </motion.div>

        {/* Column 2 - Quick Links */}
        <motion.div className="md:col-span-2" custom={1} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Legals", "Privacy Policy", "Terms & Conditions", "Refund & Return Policy", "Shipping Policy"].map((link, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:underline hover:text-orange-500 text-gray-300 transition-colors duration-200 leading-7"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 - Official Info */}
        <motion.div className="md:col-span-4" custom={2} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <h3 className="text-lg font-semibold mb-4">Official info:</h3>
          <div className="flex items-start gap-2 text-sm text-gray-300 mb-4">
            <MapPin className="text-orange-500 w-6 h-6 mt-1 w-10" />
            <span>Plot No. 61, Top Floor, Vijay Block, Laxmi Nagar, East Delhi-110092</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <PhoneCall className="text-orange-500 w-6 h-6 w-8" />
            <a href="tel:+919953666767"> +91-9953-66-6767</a>
          </div>
          <div className="text-sm text-gray-300">
            <span className="font-bold underline">Open Hours:</span>
            <p className="mt-3">Mon-Sat: 09:00 AM – 07:00 PM</p>
          </div>
        </motion.div>

        {/* Column 4 - Newsletter */}
        <motion.div className="md:col-span-3" custom={3} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay updated with the latest logistics trends, offers & insights. Subscribe now!
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-4 rounded-md bg-white text-black placeholder-gray-500 text-sm w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="px-4 py-4 rounded-md bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400"
      >
        Bulls Logistics © 2024 Bulls Travelism Pvt Ltd
      </motion.div>
    </footer>
  );
}
