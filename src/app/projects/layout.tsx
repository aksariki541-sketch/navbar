'use client'

import React from 'react'
import GooeyNav from '@/components/GooeyNav'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const items = [
  { label: 'Android', href: '/projects' },
  { label: 'iOS', href: '/projects/ios' },
  { label: 'Website', href: '/projects/website' },
]

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const activeIndex = items.findIndex(item => pathname === item.href) || 0

  return (
    <div
      className="flex flex-col items-center mt-20"
    >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={activeIndex}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      {children}
    </ div>
  )
}
