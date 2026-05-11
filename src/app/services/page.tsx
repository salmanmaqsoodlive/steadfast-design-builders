import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services | Steadfast Design Builders',
  description: 'Full-service commercial and residential construction — ground-up builds, remodels, custom homes, and commercial projects.',
}

const services = [
  {
    title: 'Ground-Up Construction',
    subtitle: 'From Dirt to Done',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    desc: 'We manage every phase of new construction projects — from site prep and permitting through final punch list. Our team handles complex logistics so you don\'t have to.',
    features: ['Site preparation & grading', 'Foundation & structural steel', 'Framing & envelope', 'MEP rough-in & finish', 'Interior & exterior finishes', 'Final inspections & CO'],
  },
  {
    title: 'Residential Remodeling',
    subtitle: 'Elevate Your Living',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    desc: 'Transform your existing home with precision remodeling. We specialize in kitchen renovations, bathroom upgrades, room additions, and full-home transformations.',
    features: ['Kitchen & bath remodels', 'Room additions', 'Basement finishing', 'Master suite renovations', 'Outdoor living spaces', 'Whole-home renovations'],
  },
  {
    title: 'Commercial Construction',
    subtitle: 'Built for Business',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80',
    desc: 'Office buildings, retail centers, restaurants, and warehouses built to exacting commercial standards. We understand that time is money — we deliver on schedule.',
    features: ['Office & professional spaces', 'Retail & restaurant builds', 'Warehouse & industrial', 'Tenant improvements', 'ADA compliance', 'Commercial MEP systems'],
  },
  {
    title: 'Custom Home Building',
    subtitle: 'Your Vision, Exactly',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    desc: 'Luxury custom homes crafted to your exact specifications. We work alongside your architect or offer full design-build services with premium materials throughout.',
    features: ['Design-build available', 'Custom millwork & cabinetry', 'Luxury material sourcing', 'Smart home integration', 'Energy-efficient systems', 'Warranty & follow-up'],
  },
]

export default function Services() {
  return (
    <main className="bg-charcoal min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="veteran-badge mb-5">★ Full-Service Construction</div>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-bold leading-tight mb-4">
            What We Build
          </h1>
          <p className="text-steel-lighter text-lg max-w-xl">
            From ground-up commercial builds to kitchen remodels — we bring veteran-grade precision to every project.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((svc, i) => (
              <div key={svc.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden group ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image src={svc.img} alt={svc.title} width={600} height={450} className="object-cover w-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-1 h-0 bg-maroon group-hover:h-full transition-all duration-500" />
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <span className="text-maroon font-body text-xs font-semibold uppercase tracking-widest block mb-2">{svc.subtitle}</span>
                  <h2 className="font-display text-4xl text-cream font-bold mb-4">{svc.title}</h2>
                  <p className="text-steel-lighter leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-steel-lighter text-sm">
                        <div className="w-4 h-0.5 bg-maroon" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-maroon font-body text-sm font-semibold uppercase tracking-widest hover:text-cream transition-colors">
                    Request a Quote
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-charcoal-800 border border-maroon/20 p-12 text-center">
            <div className="veteran-badge mb-4">★ Veteran-Owned & Operated</div>
            <h3 className="font-display text-3xl text-cream font-bold mb-3">Not Sure What You Need?</h3>
            <p className="text-steel-lighter mb-8 max-w-lg mx-auto">We offer free project consultations. Tell us your vision and we'll build the plan.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold uppercase tracking-widest text-sm transition-all shadow-maroon-glow">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
