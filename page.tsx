'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import CursorGlow from '@/components/CursorGlow'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Noise texture for cinematic depth */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      <CursorGlow />

      {/* Loading screen */}
      {loading && <LoadingScreen />}

      {/* Main content */}
      <main
        className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
        aria-label="Irshad N Portfolio"
      >
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
