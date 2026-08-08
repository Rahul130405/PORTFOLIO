'use client'

import { PERSONAL } from '@/data/portfolio'
import { Github, Linkedin, Mail, Code } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        alignItems: 'center',
        gap: '4vw',
        padding: '5rem 6vw 0',
        position: 'relative',
      }}
      className="hero-grid"
    >
      {/* Left column */}
      <div style={{ padding: '8vh 0' }}>
        <h1 style={{
          fontFamily: 'var(--font-syne)', fontWeight: 500, fontSize: 'clamp(2rem, 4vw, 3.4rem)',
          lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--text)', marginBottom: 20,
          animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, whiteSpace: 'nowrap',
        }}>
          Rahul Raj <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Jaiswal</em>
        </h1>

        <div style={{
          fontFamily: 'var(--font-jetbrains-mono)', fontSize: 14, color: 'var(--text2)',
          marginBottom: 28, animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0,
        }}>
          Machine Learning Developer <span style={{ color: 'var(--text3)' }}>·</span> Full Stack Developer <span style={{ color: 'var(--text3)' }}>·</span> StartIQOS AI
        </div>

        <p style={{
          fontSize: 16.5, lineHeight: 1.7, color: 'var(--text2)', maxWidth: '34ch', marginBottom: 44,
          animation: 'fadeUp 0.6s 0.35s ease both', opacity: 0,
        }}>
          I build AI systems and full-stack products end to end — from Swin Transformer
          diagnostics at 95.8% accuracy to production-grade backends. First-principles,
          not frameworks-first.
        </p>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 32, marginBottom: 64,
          animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0,
        }}>
          <a href="#projects" style={{
            fontFamily: 'var(--font-dm-sans)', fontWeight: 500, fontSize: 14.5, color: 'var(--bg)',
            background: 'var(--text)', padding: '13px 26px', borderRadius: 2, textDecoration: 'none',
            transition: 'background .2s ease, transform .2s ease', display: 'inline-block',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.transform = 'translateY(0)' }}>
            View projects
          </a>
          <a href="#contact" style={{
            fontFamily: 'var(--font-dm-sans)', fontSize: 14.5, color: 'var(--text2)', textDecoration: 'none',
            borderBottom: '1px solid var(--border2)', paddingBottom: 2, transition: 'color .2s ease, border-color .2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text2)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border2)' }}>
            Get in touch
          </a>
        </div>

        <div style={{
          display: 'flex', gap: 24, fontFamily: 'var(--font-jetbrains-mono)', fontSize: 12,
          letterSpacing: '0.06em', textTransform: 'uppercase', animation: 'fadeUp 0.6s 0.5s ease both', opacity: 0,
        }}>
          {[
            { href: PERSONAL.github, icon: <Github size={13} />, label: 'GitHub' },
            { href: PERSONAL.linkedin, icon: <Linkedin size={13} />, label: 'LinkedIn' },
            { href: PERSONAL.leetcode, icon: <Code size={13} />, label: 'LeetCode' },
            { href: `mailto:${PERSONAL.email}`, icon: <Mail size={13} />, label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text3)', textDecoration: 'none',
              transition: 'color .2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)' }}>
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right column — signature node graph */}
      <div className="hero-graph" style={{ height: '78vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', maxWidth: 520 }} xmlns="http://www.w3.org/2000/svg">
          <path className="edge pulse d1" d="M80,90 L200,60" />
          <path className="edge pulse d2" d="M200,60 L330,110" />
          <path className="edge" d="M80,90 L150,200" />
          <path className="edge pulse d3" d="M150,200 L330,110" />
          <path className="edge" d="M150,200 L100,320" />
          <path className="edge pulse d1" d="M150,200 L280,300" />
          <path className="edge" d="M330,110 L280,300" />
          <path className="edge" d="M100,320 L280,300" />
          <path className="edge pulse d2" d="M200,60 L150,200" />

          <circle className="node lit" cx="80" cy="90" r="4.5" />
          <circle className="node" cx="200" cy="60" r="4.5" />
          <circle className="node lit" cx="330" cy="110" r="4.5" />
          <circle className="node" cx="150" cy="200" r="5.5" />
          <circle className="node" cx="100" cy="320" r="4.5" />
          <circle className="node lit" cx="280" cy="300" r="4.5" />
        </svg>
        <div style={{
          position: 'absolute', bottom: '6vh', right: 0, fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: 11.5, color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
        </div>
      </div>

      <style jsx>{`
        .edge { stroke: var(--border2); stroke-width: 1; fill: none; }
        .edge.pulse { stroke: var(--accent2); stroke-width: 1; opacity: 0.55; animation: pulseEdge 4.5s ease-in-out infinite; }
        .edge.pulse.d1 { animation-delay: 0.4s; }
        .edge.pulse.d2 { animation-delay: 1.6s; }
        .edge.pulse.d3 { animation-delay: 2.8s; }
        .node { fill: var(--text3); }
        .node.lit { fill: var(--accent); }
        @keyframes pulseEdge { 0%, 100% { opacity: 0.12; } 50% { opacity: 0.7; } }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-graph { height: 38vh !important; order: -1; }
        }
      `}</style>
    </section>
  )
}
