import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | Steadfast Design Builders — Veteran-Owned Construction',
  description: 'Learn about Steadfast Design Builders — veteran-owned construction company with military precision and a commitment to excellence.',
}

export default function About() {
  return (
    <main className="bg-charcoal min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="veteran-badge mb-5">★ Veteran-Owned & Operated</div>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-bold leading-tight mb-4">
            About<br /><span className="text-maroon-gradient">Steadfast</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-steel-lighter leading-relaxed text-lg mb-6">
                Steadfast Design Builders was founded by veterans who believe that the same values that make an exceptional soldier — discipline, precision, mission focus, and unwavering commitment — are the same values that make an exceptional builder.
              </p>
              <p className="text-steel-lighter leading-relaxed mb-6">
                Specializing in ground-up construction and remodeling for both commercial and residential clients, we approach every project as a mission. Every detail matters. Every deadline is non-negotiable. Every client deserves our very best.
              </p>
              <p className="text-steel-lighter leading-relaxed mb-8">
                From concept to completion, Steadfast Design Builders brings military-grade planning and execution to the construction industry — delivering projects that stand the test of time.
              </p>
              <div className="veteran-badge">★ Veteran-Owned & Operated</div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Steadfast team"
                width={600}
                height={500}
                className="object-cover w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-maroon p-6 text-center">
                <div className="font-display text-cream text-3xl font-bold">15+</div>
                <div className="text-cream/60 text-xs uppercase tracking-widest">Years</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: '⭐', title: 'Honor', desc: 'We stand behind every project we build with our name and our word.' },
              { icon: '🎯', title: 'Precision', desc: 'Attention to detail is not optional — it\'s the standard.' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparent communication and honest pricing at every step.' },
              { icon: '💪', title: 'Excellence', desc: 'Mediocrity is not in our vocabulary. We deliver exceptional work.' },
            ].map((v) => (
              <div key={v.title} className="service-card p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-body font-bold text-cream text-base uppercase tracking-wider mb-2">{v.title}</h3>
                <p className="text-steel-lighter text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-charcoal-800 p-10">
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
              alt="Veteran commitment"
              width={500}
              height={400}
              className="object-cover w-full"
            />
            <div>
              <div className="veteran-badge mb-5">★ Military Service Background</div>
              <h2 className="font-display text-3xl text-cream font-bold mb-4">Service to Country. Service to Clients.</h2>
              <p className="text-steel-lighter leading-relaxed mb-4">
                Our founders served their country with distinction. Now, they serve their clients with the same unwavering commitment. The military taught us to never leave a mission unfinished — and we've carried that into every project we undertake.
              </p>
              <p className="text-steel-lighter leading-relaxed">
                As a veteran-owned business, we also proudly support fellow veterans and their families, offering special consideration for veteran clients and actively participating in community support programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
