'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { PERSONAL } from '@/data/portfolio'
import { sendEmail } from '@/app/actions'
import { useReveal } from '@/hooks/usePortfolio'
import { Mail, Github, Linkedin, Code, ArrowLeft } from 'lucide-react'

export default function ContactView() {
  useReveal()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleAction(formData: FormData) {
    setStatus('sending')
    const result = await sendEmail(formData)
    if (result.success) {
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } else {
      console.error('Submission error:', result.error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const socialLinks = [
    { href: `mailto:${PERSONAL.email}`, icon: <Mail size={16} />, label: 'Email', value: PERSONAL.email },
    { href: PERSONAL.github, icon: <Github size={16} />, label: 'GitHub', value: 'Rahul130405' },
    { href: PERSONAL.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn', value: 'rahulrajjaiswal' },
    { href: PERSONAL.leetcode, icon: <Code size={16} />, label: 'LeetCode', value: '200+ Solved' },
  ]

  return (
    <section id="contact-page" style={{ maxWidth: 760, margin: '0 auto' }}>
      {/* Back to Portfolio Link */}
      <div className="reveal" style={{ marginBottom: '2.5rem' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text2)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-jetbrains-mono)',
            padding: '0.5rem 1rem',
            borderRadius: 8,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.borderColor = 'var(--border2)'
            e.currentTarget.style.transform = 'translateX(-3px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text2)'
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.transform = 'translateX(0)'
          }}
        >
          <ArrowLeft size={15} />
          Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.75rem',
            color: 'var(--accent)',
            background: 'rgba(201,162,39,0.1)',
            border: '1px solid rgba(201,162,39,0.25)',
            borderRadius: 100,
            padding: '0.25rem 1rem',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
          }}
        >
          GET IN TOUCH
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            color: 'var(--text)',
          }}
        >
          Let&apos;s Work <span className="gradient-text-2">Together.</span>
        </h1>
        <p
          style={{
            color: 'var(--text2)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: 580,
            margin: '0 auto',
          }}
        >
          Have a project in mind, an engineering role or internship to discuss, or looking to collaborate? Drop a message below or connect directly across platforms.
        </p>
      </div>

      {/* Form Card */}
      <div
        className="reveal glass"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          padding: '2.5rem',
          marginBottom: '3rem',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
        }}
      >
        <form ref={formRef} action={handleAction} style={{ display: 'grid', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text3)', fontFamily: 'var(--font-jetbrains-mono)' }}>
                name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                style={{
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: '0.85rem 1rem',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text3)', fontFamily: 'var(--font-jetbrains-mono)' }}>
                email
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="your@email.com"
                style={{
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: '0.85rem 1rem',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text3)', fontFamily: 'var(--font-jetbrains-mono)' }}>
              message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about your project, opportunity, or collaboration idea..."
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '0.85rem 1rem',
                color: 'var(--text)',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.92rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                resize: 'none',
              }}
              onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              background:
                status === 'success'
                  ? 'linear-gradient(135deg,#00d4aa,#00b89c)'
                  : status === 'error'
                  ? 'linear-gradient(135deg,#ff6b6b,#ee5253)'
                  : 'linear-gradient(135deg,var(--accent),#8b84ff)',
              color: '#fff',
              padding: '0.9rem 2rem',
              borderRadius: 10,
              border: 'none',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              fontWeight: 500,
              fontSize: '0.95rem',
              fontFamily: 'var(--font-dm-sans)',
              transition: 'all 0.3s',
              boxShadow: '0 0 30px var(--glow)',
              opacity: status === 'sending' ? 0.7 : 1,
            }}
          >
            {status === 'sending'
              ? 'Sending...'
              : status === 'success'
              ? 'Message Sent! ✓'
              : status === 'error'
              ? 'Error Sending! ✗'
              : 'Send Message →'}
          </button>
        </form>
      </div>

      {/* Direct Social / Platform Links */}
      <div className="reveal" style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.78rem',
            color: 'var(--text3)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1.25rem',
          }}
        >
          Or connect directly via
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
          {socialLinks.map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.label === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1.25rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                color: 'var(--text2)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-dm-sans)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.background = 'var(--surface2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text2)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'var(--surface)'
              }}
            >
              <span style={{ color: 'var(--accent)' }}>{s.icon}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
