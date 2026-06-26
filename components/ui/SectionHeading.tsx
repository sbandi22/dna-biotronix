'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-[#00B4FF] text-xs font-semibold uppercase tracking-widest mb-5 ${centered ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-grotesk font-700 text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white mb-5"
      >
        {title}{' '}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg text-text-muted leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
