'use client'

import { useState } from 'react'
import { PROJECTS } from '@/data/portfolio'
import { useReveal } from '@/hooks/usePortfolio'
import { Github } from 'lucide-react'

export default function ProjectsSection() {
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))]
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)
  
  useReveal([filtered])

  return (
    <section id="projects" style={{ padding: '10rem 6vw' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Selected work
          </h2>
          <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--border2)', paddingBottom: '1rem' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)', fontSize: 13,
                  color: active === cat ? 'var(--accent)' : 'var(--text3)',
                  cursor: 'pointer', transition: 'color .2s ease', textTransform: 'uppercase',
                  background: 'none', border: 'none', padding: 0,
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column' }}>
          {filtered.map((p) => (
            <div key={p.id} className="project-row" style={{
              display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', alignItems: 'center',
              padding: '2.5rem 0', borderBottom: '1px solid var(--border)',
              transition: 'border-color .2s ease',
            }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: 18, color: 'var(--text)' }}>{p.title}</div>
              <div style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.6 }}>{p.desc}</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text3)' }}><Github size={18} /></a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontSize: 13, fontFamily: 'var(--font-jetbrains-mono)' }}>View live →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-row:hover { border-color: var(--accent); }
      `}</style>
    </section>
  )
}
