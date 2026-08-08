'use client'

import { useEffect } from 'react'
import { useReveal } from '@/hooks/usePortfolio'
import Navbar from '@/components/layout/Navbar'
import Background from '@/components/layout/Background'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import {
  AboutSection,
  SkillsSection,
  EducationSection,
  AchievementsSection,
  ExperienceSection,
  ContactSection,
} from '@/components/sections/OtherSections'

export default function Home() {
  useReveal()

  useEffect(() => {
    // Scroll to top on refresh/mount
    window.scrollTo(0, 0)
    
    // Force browser to ignore previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <>
      <Background />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem',
        textAlign: 'center',
        color: 'var(--text3)',
        fontSize: '0.8rem',
        fontFamily: 'var(--font-jetbrains-mono)',
      }}>
        Designed & Built by{' '}
        <span style={{ color: 'var(--accent)' }}>Rahul Raj Jaiswal</span>
        {' '}· {new Date().getFullYear()}
      </footer>
    </>
  )
}
