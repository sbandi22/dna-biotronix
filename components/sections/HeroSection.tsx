'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ParticleBackground from '@/components/animations/ParticleBackground'

const appCards = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <circle cx="16" cy="12" r="6" stroke="#00AAFF" strokeWidth="1.5" />
        <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 16c2.2 1.4 3.5 3.8 3.5 6.5" stroke="#00AAFF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <circle cx="24" cy="10" r="3" fill="#0066FF" opacity="0.6" />
      </svg>
    ),
    label: 'Personal Monitoring',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path d="M16 4 C10 4 6 10 6 16 C6 22 10 28 16 28" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 4 C22 4 26 10 26 16 C26 22 22 28 16 28" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" fill="#0066FF" />
        <path d="M6 16 H26" stroke="#00AAFF" strokeWidth="1" opacity="0.4" />
        <path d="M16 4 V28" stroke="#00AAFF" strokeWidth="1" opacity="0.4" />
        <circle cx="16" cy="28" r="2" fill="#00AAFF" opacity="0.7" />
      </svg>
    ),
    label: 'Environmental Testing',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <rect x="6" y="10" width="20" height="14" rx="3" stroke="#00AAFF" strokeWidth="1.5" />
        <path d="M16 6 V10" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 6 H20" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 17 L15 21 L21 13" stroke="#00AAFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Point of Care',
  },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#01050E]" id="hero">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground count={70} maxDistance={120} speed={0.18} particleColor="0,170,255" lineColor="0,102,255" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/6 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#00AAFF]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#0066FF]/25 text-[#00AAFF] text-xs font-semibold uppercase tracking-widest mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AAFF] animate-pulse" />
            DNA Transistor Sensor Platform · Proactive Healthcare
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-grotesk font-700 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.06] mb-4"
          >
            A DNA Transistor Sensor for
            <br />
            <span className="gradient-text">Proactive Healthcare</span>
          </motion.h1>

          {/* Italic sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl sm:text-2xl italic font-medium text-text-muted tracking-wide mb-10"
          >
            EVERY DAY. EVERYWHERE.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link
              href="#technology"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0055DD] text-white font-semibold text-sm transition-all duration-200 glow-blue"
            >
              Explore Technology
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/12 hover:border-[#0066FF]/40 text-white font-semibold text-sm transition-all duration-200 hover:bg-white/5"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Hero platform image — original asset with dark-blue integration */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 0 100px rgba(0,102,255,0.22), 0 40px 100px rgba(0,0,0,0.75)' }}
          >
            {/* Ambient radial glow behind image */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(0,80,210,0.14) 0%, transparent 70%)', zIndex: 1 }} />

            {/* Image */}
            <Image
              src="/images/hero-platform.jpeg"
              alt="DNA Biotronix — A DNA Transistor Sensor for Proactive Healthcare. Personal Monitoring, Environmental Testing, Point of Care."
              width={1672}
              height={1143}
              className="w-full h-auto relative"
              style={{ filter: 'brightness(0.90) contrast(1.07)', zIndex: 2 }}
              priority
            />

            {/* Edge vignettes — fades image into section background #01050E */}
            <div className="absolute inset-x-0 top-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, #01050E, transparent)', zIndex: 3 }} />
            <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #01050E, transparent)', zIndex: 3 }} />
            <div className="absolute inset-y-0 left-0 w-14 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #01050E, transparent)', zIndex: 3 }} />
            <div className="absolute inset-y-0 right-0 w-14 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #01050E, transparent)', zIndex: 3 }} />

            {/* Subtle blue ambient tint */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(0,40,130,0.07)', zIndex: 4 }} />

            {/* Inner border glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: 'inset 0 0 70px rgba(0,102,255,0.10)', border: '1px solid rgba(0,102,255,0.20)', zIndex: 5 }} />
          </motion.div>

          {/* Application category chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            {appCards.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-white/8 hover:border-[#0066FF]/30 transition-all duration-200"
              >
                {c.icon}
                <span className="text-sm font-medium text-white">{c.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-8 text-text-muted text-sm font-medium tracking-widest uppercase"
          >
            One Platform.{' '}
            <span className="text-white">Unlimited Applications.</span>
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <a href="#technology" className="flex flex-col items-center gap-1.5 text-text-muted hover:text-white transition-colors" aria-label="Scroll down">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
