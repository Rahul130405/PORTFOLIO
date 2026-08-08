'use client'

import React from 'react'

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
      {/* Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--bg2) 0%, var(--bg) 100%)'
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--text3) 1px, transparent 1px),
                            linear-gradient(90deg, var(--text3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}

export default Background
