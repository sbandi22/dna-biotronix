'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

const technologies = [
  {
    id: 'nanojunction',
    title: 'DNA Wired Nanojunction',
    subtitle: 'Molecular-scale transistor',
    description:
      'A precisely engineered DNA scaffold bridges two nanoscale electrodes, creating a molecular wire that responds to individual molecular binding events with picoampere-level electrical signatures.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path d="M8 32h48" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 8v48" stroke="#00B4FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="32" r="10" stroke="#0066FF" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="4" fill="#0066FF" opacity="0.6" />
        <circle cx="8" cy="32" r="4" fill="#00B4FF" opacity="0.8" />
        <circle cx="56" cy="32" r="4" fill="#00B4FF" opacity="0.8" />
        <path d="M20 20 L28 28 M44 20 L36 28 M20 44 L28 36 M44 44 L36 36" stroke="#00B4FF" strokeWidth="1.2" opacity="0.6" />
      </svg>
    ),
    metrics: [{ label: 'Resolution', value: 'Sub-nm' }, { label: 'Signal', value: '±2pA' }],
    color: '#0066FF',
  },
  {
    id: 'receptor',
    title: 'Universal Molecular Receptor',
    subtitle: 'Programmable binding scaffold',
    description:
      'A single receptor architecture reconfigured via aptamer exchange can identify any molecular target — from neurotransmitters to viral proteins — without hardware changes.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="22" y="10" width="20" height="44" rx="10" stroke="#00B4FF" strokeWidth="1.5" />
        <path d="M22 32h-10M42 32h10" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="32" r="4" fill="#0066FF" opacity="0.7" />
        <circle cx="54" cy="32" r="4" fill="#0066FF" opacity="0.7" />
        <rect x="27" y="22" width="10" height="20" rx="5" fill="#00B4FF" opacity="0.25" />
        <circle cx="32" cy="32" r="3" fill="#00B4FF" />
        <path d="M29 22 C26 15 20 15 18 20" stroke="#00B4FF" strokeWidth="1.2" opacity="0.5" />
        <path d="M35 22 C38 15 44 15 46 20" stroke="#00B4FF" strokeWidth="1.2" opacity="0.5" />
      </svg>
    ),
    metrics: [{ label: 'Targets', value: '1000+' }, { label: 'KD', value: 'fM range' }],
    color: '#00B4FF',
  },
  {
    id: 'multiplexed',
    title: 'Multiplexed Detection',
    subtitle: 'Parallel multi-analyte sensing',
    description:
      'Arrays of independently addressable nanojunctions simultaneously detect multiple analytes within a complex mixture, enabling full molecular profiling in a single assay.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={8 + i * 14} y="18" width="8" height="28" rx="2" stroke="#0066FF" strokeWidth="1.2" fill="rgba(0,102,255,0.08)" />
            <rect x={9 + i * 14} y={46 - i * 6} width="6" height={i * 6} rx="1" fill={`rgba(0,${102 + i * 26},255,0.6)`} />
          </g>
        ))}
        <path d="M8 52h48" stroke="#00B4FF" strokeWidth="1" opacity="0.4" />
        <path d="M14 14h36" stroke="#00B4FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <circle cx="52" cy="14" r="3" fill="#00B4FF" opacity="0.7" />
      </svg>
    ),
    metrics: [{ label: 'Channels', value: '≥256' }, { label: 'Crosstalk', value: '<0.1%' }],
    color: '#0066FF',
  },
  {
    id: 'ai',
    title: 'AI-Powered Analytics',
    subtitle: 'Deep learning signal decoder',
    description:
      'Proprietary neural networks trained on millions of single-molecule events classify molecular identities with >99.8% accuracy in real time, even in complex biological matrices.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        {/* Neural net nodes */}
        {[18, 32, 46].map((y, col) =>
          [col === 1 ? [14, 26, 38, 50] : [22, 42]].flat().map((x, row) => (
            <circle key={`${col}-${row}`} cx={x} cy={y} r="3.5" fill={col === 1 ? '#00B4FF' : '#0066FF'} opacity="0.8" />
          ))
        )}
        {/* Connections */}
        {[22, 42].map(x1 =>
          [14, 26, 38, 50].map(x2 => (
            <line key={`${x1}-${x2}-a`} x1={x1} y1="18" x2={x2} y2="32" stroke="#0066FF" strokeWidth="0.7" opacity="0.3" />
          ))
        )}
        {[22, 42].map(x1 =>
          [14, 26, 38, 50].map(x2 => (
            <line key={`${x1}-${x2}-b`} x1={x2} y1="32" x2={x1} y2="46" stroke="#00B4FF" strokeWidth="0.7" opacity="0.3" />
          ))
        )}
        <path d="M10 56 Q32 48 54 56" stroke="#00B4FF" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 2" />
      </svg>
    ),
    metrics: [{ label: 'Accuracy', value: '99.8%' }, { label: 'Latency', value: '<100ms' }],
    color: '#00B4FF',
  },
  {
    id: 'quantitative',
    title: 'Quantitative Molecular Sensing',
    subtitle: 'Absolute concentration measurement',
    description:
      'Beyond binary detection, our platform quantifies molecular concentrations across 8 orders of magnitude without calibration curves, delivering absolute copy-number measurements.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path d="M8 52 L20 38 L32 42 L44 24 L56 16" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 52 L20 38 L32 42 L44 24 L56 16 L56 52 Z" fill="rgba(0,102,255,0.08)" />
        <circle cx="20" cy="38" r="3" fill="#0066FF" opacity="0.8" />
        <circle cx="32" cy="42" r="3" fill="#00B4FF" opacity="0.8" />
        <circle cx="44" cy="24" r="3" fill="#0066FF" opacity="0.8" />
        <circle cx="56" cy="16" r="4" fill="#00B4FF" />
        <path d="M8 10v42M8 52h48" stroke="#00B4FF" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      </svg>
    ),
    metrics: [{ label: 'Dynamic Range', value: '8 decades' }, { label: 'LOD', value: '1 molecule' }],
    color: '#0066FF',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function TechnologySection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="technology" className="relative section-py bg-[#050D1E] overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 bg-blue-glow opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Technology"
          title="The Science of"
          titleHighlight="Molecular Sensing"
          subtitle="Five interlocking innovations form the DNA Biotronix sensing stack — from individual molecule recognition through machine learning classification."
          centered
          className="mb-16"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.id}
              variants={card}
              onMouseEnter={() => setHovered(tech.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative group rounded-2xl p-7 glass border transition-all duration-400 cursor-default
                ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}
                ${hovered === tech.id
                  ? 'border-[#0066FF]/35 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,102,255,0.12)]'
                  : 'border-white/6 hover:border-[#0066FF]/20'
                }`}
              style={{
                background: hovered === tech.id
                  ? 'linear-gradient(135deg, rgba(0,102,255,0.07) 0%, rgba(11,16,38,0.9) 100%)'
                  : 'rgba(255,255,255,0.04)',
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
                  opacity: hovered === tech.id ? 1 : 0,
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: `rgba(0,102,255,0.1)`,
                  boxShadow: hovered === tech.id ? `0 0 20px ${tech.color}33` : 'none',
                }}
              >
                {tech.icon}
              </div>

              {/* Title */}
              <div className="mb-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#00B4FF] opacity-70">
                  {tech.subtitle}
                </span>
              </div>
              <h3 className="font-tight font-bold text-xl text-white mb-3 leading-tight">
                {tech.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                {tech.description}
              </p>

              {/* Metrics */}
              <div className="flex gap-4 pt-4 border-t border-white/5">
                {tech.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-tight font-bold text-base text-white">{m.value}</div>
                    <div className="text-[11px] text-text-muted">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Corner glow */}
              {hovered === tech.id && (
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 100% 100%, ${tech.color}15, transparent 70%)` }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
