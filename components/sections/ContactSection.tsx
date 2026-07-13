'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ContactSection() {
  return (
    <section id="contact" className="relative section-py bg-[#050D1E] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's Build the"
          titleHighlight="Future Together"
          subtitle="Whether you're a scientist, investor, clinician, or industry partner — we'd love to explore how DNA Biotronix fits into your mission."
          centered
          className="mb-14"
        />

        <div className="flex justify-center">
          <motion.a
            href="mailto:contact@dnab.bio"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full max-w-lg glass border border-white/8 rounded-2xl p-10 flex flex-col items-center text-center
                       hover:border-[#0066FF]/35 hover:shadow-[0_0_60px_rgba(0,102,255,0.12)] transition-all duration-400 overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,102,255,0.08), transparent 70%)' }} />

            {/* Top accent line */}
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent" />

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#0066FF]/12 border border-[#0066FF]/20 flex items-center justify-center mb-6
                           group-hover:bg-[#0066FF]/20 group-hover:scale-105 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(0,102,255,0.18)' }}>
              <Mail className="w-7 h-7 text-[#0066FF]" />
            </div>

            <div className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-3">Email Us</div>

            <div className="font-grotesk font-700 text-xl text-white mb-2 group-hover:text-[#00AAFF] transition-colors duration-200">
              contact@dnab.bio
            </div>

            <p className="text-sm text-text-muted mb-8 max-w-xs leading-relaxed">
              Reach out for investor relations, research collaborations, or partnership opportunities. We respond within 24 hours.
            </p>

            <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] group-hover:bg-[#0055DD] text-white text-sm font-semibold transition-all duration-200"
              style={{ boxShadow: '0 0 20px rgba(0,102,255,0.4)' }}>
              <Mail className="w-4 h-4" />
              Open Email
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
