'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const focusedIndustries = [
  {
    name: 'Electromobility',
    slug: 'electromobility',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/emobility.jpg',
    fallbackGradient: 'from-teal-600 to-emerald-800',
    description: 'EV charging infrastructure and power solutions for the electric vehicle ecosystem.',
    accent: '#0d9488',
  },
  {
    name: 'Railway',
    slug: 'railway',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/railway.jpg',
    fallbackGradient: 'from-gray-700 to-gray-900',
    description: 'Specialized products and solutions for railway signaling, communication, and control systems.',
    accent: '#64748b',
  },
  {
    name: 'Renewable',
    slug: 'renewable',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/renewable.jpg',
    fallbackGradient: 'from-yellow-600 to-green-700',
    description: 'Components and systems for solar, wind, and renewable energy applications.',
    accent: '#059669',
  },
  {
    name: 'Defence',
    slug: 'defence',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/defence.jpg',
    fallbackGradient: 'from-green-900 to-gray-800',
    description: 'Rugged and reliable solutions for defence and aerospace applications.',
    accent: '#1e293b',
  },
  {
    name: 'Automation',
    slug: 'automation',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/Factory-Automation.jpg',
    fallbackGradient: 'from-blue-800 to-slate-700',
    description: 'Complete automation solutions for manufacturing and process industries.',
    accent: '#cc0000',
  },
  {
    name: 'Industrial Networking',
    slug: 'industrial-networking',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/industrial-iot.jpg',
    fallbackGradient: 'from-cyan-800 to-blue-900',
    description: 'Comprehensive industrial networking solutions for reliable data communication.',
    accent: '#0891b2',
  },
]

export default function SolutionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 lg:py-28 bg-[#f5f5f5] overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">OUR SOLUTIONS</span>
            <div className="w-10 h-0.5 bg-[#cc0000]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary">
            Focused Industries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            With over three decades of experience, Alltronix delivers engineering excellence across six core industrial sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {focusedIndustries.map((industry, i) => {
            const isHovered = hoveredIndex === i
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Link
                  href={`/solutions#${industry.slug}`}
                  className="relative block rounded-xl overflow-hidden border border-[#e0e0e0] hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
                  style={{ aspectRatio: '4 / 3' }}
                >
                  {/* Background image layer — always present */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.fallbackGradient}`} />
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Text layer — slides out on hover */}
                  <motion.div
                    className="absolute inset-0 z-10 flex flex-col justify-end p-6"
                    initial={false}
                    animate={isHovered ? { y: '-100%', opacity: 0 } : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                    style={{ originY: 0 }}
                  >
                    <div className="absolute inset-0 bg-[#1a1a1a]" />
                    <motion.span
                      className="relative z-10 text-2xl mb-2"
                      animate={isHovered ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                        style={{ backgroundColor: `${industry.accent}30` }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" style={{ color: industry.accent }}>
                          {i === 0 && <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></>}
                          {i === 1 && <><rect x="4" y="9" width="16" height="6" rx="1"/><circle cx="8" cy="15" r="2" fill={industry.accent}/><circle cx="16" cy="15" r="2" fill={industry.accent}/><line x1="4" y1="15" x2="4" y2="19"/><line x1="20" y1="15" x2="20" y2="19"/></>}
                          {i === 2 && <><circle cx="12" cy="12" r="5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></>}
                          {i === 3 && <><path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z"/><path d="M9 12l2 2 4-4"/></>}
                          {i === 4 && <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>}
                          {i === 5 && <><circle cx="12" cy="12" r="3"/><path d="M12 9V5M12 19v-4M15 12h4M5 12h4"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/></>}
                        </svg>
                      </div>
                    </motion.span>
                    <motion.h3
                      className="relative z-10 text-lg font-black text-white"
                      animate={isHovered ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: isHovered ? 0 : 0.05 }}
                    >
                      {industry.name}
                    </motion.h3>
                    <motion.p
                      className="relative z-10 mt-1 text-xs text-white/70 leading-relaxed"
                      animate={isHovered ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: isHovered ? 0.05 : 0.1 }}
                    >
                      {industry.description}
                    </motion.p>
                  </motion.div>

                  {/* Image reveal layer — slides in on hover */}
                  <motion.div
                    className="absolute inset-0 z-20 flex flex-col justify-end p-6"
                    initial={false}
                    animate={isHovered ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Accent bar */}
                    <motion.div
                      className="relative z-10 w-10 h-1 rounded-full mb-3"
                      style={{ backgroundColor: industry.accent }}
                      initial={false}
                      animate={isHovered ? { width: 40, opacity: 1 } : { width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    />

                    <motion.h3
                      className="relative z-10 text-lg font-black text-white"
                      initial={false}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {industry.name}
                    </motion.h3>

                    <motion.div
                      className="relative z-10 mt-3"
                      initial={false}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.25 }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white"
                        style={{ color: industry.accent }}
                      >
                        Explore
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#cc0000] text-white font-semibold rounded-lg hover:bg-[#990000] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#cc0000]/30 text-sm"
          >
            View All Solutions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
