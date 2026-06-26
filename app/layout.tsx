import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'DNA Biotronix | A DNA Transistor Sensor for Proactive Healthcare',
  description:
    'DNA Biotronix develops a DNA transistor sensor platform for proactive healthcare — enabling real-time single-molecule detection for personal monitoring, environmental testing, and point-of-care diagnostics. Every Day. Everywhere.',
  keywords: [
    'DNA transistor sensor',
    'proactive healthcare',
    'single-molecule detection',
    'DNA wired nanojunction',
    'molecular electronics',
    'biosensor platform',
    'point of care diagnostics',
    'nanobiotronix',
  ],
  authors: [{ name: 'DNA Biotronix' }],
  openGraph: {
    title: 'DNA Biotronix | DNA Transistor Sensor for Proactive Healthcare',
    description: 'One Platform. Unlimited Applications. Real-time single-molecule detection powered by DNA nanotechnology and AI.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DNA Biotronix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DNA Biotronix | DNA Transistor Sensor',
    description: 'One Platform. Unlimited Applications. Every Day. Everywhere.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#01050E',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#01050E] text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
