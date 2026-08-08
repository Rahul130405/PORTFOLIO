'use client'

import { useScrollProgress } from '@/hooks/usePortfolio'
import { PERSONAL } from '@/data/portfolio'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const progress = useScrollProgress()

  return (
    <>
      <div
        id="progress-bar"
        style={{
          position: 'fixed', top: 0, left: 0, height: 2,
          background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          width: `${progress}%`, zIndex: 9999, transition: 'width 0.05s',
        }}
      />
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '1rem 2rem', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          background: 'rgba(5,5,10,0.75)',
          borderBottom: '1px solid var(--border)',
          transition: 'all 0.3s',
        }}
      >
        <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.2rem', background: 'linear-gradient(135deg,var(--accent),var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', justifySelf: 'start' }}>
          {PERSONAL.shortName}
        </span>

        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-desktop">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{ color: 'var(--text2)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 400, letterSpacing: '0.02em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div /> {/* Spacer for symmetry */}
      </nav>
    </>
  )
}
