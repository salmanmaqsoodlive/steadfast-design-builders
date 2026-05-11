import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Testimonials | Steadfast Design Builders',
  description: 'What clients say about Steadfast Design Builders — veteran-owned commercial and residential construction.',
}

const testimonials = [
  {
    quote: "Steadfast did our office build-out on time and under budget. Their crew was professional, the site stayed clean, and the communication was outstanding from day one.",
    name: 'Jennifer Walsh',
    role: 'Managing Partner, Walsh & Associates Law',
    project: 'Commercial Office Build-Out',
    stars: 5,
  },
  {
    quote: "We hired Steadfast to build our custom home and couldn't be more pleased. They flagged issues before they became problems, kept us in the loop daily, and the craftsmanship is exceptional.",
    name: 'Marcus & Diane Chen',
    role: 'Homeowners',
    project: '6,100 sq ft Custom Home',
    stars: 5,
  },
  {
    quote: "As a veteran myself, I specifically sought out a vet-owned company for our warehouse expansion. Steadfast brought the same discipline and integrity you'd expect from a military background.",
    name: 'Col. (Ret.) Robert Vickers',
    role: 'CEO, Vickers Logistics',
    project: '35,000 sq ft Warehouse',
    stars: 5,
  },
  {
    quote: "Our kitchen remodel was handled with incredible care. They protected the rest of our home, finished on schedule, and the result looks like it was always meant to be there.",
    name: 'Alicia Fontaine',
    role: 'Homeowner',
    project: 'Full Kitchen + Master Bath Remodel',
    stars: 5,
  },
  {
    quote: "Three phases of construction on our retail center — Steadfast handled all of them. Consistent quality, same level of care every time. They're our contractor for life.",
    name: 'David Park',
    role: 'Owner, Park Properties Group',
    project: 'Riverside Retail Complex (Phases 1–3)',
    stars: 5,
  },
  {
    quote: "I interviewed six contractors before choosing Steadfast. Their proposal was the most detailed, their references checked out perfectly, and they delivered exactly what they promised.",
    name: 'Susan Hargrove',
    role: 'Homeowner',
    project: 'Second-Story Addition',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <main className="bg-charcoal min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="veteran-badge mb-5">★ Client Stories</div>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-bold leading-tight mb-4">
            What Clients Say
          </h1>
          <p className="text-steel-lighter text-lg max-w-xl">
            Our reputation is built one project at a time. Here's what clients have to say about working with us.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-charcoal-800 border border-maroon/10 p-8 hover:border-maroon/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-maroon text-sm">★</span>
                  ))}
                </div>
                <blockquote className="text-steel-lighter leading-relaxed mb-6 italic text-lg">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-maroon/10 pt-4">
                  <div className="font-display text-cream font-bold">{t.name}</div>
                  <div className="text-steel-lighter text-sm mt-0.5">{t.role}</div>
                  <div className="text-maroon text-xs font-body font-semibold uppercase tracking-widest mt-2">{t.project}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-maroon/10 border border-maroon/25 p-12 text-center">
            <div className="text-maroon font-body text-xs font-semibold uppercase tracking-widest mb-3">Join Our Satisfied Clients</div>
            <h3 className="font-display text-3xl text-cream font-bold mb-3">Start Your Project</h3>
            <p className="text-steel-lighter mb-8 max-w-md mx-auto">We'd love to earn your trust. Let's talk about what you want to build.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold uppercase tracking-widest text-sm transition-all shadow-maroon-glow">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
