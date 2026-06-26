'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

const pipeline = [
  { label: 'Signal Acquisition', sublabel: 'Raw picoampere stream', pct: 95, color: '#0066FF' },
  { label: 'Noise Filtering', sublabel: 'Kalman & wavelet denoising', pct: 88, color: '#0077EE' },
  { label: 'Event Detection', sublabel: 'Threshold + edge detection', pct: 92, color: '#0088DD' },
  { label: 'Feature Extraction', sublabel: 'Duration, amplitude, shape', pct: 97, color: '#0099CC' },
  { label: 'ML Classification', sublabel: 'Deep neural network', pct: 99, color: '#00AAAA' },
  { label: 'Quantitation', sublabel: 'Absolute concentration', pct: 96, color: '#00B4FF' },
]

const classificationData = [
  { label: 'Protein A', confidence: 99.8, count: 847, color: '#0066FF' },
  { label: 'miRNA-21', confidence: 98.4, count: 234, color: '#00B4FF' },
  { label: 'Dopamine', confidence: 99.2, count: 1203, color: '#60A5FA' },
  { label: 'Tau Protein', confidence: 97.9, count: 189, color: '#0066FF' },
  { label: 'Amyloid-β', confidence: 99.1, count: 412, color: '#00B4FF' },
]

function SparkLine({ values, color }: { values: number[]; color: string }) {
  const w = 120
  const h = 32
  const min = Math.min(...values)
  const max = Math.max(...values)
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w
    const y = h - ((v - min) / (max - min + 0.01)) * (h - 4) - 2
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LiveClassificationPanel() {
  return (
    <div className="glass border border-white/6 rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-5">
        <div className="text-sm font-bold text-white">Live Classification</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
          <span className="text-[10px] text-[#00B4FF] font-medium">LIVE</span>
        </div>
      </div>
      <div className="space-y-3">
        {classificationData.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-white truncate">{item.label}</span>
                <span className="text-[10px] text-text-muted flex-shrink-0 ml-2">{item.count} events</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.confidence}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}, #00B4FF)` }}
                />
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="font-tight font-bold text-xs text-white">{item.confidence}%</div>
              <div className="text-[9px] text-text-muted">conf.</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SignalProcessingPipeline() {
  return (
    <div className="glass border border-white/6 rounded-2xl p-6">
      <div className="text-sm font-bold text-white mb-5">Processing Pipeline</div>
      <div className="space-y-3">
        {pipeline.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-4"
          >
            <div
              className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-[9px] font-bold"
              style={{ background: `${step.color}25`, color: step.color }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-medium text-white">{step.label}</span>
                <span className="text-[10px]" style={{ color: step.color }}>{step.pct}%</span>
              </div>
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${step.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${step.color}80, ${step.color})` }}
                />
              </div>
              <div className="text-[9px] text-text-muted mt-0.5">{step.sublabel}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function MetricsDashboard() {
  const sparkData = {
    events: [120, 145, 132, 178, 165, 198, 210, 245, 230, 267, 289, 312],
    accuracy: [97.2, 97.8, 98.1, 98.4, 98.2, 98.9, 99.0, 99.2, 99.1, 99.4, 99.6, 99.8],
    latency: [95, 88, 92, 85, 90, 82, 78, 80, 76, 72, 69, 67],
  }

  const metrics = [
    { label: 'Events/sec', value: '312', change: '+28%', spark: sparkData.events, color: '#0066FF' },
    { label: 'Accuracy', value: '99.8%', change: '+2.1%', spark: sparkData.accuracy, color: '#00B4FF' },
    { label: 'Latency (ms)', value: '67ms', change: '-42%', spark: sparkData.latency, color: '#60A5FA' },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass border border-white/6 rounded-xl p-4"
        >
          <div className="text-[10px] text-text-muted mb-1 uppercase tracking-wide">{m.label}</div>
          <div className="font-tight font-black text-xl text-white mb-1">{m.value}</div>
          <div className="text-[10px] font-medium mb-2" style={{ color: m.color }}>{m.change} vs baseline</div>
          <SparkLine values={m.spark} color={m.color} />
        </motion.div>
      ))}
    </div>
  )
}

const analyticsSteps = [
  { icon: '📡', label: 'Signal Processing', desc: 'Sub-microsecond event capture and digital filtering' },
  { icon: '🧠', label: 'Machine Learning', desc: 'Real-time inference with 3-layer transformer network' },
  { icon: '🏷️', label: 'Classification', desc: 'Molecular identity assigned with confidence score' },
  { icon: '📊', label: 'Quantitation', desc: 'Copy-number absolute concentration measurement' },
  { icon: '🔮', label: 'Predictive Analytics', desc: 'Disease risk modeling from molecular profiles' },
]

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="relative section-py bg-[#050D1E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="AI & Data Analytics"
          title="Intelligence Inside"
          titleHighlight="Every Signal"
          subtitle="Our end-to-end machine learning stack transforms raw picoampere electrical signals into actionable molecular insights with clinical-grade accuracy."
          className="mb-14"
        />

        <div className="grid lg:grid-cols-[2fr_1.5fr] gap-6 mb-6">
          <div className="space-y-4">
            <MetricsDashboard />
            <SignalProcessingPipeline />
          </div>
          <LiveClassificationPanel />
        </div>

        {/* Pipeline steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {analyticsSteps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass border border-white/6 rounded-xl p-5 text-center card-hover"
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <div className="font-tight font-bold text-sm text-white mb-1">{s.label}</div>
              <div className="text-[11px] text-text-muted leading-relaxed">{s.desc}</div>
              {i < analyticsSteps.length - 1 && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-px bg-[#0066FF]/30 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
