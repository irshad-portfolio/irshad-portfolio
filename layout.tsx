import type { Metadata, Viewport } from 'next'
import { Orbitron, Exo_2 } from 'next/font/google'
import './globals.css'

/* ── Fonts ───────────────────────────────────────── */
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-exo',
  display: 'swap',
})

/* ── SEO Metadata ────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Irshad N | HSE Officer & Safety Supervisor',
  description:
    'Results-driven HSE Officer & Safety Supervisor with 2+ years of experience in oil & gas refinery shutdowns, construction safety, fire safety, and HSE management. BPCL Kochi Refinery | DLF IT Park.',
  keywords: [
    'HSE Officer Kerala',
    'Safety Supervisor India',
    'BPCL Kochi Refinery Safety',
    'Industrial Safety Officer',
    'Fire Safety Officer',
    'HSE Management',
    'Permit to Work',
    'Job Hazard Analysis',
    'Irshad N',
    'Safety Professional Kerala',
    'Refinery Shutdown Safety',
    'OISD Compliance',
  ],
  authors: [{ name: 'Irshad N', url: 'https://irshadn.vercel.app' }],
  creator: 'Irshad N',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://irshadn.vercel.app',
    title: 'Irshad N | HSE Officer & Safety Supervisor',
    description:
      'Results-driven HSE Officer with expertise in oil & gas shutdown safety, fire safety, PTW, and risk assessment.',
    siteName: 'Irshad N Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Irshad N – HSE Officer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irshad N | HSE Officer & Safety Supervisor',
    description: 'HSE professional with experience at BPCL Kochi Refinery and DLF IT Park.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050a14',
}

/* ── Layout ──────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${orbitron.variable} ${exo2.variable} font-body bg-obsidian text-ice antialiased`}>
        {children}
      </body>
    </html>
  )
}
