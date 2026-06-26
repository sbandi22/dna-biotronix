'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const features = [
  {
    title: 'Multiple Target Identification',
    desc: 'Simultaneously identify dozens of distinct molecular species within a single sample without separate assays or sequential testing.',
    value: '256+',
    unit: 'analytes\nper chip',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <circle cx={12 + i * 8} cy="24" r="5" stroke="#0066FF" strokeWidth="1.2" fill="rgba(0,102,255,0.1)" />
            <circle cx={12 + i * 8} cy="24" r="2" fill={['#0066FF','#00B4FF','#60A5FA','#0066FF'][i]} opacity="0.8" />
          </g>
        ))}
        <path d="M10 36 Q24 30 38 36" stroke="#00B4FF" strokeWidth="1" opacity="0.4" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    title: 'Single-Molecule Sensitivity',
    desc: 'Detection down to individual molecules — no amplification needed. Every binding event generates a unique, measurable electrical signature.',
    value: '1',
    unit: 'molecule\ndetected',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="14" stroke="#00B4FF" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <circle cx="24" cy="24" r="9" stroke="#0066FF" strokeWidth="1.2" />
        <circle cx="24" cy="24" r="3" fill="#00B4FF" />
        <path d="M24 6V10M24 38V42M6 24H10M38 24H42" stroke="#0066FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Detection',
    desc: 'Sub-100ms latency from molecular binding event to classified output — enabling continuous dynamic monitoring of fast biological processes.',
    value: '<100',
    unit: 'millisecond\nlatency',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="14" stroke="#0066FF" strokeWidth="1.2" />
        <path d="M24 14V24L30 30" stroke="#00B4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2" fill="#0066FF" />
        <path d="M38 10 L42 6 M10 38 L6 42" stroke="#00B4FF" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Mixture Decoding',
    desc: 'Resolve complex biological mixtures — blood, cerebrospinal fluid, cell lysates — identifying all components without fractionation or purification steps.',
    value: '99.8%',
    unit: 'accuracy in\ncomplex matrix',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M8 36 C8 36 12 28 24 28 C36 28 40 36 40 36" stroke="#0066FF" strokeWidth="1.5" fill="none" />
        <path d="M4 40 H44" stroke="#00B4FF" strokeWidth="1" opacity="0.4" />
        {[12, 20, 28, 36].map((x, i) => (
          <line key={i} x1={x} y1="36" x2={x} y2={36 - 6 - i * 2} stroke={['#0066FF','#00B4FF','#60A5FA','#0066FF'][i]} strokeWidth="1.5" strokeLinecap="round" />
        ))}
        <path d="M16 18 L20 10 L24 14 L28 6 L32 18" stroke="#00B4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
]

function WaveformDisplay() {
  const points = [
    0, 0, 0, 2, 0, -1, 0, 0, 0, 18, -22, 14, -8, 0, 0, 0, 12, -18, 10, -6, 0,
    0, 0, 0, 16, -20, 12, -7, 0, 0, 8, -14, 8, -4, 0, 0, 0,
  ]
  const w = 500
  const midY = 50
  const scaleY = 1.6
  const path = points
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i / (points.length - 1)) * w} ${midY - v * scaleY}`)
    .join(' ')

  return (
    <div className="relative w-full overflow-hidden rounded-xl glass border border-white/6 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-text-muted uppercase tracking-widest">Live Signal Feed</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-green-400 font-medium">RECORDING</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} 100`} className="w-full h-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00B4FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="0" y1={midY} x2={w} y2={midY} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <path d={path} stroke="url(#waveGrad)" strokeWidth="1.8" fill="none" />
        {/* Event markers */}
        {[110, 230, 340, 420].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="0" x2={x} y2="100" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
            <circle cx={x} cy={midY} r="3" fill="#00B4FF" opacity="0.8" />
          </g>
        ))}
      </svg>
      <div className="flex justify-between mt-3">
        {['Protein A', 'Metabolite B', 'DNA target C', 'Neurotransmitter'].map((lbl, i) => (
          <div key={i} className="text-[9px] text-[#00B4FF] text-center opacity-70">{lbl}</div>
        ))}
      </div>
    </div>
  )
}

// Deterministic pseudo-random from index — avoids SSR/client hydration mismatch
function seededRng(i: number) {
  let x = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function ChannelGrid() {
  return (
    <div className="relative rounded-xl glass border border-white/6 p-5">
      <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Multiplexed Channel Array</div>
      <div className="grid grid-cols-16 gap-1" style={{ gridTemplateColumns: 'repeat(16,1fr)' }}>
        {Array.from({ length: 256 }).map((_, i) => {
          const v = seededRng(i)
          const opacity = Math.round((0.15 + v * 0.85) * 1000) / 1000
          const color = v > 0.7 ? '#00B4FF' : v > 0.4 ? '#0066FF' : '#1a2644'
          return (
            <div
              key={i}
              className="rounded-sm aspect-square"
              style={{ background: color, opacity, boxShadow: v > 0.8 ? `0 0 4px ${color}` : 'none' }}
            />
          )
        })}
      </div>
      <div className="flex items-center gap-4 mt-4 text-[10px] text-text-muted">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-[#00B4FF] inline-block" /> Active detection</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-[#0066FF] inline-block" /> Baseline</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-[#1a2644] inline-block" /> Inactive</span>
      </div>
    </div>
  )
}

export default function DetectionSection() {
  return (
    <section id="detection" className="relative section-py bg-[#01050E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Detection Capability"
          title="Multiplexed Single-Molecule"
          titleHighlight="Detection"
          subtitle="Our platform simultaneously reads hundreds of molecular channels at single-molecule resolution — decoding the complete molecular composition of any sample in milliseconds."
          centered
          className="mb-16"
        />

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass border border-white/6 rounded-2xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#0066FF]/15 transition-colors">
                {f.icon}
              </div>
              <div className="font-tight font-black text-3xl text-white mb-0.5">{f.value}</div>
              <div className="text-[10px] text-[#00B4FF] whitespace-pre-line mb-3 uppercase tracking-wide font-semibold">{f.unit}</div>
              <h3 className="font-tight font-bold text-sm text-white mb-2">{f.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Scientific diagrams */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <WaveformDisplay />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ChannelGrid />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
