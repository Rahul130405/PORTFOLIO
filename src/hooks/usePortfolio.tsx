// src/hooks/usePortfolio.ts
'use client'

import { useEffect, useState, useCallback, useRef, createContext, useContext } from 'react'

// ─── Theme Context ──────────────────────────────────────────────────────────
type ThemeContextType = {
  isDark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      setIsDark(false)
      document.documentElement.classList.add('light')
    }
    setMounted(true)
  }, [])

  const toggle = useCallback(() => {
    setIsDark(prev => {
      const next = !prev
      if (next) {
        document.documentElement.classList.remove('light')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.add('light')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// ─── Scroll Progress ────────────────────────────────────────────────────────
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
  
}

// ─── Typing Animation ───────────────────────────────────────────────────────
export function useTyping(phrases: string[], speed = 100, deleteSpeed = 50, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const stateRef = useRef({ phraseIndex: 0, charIndex: 0, deleting: false })

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const tick = () => {
      const { phraseIndex, charIndex, deleting } = stateRef.current
      const phrase = phrases[phraseIndex]

      if (!deleting) {
        setDisplayed(phrase.slice(0, charIndex + 1))
        stateRef.current.charIndex = charIndex + 1
        if (charIndex + 1 === phrase.length) {
          stateRef.current.deleting = true
          timeout = setTimeout(tick, pause)
          return
        }
        timeout = setTimeout(tick, speed)
      } else {
        setDisplayed(phrase.slice(0, charIndex - 1))
        stateRef.current.charIndex = charIndex - 1
        if (charIndex - 1 === 0) {
          stateRef.current.deleting = false
          stateRef.current.phraseIndex = (phraseIndex + 1) % phrases.length
        }
        timeout = setTimeout(tick, deleteSpeed)
      }
    }

    timeout = setTimeout(tick, speed)
    return () => clearTimeout(timeout)
  }, [phrases, speed, deleteSpeed, pause])

  return displayed
}

// ─── Reveal on Scroll ───────────────────────────────────────────────────────
export function useReveal(deps: any[] = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
          }
        })
      },
      { threshold: 0.1 }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach(el => {
      observer.observe(el)
    })
    
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

// ─── GitHub API ────────────────────────────────────────────────────────────
export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`)
      .then(r => r.json())
      .then(data => { setRepos(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [username])

  return { repos, loading }
}

// ─── Mouse Position ────────────────────────────────────────────────────────
export function useMousePosition() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const update = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return pos
}

// ─── Card Tilt Effect ───────────────────────────────────────────────────────
export function useTilt() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(4px)`
    }

    const onLeave = () => {
      el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return ref
}
