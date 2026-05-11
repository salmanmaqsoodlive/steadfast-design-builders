import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Process | Steadfast Design Builders',
  description: 'How Steadfast Design Builders approaches every project — from initial consultation through final walkthrough.',
}

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    duration: 'Week 1',
    desc: 'We start with a free consultation to understand your vision, timeline, and budget. No pressure — just an honest conversation about what you want to build.',
    details: ['Project scope discussion', 'Budget range alignment', 'Timeline feasibility', 'Site walk (if applicable)'],
  },
  {
    num: '02',
    title: 'Design & Planning',
    duration: 'Weeks 2–4',
    desc: 'Our team works with your architect or our in-house design partners to finalize drawings, permits, and material selections before a single shovel hits the ground.',
    details: ['Architectural drawings review', 'Permit applications', 'Material selection & sourcing', 'Subcontractor vetting'],
  },
  {
    num: '03',
    title: 'Proposal & Contract',
    duration: 'Week 5',
    desc: 'We provide a detailed, line-item proposal with no hidden costs. Once aligned, we execute a clear contract with milestone payment schedules and defined deliverables.',
    details: ['Line-item cost breakdown', 'Clear milestone schedule', 'Payment terms', 'Insurance & bonding confirmation'],
  },
  {
    num: '04',
    title: 'Active Construction',
    duration: 'Varies by Project',
    desc: 'Work begins. You receive weekly progress updates, site access, and a dedicated point of contact. We run tight crews and maintain a clean, safe job site throughout.',
    details: ['Weekly photo updates', 'Dedicated project manager', 'Daily site supervision', 'Regular owner walkthroughs'],
  },
  {
    num: '05',
    title: 'Quality Walkthrough',
    duration: 'Final 2 Weeks',
    desc: 'Before we call a project done, we conduct a thorough internal quality inspection. Then we do a final walkthrough with you to address every item on the punch list.',
    details: ['Internal QC inspection', 'Owner walkthrough', 'Punch list completion', 'Certificate of occupancy'],
  },
  {
    num: '06',
    title: 'Handoff & Warranty',
    duration: 'Post-Completion',
    desc: 'We hand over your project with full documentation, warranty information, and our commitment to stand behind our work. We don\'t disappear after the final check.',
    details: ['As-built documentation', 'Warranty coverage', 'Subcontractor contact list', 'Follow-up inspection at 90 days'],
  },
]

export default function Process() {
  return (
    <main className="bg-charcoal min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="veteran-badge mb-5">★ How We Work</div>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-bold leading-tight mb-4">
            The Process
          </h1>
          <p className="text-steel-lighter text-lg max-w-xl">
            No surprises. No runarounds. A clear process from first call to final walkthrough.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-maroon/20 hidden lg:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={step.num} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
                  <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-center lg:pt-1">
                    <div className="w-16 h-16 bg-maroon flex items-center justify-center font-display text-cream text-sm font-bold relative z-10">
                      {step.num}
                    </div>
                  </div>
                  <div className="lg:col-span-11 bg-charcoal-800 border border-maroon/10 p-8 hover:border-maroon/30 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h2 className="font-display text-2xl text-cream font-bold">{step.title}</h2>
                      <span className="text-maroon font-body text-xs font-semibold uppercase tracking-widest bg-maroon/10 px-3 py-1">{step.duration}</span>
                    </div>
                    <p className="text-steel-lighter leading-relaxed mb-5">{step.desc}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.details.map(d => (
                        <li key={d} className="flex items-center gap-2 text-steel-lighter text-sm">
                          <div className="w-3 h-px bg-maroon" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="font-display text-2xl text-cream font-bold mb-3">Ready to Get Started?</h3>
            <p className="text-steel-lighter mb-8">Step one begins with a free consultation. Let's talk.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-maroon hover:bg-maroon-600 text-cream font-body font-semibold uppercase tracking-widest text-sm transition-all shadow-maroon-glow">
              Book Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
