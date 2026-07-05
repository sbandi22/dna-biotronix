'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const placeholderItems = [
  { label: 'Company Announcement', width: 'w-48' },
  { label: 'Research Update', width: 'w-36' },
  { label: 'Partnership News', width: 'w-44' },
]

export default function NewsSection() {
  return (
    <section id="news" className="relative section-py bg-[#01050E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0066FF]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="News"
          title="Latest"
          titleHighlight="Updates"
          subtitle="Company announcements, research milestones, and partnership news."
          centered
          className="mb-14"
        />

        {/* Animated timeline placeholder */}
        <div className="max-w-2xl mx-auto">
          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass border border-white/6 rounded-2xl p-12 text-center mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,102,255,0.06), transparent 70%)' }} />
            <div className="absolute top-0 inset-x-16 h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />

            {/* Animated icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/15 flex items-center justify-center mx-auto mb-5">
              <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                <path d="M5 7h18M5 14h12M5 21h8" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="22" cy="19" r="4" stroke="#00AAFF" strokeWidth="1.2" />
                <path d="M22 17v2l1 1" stroke="#00AAFF" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>

            <h3 className="font-grotesk font-700 text-lg text-white mb-2">Coming Soon</h3>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm mx-auto">
              Company announcements and research updates will appear here. Check back soon.
            </p>
          </motion.div>

          {/* Skeleton timeline items */}
          <div className="space-y-4">
            {placeholderItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#0066FF]/40 bg-[#0066FF]/15" />
                  {i < placeholderItems.length - 1 && (
                    <div className="w-px flex-1 mt-1.5 bg-gradient-to-b from-[#0066FF]/20 to-transparent min-h-[32px]" />
                  )}
                </div>

                {/* Skeleton card */}
                <div className="flex-1 glass border border-white/4 rounded-xl p-4 mb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-16 rounded-full bg-[#0066FF]/20" />
                    <div className="h-2 w-12 rounded-full bg-white/6" />
                  </div>
                  <div className={`h-3 ${item.width} rounded-full bg-white/8 mb-2`} />
                  <div className="h-2 w-full rounded-full bg-white/4" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subscribe hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-xs text-text-muted mt-8"
          >
            Follow us for updates ·{' '}
            <a href="#contact" className="text-[#0066FF] hover:text-[#00AAFF] transition-colors">
              Contact us
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
