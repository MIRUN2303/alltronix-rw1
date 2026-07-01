'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setPosition({
        x: (e.clientX - rect.left - rect.width / 2) * 0.1,
        y: (e.clientY - rect.top - rect.height / 2) * 0.1,
      })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return
    const rect = buttonRef.current?.getBoundingClientRect()
    if (rect) {
      const ripple = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        id: Date.now(),
      }
      setRipples((prev) => [...prev, ripple])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
      }, 600)
    }
    onClick?.()
  }

  const baseStyles = 'relative inline-flex items-center justify-center font-medium overflow-hidden transition-all duration-300 rounded-xl'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#005bb5] to-[#0072e3] text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5',
    secondary: 'bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#333] hover:border-[#555]',
    outline: 'bg-transparent text-[#005bb5] border border-[#005bb5]/30 hover:bg-red-50 hover:border-[#005bb5]/50',
    ghost: 'bg-transparent text-[#888] hover:text-[#005bb5] hover:bg-red-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-8 py-4 text-lg gap-3',
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-4 h-4 bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 8,
            top: ripple.y - 8,
            animation: 'scale-in 0.6s ease-out forwards',
          }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 rounded-xl bg-white/0 hover:bg-white/10 transition-colors duration-300" />
    </motion.button>
  )
}
