'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'

const EXPERIENCE = [
  {
    type: 'work',
    role: 'Safety Supervisor / Safety Officer',
    company: 'Shilpi Engineering',
    project: 'BPCL Kochi Refinery Shutdown',
    location: 'Kochi, Kerala',
    period: 'July 2024 – December 2024',
    color: '#ff6b2b',
    badge: 'Oil & Gas',
    points: [
      'Managed all shutdown/turnaround safety at BPCL Kochi Refinery including hot work, confined space, and electrical isolation PTW.',
      'Conducted JHA and risk assessments for all critical shutdown tasks applying ALARP principles.',
      'Coordinated with BPCL safety team in daily HSE meetings and site inspections.',
      'Supervised atmospheric monitoring, gas detection, and standby arrangements for confined space operations.',
      'Maintained OISD standard compliance and submitted daily HSE inspection reports.',
      'Achieved zero LTI (Lost Time Injury) across the entire shutdown duration.',
    ],
  },
  {
    type: 'work',
    role: 'HSE / Fire Safety Officer',
    company: 'DLF IT Park',
    project: '',
    location: 'Chennai, Tamil Nadu',
    period: 'October 2022 – March 2024',
    color: '#00d4ff',
    badge: 'Facility Management',
    points: [
      'Conducted HSE inspections and safety audits across the IT park premises ensuring national regulatory compliance.',
      'Performed JHA and PHA to proactively identify risks and implement control measures.',
      'Delivered weekly Toolbox Talks to 50+ on-site employees, improving safety awareness.',
      'Inspected, tested, and maintained fire extinguishers and suppression systems per applicable standards.',
      'Developed preventive, corrective, and mitigation plans to support zero-incident targets.',
      'Organized emergency drills and fire evacuation exercises to ensure workforce preparedness.',
    ],
  },
]

const EDUCATION = [
  { degree: 'Diploma in Industrial Safety', year: '2020 – 2021', highlight: true },
  { degree: "Bachelor's Degree", year: 'Graduated' },
  { degree: 'Plus Two (Higher Secondary)', year: 'Class XII' },
  { degree: 'SSLC', year: 'Class X' },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-28 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(180deg, #050a14 0%, #070d1a 100%)' }}>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-15" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,43,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="section-label mb-4">Career Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-hero">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Work experience – 3 cols */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-10">
              <Briefcase size={18} className="text-amber-glow" />
              <h3 className="font-display text-sm tracking-[0.2em] text-ice uppercase">Work Experience</h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, #00d4ff 20%, #ff6b2b 80%, transparent)' }} />

              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  className="relative mb-12 last:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-8 top-1 w-3 h-3 rounded-full border-2 border-obsidian"
                    style={{
                      background: exp.color,
                      boxShadow: `0 0 12px ${exp.color}80`,
                      transform: 'translateX(calc(-50% + 0.5px))',
                    }}
                  />

                  {/* Card */}
                  <div className="glass-card glow-border p-6">
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h4 className="font-display text-base font-bold text-ice">{exp.role}</h4>
                        <p className="font-body text-sm font-semibold mt-0.5" style={{ color: exp.color }}>
                          {exp.company}
                          {exp.project && (
                            <span className="text-ice-dim font-normal"> · {exp.project}</span>
                          )}
                        </p>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-display tracking-widest shrink-0"
                        style={{
                          background: `${exp.color}15`,
                          border: `1px solid ${exp.color}40`,
                          color: exp.color,
                        }}
                      >
                        {exp.badge}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-ice-dim">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-cyan-glow/60" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-cyan-glow/60" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2">
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-sm text-ice-dim font-body leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education – 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap size={18} className="text-cyan-glow" />
              <h3 className="font-display text-sm tracking-[0.2em] text-ice uppercase">Education</h3>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  className="glass-card glow-border p-5"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: edu.highlight ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.04)', border: `1px solid ${edu.highlight ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.08)'}` }}>
                      <GraduationCap size={14} className={edu.highlight ? 'text-cyan-glow' : 'text-ice-dim'} />
                    </div>
                    <div>
                      <p className={`font-display text-sm font-bold ${edu.highlight ? 'text-gradient-cyan' : 'text-ice'}`}>
                        {edu.degree}
                      </p>
                      <p className="font-body text-xs text-ice-dim mt-1">{edu.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages card */}
            <motion.div
              className="glass-card glow-border p-5 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h4 className="font-display text-xs tracking-[0.2em] text-ice mb-4 uppercase">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['English', 'Malayalam', 'Hindi', 'Tamil'].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 rounded-lg text-xs font-display tracking-wide text-ice-dim"
                    style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)' }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
