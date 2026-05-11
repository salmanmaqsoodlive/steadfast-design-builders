'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { num: '01', label: 'Discovery' },
  { num: '02', label: 'Design' },
  { num: '03', label: 'Proposal' },
  { num: '04', label: 'Mobilize' },
  { num: '05', label: 'Build' },
  { num: '06', label: 'Handoff' },
]

interface Props {
  activeStep?: number
}

export default function ProcessTimeline({ activeStep = -1 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="flex items-center gap-0">
      {steps.map((step, i) => (
        <div key={step.num} className="flex items-center gap-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1 }}
            className={`flex flex-col items-center gap-1 ${i <= activeStep ? 'opacity-100' : 'opacity-40'}`}
          >
            <div className={`w-10 h-10 flex items-center justify-center font-display text-sm font-bold ${
              i <= activeStep ? 'bg-maroon text-cream' : 'bg-charcoal-800 border border-maroon/20 text-steel-lighter'
            }`}>
              {step.num}
            </div>
            <span className="text-steel-lighter text-xs font-body uppercase tracking-widest">{step.label}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.05, duration: 0.3 }}
              className={`h-0.5 w-8 origin-left ${i < activeStep ? 'bg-maroon' : 'bg-maroon/15'}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
