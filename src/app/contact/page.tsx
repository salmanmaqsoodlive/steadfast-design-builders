'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', budget: '', message: '', isVet: false })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-charcoal min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="veteran-badge mb-5">★ Veteran-Owned</div>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-bold leading-tight mb-4">
            Start a Project
          </h1>
          <p className="text-steel-lighter text-lg max-w-xl">
            Let's discuss your vision. We'll bring the plan, the precision, and the passion.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-maroon-500 text-xs font-semibold uppercase tracking-widest block mb-2">Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full bg-charcoal-700 border border-maroon/15 focus:border-maroon/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-body text-maroon-500 text-xs font-semibold uppercase tracking-widest block mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full bg-charcoal-700 border border-maroon/15 focus:border-maroon/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-maroon-500 text-xs font-semibold uppercase tracking-widest block mb-2">Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        className="w-full bg-charcoal-700 border border-maroon/15 focus:border-maroon/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm"
                        placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="font-body text-maroon-500 text-xs font-semibold uppercase tracking-widest block mb-2">Project Type</label>
                      <select value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})}
                        className="w-full bg-charcoal-700 border border-maroon/15 focus:border-maroon/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm">
                        <option value="">Select type</option>
                        <option>Ground-Up Construction</option>
                        <option>Residential Remodel</option>
                        <option>Commercial Construction</option>
                        <option>Custom Home</option>
                        <option>Addition</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-maroon-500 text-xs font-semibold uppercase tracking-widest block mb-2">Budget Range</label>
                    <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}
                      className="w-full bg-charcoal-700 border border-maroon/15 focus:border-maroon/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm">
                      <option value="">Select range</option>
                      <option>Under $75,000</option>
                      <option>$75,000 - $250,000</option>
                      <option>$250,000 - $750,000</option>
                      <option>$750,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-maroon-500 text-xs font-semibold uppercase tracking-widest block mb-2">Tell Us About Your Project *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full bg-charcoal-700 border border-maroon/15 focus:border-maroon/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm resize-none"
                      placeholder="Describe your project, location, timeline..." />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.isVet} onChange={e => setForm({...form, isVet: e.target.checked})}
                      className="w-4 h-4 accent-maroon-600" />
                    <span className="text-steel-lighter text-sm">I am a veteran / active duty military member</span>
                  </label>
                  <button type="submit" className="w-full py-5 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold uppercase tracking-widest text-sm transition-all shadow-maroon-glow">
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="bg-charcoal-700 border border-maroon/20 p-12 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-2xl text-cream font-bold mb-3">Message Received</h3>
                  <p className="text-steel-lighter">We'll be in touch within 24 hours. Mission accepted.</p>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-2 space-y-5">
              {[
                { label: 'Email', value: 'build@steadfastdesignbuilders.com' },
                { label: 'Specialties', value: 'Commercial & Residential Construction' },
                { label: 'Company Type', value: 'Veteran-Owned & Operated' },
                { label: 'Response Time', value: 'Within 24 business hours' },
              ].map(item => (
                <div key={item.label} className="bg-charcoal-800 border border-maroon/10 p-5">
                  <div className="text-maroon-500 text-xs font-body uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-cream text-sm">{item.value}</div>
                </div>
              ))}
              <div className="bg-maroon/10 border border-maroon/25 p-5">
                <div className="veteran-badge mb-3">★ Veteran Discount</div>
                <p className="text-steel-lighter text-sm leading-relaxed">
                  Fellow veterans receive special consideration on all project quotes. Mention your service when contacting us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
