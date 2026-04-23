'use client'

import { PERSONAL, SKILLS, STATS, ACHIEVEMENTS, EXPERIENCE } from '@/data/portfolio'
import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { sendEmail } from '@/app/actions'

// ─── Section Header ─────────────────────────────────────────────────────────
export function SectionHeader({ tag, title, sub }: { tag: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.75rem', color: 'var(--accent)', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 100, padding: '0.25rem 1rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>
        {tag}
      </span>
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
        {title}
      </h2>
      {sub && <p style={{ color: 'var(--text2)', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>{sub}</p>}
    </div>
  )
}

// ─── About ──────────────────────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section id="about" style={{ padding: '8rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader tag="// ABOUT ME" title={<>Building the <span className="gradient-text-2">Future</span></>} sub="Passionate developer blending AI, algorithms, and elegant code." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              I craft intelligent systems that <span className="gradient-text-2">solve real problems.</span>
            </h2>
            {PERSONAL.bio.map((p, i) => (
              <p key={i} style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1rem' }}>{p}</p>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              {[
                { icon: '🤖', title: 'AI & ML', sub: 'LLMs, NLP, intelligent systems' },
                { icon: '⚡', title: 'DSA', sub: 'Algorithms & data structures' },
                { icon: '🌐', title: 'Full Stack', sub: 'REST APIs, MongoDB, backends' },
                { icon: '🎯', title: 'Problem Solver', sub: 'Hackathons & competitive coding' },
              ].map(card => (
                <div key={card.title} className="reveal glass"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', transition: 'all 0.3s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'var(--surface2)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--surface)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{card.icon}</div>
                  <h4 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{card.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text3)' }}>{card.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(108,99,255,0.05), rgba(0,212,170,0.03))', pointerEvents: 'none' }} />
              <div style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.8rem', color: 'var(--text3)', marginBottom: '1.5rem' }}>{'// rahul.config.js'}</div>
              <div style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.85rem', lineHeight: 2 }}>
                <span style={{ color: '#6c63ff' }}>const</span> <span style={{ color: '#00d4aa' }}>developer</span> <span style={{ color: 'var(--text2)' }}>= {'{'}</span><br />
                &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>name</span><span style={{ color: 'var(--text2)' }}>:</span> <span style={{ color: '#ffc400' }}>&apos;Rahul Raj Jaiswal&apos;</span><span style={{ color: 'var(--text2)' }}>,</span><br />
                &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>role</span><span style={{ color: 'var(--text2)' }}>:</span> <span style={{ color: '#ffc400' }}>&apos;CSE Student&apos;</span><span style={{ color: 'var(--text2)' }}>,</span><br />
                &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>passion</span><span style={{ color: 'var(--text2)' }}>:</span> <span style={{ color: '#ffc400' }}>&apos;AI + DSA&apos;</span><span style={{ color: 'var(--text2)' }}>,</span><br />
                &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>available</span><span style={{ color: 'var(--text2)' }}>:</span> <span style={{ color: '#00d4aa' }}>true</span><span style={{ color: 'var(--text2)' }}>,</span><br />
                &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>location</span><span style={{ color: 'var(--text2)' }}>:</span> <span style={{ color: '#ffc400' }}>&apos;India 🇮🇳&apos;</span><br />
                <span style={{ color: 'var(--text2)' }}>{'}'}</span>
              </div>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                {STATS.map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', fontWeight: 800, background: 'linear-gradient(135deg,var(--accent),var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.num}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skills ─────────────────────────────────────────────────────────────────
const BADGE_COLORS: Record<string, { bg: string; border: string; color: string }> = {
  purple: { bg: 'rgba(108,99,255,0.1)', border: 'rgba(108,99,255,0.25)', color: '#9b94ff' },
  teal: { bg: 'rgba(0,212,170,0.1)', border: 'rgba(0,212,170,0.25)', color: '#00d4aa' },
  red: { bg: 'rgba(255,107,107,0.1)', border: 'rgba(255,107,107,0.25)', color: '#ff8f8f' },
  blue: { bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)', color: '#38bdf8' },
}

export function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '8rem 0', background: 'linear-gradient(180deg, transparent, var(--bg2), transparent)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader tag="// TECH STACK" title={<>Skills & <span className="gradient-text-2">Expertise</span></>} sub="Technologies I use to bring ideas to life." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {SKILLS.map(cat => {
            const colors = BADGE_COLORS[cat.color] || BADGE_COLORS.purple
            return (
              <div key={cat.title} className="reveal"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.75rem', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
                  {cat.icon} {cat.title}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.badges.map(badge => (
                    <span key={badge}
                      style={{ display: 'inline-flex', alignItems: 'center', padding: '0.35rem 0.75rem', borderRadius: 8, fontSize: '0.8rem', fontFamily: 'var(--font-jetbrains-mono)', fontWeight: 500, border: '1px solid', background: colors.bg, borderColor: colors.border, color: colors.color, transition: 'transform 0.2s', cursor: 'default' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Achievements ────────────────────────────────────────────────────────────
export function AchievementsSection() {
  return (
    <section id="achievements" style={{ padding: '8rem 0', background: 'linear-gradient(180deg, transparent, var(--bg2), transparent)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader tag="// MILESTONES" title={<>Achievements & <span className="gradient-text-2">Awards</span></>} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, var(--accent), var(--accent2), transparent)' }} />
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="reveal" style={{ paddingLeft: '2.5rem', paddingBottom: '3rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: -6, top: 4, width: 13, height: 13, background: 'var(--accent)', borderRadius: '50%', border: '2px solid var(--bg)', boxShadow: '0 0 15px var(--glow)' }} />
              <div style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{a.year}</div>
              <div
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.5rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateX(8px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)' }}>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{a.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.7 }}>{a.desc}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'linear-gradient(135deg,rgba(255,196,0,0.15),rgba(255,107,107,0.1))', border: '1px solid rgba(255,196,0,0.25)', borderRadius: 8, padding: '0.25rem 0.75rem', fontSize: '0.78rem', color: '#ffc400', marginTop: '0.75rem' }}>
                  {a.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience ──────────────────────────────────────────────────────────────
export function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '8rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader tag="// EXPERIENCE" title={<>Leadership & <span className="gradient-text-2">Responsibility</span></>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="reveal"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg,var(--accent),var(--accent2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
                {exp.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{exp.title}</h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-jetbrains-mono)' }}>{exp.org} · {exp.period}</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.7 }}>{exp.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: 5, background: 'var(--bg2)', color: 'var(--text3)', border: '1px solid var(--border)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ─────────────────────────────────────────────────────────────────
export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleAction(formData: FormData) {
    setStatus('sending')
    const result = await sendEmail(formData)
    if (result.success) {
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
    } else {
      console.error('Submission error:', result.error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" style={{ padding: '8rem 0 6rem' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
        <div className="reveal">
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.75rem', color: 'var(--accent)', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 100, padding: '0.25rem 1rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>
            {'// GET IN TOUCH'}
          </span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Let&apos;s build something <span className="gradient-text-2">together.</span>
          </h2>
          <p style={{ color: 'var(--text2)', marginBottom: '3rem', fontSize: '1rem' }}>
            Have a project in mind or just want to chat? I&apos;m always open to new opportunities and interesting conversations.
          </p>
        </div>

        <form action={handleAction} className="reveal" style={{ display: 'grid', gap: '1rem', textAlign: 'left', marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text3)', fontFamily: 'var(--font-jetbrains-mono)' }}>name</label>
              <input required name="name" type="text" placeholder="Your name" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.75rem 1rem', color: 'var(--text)', fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text3)', fontFamily: 'var(--font-jetbrains-mono)' }}>email</label>
              <input required name="email" type="email" placeholder="your@email.com" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.75rem 1rem', color: 'var(--text)', fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text3)', fontFamily: 'var(--font-jetbrains-mono)' }}>message</label>
            <textarea required name="message" rows={5} placeholder="Tell me about your project..." style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.75rem 1rem', color: 'var(--text)', fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s', resize: 'none' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>
          <button type="submit" disabled={status === 'sending'}
            style={{ 
              background: status === 'success' ? 'linear-gradient(135deg,#00d4aa,#00b89c)' : 
                         status === 'error' ? 'linear-gradient(135deg,#ff6b6b,#ee5253)' :
                         'linear-gradient(135deg,var(--accent),#8b84ff)', 
              color: '#fff', padding: '0.75rem 2rem', borderRadius: 10, border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontWeight: 500, fontSize: '0.9rem', fontFamily: 'var(--font-dm-sans)', transition: 'all 0.3s', boxShadow: '0 0 30px var(--glow)', opacity: status === 'sending' ? 0.7 : 1 
            }}>
            {status === 'sending' ? 'Sending...' : 
             status === 'success' ? 'Message Sent! ✓' : 
             status === 'error' ? 'Error Sending! ✗' : 
             'Send Message →'}
          </button>
        </form>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { href: `mailto:${PERSONAL.email}`, icon: <Mail size={16} />, label: 'Email' },
            { href: PERSONAL.github, icon: <Github size={16} />, label: 'GitHub' },
            { href: PERSONAL.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text2)', textDecoration: 'none', fontSize: '0.85rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(108,99,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.background = 'var(--surface)' }}>
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
