import Link from 'next/link'

function SDBLogoSmall() {
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="28" viewBox="0 0 52 36" fill="none">
        <rect x="0" y="0" width="13" height="4" fill="#8b2635"/>
        <rect x="0" y="0" width="4" height="15" fill="#8b2635"/>
        <rect x="0" y="11" width="13" height="4" fill="#8b2635"/>
        <rect x="9" y="11" width="4" height="15" fill="#8b2635"/>
        <rect x="0" y="22" width="13" height="4" fill="#8b2635"/>
        <rect x="17" y="0" width="4" height="26" fill="#8b2635"/>
        <rect x="17" y="0" width="11" height="4" fill="#8b2635"/>
        <rect x="17" y="22" width="11" height="4" fill="#8b2635"/>
        <rect x="24" y="4" width="4" height="18" fill="#8b2635"/>
        <rect x="33" y="0" width="4" height="26" fill="#8b2635"/>
        <rect x="33" y="0" width="10" height="4" fill="#8b2635"/>
        <rect x="33" y="11" width="10" height="4" fill="#8b2635"/>
        <rect x="33" y="22" width="10" height="4" fill="#8b2635"/>
        <rect x="39" y="4" width="4" height="7" fill="#8b2635"/>
        <rect x="39" y="15" width="4" height="7" fill="#8b2635"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-cream text-sm font-bold tracking-wider">STEADFAST</span>
        <span className="font-body text-steel-lighter text-xs tracking-[0.15em] uppercase mt-0.5">Design Builders</span>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-maroon/15">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <SDBLogoSmall />
            <p className="text-steel-lighter text-sm leading-relaxed mt-5 mb-5">
              Veteran-owned construction company specializing in ground-up construction and remodeling. Built with honor, delivered with precision.
            </p>
            <div className="veteran-badge">
              <span>★ Veteran-Owned & Operated</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-maroon-500 text-xs uppercase tracking-[0.2em] mb-5 font-semibold">Services</h4>
            <ul className="space-y-3">
              {['Ground-Up Construction','Residential Remodeling','Commercial Construction','Custom Homes','Project Management','Design-Build'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-steel-lighter text-sm hover:text-cream transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-maroon-500 text-xs uppercase tracking-[0.2em] mb-5 font-semibold">Company</h4>
            <ul className="space-y-3">
              {['About Us','Our Portfolio','Our Process','Veteran Commitment','Testimonials','Contact'].map((item) => (
                <li key={item}>
                  <Link href="/about" className="text-steel-lighter text-sm hover:text-cream transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-maroon-500 text-xs uppercase tracking-[0.2em] mb-5 font-semibold">Start a Project</h4>
            <div className="space-y-3 text-sm text-steel-lighter">
              <p>Veteran-owned & operated</p>
              <p>Commercial & Residential</p>
              <a href="mailto:build@steadfastdesignbuilders.com" className="text-maroon-500 hover:text-maroon-400 transition-colors block">
                build@steadfastdesignbuilders.com
              </a>
              <Link
                href="/contact"
                className="inline-block mt-4 px-5 py-3 bg-maroon hover:bg-maroon-600 text-cream text-xs font-semibold uppercase tracking-widest transition-colors shadow-maroon-sm"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-maroon/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-lighter/40 text-sm">
            © {new Date().getFullYear()} Steadfast Design Builders. Veteran-Owned. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-steel-lighter/40 text-xs hover:text-maroon-500 transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-steel-lighter/40 text-xs hover:text-maroon-500 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
