import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/hooks/usePortfolio'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rahulraj.dev'),
  title: 'Rahul Raj Jaiswal — CSE Student | AI Enthusiast | Problem Solver',
  description: 'Portfolio of Rahul Raj Jaiswal — CSE student passionate about AI, DSA, and Full Stack Development. Building intelligent systems that solve real problems.',
  keywords: ['Rahul Raj Jaiswal', 'CSE Student', 'AI', 'Machine Learning', 'Full Stack Developer', 'DSA', 'Portfolio'],
  authors: [{ name: 'Rahul Raj Jaiswal' }],
  creator: 'Rahul Raj Jaiswal',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rahulraj.dev',
    title: 'Rahul Raj Jaiswal — Developer Portfolio',
    description: 'CSE Student | AI Enthusiast | Problem Solver',
    siteName: 'Rahul Raj Jaiswal Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Raj Jaiswal — Developer Portfolio',
    description: 'CSE Student | AI Enthusiast | Problem Solver',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
