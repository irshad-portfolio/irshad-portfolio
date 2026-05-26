'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Target, Award, Users } from 'lucide-react'

const SKILLS = [
  { label: 'Permit-to-Work (PTW) System', pct: 95 },
  { label: 'Risk Assessment & JHA/JSA', pct: 92 },
  { label: 'Fire Safety & Emergency Response', pct: 90 },
  { label: 'Incident Investigation', pct: 88 },
  { label: 'OISD / OSHA Compliance', pct: 85 },
  { label: 'Confined Space Entry Management', pct: 87 },
  { label: 'HSE Audit & Inspections', pct: 93 },
  { label: 'Toolbox Talks & Safety Training', pct: 90 },
]

const STRENGTHS = [
  {
    icon: ShieldCheck,
    title: 'Zero-Incident Record',
    desc: 'Consistently maintained zero major incident outcomes across all projects.',
  },
  {
    icon: Target,
    title: 'Precision Risk Management',
    desc: 'Expert in identifying and mitigating hazards before they become incidents.',
  },
  {
    icon: Award,
    title: 'Certified Professional',
    desc: 'Diploma in Industrial Safety with ongoing professional development.',
  },
  {
    icon: Users,
    title: 'Workforce Safety Culture',
    desc: 'Trained 50+ workers through structured Toolbox Talks and safety programs.',
  },
]

function SkillBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(pct), delay)
      return () => clearTimeout(t)
    }
  }, [inView, pct, delay])

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="font-body text-sm text-ice-dim">{label}</span>
        <span className="font-display text-xs text-cyan-glow">{pct}%</span>
      </div>
      <div className="h-1 bg-navy-light rounded-full overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, #00d4ff, #00a8cc)',
            boxShadow: '0 0 8px rgba(0,212,255,0.5)',
          }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 bg-obsidian overflow-hidden" ref={ref}>
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Get To Know</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-hero">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Avatar placeholder */}
            <div className="relative mb-10 inline-block">
              <div
                className="w-48 h-48 rounded-3xl flex items-center justify-center mx-auto"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(255,107,43,0.08))',
                  border: '1px solid rgba(0,212,255,0.2)',
                }}
              >
                {/* HSE Shield */}
                <svg viewBox="0 0 80 80" className="w-24 h-24" fill="none">
                  <path d="M40 8L12 20v20c0 16.8 11.8 32.5 28 36 16.2-3.5 28-19.2 28-36V20L40 8z"
                    stroke="#00d4ff" strokeWidth="2" fill="rgba(0,212,255,0.08)" />
                  <path d="M28 40l8 8 16-16" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg text-xs font-display tracking-widest"
                style={{ background: 'rgba(255,107,43,0.15)', border: '1px solid rgba(255,107,43,0.3)', color: '#ff6b2b' }}>
                2+ YRS EXP
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-ice mb-4">
              Irshad N
              <span className="text-gradient-cyan ml-3">— HSE Professional</span>
            </h3>

            <p className="font-body text-base text-ice-dim leading-relaxed mb-6">
              A results-driven HSE Officer and Safety Supervisor with proven experience managing safety across
              oil & gas refinery shutdown operations and large-scale IT facility projects. I specialize in
              Permit-to-Work systems, risk assessments, fire safety, and regulatory compliance.
            </p>
            <p className="font-body text-base text-ice-dim leading-relaxed mb-8">
              My most recent role at <span className="text-cyan-glow font-medium">BPCL Kochi Refinery</span> (under
              Shilpi Engineering) during a major shutdown gave me hands-on experience in high-hazard refinery
              environments — managing confined space entries, hot work permits, and coordinating directly
              with BPCL safety teams.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '0', label: 'Major Incidents' },
                { value: '50+', label: 'Workers Trained' },
              ].map(({ value, label }) => (
                <div key={label} className="glass-card glow-border p-4 text-center">
                  <div className="font-display text-2xl font-black text-gradient-cyan mb-1">{value}</div>
                  <div className="font-body text-[11px] text-ice-dim leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – skills + strengths */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-ice mb-6 tracking-wide">
              Core Competency Levels
            </h4>

            {SKILLS.map((s, i) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 100} />
            ))}

            {/* Strengths */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {STRENGTHS.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="glass-card glow-border p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <Icon size={20} className="text-cyan-glow mb-2" />
                  <h5 className="font-display text-xs font-bold text-ice mb-1 tracking-wide">{title}</h5>
                  <p className="font-body text-[11px] text-ice-dim leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
