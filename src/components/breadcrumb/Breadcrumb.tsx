'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const pageInfo: Record<string, { title: string; image: string }> = {
  '/about': { title: 'About Us', image: '/images/bread-bg.jpg' },
  '/services': { title: 'Our Services', image: '/images/bread-bg.jpg' },
  '/services/surface': { title: 'Surface Delivery', image: '/images/bread-bg.jpg' },
  '/services/b2b': { title: 'B2B Logistics Solution', image: '/images/bread-bg.jpg' },
  '/services/b2c': { title: 'B2C Pickup and Drop', image: '/images/bread-bg.jpg' },
  '/services/logistics': { title: 'Logistic Solutions', image: '/images/bread-bg.jpg' },
  '/services/warehouse': { title: 'Advanced Warehouse Storage', image: '/images/bread-bg.jpg' },
  '/services/national': { title: 'National Logistic Solutions', image: '/images/bread-bg.jpg' },
  '/services/tailored': { title: 'Tailored Solutions', image: '/images/bread-bg.jpg' },
  '/services/express': { title: 'Express Delivery', image: '/images/bread-bg.jpg' },
  '/services/d2c': { title: 'D2C Delivery', image: '/images/bread-bg.jpg' },
  '/contact': { title: 'Contact Us', image: '/images/bread-bg.jpg' },
  '/blog': { title: 'Our Blog', image: '/images/bread-bg.jpg' },
  '/project': { title: 'Our Project', image: '/images/bread-bg.jpg' },
  '/enquiry': { title: 'Enquiry Now', image: '/images/bread-bg.jpg' },
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  let fullPath = ''
  const crumbs = pathSegments.map((segment) => {
    fullPath += `/${segment}`
    return {
      href: fullPath,
      title: pageInfo[fullPath]?.title || segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
      image: pageInfo[fullPath]?.image,
    }
  })

  const lastCrumb = crumbs[crumbs.length - 1]
  const image = lastCrumb?.image || '/images/bread-bg.jpg'

  return (
    <section className="relative h-64 w-full overflow-hidden">
      <Image
        src={image}
        alt={lastCrumb?.title || ''}
        layout="fill"
        objectFit="cover"
        priority
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-2">{lastCrumb?.title}</h1>
        <div className="text-sm text-gray-200 space-x-1 flex flex-wrap items-center justify-center">
          <Link href="/" className="hover:underline text-white">
            Home
          </Link>
          {crumbs.map((crumb, index) => (
            <span key={index} className="flex items-center space-x-1">
              <span>/</span>
              {index === crumbs.length - 1 ? (
                <span className="capitalize">{crumb.title}</span>
              ) : (
                <Link href={crumb.href} className="hover:underline text-white capitalize">
                  {crumb.title}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
