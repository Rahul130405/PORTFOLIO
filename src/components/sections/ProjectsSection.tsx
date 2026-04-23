'use client'

import { useState } from 'react'
import { PROJECTS } from '@/data/portfolio'
import { useTilt, useReveal } from '@/hooks/usePortfolio'
import { Github, ExternalLink } from 'lucide-react'

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const tiltRef = useTilt()

  return (
    <div
      ref={tiltRef}
      className="reveal glass"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        overflow: 'hidden',
        transition: 'border-color 0.4s, box-shadow 0.4s',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'
        e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(108,99,255,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top gradient area */}
      <div style={{ height: 160, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: project.gradient }} />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', background: 'rgba(0,0,0,0.3)', padding: '0.25rem 0.6rem', borderRadius: 6 }}>
          0{index + 1}
        </div>
        {project.highlight && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '0.2rem 0.6rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-jetbrains-mono)' }}>
            {project.highlight}
          </div>
        )}
        <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', fontSize: '2.5rem', transition: 'transform 0.3s' }}>
          {project.emoji}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text)' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          {project.desc}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: 5, background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text3)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text2)', textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: 8, border: '1px solid var(--border)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'; e.currentTarget.style.background = 'rgba(108,99,255,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}>
            <Github size={14} /> GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text2)', textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: 8, border: '1px solid var(--border)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.borderColor = 'rgba(0,212,170,0.4)'; e.currentTarget.style.background = 'rgba(0,212,170,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}>
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))]
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)
  
  useReveal([filtered])

  return (
    <section id="projects" style={{ padding: '8rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.75rem', color: 'var(--accent)', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 100, padding: '0.25rem 1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {'// FEATURED WORK'}
          </span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            <span className="gradient-text-2">PROJECTS</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1rem' }}>Crafted with intention, built with precision.</p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                background: active === cat ? 'var(--accent)' : 'var(--surface)',
                border: `1px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}`,
                color: active === cat ? '#fff' : 'var(--text2)',
                padding: '0.45rem 1.25rem', borderRadius: 100, fontSize: '0.85rem',
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-dm-sans)',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
