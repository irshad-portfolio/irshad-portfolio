'use client'

import { Shield } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-10 border-t border-white/5"
      style={{ background: 'rgba(5,10,20,0.95)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)' }}>
              <Shield size={14} className="text-cyan-glow" />
            </div>
            <span className="font-display text-sm font-bold tracking-[0.15em] text-gradient-cyan">IRSHAD N</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-[11px] font-display tracking-[0.15em] text-ice-dim">
            {['hero','about','experience','projects','skills','contact'].map((id) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-cyan-glow transition-colors uppercase"
              >
                {id === 'projects' ? 'Achievements' : id}
              </button>
            ))}
          </nav>

          {/* Copy */}
          <p className="font-body text-[11px] text-ice-muted text-center">
            © {year} Irshad N · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
