import type { Metadata } from 'next'
import Background from '@/components/layout/Background'
import Navbar from '@/components/layout/Navbar'
import ContactView from '@/components/sections/ContactView'

export const metadata: Metadata = {
  title: 'Contact — Rahul Raj Jaiswal | Machine Learning & Full Stack Developer',
  description: "Get in touch with Rahul Raj Jaiswal. Let's discuss machine learning systems, full stack engineering, internships, and technical collaboration.",
  alternates: {
    canonical: 'https://rrj-portfolio.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact — Rahul Raj Jaiswal',
    description: "Get in touch with Rahul Raj Jaiswal for projects, internships, and technical collaborations.",
    url: 'https://rrj-portfolio.vercel.app/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Rahul Raj Jaiswal',
    description: "Get in touch with Rahul Raj Jaiswal for projects, internships, and technical collaborations.",
  },
}

export default function ContactPage() {
  return (
    <>
      <Background />
      <Navbar />

      <main style={{ minHeight: 'calc(100vh - 120px)', padding: '7.5rem 1.5rem 4rem' }}>
        <ContactView />
      </main>

      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--text3)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-jetbrains-mono)',
        }}
      >
        Designed & Built by{' '}
        <span style={{ color: 'var(--accent)' }}>Rahul Raj Jaiswal</span>
        {' '}· {new Date().getFullYear()}
      </footer>
    </>
  )
}
