'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  tilt?: boolean
  onClick?: () => void
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = true,
  tilt = false,
  onClick,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tilt || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX((y - centerY) / 20)
    setRotateY((x - centerX) / 20)
    setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlowPosition({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-subtle bg-white backdrop-blur-xl ${hover ? 'hover:border-[#005bb5]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-500' : ''} ${className}`}
      style={{
        transform: tilt ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
        transition: 'transform 0.1s ease-out',
      }}
      whileHover={hover ? { y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' } : undefined}
    >
      {glow && (
        <div
          className="absolute -inset-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(204,0,0,0.04), transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
