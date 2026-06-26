'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Technology', href: '#technology' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Detection', href: '#detection' },
  { label: 'Research', href: '#research' },
  { label: 'AI Analytics', href: '#analytics' },
  { label: 'Team', href: '#team' },
]

function DNABiotronixLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle background */}
      <circle cx="40" cy="40" r="38" fill="white" />

      {/* DNA text above */}
      <text x="40" y="22" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="14" fill="#C67C0A">DNA</text>

      {/* Infinity shape - left loop */}
      <path
        d="M18 40 C18 31 25 26 33 26 C38 26 40 30 40 40 C40 30 42 26 47 26 C55 26 62 31 62 40 C62 49 55 54 47 54 C42 54 40 50 40 40 C40 50 38 54 33 54 C25 54 18 49 18 40 Z"
        stroke="#C67C0A"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Left loop vertical bars (DNA signals) */}
      <line x1="24" y1="31" x2="24" y2="49" stroke="#C67C0A" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <line x1="29" y1="27" x2="29" y2="53" stroke="#C67C0A" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="30" x2="34" y2="50" stroke="#C67C0A" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

      {/* Right loop vertical bars */}
      <line x1="46" y1="30" x2="46" y2="50" stroke="#C67C0A" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <line x1="51" y1="27" x2="51" y2="53" stroke="#C67C0A" strokeWidth="2" strokeLinecap="round" />
      <line x1="56" y1="31" x2="56" y2="49" stroke="#C67C0A" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

      {/* Biotronix text below */}
      <text x="40" y="65" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="8.5" fill="#C67C0A">Biotronix</text>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#01050E]/95 backdrop-blur-xl shadow-xl shadow-black/50 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" style={{ background: 'rgba(196,124,10,0.4)' }} />
              <DNABiotronixLogo size={40} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-grotesk font-700 text-lg tracking-tight text-white">
                DNA <span style={{ color: '#C67C0A' }}>Biotronix</span>
              </span>
              <span className="text-[9px] tracking-[0.18em] uppercase text-text-muted font-medium">
                Molecular Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-200 hover-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              className="text-sm font-medium text-text-muted hover:text-white transition-colors"
            >
              Investor Relations
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold bg-[#0066FF] hover:bg-[#0055DD] text-white rounded-lg transition-all duration-200 glow-blue glow-blue-hover"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#01050E]/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/5">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold bg-[#0066FF] text-white rounded-lg mt-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
