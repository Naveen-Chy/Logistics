'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CountUp from 'react-countup'
import { ClipboardList, Users, Trophy, Truck } from 'lucide-react'

const stats = [
  {
    icon: <ClipboardList className="h-15 w-15 text-orange-500" />,
    value: 10000,
    suffix: '+',
    label: 'Parcel Delivered',
  },
  {
    icon: <Users className="h-15 w-15 text-orange-500" />,
    value: 2000,
    suffix: '+',
    label: 'Satisfied Clients',
  },
  {
    icon: <Trophy className="h-15 w-15 text-orange-500" />,
    value: 100,
    suffix: '%',
    label: 'Delivered Packages',
  },
  {
    icon: <Truck className="h-15 w-15 text-orange-500" />,
    value: 40,
    suffix: '%',
    label: 'Upto Least RTO',
  },
]

export default function Counter() {
  return (
    <section className="py-10 bg-muted">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, idx) => (
          <Card key={idx} className="text-center shadow-md">
            <CardHeader>
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <CardTitle className="text-3xl text-primary font-bold">
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-md font-semibold text-muted-foreground">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
