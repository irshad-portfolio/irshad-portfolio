'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'done'>('loading')

  useEffect(() => {
    // Simulate loading progress
    const steps = [20, 45, 65, 80, 92, 100]
    let i = 0
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i])
        i++
      } else {
        clearInterval(interval)
        setPhase('done')
      }
    }, 420)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Scan line */}
          <div className="scan-line" />

          {/* Grid background */}
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-glow/10 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-glow/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

          {/* Logo / Name */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* HSE shield icon */}
            <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-2xl border border-cyan-glow/30"
              style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(255,107,43,0.05))' }}>
              <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                <path d="M20 4L6 10v10c0 8.4 5.9 16.3 14 18 8.1-1.7 14-9.6 14-18V10L20 4z"
                  stroke="#00d4ff" strokeWidth="1.5" fill="rgba(0,212,255,0.1)" />
                <path d="M14 20l4 4 8-8" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h1 className="font-display text-3xl font-bold tracking-[0.2em] text-gradient-hero mb-2">
              IRSHAD N
            </h1>
            <p className="font-body text-sm tracking-[0.4em] text-ice-dim uppercase">
              HSE Officer & Safety Supervisor
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-72 md:w-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Progress text */}
            <div className="flex justify-between mb-2">
              <span className="font-display text-xs text-ice-dim tracking-widest">INITIALIZING</span>
              <span className="font-display text-xs text-cyan-glow">{progress}%</span>
            </div>

            {/* Bar track */}
            <div className="h-[2px] bg-navy-light rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #ff6b2b)',
                  boxShadow: '0 0 10px rgba(0,212,255,0.8)',
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            {/* Status messages */}
            <div className="mt-4 font-display text-[10px] tracking-widest text-ice-muted">
              {progress < 40 && '> LOADING SAFETY PROTOCOLS...'}
              {progress >= 40 && progress < 70 && '> VERIFYING CERTIFICATIONS...'}
              {progress >= 70 && progress < 90 && '> CALIBRATING RISK MATRIX...'}
              {progress >= 90 && '> READY_'}
              <span className="loading-text-blink">|</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
