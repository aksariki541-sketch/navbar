'use client'

import React from 'react'
import GooeyNav from './GooeyNav'

const items = [
  { label: "Android", href: "/projects" },
  { label: "iOS", href: "/projects/ios" },
  { label: "Website", href: "/projects/website" },
];

const Pnave = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
  )
}

export default Pnave