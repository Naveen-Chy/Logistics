'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const services = [
  { title: 'Logistic Solutions', href: '/services/logistics' },
  { title: 'Advanced Warehouse Storage', href: '/services/warehouse' },
  { title: 'Express Delivery', href: '/services/express' },
  { title: 'Surface Delivery', href: '/services/surface' },
  { title: 'B2B Logistics Solution', href: '/services/b2b' },
  { title: 'B2C Pickup and Drop', href: '/services/b2c' },
  { title: 'D2C Delivery', href: '/services/d2c' },
  { title: 'National Logistic Solutions', href: '/services/national' },
  { title: 'Tailored Solutions', href: '/services/tailored' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const menuLinkClass =
    'text-[#080820] text-[14px] font-bold uppercase hover:text-blue-600'

  return (
    <nav className="bg-white border-b shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-1">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image
              src="/images/bullslogistics.png"
              alt="Bulls Logistics"
              width={140}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={menuLinkClass}>Home</Link>
            <Link href="/about" className={menuLinkClass}>About Us</Link>

            {/* Services Dropdown */}
            <div
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="relative"
            >
              <button className={`${menuLinkClass} flex items-center`}>
                Our Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-6 left-0 bg-white border rounded-md shadow-md w-64 py-2 z-10">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-[#080820] hover:bg-gray-100 uppercase font-bold text-[14px]"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/project" className={menuLinkClass}>Our Project</Link>
            <Link href="/contact" className={menuLinkClass}>Contact Us</Link>

            {/* Enquiry Now & Agent Login Buttons */}
            <div className="flex space-x-3 ml-6">
              <Link
                href="/enquiry"
                className="bg-[#db7603] hover:bg-orange-700 text-white px-4 py-2  text-sm font-semibold"
              >
                Enquiry Now
              </Link>
              <Link
                href="https://agent.bullslogistics.in/"
                className="bg-[#080820] hover:bg-[#0c0c2c] text-white px-4 py-2  text-sm font-semibold" target='_blank'
              >
                Agent Login
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <Link href="/" className={menuLinkClass}>Home</Link>
          <Link href="/about" className={menuLinkClass}>About Us</Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center w-full ${menuLinkClass}`}
            >
              Our Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-[#080820] hover:bg-gray-100 uppercase font-bold text-[14px]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/project" className={menuLinkClass}>Our Project</Link>
          <Link href="/contact" className={menuLinkClass}>Contact Us</Link>

          {/* Mobile Enquiry & Login Buttons */}
          <div className="pt-2 space-y-2">
            <Link
              href="/enquiry"
              className="block bg-[#db7603] hover:bg-orange-700 text-white px-4 py-2  text-center text-sm font-semibold"
            >
              Enquiry Now
            </Link>
            <Link
              href="https://agent.bullslogistics.in/" target='_blank'
              className="block bg-[#080820] hover:bg-[#0c0c2c] text-white px-4 py-2  text-center text-sm font-semibold"
            >
              Agent Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
