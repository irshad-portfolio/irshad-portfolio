'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  // Replace with real form handler (e.g. Formspree / EmailJS)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const CONTACT_LINKS = [
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 80896 51072',
      href: 'https://wa.me/918089651072?text=Hi%20Irshad%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
      color: '#25d366',
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'irshadnoushad98@gmail.com',
      href: 'mailto:irshadnoushad98@gmail.com',
      color: '#00d4ff',
      external: false,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kollam, Kerala – 690526',
      href: 'https://maps.google.com/?q=Kollam,Kerala',
      color: '#ff6b2b',
      external: true,
    },
  ]

  return (
    <section id="contact" className="relative py-28 bg-obsidian overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,43,0.05) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="section-label mb-4">Let's Connect</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-hero">
            Get In Touch
          </h2>
          <p className="font-body text-ice-dim mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Available for HSE Officer, Safety Supervisor, and Site Safety roles across India and internationally.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left – info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="glass-card glow-border flex items-center gap-4 p-5 group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-[0.2em] text-ice-dim uppercase mb-1">{label}</p>
                  <p className="font-body text-sm font-medium text-ice group-hover:text-cyan-glow transition-colors">{value}</p>
                </div>
              </a>
            ))}

            {/* Quick links */}
            <div className="glass-card p-5">
              <p className="font-display text-[10px] tracking-[0.2em] text-ice-dim uppercase mb-4">Quick Connect</p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/918089651072?text=Hi%20Irshad%2C%20I%20would%20like%20to%20discuss%20a%20safety%20role%20with%20you."
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-display tracking-widest transition-all duration-300 hover:scale-105"
                  style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366' }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="mailto:irshadnoushad98@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-display tracking-widest transition-all duration-300 hover:scale-105"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', color: '#00d4ff' }}
                  aria-label="Email"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ background: 'rgba(225,48,108,0.08)', border: '1px solid rgba(225,48,108,0.25)', color: '#e1306c' }}
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card glow-border p-8">
              <h3 className="font-display text-lg font-bold text-ice mb-6 tracking-wide">Send a Message</h3>

              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '2px solid rgba(0,212,255,0.4)' }}>
                    <CheckCircle size={32} className="text-cyan-glow" />
                  </div>
                  <p className="font-display text-base font-bold text-gradient-cyan">Message Sent!</p>
                  <p className="font-body text-sm text-ice-dim text-center">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block font-display text-[10px] tracking-[0.2em] text-ice-dim uppercase mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl font-body text-sm text-ice placeholder-ice-muted outline-none transition-all duration-300 focus:ring-1"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          // @ts-ignore
                          '--tw-ring-color': 'rgba(0,212,255,0.4)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.4)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-display text-[10px] tracking-[0.2em] text-ice-dim uppercase mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl font-body text-sm text-ice placeholder-ice-muted outline-none transition-all duration-300"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.4)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-display text-[10px] tracking-[0.2em] text-ice-dim uppercase mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="HSE Officer Position – Your Company"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm text-ice placeholder-ice-muted outline-none transition-all duration-300"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.4)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-display text-[10px] tracking-[0.2em] text-ice-dim uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the role or project..."
                      className="w-full px-4 py-3 rounded-xl font-body text-sm text-ice placeholder-ice-muted outline-none transition-all duration-300 resize-none"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.4)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-cyan w-full flex items-center justify-center gap-2 py-4 disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-obsidian/40 border-t-obsidian rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        SEND MESSAGE
                      </>
                    )}
                  </button>

                  <p className="text-center font-body text-[11px] text-ice-muted">
                    💡 Tip: You can also directly WhatsApp me for faster response
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
