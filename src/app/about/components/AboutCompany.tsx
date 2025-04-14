"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutCompany() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-5">
          {/* LEFT IMAGE + BADGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full">
              {/* Background Shape */}
              <div className="absolute -top-6 -left-6 bg-pink-100 w-full h-full -z-10 rounded-sm" />

              {/* Courier Image */}
              <Image
                src="/images/about.jpg"
                alt="Courier"
                width={600}
                height={500}
                className="rounded-xl w-full h-auto"
              />

              {/* Badge Box */}
              <div className="absolute top-5 left-5 bg-white shadow-lg rounded-lg px-5 py-4 w-70">
                <h2 className="text-4xl font-bold text-primary">
                  5<span className="text-red-500">+Years</span>
                </h2>
                <p className="text-md text-muted-foreground">
                  Years of expertise delivering precision and care in every shipment
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <Badge className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full w-fit">
              About Company
            </Badge>
            <h2 className="text-4xl font-bold leading-snug text-gray-900">
            Digital & Trusted Transport Logistics Company
            </h2>
            <p className="text-muted-foreground text-base space-y-3">Experience excellence with our cutting-edge logistics solutions. Our innovative approach ensures seamless, reliable transport, combining modern technology with exceptional service. From streamlined processes to personalized care, we’re dedicated to meeting your needs with precision and efficiency.</p>

            {/* SERVICE CARDS */}
            <div className="space-y-4">
              <Card className="shadow-md hover:shadow-xl transition duration-300 p-0">
                <CardContent className="flex items-start gap-5 p-6">
                  <div className="bg-orange-100 p-2 rounded-md text-xl">🌍</div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800">Global Service</h4>
                    <p className="text-muted-foreground text-md mt-1">
                    Comprehensive Logistic Solutions Tailored for<br/> Every Business Need
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-xl transition duration-300 p-0">
                <CardContent className="flex items-start gap-5 p-6">
                  <div className="bg-orange-100 p-2 rounded-md text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800">Local Service</h4>
                    <p className="text-muted-foreground text-md mt-1">
                    Expertise in Every Detail, Ensuring Seamless Solutions<br/> Right Where You Are
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
        <p className="text-muted-foreground text-base space-y-3 mt-5">At Bulls Logistics, we pride ourselves on delivering flexible and dependable supply chain solutions designed to meet diverse needs with cost efficiency in mind. Our extensive network supports over 30,000 clients, including major e-commerce platforms, direct-to-consumer brands, and SMEs across sectors like FMCG, electronics, retail, automotive, and manufacturing. This broad reach enables us to provide unparalleled service tailored to the unique demands of each industry.</p>
        <p className="text-muted-foreground text-base space-y-3 mt-3 mb-4">Our robust logistics infrastructure is complemented by a global partner network, allowing us to offer integrated and efficient solutions. By investing in advanced automation and leveraging our proprietary logistics operating system, we ensure that every aspect of our service operates in harmony, creating synergies that enhance overall performance and reliability.</p>

        <p className="text-muted-foreground text-base space-y-3">At Bulls Logistics, we are more than just a service provider; we are a dedicated partner committed to supporting and enhancing our clients’ success. Our focus on innovation and personalized service drives us to continuously improve and adapt, ensuring that we deliver solutions that truly make a difference in our clients’ operations.</p>
      </div>
    </section>
  );
}
