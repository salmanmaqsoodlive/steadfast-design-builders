'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const filters = ['All', 'Commercial', 'Residential', 'Custom Home', 'Remodel']

const projects = [
  { title: 'Riverside Office Complex', category: 'Commercial', location: 'Downtown', sqft: '12,400 sq ft', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80', tag: 'Completed 2024' },
  { title: 'The Harmon Residence', category: 'Custom Home', location: 'North Hills', sqft: '4,800 sq ft', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', tag: 'Completed 2024' },
  { title: 'Oak Street Retail Strip', category: 'Commercial', location: 'Midtown', sqft: '8,200 sq ft', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', tag: 'Completed 2023' },
  { title: 'Lakeside Kitchen + Bath', category: 'Remodel', location: 'Lakeview', sqft: '1,200 sq ft', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', tag: 'Completed 2024' },
  { title: 'Evergreen Custom Home', category: 'Custom Home', location: 'West Ridge', sqft: '6,100 sq ft', img: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80', tag: 'Completed 2023' },
  { title: 'Parkview Townhomes', category: 'Residential', location: 'Eastside', sqft: '22,000 sq ft', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', tag: 'Completed 2023' },
  { title: 'Central Warehouse', category: 'Commercial', location: 'Industrial Park', sqft: '35,000 sq ft', img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80', tag: 'Completed 2022' },
  { title: 'Maple Street Addition', category: 'Remodel', location: 'South Side', sqft: '850 sq ft', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', tag: 'Completed 2024' },
  { title: 'The Wellington Estate', category: 'Custom Home', location: 'Country Club', sqft: '8,400 sq ft', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', tag: 'Completed 2022' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="bg-charcoal min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="veteran-badge mb-5">★ Our Work</div>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-bold leading-tight mb-4">
            Portfolio
          </h1>
          <p className="text-steel-lighter text-lg max-w-xl">
            A selection of completed projects — commercial builds, custom homes, and precision remodels.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
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

          <div className="mt-16 text-center">
            <p className="text-steel-lighter mb-6">Interested in working together?</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold uppercase tracking-widest text-sm transition-all shadow-maroon-glow">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
