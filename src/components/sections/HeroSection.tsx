'use client'

import { useTyping, useTheme } from '@/hooks/usePortfolio'
import { PERSONAL, TYPING_PHRASES } from '@/data/portfolio'
import { Github, Linkedin } from 'lucide-react'

export default function HeroSection() {
  const typed = useTyping(TYPING_PHRASES)
  const { isDark } = useTheme()

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem', overflow: 'hidden', position: 'relative' }}
    >
      {/* Light Mode Only Background - Ultra Clean SaaS Style */}
      {!isDark && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', width: '70%', height: '70%', borderRadius: '50%', background: 'rgba(224, 242, 254, 0.25)', top: '-20%', right: '-10%', filter: 'blur(120px)', animation: 'float 20s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', background: 'rgba(245, 243, 255, 0.25)', bottom: '-10%', left: '-5%', filter: 'blur(120px)', animation: 'float 25s ease-in-out infinite reverse' }} />
        </div>
      )}

      <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* Name */}
        <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '0.04em', marginBottom: '1rem', animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>Rahul Raj</span>
          <span className="gradient-text" style={{ display: 'block' }}>Jaiswal</span>
        </h1>

        {/* Tagline */}
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text2)', marginBottom: '0.5rem', fontWeight: 300, animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          {PERSONAL.tagline}
        </p>

        {/* Typing */}
        <div style={{ height: '2.5rem', marginBottom: '2.5rem', animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <span style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.95rem', color: 'var(--accent2)', background: 'rgba(0,212,170,0.08)', padding: '0.25rem 0.75rem', borderRadius: 6, border: '1px solid rgba(0,212,170,0.2)' }}>
            {typed}
            <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent2)' }}>|</span>
          </span>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <a href="#projects" style={{ background: 'linear-gradient(135deg,var(--accent),#8b84ff)', color: '#fff', padding: '0.75rem 2rem', borderRadius: 10, textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.02em', boxShadow: '0 0 30px var(--glow)', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px var(--glow)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px var(--glow)' }}>
            View Projects →
          </a>
          <a href="#contact" style={{ background: 'transparent', color: 'var(--text)', padding: '0.75rem 2rem', borderRadius: 10, textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', border: '1px solid var(--border2)', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(108,99,255,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'transparent' }}>
            Contact Me
          </a>
        </div>

        {/* Socials */}
        <div style={{ display: 'flex', gap: '1rem', animation: 'fadeUp 0.6s 0.5s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          {[
            { href: PERSONAL.github, icon: <Github size={18} />, label: 'GitHub' },
            { href: PERSONAL.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text3)', textDecoration: 'none', fontSize: '0.85rem', padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid transparent', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'var(--surface)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'transparent' }}>
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text3)', fontSize: '0.75rem' }}>
        <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scrollLine 2s ease infinite' }} />
        <span style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>scroll</span>
      </div>
    </section>
  )
}
