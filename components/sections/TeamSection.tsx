'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

// ─── Data ────────────────────────────────────────────────────────────────────

const founders = [
  {
    name: 'Peiming Zhang',
    title: 'Co-founder & CEO',
    affiliation: 'Arizona State University',
    bio: '30+ years in DNA biotechnology and single-molecule detection. Inventor of the DNA wired nanojunction transistor, translating a decade of peer-reviewed science into a commercial biosensor platform for proactive healthcare.',
    expertise: ['DNA Nanotechnology', 'Single-Molecule Detection', 'R&D Leadership'],
    initials: 'PZ',
    accentColor: '#0066FF',
    gradientFrom: '#003DB5',
    gradientTo: '#0077FF',
  },
  {
    name: 'Michael Chen',
    title: 'Co-founder & CFO',
    affiliation: 'Finance & Corporate Strategy',
    bio: 'Founder and Managing Director of a financial advisory firm with 30+ years in finance, M&A, and fundraising. Oversees investor relations, financial strategy, and operational scale-up for DNA Biotronix.',
    expertise: ['Financial Strategy', 'M&A', 'Fundraising', 'Operations'],
    initials: 'MC',
    accentColor: '#00AAFF',
    gradientFrom: '#0055AA',
    gradientTo: '#00BBFF',
  },
  {
    name: 'Josh Hihath',
    title: 'Co-founder & CSO',
    affiliation: 'UC Davis / ASU Biodesign Center',
    bio: 'Director of the Biodesign Center for Bioelectronics & Biosensors at ASU. Pioneer in molecular electronics and nanoelectronics with decades of expertise in single-molecule conductance measurements and nanoscale device physics.',
    expertise: ['Molecular Electronics', 'Nanoelectronics', 'Bioelectronics'],
    initials: 'JH',
    accentColor: '#0066FF',
    gradientFrom: '#002E8A',
    gradientTo: '#0066EE',
  },
]

const advisors = [
  {
    name: 'Prof. Erica Forzani',
    title: 'Scientific Advisor',
    affiliation: 'Arizona State University',
    bio: 'Professor at ASU and expert in biosensors, nanomaterials, and wearable health monitoring. Key collaborator on sensor miniaturization and integration for continuous personal health monitoring applications.',
    expertise: ['Biosensors', 'Wearables', 'Nanomaterials'],
    initials: 'EF',
    accentColor: '#00AAFF',
    gradientFrom: '#005577',
    gradientTo: '#00AAFF',
  },
  {
    name: 'Prof. Jeff Kordower',
    title: 'Clinical & Neuroscience Advisor',
    affiliation: 'ASU / Rush University Medical Center',
    bio: "World-renowned neuroscientist with expertise in Parkinson's and Alzheimer's disease. Guides clinical application strategy for neurodegenerative biomarker detection.",
    expertise: ["Neuroscience", "Parkinson's", "Alzheimer's"],
    initials: 'JK',
    accentColor: '#0066FF',
    gradientFrom: '#002299',
    gradientTo: '#0055DD',
  },
  {
    name: 'Prof. Qiang Shawn Chen',
    title: 'Scientific Advisor',
    affiliation: 'Arizona State University',
    bio: 'Researcher in molecular sensing, protein structure, and nanoscale biosensor interfaces. Deep expertise in analyte-receptor interactions and platform validation.',
    expertise: ['Protein Science', 'Molecular Sensing', 'Biosensor Interfaces'],
    initials: 'QC',
    accentColor: '#00AAFF',
    gradientFrom: '#004466',
    gradientTo: '#0099CC',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionDivider({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/8" />
      <div
        className="flex items-center gap-2 px-5 py-1.5 rounded-full glass border"
        style={{ borderColor: `${color}30` }}
      >
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-text-muted">{label}</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/8" />
    </div>
  )
}

interface FounderCardProps {
  founder: typeof founders[number]
  index: number
}

function FounderCard({ founder, index }: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col glass border border-white/6 rounded-2xl overflow-hidden
                 hover:border-[#0066FF]/35 transition-all duration-300
                 hover:shadow-[0_4px_40px_rgba(0,102,255,0.12)] group"
    >
      {/* Top gradient accent bar */}
      <div
        className="h-0.5 w-full flex-shrink-0"
        style={{ background: `linear-gradient(to right, transparent, ${founder.accentColor}, transparent)` }}
      />

      <div className="flex flex-col flex-1 items-center text-center p-7">
        {/* Avatar */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 mb-5
                     transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${founder.gradientFrom}, ${founder.gradientTo})`,
            boxShadow: `0 0 32px ${founder.accentColor}28`,
          }}
        >
          <span className="font-grotesk font-700 text-2xl text-white tracking-wide">{founder.initials}</span>
        </div>

        {/* Identity */}
        <div className="mb-5 w-full">
          <div className="font-grotesk font-700 text-lg text-white leading-tight mb-1">{founder.name}</div>
          <div className="text-sm font-semibold mb-1" style={{ color: founder.accentColor }}>{founder.title}</div>
          <div className="text-[11px] text-text-muted">{founder.affiliation}</div>
        </div>

        {/* Divider */}
        <div className="w-10 h-px mb-5 flex-shrink-0" style={{ background: `${founder.accentColor}45` }} />

        {/* Bio — flex-1 so all cards stretch to equal height */}
        <p className="text-sm text-text-muted leading-relaxed text-center flex-1 mb-5">{founder.bio}</p>

        {/* Expertise tags — pinned to bottom */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-auto w-full">
          {founder.expertise.map(tag => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-0.5 rounded-full"
              style={{
                background: `${founder.accentColor}12`,
                color: founder.accentColor,
                border: `1px solid ${founder.accentColor}22`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

interface AdvisorCardProps {
  advisor: typeof advisors[number]
  index: number
}

function AdvisorCard({ advisor, index }: AdvisorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col glass border border-white/6 rounded-2xl overflow-hidden
                 hover:border-[#0066FF]/35 transition-all duration-300
                 hover:shadow-[0_4px_40px_rgba(0,102,255,0.12)] group"
    >
      {/* Top gradient accent bar — identical to FounderCard */}
      <div
        className="h-0.5 w-full flex-shrink-0"
        style={{ background: `linear-gradient(to right, transparent, ${advisor.accentColor}, transparent)` }}
      />

      <div className="flex flex-col flex-1 items-center text-center p-7">
        {/* Initials avatar — same 80×80 footprint as founder avatar */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 mb-5
                     transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${advisor.gradientFrom}, ${advisor.gradientTo})`,
            boxShadow: `0 0 32px ${advisor.accentColor}28`,
          }}
        >
          <span className="font-grotesk font-700 text-2xl text-white tracking-wide">{advisor.initials}</span>
        </div>

        {/* Identity */}
        <div className="mb-5 w-full">
          <div className="font-grotesk font-700 text-base text-white leading-tight mb-1">{advisor.name}</div>
          <div className="text-xs font-semibold mb-1" style={{ color: advisor.accentColor }}>{advisor.title}</div>
          <div className="text-[11px] text-text-muted">{advisor.affiliation}</div>
        </div>

        {/* Divider */}
        <div className="w-10 h-px mb-5 flex-shrink-0" style={{ background: `${advisor.accentColor}45` }} />

        {/* Bio */}
        <p className="text-sm text-text-muted leading-relaxed text-center flex-1 mb-5">{advisor.bio}</p>

        {/* Expertise tags */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-auto w-full">
          {advisor.expertise.map(tag => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-0.5 rounded-full"
              style={{
                background: `${advisor.accentColor}12`,
                color: advisor.accentColor,
                border: `1px solid ${advisor.accentColor}22`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function TeamSection() {
  return (
    <section id="team" className="relative section-py bg-[#01050E] overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/25 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0066FF]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#00AAFF]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Leadership & Advisory Board"
          title="The Team Behind"
          titleHighlight="DNA Biotronix"
          subtitle="World-class scientists and entrepreneurs united by a shared mission — democratizing molecular intelligence for proactive healthcare."
          centered
          className="mb-16"
        />

        {/* ── Section 1: Founding Team ── */}
        <div className="mb-16">
          <SectionDivider label="Founding Team" color="#0066FF" />
          <p className="text-center text-sm text-text-muted max-w-2xl mx-auto mt-4 mb-10">
            Three co-founders combining deep expertise in molecular science, nanoelectronics, and corporate finance — with decades of complementary experience.
          </p>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {founders.map((f, i) => (
              <FounderCard key={f.name} founder={f} index={i} />
            ))}
          </div>
        </div>

        {/* ── Section 2: Scientific Advisory Board ── */}
        <div>
          <SectionDivider label="Scientific Advisory Board" color="#00AAFF" />
          <p className="text-center text-sm text-text-muted max-w-2xl mx-auto mt-4 mb-10">
            World-class researchers guiding the platform's scientific direction, clinical translation, and sensor integration across biosensors, neuroscience, and molecular electronics.
          </p>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {advisors.map((a, i) => (
              <AdvisorCard key={a.name} advisor={a} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
