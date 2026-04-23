'use client'

import React from 'react'
import { useTheme } from '@/hooks/usePortfolio'

const Background: React.FC = () => {
  const { isDark } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (!isDark) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
      {/* Base Gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, #0a0f1f 0%, #050505 100%)'
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(rgba(112, 0, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(112, 0, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Enhanced Neon Glows */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-30 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #7000ff 0%, transparent 70%)',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-[10%] -right-[15%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #00f2ff 0%, transparent 70%)',
          animation: 'float 25s ease-in-out infinite reverse'
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #7000ff 0%, transparent 70%)',
          animation: 'float 18s ease-in-out infinite 5s'
        }}
      />

      {/* Moving Neon Beam */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#00f2ff] to-transparent blur-[2px]"
          style={{
            left: '30%',
            animation: 'scan 12s linear infinite'
          }}
        />
        <div 
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#7000ff] to-transparent blur-[1px]"
          style={{
            top: '60%',
            animation: 'scanHorizontal 15s linear infinite'
          }}
        />
      </div>

      {/* Light Streaks / Waves */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#7000ff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 40 Q 25 20 50 40 T 100 40" 
            fill="none" 
            stroke="url(#wave-grad-1)" 
            strokeWidth="0.08"
            className="animate-wave"
          />
          <path 
            d="M 0 70 Q 30 50 60 70 T 100 70" 
            fill="none" 
            stroke="url(#wave-grad-1)" 
            strokeWidth="0.04"
            className="animate-wave-slow"
          />
        </svg>
      </div>

      {/* Subtle Particles / Glowing Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              background: i % 2 === 0 ? '#00f2ff' : '#7000ff',
              boxShadow: `0 0 10px ${i % 2 === 0 ? '#00f2ff' : '#7000ff'}`,
              opacity: Math.random() * 0.4 + 0.1,
              animation: `pulse-glow ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100vw) skewX(-20deg); }
          100% { transform: translateX(100vw) skewX(-20deg); }
        }
        @keyframes scanHorizontal {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        @keyframes wave {
          0% { transform: translateX(-5%) translateY(0); }
          50% { transform: translateX(5%) translateY(2%); }
          100% { transform: translateX(-5%) translateY(0); }
        }
        .animate-wave {
          animation: wave 20s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: wave 30s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  )
}

export default Background
