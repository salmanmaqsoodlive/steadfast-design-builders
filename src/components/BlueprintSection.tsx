'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  title: string
  subtitle?: string
  items: { label: string; value: string }[]
}

export default function BlueprintSection({ title, subtitle, items }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="relative bg-charcoal-800 border border-maroon/10 p-8 overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-bg opacity-30" />

      {/* Animated border line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-maroon origin-left"
      />

      <div className="relative z-10">
        <div className="veteran-badge mb-4">★ Specifications</div>
        <h3 className="font-display text-2xl text-cream font-bold mb-2">{title}</h3>
        {subtitle && <p className="text-steel-lighter text-sm mb-6">{subtitle}</p>}

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="border-l border-maroon/30 pl-3"
            >
              <div className="text-maroon text-xs font-body font-semibold uppercase tracking-widest mb-0.5">{item.label}</div>
              <div className="text-cream text-sm">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-maroon/20" />
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-maroon/20" />
    </div>
  )
}
