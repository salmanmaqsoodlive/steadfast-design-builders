import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Veteran Commitment | Steadfast Design Builders',
  description: 'Veteran-owned construction company. We bring military precision, discipline, and dedication to every project.',
}

export default function Veteran() {
  return (
    <main className="bg-charcoal min-h-screen">
      <Navbar />

      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
            alt="American flag"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-5xl mb-4">⭐</div>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-bold leading-tight mb-4">
            Built by Veterans.<br /><span className="text-maroon-gradient">Built for Life.</span>
          </h1>
          <p className="text-steel-lighter text-lg max-w-2xl">
            We bring the discipline, precision, and unwavering commitment of military service to every project we take on.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <p className="text-steel-lighter text-xl leading-relaxed">
              The military doesn't just teach you how to follow orders — it teaches you how to lead, how to plan, how to execute under pressure, and how to never leave a mission unfinished. Every day at Steadfast Design Builders, we apply those same principles to the projects we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { value: 'Mission First', desc: 'Every project is a mission. We plan thoroughly and execute flawlessly.' },
              { value: 'No Man Left Behind', desc: 'No project left unfinished. We see every commitment through to completion.' },
              { value: 'Attention to Detail', desc: 'We were trained to notice what others miss — and it shows in our work.' },
              { value: 'Accountability', desc: 'We take ownership of everything — the good and the challenge.' },
            ].map((v) => (
              <div key={v.value} className="service-card p-6 text-center">
                <div className="w-10 h-0.5 bg-maroon mx-auto mb-4" />
                <h3 className="font-body font-bold text-cream text-base mb-3">{v.value}</h3>
                <p className="text-steel-lighter text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 bg-charcoal-800 p-10">
            <div>
              <div className="veteran-badge mb-5">★ For Fellow Veterans</div>
              <h2 className="font-display text-3xl text-cream font-bold mb-4">VA Construction Loan Guidance</h2>
              <p className="text-steel-lighter leading-relaxed mb-4">
                As veterans ourselves, we understand the unique financing options available to you. We work with VA-backed construction loans and can guide you through the process of using your earned benefits to build or remodel your home.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'VA construction loan expertise',
                  'Military family discounts available',
                  'We speak your language',
                  'Priority scheduling for active duty',
                  'Flexible timeline for deployments',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-steel-lighter text-sm">
                    <div className="w-1.5 h-1.5 bg-maroon rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold text-sm uppercase tracking-widest transition-all shadow-maroon-sm">
                Contact Us
              </Link>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
              alt="Veteran builders"
              width={500}
              height={450}
              className="object-cover w-full"
            />
          </div>

          <div className="text-center">
            <div className="veteran-badge mx-auto w-fit mb-6">★ Steadfast Design Builders — Veteran-Owned & Operated</div>
            <h2 className="font-display text-4xl text-cream font-bold mb-4">Ready to Build With Us?</h2>
            <p className="text-steel-lighter mb-8 max-w-xl mx-auto">Whether you're a fellow veteran or a civilian client — you'll receive the same exceptional service we bring to every project.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold uppercase tracking-widest text-sm transition-all shadow-maroon-glow">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
