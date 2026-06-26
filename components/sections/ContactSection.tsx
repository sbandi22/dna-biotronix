'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, TrendingUp, FlaskConical, Send, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const inquiryTypes = [
  { id: 'research', label: 'Research Collaboration', icon: FlaskConical, color: '#0066FF' },
  { id: 'investor', label: 'Investor Relations', icon: TrendingUp, color: '#00B4FF' },
  { id: 'partnership', label: 'Business Partnership', icon: MessageSquare, color: '#60A5FA' },
  { id: 'general', label: 'General Inquiry', icon: Mail, color: '#0066FF' },
]

const contactInfo = [
  { label: 'General Inquiries', value: 'hello@dnabiotronix.com', icon: Mail },
  { label: 'Investor Relations', value: 'investors@dnabiotronix.com', icon: TrendingUp },
  { label: 'Research Partnerships', value: 'research@dnabiotronix.com', icon: FlaskConical },
]

export default function ContactSection() {
  const [selectedType, setSelectedType] = useState('research')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
          {/* Left: contact info + inquiry types */}
          <div className="space-y-6">
            {/* Inquiry types */}
            <div className="glass border border-white/6 rounded-2xl p-6">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Nature of Inquiry</div>
              <div className="grid grid-cols-2 gap-3">
                {inquiryTypes.map(({ id, label, icon: Icon, color }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedType(id)}
                    className={`flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all duration-200 ${
                      selectedType === id
                        ? 'border-[#0066FF]/40 bg-[#0066FF]/8'
                        : 'border-white/6 glass hover:border-white/14'
                    }`}
                  >
                    <Icon className="w-5 h-5" style={{ color: selectedType === id ? color : '#B8C5D6' }} />
                    <span className={`text-xs font-medium leading-tight ${selectedType === id ? 'text-white' : 'text-text-muted'}`}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map(({ label, value, icon: Icon }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass border border-white/6 rounded-xl p-5 flex items-center gap-4 hover:border-[#0066FF]/25 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#0066FF]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wide">{label}</div>
                    <div className="text-sm font-medium text-white">{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* HQ info */}
            <div className="glass border border-white/6 rounded-xl p-5">
              <div className="text-[10px] text-text-muted uppercase tracking-widest mb-2">Headquarters</div>
              <div className="text-sm text-white font-medium">DNA Biotronix, Inc.</div>
              <div className="text-xs text-text-muted mt-1">One Kendall Square, Cambridge, MA 02139</div>
              <div className="text-xs text-text-muted">Boston Biotech Hub · US East Coast</div>
            </div>
          </div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong border border-white/8 rounded-2xl p-8"
            style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,102,255,0.07)' }}
          >
            {!submitted ? (
              <>
                <h3 className="font-tight font-bold text-xl text-white mb-2">Send us a message</h3>
                <p className="text-sm text-text-muted mb-7">
                  {selectedType === 'investor'
                    ? "We're actively seeking strategic investors for our Series A. Reach out to arrange a pitch meeting."
                    : selectedType === 'research'
                    ? 'We collaborate with leading academic and clinical research institutions globally.'
                    : "Our team typically responds within 24 hours on business days."}
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-text-muted mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Dr. Jane Smith"
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white text-sm placeholder-[#B8C5D6]/40 focus:outline-none focus:border-[#0066FF]/50 focus:bg-[#0066FF]/5 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-text-muted mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="jane@institution.edu"
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white text-sm placeholder-[#B8C5D6]/40 focus:outline-none focus:border-[#0066FF]/50 focus:bg-[#0066FF]/5 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-2">Organization / Institution</label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
                      placeholder="MIT · Flagship Pioneering · Mayo Clinic"
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white text-sm placeholder-[#B8C5D6]/40 focus:outline-none focus:border-[#0066FF]/50 focus:bg-[#0066FF]/5 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder={
                        selectedType === 'investor'
                          ? "Tell us about your fund and investment thesis..."
                          : selectedType === 'research'
                          ? "Describe your research area and potential collaboration..."
                          : "How can we help you?"
                      }
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white text-sm placeholder-[#B8C5D6]/40 focus:outline-none focus:border-[#0066FF]/50 focus:bg-[#0066FF]/5 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0055DD] text-white font-semibold text-sm transition-all duration-200 glow-blue group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-text-muted text-center">
                    We respect your privacy. Your information will not be shared with third parties.
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#0066FF]/15 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-[#00B4FF]" />
                </div>
                <h3 className="font-tight font-bold text-xl text-white mb-3">Message Sent!</h3>
                <p className="text-sm text-text-muted max-w-sm">
                  Thank you for reaching out. Our team will respond within 24 hours on business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', org: '', message: '' }) }}
                  className="mt-6 text-sm text-[#00B4FF] hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
