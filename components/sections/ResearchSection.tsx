'use client'

import { motion } from 'framer-motion'
import { publications } from '@/lib/publications'
import type { Publication } from '@/lib/publications'

function ViewPaperButton({ pub }: { pub: Publication }) {
  const href = pub.pdfUrl ?? (pub.doi ? `https://doi.org/${pub.doi}` : null)
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.stopPropagation()}
      className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-[#0066FF]/30 text-[#00AAFF] bg-[#0066FF]/8 hover:bg-[#0066FF]/18 transition-all duration-200 whitespace-nowrap"
    >
      <svg viewBox="0 0 14 14" fill="none" className="w-2.5 h-2.5 flex-shrink-0">
        <path d="M2 2h7l3 3v7H2V2z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M9 2v3h3" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M4 7h6M4 9.5h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      {pub.pdfUrl ? 'PDF' : 'DOI'}
    </a>
  )
}

const journalColor: Record<string, string> = {
  'Nature Chemistry': '#00AAFF',
  'ACS Nano': '#0088EE',
  'Nature Communications': '#4B8FD5',
  'PNAS': '#5B7FC5',
}

export default function ResearchSection() {
  return (
    <section id="research" className="relative section-py bg-[#01050E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/25 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-[#00B4FF] text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
            Scientific Foundation
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 0 60px rgba(0,102,255,0.12), 0 20px 60px rgba(0,0,0,0.6)' }}
        >
          <div className="bg-[#050D1E] border border-[#0066FF]/20 rounded-2xl overflow-hidden">

            {/* Header */}
            <div className="grid grid-cols-[90px_160px_1fr] gap-0 px-6 py-4 border-b border-[#0066FF]/40">
              <div className="text-sm font-bold text-[#00AAFF] tracking-wide">Year</div>
              <div className="text-sm font-bold text-[#00AAFF] tracking-wide">Publication</div>
              <div className="text-sm font-bold text-[#00AAFF] tracking-wide">Key Impact</div>
            </div>

            {/* Rows */}
            <div>
              {publications.map((pub, i) => {
                const color = journalColor[pub.journal] ?? '#0066FF'
                return (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className={`grid grid-cols-[90px_160px_1fr] gap-0 px-6 py-5 hover:bg-[#0066FF]/5 transition-colors duration-200 ${
                      i < publications.length - 1 ? 'border-b border-white/5' : ''
                    }`}
                  >
                    {/* Year */}
                    <div className="flex items-start pt-0.5">
                      <span className="font-grotesk font-700 text-sm text-white">{pub.year}</span>
                    </div>

                    {/* Journal */}
                    <div className="flex items-start pt-0.5 pr-4">
                      <span className="text-sm font-semibold leading-snug" style={{ color }}>
                        {pub.journal}
                      </span>
                    </div>

                    {/* Title + Impact + Authors + Link */}
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-grotesk font-600 text-sm text-white leading-snug">{pub.title}</p>
                        <div className="flex-shrink-0 mt-0.5">
                          <ViewPaperButton pub={pub} />
                        </div>
                      </div>
                      <p className="text-xs italic leading-relaxed" style={{ color: `${color}CC` }}>
                        {pub.impact}
                      </p>
                      <p className="text-[11px] text-white/35">{pub.authors}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
