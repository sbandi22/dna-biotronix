'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Technology', href: '#technology' },
  { label: 'Applications', href: '#applications' },
  { label: 'Publications', href: '#research' },
  { label: 'Team', href: '#team' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]


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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full blur-md opacity-25 group-hover:opacity-50 transition-opacity duration-300" style={{ background: 'rgba(0,120,180,0.5)' }} />
              <Image
                src="/images/logo.png"
                alt="DNA Biotronix"
                width={44}
                height={44}
                className="relative rounded-full"
                priority
              />
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


          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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
