import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        obsidian: '#050a14',
        navy: '#0a1628',
        'navy-light': '#0f2040',
        'navy-card': '#091830',
        // Accents
        cyan: {
          glow: '#00d4ff',
          mid: '#00a8cc',
          dim: '#006b8a',
        },
        amber: {
          glow: '#ff6b2b',
          mid: '#e05520',
          dim: '#8a3010',
        },
        // Text
        'ice': '#e0e8f7',
        'ice-dim': '#8a9ab5',
        'ice-muted': '#4a5a75',
      },
      fontFamily: {
        display: ['var(--font-orbitron)', 'monospace'],
        body: ['var(--font-exo)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,255,0.15), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(255,107,43,0.02))',
        'glow-cyan': 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)',
        'glow-amber': 'radial-gradient(circle, rgba(255,107,43,0.3) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)',
        'amber-glow': '0 0 30px rgba(255,107,43,0.3)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(0,212,255,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
