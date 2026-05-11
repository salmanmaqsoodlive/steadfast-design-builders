'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string
  category: string
  location: string
  sqft: string
  img: string
  tag: string
}

interface Props {
  projects: Project[]
  filters: string[]
}

export default function PortfolioGrid({ projects, filters }: Props) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)}
            className={`px-5 py-2 font-body text-sm font-semibold uppercase tracking-widest transition-all ${
              active === f ? 'bg-maroon text-cream shadow-maroon-glow' : 'bg-charcoal-800 border border-maroon/20 text-steel-lighter hover:border-maroon/40'
            }`}>
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="portfolio-card group relative overflow-hidden">
              <Image src={p.img} alt={p.title} width={600} height={420} className="object-cover w-full h-64 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-maroon text-xs font-body font-semibold uppercase tracking-widest mb-1">{p.category} · {p.tag}</div>
                <h3 className="font-display text-cream text-xl font-bold mb-1">{p.title}</h3>
                <div className="text-steel-lighter text-xs">{p.location} · {p.sqft}</div>
              </div>
              <div className="absolute inset-0 border border-maroon/0 group-hover:border-maroon/40 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
