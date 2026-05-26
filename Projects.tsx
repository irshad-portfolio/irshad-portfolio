'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Flame, CheckCircle, TrendingUp, AlertTriangle, Award } from 'lucide-react'

const ACHIEVEMENTS = [
  {
    icon: Flame,
    color: '#ff6b2b',
    tag: 'Oil & Gas · 2024',
    title: 'BPCL Kochi Refinery Shutdown',
    company: 'Shilpi Engineering',
    desc: 'Managed complete safety operations for a major scheduled shutdown/turnaround at BPCL Kochi Refinery — one of India\'s largest refineries.',
    highlights: [
      'Zero LTI (Lost Time Injury) achieved',
      'PTW management for 100+ daily work orders',
      'Coordinated with BPCL client safety teams',
      'OISD standards compliance maintained',
    ],
  },
  {
    icon: Shield,
    color: '#00d4ff',
    tag: 'Facility Safety · 2022–2024',
    title: 'DLF IT Park HSE Programme',
    company: 'DLF IT Park, Chennai',
    desc: 'Established and sustained a robust HSE programme across a large IT facility covering fire safety, emergency response, and contractor safety management.',
    highlights: [
      'Consistent zero major-incident months',
      '50+ workers trained via Toolbox Talks',
      'Critical fire safety deficiencies resolved',
      'Full statutory & regulatory compliance',
    ],
  },
  {
    icon: AlertTriangle,
    color: '#ffd700',
    tag: 'Risk Management',
    title: 'Confined Space Entry Programme',
    company: 'BPCL Kochi Refinery',
    desc: 'Developed and enforced a rigorous confined space entry programme during the refinery shutdown with continuous atmospheric monitoring and standby safety officers.',
    highlights: [
      'Multi-gas atmospheric monitoring protocol',
      'Standby rescuer arrangements ensured',
      'Entry certificates and PTW coordination',
      'Zero confined space incidents recorded',
    ],
  },
  {
    icon: CheckCircle,
    color: '#00ff88',
    tag: 'Compliance',
    title: 'Permit-to-Work Implementation',
    company: 'Multiple Sites',
    desc: 'Implemented and managed comprehensive Permit-to-Work systems covering hot work, height work, electrical isolation, and confined space across high-hazard industrial sites.',
    highlights: [
      'Hot work, electrical & CSE permit expertise',
      'LOTO (Lockout-Tagout) supervision',
      'Daily PTW auditing and closeout',
      'Contractor compliance enforcement',
    ],
  },
  {
    icon: TrendingUp,
    color: '#b060ff',
    tag: 'Culture & Training',
    title: 'Safety Culture Initiative',
    company: 'DLF IT Park',
    desc: 'Led an initiative to improve safety awareness and behaviour-based safety culture, resulting in measurable improvements in near-miss reporting and PPE compliance.',
    highlights: [
      '50+ workers trained in BBS principles',
      'Near-miss reporting culture established',
      'Weekly structured Toolbox Talk programme',
      'Emergency drill coordination',
    ],
  },
  {
    icon: Award,
    color: '#ff6b2b',
    tag: 'Emergency Response',
    title: 'Fire Safety & Emergency Drills',
    company: 'DLF IT Park, Chennai',
    desc: 'Managed complete fire safety infrastructure including inspection, maintenance of suppression systems, and coordinated full-scale evacuation and emergency response drills.',
    highlights: [
      'Fire extinguisher & suppression maintenance',
      'Emergency evacuation planning',
      'Fire point inspections & audits',
      'First-responder team training',
    ],
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-28 bg-obsidian overflow-hidden" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="section-label mb-4">Track Record</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-hero">
            Key Achievements
          </h2>
          <p className="font-body text-ice-dim mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Notable projects and safety accomplishments across oil & gas and industrial facility environments.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="glass-card glow-border group relative overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top, ${item.color}08, transparent 60%)` }}
                />

                {/* Top color bar */}
                <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />

                <div className="p-6">
                  {/* Icon + tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                      <Icon size={20} style={{ color: item.color }} />
                    </div>
                    <span className="text-[10px] font-display tracking-widest px-3 py-1 rounded-full"
                      style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}25` }}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-bold text-ice mb-1 group-hover:text-gradient-hero transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs font-semibold mb-3" style={{ color: item.color }}>
                    {item.company}
                  </p>
                  <p className="font-body text-sm text-ice-dim leading-relaxed mb-5">{item.desc}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-ice-dim font-body">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: item.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
