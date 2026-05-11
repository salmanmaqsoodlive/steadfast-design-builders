'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 2200, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const services = [
  { title: 'Ground-Up Construction', desc: 'New builds from foundation to final finish — residential and commercial.', icon: '🏗' },
  { title: 'Residential Remodeling', desc: 'Kitchens, bathrooms, additions, and whole-home transformations.', icon: '🏠' },
  { title: 'Commercial Construction', desc: 'Office, retail, and industrial projects executed with precision.', icon: '🏢' },
  { title: 'Custom Home Design-Build', desc: 'Your vision, our expertise — designed and built under one roof.', icon: '✏️' },
  { title: 'Project Management', desc: 'Full-scope oversight from planning through punch list.', icon: '📋' },
  { title: 'Renovation & Restoration', desc: 'Breathing new life into existing structures with expert craftsmanship.', icon: '🔨' },
]

const portfolio = [
  { title: 'Lakewood Estate', type: 'Residential', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80' },
  { title: 'Meridian Commercial', type: 'Commercial', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80' },
  { title: 'Park Hill Kitchen', type: 'Remodel', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80' },
  { title: 'Ridgecrest Custom Build', type: 'New Construction', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80' },
]

const processSteps = [
  { num: '01', title: 'Consult', desc: 'We listen, assess, and understand your full vision.' },
  { num: '02', title: 'Design', desc: 'Detailed architectural plans and material selections.' },
  { num: '03', title: 'Permit', desc: 'All permits secured — we handle the bureaucracy.' },
  { num: '04', title: 'Build', desc: 'Expert construction with regular client updates.' },
  { num: '05', title: 'Deliver', desc: 'Final walkthrough, punch list, and project handover.' },
]

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="overflow-x-hidden bg-charcoal">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>

        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 z-[1] blueprint-bg opacity-30" />

        {/* Maroon accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={loaded ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-maroon z-[2] origin-left"
        />

        <div className="relative z-[2] container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="veteran-badge">★ Veteran-Owned & Operated</div>
          </motion.div>

          {['Steadfast', 'Design', 'Builders.'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={loaded ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.2 }}
                className={`font-display text-6xl sm:text-8xl md:text-[7rem] leading-none font-bold ${
                  i === 1 ? 'text-maroon-gradient' : 'text-cream'
                }`}
              >
                {word}
              </motion.h1>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
            className="font-body text-silver/70 text-lg max-w-xl mt-6 mb-8 leading-relaxed"
          >
            Built with military precision. Delivered with excellence. Ground-up construction and remodeling for residential and commercial clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold text-sm uppercase tracking-widest transition-all shadow-maroon-glow hover:-translate-y-0.5">
              Start a Project
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 border border-silver/20 text-silver/70 hover:text-cream hover:border-silver/40 font-body font-medium text-sm uppercase tracking-widest transition-all">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VETERAN BANNER */}
      <section className="py-12 bg-maroon/10 border-y border-maroon/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80" alt="American flag" fill className="object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="text-4xl">⭐</div>
            <div>
              <h3 className="font-body font-bold text-cream text-lg uppercase tracking-widest mb-1">VETERAN-OWNED & OPERATED</h3>
              <p className="text-steel-lighter text-sm">We bring the discipline, loyalty, and precision of military service to every project we build. Mission-first, excellence always.</p>
            </div>
            <Link href="/veteran" className="ml-auto text-maroon-500 text-sm font-body uppercase tracking-widest hover:text-cream transition-colors whitespace-nowrap flex items-center gap-2">
              Our Commitment
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <div className="py-16 bg-charcoal-800 border-b border-maroon/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: 15, suf: '+', label: 'Years of Service' },
              { val: 300, suf: '+', label: 'Projects Completed' },
              { val: 100, suf: '%', label: 'Licensed & Insured' },
              { val: 5, suf: '★', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-maroon-gradient mb-1">
                  <AnimatedCounter target={s.val} suffix={s.suf} />
                </div>
                <div className="text-steel-lighter text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="font-body text-maroon-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-3">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl text-cream font-bold leading-tight">
              What We Build
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="service-card p-7 rounded-sm cursor-pointer"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-body font-bold text-cream text-lg mb-3">{s.title}</h3>
                <p className="text-steel-lighter text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-maroon-500/0 group-hover:text-maroon-500 transition-colors text-xs font-body uppercase tracking-widest">
                  Learn More →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 bg-charcoal-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-cream font-bold">Our Work</h2>
              <p className="text-steel-lighter mt-2">Built with pride, finished with precision</p>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-maroon-500 text-sm font-body uppercase tracking-widest hover:text-cream transition-colors">
              View All
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolio.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="portfolio-card"
                style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}
              >
                <Image src={item.img} alt={item.title} fill className="object-cover" />
                <div className="overlay" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-maroon-400 text-xs font-body uppercase tracking-widest">{item.type}</span>
                  <h3 className="font-display text-xl text-cream font-bold mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl text-cream font-bold">How We Build</h2>
            <div className="w-12 h-0.5 bg-maroon mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 border border-maroon/30 rounded-full flex items-center justify-center mx-auto mb-4 bg-maroon/5">
                  <span className="font-body font-bold text-maroon-500 text-sm">{step.num}</span>
                </div>
                <h3 className="font-body font-bold text-cream uppercase tracking-wider text-sm mb-2">{step.title}</h3>
                <p className="text-steel-lighter text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-charcoal-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-display text-7xl text-maroon/20 text-center leading-none mb-6">"</div>
            <p className="font-display text-2xl md:text-3xl text-cream/80 text-center italic leading-relaxed mb-8">
              Steadfast delivered our custom home on time, on budget, and beyond our expectations. Their military background shows in every detail — these builders mean business.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-maroon/20 flex items-center justify-center text-maroon-500 font-bold">RK</div>
              <div>
                <div className="text-cream font-semibold text-sm">Robert & Karen Mitchell</div>
                <div className="text-steel-lighter text-xs">Custom Home Client</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="veteran-badge mx-auto w-fit mb-6">★ Veteran-Owned</div>
            <h2 className="font-display text-5xl md:text-7xl text-cream font-bold leading-none mb-4">
              READY TO BUILD?
            </h2>
            <p className="text-steel-lighter text-lg mb-10 max-w-lg mx-auto">
              Let's build something exceptional together. Contact us for a free consultation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold uppercase tracking-widest text-sm transition-all shadow-maroon-glow hover:-translate-y-1">
              Start Your Project
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
