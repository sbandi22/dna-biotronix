'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const apps = [
  {
    id: 'personal',
    title: 'Personal Monitoring',
    tagline: 'Proactive wellness, anywhere.',
    desc: 'Track metabolic health and physiological stress continuously. Deployable in wearable patches and portable sensors for proactive wellness management.',
    color: '#0066FF',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <circle cx="28" cy="20" r="9" stroke="#0066FF" strokeWidth="1.5" />
        <path d="M14 46c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="34" y="8" width="14" height="10" rx="3" stroke="#00AAFF" strokeWidth="1.2" fill="rgba(0,170,255,0.08)" />
        <path d="M36 12h4M36 15h6" stroke="#00AAFF" strokeWidth="1" strokeLinecap="round" />
        <path d="M20 32 C16 34 13 38 13 42" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        <path d="M36 32 C40 34 43 38 43 42" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    features: [
      'Continuous metabolic health tracking',
      'Wearable patch & portable sensor formats',
      'Real-time physiological stress indicators',
      'Zero blood draws — non-invasive detection',
    ],
  },
  {
    id: 'environmental',
    title: 'Environmental Testing',
    tagline: 'Lab-grade precision in the field.',
    desc: 'Deliver lab-grade precision from the kitchen counter to the field. Detect PFAS, heavy metals, and pathogens in real time without hardware changes.',
    color: '#00AAFF',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <circle cx="28" cy="28" r="16" stroke="#00AAFF" strokeWidth="1.5" fill="none" />
        <path d="M28 12 C28 12 20 20 20 28 C20 32.4 23.6 36 28 36 C32.4 36 36 32.4 36 28 C36 20 28 12 28 12Z"
          stroke="#0066FF" strokeWidth="1.2" fill="rgba(0,102,255,0.08)" />
        <circle cx="28" cy="28" r="3.5" fill="#00AAFF" opacity="0.7" />
        <path d="M28 20V24M28 32V36M20 28H24M32 28H36" stroke="#00AAFF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M40 12 L44 8M12 44 L8 48" stroke="#0066FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <circle cx="44" cy="10" r="2" fill="#0066FF" opacity="0.5" />
      </svg>
    ),
    features: [
      'PFAS detection at 1 ppt in water',
      'Heavy metal quantification below EPA limits',
      'Real-time pathogen surveillance',
      'Field-deployable — no lab infrastructure needed',
    ],
  },
  {
    id: 'poc',
    title: 'Point of Care',
    tagline: 'Central-lab precision at the bedside.',
    desc: 'Deliver central-lab precision directly to the bedside. ML-driven arrays decode multiplexed biomarker panels within minutes without complex wet chemistry.',
    color: '#60A5FA',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <rect x="12" y="18" width="32" height="22" rx="4" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M28 12V18" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 12H34" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 28 L25 33 L36 22" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="44" cy="14" r="5" fill="rgba(96,165,250,0.15)" stroke="#60A5FA" strokeWidth="1.2" />
        <path d="M44 11V14H47" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    features: [
      'Results in minutes — not hours',
      'Multiplexed biomarker panel decoding',
      'No complex wet chemistry required',
      'ML-driven molecular identification on-chip',
    ],
  },
]

export default function ApplicationsSection() {
  return (
    <section id="applications" className="relative section-py bg-[#01050E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/25 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#00AAFF]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Applications"
          title="One Platform."
          titleHighlight="Unlimited Applications."
          subtitle="From wearable health patches to field-deployed environmental sensors — the DNA Biotronix platform adapts to any context without hardware changes."
          centered
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass border border-white/6 rounded-2xl p-8 flex flex-col
                         hover:border-[#0066FF]/30 hover:shadow-[0_0_40px_rgba(0,102,255,0.09)]
                         transition-all duration-400 overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${app.color}, transparent)` }}
              />

              {/* Corner ambient glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${app.color}18, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0
                           transition-all duration-300 group-hover:scale-105"
                style={{
                  background: `${app.color}12`,
                  boxShadow: `0 0 0 1px ${app.color}20`,
                }}
              >
                {app.icon}
              </div>

              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-4 self-start"
                style={{ background: `${app.color}15`, color: app.color }}
              >
                <span className="w-1 h-1 rounded-full" style={{ background: app.color }} />
                {app.tagline}
              </div>

              {/* Title */}
              <h3 className="font-grotesk font-700 text-xl text-white mb-3 leading-tight">{app.title}</h3>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">{app.desc}</p>

              {/* Features */}
              <div className="space-y-2.5 pt-5 border-t border-white/5">
                {app.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${app.color}18` }}
                    >
                      <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                        <path d="M2 5 L4 7 L8 3" stroke={app.color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs text-text-muted leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
