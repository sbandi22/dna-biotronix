'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github, ExternalLink } from 'lucide-react'

const links = {
  Technology: [
    { label: 'DNA Nanojunction', href: '#technology' },
    { label: 'Universal Receptor', href: '#technology' },
    { label: 'Multiplexed Detection', href: '#detection' },
    { label: 'AI Analytics', href: '#analytics' },
  ],
  Research: [
    { label: 'Publications', href: '#research' },
    { label: 'Scientific Foundation', href: '#research' },
    { label: 'Milestones', href: '#research' },
    { label: 'Innovation Ecosystem', href: '#ecosystem' },
  ],
  Company: [
    { label: 'Leadership', href: '#team' },
    { label: 'Advisory Board', href: '#team' },
    { label: 'Applications', href: '#applications' },
    { label: 'Architecture', href: '#architecture' },
  ],
  Connect: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Investor Relations', href: '#contact' },
    { label: 'Research Collaboration', href: '#contact' },
    { label: 'Careers', href: '#contact' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#01050E] border-t border-white/5 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="absolute inset-0 bg-blue-500 rounded-lg blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative bg-gradient-to-br from-[#0066FF] to-[#00B4FF] rounded-lg p-1.5 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                    <path d="M10 2C7 2 5 4.5 5 7s1.5 4 3 5c-1.5 1-3 2.5-3 5h10c0-2.5-1.5-4-3-5 1.5-1 3-2.5 3-5S13 2 10 2z" fill="white" opacity="0.9" />
                    <circle cx="10" cy="7" r="2" fill="white" />
                    <circle cx="10" cy="15" r="2" fill="white" opacity="0.7" />
                  </svg>
                </div>
              </div>
              <span className="font-tight font-black text-lg text-white">
                DNA <span className="gradient-text-blue">Biotronix</span>
              </span>
            </Link>

            <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-xs">
              Molecular intelligence at the single-molecule level. Combining DNA nanotechnology, semiconductor engineering, and AI to decode life itself.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-text-muted hover:text-white hover:border-[#0066FF]/35 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-xs font-semibold uppercase tracking-widest text-white mb-4">{category}</div>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-muted hover:text-white transition-colors duration-200 hover-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Series A banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-[#0066FF]/20 rounded-2xl p-6 mb-10 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
              <span className="text-[10px] font-semibold text-[#00B4FF] uppercase tracking-widest">Series A · Now Raising</span>
            </div>
            <div className="font-tight font-bold text-white text-sm">
              Interested in investing in the future of molecular diagnostics?
            </div>
            <div className="text-xs text-text-muted mt-0.5">Reach out to our investor relations team for our pitch deck and financial materials.</div>
          </div>
          <Link
            href="#contact"
            onClick={() => {}}
            className="flex-shrink-0 px-6 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0055DD] text-white text-sm font-semibold transition-all glow-blue"
          >
            Investor Relations
          </Link>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="text-xs text-text-muted">
            © {new Date().getFullYear()} DNA Biotronix, Inc. All rights reserved. Cambridge, MA.
          </div>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'IP & Patents'].map(label => (
              <Link
                key={label}
                href="#"
                className="text-xs text-text-muted hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-center">
          <div className="font-tight font-black text-4xl sm:text-5xl lg:text-6xl gradient-text opacity-[0.06] select-none pointer-events-none">
            MOLECULAR INTELLIGENCE
          </div>
        </div>
      </div>
    </footer>
  )
}
