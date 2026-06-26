'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import type { Publication } from '@/lib/publications'

// ─── Static UI config keyed by publication id ─────────────────────────────────
const pubMeta: Record<string, {
  badgeColor: string
  latest?: boolean
  icon: React.ReactNode
}> = {
  'nature-chem-2026': {
    badgeColor: '#00AAFF',
    latest: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  'acs-nano-2024': {
    badgeColor: '#0066FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <circle cx="12" cy="12" r="3" fill="#0066FF" />
        <circle cx="4" cy="6" r="2" stroke="#0066FF" strokeWidth="1.5" />
        <circle cx="20" cy="6" r="2" stroke="#0066FF" strokeWidth="1.5" />
        <circle cx="4" cy="18" r="2" stroke="#0066FF" strokeWidth="1.5" />
        <circle cx="20" cy="18" r="2" stroke="#0066FF" strokeWidth="1.5" />
        <path d="M6 7l4 4M14 13l4 4M6 17l4-4M14 11l4-4" stroke="#0066FF" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
  },
  'acs-nano-2019': {
    badgeColor: '#0066FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="#0066FF" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.5" fill="#0066FF" />
      </svg>
    ),
  },
  'acs-nano-2018': {
    badgeColor: '#0066FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <path d="M3 12 H6 L8 6 L10 18 L12 4 L14 20 L16 12 H21" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  'nature-comm-2016': {
    badgeColor: '#4B6FA5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <path d="M12 3 C7 3 3 7 3 12 C3 17 7 21 12 21 C17 21 21 17 21 12 C21 7 17 3 12 3" stroke="#4B6FA5" strokeWidth="1.5" />
        <path d="M12 3 C9 7 9 17 12 21" stroke="#4B6FA5" strokeWidth="1.5" />
        <path d="M12 3 C15 7 15 17 12 21" stroke="#4B6FA5" strokeWidth="1.5" />
        <path d="M3 12 H21" stroke="#4B6FA5" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
}

const metrics = [
  { value: '5+', label: 'Peer-Reviewed Publications', sublabel: 'Nature & ACS Nano' },
  { value: '2016', label: 'Research Origin', sublabel: 'Over a decade of science' },
  { value: 'Sub-5nm', label: 'Junction Precision', sublabel: 'Angstrom-scale resolution' },
  { value: '1-mol', label: 'Detection Resolution', sublabel: 'True single-molecule sensitivity' },
]

// ─── View Paper button ─────────────────────────────────────────────────────────
function ViewPaperButton({ pub, color }: { pub: Publication; color: string }) {
  const href = pub.pdfUrl ?? (pub.doi ? `https://doi.org/${pub.doi}` : null)

  if (!href) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg text-text-muted border border-white/8 cursor-not-allowed select-none opacity-50">
        <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
          <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Coming Soon
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.stopPropagation()}
      className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105 active:scale-95"
      style={{
        color,
        borderColor: `${color}35`,
        background: `${color}10`,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${color}22` }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${color}10` }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
        <path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M10 2v3h3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
      {pub.pdfUrl ? 'View PDF' : 'View Paper'}
    </a>
  )
}

// ─── Publication card ──────────────────────────────────────────────────────────
function PubCard({ pub, index }: { pub: Publication; index: number }) {
  const meta = pubMeta[pub.id] ?? { badgeColor: '#0066FF' }
  const { badgeColor, latest, icon } = meta
  const href = pub.pdfUrl ?? (pub.doi ? `https://doi.org/${pub.doi}` : null)

  const inner = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`group flex gap-5 glass border border-white/5 rounded-2xl p-5 transition-all duration-300
        hover:border-[#0066FF]/25 hover:shadow-[0_0_24px_rgba(0,102,255,0.07)]
        ${href ? 'cursor-pointer' : ''}`}
    >
      {/* Year + icon */}
      <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-0.5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{ background: `${badgeColor}18` }}
        >
          {icon}
        </div>
        <span className="font-grotesk font-700 text-xs" style={{ color: badgeColor }}>{pub.year}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
            style={{ background: `${badgeColor}18`, color: badgeColor }}
          >
            {pub.journal}
          </span>
          {latest && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[#00AAFF]/15 text-[#00AAFF] border border-[#00AAFF]/20">
              Latest
            </span>
          )}
        </div>
        <p className="font-grotesk font-600 text-sm text-white leading-snug mb-1">{pub.title}</p>
        <p className="text-xs italic text-[#00AAFF]/70 mb-2 leading-snug">{pub.impact}</p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs text-text-muted">{pub.authors}</p>
          <ViewPaperButton pub={pub} color={badgeColor} />
        </div>
      </div>
    </motion.div>
  )

  // Make entire card a link when URL is available
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block no-underline">
        {inner}
      </a>
    )
  }

  return inner
}

// ─── Section ───────────────────────────────────────────────────────────────────
export default function ResearchSection() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/publications')
      .then(r => r.json())
      .then((data: Publication[]) => { setPublications(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="research" className="relative section-py bg-[#01050E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/25 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Scientific Foundation"
          title="Peer-Reviewed Research Published in"
          titleHighlight="Nature & ACS Nano"
          subtitle="A decade of rigorous science — from foundational transistor physics to multiplexed single-molecule protein detection — validated in the world's most cited journals."
          centered
          className="mb-14"
        />

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass border border-white/5 rounded-2xl px-6 py-5 text-center hover:border-[#0066FF]/20 transition-all duration-300"
            >
              <div className="font-grotesk font-700 text-3xl text-white mb-1">{m.value}</div>
              <div className="text-xs font-semibold text-white mb-0.5">{m.label}</div>
              <div className="text-[11px] text-text-muted">{m.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Publications list */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#00AAFF] to-[#0066FF]" />
            <h3 className="font-grotesk font-700 text-xl text-white">Key Publications</h3>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="glass border border-white/5 rounded-2xl p-5 h-24 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {publications.map((pub, i) => (
                <PubCard key={pub.id} pub={pub} index={i} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
