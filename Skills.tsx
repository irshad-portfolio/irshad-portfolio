'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldAlert, Flame, ClipboardList, Settings2 } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    icon: ShieldAlert,
    label: 'HSE Management',
    color: '#00d4ff',
    skills: [
      'Health, Safety & Environment (HSE) Management',
      'Permit-to-Work (PTW) System',
      'Job Hazard Analysis (JHA/JSA)',
      'Process Hazard Analysis (PHA)',
      'Risk Assessment & Mitigation',
      'ALARP Principle Application',
      'Behaviour-Based Safety (BBS)',
      'Incident Investigation & Reporting',
    ],
  },
  {
    icon: Flame,
    label: 'Fire & Emergency',
    color: '#ff6b2b',
    skills: [
      'Fire Safety Inspection',
      'Fire Suppression Systems',
      'Emergency Response Planning',
      'Evacuation Drill Coordination',
      'First Responder Principles',
      'Hazardous Material Handling',
      'Fire Extinguisher Maintenance',
      'SCBA & RPE Usage',
    ],
  },
  {
    icon: ClipboardList,
    label: 'Compliance & Standards',
    color: '#ffd700',
    skills: [
      'OISD Standards (Oil Industry)',
      'OSHA Regulatory Compliance',
      'Factory Act Compliance',
      'HSE Audits & Site Inspections',
      'Statutory & Legal Requirements',
      'LOTO (Lockout-Tagout)',
      'Daily HSE Reporting',
      'Contractor Safety Management',
    ],
  },
  {
    icon: Settings2,
    label: 'Specialised Operations',
    color: '#b060ff',
    skills: [
      'Confined Space Entry Management',
      'Shutdown/Turnaround Safety',
      'Hot Work Supervision',
      'Height Work Safety',
      'Atmospheric Monitoring (Multi-Gas)',
      'Electrical Isolation Safety',
      'Toolbox Talks & Safety Training',
      'PPE Management & Compliance',
    ],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-28 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(180deg, #050a14 0%, #060b18 100%)' }}>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="section-label mb-4">What I Know</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-hero">
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, ci) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.label}
                className="glass-card glow-border p-7 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}>
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-[0.15em] text-ice uppercase">
                    {cat.label}
                  </h3>
                  <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${cat.color}40, transparent)` }} />
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-body font-medium transition-all duration-300"
                      style={{
                        background: `${cat.color}08`,
                        border: `1px solid ${cat.color}20`,
                        color: '#8a9ab5',
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + ci * 0.1 + si * 0.04 }}
                      whileHover={{
                        background: `${cat.color}18`,
                        border: `1px solid ${cat.color}50`,
                        color: cat.color,
                        scale: 1.04,
                        transition: { duration: 0.15 },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tools / certifications row */}
        <motion.div
          className="mt-10 glass-card glow-border p-7"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="font-display text-xs tracking-[0.25em] text-ice-dim uppercase mb-5 text-center">
            Professional Qualifications & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Diploma in Industrial Safety',
              'OISD Standards',
              'PTW Systems',
              'Gas Detector (Multi-Gas)',
              'SCBA Operations',
              'Fire Safety Standards',
              'Risk Matrix',
              'OSHA Regulations',
              'Factory Act',
              'Incident Reporting Tools',
              'JHA/JSA Worksheets',
              'HSE Management Systems',
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-xs font-body text-ice-dim transition-all duration-300 hover:text-cyan-glow cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
