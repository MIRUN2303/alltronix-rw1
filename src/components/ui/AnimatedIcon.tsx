'use client'

import { motion } from 'framer-motion'

interface AnimatedIconProps {
  icon: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AnimatedIcon({
  icon,
  className = '',
  size = 'md',
}: AnimatedIconProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#cc0000]/15 to-[#e60000]/8 border border-[#cc0000]/15 ${sizes[size]} ${className}`}
    >
      <div className="text-[#cc0000]">
        {icon}
      </div>
    </motion.div>
  )
}
