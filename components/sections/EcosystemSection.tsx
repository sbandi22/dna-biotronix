'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'

const partners = [
  {
    name: 'Arizona State University',
    short: 'ASU',
    role: 'Research & Development Partner',
    desc: 'Deep academic collaboration on DNA nanotechnology, transistor fabrication, and biosensor research.',
    color: '#8C1D40',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <rect x="4" y="28" width="32" height="4" rx="1" fill="#8C1D40" opacity="0.8" />
        <path d="M20 8 L8 28 H14 L20 16 L26 28 H32 L20 8Z" fill="#8C1D40" />
        <path d="M15 22 H25" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Skysong Innovations',
    short: 'Skysong',
    role: 'Technology Commercialization',
    desc: 'IP management, licensing, and startup commercialization through ASU\'s innovation hub at SkySong.',
    color: '#0066FF',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="14" stroke="#0066FF" strokeWidth="1.5" />
        <path d="M20 6 C14 10 14 30 20 34 M20 6 C26 10 26 30 20 34" stroke="#0066FF" strokeWidth="1.2" />
        <path d="M6 20 H34" stroke="#0066FF" strokeWidth="1" opacity="0.5" />
        <circle cx="20" cy="20" r="4" fill="#0066FF" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'WearTech Center',
    short: 'WearTech',
    role: 'Wearable Integration Partner',
    desc: 'Collaboration on miniaturized wearable biosensor integration for continuous personal health monitoring.',
    color: '#00AAFF',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <rect x="10" y="14" width="20" height="14" rx="4" stroke="#00AAFF" strokeWidth="1.5" />
        <path d="M15 14 V11 M25 14 V11" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="21" r="3" fill="#00AAFF" opacity="0.7" />
        <path d="M14 21 H16 M24 21 H26" stroke="#00AAFF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
]

const partnerWithUsPoints = [
  { label: 'Research Collaboration', desc: 'Joint R&D on DNA nanotechnology and molecular sensing' },
  { label: 'Licensing Opportunities', desc: 'Access to foundational patents and proprietary platform' },
  { label: 'Clinical Integration', desc: 'POC and wearable diagnostic deployment partnerships' },
  { label: 'Investor Access', desc: 'Connect with the team and investment community' },
]

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative section-py bg-[#050D1E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Innovation Ecosystem"
          title="Partner"
          titleHighlight="With Us"
          subtitle="DNA Biotronix is actively partnering with leading universities, innovation hubs, and technology centers to accelerate the commercialization of our DNA transistor sensor platform."
          centered
          className="mb-14"
        />

        {/* Innovation Ecosystem image — original asset with dark-blue integration */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-16"
          style={{ boxShadow: '0 0 80px rgba(0,102,255,0.16), 0 30px 80px rgba(0,0,0,0.65)' }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 45%, rgba(0,70,200,0.12) 0%, transparent 68%)', zIndex: 1 }} />

          <Image
            src="/images/innovation-ecosystem.jpeg"
            alt="DNA Biotronix Innovation Ecosystem — Partner With Us: ASU, Skysong Innovations, WearTech Center"
            width={1836}
            height={1033}
            className="w-full h-auto relative"
            style={{ filter: 'brightness(0.89) contrast(1.07) saturate(0.91)', zIndex: 2 }}
          />

          {/* Edge vignettes — section bg #050D1E */}
          <div className="absolute inset-x-0 top-0 h-14 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #050D1E, transparent)', zIndex: 3 }} />
          <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #050D1E, transparent)', zIndex: 3 }} />
          <div className="absolute inset-y-0 left-0 w-14 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #050D1E, transparent)', zIndex: 3 }} />
          <div className="absolute inset-y-0 right-0 w-14 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #050D1E, transparent)', zIndex: 3 }} />

          {/* Subtle blue tint */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(0,40,130,0.07)', zIndex: 4 }} />

          {/* Inner border glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 60px rgba(0,102,255,0.09)', border: '1px solid rgba(0,102,255,0.18)', zIndex: 5 }} />
        </motion.div>

        {/* Partner cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass border border-white/5 rounded-2xl p-6 hover:border-[#0066FF]/25 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.08)] group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{ background: `${p.color}18` }}
                >
                  {p.icon}
                </div>
                <div>
                  <div className="font-grotesk font-700 text-sm text-white leading-tight mb-0.5">{p.name}</div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block"
                    style={{ background: `${p.color}15`, color: p.color }}
                  >
                    {p.role}
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner with us grid */}
        <div className="glass border border-white/6 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0066FF] to-[#00AAFF]" />
            <h3 className="font-grotesk font-700 text-xl text-white">Partnership Opportunities</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {partnerWithUsPoints.map((pt, i) => (
              <motion.div
                key={pt.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0066FF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#00AAFF]" />
                </div>
                <div>
                  <div className="font-grotesk font-600 text-sm text-white mb-0.5">{pt.label}</div>
                  <div className="text-xs text-text-muted leading-relaxed">{pt.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-sm text-text-muted">Ready to partner with DNA Biotronix?</p>
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0055DD] text-white text-sm font-semibold transition-all duration-200 glow-blue"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
