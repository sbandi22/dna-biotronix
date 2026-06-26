'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const applications = [
  {
    id: 'diagnostics',
    title: 'Precision Diagnostics',
    market: '$85B market',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
        <circle cx="28" cy="28" r="20" stroke="#0066FF" strokeWidth="1.5" />
        <path d="M20 28 L26 34 L38 22" stroke="#00B4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="28" r="26" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
        <circle cx="28" cy="8" r="3" fill="#0066FF" opacity="0.7" />
        <circle cx="28" cy="48" r="3" fill="#0066FF" opacity="0.7" />
        <circle cx="8" cy="28" r="3" fill="#0066FF" opacity="0.7" />
        <circle cx="48" cy="28" r="3" fill="#0066FF" opacity="0.7" />
      </svg>
    ),
    tagline: 'Detect any disease biomarker at the single-molecule level',
    desc: 'Our platform enables liquid biopsy diagnostics with unprecedented sensitivity — detecting early-stage cancers, infectious diseases, and metabolic disorders from a single blood draw before symptoms appear.',
    benefits: [
      'Early-stage cancer detection (Stage I sensitivity >95%)',
      'Sepsis identification in <30 minutes',
      'Multiplexed 50-biomarker panels, single assay',
      'POC-compatible chip format',
    ],
    color: '#0066FF',
    stage: 'Clinical Validation',
  },
  {
    id: 'drugdiscovery',
    title: 'Drug Discovery',
    market: '$120B market',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
        <rect x="10" y="22" width="36" height="16" rx="8" stroke="#00B4FF" strokeWidth="1.5" />
        <rect x="24" y="10" width="8" height="36" rx="4" stroke="#0066FF" strokeWidth="1.5" />
        <circle cx="28" cy="30" r="4" fill="#00B4FF" opacity="0.6" />
        <path d="M14 18 L20 14 M36 14 L42 18 M14 38 L20 42 M36 42 L42 38" stroke="#0066FF" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      </svg>
    ),
    tagline: 'Characterize drug-target interactions at molecular resolution',
    desc: 'Measure real-time binding kinetics, target engagement, off-target profiles, and mechanism of action for any drug candidate — reducing preclinical attrition and accelerating IND filing.',
    benefits: [
      'KD, kon, koff measurement at femtomolar range',
      'Real-time MOA profiling',
      'Polypharmacology mapping across 100s of targets',
      'Direct integration with HTS platforms',
    ],
    color: '#00B4FF',
    stage: 'Active R&D',
  },
  {
    id: 'neuro',
    title: 'Neurodegenerative\nDiseases',
    market: '$30B+ unmet need',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
        <path d="M28 12 C20 12 14 18 14 26 C14 30 16 33 20 36 L20 44 L36 44 L36 36 C40 33 42 30 42 26 C42 18 36 12 28 12Z" stroke="#0066FF" strokeWidth="1.5" fill="none" />
        <path d="M22 20 Q28 16 34 20" stroke="#00B4FF" strokeWidth="1.2" fill="none" />
        <path d="M20 26 Q28 22 36 26" stroke="#00B4FF" strokeWidth="1.2" fill="none" />
        <line x1="28" y1="12" x2="28" y2="44" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="28" cy="26" r="3" fill="#0066FF" opacity="0.6" />
      </svg>
    ),
    tagline: 'Track neurodegeneration before symptoms manifest',
    desc: "Monitor Alzheimer's (Aβ42, p-tau181), Parkinson's (α-synuclein, GFAP), and ALS (neurofilament light) biomarkers in CSF and blood years before clinical onset — enabling preventive intervention.",
    benefits: [
      'Amyloid-β detection in blood (not just CSF)',
      '10-year pre-symptom risk stratification',
      'Clinical trial enrollment biomarker qualification',
      'Monitoring treatment response longitudinally',
    ],
    color: '#0066FF',
    stage: 'NIH Funded Study',
  },
  {
    id: 'precision',
    title: 'Precision Medicine',
    market: '$100B+ opportunity',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
        <path d="M28 10 L40 17 L40 31 L28 38 L16 31 L16 17 Z" stroke="#00B4FF" strokeWidth="1.5" fill="none" />
        <path d="M28 18 L35 22 L35 30 L28 34 L21 30 L21 22 Z" stroke="#0066FF" strokeWidth="1" fill="rgba(0,102,255,0.08)" />
        <circle cx="28" cy="26" r="3" fill="#00B4FF" opacity="0.8" />
        <line x1="28" y1="10" x2="28" y2="18" stroke="#00B4FF" strokeWidth="1" opacity="0.5" />
        <line x1="28" y1="34" x2="28" y2="42" stroke="#00B4FF" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    tagline: 'Tailor therapy to the molecular signature of each patient',
    desc: 'Simultaneous detection of genetic variants, protein biomarkers, metabolites, and microRNA — delivering a complete molecular phenotype that guides optimal therapy selection and dosing.',
    benefits: [
      'Companion diagnostic development support',
      'PK/PD monitoring during treatment',
      'Pharmacogenomics biomarker profiling',
      'Real-time treatment response assessment',
    ],
    color: '#00B4FF',
    stage: 'Partner Co-Dev',
  },
  {
    id: 'environmental',
    title: 'Environmental\nMonitoring',
    market: '$25B market',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
        <circle cx="28" cy="28" r="16" stroke="#0066FF" strokeWidth="1.5" fill="none" />
        <path d="M28 12 C28 12 20 20 20 28 C20 32.4 23.6 36 28 36 C32.4 36 36 32.4 36 28 C36 20 28 12 28 12Z" stroke="#00B4FF" strokeWidth="1.2" fill="rgba(0,180,255,0.08)" />
        <circle cx="28" cy="28" r="4" fill="#0066FF" opacity="0.5" />
        <path d="M28 20 L28 24 M28 32 L28 36 M20 28 L24 28 M32 28 L36 28" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    tagline: 'Ultra-sensitive detection of contaminants and pathogens',
    desc: 'Field-deployable sensor arrays for water quality, air quality, and food safety monitoring. Single-molecule sensitivity enables detection of PFAS, heavy metals, and pathogens at regulatory thresholds.',
    benefits: [
      'PFAS detection at 1 ppt in water',
      'Real-time pathogen surveillance (water/air)',
      'Heavy metal quantification below EPA limits',
      'IoT-connected distributed monitoring',
    ],
    color: '#0066FF',
    stage: 'Prototype Stage',
  },
]

export default function ApplicationsSection() {
  const [active, setActive] = useState<string | null>(null)
  const activeApp = applications.find(a => a.id === active) ?? applications[0]

  return (
    <section id="applications" className="relative section-py bg-[#050D1E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Impact & Applications"
          title="Transforming"
          titleHighlight="Healthcare & Beyond"
          subtitle="One platform — five transformative applications across the full spectrum of human health, from early disease detection to environmental safety."
          centered
          className="mb-14"
        />

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* Application selector cards */}
          <div className="space-y-3">
            {applications.map((app, i) => (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setActive(app.id === active ? null : app.id)}
                className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-300 ${
                  (active === app.id || (active === null && i === 0))
                    ? 'border-[#0066FF]/35 bg-[#0066FF]/8'
                    : 'glass border-white/6 hover:border-white/12'
                }`}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: (active === app.id || (active === null && i === 0)) ? `${app.color}20` : 'rgba(255,255,255,0.04)',
                    boxShadow: (active === app.id || (active === null && i === 0)) ? `0 0 16px ${app.color}33` : 'none',
                  }}
                >
                  {app.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-tight font-bold text-sm text-white whitespace-pre-line leading-tight">{app.title}</div>
                  <div className="text-[10px] text-text-muted mt-0.5">{app.tagline}</div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-[10px] font-bold text-[#00B4FF]">{app.market}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <motion.div
            key={activeApp.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass border border-[#0066FF]/20 rounded-2xl p-8 sticky top-28"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-3"
                  style={{ background: `${activeApp.color}20`, color: activeApp.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: activeApp.color }} />
                  {activeApp.stage}
                </div>
                <h3 className="font-tight font-black text-2xl text-white leading-tight whitespace-pre-line">{activeApp.title}</h3>
              </div>
              <div className="font-tight font-black text-sm text-right" style={{ color: activeApp.color }}>
                {activeApp.market}
              </div>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-6">{activeApp.desc}</p>

            <div className="space-y-3">
              <div className="text-xs font-semibold text-white uppercase tracking-widest mb-3">Key Capabilities</div>
              {activeApp.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${activeApp.color}20` }}
                  >
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M2 6 L5 9 L10 3" stroke={activeApp.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-text-muted leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
