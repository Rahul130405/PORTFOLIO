import type { Metadata } from 'next'
import { Fraunces, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
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
  metadataBase: new URL('https://rrj-portfolio.vercel.app'),
  title: 'Rahul Raj Jaiswal — Machine Learning Developer | Full Stack Developer',
  description: 'Portfolio of Rahul Raj Jaiswal — Machine Learning Developer & Full Stack Developer. Building intelligent AI systems, computer vision models, scalable backends, and production-ready software.',
  keywords: ['Rahul Raj Jaiswal', 'Machine Learning Developer', 'Full Stack Developer', 'Software Engineer', 'AI', 'Deep Learning', 'PyTorch', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Rahul Raj Jaiswal' }],
  creator: 'Rahul Raj Jaiswal',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rrj-portfolio.vercel.app',
    title: 'Rahul Raj Jaiswal — Machine Learning Developer | Full Stack Developer',
    description: 'Machine Learning Developer | Full Stack Developer · Software Engineer — Core Team at StartIQOS AI',
    siteName: 'Rahul Raj Jaiswal Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Raj Jaiswal — Machine Learning Developer | Full Stack Developer',
    description: 'Machine Learning Developer | Full Stack Developer · Software Engineer — Core Team at StartIQOS AI',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
