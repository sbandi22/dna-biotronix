'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import TransistorDiagram from '@/components/visuals/TransistorDiagram'

const coreFeatures = [
  {
    label: 'Sensing Element',
    value: 'Self-aligning DNA wired nanojunction (sub-5 nm).',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <path d="M4 14 H24" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 4 C10 6 10 22 14 24" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 4 C18 6 18 22 14 24" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="14" cy="14" r="3" fill="#0066FF" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: 'Molecular Recognition',
    value: 'Universal Receptor → one structure, multiple targets.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <rect x="9" y="4" width="10" height="20" rx="5" stroke="#00AAFF" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2.5" fill="#0066FF" />
        <path d="M9 14 H4 M19 14 H24" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="4" cy="14" r="2" fill="#00AAFF" opacity="0.7" />
        <circle cx="24" cy="14" r="2" fill="#00AAFF" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: 'Signal Characteristics',
    value: 'Discrete electrical pulses.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <path d="M2 14 H6 L8 8 L10 20 L12 6 L14 22 L16 14 H26" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Data Analytics',
    value: 'Machine Learning (ML)-driven molecular identification and mixture decoding.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        {[6, 14, 22].map(x =>
          [6, 14, 22].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill={y === 14 ? '#00AAFF' : '#0066FF'} opacity="0.8" />
          ))
        )}
        {[6, 22].map(x1 => [6, 14, 22].map(x2 => (
          <line key={`${x1}-${x2}`} x1={x1} y1="6" x2={x2} y2="14" stroke="#0066FF" strokeWidth="0.7" opacity="0.35" />
        )))}
        {[6, 22].map(x1 => [6, 14, 22].map(x2 => (
          <line key={`b-${x1}-${x2}`} x1={x2} y1="14" x2={x1} y2="22" stroke="#00AAFF" strokeWidth="0.7" opacity="0.35" />
        )))}
      </svg>
    ),
  },
  {
    label: 'Quantitation',
    value: 'Event rates → concentrations.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <path d="M4 22 L10 14 L16 17 L22 8 L28 4" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M4 4 V22 H28" stroke="#00AAFF" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <circle cx="22" cy="8" r="2.5" fill="#00AAFF" />
      </svg>
    ),
  },
]

const flowSteps = [
  { label: 'Target Molecule', sublabel: 'Mol. A / B / C', color: '#0066FF' },
  { label: 'Universal Receptor', sublabel: 'Kon / Koff binding', color: '#00AAFF' },
  { label: 'DNA Wired Junction', sublabel: 'Sub-5nm electrode bridge', color: '#0066FF' },
  { label: 'Electrical Pulse', sublabel: 'Discrete picoampere signal', color: '#00AAFF' },
  { label: 'Machine Learning', sublabel: 'Molecular ID & decoding', color: '#0066FF' },
  { label: 'Quantitation', sublabel: 'Event rates → concentrations', color: '#00AAFF' },
]

export default function ArchitectureSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="architecture" className="relative section-py bg-[#050D1E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Transistor Architecture"
          title="Multiplexed Single-Molecule"
          titleHighlight="Detection"
          subtitle="A self-aligning DNA wired nanojunction transistor — one universal receptor structure recognizes multiple molecular targets, decoded in real time by machine learning."
          centered
          className="mb-14"
        />

        {/* Main architecture diagram from PDF */}
        {/* Transistor architecture — SVG diagram in site design system palette */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-5xl mx-auto mb-14 rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 0 80px rgba(0,212,255,0.12), 0 30px 80px rgba(0,0,0,0.65)' }}
        >
          <TransistorDiagram />
        </motion.div>

        {/* Core Features + Flow */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* Core Features */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 rounded-full bg-[#0066FF]" />
              <h3 className="font-grotesk font-700 text-xl text-white">Core Features</h3>
            </div>
            <div className="space-y-3">
              {coreFeatures.map((f, i) => (
                <motion.button
                  key={f.label}
                  onClick={() => setActiveFeature(i)}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`w-full text-left flex items-start gap-4 px-5 py-4 rounded-xl border transition-all duration-300 ${
                    activeFeature === i
                      ? 'border-[#0066FF]/40 bg-[#0066FF]/8 shadow-[0_0_20px_rgba(0,102,255,0.1)]'
                      : 'border-white/5 glass hover:border-white/10'
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300"
                    style={{ background: activeFeature === i ? 'rgba(0,102,255,0.2)' : 'rgba(255,255,255,0.04)' }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div className={`font-grotesk font-600 text-sm transition-colors duration-200 ${activeFeature === i ? 'text-white' : 'text-text-muted'}`}>
                      {f.label}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5 leading-relaxed">{f.value}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Signal flow */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 rounded-full bg-[#00AAFF]" />
              <h3 className="font-grotesk font-700 text-xl text-white">Signal Flow</h3>
            </div>
            <div className="flex flex-col items-center gap-0">
              {flowSteps.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="w-full glass border border-white/6 rounded-xl px-5 py-3.5 flex items-center gap-4 hover:border-[#0066FF]/25 transition-all duration-200"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 font-grotesk font-700 text-xs"
                      style={{ background: `${s.color}20`, color: s.color }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="font-grotesk font-600 text-sm text-white">{s.label}</div>
                      <div className="text-[11px] text-text-muted">{s.sublabel}</div>
                    </div>
                  </motion.div>
                  {i < flowSteps.length - 1 && (
                    <div className="w-px h-6 flex-shrink-0 bg-gradient-to-b from-[#0066FF]/40 to-[#00AAFF]/20 relative">
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00AAFF]"
                        style={{ boxShadow: '0 0 6px #00AAFF' }}
                        initial={{ top: 0, opacity: 0.9 }}
                        animate={{ top: '100%', opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'linear', repeat: Infinity, repeatDelay: 0.5 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gen-1 Chip + Device Prototype real photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0066FF] to-[#00AAFF]" />
            <h3 className="font-grotesk font-700 text-xl text-white">Hardware — Gen-1 Chip &amp; Device Prototype</h3>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 0 80px rgba(0,102,255,0.18), 0 30px 80px rgba(0,0,0,0.65)' }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(0,80,210,0.15) 0%, transparent 70%)', zIndex: 1 }} />

            <Image
              src="/images/chip-prototype.jpeg"
              alt="DNA Biotronix Gen-1 Chip next to a penny and Device Prototype with smartphone measurement platform"
              width={1853}
              height={1043}
              className="w-full h-auto relative"
              style={{ filter: 'brightness(0.87) contrast(1.09) saturate(0.88)', zIndex: 2 }}
            />

            {/* Edge vignettes — section bg #050D1E */}
            <div className="absolute inset-x-0 top-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, #050D1E, transparent)', zIndex: 3 }} />
            <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #050D1E, transparent)', zIndex: 3 }} />
            <div className="absolute inset-y-0 left-0 w-20 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #050D1E, transparent)', zIndex: 3 }} />
            <div className="absolute inset-y-0 right-0 w-20 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #050D1E, transparent)', zIndex: 3 }} />

            {/* Subtle blue tint */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(0,50,160,0.09)', zIndex: 4 }} />

            {/* Inner border glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: 'inset 0 0 80px rgba(0,102,255,0.12)', border: '1px solid rgba(0,102,255,0.20)', zIndex: 5 }} />
          </div>
          <p className="text-xs text-text-muted text-center mt-3 italic">
            Gen-1 Chip (penny scale reference) · Nanobiotronix Measurement Platform · Device Prototype
          </p>
        </motion.div>
      </div>
    </section>
  )
}
