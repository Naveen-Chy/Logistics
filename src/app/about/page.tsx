import React from 'react'
import type { Metadata } from "next";
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Counter from './components/Counter'
import MissionVision from './components/MissionVision'
import AboutCompany  from './components/AboutCompany'

export const metadata: Metadata = {
  title: "About Us",
  description: "Bulls Logistics",
  icons: {
    icon: [
      {
        url: "/favicon.ico", // ✅ ye line required hai
        type: "image/x-icon",
        sizes: "any",
      },
    ],
  },
};

export default function About() {
  return (
    <>
      <Breadcrumb />
      <AboutCompany/>
      <Counter/>
      <MissionVision/>
    </>
  )
}
