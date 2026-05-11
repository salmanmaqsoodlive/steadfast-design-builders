import type { Metadata } from 'next'
import { Playfair_Display, Barlow } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Steadfast Design Builders | Veteran-Owned Construction Company',
  description: 'Veteran-owned construction company specializing in ground-up construction and remodeling. Commercial & residential. Built with military precision and excellence.',
  keywords: 'veteran owned construction, ground up construction, remodeling, commercial construction, residential construction, veteran contractor',
  openGraph: {
    title: 'Steadfast Design Builders | Veteran-Owned Construction',
    description: 'Built with military precision. Delivered with excellence. Veteran-owned construction.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${barlow.variable}`}>
      <body className="bg-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  )
}
