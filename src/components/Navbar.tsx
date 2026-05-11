'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/veteran', label: 'Our Commitment' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
]

function SDBLogo() {
  return (
    <Link href="/" className="flex items-center gap-4 group">
      <svg width="52" height="36" viewBox="0 0 52 36" fill="none" className="flex-shrink-0">
        {/* S */}
        <rect x="0" y="0" width="13" height="4" fill="#8b2635"/>
        <rect x="0" y="0" width="4" height="15" fill="#8b2635"/>
        <rect x="0" y="11" width="13" height="4" fill="#8b2635"/>
        <rect x="9" y="11" width="4" height="15" fill="#8b2635"/>
        <rect x="0" y="22" width="13" height="4" fill="#8b2635"/>
        {/* D */}
        <rect x="17" y="0" width="4" height="26" fill="#8b2635"/>
        <rect x="17" y="0" width="11" height="4" fill="#8b2635"/>
        <rect x="17" y="22" width="11" height="4" fill="#8b2635"/>
        <rect x="24" y="4" width="4" height="18" fill="#8b2635"/>
        {/* B */}
        <rect x="33" y="0" width="4" height="26" fill="#8b2635"/>
        <rect x="33" y="0" width="10" height="4" fill="#8b2635"/>
        <rect x="33" y="11" width="10" height="4" fill="#8b2635"/>
        <rect x="33" y="22" width="10" height="4" fill="#8b2635"/>
        <rect x="39" y="4" width="4" height="7" fill="#8b2635"/>
        <rect x="39" y="15" width="4" height="7" fill="#8b2635"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-cream text-base font-bold tracking-wider">STEADFAST</span>
        <span className="font-body text-steel-lighter text-xs tracking-[0.2em] uppercase mt-0.5">Design Builders</span>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-900/95 backdrop-blur-xl border-b border-maroon/15 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <SDBLogo />

          {/* Veteran badge desktop */}
          <div className="hidden xl:block veteran-badge">
            <span>★ Veteran-Owned</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 font-body text-sm font-medium tracking-wide transition-colors relative group ${
                  pathname === link.href ? 'text-maroon-500' : 'text-silver/60 hover:text-cream'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 right-0 h-[1px] bg-maroon-600 transition-transform duration-300 origin-left ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-3 bg-maroon hover:bg-maroon-600 text-cream font-body text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-maroon-sm"
            >
              Start a Project
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            <motion.div className="flex flex-col gap-1.5">
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-maroon block" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-silver/50 block" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-maroon block" />
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal-900/99 backdrop-blur-2xl flex flex-col items-start justify-center px-10"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} className="border-b border-charcoal-600 w-full">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-cream/80 hover:text-maroon-500 transition-colors block py-4"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8">
              <span className="veteran-badge">★ Veteran-Owned & Operated</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
