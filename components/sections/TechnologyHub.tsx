'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TechnologySection from '@/components/sections/TechnologySection'
import ArchitectureSection from '@/components/sections/ArchitectureSection'

const tabs = [
  {
    id: 'overview',
    label: 'Platform Overview',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 3V1M10 19V17M3 10H1M19 10H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'architecture',
    label: 'Transistor Architecture',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <path d="M2 10h4M14 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="6" y="5" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 5V3M10 17V15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
]

export default function TechnologyHub() {
  const [active, setActive] = useState('overview')

  return (
    <div id="technology">
      {/* Sticky tab bar */}
      <div className="sticky top-16 lg:top-20 z-40 bg-[#01050E]/95 backdrop-blur-xl border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'text-white bg-[#0066FF]/15 border border-[#0066FF]/30'
                      : 'text-text-muted hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span style={{ color: isActive ? '#00AAFF' : 'inherit' }}>{tab.icon}</span>
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tech-tab-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px bg-[#0066FF] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {active === 'overview' && <TechnologySection />}
          {active === 'architecture' && <ArchitectureSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
